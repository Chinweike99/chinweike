import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
// import "@/styles/globals.css"

const CustomLink = ({href, title, className=""}) =>{
  const router = useRouter();
  console.log(router)
  return(
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className='h-[1.5px] inline-block w-0 bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300'
      >&nbsp;</span>
    </Link>
  )
}


const Navbar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
        <nav>
          <CustomLink href="/" title={"Home"} className='mr-4'/>
          <CustomLink href="/about" title={"About"} className='mx-4'/>
          <CustomLink href="/project" title={"Projects"} className='mx-4'/>
          <CustomLink href="/articles" title={"Articles"} className='ml-4'/>
        </nav>

        <nav>
          <Link href="/" target={"_blank"}>L</Link>
          <Link href="/" target={"_blank"}>L</Link>
          <Link href="/" target={"_blank"}>L</Link>
          <Link href="/" target={"_blank"}>L</Link>
          <Link href="/" target={"_blank"}>L</Link>
        </nav>

        <div className='absolute left-[50%] top-2 translate-x-[50%]'>
          <Logo />
        </div>
    </header>
  )
}
export default Navbar