const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const socketio = require('socket.io');
const http = require('http')

const port = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server)


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


io.on('connection', (socket)=> {
    console.log('user connected');

        socket.on('join',({userid})=>{
            console.log(userid);
        })

        socket.on('disconnect',()=>{
            console.log('user disconnected');
        })
});
// API calls
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/', (req, res) => {
  console.log(req.body);
  
  
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