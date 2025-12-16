import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../ui/Layout';
import { CreditCard, Bell, ShoppingBag, Info, LogOut, Edit, ChevronRight } from 'lucide-react';

const MenuItem = ({ icon: Icon, title, subtitle, to = '#' }) => (
    <Link to={to} className="flex items-center justify-between py-4 border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
        <div className="flex items-center gap-4">
            <div className={`p-0 rounded-lg`}>
                <Icon size={24} className="text-gray-900" strokeWidth={1.5} />
            </div>
            <div>
                <h3 className="text-base font-bold text-gray-900">{title}</h3>
                {subtitle && <p className="text-xs text-gray-400 mt-0.5">{subtitle}</p>}
            </div>
        </div>
        <ChevronRight size={20} className="text-gray-300" />
    </Link>
);

const Profile = () => {
    return (
        <Layout className="bg-white">
            <div className="px-6 pt-12 pb-6">
                {/* Header Bar */}
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

                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                        <img
                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="Profile"
                            className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm"
                        />
                        <div>
                            <h2 className="text-xl font-bold text-gray-900">@username</h2>
                            <p className="text-xs text-gray-400 mt-1 flex flex-col">
                                <span>+34 -699146032</span>
                                <span>2222test@gmao;.com</span>
                            </p>
                        </div>
                    </div>
                    <button className="text-blue-600 font-semibold text-sm flex items-center gap-1">
                        Edit <ChevronRight size={14} />
                    </button>
                </div>

                <div className="h-[1px] bg-gray-100 w-full mb-6"></div>

                <div className="flex flex-col gap-2">
                    <MenuItem
                        icon={CreditCard}
                        title="Subscription Information"
                        subtitle="Transaction History"
                    />
                    <MenuItem
                        icon={Bell}
                        title="Notifications"
                        subtitle="View your past notifications"
                    />
                    <MenuItem
                        icon={ShoppingBag}
                        title="Become a plus member"
                        subtitle="Want to list your service? Register with us"
                    />
                    <MenuItem
                        icon={Info}
                        title="Tracking"
                        subtitle="Track donations, requests, and levels"
                    />

                    <div className="mt-4">
                        <Link to="/" className="flex items-center gap-4 py-4 text-red-500 font-bold">
                            <LogOut size={24} strokeWidth={1.5} />
                            Logout
                            <ChevronRight size={20} className="text-red-300 ml-auto" />
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Profile;
