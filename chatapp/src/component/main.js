import React, { useState, useEffect } from 'react';
import './main.css';

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
            <h1>Hello world</h1>
        </div>
    )

}
export default Mainbody;