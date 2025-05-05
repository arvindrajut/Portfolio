export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const emailAddress = "tarvindraju@gmail.com";

export const aboutMe =
  "Software Engineer with over 2 years of experience delivering dynamic solutions, including RESTful APIs and AI-driven platforms in fast-paced environments. Skilled in JavaScript, TypeScript, React, Next.js, and Node.js, with experience in scalable cloud systems, CI/CD pipelines, and full-stack development.";

export const programmingLanguagesAndFrameworks = [
  "JavaScript",
  "TypeScript",
  "Python",
  "HTML/CSS",
  "Next.js",
  "React.js",
  "Node.js",
  "Express.js",
];

export const databaseManagement = ["MongoDB", "MySQL", "Redis"];

export const devOpsAndTools = [
  "Azure DevOps",
  "CI/CD Pipelines",
  "Swagger",
  "AWS S3",
  "Neon Database",
  "Drizzle ORM",
];

export const projects = [
  {
    id: 1,
    title: "PrepAI - AI Mock Interview App",
    des: [
      "Built a full-stack platform using React, Next.js, Node.js, and Gemini AI to simulate mock interviews with real-time video input and AI-generated feedback.",
      "Implemented authentication, session tracking, and performance analysis for personalized user feedback.",
      "Deployed using Vercel with persistent storage integration and Gemini API for intelligent response evaluation.",
    ],
    img: "Prepai.png",
    iconLists: [
      "/react.svg",
      "/next.svg",
      "/materialui.svg",
      "/gemini.svg",
      "/nodejs.svg",
      "/mongodb.svg",
    ],
    link: "https://prepai-interview.vercel.app",
    github_link:
      "https://github.com/arvindrajut/AI-Interview-mocker-main/tree/main",
  },
  {
    id: 2,
    title: "DevDocer: AI PDF Document Reader",
    des: [
      "Implemented real-time chat and advanced search using vector embeddings with React and Node.js.",
      "Secured authentication and payment processing with AWS S3 and Stripe integration.",
      "Boosted document retrieval efficiency using RAG framework, Pinecone, and Neon Database with Drizzle ORM.",
    ],
    img: "devdocer.png",
    iconLists: [
      "/react.svg",
      "/nodejs.svg",
      "/neon_database_white.svg",
      "/aws_white.svg",
      "/stripe.png",
    ],
    link: "https://devdocer.vercel.app/",
    github_link: "",
  },
  {
    id: 3,
    title: "ChainFund DApp - Decentralized Finance (DeFi)",
    des: [
      "Developed Ethereum-based token standards (ERC20, ERC721, ERC1155) with Solidity and smart contracts.",
      "Enhanced transaction throughput and user features like dividends, asset-backed tokens, and governance.",
      "Implemented decentralized voting mechanisms and integrated portfolio management features.",
    ],
    img: "chainfund.png",
    iconLists: ["/solidity_white.svg", "ethereum.svg", "/javascript.svg"],
    link: "https://chain-fund-pn1d.vercel.app",
    github_link: "",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Volunteer Software Engineer @ RND4IMPACT INC. [Remote] Sep 2024 - Mar 2025",
    desc: [
      "Integrated Plaid Transactions API to fetch and sync financial data at ~200ms response time.",
      "Used node-cron to batch background job scheduling and reduce server load.",
      "Built financial dashboards in React.js with real-time summaries and filtering by categories.",
      "Optimized state management for real-time financial insights and responsiveness.",
    ],
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 2,
    title: "Software Engineer @ Jio Platforms Limited [On-site] Jun 2021 - Dec 2022",
    desc: [
      "Built RESTful APIs using Express.js with Swagger documentation and error handling.",
      "Designed React-based UIs and database ER diagrams for scalable web architecture.",
      "Applied TDD using Mocha, Chai, and Postman, achieving 90% code coverage.",
      "Maintained CI/CD pipelines with Azure DevOps and real-time monitoring via Grafana.",
      "Collaborated with SRE, backend, and frontend teams in Agile workflows.",
    ],
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/arvindrajut/",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/tadiarvindraju/",
  },
];

export const gridItems = [
  {
    id: 0,
    title: "My Skills",
    description: "I constantly try to improve",
    className:
      "lg:col-span-5 md:col-span-6 md:row-span-2 lg:row-span-2 text-purple",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
];
