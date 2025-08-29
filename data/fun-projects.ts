export interface FunProject {
  id: string;
  name: string;
  repoUrl?: string;
  technos: string[]; // Array of logo/icon paths
  description: string;
  featured: boolean;
  category: 'ml' | 'web' | 'game' | 'bot' | 'library' | 'other';
}

export const funProjects: FunProject[] = [
  {
    id: 'token-classification',
    name: 'Token Classification',
    repoUrl: 'https://github.com/Az-r-ow/TravelNER',
    technos: ['/python_logo.png'],
    description: `
      We were asked to develop a solution for extracting the departure and arrival locations from a given text. Then, using this information and a train stations dataset, find the shortest path. <br/><br/>
      • Corpus generation and cleaning <br/>
      • Text preprocessing techniques (Tokenization, Stemming, POS Tagging etc...) <br/>
      • Named Entity Recognition using probabilistic (HMM), sequential (LSTM, BiLSTM) and deep learning models (CamemBERT)<br/>
      • Shortest Path Algorithm (Dijkstra, A*) <br/>
    `,
    featured: true,
    category: 'ml'
  },
  {
    id: 'medical-image-classification',
    name: 'Medical Image Classification',
    repoUrl: 'https://github.com/Az-r-ow/zoidberg',
    technos: ['/cpp_logo.png', '/python_logo.png'],
    description: `
      The goal of the project was to classify torso X-ray images that have Pneumonia. The topics covered were : <br/><br/>
      • Image Processing Techniques (Edge Detection, Image Segmentation, Mask Generation etc...) <br/>
      • Dimensionality Reduction using PCA<br/>
      • Image Classification using various statistical and deep learning models
    `,
    featured: true,
    category: 'ml'
  },
  {
    id: 'neuralnet-library',
    name: 'NeuralNet',
    repoUrl: 'https://github.com/Az-r-ow/NeuralNet',
    technos: ['/cpp_logo.png', '/python_logo.png'],
    description: "My attempt on creating a Neural Network library in C++ that supports customization similar to <a href='https://keras.io/getting_started/'>keras</a>.",
    featured: true,
    category: 'library'
  },
  {
    id: 'connect-4-terminal',
    name: 'Connect (Puissance) 4 Terminal',
    technos: ['/c_logo.png'],
    repoUrl: 'https://github.com/Az-r-ow/connect4#readme',
    description: 'Terminal implementation of the connect 4 game that could be enjoyed with an adversary or against the computer. The experience is powered with ncurses.',
    featured: false,
    category: 'game'
  },
  {
    id: 'nft-rarity-bot',
    name: 'NFT Project Ranker',
    repoUrl: 'https://github.com/Az-r-ow/rarity-bot',
    technos: [
      '/discord_logo.png',
      '/js_logo.png',
      '/mongodb_logo.png',
      '/nodejs_logo.png'
    ],
    description: 'I implemented an algorithm that calculates the rarity score of an NFT in a certain Collection based on the probability of recurrence of its trait. Then the program ranks the NFTs in the collection and stores them in the Database. The user could check the rarity and rank through the discord bot made just for the project.',
    featured: true,
    category: 'bot'
  },
  {
    id: 'discord-casino-bot',
    name: 'Discord Casino Bot',
    technos: ['/js_logo.png', '/nodejs_logo.png', '/discord_logo.png'],
    repoUrl: 'https://github.com/Az-r-ow/casino-bot',
    description: 'I created this bot for an NFT project of casino partouche. It has its own currency system, where user can claim daily amounts of money and gamble them on games like BlackJack, High Low, Roulette and much more.',
    featured: false,
    category: 'bot'
  },
  {
    id: 'ai-tic-tac-toe',
    name: 'AI Tic-Tac-Toe',
    technos: ['/python_logo.png'],
    repoUrl: 'https://github.com/Az-r-ow/cs50-ai#readme',
    description: 'This was an assignment from the CS50 AI course, I have my progress in the course so far on my github account with my commentary on each project in the README of the repo.',
    featured: false,
    category: 'game'
  }
];

// Helper functions
export const getFeaturedFunProjects = () => funProjects.filter(project => project.featured);
export const getFunProjectsByCategory = (category: FunProject['category']) => funProjects.filter(project => project.category === category);
export const getFunProjectById = (id: string) => funProjects.find(project => project.id === id);
