import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import CTA from '@/app/components/CTA';

// A placeholder component for the service details page
export default async function ServiceDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // Resolve the promise

  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-8">Service: {slug}</h1>
          <p className="text-gray-600 text-center">
            This is a placeholder for the service details page.
          </p>
          <div className="mt-12">
            <CTA />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}