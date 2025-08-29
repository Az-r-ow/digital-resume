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
  type: "full-time" | "part-time" | "internship" | "contract" | "research";
  featured: boolean;
}

export const experiences: Experience[] = [
  {
    id: "techcorp-analytics",
    company: "TechCorp Analytics",
    logo: "/techcorp-logo.png",
    title: "Junior Data Scientist",
    location: "San Francisco, CA",
    startDate: "Jan 2024",
    endDate: "Present",
    description:
      "Developed machine learning models for customer behavior prediction, resulting in 15% improvement in marketing campaign effectiveness. Built automated data pipelines using Python and SQL, processing over 1M records daily.",
    technologies: ["Python", "SQL", "Machine Learning", "Data Pipelines"],
    type: "full-time",
    featured: true,
  },
  {
    id: "dataflow-solutions",
    company: "DataFlow Solutions",
    logo: "/dataflow-logo.png",
    title: "Data Science Intern",
    location: "New York, NY",
    startDate: "Jun 2023",
    endDate: "Dec 2023",
    description:
      "Conducted exploratory data analysis on large datasets to identify business insights. Created interactive dashboards using Tableau and Power BI for stakeholder reporting. Collaborated with cross-functional teams on A/B testing initiatives.",
    technologies: ["Python", "Tableau", "Power BI", "A/B Testing", "EDA"],
    type: "internship",
    featured: true,
  },
  {
    id: "university-research-lab",
    company: "University Research Lab",
    logo: "/university-logo.png",
    title: "Research Assistant",
    location: "Boston, MA",
    startDate: "Sep 2022",
    endDate: "May 2023",
    description:
      "Assisted in academic research on natural language processing applications. Implemented deep learning models using TensorFlow and PyTorch. Co-authored 2 research papers published in peer-reviewed journals.",
    technologies: ["TensorFlow", "PyTorch", "NLP", "Deep Learning", "Research"],
    type: "research",
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
