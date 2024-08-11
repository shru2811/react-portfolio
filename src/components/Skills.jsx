import React from "react";
import Skill from "./Skill";
import Devops from "./Devops";
import Backend from "./Backend";

function Skills() {
  return (
    <div className="pb-[9.1rem] xl:h-screen flex flex-col items-center animate-slide-in-top">
      <div className="flex m-0 justify-center items-center flex-col">
        <h1 className="text-5xl font-bold dark:text-indigo-200 2xl:text-7xl">Skill Set & Expertise</h1>
        <p className="text-xl text-gray-500 mt-3 dark:text-gray-300 2xl:text-3xl">
          My Skill Proficiency
        </p>
      </div>
      <div className=" flex flex-col xl:flex-row items-center justify-center gap-8 m-0">
        <Skill />
        <Devops />
        <Backend />
      </div>
    </div>
  );
}

export default Skills;

// flex flex-col xl:flex-row items-center justify-evenly