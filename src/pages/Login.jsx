import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../ui/Layout';
import Input from '../ui/Input';
import Button from '../ui/Button';

// Social Placeholder Logic Reuse
const SocialIcon = ({ color, letter }) => (
    <button className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-xl font-bold border border-gray-100 hover:scale-105 transition-transform">
        {letter}
    </button>
);

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('johndoe@gmail.com');
    const [password, setPassword] = useState('................');

    return (
        <Layout className="px-6 pt-12">

            <div className="flex justify-between items-start mb-12">
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

            <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome Back!</h1>
            <p className="text-gray-500 mb-12">
                Don't have an account? <Link to="/signup" className="text-gray-700 font-medium hover:underline">SignUp</Link>
            </p>

            <div className="flex flex-col gap-6 mb-8">
                <Input
                    label="Email"
                    placeholder="johndoe@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    label="Password"
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <Button onClick={() => navigate('/splash')} className="mb-8">Login</Button>

            <div className="text-center mb-8">
                <Link to="/forgot-password" class="text-gray-700 font-bold text-sm hover:underline">
                    Forgot your Password?
                </Link>
            </div>

            <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] bg-gray-200 flex-1"></div>
                <span className="text-gray-500 text-sm font-medium">Or Login using</span>
                <div className="h-[1px] bg-gray-200 flex-1"></div>
            </div>

            <div className="flex justify-center gap-6 mb-8">
                {/* Instagram-ish */}
                <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex items-center justify-center text-white cursor-pointer">
                    <span className="font-bold text-lg">O</span>
                </div>
                {/* Google-ish */}
                <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center cursor-pointer shadow-sm">
                    <span className="font-bold text-xl text-blue-500">G</span>
                </div>
                {/* Facebook-ish */}
                <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white cursor-pointer">
                    <span className="font-bold text-lg">f</span>
                </div>
            </div>

        </Layout>
    );
};

export default Login;
