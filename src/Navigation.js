import React from 'react';

const Navigation = () => {
    return (
        <nav id="nav">
            <ul>
                <li className="special">
                    <a href="#menu" className="menuToggle"><span>Menu</span></a>
                    <div id="menu">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="generic.html">About</a></li>
                            <li><a href="elements.html">My Earnings</a></li>
                            <li><a href="#">Sign Up</a></li>
                            <li><a href="#">Log In</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;