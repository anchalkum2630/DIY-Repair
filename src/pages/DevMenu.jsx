import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../ui/Layout';

const pages = [
    { path: '/splash', name: 'Splash Screen' },
    { path: '/login', name: 'Login' },
    { path: '/signup', name: 'Sign Up' },
    { path: '/forgot-password', name: 'Forgot Password' },
    { path: '/account-verification', name: 'Account Verification' },
    { path: '/mobile-entry', name: 'Mobile Entry' },
    { path: '/verify-phone', name: 'Verify Phone' },
    { path: '/verify-otp', name: 'Verify OTP' },
    { path: '/complete-details', name: 'Complete Details' },
    { path: '/profile', name: 'Profile' },
    { path: '/chat', name: 'Chat' },
];

const DevMenu = () => {
    return (
        <Layout className="bg-gray-50 p-6 min-h-screen">
            <h1 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-4">App Screens Gallery</h1>
            <p className="mb-6 text-gray-600">Click a link below to verify the implementation of each screen.</p>

            <div className="grid gap-4">
                {pages.map((page) => (
                    <Link
                        key={page.path}
                        to={page.path}
                        className="block p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:border-primary hover:shadow-md transition-all flex justify-between items-center group"
                    >
                        <span className="font-medium text-gray-800 group-hover:text-primary">{page.name}</span>
                        <span className="text-xs text-gray-400 font-mono bg-gray-50 px-2 py-1 rounded">{page.path}</span>
                    </Link>
                ))}
            </div>
        </Layout>
    );
};

export default DevMenu;
