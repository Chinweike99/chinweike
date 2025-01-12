import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";
import { Scale } from "@mui/icons-material";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  console.log(router);
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1.5px] inline-block bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title={"Home"} className="mr-4" />
        <CustomLink href="/about" title={"About"} className="mx-4" />
        <CustomLink href="/project" title={"Projects"} className="mx-4" />
        <CustomLink href="/articles" title={"Articles"} className="ml-4" />
      </nav>

      <nav className="flex items-center gap-2 justify-center flex-wrap">
        <motion.a
          href="/"
          target={"_blank"}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 1.3 }}
        >
          <LinkedInIcon
            className="text-blue-900"
            style={{ fontSize: "1.5rem" }}
          />
        </motion.a>

        <motion.a href="/" target={"_blank"} whileHover={{ y: 4 }}>
          <GitHubIcon style={{ fontSize: "1.5rem" }} />
        </motion.a>

        <motion.a href="/" target={"_blank"} whileHover={{ y: -4 }}>
          <XIcon style={{ fontSize: "1.5rem" }} />
        </motion.a>

        <motion.a href="/" target={"_blank"} whileHover={{ y: 4 }}>
          <WhatsAppIcon
            className="text-green-700"
            style={{ fontSize: "1.5rem" }}
          />
        </motion.a>
        
        <motion.a href="/" target={"_blank"} whileHover={{ y: -4 }}>
          <FacebookIcon
            className="text-blue-800"
            style={{ fontSize: "1.5rem" }}
          />
        </motion.a>
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[50%]">
        <Logo />
      </div>
    </header>
  );
};
export default Navbar;