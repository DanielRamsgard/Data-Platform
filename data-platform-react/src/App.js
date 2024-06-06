import './App.css';
import React from 'react';
import TerminalView from './components/TerminalView';
import WideView from './components/WideView';
import ContactView from './components/ContactView';

function App() {

    return (
    <div className="App">
        <div className="Container">
            <div className="Header">
                <div className="Nav">
                    <button className="Button"><img src="/static/media/terminal.png" className="Terminal"></img></button>
                    <button className="Button"> Gaussian Elim </button>
                    <button className="Button"> Eigenvalues </button>
                    <button className="Button"> SVD </button>
                    <button className="Button"> Gram-Schmidt </button>
                    <button className="Button"> LU </button>
                </div>
                <div className="Space"></div>
                <div className="Info">
                    <button className="Button"> About </button>
                    <button className="Contact"> Contact </button>
                </div>
            </div>
            <div className="ImgContainer">
                <img src="/static/media/backgroundText.png" className="Img"></img>
                <button className="ImgButton"> Try Now </button>
            </div>
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
