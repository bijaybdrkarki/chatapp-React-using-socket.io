import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './login.css'


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
        <div className="center">
            <div className="signupBy">
                <div className="input-form" >
                    <div className="input-icons">  
                        <i className="fa fa-envelope icon-signup"> </i> 
                        <input className="input-field" type="text" placeholder="User Name" name="userid" onChange={usertest} />
                        <i className="fas fa-unlock-alt icon-signup"></i>
                        <input className="input-field" type="password" placeholder="Password" name="password" />
                    </div> 
                    
                    <Link to={`/${input}`} onClick={allset}><button type="submit" className="button signup-btn"> Log In</button></Link>
                    {/* <a href="#"><p className="forgotpass">Forgot password</p></a> */}
                </div>
            </div>
        </div>
        </>
)}

export default Login; 
