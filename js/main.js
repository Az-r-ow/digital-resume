// Dinamically rendering the projects

// Getting the paths of the logos
const cpp = "./images/cpp_logo.png";
const c = "./images/c_logo.png";
const css = "./images/css_logo.png";
const discord = "./images/discord_logo.png";
const html = "./images/html_logo.png";
const js = "./images/js_logo.png";
const mongodb = "./images/mongodb_logo.png";
const nodejs = "./images/nodejs_logo.png";
const python = "./images/python_logo.png";

const projects = [
  {
    name: "Token Classification",
    repoUrl: "https://github.com/Az-r-ow/TravelNER",
    technos: [python],
    description: `
    We were asked to develop a solution for extracting the departure and arrival locations from a given text. Then, using this information and a train stations dataset, find the shortest path. </br></br>
    • Corpus generation and cleaning </br>
    • Text preprocessing techniques (Tokenization, Stemming, POS Tagging etc...) </br>
    • Named Entity Recognition using probabilistic (HMM), sequential (LSTM, BiLSTM) and deep learning models (CamemBERT)</br>
    • Shortest Path Algorithm (Dijkstra, A*) </br>
    `,
  },
  {
    name: "Medical Image Classification",
    repoUrl: "https://github.com/Az-r-ow/zoidberg",
    technos: [cpp, python],
    description: `
      The goal of the project was to classify torso X-ray images that have Pneumonia. The topics covered were : </br></br>
      • Image Processing Techniques (Edge Detection, Image Segmentation, Mask Generation etc...) </br>
      • Dimensionality Reduction using PCA</br>
      • Image Classification using various statistical and deep learning models
    `,
  },
  {
    name: "NeuralNet",
    repoUrl: "https://github.com/Az-r-ow/NeuralNet",
    technos: [cpp, python],
    description:
      "My attempt on creating a Neural Network library in C++ that supports customization similar to <a href='https://keras.io/getting_started/'>keras</a>.",
  },
  {
    name: "Connect (Puissance) 4 Terminal",
    technos: [c],
    repoUrl: "https://github.com/Az-r-ow/connect4#readme",
    description:
      "Terminal implementation of the connect 4 game that could be enjoyed with an adversary or against the computer. The experience is powered with ncurses.",
  },
  {
    name: "NFT Project Ranker",
    repoUrl: "https://github.com/Az-r-ow/rarity-bot",
    technos: [discord, js, mongodb, nodejs],
    description:
      "I implemented an algorithm that calculates the rarity score of an NFT in a certain Collection based on the probability of recurrence of its trait. Then the program ranks the NFTs in the collection and stores them in the Database. The user could check the rarity and rank through the discord bot made just for the project.",
  },
  {
    name: "Discord Casino Bot",
    technos: [js, nodejs, discord],
    repoUrl: "https://github.com/Az-r-ow/casino-bot",
    description:
      "I created this bot for an NFT project of casino partouche. It has its own currency system, where user can claim daily amounts of money and gamble them on games like BlackJack, High Low, Roulette and much more.",
  },
  {
    name: "AI Tic-Tac-Toe",
    technos: [python],
    repoUrl: "https://github.com/Az-r-ow/cs50-ai#readme",
    description:
      "This was an assignment from the CS50 AI course, I have my progress in the course so far on my github account with my commentary on each project in the README of the repo.",
  },
];

const projectsEjs = `
  <% projects.forEach((project, index) => { %>
    <div class="project-div" id="<%= index %>">
      <h3><%=project.name%></h3>
      <div class="information" id="<%= index %>">
        <% project.technos.forEach((tech) => { %>
          <span><img src=<%=tech %> width="50" height="50"></span>
        <% }) %>
        <p><%- project.description%></p>
        <div class="play-btn-div">
          <span><a href=<%= project.repoUrl %> target="_blank"><img src="./images/play_btn.png" height="50" width="150" alt="play_btn" /></a><span>
        </div>
      </div>
    </div>
  <% }) %>
`;
// Render the project's section
const projectsHtml = ejs.render(projectsEjs, { projects: projects });
$(".projects-section").append(projectsHtml);

// Hide the informatiom
$(".information").css("display", "none");

// On Click display them
$(".project-div").click(function () {
  const id = $(this).attr("id");

  $(`#${id}.information`).slideToggle("slow");
});

// Starting the page from the top on reload
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
