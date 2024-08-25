import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProjectCard({ head, desc, con, source, href, image }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={href}
      target='blank'
      className="relative block w-full h-64 overflow-hidden rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0">
        <img
          src={image}
          alt={head}
          className="w-full h-full object-cover transition-opacity duration-300"
          style={{ opacity: isHovered ? 0.3 : 1 }}
        />
      </div>
      <div
        className={`absolute inset-0 flex flex-col justify-center items-center p-4 bg-black bg-opacity-70 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h3 className="text-xl font-bold text-white mb-2">{head}</h3>
        <p className="text-sm text-white mb-2">{desc}</p>
        <div className='flex justify-evenly '>
        <span className="mr-2 text-xs text-white bg-black px-4 py-2 rounded-sm dark:bg-gray-400">{con}</span>
        <Link to={source} target='blank' className="text-xs text-white bg-black px-4 py-2 rounded-sm dark:bg-gray-400">Source Code</Link>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;