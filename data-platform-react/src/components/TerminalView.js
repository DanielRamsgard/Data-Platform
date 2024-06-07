import React from 'react';
import './TerminalView.css';
import CodeBlock from './CodeBlock';

const TerminalView = (props) => {
    if (props.bool){
        return (
            <div>
                <div className="TopSpace" id={props.id}>
                </div>
                <div className="TerminalView">
                    <div className="Middle"></div>
                    <img alt={props.alt} className="ImageSide" src={props.img}></img>
                    <div className="Middle"></div>
                    <div className="TextSide">
                        <div class="font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"> {props.text} </div>
                        <div className="MoreSpace"></div>
                        <CodeBlock/>
                    </div>
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
                    <div className="TextSide">
                        <div class="font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"> {props.text} </div>
                        <div className="MoreSpace"></div>
                        <CodeBlock/>
                    </div>   
                    <div className="Middle"></div>
                    <img alt={props.alt} className="ImageSide" src={props.img}></img>
                    <div className="Middle"></div>
                </div>
            </div>
        );
    }
};

export default TerminalView;