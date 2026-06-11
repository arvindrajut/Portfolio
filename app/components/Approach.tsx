"use client";
import React from "react";
import { motion } from "framer-motion";

const phases = [
  {
    number: "01",
    title: "Problem Discovery & AI Architecture",
    des: "I start by deeply understanding the problem space, talking to stakeholders, and identifying where AI creates real value. Then I architect the right approach — whether that's RAG, agentic workflows, or intelligent document processing.",
    color: "from-cyan-500 to-cyan-400",
    borderColor: "border-cyan-500/20",
    glowColor: "hover:shadow-glow-cyan",
    iconColor: "text-cyan-400",
  },
  {
    number: "02",
    title: "Pipeline Development & Prompt Engineering",
    des: "I build the full AI pipeline end-to-end — data extraction, embedding generation, retrieval, LLM integration, and prompt engineering. Every system prompt is carefully crafted with context engineering to maximize output quality.",
    color: "from-violet-500 to-violet-400",
    borderColor: "border-violet-500/20",
    glowColor: "hover:shadow-glow-purple",
    iconColor: "text-violet-400",
  },
  {
    number: "03",
    title: "Evaluation, Guardrails & Deployment",
    des: "Before shipping, I build evaluation frameworks, hallucination guardrails, and safety mechanisms into every system. Then I deploy with Docker, Kubernetes, and CI/CD — monitoring everything in production.",
    color: "from-blue-500 to-blue-400",
    borderColor: "border-blue-500/20",
    glowColor: "hover:shadow-glow-blue",
    iconColor: "text-blue-100",
  },
];

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My <span className="gradient-text-cyan">approach</span>
      </h1>

      <div className="my-16 flex flex-col lg:flex-row items-stretch justify-center w-full gap-6 max-w-6xl mx-auto px-4">
        {phases.map((phase, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className={`flex-1 glass-card ${phase.borderColor} ${phase.glowColor} p-8 transition-all duration-300 group`}
          >
            {/* Phase number */}
            <div className="mb-6">
              <span
                className={`text-5xl font-black bg-gradient-to-r ${phase.color} bg-clip-text text-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-300`}
              >
                {phase.number}
              </span>
            </div>

            {/* Title */}
            <h3 className={`text-xl font-bold mb-4 ${phase.iconColor} transition-colors duration-300`}>
              {phase.title}
            </h3>

            {/* Description */}
            <p className="text-white-200 text-sm leading-relaxed">
              {phase.des}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Approach;
