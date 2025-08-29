export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: string;
  type: "journal" | "conference" | "workshop" | "review" | "preprint";
  status: "published" | "accepted" | "under-review" | "submitted" | "draft";
  abstract: string;
  url?: string;
  doi?: string;
  pdfUrl?: string;
  keywords: string[];
  featured: boolean;
}

export const publications: Publication[] = [
  {
    id: "ml-healthcare-analytics",
    title: "Machine Learning Approaches for Predictive Healthcare Analytics",
    authors: ["A. Chen", "M. Rodriguez", "S. Kim"],
    journal: "Journal of Medical Informatics",
    year: "2024",
    type: "journal",
    status: "published",
    abstract:
      "This paper explores the application of ensemble machine learning methods in healthcare predictive analytics, demonstrating improved accuracy in patient outcome prediction.",
    url: "#",
    doi: "10.1016/j.jmi.2024.104567",
    keywords: [
      "machine learning",
      "healthcare",
      "predictive analytics",
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
