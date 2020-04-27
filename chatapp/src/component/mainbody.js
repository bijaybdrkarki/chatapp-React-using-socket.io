import React, { useState, useEffect, useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import './main.css';
import Home from './home';
import Weather from './weather';
import Chat from './chat';
import {userId} from '../App'

const Mainbody = (props) => {
    
    let userid = useContext(userId)
    const [size, setsize] = useState('mainsize');
    useEffect(() => { 
        if(props.menuclass === 'others open'){
            setsize('mainsize lt-mr');
        }
        else{
            setsize('mainsize');
        }
    }, [props.menuclass, size]); 
    return (
        <div className={size}>
            <Switch>
                <Route path={`/:${userid}`} exact component={Home}  />
                <Route path={`/:${userid}/forecast`} component={Weather} />
                <Route path={`/:${userid}/chat`} component={()=><Chat  socket={props.socket} />} />
            </Switch>    
        </div>
       
    )

}
export default Mainbody;