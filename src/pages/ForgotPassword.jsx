import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react'; // No specific icon shown in header but good to have back
import { useNavigate } from 'react-router-dom';
import Layout from '../ui/Layout';
import Input from '../ui/Input';
import Button from '../ui/Button';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('johndoe@gmail.com');

    return (
        <Layout className="px-6 pt-8">
            <div className="flex justify-between items-start mb-6">
                <div className="flex gap-2 items-center">
                    <span className="text-gray-400 font-medium italic text-xs">9:41</span>
                </div>
                <div className="flex gap-1.5 items-center">
                    <div className="w-4 h-2.5 bg-black rounded-sm"></div>
                    <div className="w-4 h-2.5 bg-black rounded-sm"></div>
                    <div className="w-6 h-3 bg-black rounded border border-black/30 relative">
                        <div className="absolute right-0.5 top-0.5 bottom-0.5 w-1 bg-black"></div>
                    </div>
                </div>
            </div>

            <div className="mb-0">
                {/* Back Button implicitly handled if needed, design doesn't clearly show one but standard UX implies it. 
                   Wait, design has no back button header. It just has title.
                   I will add a subtle back interaction or leave as is to match design EXACTLY.
                   Design has "9:41" status bar, then title.
               */}
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Forgot Password</h1>
            <p className="text-gray-600 mb-10 text-sm leading-relaxed">
                Enter your email address to reset your password
            </p>

            <Input
                label="Email"
                placeholder="johndoe@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-8"
            />

            <Button onClick={() => navigate('/account-verification')}>Reset Password</Button>

        </Layout>
    );
};

export default ForgotPassword;
