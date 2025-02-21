import React from "react";
import { ArrowBack, MoreVert, LocationOn, Email } from "@mui/icons-material";
import { LinkedIn, GitHub, Twitter, WhatsApp } from "@mui/icons-material";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

const ProfileCard = () => {
  return (
    <div className="flex items-center justify-center w-2/3 sm:w-full">
      <div className="relative w-full flex flex-col items-center p-12 dark:bg-dark rounded-2xl shadow-lg border-2">
        {/* Icons */}
        <ArrowBack className="absolute top-4 left-4 text-gray-600 cursor-pointer" />
        <MoreVert className="absolute top-4 right-4 text-gray-600 cursor-pointer" />

        {/* Profile Image */}
        <div className="w-[10rem] h-[10rem] rounded-full overflow-hidden border-2 dark:border-light">
          <Image
            data-testid="profilePicture"
            src={assets.InnocentProfileCover}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name & Job Title */}
        <h2 data-testid="fullName" className="mt-4 text-xl font-semibold dark:text-light text-center">
          AKwolu Innocent Chinweike
        </h2>
        <p data-testid="jobTitle" className="dark:text-light  text-base text-center">Full-Stack Developer</p>

        {/* Location & Email */}
        <div className="flex flex-col items-center mt-4 dark:text-light  text-sm">
          <p data-testid="currentLocation" className="flex items-center gap-2 md:text-sm sm:text-xs">
            <LocationOn /> Lagos, Nigeria.
          </p>
          <p data-testid="emailAdress" className="flex items-center gap-2 md:text-sm sm:text-xs">
            <Email /> Chinweiketwitter@gmail.com
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center space-x-4 mt-6 w-full">
          <a href="https://x.com/Chinwe_script" target="_blank">
          <button className=" py-2 px-5 rounded-lg dark:bg-light dark:text-dark dark:hover:text-light  shadow-md dark:hover:bg-dark border-2 dark:hover:border-2">Message</button>
          </a>
          
          <a href="//www.linkedin.com/in/innocent-akwolu-5096a5238/" target="_blank">
          <button className=" py-2 px-5 rounded-lg dark:bg-light dark:text-dark dark:hover:text-light  shadow-md dark:hover:bg-dark border-2 dark:hover:border-2">Follow</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
