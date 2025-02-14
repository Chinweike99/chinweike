import React from "react";
import { motion } from "framer-motion";
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import { myStacks } from "@/assets/assets";
import Image from "next/image";

// const MySkills = ({ name, x, y }) => {
//   return (
//     <motion.div
//       className="flex items-center justify-center rounded-full bg-dark text-light py-3 px-6 font-semibold shadow-gray-500 hover:bg-light hover:text-dark border-2 hover:border-dark cursor-pointer absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:border-none xs:text-dark xs:bg-transparent xs:dark:bg-transparent xs:dark:text-light xs:font-bold xs:text-[1.1rem]"
//       whileHover={{ scale: 1.05 }}
//       initial={{x:0, y:0}}
//       whileInView={{x:x, y:y, transition: {duration: 1.5}}}
//     >
//       {name}
//     </motion.div>
//   );
// };

// const Skills = () => {
//   return (
//     <>
//       <h2 className="font-bold text-5xl mt-[8rem] mb-5 w-full text-center md:text-6xl md:mt-32">
//         Skills
//       </h2>
//       <div className="w-full h-screen rounded-full relative flex items-center justify-center  bg-circularLight dark:bg-circularDark lg:h-[100vh] sm:h-[60vh] xs:-[80vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm ">
//         <motion.div
//           className="flex items-center justify-center rounded-full bg-dark text-light p-3 font-semibold shadow-gray-500 hover:bg-light hover:text-dark border-2 hover:border-dark cursor-pointer xs:p-1"
//           whileHover={{ scale: 1.05 }}
//         >
//           JavaScript
//         </motion.div>

//         <MySkills name={"HTML5/CSS"} x="-23vw" y="-13vw"/>
//         <MySkills name={"TailwindCSS"} x="1vw" y="-19vw"/>
//         <MySkills name={"ReactJs"} x="25vw" y="-10vw"/>
//         <MySkills name={"NextJs"} x="22vw" y="1vw"/>
//         <MySkills name={"ExpressJs"} x="-22vw" y="1vw"/>
//         <MySkills name={"NodeJs"} x="-22vw" y="14vw"/>
//         <MySkills name={"MongoDB"} x="-1vw" y="18vw"/>
//         <MySkills name={"PostgreSQL"} x="20vw" y="13vw"/>
//       </div>
//     </>
//   );
// };

const Skills = () =>{
  return (
    <>
      <div>
      <div className="my-20 grid grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8">
      {
        myStacks.map((skill, index) => {
          return(
            <div key={index} className=" p-2 rounded-xl border-2 border-dark dark:border-white flex flex-col space-y-16 ">
              <div className="flex items-center justify-between bg-dark text-white dark:bg-[#435a59] rounded-xl p-3">
                <Image src={skill.logo} alt="programming language"
                className="h-14 w-14"
                />
                <ElectricBoltIcon />
              </div>
              
              <div className="flex flex-col gap-2 p-3">
                <h1 className="font-bold text-2xl lg:text-3xl md:text-2xl sm:text-xl">{skill.language}</h1>
                <h1 className="text-base font-semibold">{skill.stack}</h1>
              </div>
            </div>
          )
        })
      }
      </div>
      </div>
    </>
  )
}

export default Skills;
