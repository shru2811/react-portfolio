import React from "react";
import profile_svg from "../images/Portfolio1.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "../App.css";

function Home() {
  const [text] = useTypewriter({
    words: ["Shruti Srivastava"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {/* <div>
        <img
          src={profile_svg}
          alt="My Picture"
          className="size-80 rounded-lg h-[16rem] w-[13rem]"
        />
      </div> */}

      <div className="flex flex-col justify-center items-center">
        <p className="text-4xl dark:text-purple-300">I'm</p>
        <h1 className="text-center text-7xl dark:text-purple-300">
          <span>{text}</span> <Cursor />
        </h1>
        <div className="flex mt-6">
          <hr className="w-12 border-t-2 border-gray-500 mt-3 mr-3" />
          <p className="text-xl text-gray-500 dark:text-white">
            Aspiring Web Developer
          </p>
          <hr className="w-12 border-t-2 border-gray-500 mt-3 ml-3" />
        </div>
        <p className="w-2/3 text-center mt-6 dark:text-gray-300">
          Passionate and dedicated 3rd year B.Tech CSE student aspiring to be a
          web developer and software engineer.
        </p>
      </div>
    </div>
  );
}

export default Home;
