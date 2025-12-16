import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './pages/SignUp';
import MobileEntry from './pages/MobileEntry';
import VerifyPhone from './pages/VerifyPhone';
import VerifyOTP from './pages/VerifyOTP';
import CompleteDetails from './pages/CompleteDetails';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import AccountVerification from './pages/AccountVerification';
import Splash from './pages/Splash';
import Chat from './pages/Chat';
import Profile from './pages/Profile';

import DevMenu from './pages/DevMenu';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Splash />} />
                <Route path="/dev" element={<DevMenu />} /> {/* Moved DevMenu to /dev */}
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/account-verification" element={<AccountVerification />} />
                <Route path="/mobile-entry" element={<MobileEntry />} />
                <Route path="/verify-phone" element={<VerifyPhone />} />
                <Route path="/verify-otp" element={<VerifyOTP />} />
                <Route path="/complete-details" element={<CompleteDetails />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
