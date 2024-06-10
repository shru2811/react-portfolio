import React from "react";
import profile_svg from "../images/Portfolio.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "../App.css"

function Home() {
  const [text] = useTypewriter({
    words: ["Shruti Srivastava"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (
    <div className="flex justify-between items-center h-screen">
      <div className="pb-28">
        <img
          src={profile_svg}
          alt="My Picture"
          className="size-80 rounded-xl h-[40rem] w-[30rem]"
        />
      </div>
      <div className="flex justify-around items-center flex-col gap-10">
        <ion-icon name="logo-linkedin"></ion-icon>
        <ion-icon name="logo-github"></ion-icon>
        <ion-icon name="code-slash-outline"></ion-icon>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-4xl">I'm</p>
        <h1 className="text-center text-7xl">
          <span>{text}</span> <Cursor />
        </h1>
        <div className="flex mt-6">
          <hr className="w-12 border-t-2 border-gray-500 mt-3 mr-3" />
          <p className="text-xl text-gray-500">Aspiring Web Developer</p>
          <hr className="w-12 border-t-2 border-gray-500 mt-3 ml-3" />
        </div>
        <p className="w-2/3 text-center mt-6">
          Passionate and dedicated 3rd year B.Tech CSE student aspiring to be a
          web developer and software engineer.
        </p>
      </div>
    </div>
  );
}

export default Home;
