"use client";
import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";

import { socialMedia } from "../data/index";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px]" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <motion.h1
          className="heading lg:max-w-[45vw]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Let&apos;s build something{" "}
          <span className="gradient-text-cyan">intelligent</span> together
        </motion.h1>
        <motion.p
          className="text-white-200 md:mt-10 my-5 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Looking for an AI Engineer who ships production systems? Let&apos;s
          talk.
        </motion.p>
        <a href="mailto:tarvindraju@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2026 Arvind Raju Tadi
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 mt-5 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:border-cyan/30 hover:shadow-glow-cyan transition-all duration-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
