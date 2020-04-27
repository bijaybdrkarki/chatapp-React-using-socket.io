const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const socketio = require('socket.io');
const http = require('http')
const { addUser, removeUser, getUser, getallUsers } = require('./users.js');


const port = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server)


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


io.on('connection', (socket)=> {
    console.log(`user connected ${socket.id}`);

        socket.on('join',({userid}, callback)=>{
          console.log(userid);
          let allusers = getallUsers() // get all users from user array
          // console.log(allusers); 
          if(allusers) // if any user exits
          {
            let exits = 0;
            // from all users check if user with 'userid' already in users array
            for(let i = 0; i < allusers.length; i++)
            {
              if(allusers[i].userid === userid)
              {
                exits = 1;
                socket.emit('users', allusers); // if already exits emit all user to self
                break; 
              }
            }
              
            if (exits!==1)
            {
             // if user doesnot exits, add the user and broadcast user has been added
              const {error, user} = addUser({id : socket.id, userid})
              if(error) return callback(error) 
              else{
                socket.broadcast.emit('users', allusers); 
                socket.emit('users', allusers);
              }
            }

          }
          // no user exits in user array means add new user
          else
          {
            const {error, user} = addUser({id : socket.id, userid})
              if(error) return callback(error) 
              socket.emit('users', user);
          }
          
        })
      
        socket.on('sendmessage',(message, receiverid)=>{
            const sender = getUser(socket.id);
            const receiver = getUser(receiverid);
            socket.broadcast.to(receiverid).emit('privatemessg', {message, receiver, sender});
        })

        socket.on('disconnect',()=>{
            console.log(`user disconnected ${socket.id}`);
            const user = removeUser(socket.id)
            // if user is removed then send new all users to remaining users
            if (user){
              let allusers = getallUsers();
              socket.broadcast.emit('users', allusers)
            }
        })
});


if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
    
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

server.listen(port, () => console.log(`Listening on port ${port}`));