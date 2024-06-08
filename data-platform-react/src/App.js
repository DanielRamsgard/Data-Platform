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
                    <a className="Button" href="https://github.com/DanielRamsgard/Data-Platform#readme" target="_blank" rel="noreferrer"> About </a>
                    <button className="Contact" onClick={ () => {window.location.href='#Contact'}}> Contact </button>
                </div>
            </div>
            <div className="ImgContainer">
                <img alt="Background Title" src="/static/media/backgroundText.png" className="Img"></img>
            </div>
            <button className="ImgButton" onClick={() => {window.location.href='#GaussianElim'}}> Try Now </button>
            <div className="Spacer"></div>
            <TerminalView input="hello" alt="Row Reduced Echelon Form" img="/static/media/gaussElimBlue.png" text="Row Reduced Echelon Form" bool={false} id="GaussianElim"/>
            <TerminalView input="" alt="Eigenvalue Diagonalization" img="/static/media/eigenvaluesBlue.png" text="Eigenvalue Diagonalization" bool={false} id="Eigenvalues"/>
            <WideView/>
            <TerminalView input="" alt="Singular Value Decomposition" img="/static/media/svdBlue.png" text="Singular Value Decomposition" bool={false} id="SVD"/>
            <TerminalView input="" alt="QR Factorization" img="/static/media/qrBlue.png" text="QR Factorization" bool={false} id="Gram-Schmidt"/>
            <WideView/>
            <TerminalView input="" alt="LU Decomposition" img="/static/media/luBlue.png" text="LU Decomposition" bool={false} id="LU"/>
            <div className="TopSpace"></div>
            <ContactView/>
        </div>
    </div>
    );
}

export default App;
