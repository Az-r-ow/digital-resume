export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: string;
  type: "journal" | "conference" | "workshop" | "review" | "preprint";
  status: "published" | "accepted" | "under-review" | "submitted" | "draft";
  abstract?: string;
  image?: string;
  url?: string;
  doi?: string;
  pdfUrl?: string;
  keywords: string[];
  featured: boolean;
}

export const publications: Publication[] = [
  {
    id: "ml-healthcare-analytics",
    title:
      "Built to Generalize, Designed to Govern: Feature Engineering and Evolutionary Algorithms for Sustainable Water Use",
    authors: ["Lucas Chapuis", "Antoine Azar"],
    journal: "Environmental Data Science",
    year: "2025",
    type: "journal",
    status: "draft",
    // abstract: "None",
    // url: "#",
    // doi: "10.1016/j.jmi.2024.104567",
    keywords: [
      "machine learning",
      "environmental science",
      "crisis management",
      "ensemble methods",
    ],
    featured: true,
  },
];

// Helper functions
export const getFeaturedPublications = () =>
  publications.filter((pub) => pub.featured);
export const getPublicationsByType = (type: Publication["type"]) =>
  publications.filter((pub) => pub.type === type);
export const getPublicationsByYear = (year: string) =>
  publications.filter((pub) => pub.year === year);
export const getPublicationById = (id: string) =>
  publications.find((pub) => pub.id === id);
