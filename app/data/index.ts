export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const emailAddress = "arvind1tadi@gmail.com";

export const aboutMe =
  "Software Engineer with over 7 years of experience delivering dynamic solutions including cloud-native platforms, RESTful APIs, and real-time data dashboards. Proficient in React.js, Next.js, Node.js, and Python, with deep experience in scalable architectures, CI/CD, and performance monitoring.";

export const programmingLanguagesAndFrameworks = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "HTML/CSS",
  "Next.js",
  "React.js",
  "Node.js",
  "Express.js",
];

export const databaseManagement = [
  "MongoDB",
  "MySQL",
  "Redis",
  "Mongoose",
  "Drizzle ORM",
  "Pinecone",
];

export const devOpsAndTools = [
  "Azure DevOps",
  "GitHub Actions",
  "Docker",
  "CI/CD Pipelines",
  "Swagger",
  "AWS S3",
  "Prometheus",
  "Grafana",
  "Neon Database",
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
    title: "Software Engineer @ EmergenceTek Group (ETG)  Mar 2024 - Present",
    desc: [
      "Developed Cloud Inventory UI using React.js and TypeScript to visualize AWS EC2 and S3 resources.",
      "Implemented cost analysis dashboards with React Query and Chart.js, improving usage insights.",
      "Optimized caching strategies and mobile responsiveness for faster load and accessibility.",
    ],
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Engineer @ Algonquin Studios  Jan 2023 - Mar 2024",
    desc: [
      "Built complex client onboarding flows and admin dashboards using React, Formik, and Tailwind CSS.",
      "Integrated secure document uploads with AWS S3 signed URLs and React Dropzone.",
      "Enhanced performance and UX through responsive layouts and real-time form validation.",
    ],
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Software Engineer @ Jio Platforms Limited  Jun 2021 - Dec 2022",
    desc: [
      "Built RESTful APIs using Express.js and documented them with Swagger.",
      "Developed React-based dashboards and collaborated with backend and SRE teams using Agile.",
      "Automated deployments using Azure DevOps and monitored services with Grafana.",
    ],
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 4,
    title: "Software Engineer @ Skit.ai (Vernacular.ai)  May 2018 - Jun 2021",
    desc: [
      "Built real-time dashboards and live transcription views using React.js, Redux, and WebSockets.",
      "Developed analytics APIs with Node.js and implemented RBAC with JWT.",
      "Integrated Prometheus and Grafana to monitor service health and response latency.",
    ],
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
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
    description: "Over 7 years of building scalable, secure, and intuitive software solutions.",
    className:
      "lg:col-span-5 md:col-span-6 md:row-span-2 lg:row-span-2 text-purple",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
];
