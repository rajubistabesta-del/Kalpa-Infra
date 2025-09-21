// src/app/projects/[slug]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import CTA from "@/app/components/CTA";
import type { Metadata } from "next";

/**
 * ✅ Centralized project data
 * Each project has: slug, title, category, image, description, details, gallery
 */
const projectsData = [
  {
    slug: "riverside-residence",
    title: "Riverside Residence",
    category: "Residential",
    image: "/images/project-riverside-lg.jpg",
    description:
      "A modern riverside home with expansive windows, sustainable materials, and an open-plan design.",
    details: [
      "3 Bedrooms, 2 Bathrooms",
      "Modern kitchen and living area",
      "Eco-friendly building materials",
    ],
    gallery: [
      "/images/project-riverside-1.jpg",
      "/images/project-riverside-2.jpg",
      "/images/project-riverside-3.jpg",
    ],
  },
  {
    slug: "downtown-corporate-tower",
    title: "Downtown Corporate Tower",
    category: "Commercial",
    image: "/images/project-corporate-lg.jpg",
    description:
      "A landmark 25-story corporate office building in the city's financial district. Designed for energy efficiency with smart building management systems and a rooftop garden.",
    details: [
      "25-story office tower",
      "Smart building management",
      "Rooftop garden and amenities",
    ],
    gallery: [
      "/images/project-corporate-1.jpg",
      "/images/project-corporate-2.jpg",
      "/images/project-corporate-3.jpg",
    ],
  },
  {
    slug: "greenwood-family-home",
    title: "Greenwood Family Home",
    category: "Residential",
    image: "/images/project-greenwood-lg.jpg",
    description:
      "A complete overhaul and modernization of a classic family home. Expanded living spaces, open-concept kitchen, and upgraded electrical and plumbing systems.",
    details: [
      "Open-concept living spaces",
      "Modern kitchen upgrade",
      "Electrical and plumbing modernization",
    ],
    gallery: [
      "/images/project-greenwood-1.jpg",
      "/images/project-greenwood-2.jpg",
      "/images/project-greenwood-3.jpg",
    ],
  },
];

// ✅ Proper metadata generation (Next.js 15 uses async params)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }
  return {
    title: `${project.title} | Kalpa Infra Projects`,
    description: project.description,
  };
}

// ✅ Main project detail page
export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Main Project Image */}
        <div className="relative w-full h-[400px] md:h-[550px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="p-6 md:p-10">
          <span className="text-blue-600 font-semibold text-sm mb-2 block uppercase">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {project.description}
          </p>

          {/* Project Details */}
          {project.details.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Project Details
                </h2>
                <ul className="text-gray-600 space-y-2">
                  {project.details.map((detail, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-blue-600 mr-2">&bull;</span> {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Project Gallery */}
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Project Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.gallery.map((img, index) => (
              <div
                key={index}
                className="relative w-full h-64 overflow-hidden rounded-xl shadow-md"
              >
                <Image
                  src={img}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-24">
        <CTA />
      </div>
    </div>
  );
}
