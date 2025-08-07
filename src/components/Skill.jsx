import React from "react";
import c_prog from '../../public/c-programming.png';
import kafka from '../../public/apache-kafka.png';
import ex from '../../public/express-js.png';
import flask from '../../public/flask.png';
import github from '../../public/github.png';
import vscode from '../../public/visual-studio-code.png';

function Skill() {
  const allSkills = [
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JAVASCRIPT", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "REACT JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "NODE JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "TAILWIND CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "MONGO DB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "GIT", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GITHUB", logo: github },
    { name: "DOCKER", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "KUBERNETES", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    { name: "LINUX", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    { name: "EXPRESS JS", logo: ex },
    { name: "PYTHON", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "JAVA", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "MYSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "NEXT JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "C", logo: c_prog },
    { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "SCALA", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg" },
    { name: "BOOTSTRAP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "FLASK", logo: flask},
    { name: "HADOOP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg" },
    { name: "APACHE SPARK", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg" },
    { name: "APACHE KAFKA", logo: kafka },
    { name: "HDFS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg" },
    { name: "VS Code", logo: vscode },
  ];

  return (
    <div className="w-full px-4">
      {/* Mobile: 2 columns, Small tablet: 3 columns, Tablet: 4 columns, Desktop: 5 columns, Large Desktop: 6 columns */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
        {allSkills.map((skill, index) => (
          <div 
            key={index} 
            className="group cursor-pointer p-4 md:p-6 rounded-xl border border-slate-600 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-slate-800 to-slate-900 hover:scale-105 hover:border-blue-300 dark:hover:border-blue-500"
          >
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-3 flex items-center justify-center">
                <img 
                  src={skill.logo} 
                  alt={skill.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain filter transition-all duration-300 group-hover:brightness-110 group-hover:drop-shadow-lg"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <span className="text-xs sm:text-sm md:text-sm text-center text-gray-200 font-medium group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                {skill.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;