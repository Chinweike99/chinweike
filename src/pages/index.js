import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import Layout from "@/Components/Layout";
import { assets } from "@/assets/assets.js";
import AnimatedText from "@/Components/AnimatedText";
import Link from "next/link";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import Hireme from "@/Components/Hireme";
import { motion } from "framer-motion";
import TransitionEffect from "@/Components/TransitionEffect";
import ProfileCard from "@/Components/ProfileCard";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const imageSlide = {
  initial: {
    opacity: 0,
    y: -50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
    },
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Chinweike</title>
        <meta name="description" content="Generated by next app" />
      </Head>
      <TransitionEffect />
      <main className="flex  pt-8 items-center text-dark w-full min-h-[90vh] dark:text-light ">
        <Layout className="pt-0 md:pt-8 sm:pt-4 lg:pt-0">
          <div className="flex lg:flex-col gap-10 items-center justify-between w-full">

 
            <ProfileCard />


            <div className="w-2/3 flex flex-col items-center self-center lg:text-center lg:w-full">
              {/* <h1>Turning Vision into Reality with code</h1> */}

              <AnimatedText
                text={"Crafting Excellence Through Creativity"}
                className="!text-left text-[2rem] xl:!text-3xl lg:!text-center lg:!text-3xl md:!text-3xl sm:!text-xl"
              />
              <p className="my-4 text-base md:text-sm sm:text-xs text-justify lg:text-center md:text-center sm:text-center lg:text-2xl">
              Hi there! I’m a full-stack developer with a passion for turning ideas into impactful solutions and bringing concepts to life. My approach combines precision, creativity, and a
                commitment to excellence in every project I undertake. From
                designing intuitive user experiences to developing cutting-edge
                applications and solving complex challenges, my goal is to
                create work that is not only visually appealing but also
                functional and meaningful. Every project is an opportunity to
                innovate, collaborate, and bring visions to life. Let’s create
                something extraordinary together!
              </p>

              <div className="flex gap-5 md:gap-3 self-start items-center mt-2">
                <Link
                  href="/chinweike.pdf"
                  target="_blank"
                  className="flex gap-2 items-center bg-dark text-light p-2 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark  dark:hover:border-light dark:hover:bg-dark dark:hover:text-light border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark md:px-4 "
                  do
                  wnload={true}
                >
                  {" "}
                  Resume <SaveAltIcon />{" "}
                </Link>

                <Link
                  href={
                    "https://www.linkedin.com/in/innocent-akwolu-5096a5238/"
                  }
                  target="_blank"
                  className="text-lg font-medium capitalize  underline"
                >
                  Contact me..
                </Link>
                <Hireme />
              </div>
            </div>
          </div>
        </Layout>

        {/* <Hireme /> */}
      </main>
    </>
  );
}
