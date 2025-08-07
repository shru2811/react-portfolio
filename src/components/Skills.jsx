import React from "react";
import Skill from "./Skill";

function Skills() {
  return (
    <div className="min-h-screen flex flex-col items-center animate-slide-in-top px-4 py-8">
      <div className="flex m-0 justify-center items-center flex-col container mx-auto px-4 py-8 animate-slide-in-top">
        <h1 className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-indigo-200 text-center">
          Skill Set & Expertise
        </h1>
        <p className="text-lg md:text-xl 2xl:text-3xl text-gray-300 text-center">
          My Skill Proficiency
        </p>
      </div>
      
      <div className="w-full max-w-7xl mx-auto mt-8">
        <Skill />
      </div>
    </div>
  );
}

export default Skills;