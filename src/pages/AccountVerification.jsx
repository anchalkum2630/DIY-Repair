import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '../ui/Layout';
import Button from '../ui/Button';

const AccountVerification = () => {
    const navigate = useNavigate();

    return (
        <Layout className="px-6 pt-6 flex flex-col items-center">
            <div className="w-full flex items-center justify-between mb-8">
                <button onClick={() => navigate(-1)} className="p-2 -ml-2">
                    <ArrowLeft size={24} className="text-black" />
                </button>
                <div className="flex gap-2 items-center invisible">
                    <span className="text-gray-400 font-medium italic text-xs">9:41</span>
                </div>
            </div>

            <h1 className="text-2xl font-bold text-gray-900 mb-32 self-start w-full text-center pr-8">Account verification</h1>

            {/* Design shows empty space, presumably for an illustration not provided. 
                I'll leave it empty as per "design same as given" which implies empty white space.
            */}
            <div className="flex-1 w-full flex flex-col items-center justify-center">
                <p className="text-gray-500 text-center text-sm px-8 mb-8 leading-relaxed">
                    We have sent you an email to verify your account. Please check and confirm the details.
                </p>

                <Button className="w-full" onClick={() => navigate('/login')}>Check the status</Button>
            </div>

            <div className="h-32"></div>
        </Layout>
    );
};

export default AccountVerification;
