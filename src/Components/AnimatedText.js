import React from "react";
import { motion } from "framer-motion";

const quotes = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.6,
      staggerChildren: 0.08,
    },
  },
};

const singleword = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
    },
  },
};

const AnimatedText = ({ text, className = "" }) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden dark:text-light sm:p-0">
      <motion.h1
        className={`inline-block w-full text-dark dark:text-light font-bold capitalize text-4xl md:text-3xl xs:text-2xl mb-10`}
        variants={quotes}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => {
          return (
            <motion.span
              key={word + "-" + index}
              className="inline-block"
              variants={singleword}
              //   initial="initial"
              //   animate="animate"
            >
              {word}&nbsp;
            </motion.span>
          );
        })}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
