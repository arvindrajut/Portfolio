"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/app/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      // Fallback value for `getPrevious()`
      const previous = scrollYProgress.getPrevious() ?? 0;
      let direction = current - previous;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
          scale: visible ? 1 : 0.9,
        }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.4,
          ease: [0.25, 0.8, 0.25, 1],
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto rounded-full z-[5000] px-8 py-3.5 items-center justify-center space-x-8 border border-white/10 bg-black-100/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative flex items-center space-x-2 text-white/70 hover:text-cyan-400 transition-colors duration-300 no-underline"
            )}
          >
            <motion.span
              whileHover={{ scale: 1.2 }}
              className="block sm:hidden text-xl"
            >
              {navItem.icon}
            </motion.span>
            <span className="text-sm font-medium tracking-wide">
              {navItem.name}
            </span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
