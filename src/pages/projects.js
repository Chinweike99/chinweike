import AnimatedText from '@/Components/AnimatedText'
import Layout from '@/Components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import GitHubIcon from "@mui/icons-material/GitHub";
import { assets } from '@/assets/assets'




const MyProjects = ({type, title, summary, img, link, github}) => {
    return(
        <article className='w-full flex items-center justify-between rounded-[1.2rem] overflow-hidden border border-solid border-black shadow-2xl mb-5'>
            <Link href={link} target='_blank'
            className='w-1/2 cursor-pointer overflow-hidden '
            >
                <Image src={img} alt={title} className='w-full h-auto overflow-hidden' />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-primary font-medium text-xl'>{type}</span>
                <Link href={link} target='_blank'>
                    <h2 className='my-2 w-full text-left text-2xl font-bold'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-black'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank' >
                        <GitHubIcon />
                    </Link>
                    <Link href={github} target='_blank'className='ml-3 rounded-lg bg-black text-white p-1 px-6 font-semibold'>
                        See project
                    </Link>
                </div>

            </div>
        </article>
    )
}








const projects = () => {
  return (
    <>
        <Head>
            <title>Chinweike | Projects page</title>
            <meta name='chinweike' content='projects' />
        </Head>
        <main className='w-full mb-16 flex flex-col items-center justify-center'>
            <Layout className='pt-10'>
                <AnimatedText text={"Imagination Trumps Knowledge"} className='mb-5' />

                <div className='grid grid-cols-12 gap-24'>

                    <div className='col-span-12'>
                        <MyProjects 
                        title={"E-commerce site"}
                        summary={"Site for buying and selling"}
                        link={'https://estore-pied-theta.vercel.app/'}
                        type={"My project"}
                        github={"https://github.com/Chinweike99/estore/tree/master/src"}
                        img={assets.ecomerce}
                        
                        />

                        <MyProjects 
                        title={"Food delivery website"}
                        summary={"Site for buying and selling"}
                        link={'https://github.com/Chinweike99/taSty'}
                        type={"My project"}
                        github={"https://github.com/Chinweike99/taSty"}
                        img={assets.tasty}
                        
                        />
                    </div>
                    {/* Main Projects */}
                    <div className='col-span6-'>
                        Project 1
                    </div>
                    <div className='col-span6-'>
                        Project 2
                    </div>

                    <div className='col-span-12'>
                        Featured Projects
                    </div>
                    {/* Main Projects */}
                    <div className='col-span6-'>
                        Project 3
                    </div>
                    <div className='col-span6-'>
                        Project 4
                    </div>

                </div>


            </Layout>
        </main>
    </>
  )
}

export default projects