import React from 'react';
import { ArrowRight, Link as LinkIcon } from 'lucide-react'; // LinkIcon conflict? No.
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../ui/Layout';
import Input from '../ui/Input';
import Button from '../ui/Button';

const CompleteDetails = () => {
    const navigate = useNavigate();

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
                <h1 className="text-3xl font-bold text-white mb-2 leading-tight">Complete the details</h1>
                <p className="text-white/90 text-sm font-medium">
                    Already have an Account? <Link to="/" className="font-bold underline">Login</Link>
                </p>
            </div>

            <div className="px-6 flex flex-col gap-6">
                <Input
                    label="Address"
                    placeholder="address"
                    value="address"
                />
                <Input
                    label="Phone number"
                    placeholder="+1-2432352232"
                    value="+1-2432352232"
                />

                <div className="mt-8">
                    <Button onClick={() => alert('Flow Completed!')} className="flex items-center justify-center gap-2">
                        Next <ArrowRight size={20} />
                    </Button>
                </div>

                <p className="text-center text-sm text-gray-600 mt-4">
                    I'm agree with Terms and Privacy Policy
                </p>
            </div>
        </Layout>
    );
};

export default CompleteDetails;
