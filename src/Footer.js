import React from 'react';

const Footer = () => {
    return (
        <footer id="footer">
            <ul className="icons">
                <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="#" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li>
                <li><a href="#" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
            </ul>
            <ul className="copyright">
                <li>&copy; StockTake</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
            </ul>
        </footer>
    );
};

export default Footer;