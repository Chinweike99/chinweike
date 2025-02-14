import { assets } from "@/assets/assets";
import AnimatedText from "@/Components/AnimatedText";
import Layout from "@/Components/Layout";
import TransitionEffect from "@/Components/TransitionEffect";
import { motion, useMotionValue } from "framer-motion";
import Head from "next/head";
import React, { useRef } from "react";
import CodeIcon from '@mui/icons-material/Code';
import LaptopIcon from '@mui/icons-material/Laptop';
import SchoolIcon from '@mui/icons-material/School';


const MyArticles = ({ img, title, summary}) => {
  return (
    <li className="relative w-full p-4 bg-light dark:bg-dark border border-solid text-center dark:text-light border-dark dark:border-light rounded-2xl ">
        <span>{img}</span>
    <h2 className="xs:text-lg capitalize text-2xl font-bold my-2 hover:underline">
            {title}
            </h2> 
      <div className="absolute top-0 -right-3  -z-10 w-[101%] h-[102%] rounded-[2rem] bg-dark dark:bg-light" />
      
      <p className="text-sm mb-2 font-semibold">{summary}</p>
 
    </li>
  );
};

const Services = () => {
  return (
    <>
      <Head>
        <title>Chinweike | Services page</title>
        <meta name="chinweike" content="services" />
      </Head>
      <TransitionEffect />
      <main className=" mb-16 flex flex-col w-full items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16 p-5">
          <AnimatedText
            text={"Services i provide"}
            className="font-bold text-5xl mb-[4rem] w-full text-center md:text-6xl xs:text-4xl md:mb-16"
          />
          <motion.ul className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-21 sm:grid-cols-1  "
          initial={{ y: 100 }}
          whileInView={{y:0, transition:{ duration: 1.3, type: "spring",}}}
          >
            <motion.span
                initial={{ y: 100 }}
                whileInView={{y:0, transition:{ duration: 1, type: "spring",}}}
                whileHover={{scale:1.04, transition:{duration:0.5}}}
            >
            <MyArticles
            img={<LaptopIcon style={{fontSize: "5rem"}} />}
              title={"Web Development"}
              summary={"I develop modern web applications using HTML, CSS, and JavaScript, with a focus on React.js within the MERN stack (MongoDB, Express, React, Node.js)"}
              className='md:col-span-1'
            />
            </motion.span>

            <motion.span
            initial={{ y: 100 }}
            whileInView={{y:0, transition:{ duration: 1.5, ease: "easeInOut"}}}
            whileHover={{scale:1.04, transition:{duration:0.5}}}
            >
            <MyArticles
            img={<CodeIcon style={{fontSize: "5rem"}} />}
            title={"Performance Optimization"}
              summary={"I create websites optimized for high search engine rankings (SEO) and performance. By implementing best practices in SEO and speed optimization, I ensure faster load times, better user experiences, and improved visibility in search engines."}
              className='md:col-span-1'
            />
            </motion.span>

            <motion.span
            initial={{ y: 100 }}
            whileInView={{y:0, transition:{ duration: 0.5, ease: "easeInOut"}}}
            whileHover={{scale:1.04, transition:{duration:0.5}}}
            >
            <MyArticles
            img={<SchoolIcon style={{fontSize: "5rem"}} />}
            title={"Training & Consultation"}
              summary={"I'm passionate about web development and eager to learn and grow with others. I offer training and consultation in front-end development and the MERN stack. While new to teaching, I'm excited to share what I know and help others. For now, I'm offering free sessions, and look forward to growing together through collaboration."}
            className='md:col-span-2'
            />
            </motion.span>

          </motion.ul>
        </Layout>
      </main>
    </>
  );
};

export default Services;
