import React from 'react'
import ProjectCard from './ProjectCard';


function Projects() {
    return (
        <div className="pb-[6.5rem] xl:h-screen flex flex-col justify-evenly animate-slide-in-top">
          <div className="flex justify-center items-center flex-col m-0">
            <h1 className="text-5xl font-bold dark:text-indigo-200 2xl:text-7xl">Projects</h1>
            <p className="text-xl text-gray-500 mt-3 dark:text-gray-300 2xl:text-3xl">
            From Concept to Creation: My Work Showcase
            </p>
          </div>
          <div className="flex xl:flex-row flex-col gap-5 items-center xl:justify-evenly mt-16">
            <ProjectCard
              head="FlashCard WebApp: BrainFlash"
              desc="Interactive WebApp for effective learning, built with ReactJS, TailwindCSS & Appwrite"
             
              con="Coming soon"
              href="https://github.com/shru2811/flash-card-app"
            />
            <ProjectCard
              head="RealTime ChatApp: Swift"
              desc="Real-time Chat App with Daisy UI, built on MERN stack."
              
              con="Live Demo"
              href="https://real-time-chat-web-app.onrender.com/login"
            />
            <ProjectCard
              head="Currency Converter"
              desc="Basic currency converter app to learn the ReactJS Hooks"
              
              con="Live Demo"
              href="https://currency-converter-react-shru2811s-projects.vercel.app/"
            />
          </div>
          <div className="flex xl:flex-row flex-col gap-5 items-center xl:justify-evenly mt-16">
            <ProjectCard
              head="To-Do List Website"
              desc="This Website is an implementation of the ReactJS, TailwindCSS & LocalStorage."
             
              con="Live Demo"
              href="https://react-to-do-list-ochre-one.vercel.app/"
            />
            <ProjectCard
              head="Note Taking Website"
              desc="Website implemented using HTML, CSS & JS with a local Storage for saving notes."
              
              con="Live Demo"
              href="https://shru2811.github.io/Notes-App/"
            />
            <ProjectCard
              head="Old Portfolio Website"
              desc="My First Portfolio implemented using HTML CSS JS & Web3Forms"
              
              con="Live Demo"
              href="https://shru2811.github.io/Personal-Portfolio/"
            />
          </div>
        </div>
      );
}

export default Projects