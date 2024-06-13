import React from "react";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

function Backend() {
  return (
    <div className="w-100vw sm:w-[26rem] h-[22rem] md:p-5 mt-16 rounded-xl border-2 border-solid shadow-2xl dark:border-blue-200 border-black hover:shadow transition-shadow transition-all ease-in duration-200 dark:bg-gray-800 bg-white">
      <h2 className="text-center text-2xl font-semibold m-5 dark:text-indigo-300">
        Backend & Programming Languages
      </h2>
      <div className="flex justify-between items-center">
        <ul>
          <li className="flex m-3">
            <IoCheckmarkCircleSharp className="mt-2 mr-4 dark:text-white" />
            <div>
              <h3 className="text-xl text-gray-900 dark:text-blue-200">
                Node JS
              </h3>
              <p className="text-gray-500 dark:text-pink-300">Basic</p>
            </div>
          </li>
          <li className="flex m-3">
            <IoCheckmarkCircleSharp className="mt-2 mr-4 dark:text-white" />
            <div>
              <h3 className="text-xl text-gray-900 dark:text-blue-200">
                ExpressJS
              </h3>
              <p className="text-gray-500 dark:text-pink-300">Basic</p>
            </div>
          </li>
          <li className="flex m-3">
            <IoCheckmarkCircleSharp className="mt-2 mr-4 dark:text-white" />
            <div>
              <h3 className="text-xl text-gray-900 dark:text-blue-200">
                MYSQL
              </h3>
              <p className="text-gray-500 dark:text-pink-300">Intermediate</p>
            </div>
          </li>
        </ul>
        <ul>
          <li className="flex m-3">
            <IoCheckmarkCircleSharp className="mt-2 mr-4 dark:text-white" />
            <div>
              <h3 className="text-xl text-gray-900 dark:text-blue-200">
                MongoDB
              </h3>
              <p className="text-gray-500 dark:text-pink-300">Basic</p>
            </div>
          </li>
          <li className="flex m-3">
            <IoCheckmarkCircleSharp className="mt-3 mr-4 dark:text-white" />
            <div>
              <h3 className="text-xl text-gray-900 dark:text-blue-200">
                Python
              </h3>
              <p className="text-gray-500 dark:text-pink-300">Intermediate</p>
            </div>
          </li>
          <li className="flex m-3">
            <IoCheckmarkCircleSharp className="mt-3 mr-4 dark:text-white" />
            <div>
              <h3 className="text-xl text-gray-900 dark:text-blue-200">Java</h3>
              <p className="text-gray-500 dark:text-pink-300">Intermediate</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Backend;
