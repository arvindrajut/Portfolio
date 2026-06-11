"use client";

import { cn } from "../../../app/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaLocationArrow, FaGithub } from "react-icons/fa";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    id: number;
    title: string;
    des: string[];
    img: string;
    iconLists: string[];
    link: string;
    github_link?: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isTwoItems = items.length === 2;

  return (
    <div
      className={cn(
        "grid py-10 gap-8",
        isTwoItems
          ? "grid-cols-1 lg:grid-cols-2 max-w-5xl mx-auto"
          : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {items.map((item, idx) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.15 }}
          viewport={{ once: true }}
          className="relative group block h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Hover background glow */}
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute -inset-1 h-[calc(100%+8px)] w-[calc(100%+8px)] bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-cyan-500/10 block rounded-2xl blur-sm"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.2 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.2, delay: 0.1 },
                }}
              />
            )}
          </AnimatePresence>

          {/* Card with gradient border */}
          <div className="gradient-border relative z-20 h-full">
            <div className="glass-card h-full p-6 lg:p-8 flex flex-col">
              {/* Project image — larger for 2-card layout */}
              <div className="relative overflow-hidden rounded-xl mb-5">
                <img
                  src={item.img}
                  alt={item.title}
                  className={cn(
                    "w-full object-cover transition-transform duration-500 group-hover:scale-105",
                    isTwoItems ? "h-52 lg:h-64" : "h-44"
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Floating title overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-bold text-xl lg:text-2xl tracking-wide drop-shadow-lg group-hover:text-cyan-400 transition-colors duration-300">
                    {item.title}
                  </h4>
                </div>
              </div>

              {/* Description bullets */}
              <div className="mb-6 flex-1">
                <ul className="space-y-3">
                  {item.des.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-zinc-400 text-sm leading-relaxed"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400/50 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech icons + links */}
              <div className="flex items-center justify-between mt-auto pt-5 border-t border-white/5">
                <div className="flex gap-2">
                  {item.iconLists.map((icon, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full bg-black-200 flex items-center justify-center border border-white/10 hover:border-cyan-500/30 transition-colors"
                    >
                      <img
                        src={icon}
                        alt={`icon-${i}`}
                        className="w-4 h-4"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex gap-4 items-center">
                  {item.github_link && (
                    <a
                      href={item.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/40 hover:text-white transition-colors"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                  )}
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
                    >
                      Live Demo <FaLocationArrow className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
