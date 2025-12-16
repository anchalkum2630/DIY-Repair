import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrench } from 'lucide-react'; // Placeholder for Tools Icon

const Splash = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/profile'); // Flow: Splash -> Profile (as per typical demo flow, or Chat)
        }, 2000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="h-screen w-full bg-white flex flex-col items-center justify-center">
            <div className="flex flex-col items-center gap-6">
                {/* Logo Icon - Crossed Tools */}
                <div className="relative w-24 h-24 flex items-center justify-center">
                    {/* Wrench */}
                    <Wrench className="text-primary w-20 h-20 absolute rotate-[-15deg] fill-primary/20 z-10" strokeWidth={1.5} />
                    {/* Placeholder for Screwdriver - reusing Wrench but flipped nicely or defining a simple SVG/Lucide alternative */}
                    {/* Since Lucide doesn't have a perfect screwdriver that matches the specific style, I'll use Wrench rotated to form an 'X' or similar */}
                    <Wrench className="text-primary w-20 h-20 absolute rotate-[75deg] fill-primary/20" strokeWidth={1.5} style={{ transform: 'scaleX(-1) rotate(75deg)' }} />
                </div>

                <h1 className="text-4xl font-bold tracking-[0.2em] text-primary flex items-center justify-center uppercase">
                    DIY<span className="font-bold text-primary ml-2">Repair</span>
                </h1>
            </div>
        </div>
    );
};

export default Splash;
