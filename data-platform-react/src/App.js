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
                    <a className="Button" href="https://github.com/DanielRamsgard/Data-Platform#readme" target="_blank"> About </a>
                    <button className="Contact" onClick={ () => {window.location.href='#Contact'}}> Contact </button>
                </div>
            </div>
            <div className="ImgContainer">
                <img src="/static/media/backgroundText.png" className="Img"></img>
            </div>
            <button className="ImgButton"> Try Now </button>
            <div className="Spacer"></div>
            <TerminalView img="" text="" bool={true} id="GaussianElim"/>
            <TerminalView img="" text="" bool={false} id="Eigenvalues"/>
            <WideView img="/static/media/banner.png" text=""/>
            <TerminalView img="" text="" bool={true} id="SVD"/>
            <TerminalView img="" text="" bool={false} id="Gram-Schmidt"/>
            <WideView img="/static/media/bannerOne.jpeg" text=""/>
            <TerminalView img="" text="" bool={false} id="LU"/>
            <div className="TopSpace"></div>
            <ContactView/>
        </div>
    </div>
    );
}

export default App;
