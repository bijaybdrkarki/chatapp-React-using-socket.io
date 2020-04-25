import React, {useEffect, useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import Clock from 'react-live-clock';
import './home.css';
import userimg from './img/photo-1.jpeg';
import Weather from './weather';
import {userId} from '../App'

const Home = () => {
    var tempDate = new Date();
    var days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    var months =["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
    var currDate = tempDate.getFullYear() + '-' + months[(tempDate.getMonth()+1)] + '-' + tempDate.getDate();
    
   const [timeclock , settimeclock] = useState([]); 
   
    useEffect(() => {
        time();
        return (()=> {settimeclock()})    
    },[]);
    const time = async ()=> {
    
        const data =  (<Clock  format={'hh:mm:ss A'} ticking={true} timezone={'America/Toronto'} />)
        settimeclock(data);
    
    }
    let userid = useContext(userId);
    return (<>
        <div className="profile">
            <img src={userimg} alt="user pic" />
            <p>Fname Lname</p>
        </div>
        <div className="homegrid">
            <section className="nextContainer">
                <div className="next">
                    <span className="material-icons icon">event</span>
                    <p className="time">14:00</p>
                   <span><h2>Lunch </h2><p>Hyatt, Toronto</p></span>
                </div>
                <div className="next">
                    <span className="material-icons icon">event</span>
                    <p className="time">14:30</p>
                    <span><h2>Meeting </h2><p>Hyatt, Toronto</p></span>
                </div>
            </section>
            <section className="dateTime">
                <div className="day">{days[tempDate.getDay()]}</div>
                <div>
                    <p>{currDate}</p>
                    { timeclock } 
                </div>
            </section>
            <section>
                <h1 className="heading">Weather forecast</h1>
                <div className="weather">
                <Weather />
                <Link to={`/${userid}/forecast`}>
                <p>See more</p>
                </Link> 
                 </div>   
            </section>
        </div>
    </>)
}

export default Home;