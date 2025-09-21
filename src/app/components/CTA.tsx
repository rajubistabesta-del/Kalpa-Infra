// src/app/_components/CTA.tsx
import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Ready to Build Your Vision?</h2>
        <p className="text-xl font-light mb-8 max-w-3xl mx-auto">
          Contact us today for a free, no-obligation consultation. Let's start planning your next big project.
        </p>
        <Link
          href="/contact"
          className="inline-block px-12 py-4 bg-white text-blue-600 font-bold rounded-full text-lg shadow-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
        >
          Request a Free Quote
        </Link>
      </div>
    </section>
  );
}