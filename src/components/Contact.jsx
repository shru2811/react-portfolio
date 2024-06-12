import React from "react";
import ContactCard from "./ContactCard";

function Contact() {
  return (
    <div className="pb-[6.5rem] h-dvh">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-5xl font-bold dark:text-indigo-200">Contact me</h1>
        <p className="text-xl text-gray-500 mt-3 dark:text-gray-300">
          Get In Touch with me
        </p>
      </div>
      <div className="flex xl:flex-row flex-col gap-5 items-center xl:justify-evenly mt-16">
        <ContactCard
          head="LinkedIn Profile"
          desc="Let's Connect to stay updated and expand our professional network."
          img="https://wallpaperaccess.com/full/2068758.jpg"
          con="Connect"
          href="https://www.linkedin.com/in/shru2003/"
        />
        <ContactCard
          head="Gmail"
          desc="Feel free to mail me for anything. I'm looking forward to connecting with you!"
          img="https://www.macobserver.com/wp-content/uploads/2020/02/workfeatured-gmail.jpg?x20197"
          con="Mail Me"
          href="mailto:sshruti.2811@gmail.com"
        />
        <ContactCard
          head="GitHub"
          desc="Stay updated about my coding journey & source codes of the projects I'm working on."
          img="https://techyeverything.com/wp-content/uploads/2020/10/GitHub.jpg"
          con="Click Me"
          href="https://github.com/shru2811"
        />
      </div>
    </div>
  );
}

export default Contact;
