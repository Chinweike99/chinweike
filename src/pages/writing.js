import { assets } from '@/assets/assets'
import AnimatedText from '@/Components/AnimatedText'
import Layout from '@/Components/Layout'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FramerImage = motion(Image);


const MyArticles = ({img, title, time, summary, link})=>{
    return(
        <li className='relative col-span-1 w-full p-4 bg-white border border-solid border-black rounded-2xl'>
            
            <div className="absolute top-0  -z-10 w-[99%] h-[102%] rounded-[2rem] bg-black" />
            <Link
          href={link}
          target="_blank"
          className="w-full cursor-pointer overflow-hidden inline-block rounded-lg"
        >
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-auto overflow-hidden"
            
            whileHover={{scale: 1.03}}
            transition={{duration: 0.6}}
          />
        </Link>
        <Link href={link} target='_blank'>
            <h2 className='capitalize text-2xl font-bold my-2 hover:underline'>{title}</h2>
        </Link>
        <p className='text-sm mb-2'>{summary}</p>
        <span className='text-primary font-semibold'>{time}</span>
        </li>
    )
}


const writing = () => {
  return (
    <>
        <Head>
            <title>Chinweike | Articles page</title>
            <meta name='chinweike' content='articles' />
        </Head>
        <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
            <Layout className='pt-16'>
                <AnimatedText text={"Reading can change your life.."} className='mb-2'/>
                <ul className='grid grid-cols-2 gap-16'>
                    
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
            </Layout>
        </main>
    </>
  )
}

export default writing