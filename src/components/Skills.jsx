import React from "react";
import Skill from "./Skill";
import Devops from "./Devops";
import Backend from "./Backend";

function Skills() {
  return (
    <div className="pb-[9.1rem] h-dvh">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-5xl font-bold dark:text-indigo-200">Skills</h1>
        <p className="text-xl text-gray-500 mt-3 dark:text-gray-300">
          My Technical Level
        </p>
      </div>
      <div className="flex flex-col xl:flex-row items-center justify-evenly gap-8">
        <Skill />
        <Devops />
        <Backend />
      </div>
    </div>
  );
}

export default Skills;
