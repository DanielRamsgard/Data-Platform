import React from 'react';
import './WideView.css';

const WideView = (props) => {
    return (
        <div>
            <div className="Bar"></div>
            <img src={props.img} className="WideView"></img>
        </div>
    );
};

export default WideView;