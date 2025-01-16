import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 dark:border-light border-solid border-dark font-medium text-lg dark:text-light'>
      <Layout className='py-8 flex items-center justify-between'>
        <span>{(new Date().getFullYear(0))} &copy; All Rights Reserved</span>

        <div className='flex items-center'>
          Build with<span className='text-primary dark:text-primaryDark text-2xl px-1 '>&#9825;</span> by &nbsp;
          <Link href={"/addyourwesite"} target='_blank' className='underline underline-offset-3'>Chinweike</Link>
        </div>
        <Link href={"/yourlikn"} target='_blank' className='underline underline-offset-2'>Chinweike</Link>
      </Layout>
    </footer>
  )
}

export default Footer