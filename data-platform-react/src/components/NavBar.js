import React from 'react';
import { HandleTerminalClick } from './HandleTerminalClick';

const NavBar = () => {
    return (
        <div className="Nav">
            <button className="Button" onClick={HandleTerminalClick}><img src="/static/media/terminal.png" className="Terminal"></img></button>
            <button className="Button" onClick={ () => {window.location.href='#GaussianElim'}}> Gaussian Elim </button>
            <button className="Button" onClick={ () => {window.location.href='#Eigenvalues'}}> Eigenvalues </button>
            <button className="Button" onClick={ () => {window.location.href='#SVD'}}> SVD </button>
            <button className="Button" onClick={ () => {window.location.href='#Gram-Schmidt'}}> Gram-Schmidt </button>
            <button className="Button" onClick={ () => {window.location.href='#LU'}}> LU </button>
        </div>
    );
}

export default NavBar;