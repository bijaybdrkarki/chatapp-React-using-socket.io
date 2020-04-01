import React from 'react';
import { Link } from 'react-router-dom';
import Clock from 'react-live-clock';
import './home.css';
import userimg from './img/photo-1.jpeg';
import Weather from './weather';
// import { useState } from 'react';


const Home = () => {
    var tempDate = new Date();
    var days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    var currDate = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate();
    
    return (<>
        <div className="profile">
            <img src={userimg} alt="user pic" />
            <p>Fname Lname</p>
        </div>
        <div className="homegrid">
            <section className="nextContainer">
                <div className="next">
                    <span className="material-icons">event</span>
                    <p>14:00</p>
                    <h2>Lunch <p>Hyatt, Toronto</p></h2>
                </div>
                <div className="next">
                    <span className="material-icons">event</span>
                    <p>14:30</p>
                    <h2>Meeting <p> Hyatt, Toronto</p></h2>
                </div>
            </section>
            <section className="dateTime">
                <div className="day">{days[tempDate.getDay()]}</div>
                <div>
                    <p>{currDate}</p>
                    <Clock  format={'HH:mm:ss A'} ticking={true} timezone={'America/Toronto'} />
                </div>
            </section>
            <section className="weather">
                <Weather  />
                <Link to='/forecast'>
                <p>See more</p>
                </Link> 
                    
            </section>
        </div>
    </>)
}

export default Home;