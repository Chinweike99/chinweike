import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion'
import Licons from './Licons';


const Details = ({type, degree, time, place, info}) =>{
    const ref = useRef(null)
    return <li ref={ref} className='my-8 first:mt-0 last:mt-0 w-[75%] md:w-[90%] mx-auto flex flex-col items-start justify-between dark:text-light' >
        <Licons reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type: "spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                {type}&nbsp;
                <small className='text-primary dark:text-primaryDark text-[1rem]'>
                    <i>
                        {degree}
                    </i>
                </small>
            </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} 
            </span>
            <p className='font-medium w-full md:text-sm'>
                {place}
            </p>
            <span className='text-primary dark:text-primaryDark font-medium'>{info}</span>
        </motion.div>
    </li>
}


const Education = () => {

    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );


  return (
    <>
        <div className='my-20'>
            <h2 className='font-bold text-5xl mb-[4rem] w-full text-center '>
                Education
            </h2>

            <div ref={ref} className='w-[95%] mx-auto relative'>

            <motion.div className='absolute left-11 md:left-[-1rem] top-0 w-[4px] h-full bg-dark origin-top dark:bg-light'
            style={{scaleY: scrollYProgress}}
            />

                <ul className='w-full flex flex-col items-start justify-between'>
                    <Details type={"Bachelor of Science In Civil Engineering"}
                    degree={"Second Class (Upper division)"}
                     time={"2017 - 2023"}
                     place={"Joseph Sarwuan Tarka University Makurdi (JOSTUM)"}
                     info={"Relevant courses includes: Structural Analysis, Structural design and Engineering Mathematics."}
                    />

                    <Details type={"Bachelor of Science In Civil Engineering"}
                    degree={"Second Class (Upper division)"}
                     time={"2017 - 2023"}
                     place={"Joseph Sarwuan Tarka University Makurdi (JOSTUM)"}
                     info={"Relevant courses includes: Structural Analysis, Structural design and Engineering Mathematics."}
                    />

                    <Details type={"Bachelor of Science In Civil Engineering"}
                    degree={"Second Class (Upper division)"}
                     time={"2017 - 2023"}
                     place={"Joseph Sarwuan Tarka University Makurdi (JOSTUM)"}
                     info={"Relevant courses includes: Structural Analysis, Structural design and Engineering Mathematics."}
                    />



                </ul>
            </div>

        </div>
    </>
  )
}

export default Education