export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const emailAddress = "tarvindraju@gmail.com";

export const aboutMe =
  "Full-stack Software Engineer with 2+ years of experience building fast, reliable web apps and APIs. I work across React/Next.js, Node.js/Express, and Java/Spring Boot, with hands-on ownership of data models (PostgreSQL, MySQL, MongoDB), cloud deployments (AWS S3, GCP Cloud Run, Azure DevOps), CI/CD, testing, and performance tuning.";

export const programmingLanguagesAndFrameworks = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "HTML/CSS",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "Spring Boot",
  "FastAPI",
];

export const databaseManagement = [
  "PostgreSQL (Neon)",
  "MySQL",
  "MongoDB",
  "Redis",
];

export const devOpsAndTools = [
  "Docker",
  "AWS S3",
  "GCP Cloud Run",
  "Azure DevOps",
  "Git & GitHub Actions",
  "CI/CD Pipelines",
  "Swagger/OpenAPI",
  "Drizzle ORM",
  "Postman",
  "Jest",
  "React Testing Library",
  "Mocha",
  "Chai",
  "Sentry",
  "Grafana",
  "Prometheus",
  "APScheduler",
  "node-cron",
];

export const projects = [
  {
    id: 1,
    title: "PrepAI - AI Mock Interview App",
    des: [
      "Built a full-stack platform with React, Next.js, Node.js, and Gemini AI to simulate mock interviews with real-time feedback.",
      "Implemented auth, session tracking, and performance analytics for personalized feedback.",
      "Deployed on Vercel with persistent storage; integrated Gemini API for response evaluation.",
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
      "Implemented chat + semantic search with vector embeddings using React and Node.js.",
      "Secured auth and payments; integrated AWS S3 for uploads and Stripe for billing.",
      "Boosted retrieval with RAG using Pinecone and Neon (Postgres) via Drizzle ORM.",
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
      "Developed ERC20/721/1155 smart contracts in Solidity for tokenized assets.",
      "Added features like dividends, asset backing, governance, and portfolio tools.",
      "Shipped a responsive UI and on-chain interactions for end-to-end flows.",
    ],
    img: "chainfund.png",
    iconLists: ["/solidity_white.svg", "ethereum.svg", "/javascript.svg"],
    link: "https://chain-fund-pn1d.vercel.app",
    github_link: "",
  },
];

export const workExperience = [
  {
    id: 0,
    title: "Software Engineer @ nCoders Technology Solutions LLC  •  Aug 2025 – Present",
    desc: [
      "Built a Transactions Review dashboard in React + TypeScript with filters, pagination state, sticky summaries, and UAT-ready datasets.",
      "Improved transaction categorization with dynamic forms, validation, and contextual feedback to reduce rule misconfigurations.",
      "Applied list virtualization to smooth large-table scrolling and eliminate UI lag.",
      "Integrated REST APIs; refined error handling and client-side validation for robust staging flows.",
    ],
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 1,
    title: "Software Engineer @ Antra Inc  •  Mar 2025 – Aug 2025",
    desc: [
      "Delivered an advanced search UI in React backed by Java (Spring Boot) + MySQL; cut lookup times from ~1.8s to ~800ms.",
      "Built secure document uploads using AWS S3 pre-signed URLs and checksum validation.",
      "Implemented Auth0 role mapping and Java policy middleware for granular permissions with audit logging.",
      "Optimized MySQL queries and Spring Boot endpoints for ~35% faster responses on high-traffic features.",
    ],
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 2,
    title: "Software Engineer @ RND4IMPACT INC.  •  Sep 2024 – Mar 2025",
    desc: [
      "Integrated Plaid Transactions API with a Node.js backend to sync bank data (~5k+ monthly txns at ~200ms avg response).",
      "Automated periodic syncs and alerts via node-cron, improving freshness and reducing manual ops.",
      "Built React dashboards for filtering, categorization workflows, and real-time income/expense summaries.",
      "Optimized API consumption and state handling for ~35% faster dashboard loads.",
    ],
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 3,
    title: "Software Engineer @ Jio Platforms Limited  •  Jun 2021 – Dec 2022",
    desc: [
      "Designed RESTful APIs in Express.js with robust middleware, error handling, and Swagger docs.",
      "Shipped full-stack features with React + Express; modeled data flows and DB schemas (ERDs) for scalability.",
      "Applied TDD with Mocha/Chai/Postman to reach ~90% test coverage and reduce production issues.",
      "Containerized and deployed via Azure DevOps CI/CD + Docker; monitored with Grafana and Prometheus.",
    ],
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  { id: 1, img: "/git.svg", link: "https://github.com/arvindrajut/" },
  { id: 3, img: "/link.svg", link: "https://www.linkedin.com/in/tadiarvindraju/" },
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
