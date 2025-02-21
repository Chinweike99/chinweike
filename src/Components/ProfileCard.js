import React from "react";
import { ArrowBack, MoreVert, LocationOn, Email } from "@mui/icons-material";
import { LinkedIn, GitHub, Twitter, WhatsApp } from "@mui/icons-material";

const ProfileCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="relative flex flex-col items-center p-6 bg-gray-200 rounded-2xl shadow-lg w-[350px]">
        {/* Icons */}
        <ArrowBack className="absolute top-4 left-4 text-gray-600 cursor-pointer" />
        <MoreVert className="absolute top-4 right-4 text-gray-600 cursor-pointer" />

        {/* Profile Image */}
        <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-black">
          <img
            data-testid="profilePicture"
            src="./src/InnocentProfileCover.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name & Job Title */}
        <h2 data-testid="fullName" className="mt-4 text-xl font-semibold text-gray-800">
          AKwolu Innocent Chinweike
        </h2>
        <p data-testid="jobTitle" className="text-gray-600 text-sm">Full-Stack Developer</p>

        {/* Bio */}
        <p
          data-testid="shortBio"
          className="text-center text-sm text-gray-700 mt-4 px-4 leading-relaxed"
        >
          I am a dedicated Full-Stack Developer specializing in the MERN stack. I excel at crafting responsive designs and transforming mockups into fully functional, secure web applications. With a keen focus on data safety and SEO optimization, I consistently strive to build innovative digital solutions.
        </p>

        {/* Social Icons */}
        <div data-testid="socialLinks" className="flex space-x-4 mt-6">
          <a href="https://www.linkedin.com/in/innocent-akwolu-5096a5238/" target="_blank" rel="noopener noreferrer" className="text-blue-700">
            <LinkedIn fontSize="large" />
          </a>
          <a href="https://github.com/Chinweike99" target="_blank" rel="noopener noreferrer" className="text-gray-700">
            <GitHub fontSize="large" />
          </a>
          <a href="https://x.com/Chinwe_script" target="_blank" rel="noopener noreferrer" className="text-blue-500">
            <Twitter fontSize="large" />
          </a>
          <a href="https://wa.me/2349166330306" target="_blank" rel="noopener noreferrer" className="text-green-600">
            <WhatsApp fontSize="large" />
          </a>
        </div>

        {/* Location & Email */}
        <div className="flex flex-col items-center mt-4 text-gray-700 text-sm">
          <p data-testid="currentLocation" className="flex items-center gap-2">
            <LocationOn /> Lagos, Nigeria.
          </p>
          <p data-testid="emailAdress" className="flex items-center gap-2">
            <Email /> Chinweiketwitter@gmail.com
          </p>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4 mt-6 w-full">
          <button className="flex-1 py-2 rounded-lg bg-blue-500 text-white shadow-md hover:bg-blue-600">Message</button>
          <button className="flex-1 py-2 rounded-lg bg-gray-300 text-gray-800 shadow-md hover:bg-gray-400">Follow</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
