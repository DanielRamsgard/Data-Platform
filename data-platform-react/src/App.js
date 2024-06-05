import './App.css';
import React from 'react';
import TerminalView from './components/TerminalView';

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
                <img src="/static/media/background.png" className="Img"></img>
                <div className="Text"> Data Analysis </div>
                <div className="TextTwo"> Platform </div>
                <div className="TextThree"> Linear Algebra </div>
            </div>
            <img src="/static/media/matrix.png" className="Matrix"></img>
            <button className="ImgButton"> Try Now </button>
            <TerminalView img="" text=""/>
        </div>
    </div>
  );
}

export default App;
