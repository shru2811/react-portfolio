import React from "react";
import profile_svg from "../images/me1.jpg";
import Card from "./Card";
import resume from "../assets/resume.pdf";

function About() {
  return (
    <div className="lg:h-screen pb-24 flex flex-col justify-evenly items-center lg:pr-10 animate-slide-in-top lg:max-w-7xl mx-auto">
      <div className="flex justify-center items-center flex-col m-0 container mx-auto px-4 py-8 animate-slide-in-top">
        <h1 className="text-5xl font-bold text-indigo-200 lg:text-6xl 2xl:text-7xl">
          About me
        </h1>
        <p className="text-xl lg:text-2xl 2xl:text-3xl mt-3 text-gray-300">
          My Introduction
        </p>
      </div>

      <div className="flex md:flex-row flex-col flex-col-reverse text-center items-center justify-evenly mt-16">
        <div className="flex flex-col justify-center items-center">
          <p className="my-8 md:w-3/4 md:m-10 text-indigo-200 text-lg lg:text-xl text-justified">
            I’m a final-year BTech Computer Science student with a strong foundation in Java, web development, and data structures. I recently completed a rewarding internship at Dell Technologies, where I not only gained hands-on experience in real-world software projects but also participated in internal competitions that sharpened my skills and expanded my network.

            My core interests lie in frontend development and the integration of generative AI to create meaningful, visually striking, and intelligent digital products. I also enjoy mentoring juniors and sharing knowledge, which helps me grow while giving back to the tech community. With a blend of creativity and engineering mindset, I aim to build software that solves real problems and leaves a lasting impact.
          </p>
          {/* <button className="bg-gray-700 bg-violet-800 text-white px-5 py-3 rounded-xl hover:bg-black transition duration-500 ease-in-out text-white hover:bg-indigo-100 hover:text-blue-600">
            <a href={resume} download="Resume">
              Download CV
            </a>
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default About;
