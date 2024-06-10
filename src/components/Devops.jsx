import React from 'react'
import { IoCheckmarkCircleSharp } from "react-icons/io5";

function Devops() {
    return (
        <div className="w-[26rem] h-[22rem] p-5 mt-16 rounded-xl border-2 border-solid border-black shadow-2xl hover:shadow transition-shadow transition-all ease-in duration-300">
          <h2 className="text-center text-2xl font-semibold m-5">DevOps Technologies</h2>
          <div className="flex justify-between items-center">
          <ul>
            <li className="flex m-3">
              <IoCheckmarkCircleSharp className="mt-2 mr-4" />
              <div>
                <h3 className="text-xl text-gray-900">Git & GitHub</h3>
                <p className="text-gray-500">Intermediate</p>   
              </div>
            </li>
            <li className="flex m-3">
              <IoCheckmarkCircleSharp className="mt-2 mr-4" />
              <div>
                <h3 className="text-xl text-gray-900">YAML</h3>
                <p className="text-gray-500">Basic</p>
              </div>
            </li>
            <li className="flex m-3">
              <IoCheckmarkCircleSharp className="mt-2 mr-4" />
              <div>
                <h3 className="text-xl text-gray-900">Linux Commands</h3>
                <p className="text-gray-500">Intermediate</p>
              </div>
            </li>
          </ul>
          <ul>
          <li className="flex m-3">
              <IoCheckmarkCircleSharp className="mt-2 mr-4" />
              <div>
                <h3 className="text-xl text-gray-900">Networks</h3>
                <p className="text-gray-500">Basic</p>
              </div>
            </li>
            <li className="flex m-3">
              <IoCheckmarkCircleSharp className="mt-3 mr-4" />
              <div>
                <h3 className="text-xl text-gray-900">Docker</h3>
                <p className="text-gray-500">Basic</p>
              </div>
            </li>
            <li className="flex m-3">
              <IoCheckmarkCircleSharp className="mt-3 mr-4" />
              <div>
                <h3 className="text-xl text-gray-900">Kubernetes</h3>
                <p className="text-gray-500">Basic</p>
              </div>
            </li>
          </ul>
          </div>
        </div>
      );
}

export default Devops