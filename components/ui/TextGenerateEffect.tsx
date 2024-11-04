import React, { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  color = "black", // Default color for first few words
  darkColor = "white", // Default dark mode color
  altColor = "#CBACF9", // Default alternative color for words with idx > 3
}: {
  words: string;
  className?: string;
  color?: string;
  darkColor?: string;
  altColor?: string;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate("span", { opacity: 1 }, { duration: 2, delay: stagger(0.2) });
  }, [scope]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            style={{
              color: idx > 3 ? altColor : color,
            }}
            className={`opacity-0 ${idx <= 3 ? "dark:text-white" : ""}`} // dark:text-white for the first three words in dark mode
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="leading-snug tracking-wide">{renderWords()}</div>
      </div>
    </div>
  );
};

export default TextGenerateEffect;
