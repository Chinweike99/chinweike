import React from "react";
import { motion } from "framer-motion";

const MySkills = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full bg-dark text-light py-3 px-6 font-semibold shadow-gray-500 hover:bg-light hover:text-dark border-2 hover:border-dark cursor-pointer absolute "
      whileHover={{ scale: 1.05 }}
      initial={{x:0, y:0}}
      whileInView={{x:x, y:y}}
      transition={{duration: 1.7}}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-5xl mt-[8rem] mb-5 w-full text-center">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center  bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full bg-dark text-light p-3 font-semibold shadow-gray-500 hover:bg-light hover:text-dark border-2 hover:border-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          JavaScript
        </motion.div>

        <MySkills name={"HTML5/CSS"} x="-23vw" y="-13vw"/>
        <MySkills name={"TailwindCSS"} x="1vw" y="-18vw"/>
        <MySkills name={"ReactJs"} x="25vw" y="-10vw"/>
        <MySkills name={"NextJs"} x="18vw" y="1vw"/>
        <MySkills name={"ExpressJs"} x="-18vw" y="1vw"/>
        <MySkills name={"NodeJs"} x="-22vw" y="14vw"/>
        <MySkills name={"MongoDB"} x="-1vw" y="18vw"/>
        <MySkills name={"PostgreSQL"} x="20vw" y="14vw"/>
      </div>
    </>
  );
};

export default Skills;
