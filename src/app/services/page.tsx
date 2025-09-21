import React from 'react';
import Link from 'next/link';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { serviceDetails } from '../../lib/data';

const ServicesPage = () => {
    return (
        <>
            <Header />
            <main id="services" className="pt-20 md:pt-24 min-h-screen bg-gray-100 py-12">
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-[#1a375f]">
                        Our Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {(Object.keys(serviceDetails) as Array<keyof typeof serviceDetails>).map((key) => (
                            <Link
                                key={key}
                                href={`/services/${key}`} // Use the key as the slug
                                className="cursor-pointer bg-white rounded-xl p-8 shadow-md hover:shadow-xl transform transition-transform hover:-translate-y-2 duration-300"
                            >
                                <h3 className="text-2xl font-semibold mb-3 text-[#1a375f]">
                                    {serviceDetails[key].title}
                                </h3>
                                <p className="text-gray-600 text-justify">
                                    {serviceDetails[key].subtext}
                                </p>
                            </Link>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default ServicesPage;
