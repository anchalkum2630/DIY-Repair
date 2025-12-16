import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../ui/Layout';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { Eye, EyeOff } from 'lucide-react';

// Social Icons (using simple text or replace with lucide/images if needed)
// For now, I'll use placeholders that resemble the colorful icons
const SocialIcon = ({ color, letter }) => (
    <button className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-xl font-bold border border-gray-100 hover:scale-105 transition-transform">
        <span style={{ color }}>{letter}</span>
    </button>
);

const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: 'John Doe',
        email: 'johndoe@gmail.com',
        password: ''
    });

    const handleChange = (e) => {
        // Standard input handling
    };

    return (
        <Layout headerStyle="custom" className="p-0">
            {/* Custom Orange Header */}
            <div className="bg-primary px-6 pt-12 pb-16 rounded-b-[30px] shadow-lg mb-8">
                <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-2 items-center">
                        <span className="text-white/60 font-medium italic">9:41</span>
                    </div>
                    <div className="flex gap-1.5 items-center">
                        <div className="w-4 h-2.5 bg-white/90 rounded-sm"></div>
                        <div className="w-4 h-2.5 bg-white/90 rounded-sm"></div>
                        <div className="w-6 h-3 bg-white/90 rounded border border-white/30 relative">
                            <div className="absolute right-0.5 top-0.5 bottom-0.5 w-1 bg-white"></div>
                        </div>
                    </div>
                </div>

                <h1 className="text-4xl font-bold text-white mb-2">SignUp</h1>
                <p className="text-white/90 text-sm font-medium">
                    Already have an Account? <Link to="/login" className="font-bold underline">Login</Link>
                </p>
            </div>

            <div className="px-6 flex flex-col gap-5">
                <Input
                    label="Name"
                    placeholder="John Doe"
                    value={formData.name}
                />
                <Input
                    label="Email"
                    placeholder="johndoe@gmail.com"
                    value={formData.email}
                />
                <Input
                    label="Password"
                    type="password"
                    placeholder="•••••••••••••••••••••••••"
                    value={formData.password}
                />

                <div className="mt-4">
                    <Button onClick={() => navigate('/mobile-entry')}>SignUp</Button>
                </div>

                <div className="flex items-center gap-4 my-4">
                    <div className="h-[1px] bg-gray-200 flex-1"></div>
                    <span className="text-gray-500 text-sm font-medium">Or SignUp using</span>
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
            </div>
        </Layout>
    );
};

export default SignUp;
