import React from 'react';
import './TerminalView.css';

const TerminalView = (props) => {
    if (props.bool){
        return (
            <div>
                <div className="TopSpace" id={props.id}>
                </div>
                <div className="TerminalView">
                    <div className="Middle"></div>
                    <img className="ImageSide" src={props.img}></img>
                    <div className="Middle"></div>
                    <div className="TextSide"></div>
                    <div className="Middle"></div>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <div className="TopSpace" id={props.id}>
                </div>
                <div className="TerminalView">
                    <div className="Middle"></div>
                    <div className="TextSide"></div>
                    <div className="Middle"></div>
                    <img className="ImageSide" src={props.img}></img>
                    <div className="Middle"></div>
                </div>
            </div>
        );
    }
};

export default TerminalView;