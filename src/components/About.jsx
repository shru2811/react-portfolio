import React from "react";
import profile_svg from "../images/me1.jpg";
import Card from "./Card";
import resume from "../assets/resume.pdf";

function About() {
  return (
    <div className="lg:h-screen pb-24 flex flex-col justify-evenly items-center lg:pr-10 animate-slide-in-top lg:max-w-7xl mx-auto">
      <div className="flex justify-center items-center flex-col m-0 container mx-auto px-4 py-8 animate-slide-in-top">
        <h1 className="text-5xl font-bold dark:text-indigo-200 lg:text-6xl 2xl:text-7xl">
          About me
        </h1>
        <p className="text-xl lg:text-2xl 2xl:text-3xl text-gray-500 mt-3 dark:text-gray-300">
          My Introduction
        </p>
      </div>

      <div className="flex md:flex-row flex-col flex-col-reverse text-center items-center justify-evenly mt-16">
        <div className="flex flex-col justify-center items-center">
          <p className="my-8 md:w-3/4 md:m-10 lg:w-2/3 dark:text-indigo-200 text-lg lg:text-xl">
            I am a B.Tech Computer Science student at the University of
            Petroleum and Energy Studies, specializing in Big Data. I am
            passionate about technology and possess strong programming skills in
            various languages, including Python, Java, and C. I am also
            proficient in data structures, algorithms, and object-oriented
            programming. Additionally, I have experience in web development,
            DevOps & Data Analytics. I am eager to learn and contribute to
            innovative projects.
          </p>
          {/* <button className="bg-gray-700 dark:bg-violet-800 text-white px-5 py-3 rounded-xl hover:bg-black transition duration-500 ease-in-out dark:text-white dark:hover:bg-indigo-100 dark:hover:text-blue-600">
            <a href={resume} download="Resume">
              Download CV
            </a>
          </button> */}
        </div>
        <img
          src={profile_svg}
          alt="My Picture"
          className="size-80 rounded-xl mb-8 lg:w-1/4 lg:h-auto"
        />
      </div>
    </div>
  );
}

export default About;
