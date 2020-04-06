import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';


function Nav() {
  return (
    <nav>
        <Link className="logo" to='/'>
            <img  src={require("D:/programming/react/routing/src/controllerLogo.png")}  />
        </Link>
        <ul className="nav-links">
            <Link className="nav-style" to='/about'>
                <li>About</li>
            </Link>
            <Link className="nav-style" to='/games'>
                <li>Games</li>
            </Link>
            <Link className="nav-style" to='/'>
                <li>Home</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
