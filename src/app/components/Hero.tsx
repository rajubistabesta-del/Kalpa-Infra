import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="w-full bg-gray-100 py-24 sm:py-32 px-4 sm:px-6 lg:px-8 text-center bg-cover bg-center" style={{ backgroundImage: "url('https://placehold.co/1920x1080/e5e7eb/6b7280?text=Building+Dreams')" }}>
      <div className="max-w-4xl mx-auto backdrop-blur-sm bg-white bg-opacity-20 p-8 rounded-2xl shadow-xl animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-[#1a375f] tracking-tight leading-tight mb-4">
          Nurturing Development, <br /> Building Dreams
        </h1>
        <p className="text-lg sm:text-xl text-gray-800 max-w-2xl mx-auto mb-8 font-medium">
          Delivering modern, sustainable, and elegant homes across Nepal with innovation and precision.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="#contact" className="bg-orange-400 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-orange-500 transition-all duration-300 transform hover:scale-105">
            Get a Free Quote
          </a>
          <a href="#projects" className="text-white font-medium hover:text-orange-400 transition-colors duration-300 relative group">
            Explore Our Work
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

