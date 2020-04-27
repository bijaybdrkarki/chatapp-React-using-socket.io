import React, {useState, useEffect, useContext} from 'react';
import './chat.css';
import {userId} from '../App';

const Chat = (props) => {
    const [allmessages, setallmessages]= useState([])
    const [Rmessg, setRmessg]= useState({});
    const [users, setusers]= useState([]);
    const [Smessg, setSmessg]= useState('');
    const [recieverid, setrecieverid]= useState('')
    
    let userid = useContext(userId);
    
    let socket= props.socket;
    // console.log(socket);
    
    useEffect(()=>{
        socket.emit('join', {userid},()=>{})
        socket.on('users',(data)=>{
            // console.log(data);
            setusers(data)
        })
    },[userid])

    useEffect(()=>{
        socket.emit('sendmessage',{Smessg},`${recieverid}`)
        socket.on('privatemessg',(mes)=>{
           console.log(mes)
            setRmessg(mes)
            allmessages.push(mes);
        })
    }, [Smessg])
    
    let typing;
    const inputmessg = (e)=>{
      typing=(e.target.value)
    }

    const submitdata = ()=>{
        setSmessg(typing)
        document.querySelector('input[name="messg"]').value = '';
    }
    const onlineusers = users.map((user)=>{    
                return  (
                    <div key={user.id}>
                        <input type="radio" name="users" id={user.id}  value={user.userid} />
                            <label htmlFor={user.id}>{user.userid}</label>
                    </div>)
    }); 

    console.log(allmessages)
    const allmess = allmessages.map(()=>{
        return (
        <div>hello</div>
        )
    })

       
    const radioselect = ()=>{
       let select=(document.querySelector('input[name="users"]:checked').value);
        let reciever = users.find((user)=> user.userid === select)
        setrecieverid(reciever.id)
    }
    return (
        <div className="chatpage">
            <form className="selectsection" onChange={radioselect}>
                <h1> all online users</h1>
                {onlineusers}
            </form>
            <div className="chatsection">
                <div className='messgsection'>
                    {allmess}
                </div>
                <div className="typesection">
                    <input name="messg" type="text" placeholder="type messg" onChange={inputmessg}/>
                    <button type="submit" onClick={submitdata}>send </button>
                </div>
            </div>
        </div>
    )
}

export default Chat;