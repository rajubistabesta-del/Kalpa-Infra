// src/components/Services.tsx
"use client";

import { HomeIcon, BuildingOfficeIcon, BriefcaseIcon, CubeIcon, DocumentTextIcon, MapIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const services = [
  { title: "House Design", icon: HomeIcon, link: "/services/house-design" },
  { title: "Renovation", icon: BuildingOfficeIcon, link: "/services/renovation" },
  { title: "Construction", icon: BriefcaseIcon, link: "/services/construction" },
  { title: "Material Supply", icon: CubeIcon, link: "/services/material-supply" },
  { title: "Valuation", icon: DocumentTextIcon, link: "/services/valuation" },
  { title: "Land Development", icon: MapIcon, link: "/services/land-development" },
];

export default function Services() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-12">Our Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link key={service.title} href={service.link} className="group flex flex-col items-center p-6 bg-blue-50 rounded-xl shadow-lg hover:bg-blue-100 transition duration-300">
              <service.icon className="w-12 h-12 text-blue-600 mb-4 group-hover:text-blue-700 transition duration-300" />
              <h3 className="text-xl font-semibold text-blue-800 group-hover:text-blue-900 transition duration-300">{service.title}</h3>
              <p className="text-gray-600 mt-2">Professional services tailored to your needs.</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
