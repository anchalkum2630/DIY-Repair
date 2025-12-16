import React, { useState } from 'react';
import { Smartphone, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '../ui/Layout';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Keypad from '../ui/Keypad';

const MobileEntry = () => {
    const navigate = useNavigate();
    const [phoneNumber, setPhoneNumber] = useState('(+1) - 2432352232');

    return (
        <Layout className="flex flex-col p-6 h-screen justify-between">
            <div>
                <div className="mb-6 flex items-center">
                    <button onClick={() => navigate(-1)} className="p-2 -ml-2">
                        <X size={28} />
                    </button>
                </div>
                <h1 className="text-2xl font-bold mb-8 text-gray-900">Enter Mobile Number</h1>

                <div className="mb-8">
                    <label className="text-xs text-gray-500 font-medium mb-1 block">Phone Number</label>
                    <div className="relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <Smartphone size={24} strokeWidth={1.5} />
                        </div>
                        <div className="w-full p-3 pl-11 border border-gray-300 rounded-lg text-lg font-medium text-gray-800 flex items-center h-12">
                            {phoneNumber}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-auto">
                <Button className="mb-8 bg-primary shadow-lg shadow-primary/30" onClick={() => navigate('/verify-phone')}>Send OTP</Button>
                <Keypad
                    className="-mx-6 -mb-6"
                    onKeyPress={(key) => setPhoneNumber(prev => prev + key)}
                    onDelete={() => setPhoneNumber(prev => prev.slice(0, -1))}
                />
            </div>
        </Layout>
    );
};

export default MobileEntry;
