import Link from 'next/link'
import React from 'react'
import {motion} from "framer-motion"


const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
        <MotionLink href="/" className='w-14 h-14 bg-dark text-light flex items-center border border-solid border-transparent dark:border-light justify-center rounded-full text-2xl font-semibold'
        whileHover={{
            background: ["#121212", "rgba(131, 58, 180, 1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "rgba(#12121)"],
            transition:{duration: 1, repeat: Infinity}
        }}
        >
            AIC
        </MotionLink>
    </div>
  )
}

export default Logo