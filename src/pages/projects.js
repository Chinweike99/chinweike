import AnimatedText from "@/Components/AnimatedText";
import Layout from "@/Components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { assets } from "@/assets/assets";
import { motion } from "framer-motion";
import TransitionEffect from "@/Components/TransitionEffect";

const FramerImage = motion(Image);

const MyProjects = ({ type, title, summary, img, link, github }) => {
  return (
    <motion.article
      className="relative w-full xs:w-[87vw]  rounded-[1.2rem] rounded-br-2xl mt-[4rem]  shadow-2xl 
      dark:text-light dark:border dark:border-solid 
      "
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 1.5, type: "spring" }}
    >
      <div className="absolute top-0  -z-10 w-[101%] h-[104%] rounded-[2rem] bg-dark dark:bg-light" />
      <div className="relative w-full flex md:flex-col bg-light dark:bg-dark  items-center justify-between rounded-[1.2rem] overflow-hidden border border-solid dark:border-none border-dark shadow-2xl">
        <Link
          href={link}
          target="_blank"
          className="w-1/2 cursor-pointer overflow-hidden md:w-full"
        >
          <FramerImage
            src={img}
            alt={title}
            className="w-full  md:h-[100%] overflow-hidden"
            
            priority sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 50vw"

            whileHover={{scale: 1.03}}
            transition={{duration: 0.6}}
          />
        </Link>

        <div className="w-1/2 flex flex-col items-start justify-between pl-6 md:w-full md:py-6 lg:pl-2">
          
          <Link href={link} target="_blank">
            <h2 className=" w-full text-left text-2xl font-bold sm:text-small">
              {title}
            </h2>
          </Link>
          <p className=" md:mt-0 font-medium text-[0.9rem] text-dark dark:text-light">{summary}</p>
          <i className="text-primary dark:text-primaryDark font-medium text-lg xs:text-base">{type}</i>
          <div className="my-2 flex items-center lg:mt-1">
            <Link href={github} target="_blank">
              <GitHubIcon />
            </Link>
            <Link
              href={github}
              target="_blank"
              className="ml-3 rounded-lg bg-dark dark:bg-light dark:text-dark sm:px-4 sm:text-base   text-light p-1 px-6 font-semibold"
            >
              See project
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const Project = ({ title, type, img, link, summary, github }) => {
  return (
    <motion.article
      className="relative w-full h-[130%] md:h-[107%]  rounded-[1.2rem] rounded-br-2xl   shadow-2xl dark:text-light xs:w-[87vw] "
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 1.5, type: "spring" }}
    >
      <div className="absolute top-0  -z-10 w-[101%] h-[104%] rounded-[2rem] bg-dark dark:bg-light md:h-[101%] " />
      <div className="relative w-full h-[100%] flex lg:flex-col bg-light items-center justify-between rounded-[1.2rem] overflow-hidden border border-solid border-dark dark:bg-dark shadow-2xl mb-5">
        <Link
          href={link}
          target="_blank"
          className="w-full h-[80%]  cursor-pointer overflow-hidden "
        >
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-[100%] overflow-hidden"

            priority sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 50vw"

            whileHover={{scale: 1.03}}
            transition={{duration: 0.6}}
          />
        </Link>
        {/* <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" /> */}
        <div className="w-full flex flex-col items-start justify-between pl-6 lg:pl-2">
          <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">{type}</span>
          <Link href={link} target="_blank">
            <h2 className="my-2 w-full text-left text-2xl font-bold lg:text-2xl ">
              {title}
            </h2>
          </Link>
          <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
          <div className="mb-5 flex items-center">
            <Link href={github} target="_blank">
              <GitHubIcon />
            </Link>
            <Link
              href={github}
              target="_blank"
              className="ml-2 underline font-semibold md:text-base"
            >
              visit
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Chinweike | Projects page</title>
        <meta name="chinweike" content="projects" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16  flex flex-col items-center justify-center ">
        <Layout className="pt-10">
          <AnimatedText
            text={"Bringing Ideas to Life"}
            className="mb-5 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-[2rem] xl:gap-x-16 lg:gap-x-8 md:gap-y-24">
            <div className="col-span-12 gap-y-[2rem]">
              <MyProjects
                title={"E-Commerce Clothing Website"}
                summary={"Responsive e-commerce platform developed with a user-friendly frontend, it offers intuitive navigation and dynamic product displays. "}
                link={"https://estore-pied-theta.vercel.app/"}
                type={"Stack: ReactJs, TailwindCss"}
                github={"https://github.com/Chinweike99/estore/tree/master/src"}
                img={assets.ecomerce}
              />

            <div className="col-span-12">
              <MyProjects
                title={"Food Delivery Website"}
                summary={"Food delivery platform, featuring both frontend and backend development, connects users with taSty restaurant. With a user-friendly interface and seamless navigation. Although the website currently runs locally, it showcases a comprehensive system designed for both customers and restaurant management."}
                link={"https://github.com/Chinweike99/taSty"}
                type={"Stack: CSS, Reactjs,ExpressJs, MongoDb"}
                github={"https://github.com/Chinweike99/taSty"}
                img={assets.tasty}
              />
            </div>

              <MyProjects
                title={"Custom _printf function"}
                summary={"Collaborated with a partner to build a custom _printf function in C, designed to replicate the functionality of the standard printf library function. The project involved implementing formatted output for various data types, handling format specifiers (e.g., %d, %s, %c), and ensuring compatibility with edge cases. This project deepened my understanding of variadic functions, memory management, and low-level I/O operations in C."}
                link={"https://github.com/Rosybliz/printf"}
                type={"Stack: C"}
                github={"https://github.com/Rosybliz/printf"}
                img={assets.printf}
              />
            </div>
            {/* Main Projects */}
            {/* <div className="col-span-6 sm:col-span-12">
              <Project
                title={"Food delivery website"}
                summary={"Site for buying and selling"}
                link={"https://github.com/Chinweike99/taSty"}
                type={"My project"}
                github={"https://github.com/Chinweike99/taSty"}
                img={assets.tasty}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={"Food delivery website"}
                summary={"Site for buying and selling"}
                link={"https://github.com/Chinweike99/taSty"}
                type={"My project"}
                github={"https://github.com/Chinweike99/taSty"}
                img={assets.tasty}
              />
            </div> */}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
