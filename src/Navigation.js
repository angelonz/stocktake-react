import React from 'react';
import Menu from './Menu';

const Navigation = () => {
    return (
        <nav id="nav">
            <ul>
                <li className="special">
                    <a href="#menu" className="menuToggle">
                        <span className="menu">Menu</span>
                    </a>
                    <Menu />
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
