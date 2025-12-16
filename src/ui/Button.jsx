import React from 'react';

const Button = ({ children, onClick, type = 'button', className = '' }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`w-full py-3.5 bg-primary text-white font-bold rounded-xl hover:opacity-90 transition-opacity shadow-sm text-lg ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
