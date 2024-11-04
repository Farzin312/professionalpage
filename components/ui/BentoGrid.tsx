import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";

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
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-8 mx-auto",
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
  const techStackLeft = [
    "Python",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "SQL",
    "Machine Learning",
  ];

  const techStackRight = ["Go", "HTML", "CSS", "Next.js", "AWS", "Docker"];

  const [copied, setCopied] = useState(false);
  const email = "farzinshifat@gmail.com";

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        console.log("Email copied successfully!");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset copied state
      })
      .catch((err) => console.error("Failed to copy email:", err));
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] shadow-input dark:shadow-none flex flex-col space-y-4 group/bento transition duration-200 hover:shadow-lg",
        className
      )}
      style={{
        background:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* Background Images */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute pointer-events-none">
          {" "}
          {/* Prevents interaction */}
          {img && (
            <img
              src={img}
              alt="background"
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        {spareImg && id === 5 && (
          <img
            src={spareImg}
            alt="spare"
            className="absolute right-0 bottom-0 w-full opacity-80 object-cover pointer-events-none"
          />
        )}
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-3xl md:text-4xl lg:text-7xl pointer-events-none"></div>
          </BackgroundGradientAnimation>
        )}
      </div>

      {/* Content */}
      <div
        className={cn(
          titleClassName,
          "relative flex flex-col px-5 py-5 lg:py-10 group-hover/bento:translate-x-2 transition duration-200 z-10 cursor-pointer"
        )}
      >
        <div className="font-sans font-extralight text-[#C1C2D3] text-sm lg:text-base mb-8 z-16">
          {description}
        </div>
        <div className="font-sans text-lg lg:text-3xl font-bold max-w-96 z-10 mb-16">
          {title}
        </div>

        {/* Optional GitHub 3D Globe */}
        {id === 2 && <GridGlobe />}

        {/* Tech Stack Display */}
        {id === 3 && (
          <div className="flex gap-1 lg:gap-3 absolute right-2 mb-2">
            {[techStackLeft, techStackRight].map((stack, index) => (
              <div key={index} className="flex flex-col gap-2">
                {stack.map((tech, i) => (
                  <span
                    key={i}
                    className="py-1 px-2 text-xs md:text-sm lg:text-base rounded-lg text-center bg-[#10132E] opacity-70 lg:opacity-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* Copy Email Button */}
        {id === 6 && (
          <div className="mt-5 relative z-20">
            <div className="absolute -bottom-5 right-0 pointer-events-none">
              <Lottie options={defaultOptions} height={200} width={400} />
            </div>
            <MagicButton
              title={copied ? "Email is Copied!" : "Copy my email address"}
              icon={<IoCopyOutline />}
              position="left"
              handleClick={handleCopy}
              otherClasses="!bg-[#161A31] cursor-pointer"
            />
          </div>
        )}
      </div>
    </div>
  );
};
