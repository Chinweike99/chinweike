import { assets } from "@/assets/assets";
import AnimatedText from "@/Components/AnimatedText";
import Layout from "@/Components/Layout";
import { motion, useMotionValue } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

const FramerImage = motion(Image);

const ShowonHover = ({ title, img, link }) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const ImgRef = useRef(null);

    const handleMouse = (e) =>{
        ImgRef.current.style.display = "inline-block";
        x.set(e.pageX);
        y.set(-10);
    }

    const handleMouseOut = (e) =>{
        ImgRef.current.style.display = "none";
        x.set(0);
        y.set(0);
    }

  return (
    <Link href={link} target="_blank"
    onMouseMove={handleMouse}
    onMouseLeave={handleMouseOut}
    >

      <h2 className="capitalize text-xl font-semibold ">{title}</h2>
      <FramerImage
      style={{x:x, y:y}}
      initial={{opacity:0}}
      whileInView={{opacity:1, transition:{duration:0.5}}}

      ref={ImgRef} src={img} alt={title} className="w-96 z-10 h-auto hidden absolute rounded-lg" />
    </Link>
  );
};

const Article = ({ img, title, link, date }) => {
  return (
    <motion.li className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-white text-black first:mt-0 border border-solid border-black border-r-4 border-b-4"
    initial={{ y: 100 }}
      whileInView={{y:0, transition:{ duration: 0.9, type: "spring",}}}
      
    >
      {/* <Link href={link} target='_blank'>
            <h2 className='capitalize text-xl font-semibold '>
                {title}</h2>
            </Link> */}
            <ShowonHover title={title} link={link} img={img} />
      <span className="text-primary">{date}</span>
    </motion.li>
  );
};

const MyArticles = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-white border border-solid border-black rounded-2xl">
      <div className="absolute top-0 -right-3  -z-10 w-[101%] h-[102%] rounded-[2rem] bg-black" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden inline-block rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto overflow-hidden"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.6 }}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 hover:underline">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold">{time}</span>
    </li>
  );
};

const writing = () => {
  return (
    <>
      <Head>
        <title>Chinweike | Articles page</title>
        <meta name="chinweike" content="articles" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText
            text={"Reading can change your life.."}
            className="mb-2"
          />
          <ul className="grid grid-cols-2 gap-16">
            <MyArticles
              img={assets.health}
              title={"Rudiments of HTML5/CSS"}
              summary={"Understanding HTML and CSS"}
              time={"5 minutes read"}
              link={"/?"}
            />

            <MyArticles
              img={assets.health}
              title={"Rudiments of HTML5/CSS"}
              summary={"Understanding HTML and CSS"}
              time={"5 minutes read"}
              link={"/?"}
            />

            <MyArticles
              img={assets.health}
              title={"Rudiments of HTML5/CSS"}
              summary={"Understanding HTML and CSS"}
              time={"5 minutes read"}
              link={"/?"}
            />

            <MyArticles
              img={assets.health}
              title={"Rudiments of HTML5/CSS"}
              summary={"Understanding HTML and CSS"}
              time={"5 minutes read"}
              link={"/?"}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              img={assets.tasty}
              title={"Basics of JavaScript"}
              date={"Dec 10, 2024"}
              link={"/?"}
            />
            <Article
              img={assets.tasty}
              title={"Basics of JavaScript"}
              date={"Dec 10, 2024"}
              link={"/?"}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default writing;
