// src/app/about/page.tsx

import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutPage = () => {
    return (
        <>
            <Header />
            <main id="about" className="pt-20 md:pt-24 min-h-screen bg-gray-100 py-12">
                <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 rounded-xl shadow-md max-w-7xl mx-auto">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8 text-[#1a375f]">About KALPA INFRA</h2>
                        <div className="text-center text-lg max-w-4xl mx-auto text-gray-600 mb-12">
                            <p className="text-justify">KALPA INFRA Pvt. Ltd. is an emerging construction company in Nepal, committed to delivering modern, sustainable, and aesthetically elegant residential and commercial spaces. With over a decade of experience in construction management, architectural planning, and project execution, we have built a reputation for reliability, quality, and innovation. Our team of skilled architects, engineers, and project managers works diligently to transform ideas into tangible structures that not only meet the client's needs but also enhance lifestyles and create lasting value. Every project is approached with meticulous attention to detail, utilizing the latest construction technologies, eco-friendly materials, and energy-efficient designs. Beyond building structures, we focus on creating spaces that inspire, nurture communities, and foster sustainable development for future generations.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
                            <div className="bg-gray-100 rounded-xl p-8 shadow-md">
                                <h3 className="text-3xl font-bold mb-4 text-[#1a375f]">Our Mission</h3>
                                <p className="text-gray-600 text-justify">To nurture development and create spaces that enrich lives, combining innovation, precision, and sustainability. We aim to deliver high-quality residential and commercial projects while building trust, transparency, and long-term relationships with our clients.</p>
                            </div>
                            <div className="bg-gray-100 rounded-xl p-8 shadow-md">
                                <h3 className="text-3xl font-bold mb-4 text-[#1a375f]">Our Vision</h3>
                                <p className="text-gray-600 text-justify">To be the most trusted and sought-after construction and architectural firm in Nepal, recognized for our innovative designs, unparalleled quality, and unwavering commitment to customer satisfaction.</p>
                            </div>
                        </div>
                        <div className="mt-16 bg-gray-100 rounded-xl p-8 shadow-md flex flex-col md:flex-row items-start md:items-start gap-8">
                            <div className="flex-1">
                                <h3 className="text-3xl font-bold mb-4 text-[#1a375f]">Message from Chairperson</h3>
                                <p className="text-gray-600 mb-4 text-justify">At Kalpa Infra Pvt. Ltd., our mission is to transform spaces into meaningful experiences that enrich lives. As an emerging construction and architectural company, we are passionate about creating well-designed spaces that enhance lifestyles, inspire productivity, and add lasting value for our clients.</p>
                                <p className="text-gray-600 mb-4 text-justify">Every project we take on is guided by innovation, precision, and sustainability. From the initial concept to final execution, our team collaborates closely with clients to bring their vision to life. We specialize in modern residential homes, renovations, and land development, using advanced construction techniques and quality materials to deliver structures that are both functional and beautiful.</p>
                                <p className="text-gray-600 mb-4 text-justify">We believe that construction is more than building walls—it’s about understanding our clients, nurturing relationships, and turning dreams into reality. With a strong focus on quality, safety, and ethical practices, we strive to ensure that every project is completed to the highest standard.</p>
                                <p className="text-gray-600 mb-4 text-justify">I am proud of our talented and growing team at Kalpa Infra, whose dedication and creativity fuel our progress. As we continue to expand, our goal remains clear: to redefine standards of excellence in Nepal’s construction industry and help our clients build the spaces they’ve always envisioned.</p>
                                <p className="font-semibold text-[#1a375f]">Er. Raju Bista</p>
                                <p className="text-sm text-gray-500">Msc. in Construction Management</p>
                            </div>
                            <div className="w-64 h-80 flex-shrink-0">
                                <img src="/images/chairperson-photo.jpg" alt="Er. Raju Bista" className="w-full h-full object-cover rounded-xl shadow-lg" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default AboutPage;