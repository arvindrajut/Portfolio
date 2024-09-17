"use client";

import { useState } from "react";
import Lottie from "react-lottie";
import { cn } from "@/app/lib/utils";
import { BackgroundGradientAnimation } from "../ui/BackgroundGradientAnimation";
import GridGlobe from "../ui/GridGlobe";
import { IoCopyOutline } from "react-icons/io5";
import MagicButton from "./MagicButton";
import {
  programmingLanguagesAndFrameworks,
  databaseManagement,
  devOpsAndTools,
  emailAddress,
} from "../../data/index";
// import animationData from "@/data/confetti.json";

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
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
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
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5  ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>

          {id === 2 && <GridGlobe />}

          <div className="relative flex flex-col items-center">
            {id === 0 && (
              <div className="flex flex-col gap-4 w-fit">
                {/* Programming Languages & Frameworks */}
                <div className="mb-4 mt-8">
                  {/* Adjust the margin for section */}
                  <h4 className="text-purple text-lg lg:text-xl mb-2 text-center">
                    {/* Center the title */}
                    Programming Languages & Frameworks
                  </h4>
                  <div className="flex flex-row gap-3 md:gap-3 lg:gap-8 flex-wrap justify-center text-white">
                    {/* Added justify-center to center skills */}
                    {programmingLanguagesAndFrameworks.map((item, i) => (
                      <span
                        key={i}
                        className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Database Management */}
                <div className="mb-4">
                  {/* Adjust the margin for section */}
                  <h4 className="text-purple text-lg lg:text-xl mb-2 text-center">
                    {/* Center the title */}
                    Database Management
                  </h4>
                  <div className="flex flex-row gap-3 md:gap-3 lg:gap-8 flex-wrap justify-center text-white">
                    {/* Added justify-center to center skills */}
                    {databaseManagement.map((item, i) => (
                      <span
                        key={i}
                        className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* DevOps & Tools */}
                <div>
                  <h4 className="text-purple text-lg lg:text-xl mb-2 text-center">
                    {/* Center the title */}
                    DevOps & Tools
                  </h4>
                  <div className="flex flex-row gap-3 md:gap-3 lg:gap-8 flex-wrap justify-center text-white">
                    {/* Added justify-center to center skills */}
                    {devOpsAndTools.map((item, i) => (
                      <span
                        key={i}
                        className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
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
      </div>
    </div>
  );
};
