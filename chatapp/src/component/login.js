import React, {useState} from 'react'
import {Link} from 'react-router-dom'


const Login = (props) => {
    const [input, setinput] =useState('')
    const usertest = (e)=>{
        setinput(e.target.value)
    }
    const allset = ()=>{
        props.user(input)
    }
    
    return (
        <>
            <input type="text" placeholder="userid" onChange={usertest} />
            <Link to={`/${input}`} onClick={allset}>login</Link>
        </>
)}

export default Login; 