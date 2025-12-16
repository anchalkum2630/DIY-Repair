import React from 'react';
import { Delete } from 'lucide-react';

const Keypad = ({ onKeyPress, onDelete, className = '' }) => {
    const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <div className={`grid grid-cols-3 bg-gray-200 p-2 pb-6 ${className}`}>
            {keys.map((key) => (
                <button
                    key={key}
                    onClick={() => onKeyPress(key)}
                    className="h-14 flex items-center justify-center bg-white rounded shadow-sm text-2xl font-normal text-gray-800 m-1 active:bg-gray-100"
                >
                    {key}
                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest -mb-6 absolute pt-6">
                        {key === 1 ? '' : key === 2 ? 'ABC' : key === 3 ? 'DEF' : key === 4 ? 'GHI' : key === 5 ? 'JKL' : key === 6 ? 'MNO' : key === 7 ? 'PQRS' : key === 8 ? 'TUV' : key === 9 ? 'WXYZ' : ''}
                    </div>
                </button>
            ))}
            <div className="h-14 m-1"></div>
            <button
                onClick={() => onKeyPress(0)}
                className="h-14 flex items-center justify-center bg-white rounded shadow-sm text-2xl font-normal text-gray-800 m-1 active:bg-gray-100"
            >
                0
            </button>
            <button
                onClick={onDelete}
                className="h-14 flex items-center justify-center m-1 text-gray-800 active:bg-gray-300 rounded"
            >
                <div className="bg-transparent border-gray-800 border-2 rounded px-2 py-1">
                    <Delete size={20} strokeWidth={2} className="text-gray-800" />
                </div>
            </button>
        </div>
    );
};

export default Keypad;
