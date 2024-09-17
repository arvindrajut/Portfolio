"use client";

import { cn } from "../../../app/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./MagicButton";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    id: number;
    title: string;
    des: string[]; // Assuming 'des' is now an array of bullet points
    img: string;
    iconLists: string[];
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item.link}
          key={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <CardTitle>{item.title}</CardTitle>
            {/* Display description as bullet points */}
            <CardDescription className="mb-4">
              <ul className="list-disc list-inside space-y-1">
                {item.des.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </CardDescription>
            <div className="flex flex-col items-center mt-8 space-y-4">
              <div className="flex gap-2">
                {item.iconLists.map((icon, i) => (
                  <img
                    key={i}
                    src={icon}
                    alt={`icon-${i}`}
                    className="w-10 h-10"
                  />
                ))}
              </div>
              <MagicButton
                title="View This Project"
                icon={<FaLocationArrow />}
                position="right"
                otherClasses="px-4 py-2"
              />
            </div>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </div>
  );
};
