// src/app/components/Footer.tsx

import React from 'react';
import Link from 'next/link';

const Footer = () => (
    <footer className="bg-[#0D3B66] text-white py-12">
        <div className="px-6 flex flex-col items-center">
            <div className="text-center mb-6">
                <h2 className="text-3xl font-bold mb-2">KALPA INFRA</h2>
                <p className="text-gray-300 max-w-lg text-justify">
                    Delivering modern, sustainable, and elegant homes and commercial buildings with precision in Nepal. We are committed to building a brighter future, one project at a time.
                </p>
            </div>
            <div className="flex flex-wrap justify-center space-x-6 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <a href="mailto:info@kalpainfra.com" className="hover:text-white transition-colors duration-300">
                        info@kalpainfra.com
                    </a>
                </div>
                <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                    <a href="tel:+9779704593190" className="hover:text-white transition-colors duration-300">
                        +977 9704593190
                    </a>
                </div>
            </div>
            <div className="mt-8 text-center text-xs text-gray-500">
                &copy; {new Date().getFullYear()} KALPA INFRA Pvt. Ltd. All rights reserved.
            </div>
        </div>
    </footer>
);

export default Footer;
