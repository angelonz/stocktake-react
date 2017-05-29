import React from 'react';
import './stocktake.css';

const FormMessage = ({ message }) => {
    return (
        <div className="6u$ 12u$(xsmall)">
            <p className="message">{message}</p>
        </div>
    );
};

export default FormMessage;
