export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const emailAddress = "tarvindraju@gmail.com";

export const aboutMe =
  "AI Engineer building production LLM systems, RAG pipelines, and agentic AI workflows. I build the AI features that users actually interact with — from data extraction to multi-model orchestration to deployment. Currently shipping two production SaaS platforms at TsQs Inc. powered by Claude, GPT-4, Gemini, and custom evaluation frameworks.";

export const aiAndMlSkills = [
  "Large Language Models",
  "Generative AI",
  "Agentic AI",
  "RAG Pipelines",
  "Prompt Engineering",
  "Context Engineering",
  "LLM Evaluation",
  "NLP",
  "OpenAI API",
  "Anthropic API",
  "Google Gemini",
  "LangChain",
  "LangGraph",
  "Vector Embeddings",
  "Semantic Search",
];

export const languagesAndFrameworks = [
  "Python",
  "TypeScript",
  "JavaScript",
  "React",
  "Angular",
  "Next.js",
  "Node.js",
  "Express.js",
  "FastAPI",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
];

export const infrastructureAndTools = [
  "Docker",
  "Kubernetes",
  "AWS",
  "GCP Cloud Run",
  "CI/CD Pipelines",
  "Kafka",
  "Microservices",
  "REST APIs",
  "OAuth 2.0",
  "Git",
  "Grafana",
  "Prometheus",
];

export const projects = [
  {
    id: 1,
    title: "PrepAI - AI Mock Interview Simulator",
    des: [
      "Built an agentic interview engine using Next.js, FastAPI, and OpenAI API that autonomously adapts questions based on candidate responses using function calling and structured outputs.",
      "Implemented voice input via Web Speech API and real-time feedback over WebSockets, achieving 3x user engagement vs text-only.",
      "Deployed on GCP Cloud Run with 99.5% uptime and persistent session tracking for personalized performance analytics.",
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
    title: "DevDocer: RAG-Powered PDF Intelligence",
    des: [
      "Built a RAG pipeline using vector embeddings and semantic search to enable natural language Q&A over uploaded PDF documents.",
      "Implemented document chunking, embedding generation, and retrieval with Pinecone vector database for 90%+ answer relevance.",
      "Integrated AWS S3 for document storage and Stripe for subscription billing with secure auth flows.",
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
];

export const workExperience = [
  {
    id: 0,
    title: "AI Engineer Intern @ TsQs Inc.  •  Nov 2025 – Present",
    desc: [
      "Built an agentic email generation engine using Claude API with self-correcting MJML compilation loops, achieving 95%+ autonomous success rate across production workloads.",
      "Designed a production RAG pipeline from scratch (OpenAI embeddings → cascading semantic search → GPT-4 response generation) with citation constraints and hallucination prevention.",
      "Architected an intelligent document processing engine with 47 rules across 12 evaluation domains, expanding platform coverage by ~40%.",
      "Designed multi-model AI architecture orchestrating Claude, GPT-4, Gemini, and Ideogram with independent error recovery and automatic model routing.",
    ],
    featuredProjects: [
      {
        name: "Marketyr",
        tagline: "AI-Powered Marketing & Campaign Platform",
        description: "Agentic email generation with multi-model orchestration (Claude, GPT-4, Gemini, Ideogram). 95%+ autonomous success rate.",
        tech: ["Claude API", "GPT-4", "Angular", "Node.js", "MongoDB"],
        img: "/marketyr.png",
        gradient: "from-cyan-500/20 to-violet-500/20",
        borderColor: "border-cyan-500/30",
        accentColor: "text-cyan-400",
        link: "https://www.marketyrhq.com",
      },
      {
        name: "AccessGen",
        tagline: "AI Document Processing & Compliance Platform",
        description: "Full RAG pipeline with semantic search, intelligent document processing (47 rules, 12 domains), and AI chatbot with human-in-the-loop.",
        tech: ["OpenAI API", "React", "FastAPI", "Kubernetes", "MongoDB"],
        img: "/accessgen.png",
        gradient: "from-violet-500/20 to-blue-500/20",
        borderColor: "border-violet-500/30",
        accentColor: "text-violet-400",
        link: "https://www.accessgenhq.com",
      },
    ],
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 1,
    title: "Software Engineer @ nCoders Technology Solutions LLC  •  Aug 2025 – Nov 2025",
    desc: [
      "Built a Transactions Review Dashboard in React/TypeScript handling 100K+ financial records with virtualized rendering, cutting scroll lag by 60%.",
      "Redesigned categorization interface with dynamic forms and schema validation, reducing configuration errors by 30%.",
      "Standardized REST API contracts using TypeScript interfaces, reducing integration bugs during staging.",
    ],
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 2,
    title: "Software Engineer Intern @ Antra Inc  •  Mar 2025 – Jul 2025",
    desc: [
      "Built an advanced search interface in React, reducing document lookup latency from 1.8s to 800ms (55% faster).",
      "Implemented AWS S3 document upload with pre-signed URLs and checksum validation — zero failed uploads in production.",
      "Integrated Auth0 RBAC with audit logging and JWT middleware for enterprise compliance.",
    ],
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 3,
    title: "Software Engineer Intern @ RND4IMPACT INC.  •  Sep 2024 – Mar 2025",
    desc: [
      "Built Python FastAPI data ingestion services processing 5,000+ records/month with Pandas/NumPy at ~200ms response times.",
      "Automated daily financial reconciliation using APScheduler, eliminating 2+ hours/day of manual operations.",
      "Deployed containerized microservices on GCP Cloud Run via Docker with CI/CD and production health monitoring.",
    ],
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 4,
    title: "Software Engineer @ Jio Platforms Limited  •  Jun 2021 – Dec 2022",
    desc: [
      "Shipped 3 enterprise service integrations using Node.js/Express, serving a platform of 400M+ users.",
      "Integrated Apache Kafka for event-driven messaging with dead-letter queues and fault-tolerant processing.",
      "Achieved 90% test coverage using Mocha/Chai TDD, contributing to a 30% reduction in production incidents.",
      "Built CI/CD pipelines via Azure DevOps with Docker; monitored with Grafana + Prometheus.",
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
