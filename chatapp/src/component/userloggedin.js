import React, {useState, useEffect, useContext} from 'react';
import HeaderSidebar from './headerSidebar';
import Mainbody from './mainbody';
import * as io from 'socket.io-client';
import {userId} from '../App';


let socket;

const UserLoggedin = () => { 
    
    const [menuclass, setmenuclass] = useState('others'); 
    let userid = useContext(userId);
    

    useEffect(()=>{
      socket = io('localhost:5000');
      console.log(socket);
      return(()=>{
          socket.emit('disconnect');
          socket.off();
      })
  },[userid])
    
    function menu(){
      if (menuclass === 'others')
      {
        setmenuclass('others open');
      }
      else
      {
        setmenuclass('others');
      }
    }
    return (
     <>
        <HeaderSidebar menuclass={menuclass} menu={menu} />
        <Mainbody menuclass={menuclass} socket={socket} />
      </>
)}

export default UserLoggedin;

