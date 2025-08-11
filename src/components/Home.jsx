import profile_svg from "../images/me1.jpg";
import profile_svg0 from "../images/me.jpg";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Home() {
  const [text] = useTypewriter({
    words: ["Shruti <br> Srivastava"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div className="lg:m-24 flex items-center justify-center ">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl w-full gap-12 lg:gap-20">

        {/* Left Side - Text Content */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <div className="space-y-2">
            <p className="text-gray-400 text-lg md:text-xl">Hello,</p>
            <p className="text-2xl md:text-3xl text-white">I'm</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight h-32 md:h-40 lg:h-48">
              <span
                className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent"
                dangerouslySetInnerHTML={{ __html: text }}
              />
              <Cursor />
            </h1>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-purple-300">
              Software Engineer
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-xl">
              Ex - Software Engineering Intern @<span className="text-blue-400 font-semibold">Dell Technologies</span> |
              Final Year B.Tech CSE Student
            </p>
            <p className="text-gray-500 text-sm md:text-base max-w-xl leading-relaxed">
              Full-Stack Developer and Big Data enthusiast passionate about building scalable, user-centric applications that blend functionality with clean design
            </p>
          </div>

          {/* Action Buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Resume
            </button>
            <button className="px-8 py-3 border border-purple-400 text-purple-400 font-semibold rounded-full hover:bg-purple-400 hover:text-white transition-all duration-300">
              My Portfolio
            </button>
          </div> */}
        </div>

        {/* Right Side - Profile Image with Circular Background */}
        <div className="flex-1 flex justify-center lg:justify-end animate-zoom-in">
          <div className="relative">
            {/* Gradient Circle Background */}
            <div className="absolute inset-0 w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] rounded-full bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-red-500/20 blur-3xl"></div>

            {/* Main Circle Background */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 flex items-center justify-center">

              {/* Inner Glow Circle */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-xl"></div>

              {/* Profile Image Container */}
              <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 lg:w-[340px] lg:h-[340px] rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-400 to-pink-400 shadow-2xl">
                {/* Placeholder for your image - replace with your actual image */}

                <img
                  src={profile_svg}
                  alt="Shruti Srivastava"
                  className="w-full h-full object-cover"
                />

              </div>

              {/* Floating Elements */}
              <div className="absolute top-8 right-8 w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-12 left-8 w-3 h-3 bg-pink-400 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-1/4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-500"></div>
            </div>

            {/* Rotating Ring */}
            <div className="absolute inset-0 w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] rounded-full border-2 border-dashed border-purple-400/30 animate-spin-slow"></div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute bottom-32 right-32 w-3 h-3 bg-pink-400 rounded-full animate-pulse delay-700 opacity-60"></div>
      <div className="absolute top-1/3 right-20 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-300 opacity-60"></div>
    </div>
  );
}

export default Home;