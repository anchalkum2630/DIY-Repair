import React, { useState } from 'react';
import { Smartphone, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '../ui/Layout';
import Button from '../ui/Button';

const VerifyPhone = () => {
    const navigate = useNavigate();
    const [phoneNumber, setPhoneNumber] = useState('(+1) - 2432352232');

    return (
        <Layout className="flex flex-col p-6">
            <div className="mb-6 flex items-center">
                <button onClick={() => navigate(-1)} className="p-2 -ml-2">
                    <X size={28} />
                </button>
            </div>
            <h1 className="text-2xl font-bold mb-8 text-gray-900">Verify your phone number</h1>

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

            <div className="mt-auto mb-8">
                <Button className="bg-primary shadow-lg shadow-primary/30" onClick={() => navigate('/verify-otp')}>Send OTP</Button>
            </div>
            {/* White space filler to match design if needed, or simply let layout handle it */}
            <div className="h-1/3"></div>
        </Layout>
    );
};

export default VerifyPhone;
