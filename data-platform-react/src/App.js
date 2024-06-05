import './App.css';
import React from 'react';

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
                <div className="Try">
                    <button className="Button"> About </button>
                    <button className="Contact"> Contact </button>
                </div>
            </div>
            <img src="/static/media/background.png" className="Img"></img>
            <div className="Spacer"></div>
        </div>
    </div>
  );
}

export default App;
