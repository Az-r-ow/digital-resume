export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
  event?: string;
  eventUrl?: string;
  startDate: string;
  endDate?: string;
  status: "completed" | "in-progress" | "planned";
}

export const projects: Project[] = [
  {
    id: "water-scarcity-hackathon",
    title: "Water-flow Prediction and Management",
    description:
      "Water-flow prediction model with resource management for different actors based on evolutionary algorithms.",
    technologies: ["Python", "XGBoost", "Feature Engineering", "PCA"],
    githubUrl: "https://github.com/lucas066001/WaterScarcity.Hackathon",
    featured: true,
    event: "🥉 Capegemini Hackathon",
    imageUrl: "/water-scarcity.png",
    eventUrl:
      "https://www.capgemini.com/fr-fr/actualites/evenements/hackathon-water-scarcity/",
    startDate: "2024-01-01",
    endDate: "2024-06-01",
    status: "completed",
  },
  {
    id: "ovarian-cancer-segmentation",
    title: "Ovarian Cancer Segmentation",
    description:
      "Improved [nnUnet's](https://github.com/MIC-DKFZ/nnUNet) segmentation by incorporating [radiomics](https://en.wikipedia.org/wiki/Radiomics) and a post-processing pipeline.",
    technologies: [
      "PyTorch",
      "Computer Vision",
      "Medical Imaging",
      "Radiomics",
      "MONAI",
    ],
    imageUrl: "/correction-net.png",
    event: "🏆 PinkCC Hackathon",
    eventUrl: "https://montpellier-cancer.com/en/pinkcc-challenge-2025/",
    featured: true,
    startDate: "2023-09-01",
    endDate: "2024-02-01",
    status: "completed",
  },
  {
    id: "token-classification",
    title: "Token Classification",
    description:
      "Token classifier for extracting departure and arrival locations from text or speech with shortest train path.",
    technologies: [
      "Python",
      "NLP",
      "Machine Learning",
      "CamemBERT",
      "LSTM",
      "HMM",
      "Whisper",
      "Shortest Path Algorithms",
    ],
    imageUrl: "/travel-ner.png",
    githubUrl: "https://github.com/Az-r-ow/TravelNER",
    featured: true,
    startDate: "2024-01-01",
    endDate: "2024-06-01",
    status: "completed",
  },
  {
    id: "neuralnet-library",
    title: "NeuralNet Library",
    description:
      "A Neural Network library in C++ with Keras-like API for easy model creation and training.",
    technologies: [
      "C++",
      "Neural Networks",
      "Deep Learning",
      "Library Development",
      "PyBind",
    ],
    githubUrl: "https://github.com/Az-r-ow/NeuralNet",
    imageUrl: "/neural-net.png",
    featured: true,
    startDate: "2023-06-01",
    endDate: "2023-12-01",
    status: "completed",
  },
  {
    id: "connect-4-terminal",
    title: "Connect 4 Terminal Game",
    description:
      "Terminal-based Connect 4 game with AI opponent and ncurses interface.",
    technologies: [
      "C",
      "ncurses",
      "Game Development",
      "Monte Carlo Tree Search",
      "Algorithms",
    ],
    githubUrl: "https://github.com/Az-r-ow/connect4",
    imageUrl: "/connect4-demo.gif",
    featured: true,
    startDate: "2023-03-01",
    endDate: "2023-05-01",
    status: "completed",
  },
  {
    id: "x-ray-pneumonia-detection",
    title: "X-Ray Pneumonia Detection",
    description:
      "Compared Deep Learning and traditional methods for detecting pneumonia in X-Ray images.",
    technologies: [
      "Python",
      "Deep Learning",
      "Computer Vision",
      "Medical Imaging",
      "PCA",
    ],
    githubUrl: "https://github.com/Az-r-ow/pneumonia-detection",
    imageUrl: "/pneumonia-detection.png",
    featured: true,
    startDate: "2022-08-01",
    endDate: "2022-12-01",
    status: "completed",
  },
  {
    id: "nft-rarity-bot",
    title: "NFT Project Ranker",
    description:
      "Discord bot that calculates and ranks NFT rarity scores based on trait probability.",
    technologies: [
      "JavaScript",
      "Node.js",
      "Discord.js",
      "MongoDB",
      "NFT Analysis",
    ],
    githubUrl: "https://github.com/Az-r-ow/rarity-bot",
    imageUrl: "/rarity-bot.png",
    featured: false,
    startDate: "2022-08-01",
    endDate: "2022-12-01",
    status: "completed",
  },
  {
    id: "ai-tic-tac-toe",
    title: "AI Tic-Tac-Toe",
    description:
      "Intelligent Tic-Tac-Toe game implementation using minimax algorithm for optimal AI gameplay.",
    technologies: ["Python", "AI", "Minimax Algorithm", "Game Theory"],
    githubUrl: "https://github.com/Az-r-ow/cs50-ai",
    featured: false,
    startDate: "2022-01-01",
    endDate: "2022-03-01",
    status: "completed",
  },
];

// Helper functions
export const getFeaturedProjects = () =>
  projects.filter((project) => project.featured);
export const getProjectById = (id: string) =>
  projects.find((project) => project.id === id);
