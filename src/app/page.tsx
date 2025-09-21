// src/app/page.tsx

import Header from "./components/Header";
import Footer from "./components/Footer";

const HomePage = () => {
    return (
        <>
            <Header />
            <main id="home" className="pt-20 md:pt-24 min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center p-8 rounded-xl shadow-lg bg-white bg-opacity-90 backdrop-blur-sm transform transition-transform hover:scale-105 duration-300">
                    <h1 className="text-5xl font-bold text-[#1a375f] tracking-wide">Welcome to KALPA INFRA</h1>
                    <p className="mt-4 text-xl text-gray-600">Building a future with precision and passion.</p>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default HomePage;