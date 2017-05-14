import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => {
    return (
        <section id="one" className="wrapper style1 special">
            <div className="inner">
                <header className="major">
                    <h2>404 Error</h2>
                    <p>We are sorry but the page you are looking for does not exist.</p>
                </header>

                <ul className="actions">
                    <li><Link to="/" className="button fit">Return Home</Link></li>
                </ul>

            </div>
        </section>
    );
};

export default NoMatch;