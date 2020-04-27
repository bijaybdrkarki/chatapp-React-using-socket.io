const users = [];

const addUser = ({id, userid }) => {
 // remove spaces in name and make all of them lowercase
 
  userid = userid.trim().toLowerCase();
    const existUser = users.find((user)=> user.id === id);

    if(existUser){
        return ( { error: 'User is already logged in'})
    }

    const user = {id , userid };

    users.push(user);

    return { user }
}

const removeUser = (id) =>{
    const index = users.findIndex((user)=> user.id === id);

    if (index !== -1){
        return users.splice(index, 1)[0];
    }

}
const getUser = (id) => { 
   let founduser = users.find((user)=> user.id=== id);
   if(founduser)
   {
    return founduser.userid
   } 
   
}

const getallUsers =()=>{
    return users
}

module.exports = {addUser, removeUser, getUser, getallUsers};