import { NextRequest, NextResponse } from "next/server";

// Comprehensive knowledge entries with weighted keywords
const ENTRIES = [
  {
    keywords: ["hi", "hey", "hello", "sup", "yo", "what's up", "howdy", "greetings"],
    response: "Hey there! 👋 I'm Arvind's AI assistant. I can tell you about his experience, skills, projects, or anything else. What would you like to know?",
    isGreeting: true,
  },
  {
    keywords: ["who is arvind", "about arvind", "introduce", "tell me about arvind", "overview", "summary", "background", "describe arvind", "who is he"],
    response: "Arvind Raju Tadi is an AI Engineer building production LLM systems, RAG pipelines, and agentic AI workflows. He's currently shipping two production SaaS platforms at TsQs Inc. powered by Claude, GPT-4, Gemini, and custom evaluation frameworks. He holds a Master's in Computer Science and has worked at companies including Jio Platforms (400M+ users), RND4IMPACT, Antra, nCoders, and now TsQs.",
  },
  {
    keywords: ["current", "tsqs", "now", "doing", "present", "today", "latest", "recent", "newest"],
    response: "Arvind is currently an AI Engineer at TsQs Inc. (Nov 2025 – Present), where he's building two production SaaS platforms:\n\n• Built an agentic email generation engine using Claude API with self-correcting MJML compilation loops — 95%+ autonomous success rate\n• Designed a production RAG pipeline (OpenAI embeddings → semantic search → GPT-4 generation) with hallucination prevention\n• Architected an intelligent document processing engine with 47 rules across 12 domains\n• Designed multi-model AI architecture orchestrating Claude, GPT-4, Gemini, and Ideogram with automatic failover",
  },
  {
    keywords: ["experience", "work history", "career", "job", "role", "where", "worked", "past", "previous", "resume", "cv", "all experience", "full experience", "companies"],
    response: "Here's Arvind's full work experience:\n\n🔹 AI Engineer @ TsQs Inc. (Nov 2025 – Present) — Building two production AI platforms (Marketyr & AccessGen) with multi-model orchestration, RAG pipelines, and agentic workflows\n\n🔹 Software Engineer @ nCoders (Aug – Nov 2025) — Built a Transactions Review Dashboard in React/TypeScript handling 100K+ records with virtualized rendering\n\n🔹 Software Engineer Intern @ Antra Inc (Mar – Jul 2025) — Advanced search UI, AWS S3 document uploads, Auth0 RBAC\n\n🔹 Software Engineer Intern @ RND4IMPACT (Sep 2024 – Mar 2025) — Python FastAPI data ingestion pipeline processing 5K+ records/month, deployed on GCP Cloud Run\n\n🔹 Software Engineer @ Jio Platforms Limited (Jun 2021 – Dec 2022) — Enterprise integrations for 400M+ users, Apache Kafka messaging, 90% test coverage, Azure DevOps CI/CD",
  },
  {
    keywords: ["marketyr", "marketing", "email generation", "campaign", "email platform"],
    response: "Marketyr (marketyrhq.com) is an AI-Powered Marketing & Campaign Platform that Arvind built at TsQs. Key features:\n\n• Agentic email generation with self-correcting MJML compilation loops — 95%+ autonomous success rate\n• Multi-model orchestration: Claude for content, GPT-4 for refinement, Gemini/Ideogram for visuals\n• Website brand analyzer extracting brand DNA from live URLs for RAG-grounded generation\n• Multi-channel content adaptation (email → SMS, WhatsApp, Instagram)\n\nTech: Claude API, GPT-4, Angular, Node.js, MongoDB\n🔗 marketyrhq.com",
  },
  {
    keywords: ["accessgen", "document", "compliance", "wcag", "accessibility", "idp", "document processing"],
    response: "AccessGen (accessgenhq.com) is an AI Document Processing & Compliance Platform that Arvind built at TsQs. Key features:\n\n• Production RAG pipeline: OpenAI embeddings → cascading semantic search → GPT-4 response generation\n• Intelligent Document Processing engine with 47 rules across 12 evaluation domains\n• AI chatbot with human-in-the-loop for compliance Q&A\n• Citation constraints and hallucination prevention built in\n\nTech: OpenAI API, React, FastAPI, Kubernetes, MongoDB\n🔗 accessgenhq.com",
  },
  {
    keywords: ["project", "built", "portfolio", "work on", "made", "created", "shipped", "developed", "side project"],
    response: "Here are Arvind's key projects:\n\n🚀 Marketyr (marketyrhq.com) — AI marketing platform with agentic email generation and multi-model orchestration\n🚀 AccessGen (accessgenhq.com) — AI document processing & compliance platform with full RAG pipeline\n🚀 PrepAI — AI mock interview simulator using Next.js, FastAPI, and OpenAI with voice input via Web Speech API\n🚀 DevDocer — RAG-powered PDF intelligence tool with vector search and Pinecone",
  },
  {
    keywords: ["rag", "retrieval", "embedding", "vector", "semantic search", "pipeline", "search"],
    response: "Arvind designed a production RAG pipeline from scratch at TsQs for AccessGen:\n\n1. Document ingestion & chunking\n2. OpenAI text-embedding-3-small for vector generation\n3. Cascading semantic search with similarity thresholds\n4. GPT-4 response generation with citation constraints\n5. Hallucination prevention guardrails\n\nHe also built DevDocer, a RAG-powered PDF tool using Pinecone vector database with 90%+ answer relevance.",
  },
  {
    keywords: ["agent", "agentic", "self-correct", "autonomous", "loop", "self-healing"],
    response: "Arvind built an agentic email generation engine at TsQs using the Claude API. Here's how it works:\n\n1. Claude generates email content based on brand context\n2. The system compiles it into MJML (email markup)\n3. If compilation fails, the agent detects the error, diagnoses it, and fixes autonomously\n4. This self-correcting loop runs until success\n\nResult: 95%+ autonomous success rate across production workloads — no human intervention needed.",
  },
  {
    keywords: ["skill", "tech stack", "technolog", "language", "framework", "tool", "know", "proficient", "expertise", "capable"],
    response: "Arvind's technical skills:\n\n🤖 AI/ML: LLMs, Generative AI, Agentic AI, RAG Pipelines, Prompt Engineering, Context Engineering, LLM Evaluation, NLP, OpenAI API, Anthropic API, Google Gemini, LangChain, LangGraph, Vector Embeddings, Semantic Search\n\n💻 Languages & Frameworks: Python, TypeScript, JavaScript, React, Angular, Next.js, Node.js, Express.js, FastAPI\n\n🛠️ Infrastructure: Docker, Kubernetes, AWS, GCP Cloud Run, CI/CD, Kafka, Microservices, REST APIs, OAuth 2.0\n\n📊 Databases: MongoDB, PostgreSQL, MySQL",
  },
  {
    keywords: ["ai", "ml", "machine learning", "llm", "prompt", "generative", "nlp", "deep learning", "model"],
    response: "Arvind's AI/ML expertise includes:\n\n• Large Language Models (Claude, GPT-4, Gemini) — production deployment and orchestration\n• RAG Pipelines — embeddings, vector search, retrieval-augmented generation\n• Agentic AI — self-correcting loops, autonomous task completion\n• Prompt Engineering & Context Engineering — system prompts for production quality\n• LLM Evaluation — custom evaluation frameworks with 47+ rules\n• NLP, LangChain, LangGraph, Vector Embeddings, Semantic Search",
  },
  {
    keywords: ["contact", "email", "reach", "connect", "touch", "message", "linkedin", "github", "social"],
    response: "You can reach Arvind through:\n\n📧 Email: tarvindraju@gmail.com\n💼 LinkedIn: linkedin.com/in/tadiarvindraju\n💻 GitHub: github.com/arvindrajut\n\nHe's open to opportunities and always happy to chat!",
  },
  {
    keywords: ["hire", "hiring", "available", "opportunity", "looking", "open to", "recruit", "position", "interview"],
    response: "Yes! Arvind is currently open to new opportunities. He's an AI Engineer with proven experience shipping production LLM systems, RAG pipelines, and agentic AI workflows. He's built two production SaaS platforms and has experience at scale (Jio — 400M+ users). Reach out at tarvindraju@gmail.com to discuss!",
  },
  {
    keywords: ["education", "degree", "university", "school", "study", "studied", "college", "academic", "masters"],
    response: "Arvind holds a Master's degree in Computer Science from the United States.",
  },
  {
    keywords: ["jio", "india", "first job", "early career"],
    response: "At Jio Platforms Limited (Jun 2021 – Dec 2022), Arvind worked as a Software Engineer on enterprise integrations serving 400M+ users. He used Apache Kafka for high-throughput messaging, achieved 90% test coverage, and managed CI/CD pipelines with Azure DevOps. This was a major scale experience early in his career.",
  },
  {
    keywords: ["ncoders", "transaction", "dashboard", "review"],
    response: "At nCoders Technology Solutions LLC (Aug – Nov 2025), Arvind built a Transactions Review Dashboard in React/TypeScript handling 100K+ records with virtualized rendering for smooth performance.",
  },
  {
    keywords: ["antra", "intern", "search", "auth0"],
    response: "At Antra Inc (Mar – Jul 2025), Arvind worked as a Software Engineer Intern building advanced search UI components, AWS S3 document upload workflows, and Auth0 RBAC (Role-Based Access Control) integration.",
  },
  {
    keywords: ["rnd4impact", "rnd", "fastapi", "data ingestion", "gcp"],
    response: "At RND4IMPACT INC (Sep 2024 – Mar 2025), Arvind built a Python FastAPI data ingestion pipeline processing 5K+ records/month, deployed on GCP Cloud Run with containerized infrastructure.",
  },
  {
    keywords: ["prepai", "interview", "mock", "simulator"],
    response: "PrepAI is an AI Mock Interview Simulator Arvind built using Next.js, FastAPI, and OpenAI API. It autonomously adapts questions based on candidate responses using function calling and structured outputs. It features voice input via Web Speech API and real-time feedback over WebSockets, achieving 3x user engagement vs text-only. Deployed on GCP Cloud Run with 99.5% uptime.",
  },
  {
    keywords: ["devdocer", "pdf", "document qa", "pinecone"],
    response: "DevDocer is a RAG-Powered PDF Intelligence tool Arvind built. It uses vector embeddings and semantic search to enable natural language Q&A over uploaded PDFs. Features document chunking, embedding generation, and retrieval with Pinecone vector database for 90%+ answer relevance. Includes AWS S3 storage and Stripe billing.",
  },
  {
    keywords: ["docker", "kubernetes", "k8s", "deploy", "devops", "infrastructure", "cloud", "aws", "gcp", "ci/cd"],
    response: "Arvind has strong infrastructure skills: Docker & Kubernetes for containerization and orchestration, AWS (S3, etc.) and GCP Cloud Run for cloud deployments, CI/CD pipelines with Azure DevOps and GitHub Actions, Apache Kafka for messaging, and monitoring with Grafana & Prometheus.",
  },
  {
    keywords: ["what can you", "help", "how does this", "what do you know", "capabilities"],
    response: "I can answer questions about Arvind's:\n\n• 💼 Work experience (TsQs, Jio, nCoders, Antra, RND4IMPACT)\n• 🚀 Projects (Marketyr, AccessGen, PrepAI, DevDocer)\n• 🤖 AI/ML skills (RAG, agentic AI, LLMs, prompt engineering)\n• 💻 Tech stack (Python, React, Node.js, Docker, K8s, etc.)\n• 🎓 Education\n• 📧 Contact info\n\nJust ask away!",
  },
  {
    keywords: ["thank", "thanks", "awesome", "cool", "great", "nice", "perfect"],
    response: "Glad I could help! 😊 If you have more questions about Arvind's work, feel free to ask. Or reach out to him directly at tarvindraju@gmail.com!",
  },
];

