import React from 'react';
import { HandleTerminalClick } from './HandleTerminalClick';

const NavBar = () => {
    return (
        <div className="Nav">
                    <button className="Button" onClick={HandleTerminalClick}><img src="/static/media/terminal.png" className="Terminal"></img></button>
                    <button className="Button"> Gaussian Elim </button>
                    <button className="Button"> Eigenvalues </button>
                    <button className="Button"> SVD </button>
                    <button className="Button"> Gram-Schmidt </button>
                    <button className="Button"> LU </button>
                </div>
    );
}

export default NavBar;