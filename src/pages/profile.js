import { assets } from "@/assets/assets";
import AnimatedText from "@/Components/AnimatedText";
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

const profile = () => {

    const AnimatedNumbers = ({value}) => {
        const ref = useRef(null);

        const motionValue = useMotionValue(0);
        const springvalue = useSpring(motionValue, {duration: 3000});
        const inView = useInView(ref)

        useEffect(() => {
            if(inView){
                motionValue.set(value)
            }
        }, [inView, value, motionValue]);

        useEffect(()=>{
            springvalue.on("change", (latest) =>{
                if(ref.current && latest.toFixed(0) <= value){
                    ref.current.textContent = latest.toFixed(0);
                }
            })
        }, [springvalue, value])

        return <span ref={ref}></span>
    }

  return (
    <>
      <Head>
        <title>Chinweikwe | About page</title>
        <meta name="Chinweike" content="about me" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center dark:text-light">
        <Layout className="pt-10">
          <AnimatedText text={"Passion fuels purpose"} className="mb-10 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 ">
            <div className="col-span-3 flex flex-col items-start justify-start text-justify xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold  uppercase texxr-dark/75">
                Biography
              </h2>
              <p className="font-medium">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </p>
              <p className="font-medium mt-2">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </p>
              <p className="font-medium mt-2">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark dark:border-light bg-light p-8 dark:bg-dark xl:col-span-4 md:order-1 md:col-span-8">

              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light " />
              <Image src={assets.must2} alt="profile-image" className="w-full h-auto rounded-2xl" priority sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">

                <div className="flex flex-col items-center justify-center xl:items-center md:items-center">
                    <span className="inline-block text-5xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                        <AnimatedNumbers value={20}/>+
                    </span>
                    <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">Satisfied clients</h2>
                </div>

                <div className="flex flex-col items-center justify-center xl:items-center">
                    <span className="inline-block text-5xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                        <AnimatedNumbers value={30}/>+
                    </span>
                    <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">Projects completed</h2>
                </div>

                <div className="flex flex-col items-center justify-center xl:items-center">
                    <span className="inline-block text-5xl font-bold xl:items-center md:text-6xl sm:text-5xl xs:text-4xl">
                        <AnimatedNumbers value={2}/>+
                    </span>
                    <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">Years of experience</h2>
                </div>

            </div>
          </div>

          <Skills />
          <Services />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default profile;
