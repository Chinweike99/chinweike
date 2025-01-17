import React from "react";
import { motion } from "framer-motion";

const MySkills = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full bg-dark text-light py-3 px-6 font-semibold shadow-gray-500 hover:bg-light hover:text-dark border-2 hover:border-dark cursor-pointer absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:border-none xs:text-dark xs:bg-transparent xs:dark:bg-transparent xs:dark:text-light xs:font-bold xs:text-[1.1rem]"
      whileHover={{ scale: 1.05 }}
      initial={{x:0, y:0}}
      whileInView={{x:x, y:y, transition: {duration: 1.5}}}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-5xl mt-[8rem] mb-5 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center  bg-circularLight dark:bg-circularDark">
        <motion.div
          className="flex items-center justify-center rounded-full bg-dark text-light p-3 font-semibold shadow-gray-500 hover:bg-light hover:text-dark border-2 hover:border-dark cursor-pointer xs:p-1"
          whileHover={{ scale: 1.05 }}
        >
          JavaScript
        </motion.div>

        <MySkills name={"HTML5/CSS"} x="-23vw" y="-13vw"/>
        <MySkills name={"TailwindCSS"} x="1vw" y="-19vw"/>
        <MySkills name={"ReactJs"} x="25vw" y="-10vw"/>
        <MySkills name={"NextJs"} x="22vw" y="1vw"/>
        <MySkills name={"ExpressJs"} x="-22vw" y="1vw"/>
        <MySkills name={"NodeJs"} x="-22vw" y="14vw"/>
        <MySkills name={"MongoDB"} x="-1vw" y="18vw"/>
        <MySkills name={"PostgreSQL"} x="20vw" y="13vw"/>
      </div>
    </>
  );
};

export default Skills;
