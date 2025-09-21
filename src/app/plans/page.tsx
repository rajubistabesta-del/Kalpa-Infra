import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen font-sans">

      {/* Hero Section */}
      <section className="relative h-screen bg-gray-100 flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg" // Replace with your hero image
            alt="Modern House"
            fill
            priority
            className="object-cover opacity-70"
          />
        </div>
        <div className="absolute px-4 text-white z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Nurturing Development, Building Dreams
          </h1>
          <Link
            href="/plans"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg transition"
          >
            View Plans
          </Link>
        </div>
      </section>

      {/* Featured Plans Section */}
      <section className="py-20 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">Our Featured Plans</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((plan) => (
            <Link
              key={plan}
              href={`/plans/${plan}`}
              className="shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition"
            >
              <div className="relative w-full h-64">
                <Image
                  src={`/plans/plan${plan}.png`} // Replace with your plan images
                  alt={`Plan ${plan}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">Plan {plan}</h3>
                <p className="text-gray-600">
                  Modern design, spacious rooms, and eco-friendly style.
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About KALPA INFRA</h2>
          <p className="text-gray-700 text-lg">
            We are a dedicated construction company delivering modern, sustainable, 
            and elegant homes for our clients. Our mission is to nurture development 
            while turning your dreams into reality.
          </p>
        </div>
      </section>

    </main>
  );
}
