// src/app/projects/page.tsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { projectDetails } from '../../lib/data';

const ProjectsPage = () => {
    return (
        <>
            <Header />
            <main id="projects" className="pt-20 md:pt-24 min-h-screen bg-gray-50 py-12">
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-[#1a375f]">
                        Our Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {(
                            Object.keys(projectDetails) as Array<keyof typeof projectDetails>
                        ).map((key) => (
                            <Link
                                key={key}
                                href={`/projects/${key}`}
                                className="cursor-pointer bg-white rounded-xl shadow-md overflow-hidden transform transition-transform hover:scale-105 duration-300"
                            >
                                <div className="w-full h-48 relative">
                                    <Image
                                        src={projectDetails[key].imageUrl}
                                        alt={projectDetails[key].title}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold mb-2 text-[#1a375f]">
                                        {projectDetails[key].title}
                                    </h3>
                                    <p className="text-gray-600 text-justify">
                                        {projectDetails[key].description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default ProjectsPage;
