import React from 'react'
import { motion } from 'framer-motion'





const TransitionEffect = () => {
  return (
    <>
        <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-gray-600 backdrop:blur-2xl' 
        initial={{x:"100%", width:"100%"}}
        animate={{x:"0%", width:"0%"}}
        transition={{duration:0.8, ease:"easeInOut"}}
        />
        <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-gray-300' 
        initial={{x:"100%", width:"100%"}}
        animate={{x:"0%", width:"0%"}}
        transition={{delay:0.2, duration:0.9, ease:"easeInOut"}}
        />
        <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-dark backdrop:blur-3xl' 
        initial={{x:"100%", width:"100%"}}
        animate={{x:"0%", width:"0%"}}
        transition={{delay:0.4, duration:1, ease:"easeInOut"}}
        />

    </>
  )
}

export default TransitionEffect