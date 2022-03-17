import React from "react";
import Tilt from 'react-tilt';
import './logo.css';
import teddy from './teddy.png';

const logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 150, width: 250 }} >
            <div className="Tilt-inner"><img alt = 'logo' src={teddy}/> </div>
            </Tilt>
        </div>
        
    );
}

export default logo;