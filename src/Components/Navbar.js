import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <div className='Navbars'>
                <div className="navbar-1">
                    <div className="Navbar">
                        <div style={{color: 'rgb(120, 152, 255)'}}>React JS</div>
                            <Link className='link-style' to="/">Home</Link>
                            <Link className='link-style' to='/info'>Info</Link>
                            <Link className='link-style' to='/aboutus'>About Us</Link>                    
                            <Link className='link-style' to='/help'>Help</Link>
                    </div>
                </div>

                <div className="navbar-2">
                    <div className="Navbar">
                        <div style={{color: 'rgb(231, 255, 126)'}}>JS</div>
                        <a className='link-style' href="/">Home</a>
                        <a className='link-style' href="/info">Info</a>
                        <a className='link-style' href="/aboutus">About Us</a>
                        <a className='link-style' href="/help">Help</a>
                    </div>
                </div>
             </div> 
        </>
    );
}

export default Navbar
