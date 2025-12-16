import React from 'react';
import { Wrench, MoreVertical, Mic, PenLine } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '../ui/Layout';

// Chat Bubble Component
const ChatBubble = ({ isBot, message, children }) => {
    return (
        <div className={`flex items-end gap-3 mb-6 ${isBot ? 'flex-row' : 'flex-row-reverse'}`}>
            {isBot && (
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shrink-0 border-2 border-white shadow-sm z-10">
                    {/* Robot Icon Placeholder */}
                    <div className="text-white text-2xl">🤖</div>
                </div>
            )}

            {!isBot && (
                <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User"
                    className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
                />
            )}

            <div className={`max-w-[80%] p-4 rounded-2xl shadow-sm text-sm font-medium leading-relaxed
                ${isBot
                    ? 'bg-white text-gray-800 rounded-tl-none'
                    : 'bg-blue-500 text-white rounded-tr-none'
                }`}>
                {message}
                {children}
            </div>
        </div>
    );
};

import bg3d from '../assets/bg-3d.png';

const Chat = () => {
    return (
        <Layout className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 z-0 top-[60px]"> {/* top-60px to start below fixed header if needed, or just inset-0 */}
                <img src={bg3d} alt="Background" className="w-full h-full object-cover opacity-100" />
            </div>

            {/* Header */}
            <div className="bg-white px-6 py-4 flex justify-between items-center shadow-sm sticky top-0 z-20 relative">
                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                    <Wrench className="w-5 h-5 fill-primary" />
                    <span>DIYRepair</span>
                </div>
                <button>
                    <MoreVertical className="text-gray-400" size={20} />
                </button>
            </div>

            <div className="flex-1 p-6 relative z-10">
                {/* Background decoration */}
                <div className="fixed inset-0 pointer-events-none overflow-hidden">
                    {/* Abstract shapes if needed, keeping it clean for now */}
                </div>

                <div className="mt-8">
                    <ChatBubble isBot={true} message="Hi Jane!" />
                    <ChatBubble isBot={true} message="How can I assist you?" />
                    <ChatBubble isBot={false} message="Repair mackbook" />

                    <div className="flex items-end gap-3 mb-6">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shrink-0 border-2 border-white shadow-sm z-10">
                            <div className="text-white text-2xl">🤖</div>
                        </div>
                        <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] w-full">
                            <p className="text-sm font-medium text-gray-800 mb-3">Which repair you want to choose?</p>
                            <button className="w-full bg-white border border-gray-100 p-3 rounded-xl mb-2 flex justify-between items-center text-sm font-medium text-gray-700 hover:bg-gray-50 shadow-sm">
                                Simple Repair
                                <span className="text-blue-500 font-bold">&gt;</span>
                            </button>
                            <button className="w-full bg-white border border-gray-100 p-3 rounded-xl flex justify-between items-center text-sm font-medium text-gray-700 hover:bg-gray-50 shadow-sm">
                                Complex Repair
                                <span className="text-blue-500 font-bold">&gt;</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100 flex items-center gap-4">
                <button className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500">
                    <PenLine size={20} />
                </button>
                <div className="flex-1">
                    <input type="text" placeholder="Ask Something..." className="w-full text-sm outline-none text-gray-600 placeholder-gray-400" />
                </div>
                <button className="w-12 h-12 bg-white border border-blue-50 rounded-full flex items-center justify-center text-blue-500 shadow-sm">
                    <Mic size={20} />
                </button>
            </div>
        </Layout>
    );
};

export default Chat;
