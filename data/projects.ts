export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
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
    id: "token-classification",
    title: "Token Classification",
    description:
      "Travel NER system for extracting departure and arrival locations from text with shortest path finding.",
    longDescription: `
      We were asked to develop a solution for extracting the departure and arrival locations from a given text. 
      Then, using this information and a train stations dataset, find the shortest path.
      
      • Corpus generation and cleaning
      • Text preprocessing techniques (Tokenization, Stemming, POS Tagging etc...)
      • Named Entity Recognition using probabilistic (HMM), sequential (LSTM, BiLSTM) and deep learning models (CamemBERT)
      • Shortest Path Algorithm (Dijkstra, A*)
    `,
    technologies: [
      "Python",
      "NLP",
      "Machine Learning",
      "CamemBERT",
      "LSTM",
      "HMM",
    ],
    githubUrl: "https://github.com/Az-r-ow/TravelNER",
    featured: true,
    event: "🥉 Capegemini Hackathon",
    eventUrl:
      "https://www.capgemini.com/fr-fr/actualites/evenements/hackathon-water-scarcity/",
    startDate: "2024-01-01",
    endDate: "2024-06-01",
    status: "completed",
  },
  {
    id: "medical-image-classification",
    title: "Medical Image Classification",
    description:
      "Classification system for torso X-ray images to detect pneumonia using computer vision techniques.",
    longDescription: `
      The goal of the project was to classify torso X-ray images that have Pneumonia. The topics covered were:
      
      • Image Processing Techniques (Edge Detection, Image Segmentation, Mask Generation etc...)
      • Dimensionality Reduction using PCA
      • Image Classification using various statistical and deep learning models
    `,
    technologies: ["C++", "Python", "Computer Vision", "Deep Learning", "PCA"],
    githubUrl: "https://github.com/Az-r-ow/zoidberg",
    event: "🏆 PinkCC Hackathon",
    eventUrl: "https://montpellier-cancer.com/en/pinkcc-challenge-2025/",
    featured: true,
    startDate: "2023-09-01",
    endDate: "2024-02-01",
    status: "completed",
  },
  {
    id: "neuralnet-library",
    title: "NeuralNet Library",
    description:
      "A custom Neural Network library in C++ with Keras-like API for easy model creation and training.",
    longDescription:
      "My attempt on creating a Neural Network library in C++ that supports customization similar to Keras.",
    technologies: [
      "C++",
      "Neural Networks",
      "Deep Learning",
      "Library Development",
    ],
    githubUrl: "https://github.com/Az-r-ow/NeuralNet",
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
    longDescription:
      "Terminal implementation of the connect 4 game that could be enjoyed with an adversary or against the computer. The experience is powered with ncurses.",
    technologies: ["C", "ncurses", "Game Development", "AI"],
    githubUrl: "https://github.com/Az-r-ow/connect4",
    featured: false,
    startDate: "2023-03-01",
    endDate: "2023-05-01",
    status: "completed",
  },
  {
    id: "nft-rarity-bot",
    title: "NFT Project Ranker",
    description:
      "Discord bot that calculates and ranks NFT rarity scores based on trait probability analysis.",
    longDescription: `
      I implemented an algorithm that calculates the rarity score of an NFT in a certain Collection based on the 
      probability of recurrence of its trait. Then the program ranks the NFTs in the collection and stores them 
      in the Database. The user could check the rarity and rank through the discord bot made just for the project.
    `,
    technologies: [
      "JavaScript",
      "Node.js",
      "Discord.js",
      "MongoDB",
      "NFT Analysis",
    ],
    githubUrl: "https://github.com/Az-r-ow/rarity-bot",
    featured: true,
    startDate: "2022-08-01",
    endDate: "2022-12-01",
    status: "completed",
  },
  {
    id: "discord-casino-bot",
    title: "Discord Casino Bot",
    description:
      "Feature-rich Discord bot with currency system and multiple casino games including BlackJack and Roulette.",
    longDescription: `
      I created this bot for an NFT project of casino partouche. It has its own currency system, where user can 
      claim daily amounts of money and gamble them on games like BlackJack, High Low, Roulette and much more.
    `,
    technologies: [
      "JavaScript",
      "Node.js",
      "Discord.js",
      "Game Logic",
      "Economy System",
    ],
    githubUrl: "https://github.com/Az-r-ow/casino-bot",
    featured: false,
    startDate: "2022-06-01",
    endDate: "2022-10-01",
    status: "completed",
  },
  {
    id: "ai-tic-tac-toe",
    title: "AI Tic-Tac-Toe",
    description:
      "Intelligent Tic-Tac-Toe game implementation using minimax algorithm for optimal AI gameplay.",
    longDescription: `
      This was an assignment from the CS50 AI course, I have my progress in the course so far on my github 
      account with my commentary on each project in the README of the repo.
    `,
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
