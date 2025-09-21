// src/servicesData.ts
export interface ServiceData {
  title: string;
  description: string;
  options: string[];
}

export const servicesData: Record<string, ServiceData> = {
  "house-design": {
    title: "House Design",
    description: "Innovative designs tailored to your lifestyle.",
    options: ["Modern", "Neo-Classical", "Luxury Villa"],
  },
  renovation: {
    title: "Renovation",
    description: "Transform existing spaces into modern, functional areas.",
    options: ["Project 1", "Project 2", "Project 3"],
  },
  construction: {
    title: "Construction",
    description: "Complete construction services from planning to execution.",
    options: ["Residential", "Commercial", "Industrial"],
  },
  "material-supply": {
    title: "Material Supply",
    description: "High-quality materials for construction projects.",
    options: ["Cement", "Bricks", "Steel", "Tiles"],
  },
  valuation: {
    title: "Valuation",
    description: "Accurate property valuation services for clients.",
    options: ["Residential Valuation", "Commercial Valuation", "Land Valuation"],
  },
  "land-development": {
    title: "Land Development",
    description: "Expert planning and development of land properties.",
    options: ["Subdivision Planning", "Infrastructure Development", "Land Use Optimization"],
  },
};
