import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Layout = ({ children, title, showBack = false, className = '', headerStyle = 'default' }) => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center font-sans">
            <div className="w-full max-w-md bg-white min-h-screen shadow-lg relative flex flex-col sm:border-x sm:border-gray-200">
                {(showBack || (title && headerStyle !== 'custom')) && (
                    <div className={`flex items-center px-6 pt-6 pb-2 ${headerStyle === 'orange' ? 'bg-primary text-white' : 'bg-white text-gray-900'}`}>
                        {showBack && (
                            <button onClick={() => navigate(-1)} className="mr-4 p-1 rounded-full hover:bg-black/5 -ml-2">
                                <ChevronLeft size={28} color={headerStyle === 'orange' ? 'white' : 'black'} />
                            </button>
                        )}
                        {title && <h1 className="text-xl font-bold">{title}</h1>}
                    </div>
                )}

                <div className={`flex-1 flex flex-col ${className}`}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;
