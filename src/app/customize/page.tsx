'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import dynamic from 'next/dynamic';

// Dynamically import the CustomizeForm with SSR disabled
const CustomizeForm = dynamic(() => import('./CustomizeForm'), { ssr: false });

export default function CustomizePage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-24 min-h-screen flex justify-center">
        <CustomizeForm />
      </main>
      <Footer />
    </>
  );
}

