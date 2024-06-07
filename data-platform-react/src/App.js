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
            <button className="ImgButton" onClick={ () => {window.location.href='#GaussianElim'}}> Try Now </button>
            <div className="Spacer"></div>
            <TerminalView img="/static/media/gaussElim.png" bool={true} id="GaussianElim"/>
            <TerminalView img="/static/media/eigenvalues.png" bool={false} id="Eigenvalues"/>
            <WideView img="/static/media/banner.png"/>
            <TerminalView img="/static/media/svd.jpg" bool={true} id="SVD"/>
            <TerminalView img="/static/media/qr.png" bool={false} id="Gram-Schmidt"/>
            <WideView img="/static/media/bannerOne.jpeg"/>
            <TerminalView img="/static/media/lu.png" bool={true} id="LU"/>
            <div className="TopSpace"></div>
            <ContactView/>
        </div>
    </div>
    );
}

export default App;
