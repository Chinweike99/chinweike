import AnimatedText from "@/Components/AnimatedText";
import Layout from "@/Components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { assets } from "@/assets/assets";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const MyProjects = ({ type, title, summary, img, link, github }) => {
  return (
    <motion.article
      className="relative w-full rounded-[1.2rem] rounded-br-2xl mt-[4rem]  shadow-2xl"
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 1.5, type: "spring" }}
    >
      <div className="absolute top-0  -z-10 w-[101%] h-[104%] rounded-[2rem] bg-black" />
      <div className="relative w-full flex bg-white items-center justify-between rounded-[1.2rem] overflow-hidden border border-solid border-black shadow-2xl">
        <Link
          href={link}
          target="_blank"
          className="w-1/2 cursor-pointer overflow-hidden "
        >
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-auto overflow-hidden"

            whileHover={{scale: 1.03}}
            transition={{duration: 0.6}}
          />
        </Link>

        <div className="w-1/2 flex flex-col items-start justify-between pl-6">
          <span className="text-primary font-medium text-xl">{type}</span>
          <Link href={link} target="_blank">
            <h2 className="my-2 w-full text-left text-2xl font-bold">
              {title}
            </h2>
          </Link>
          <p className="my-2 font-medium text-black">{summary}</p>
          <div className="mt-2 flex items-center">
            <Link href={github} target="_blank">
              <GitHubIcon />
            </Link>
            <Link
              href={github}
              target="_blank"
              className="ml-3 rounded-lg bg-black text-white p-1 px-6 font-semibold"
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
      className="relative w-full h-[130%]  rounded-[1.2rem] rounded-br-2xl   shadow-2xl"
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 1.5, type: "spring" }}
    >
      <div className="absolute top-0  -z-10 w-[101%] h-[104%] rounded-[2rem] bg-black" />
      <div className="relative w-full h-[100%] flex bg-white items-center justify-between rounded-[1.2rem] overflow-hidden border border-solid border-black shadow-2xl mb-5">
        <Link
          href={link}
          target="_blank"
          className="w-full h-[80%]  cursor-pointer overflow-hidden "
        >
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-[100%] overflow-hidden"

            whileHover={{scale: 1.03}}
            transition={{duration: 0.6}}
          />
        </Link>
        {/* <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-black" /> */}
        <div className="w-full flex flex-col items-start justify-between pl-6">
          <span className="text-primary font-medium text-xl">{type}</span>
          <Link href={link} target="_blank">
            <h2 className="my-2 w-full text-left text-2xl font-bold">
              {title}
            </h2>
          </Link>
          <p className="my-2 font-medium text-black">{summary}</p>
          <div className="mb-5 flex items-center">
            <Link href={github} target="_blank">
              <GitHubIcon />
            </Link>
            <Link
              href={github}
              target="_blank"
              className="ml-2 underline font-semibold"
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
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-10">
          <AnimatedText
            text={"Imagination Trumps Knowledge"}
            className="mb-5"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-[2rem]">
            <div className="col-span-12 gap-y-[2rem]">
              <MyProjects
                title={"E-commerce site"}
                summary={"Site for buying and selling"}
                link={"https://estore-pied-theta.vercel.app/"}
                type={"My project"}
                github={"https://github.com/Chinweike99/estore/tree/master/src"}
                img={assets.ecomerce}
              />

              {/* <MyProjects 
                        title={"Food delivery website"}
                        summary={"Site for buying and selling"}
                        link={'https://github.com/Chinweike99/taSty'}
                        type={"My project"}
                        github={"https://github.com/Chinweike99/taSty"}
                        img={assets.tasty}
                        
                        /> */}
            </div>
            {/* Main Projects */}
            <div className="col-span-6">
              <Project
                title={"Food delivery website"}
                summary={"Site for buying and selling"}
                link={"https://github.com/Chinweike99/taSty"}
                type={"My project"}
                github={"https://github.com/Chinweike99/taSty"}
                img={assets.tasty}
              />
            </div>
            <div className="col-span-6">
              <Project
                title={"Food delivery website"}
                summary={"Site for buying and selling"}
                link={"https://github.com/Chinweike99/taSty"}
                type={"My project"}
                github={"https://github.com/Chinweike99/taSty"}
                img={assets.tasty}
              />
            </div>

            <div className="col-span-12">
              <MyProjects
                title={"Food delivery website"}
                summary={"Site for buying and selling"}
                link={"https://github.com/Chinweike99/taSty"}
                type={"My project"}
                github={"https://github.com/Chinweike99/taSty"}
                img={assets.tasty}
              />
            </div>
            {/* Main Projects */}
            <div className="col-span-6">
              <Project
                title={"Food delivery website"}
                summary={"Site for buying and selling"}
                link={"https://github.com/Chinweike99/taSty"}
                type={"My project"}
                github={"https://github.com/Chinweike99/taSty"}
                img={assets.tasty}
              />
            </div>
            <div className="col-span-6">
              <Project
                title={"Food delivery website"}
                summary={"Site for buying and selling"}
                link={"https://github.com/Chinweike99/taSty"}
                type={"My project"}
                github={"https://github.com/Chinweike99/taSty"}
                img={assets.tasty}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
