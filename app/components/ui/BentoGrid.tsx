"use client";

import { useState } from "react";
import { cn } from "@/app/lib/utils";
import { IoCopyOutline } from "react-icons/io5";
import MagicButton from "./MagicButton";
import { motion } from "framer-motion";
import {
  aiAndMlSkills,
  languagesAndFrameworks,
  infrastructureAndTools,
  emailAddress,
  aboutMe,
} from "../../data/index";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

const SkillCategory = ({
  title,
  skills,
  pillClass,
  accentColor,
  delay,
}: {
  title: string;
  skills: string[];
  pillClass: string;
  accentColor: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="flex-1"
  >
    <h4 className={`text-lg lg:text-xl mb-4 font-semibold ${accentColor}`}>
      {title}
    </h4>
    <div className="flex flex-row gap-2 flex-wrap">
      {skills.map((item, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: delay + i * 0.03 }}
          viewport={{ once: true }}
          className={`${pillClass} py-2 px-3 text-xs lg:text-sm rounded-lg text-white/90 transition-all duration-300 cursor-default`}
        >
          {item}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = emailAddress;
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.08] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none flex flex-col",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className="h-full p-6 lg:p-10">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-2"
        >
          <div className="font-sans font-extralight text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div className="font-sans text-lg lg:text-3xl font-bold z-10">
            {title}
          </div>
        </motion.div>

        {/* About me */}
        {id === 0 && (
          <div className="mt-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white-200 text-sm lg:text-base leading-relaxed mb-8"
            >
              {aboutMe}
            </motion.p>

            {/* Skills Grid */}
            <div className="flex flex-col lg:flex-row gap-8 mt-4">
              <SkillCategory
                title="AI & Machine Learning"
                skills={aiAndMlSkills}
                pillClass="pill-cyan"
                accentColor="text-cyan-400"
                delay={0}
              />
              <SkillCategory
                title="Languages & Frameworks"
                skills={languagesAndFrameworks}
                pillClass="pill-purple"
                accentColor="text-violet-400"
                delay={0.1}
              />
              <SkillCategory
                title="Infrastructure & Tools"
                skills={infrastructureAndTools}
                pillClass="pill-blue"
                accentColor="text-blue-100"
                delay={0.2}
              />
            </div>
          </div>
        )}

        {id === 6 && (
          <div className="mt-5 relative">
            <MagicButton
              title={copied ? "Email is Copied!" : "Copy my email address"}
              icon={<IoCopyOutline />}
              position="left"
              handleClick={handleCopy}
              otherClasses="!bg-[#161A31]"
            />
          </div>
        )}
      </div>
    </div>
  );
};
