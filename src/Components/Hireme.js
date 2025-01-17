import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hireme = () => {
  return (
    <div className=' bottom-[10rem] flex items-center justify-center overflow-hidden'>
        <div className='w-48 md:w-24 h-auto flex items-center justify-center relative'>
            <Image src={assets.webDeveloper} className='fill-dark animate-spin-slow dark:fill-light dark:bg-light md: dark:text-light'/>

            <Link href={"/"} className='flex items-center justify-center absolute bg-dark text-light font-semibold p-1 rounded-full md:h-[4.5rem] md:w-[4.5rem] h-[5rem] w-[5rem] hover:bg-light hover:text-dark hover:border-2 hover:border-dark '
            
            >Hire Me</Link>
        </div>
    </div>
  )
}

export default Hireme