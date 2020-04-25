import React, {useEffect, useContext} from 'react';
import './chat.css';
import io from 'socket.io-client';
import {userId} from '../App';


let socket;
const Chat = () => {

    let userid = useContext(userId);
    useEffect(()=>{
        socket = io('localhost:5000');
        console.log(socket);

        socket.emit('join', {userid})

        return(()=>{
            socket.emit('disconnect');
            socket.off();
        })
      },[userid])
    
    return (
       <p>chat page</p>
    )
}

export default Chat;