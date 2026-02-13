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
    id: "voodoo-data-science",
    company: "Voodoo",
    logo: "/voodoo-logo.webp",
    title: "Data Scientist",
    location: "Paris, France",
    startDate: "Dec 2025",
    endDate: "Present",
    description:
      "Working on LTV prediction and user segmentation for games and social media apps.",
    technologies: [
      "Python",
      "SQL",
      "Machine Learning",
      "Data Pipelines",
      "A/B Testing",
    ],
    type: "full-time",
    featured: true,
  },
  {
    id: "teads-apprenticeship",
    company: "Teads",
    logo: "/teads-logo.webp",
    title: "Data Scientist",
    location: "Montpellier, France",
    startDate: "Oct 2024",
    endDate: "Nov 2025",
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
