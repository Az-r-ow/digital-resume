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
  {
    id: "correctionnet-abstract",
    title:
      "CorrectionNet: A lightweight residual refinement framework for improving medical image segmentation.",
    authors: ["Antoine Azar", "Cally Lin", "Naryeong Kim"],
    journal: "AACR Annual Meeting",
    year: "2026",
    type: "conference",
    status: "published",
    url: "https://doi.org/10.1158/1538-7445.AM2026-2786",
    doi: "10.1158/1538-7445.AM2026-2786",
    keywords: [
      "medical imaging",
      "deep learning",
      "image segmentation",
      "residual networks",
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
