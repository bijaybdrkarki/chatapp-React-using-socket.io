import React, { useState, useEffect } from 'react';
import './weather.css'


const Weather = (props) => {

    useEffect(() => {
        newWeather();
    }, []);
    const [iconWeather, setIconWeather] = useState([]);
    const [currtemp, setcurrTemp] = useState([]);
    const [feeltemp, setfeelTemp] = useState([]);
    const [temptime , setTemptime]= useState([]);
    const newWeather = async ()=> {
        const data = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Toronto&units=metric&APPID=3bea2aedc66d41364ecf6ab4d441c3f8`);
        const jsonData = await data.json();
        var i;
        const arrIcon = [];
        const arrcurTemp = [];
        const arrfeelTemp = [];
        const time = [];
        let currtemp ="";
        let feeltemp ="";
        for(i=0 ; i < jsonData.list.length ; i++)
        {
            arrIcon.push("http://openweathermap.org/img/w/" + jsonData.list[i].weather[0].icon + ".png");
            currtemp = jsonData.list[i].main.temp;
            feeltemp = jsonData.list[i].main.feels_like;
            arrcurTemp.push(currtemp);
            arrfeelTemp.push(feeltemp);
            time.push(jsonData.list[i].dt_txt.slice(5, 16));
        }
        setcurrTemp(arrcurTemp);
        setfeelTemp(arrfeelTemp);
        setIconWeather(arrIcon);
        setTemptime(time);
    }
    let tempData = [];
    if (props.data === '4')
    {
        tempData = currtemp.slice( 0, 4);
    }
    else
    {
        tempData = [...currtemp];
    }
    const temp = tempData.map((temp1, index) => <div className="forecast" key={index}>
                        <p> Curr:{temp1} <span>&#176;C</span></p> 
                        <div className="iconTime">
                        <img src= {iconWeather[index]} alt="" /> 
                        <p> {temptime[index]}</p>
                        </div>
                        <p>Feels: {feeltemp[index]} <span>&#176;C</span></p>         
                    </div>);
    return ( <>{temp}</>)
}

export default Weather;