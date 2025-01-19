import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import Licons from "./Licons";

const Details = ({ position, company, time, work, stack }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mt-0 w-[75%] md:w-[90%] mx-auto flex flex-col items-start justify-between"
    >
      <Licons reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a className="text-primary dark:text-primaryDark capitalize">
            {company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
        <span className="text-primary dark:text-primaryDark font-medium">
          {stack}
        </span>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const nplc = [
    "-I translated figma design specifications into high-quality code.",
    "-I worked closely with designers, backend developers, and product managers to bring projects to life.",
    "-I Handled API requests, ensured proper error handling and fallback mechanisms.",
    "-I collaborated with backend teams to resolve API-related issues.",
    "-I used Git to manage my branch codebase effectively.",
  ];
  const aura = [
    "-I translated figma design specifications into high-quality code.",
    "-I worked closely with designers, backend developers, and product managers to bring projects to life.",
    "-I used Git to manage my branch codebase effectively. \n",
  ];

  return (
    <>
      <div className="my-40">
        <h2 className="font-bold text-5xl mb-[4rem] w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Experience
        </h2>

        <div ref={ref} className="w-[95%] mx-auto relative">
          <motion.div
            className="absolute left-11 md:left-[-1rem] top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"
            style={{ scaleY: scrollYProgress }}
          />

          <ul className="w-full flex flex-col items-start justify-between">
            <Details
              position={"Frontend developer"}
              company={"NPLC"}
              time={"Nov 2024"}
              work={nplc.map((task, index) => {
                return (
                  <>
                    <span key={index}>{task}</span>
                  </>
                );
              })}
              stack={"Stack: TailwindCSS, Reactjs, React Redux"}
            />

            <Details
              position={"Frontend developer"}
              company={"AuroraWorks"}
              time={"March 2024 – June 2024"}
              work={aura.map((task, index) => {
                return (
                  <>
                    <span key={index}>{task}</span>
                  </>
                );
              })}
              stack={"Stack: CSS, JavaScript, ReactJs"}
            />

          </ul>
        </div>
      </div>
    </>
  );
};

export default Experience;
