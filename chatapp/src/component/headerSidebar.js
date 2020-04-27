import React, { useContext } from 'react';
import './headerSidebar.css'
import { Link } from 'react-router-dom';
import {userId} from '../App'

const HeaderSidebar =(props) => {
    let userid = useContext(userId)
    return (
        <div className="layout">
            <header className="branding">
                <h1 className="logo">Chat App</h1>
            </header>
            <aside className={props.menuclass}>
                <div className="panel">
                    <ul className="options">
                        <li><Link to='#' className="linkhover"><span className="material-icons">search</span><p>Search</p></Link> </li>
                        <li><Link to={`/${userid}`} className="linkhover"><span className="material-icons">home</span><p>Home</p></Link></li>
                        <li><Link to='#' className="linkhover"><span className="material-icons">account_circle</span><p>Account</p></Link></li>
                        <li><Link to={`/${userid}/chat`} className="linkhover"><span className="material-icons">question_answer</span><p>Chat</p></Link></li>
                        <li><Link to='#' className="linkhover"><span className="material-icons">notifications</span><p>Alerts</p></Link></li>
                        <li><Link to='#' className="linkhover"><span className="material-icons">headset_mic</span><p>Music</p></Link></li>
                        <li><Link to='#' className="linkhover"><span className="material-icons">call</span><p>Call</p></Link></li>
                        <li><Link to='#' className="linkhover"><span className="material-icons">settings_applications</span><p>Settings</p></Link></li>
                    </ul>
                </div>
                <button className="toggle-others" onClick={ props.menu }><span>Menu</span></button>
            </aside>
        </div>)
}

export default HeaderSidebar;