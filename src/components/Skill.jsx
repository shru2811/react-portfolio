import React from "react";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
function Skill() {
  return (
    <div className="w-[22rem] md:w-[26rem] h-[22rem] md:p-5 mt-16 rounded-xl border-2 border-solid shadow-2xl dark:border-blue-200 border-black hover:shadow transition-shadow transition-all ease-in duration-200 dark:bg-gray-800 bg-white">
      <h2 className="text-center text-2xl font-semibold m-5 dark:text-indigo-300">FrontEnd</h2>
      <div className="flex justify-between">
      <ul>
        <li className="flex m-3">
          <IoCheckmarkCircleSharp className="mt-2 mr-4" />
          <div>
            <h3 className="text-2xl text-gray-900 dark:text-blue-200">HTML</h3>
            <p className="text-gray-500 dark:text-pink-300">Intermediate</p>   
          </div>
        </li>
        <li className="flex m-3">
          <IoCheckmarkCircleSharp className="mt-2 mr-4" />
          <div>
            <h3 className="text-2xl text-gray-900 dark:text-blue-200">CSS</h3>
            <p className="text-gray-500 dark:text-pink-300">Intermediate</p>
          </div>
        </li>
        <li className="flex m-3">
          <IoCheckmarkCircleSharp className="mt-2 mr-4" />
          <div>
            <h3 className="text-2xl text-gray-900 dark:text-blue-200">Javascript</h3>
            <p className="text-gray-500 dark:text-pink-300">Intermediate</p>
          </div>
        </li>
      </ul>
      <ul>
      <li className="flex m-3">
          <IoCheckmarkCircleSharp className="mt-2 mr-4" />
          <div>
            <h3 className="text-2xl text-gray-900 dark:text-blue-200">React</h3>
            <p className="text-gray-500 dark:text-pink-300">Intermediate</p>
          </div>
        </li>
        <li className="flex m-3">
          <IoCheckmarkCircleSharp className="mt-3 mr-4" />
          <div>
            <h3 className="text-2xl text-gray-900 dark:text-blue-200">Bootstrap</h3>
            <p className="text-gray-500 dark:text-pink-300">Basic</p>
          </div>
        </li>
        <li className="flex m-3">
          <IoCheckmarkCircleSharp className="mt-3 mr-4" />
          <div>
            <h3 className="text-2xl text-gray-900 dark:text-blue-200">Tailwind</h3>
            <p className="text-gray-500 dark:text-pink-300">Intermediate</p>
          </div>
        </li>
      </ul>
      </div>
    </div>
  );
}

export default Skill;
