export interface Experience {
  id: string;
  company: string;
  logo?: string;
  title: string;
  location?: string;
  startDate: string;
  endDate: string; // Use "Present" for current positions
  description: string;
  achievements?: string[];
  technologies?: string[];
  type:
    | "full-time"
    | "part-time"
    | "internship"
    | "contract"
    | "research"
    | "apprenticeship"
    | "freelance";
  featured: boolean;
}

export const experiences: Experience[] = [
  {
    id: "teads-apprenticeship",
    company: "Teads",
    logo: "/teads-logo.webp",
    title: "Data Scientist",
    location: "Montpellier, France",
    startDate: "Oct 2024",
    endDate: "Present",
    description:
      "Worked on feature selection, feature engineering, and hyperparameter tuning for bidding and cost prediction models.",
    technologies: [
      "Python",
      "SQL",
      "Machine Learning",
      "Data Pipelines",
      "A/B Testing",
      "Scala",
    ],
    type: "apprenticeship",
    featured: true,
  },
  {
    id: "booklink-freelance",
    company: "Booklink",
    logo: "/booklink-logo.webp",
    title: "Data Science Consultant",
    location: "Remote",
    startDate: "Aug 2024",
    endDate: "Present",
    description:
      "Implemented a Two-Tower Recommendation System, boosting user's positive interactions compared to legacy collaborative filtering.",
    technologies: [
      "Recommendation Systems",
      "Python",
      "AWS",
      "Machine Learning",
      "Data Pipelines",
      "IAC",
    ],
    type: "freelance",
    featured: true,
  },
  {
    id: "kaliop-software-engineering",
    company: "Kaliop",
    logo: "/kaliop-logo.webp",
    title: "Backend Software Engineer",
    location: "Montpellier, France",
    startDate: "Jan 2023",
    endDate: "Oct 2024",
    description:
      "Developed solutions for large clients. Worked on a RAG-based LLM proof of concept for France's Ministry of Tourism.",
    technologies: [
      "LLM",
      "Natural Language Processing",
      "GCP",
      "Infrastructure",
      "GraphQL",
      "Docker",
    ],
    type: "apprenticeship",
    featured: true,
  },
  {
    id: "freelance-data-software-engineer",
    company: "Freelance",
    logo: "/freelance-logo.png",
    title: "Data & Software Engineer",
    location: "Paris, France",
    startDate: "Oct 2020",
    endDate: "Oct 2022",
    description:
      "Delivered utility discord bots for clients including Partouche Casinos. Created a scoring algorithm with a discord bot to check rarity of a given NFT.",
    technologies: ["MongoDB", "JavaScript", "Web3", "Discord API"],
    type: "freelance",
    featured: true,
  },
];

// Helper functions
export const getFeaturedExperiences = () =>
  experiences.filter((exp) => exp.featured);
export const getExperiencesByType = (type: Experience["type"]) =>
  experiences.filter((exp) => exp.type === type);
export const getCurrentExperiences = () =>
  experiences.filter((exp) => exp.endDate === "Present");
export const getExperienceById = (id: string) =>
  experiences.find((exp) => exp.id === id);
