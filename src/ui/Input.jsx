import React from 'react';

const Input = ({ label, type = 'text', placeholder, value, onChange, icon: Icon, className = '' }) => {
    return (
        <div className={`flex flex-col gap-1.5 ${className}`}>
            {label && <label className="text-sm font-medium text-gray-600 ml-1">{label}</label>}
            <div className="relative">
                {Icon && (
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <Icon size={22} strokeWidth={1.5} />
                    </div>
                )}
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={`w-full p-3.5 ${Icon ? 'pl-12' : ''} bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-gray-800 placeholder-gray-400 transition-all font-medium`}
                />
            </div>
        </div>
    );
};

export default Input;
