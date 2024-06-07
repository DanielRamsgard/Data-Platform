import './App.css';
import React from 'react';
import TerminalView from './components/TerminalView';
import WideView from './components/WideView';
import ContactView from './components/ContactView';
import NavBar from './components/NavBar';

function App() {

    return (
    <div className="App">
        <div className="Container">
            <div className="Header">
                <NavBar />
                <div className="Space"></div>
                <div className="Info">
                    <button className="Button"> About </button>
                    <button className="Contact"> Contact </button>
                </div>
            </div>
            <div className="ImgContainer">
                <img src="/static/media/backgroundText.png" className="Img"></img>
            </div>
            <button className="ImgButton"> Try Now </button>
            <div className="Spacer"></div>
            <TerminalView img="" text="" bool={true}/>
            <TerminalView img="" text="" bool={false}/>
            <WideView img="/static/media/banner.png" text=""/>
            <TerminalView img="" text="" bool={true}/>
            <TerminalView img="" text="" bool={false}/>
            <WideView img="/static/media/bannerOne.jpeg" text=""/>
            <div className="TopSpace"></div>
            <ContactView/>
        </div>
    </div>
    );
}

export default App;
