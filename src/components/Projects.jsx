import React from 'react';
import ProjectCard from './ProjectCard';
import brain from '../../public/brain.png';
import swift from '../../public/swift.png';
import currencyConverter from '../../public/currencyConverter.png';
import todoList from '../../public/todoList.png';
import noteTaking from '../../public/noteTaking.png';
import oldPortfolio from '../../public/oldProtfolio.png';

function Projects() {
  const projects = [
    {
      head: "FlashCard WebApp: BrainFlash",
      desc: "nteractive WebApp for effective learning, built with ReactJS, TailwindCSS & Appwrite",
      con: "Coming soon",
      href: "https://github.com/shru2811/flash-card-app",
      image: brain
    },
    {
      head: "RealTime ChatApp: Swift",
      desc: "Real-time Chat App with Daisy UI, built on MERN stack.",
      con: "Live Demo",
      href: "https://real-time-chat-web-app.onrender.com/login",
      image: swift
    },
    {
      head: "Currency Converter",
      desc: "Basic currency converter app to learn the ReactJS Hooks",
      con: "Live Demo",
      href: "https://currency-converter-react-shru2811s-projects.vercel.app/",
      image: currencyConverter
    },
    {
      head: "To-Do List Website",
      desc: "This Website is an implementation of the ReactJS, TailwindCSS & LocalStorage.",
      con: "Live Demo",
      href: "https://react-to-do-list-ochre-one.vercel.app/",
      image: todoList
    },
    {
      head: "Note Taking Website",
      desc: "Website implemented using HTML, CSS & JS with a local Storage for saving notes.",
      con: "Live Demo",
      href: "https://shru2811.github.io/Notes-App/",
      image: noteTaking
    },
    {
      head: "Old Portfolio Website",
      desc: "My First Portfolio implemented using HTML CSS JS & Web3Forms",
      con: "Live Demo",
      href: "https://shru2811.github.io/Personal-Portfolio/",
      image: oldPortfolio
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl dark:text-white font-bold text-center mb-4">Projects</h1>
      <p className="text-xl dark:text-white text-center mb-8">From Concept to Creation: My Work Showcase</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;