import React from 'react';
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
            <ul>
                <li><Link exact to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/earnings'>My Earnings</Link></li>
            </ul>
        </div>
    );
};

export default Navigation;