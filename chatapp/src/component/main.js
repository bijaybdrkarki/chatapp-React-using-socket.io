import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './main.css';
import Home from './home'
import Chat from './chat';

const Mainbody = (props) => {
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
                <Route path="/" exact component={Home} />
                <Route path="/chat" component={Chat} />
            </Switch>
        </div>
        
    )

}
export default Mainbody;