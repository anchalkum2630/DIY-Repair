import React, { useState } from 'react';
import { ArrowLeft, Delete } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '../ui/Layout';
import Button from '../ui/Button';
import Keypad from '../ui/Keypad';

const VerifyOTP = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState(['0', '0', '0', '0']);

    const handleKeyPress = (key) => {
        // Simple logic to fill next empty slot or replace
        // For demo, just append to verification logic if needed
    };

    return (
        <Layout className="flex flex-col p-6 h-screen justify-between">
            <div>
                <div className="mb-6 flex items-center">
                    <button onClick={() => navigate(-1)} className="p-2 -ml-2">
                        <ArrowLeft size={28} />
                    </button>
                </div>
                <h1 className="text-2xl font-bold mb-8 text-gray-900">Verify OTP</h1>

                <div className="flex gap-4 mb-8">
                    {otp.map((digit, idx) => (
                        <div key={idx} className="w-14 h-14 border border-gray-300 rounded-lg flex items-center justify-center text-xl font-medium text-gray-800">
                            {digit}
                        </div>
                    ))}
                </div>

                <p className="text-gray-500 text-sm">
                    Didn't Receive the Code? <button className="text-gray-700 font-medium">Resend</button>
                </p>
            </div>

            <div className="mt-auto">
                <Button className="mb-8 bg-primary shadow-lg shadow-primary/30" onClick={() => navigate('/complete-details')}>Verify OTP</Button>
                <Keypad
                    className="-mx-6 -mb-6"
                    onKeyPress={handleKeyPress}
                    onDelete={() => { }}
                />
            </div>
        </Layout>
    );
};

export default VerifyOTP;