const STOP_WORDS = new Set(["the", "a", "an", "is", "are", "was", "were", "do", "does", "did", "can", "could", "will", "would", "should", "has", "have", "had", "me", "my", "his", "her", "he", "she", "it", "i", "you", "we", "they", "this", "that", "with", "for", "from", "and", "or", "but", "not", "no", "yes", "to", "of", "in", "on", "at", "by"]);

function scoreMatch(query: string, entry: typeof ENTRIES[0]): number {
  const q = query.toLowerCase();
  let score = 0;

  for (const keyword of entry.keywords) {
    const kw = keyword.toLowerCase();
    // Exact full query match
    if (q === kw) {
      score += 10;
    }
    // Full keyword phrase in query — longer = better
    else if (q.includes(kw)) {
      // Penalize very short/common keywords
      if (kw.length <= 3 || STOP_WORDS.has(kw)) {
        score += 0.5;
      } else {
        score += 3 + kw.length * 0.5;
      }
    }
    // Individual words from multi-word keywords
    else {
      const kwWords = kw.split(" ");
      for (const word of kwWords) {
        if (word.length > 2 && !STOP_WORDS.has(word) && q.includes(word)) {
          score += 1;
        }
      }
    }
  }

  return score;
}

function findBestAnswer(query: string): string {
  const q = query.toLowerCase().trim();

  // Check greetings first
  const greetingEntry = ENTRIES.find((e) => e.isGreeting);
  if (greetingEntry && /^(hi|hey|hello|sup|yo|what'?s up|howdy|greetings)[\s!?.]*$/i.test(q)) {
    return greetingEntry.response;
  }

  // Score all non-greeting entries
  const scored = ENTRIES
    .filter((e) => !e.isGreeting)
    .map((entry) => ({ entry, score: scoreMatch(query, entry) }))
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score);

  if (scored.length > 0 && scored[0].score >= 2) {
    return scored[0].entry.response;
  }

  // Fallback
  return "That's a great question! I know a lot about Arvind's experience, projects (Marketyr, AccessGen, PrepAI), skills, and background. Could you ask about something specific? Or reach out to him directly at tarvindraju@gmail.com!";
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1]?.content || "";

    // Small delay to feel natural
    await new Promise((resolve) => setTimeout(resolve, 200 + Math.random() * 400));

    const answer = findBestAnswer(lastMessage);
    return NextResponse.json({ message: answer });
  } catch (error: any) {
    console.error("Chat error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
