// src/app/components/Header.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-[#1a375f] z-50 shadow-lg backdrop-blur-md bg-opacity-90 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
                <Link href="/" className="flex items-center text-white text-xl font-bold rounded-lg transition-transform hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 mr-2 text-orange-400">
                        <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-2 font-bold text-lg sm:text-2xl tracking-wide">KALPA INFRA</span>
                </Link>
                <nav className="hidden md:flex space-x-8 text-sm lg:text-base font-medium">
                    <Link href="/" className="text-white hover:text-orange-400 transition-colors duration-300 relative group">Home<span className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></Link>
                    <Link href="/about" className="text-white hover:text-orange-400 transition-colors duration-300 relative group">About<span className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></Link>
                    <Link href="/services" className="text-white hover:text-orange-400 transition-colors duration-300 relative group">Services<span className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></Link>
                    <Link href="/projects" className="text-white hover:text-orange-400 transition-colors duration-300 relative group">Projects<span className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></Link>
                    <Link href="/contact" className="text-white hover:text-orange-400 transition-colors duration-300 relative group">Contact<span className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></Link>
                </nav>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-white focus:outline-none transition-transform duration-300 transform hover:scale-110">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </button>
                </div>
            </div>
            <div className={`md:hidden ${isMenuOpen ? 'flex' : 'hidden'} flex-col items-center bg-[#1a375f] bg-opacity-95 py-4 space-y-4`}>
                <Link onClick={toggleMenu} href="/" className="text-white hover:text-orange-400 transition-colors duration-300">Home</Link>
                <Link onClick={toggleMenu} href="/about" className="text-white hover:text-orange-400 transition-colors duration-300">About</Link>
                <Link onClick={toggleMenu} href="/services" className="text-white hover:text-orange-400 transition-colors duration-300">Services</Link>
                <Link onClick={toggleMenu} href="/projects" className="text-white hover:text-orange-400 transition-colors duration-300">Projects</Link>
                <Link onClick={toggleMenu} href="/contact" className="text-white hover:text-orange-400 transition-colors duration-300">Contact</Link>
            </div>
        </header>
    );
};

export default Header;