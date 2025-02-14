import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import useThemeSwitcher from "./Hooks/ThemeSwitcher";


const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1.5px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};


const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () =>{
    toggle();
    router.push(href)
  }
  return (
    <button href={href} className={`${className} dark:text-dark text-light my-3 relative group`} onClick={handleClick}>
      {title}
      <span
        className={`h-[1.5px] inline-block bg-light  absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};




const Navbar = () => {

  const [mode, setMode] = useThemeSwitcher();
  const [open, setOpen] = useState(false);

  const handleOpen = () =>{
    setOpen(!open)
  }


  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light border-b pb-11 border-b-solid dark:border-b-light relative">
      
      <button onClick={handleOpen} className="hidden lg:flex flex-col justify-center items-center">
        <span className={`bg-dark dark:bg-light block transition-all duration-500 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${open ? `rotate-180 translate-y-1` : "-translate-y-0.5"}`}></span>

        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${open ? "opacity-0" : 'opacity-1' }`}></span>

        <span className={`bg-dark dark:bg-light block transition-all duration-500 ease-out h-0.5 w-6 rounded-sm ${open ? `-rotate-45 -translate-y-1` : "translate-y-0.5"}`}></span>
      </button>
      
      <div className="w-full flex justify-between items-center lg:hidden">
      <nav>
        <CustomLink href="/" title={"Home"} className="mr-4" />
        <CustomLink href="/profile" title={"About"} className="mx-4" />
        <CustomLink href="/projects" title={"Projects"} className="mx-4" />
        {/* <CustomLink href="/myArticle.js" title={"Articles"} className="ml-4" /> */}
        {/* <CustomLink href="/writing" title={"Articles"} className="mx-4" /> */}
      </nav>

      <nav className="flex items-center gap-2 justify-center flex-wrap">
        <motion.a
          href="https://www.linkedin.com/in/innocent-akwolu-5096a5238/"
          target={"_blank"}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 1.3 }}
        >
          <LinkedInIcon
            className="text-blue-900"
            style={{ fontSize: "1.5rem" }}
          />
        </motion.a>

        <motion.a href="https://github.com/Chinweike99" target={"_blank"} whileHover={{ y: 4 }}>
          <GitHubIcon style={{ fontSize: "1.5rem" }} />
        </motion.a>

        <motion.a href="https://x.com/Chinwe_script" target={"_blank"} whileHover={{ y: -4 }}>
          <XIcon style={{ fontSize: "1.5rem" }} />
        </motion.a>

        <motion.a href="https://wa.me/2349166330306" target={"_blank"} whileHover={{ y: 4 }}>
          <WhatsAppIcon
            className="text-green-700"
            style={{ fontSize: "1.5rem" }}
          />
        </motion.a>

        <motion.a href="https://web.facebook.com/innodigitals" target={"_blank"} whileHover={{ y: -4 }}>
          <FacebookIcon
            className="text-blue-800"
            style={{ fontSize: "1.5rem" }}
          />
        </motion.a>

        <button onClick={()=> setMode(mode === "light" ? "dark" : "light")}
          className={`ml-3 h-[1.9rem] w-[1.9rem] fles items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
          >
          {
            mode === "dark"? <TipsAndUpdatesIcon className="fill-dark"/> 
            : <DarkModeIcon className="fill-dark"/>
          }
        </button>


      </nav>
      </div>

      {
        open ? 
        <motion.div 
        initial={{scale:0, opacity:1, x:"-50%", y:"-50%"}}
        animate={{scale:1, opacity:1, transition:{duration:0.7}}}
        className="min-w-[90vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark dark:bg-light/55 rounded-[2rem] backdrop-blur-md py-[9rem]">
        <nav className="flex items-center flex-col justify-center mb-[2rem] light:text-light relative">
          <CustomMobileLink href="/" title={"Home"} className="text-4xl "  toggle={handleOpen}/>
          <CustomMobileLink href="/profile" title={"About"} className="text-4xl"  toggle={handleOpen}/>
          <CustomMobileLink href="/projects" title={"Projects"} className="text-4xl"  toggle={handleOpen}/>
        </nav>
  
        <button className="absolute top-[2rem] right-[4rem] text-2xl dark:text-dark font-bold text-light"
        onClick={()=>setOpen(false)}
        >
          Close
        </button>


        <nav className="flex items-center gap-4 sm:gap-1 justify-center flex-wrap">
          
          <motion.a
            href="https://www.linkedin.com/in/innocent-akwolu-5096a5238/"
            target={"_blank"}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 1.3 }}
          >
            <LinkedInIcon
              className="text-blue-500 dark:text-blue-800"
              style={{ fontSize: "2.5rem" }}
            />
          </motion.a>
  
          <motion.a href="https://github.com/Chinweike99" target={"_blank"} whileHover={{ y: 4 }}>
            <GitHubIcon style={{ fontSize: "2.5rem" }} className="text-light dark:text-dark"/>
          </motion.a>
  
          <motion.a href="https://x.com/Chinwe_script" target={"_blank"} whileHover={{ y: -4 }}>
            <XIcon style={{ fontSize: "2.5rem" }} className="text-light dark:text-dark"/>
          </motion.a>
  
          <motion.a href="/https://wa.me/2349166330306" target={"_blank"} whileHover={{ y: 4 }}>
            <WhatsAppIcon
              className="text-green-700"
              style={{ fontSize: "2.5rem" }}
            />
          </motion.a>
  
          <motion.a href="https://web.facebook.com/innodigitals" target={"_blank"} whileHover={{ y: -4 }}>
            <FacebookIcon
              className="text-blue-500  dark:text-blue-800"
              style={{ fontSize: "2.5rem" }}
            />
          </motion.a>
  
          <button onClick={()=> setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 h-[1.9rem] w-[1.9rem] fles items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
            >
            {
              mode === "dark"? <TipsAndUpdatesIcon className="fill-dark"/> 
              : <DarkModeIcon className="fill-dark"/>
            }
          </button>
  
  
        </nav>
        </motion.div>
  
        : null
      }
      <div className="absolute left-[50%] top-2 translate-x-[50%]">
        <Logo />
      </div>
    </header>
  );
};
export default Navbar;