// src/app/_components/Projects.tsx
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      name: "Luxury Villa",
      image: "/project-1.jpg", 
      link: "/projects/luxury-villa",
    },
    {
      name: "Corporate Office",
      image: "/project-2.jpg", 
      link: "/projects/corporate-office",
    },
    {
      name: "Residential Complex",
      image: "/project-3.jpg", 
      link: "/projects/residential-complex",
    },
  ];

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-6 text-center">
        {/* The "Our Projects" heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#3F5988] leading-tight mb-12 tracking-tight">
          Our Projects
        </h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.name} className="flex flex-col items-center text-center">
              <Link href={project.link} className="block group">
                <div className="relative w-full h-auto overflow-hidden rounded-md">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={500}
                    height={300}
                    className="w-full object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-normal text-gray-800 group-hover:underline">
                  {project.name}
                </h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}