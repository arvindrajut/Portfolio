"use client";
import React, { useState, useEffect } from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { motion } from "framer-motion";

const terminalLines = [
  { text: "from ai_pipeline import orchestrate", color: "text-cyan-400" },
  { text: "", color: "" },
  { text: "pipeline = orchestrate({", color: "text-white" },
  { text: '  models: ["claude", "gpt-4", "gemini"],', color: "text-green-400" },
  { text: "  retrieval: RAGPipeline(", color: "text-violet-400" },
  { text: '    embeddings="text-embedding-3-small",', color: "text-green-400" },
  { text: "    similarity_threshold=0.85,", color: "text-orange-300" },
  { text: "  ),", color: "text-violet-400" },
  { text: "  guardrails: [citation_check, hallucination_guard],", color: "text-cyan-400" },
  { text: "  self_correct: True,", color: "text-orange-300" },
  { text: "})", color: "text-white" },
  { text: "", color: "" },
  { text: "# 95%+ autonomous success rate", color: "text-gray-500" },
  { text: "pipeline.deploy(env='production')", color: "text-cyan-400" },
];

const TerminalAnimation = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= terminalLines.length) {
          // Reset after a pause
          setTimeout(() => setVisibleLines(0), 2000);
          return prev;
        }
        return prev + 1;
      });
    }, 200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="terminal p-4 w-full max-w-md shadow-glass">
      {/* Terminal header */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        <span className="text-xs text-gray-500 ml-2">ai_pipeline.py</span>
      </div>
      {/* Terminal content */}
      <div className="text-sm leading-6 min-h-[280px]">
        {terminalLines.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.15 }}
            className={`${line.color} font-mono`}
          >
            {line.text || "\u00A0"}
          </motion.div>
        ))}
        {visibleLines < terminalLines.length && (
          <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse ml-0.5" />
        )}
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-6xl lg:max-w-[75vw] w-full flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side — Text */}
          <motion.div
            className="flex-1 flex flex-col items-center lg:items-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan/30 bg-cyan/5 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-cyan-400 font-medium tracking-wide uppercase">Available for opportunities</span>
            </div>

            <TextGenerateEffect
              className="text-left text-[36px] md:text-4xl lg:text-6xl !leading-tight"
              words="Building Production AI Systems That Ship"
            />

            <p className="text-center lg:text-left md:tracking-wider mb-6 mt-4 text-base md:text-lg text-white-200">
              Hi, I&apos;m Arvind — an <span className="text-cyan-400 font-semibold">AI Engineer</span> shipping
              LLM systems, RAG pipelines, and agentic AI workflows to production.
            </p>

            <div className="flex gap-4 mt-2">
              <a href="#projects">
                <MagicButton
                  title="See my work"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
            </div>
          </motion.div>

          {/* Right side — Terminal */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <TerminalAnimation />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
