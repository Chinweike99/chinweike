import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion'
import Licons from './Licons';


const Details = ({position, company, time, work, stack}) =>{
    const ref = useRef(null)
    return <li ref={ref} className='my-8 first:mt-0 last:mt-0 w-[80%] mx-auto flex flex-col items-start justify-between'>
        <Licons reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type: "spring"}}
        >
            <h3 className='capitalize font-bold text-2xl'>{position}&nbsp; 
                <a className='text-primary dark:text-primaryDark capitalize'>{company}</a>
            </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75'>
                {time} 
            </span>
            <p className='font-medium w-full'>
                {work}
            </p>
            <span className='text-primary dark:text-primaryDark font-medium'>{stack}</span>
        </motion.div>
    </li>
}


const Experience = () => {

    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );


  return (
    <>
        <div className='my-40'>
            <h2 className='font-bold text-5xl mb-[4rem] w-full text-center '>
                Experirence
            </h2>

            <div ref={ref} className='w-[95%] mx-auto relative'>

            <motion.div className='absolute left-11 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light'
            style={{scaleY: scrollYProgress}}
            />

                <ul className='w-full flex flex-col items-start justify-between'>
                    <Details position={"Frontend developer"}
                     company={"NPLC"} time={"Nov 2024"}
                     work={"Build Figma designs to webpage"}
                     stack={"Reactjs, React Redux"}
                    />

                    
                    <Details position={"Frontend developer"}
                     company={"NPLC"} time={"Nov 2024"}
                     work={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                     stack={"Reactjs, React Redux"}
                    />

                    <Details position={"Frontend developer"}
                     company={"NPLC"} time={"Nov 2024"}
                     work={"Build Figma designs to webpage"}
                     stack={"Reactjs, React Redux"}
                    />

                    <Details position={"Frontend developer"}
                     company={"NPLC"} time={"Nov 2024"}
                     work={"Build Figma designs to webpage"}
                     stack={"Reactjs, React Redux"}
                    />


                </ul>
            </div>

        </div>
    </>
  )
}

export default Experience