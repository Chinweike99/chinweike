import React, { useRef } from 'react'
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import AnimatedText from './AnimatedText';
import Layout from './Layout';
import Head from 'next/head';
import { motion } from 'framer-motion';


const ContactMe = () => {
    const serviceId = process.env.NEXT_PUBLIC_SERVICEID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATEID;
    const publicKey = process.env.NEXT_PUBLIC_PUBLICID;
    const test = process.env.NEXT_PUBLIC_PUBLIV;

    const notify = () => toast("Message Sucesful!");
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        console.log("Service ID:", serviceId);
console.log("Template ID:", templateId);
console.log("Public Key:", publicKey);
console.log("Public test:", test);
console.log("Helo Nigeria");

if (!serviceId || !templateId || !publicKey) {
  console.error('Missing EmailJS environment variables.');
}

        emailjs
          .sendForm(serviceId, templateId, form.current, publicKey)
          .then(
            () => {
              notify();
              
              console.log('SUCCESS!');
            },
            (error) => {
              toast.error(error)
              console.log('FAILED...', error.message);
            },
          );
          return form.current.reset();
      };

  return (
    <>
        <Head>
            <title>Chinweike | Contact page</title>
            <meta name="chinweike" content="contact" />
      </Head>
        <main id='contact' className='pt-0'>
        {/* <AnimatedText text={"Get in touch"} /> */}
        <Layout className="px-[18rem]  flex items-center justify-center w-2/3 gap-4 md:gap-8 md:flex-col-reverse">
            <div className="w-full md:w-full">
                <h1 className='font-semibold text-2xl text-primary dark:text-primaryDark'>Let's talk</h1>
                <p>I'm currently available to take on new projects, so feel free to send me a message about anything you want me to work on. You can contact me anytime..</p>
                <div className=" flex flex-col gap-2 mt-3">
                    <div className="flex">
                        <AlternateEmailOutlinedIcon  className='mr-2 text-primary dark:text-primaryDark'/>
                        <p>chinweiketwitter@gmail.com</p>
                    </div>

                    <div className="flex">
                        <RoomOutlinedIcon className='mr-2 text-primary dark:text-primaryDark'/>
                        <p>Lagos, Nigeria</p>
                    </div>
                    <div className="flex">
                        <LocalPhoneOutlinedIcon className='mr-2 text-primary dark:text-primaryDark'/>
                        <p>+234 9166330306</p>
                    </div>
                </div>
            </div>

           {/* <form ref={form} onSubmit={sendEmail} className="w-1/2 flex flex-col md:w-full">
                <motion.span className='flex flex-col'
                initial={{ y: 100 }}
                whileInView={{y:0, transition:{ duration: 1}}}
                >
                <label htmlFor="">Your name</label>

                <input type="text"  placeholder='Enter your name' name="user_name" required className='h-10 p-2 bg-gray-400  font-semibold text-dark rounded border-dark outline-dark dark:outline-light dark:border-light'/>
                </motion.span>

                <motion.span className='flex flex-col'
                initial={{ y: 100 }}
                whileInView={{y:0, transition:{ duration: 1.4,}}}
                >
                <label htmlFor="" className='mt-2'>Your email</label>
                <input type="text" placeholder='Enter your email address' name="user_email" required className='h-10 p-2 bg-gray-400  font-semibold text-dark rounded border-dark outline-dark dark:outline-light dark:border-light'/>
                </motion.span>
                <label htmlFor="" className='mt-2'>Write your message</label>

                <motion.textarea required name="message" rows={"10"} placeholder='Enter your message' className=' p-2 bg-gray-400  font-semibold text-dark rounded border-dark outline-dark dark:outline-light dark:border-light'
                initial={{ y: 100 }}
                whileInView={{y:0, transition:{ duration: 1.6}}}
                ></motion.textarea>

                <motion.button type='submit' value="Send" className='mt-4 border w-full p-3 text-2xl font-semibold rounded border-primary text-primary dark:border-primaryDark dark:text-primaryDark hover:bg-primary hover:text-light dark:hover:bg-primaryDark dark:hover:text-light' required
                initial={{ y: 50 }}
                whileInView={{y:0, transition:{ duration: 1.7}}}
                >Submit</motion.button>
           </form> */}
        </Layout>

    </main>
    </>
  )
}

export default ContactMe
