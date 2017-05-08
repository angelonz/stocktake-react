import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav id="nav">
            <ul>
                <li className="special">
                    <a href="#menu" className="menuToggle"><span>Menu</span></a>
                    <div id="menu">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><a href="generic.html">About</a></li>
                            <li><a href="elements.html">My Earnings</a></li>
                            <li><Link to="/register">Sign Up</Link></li>
                            <li><a href="#">Log In</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
