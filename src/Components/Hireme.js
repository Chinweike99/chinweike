import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hireme = () => {
  return (
    <div className=' bottom-[10rem] flex items-center justify-center overflow-hidden'>
        <div className='w-48 h-auto flex items-center justify-center relative'>
            <Image src={assets.webDeveloper} className='fill-black animate-spin-slow'/>

            <Link href={"/"} className='flex items-center justify-center absolute bg-black text-white font-semibold p-1 rounded-full h-[5rem] w-[5rem]'
            
            >Hire Me</Link>
        </div>
    </div>
  )
}

export default Hireme