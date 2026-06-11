"use client";
import { workExperience } from "../data";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

type FeaturedProject = {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  img?: string;
  gradient: string;
  borderColor: string;
  accentColor: string;
  link: string;
};

const ProjectCard = ({
  project,
  index,
}: {
  project: FeaturedProject;
  index: number;
}) => (
  <motion.a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4, delay: 0.2 + index * 0.15 }}
    viewport={{ once: true }}
    whileHover={{ y: -4, scale: 1.02 }}
    className={`block min-w-[280px] flex-1 rounded-xl border ${project.borderColor} bg-gradient-to-br ${project.gradient} overflow-hidden backdrop-blur-sm cursor-pointer group/proj transition-all duration-300 hover:shadow-glass`}
  >
    {/* Project screenshot */}
    {project.img && (
      <div className="relative overflow-hidden">
        <img
          src={project.img}
          alt={project.name}
          className="w-full h-36 object-cover object-top transition-transform duration-500 group-hover/proj:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
          <h4
            className={`text-lg font-bold text-white drop-shadow-lg`}
          >
            {project.name}
          </h4>
          <FaExternalLinkAlt className="w-3 h-3 text-white/50 group-hover/proj:text-white transition-colors" />
        </div>
      </div>
    )}

    <div className="p-5">
      {/* Header — only show if no image */}
      {!project.img && (
        <div className="flex items-center justify-between mb-3">
          <h4
            className={`text-lg font-bold ${project.accentColor} group-hover/proj:text-white transition-colors`}
          >
            {project.name}
          </h4>
          <FaExternalLinkAlt className="w-3 h-3 text-white/30 group-hover/proj:text-white/70 transition-colors" />
        </div>
      )}

      {/* Tagline */}
      <p className="text-xs text-white/50 mb-3 font-medium uppercase tracking-wider">
        {project.tagline}
      </p>

      {/* Description */}
      <p className="text-sm text-white/70 leading-relaxed mb-4">
        {project.description}
      </p>

      {/* Tech pills */}
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t, i) => (
          <span
            key={i}
            className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/50"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </motion.a>
);

const Experience = () => {
  return (
    <div className="pt-32 pb-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="relative mt-16 max-w-4xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-4 lg:left-8 top-0 bottom-0 timeline-line" />

        {/* Experience cards */}
        <div className="flex flex-col gap-8">
          {workExperience.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative pl-12 lg:pl-20"
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-2.5 lg:left-6 top-8 w-3 h-3 rounded-full border-2 z-10 ${
                  index === 0
                    ? "bg-cyan-400 border-cyan-400 shadow-glow-cyan"
                    : "bg-black-100 border-white/30"
                }`}
              />

              {/* Card */}
              <div className="glass-card p-6 lg:p-8 hover:border-white/20 transition-all duration-300 group">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <h3
                    className="text-lg lg:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300"
                    style={{ whiteSpace: "pre-wrap" }}
                  >
                    {card.title}
                  </h3>
                  {index === 0 && (
                    <span className="pulse-badge inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-medium w-fit">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      CURRENT
                    </span>
                  )}
                </div>

                {/* Bullets */}
                <ul className="space-y-3">
                  {card.desc.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1 + i * 0.05,
                      }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 text-white-100 text-sm lg:text-base leading-relaxed"
                    >
                      <span className="mt-2 w-1 h-1 rounded-full bg-cyan-400/60 flex-shrink-0" />
                      {point}
                    </motion.li>
                  ))}
                </ul>

                {/* Featured Project Cards */}
                {card.featuredProjects && card.featuredProjects.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-white/5">
                    <p className="text-xs text-white/40 uppercase tracking-widest mb-4 font-medium">
                      Featured Projects
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      {card.featuredProjects.map(
                        (project: FeaturedProject, i: number) => (
                          <ProjectCard key={i} project={project} index={i} />
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
