import React from "react";
import profile_svg from "../images/me.jpg";
import Card from "./Card";

function About() {
  return (
    <div className="h-screen mt-16">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-5xl font-bold ">About me</h1>
        <p className="text-xl text-gray-500 mt-3">My Introduction</p>
      </div>

      <div className="flex text-center items-center justify-evenly mt-16">
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
          <button className="bg-gray-700 text-white px-5 py-3 rounded-xl hover:bg-black  transition duration-500 ease-in-out">
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
