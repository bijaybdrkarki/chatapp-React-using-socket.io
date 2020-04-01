import React from 'react';
import Clock from 'react-live-clock';
import './home.css';
import userimg from './img/photo-1.jpeg';
import Weather from './weather';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    var tempDate = new Date();
    var days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    var currDate = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate();
    const [dataNumber, setdataNumber] = useState('4');  
    return (<>
        <div className="profile">
            <img src={userimg} alt="user pic" />
            <p>Fname Lname</p>
        </div>
        <h1>Home page</h1>
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
            <Weather data={dataNumber} />
            <Link to="" onClick={()=> dataNumber === '4' ? setdataNumber('all') : setdataNumber('4')}>
            <p>See more</p>
            </Link>     
        </section>
    </>)
}

export default Home;