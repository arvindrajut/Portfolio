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
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border rounded-full shadow-[0px_10px_20px_rgba(0,0,0,0.25),0px_5px_10px_rgba(0,0,0,0.1)] z-[5000] px-6 py-3 items-center justify-center space-x-6 border-white/[0.2] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative flex items-center space-x-2 text-white hover:text-black transition-all duration-300"
            )}
          >
            <motion.span
              whileHover={{ scale: 1.2 }}
              className="block sm:hidden text-xl"
            >
              {navItem.icon}
            </motion.span>
            <span className="text-sm font-medium hover:underline">
              {navItem.name}
            </span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
