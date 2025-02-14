import { assets } from "@/assets/assets";
import AnimatedText from "@/Components/AnimatedText";
import ContactMe from "@/Components/ContactMe";
import Education from "@/Components/Education";
import Experience from "@/Components/Experience";
import Layout from "@/Components/Layout";
import Services from "@/Components/Services";
import Skills from "@/Components/Skills";
import TransitionEffect from "@/Components/TransitionEffect";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";

const profile = () => {
  const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springvalue = useSpring(motionValue, { duration: 3000 });
    const inView = useInView(ref);

    useEffect(() => {
      if (inView) {
        motionValue.set(value);
      }
    }, [inView, value, motionValue]);

    useEffect(() => {
      springvalue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      });
    }, [springvalue, value]);

    return <span ref={ref}></span>;
  };

  return (
    <>
      <Head>
        <title>Chinweikwe | About page</title>
        <meta name="Chinweike" content="about me" />
      </Head>
      <TransitionEffect />
      <ToastContainer position="top-right" />
      <main className="flex w-full flex-col items-center dark:text-light">
        <Layout className="pt-10">
          <AnimatedText
            text={"Building the Future, One Line of Code at a Time"}
            className="mb-10 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 ">
            <div className="col-span-12 flex flex-col items-start justify-start text-justify md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold  uppercase texxr-dark/75">
                Biography
              </h2>
              <p className="font-medium ">
                Hi, I'm Akwolu Innocent Chinweike, a passionate web developer from Nigeria. I hold a degree in Civil Engineering from Joseph Sarwuan Tarka University, Makurdi, but my journey into tech began in December 2022. I’ve always loved tackling complex tasks, and coding felt like the perfect challenge. It started with a desire to learn a digital skill, and after conversations with friends, I decided to dive into programming.
                <br/><br />
                 My first steps were with Python, although the learning curve was steep, I stayed committed. In April 2023, I invested in the "Complete Web Development" course by Dr. Angela Yu on Udemy. Shortly after, also joined the ALX Software Engineering program. Though I had to step back from ALX due to work and resource constraints, the foundation it gave me in C programming significantly boosted my understanding of coding concepts. <br/> Since then, I’ve balanced learning and building projects in both front-end and back-end development. I’m excited to continue growing in this field and applying my skills to real-world projects. 
                 <br/>
                 <br/>
                 {/* Expertise and Skills <br />
                 I’m proficient in: JavaScript, React, Express, Node.js, and MongoDB <br/> */}
                 {/* with hands-on experience in developing both front-end and back-end systems. My focus is on crafting clean, user-friendly interfaces and delivering seamless user experiences.  */}
                 
                 Outside of coding: I enjoy exploring new technologies, hanging out with friends, or watching a good movie.
              </p>
            </div>

            {/* Image section */}
            <div className="col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark dark:border-light bg-light p-8 dark:bg-dark xl:col-span-4 md:order-1 md:col-span-8 min-w-[350px] sm:min-w-0 max-h-[60rem] ml-[6rem] lg:ml-[1rem] md:ml-0 sm:ml-0">

              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light " />
              <Image
                src={assets.must2}
                alt="profile-image"
                className="w-full  h-auto rounded-2xl"
                priority
                
              />
            </div>



              {/* Client */}
            <div className="col-span-6 flex flex-col items-center justify-between xl:col-span-8 md:flex-row xl:items-center md:order-3  bg-dark text-white md:dark:bg-[#435a59] rounded-2xl p-3 ">
              <div className="flex flex-col items-center justify-center xl:items-center md:items-center">
                <span className="inline-block text-5xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-light/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Satisfied clients
                </h2>
              </div>

              <div className="flex flex-col items-center justify-center xl:items-center">
                <span className="inline-block text-5xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={15} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-light/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects completed
                </h2>
              </div>

              <div className="flex flex-col items-center justify-center xl:items-center">
                <span className="inline-block text-5xl font-bold xl:items-center md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-light/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Years of experience
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Services />
          <Experience />
          <Education />
          <ContactMe />
        </Layout>
      </main>
    </>
  );
};

export default profile;
