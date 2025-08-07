import React from "react";
import ContactCard from "./ContactCard";

function Contact() {
  return (
    <div className="pb-[6.5rem] xl:h-screen flex flex-col justify-evenly animate-slide-in-top">
      <div className="flex justify-center items-center flex-col m-0 container mx-auto px-4 py-8 animate-slide-in-top">
        <h1 className="text-5xl font-bold text-indigo-200 2xl:text-7xl">Contact me</h1>
        <p className="text-xl mt-3 text-gray-300 2xl:text-3xl">
          Get In Touch with me
        </p>
      </div>
      <div className="flex xl:flex-row flex-col gap-5 items-center xl:justify-evenly mt-16">
        <ContactCard
          head="LinkedIn Profile"
          desc="Let's Connect to stay updated and expand our professional network."
          con="Connect"
          href="https://www.linkedin.com/in/shru2003/"
        />
        <ContactCard
          head="Gmail"
          desc="Feel free to mail me for anything. I'm looking forward to connecting with you!"
          con="Mail Me"
          href="mailto:sshruti.2811@gmail.com"
        />
        <ContactCard
          head="GitHub"
          desc="Stay updated about my coding journey & source codes of the projects I'm working on."
          con="Click Me"
          href="https://github.com/shru2811"
        />
        <ContactCard
          head="Peerlist"
          desc="Connect with me on Peerlist to explore my work, projects, and professional journey."
          con="Click Me"
          href="https://peerlist.io/sshruti"
        />
      </div>
    </div>
  );
}

export default Contact;
