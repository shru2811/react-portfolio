import React from "react";
import profile_svg from "../images/me.jpg";
import Card from "./Card";

function About() {
  return (
    <div className="h-screen">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-5xl font-bold ">About me</h1>
        <p className="text-xl text-gray-500 mt-3">My Introduction</p>
      </div>

      <div className="flex text-center justify-evenly mt-16">
        <div className="flex flex-col justify-center items-center">
          <div className="flex gap-5 ">
            <Card head="Academic Achievement" desc="9+ GPA" />
            <Card head="Hobby" desc="Graphic Designing" />
          </div>
          <p className="w-3/4 m-10">
            An aspiring Software Engineer & Developer , currently pursuing a
            B.Tech in Computer Science Engineering with a major in Big Data from
            UPES Dehradun. I am developing my expertise in DSA, web development
            (MERN stack), and DevOps, with a focus on computer networking, Linux
            commands, YAML, Docker, and Kubernetes.
          </p>
          <button className="bg-gray-800 text-white px-5 py-3 rounded-2xl hover:bg-black animate-bounce hover:animate-none">
            Download CV
          </button>
        </div>
        <img
          src={profile_svg}
          alt="My Picture"
          className="size-80 rounded-xl"
        />
      </div>
    </div>
  );
}

export default About;
