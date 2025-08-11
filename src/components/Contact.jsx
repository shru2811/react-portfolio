import React from "react";
import ContactCard from "./ContactCard";
import contactImg from "../images/contact.jpg"; // Add your own image here

function Contact() {
  return (
    <div className="pb-[4.5rem] flex flex-col mx-auto animate-slide-in-top">
      {/* Top Section */}
      <div className="text-white w-full">
        <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="flex-1">
            <h1 className="text-5xl font-bold 2xl:text-7xl">Get in touch</h1>
            <p className="text-lg mt-4 text-gray-300 max-w-xl">
              Got a question? The right TONE is more than talk. Connect with me 
              through email, LinkedIn, or any platform you prefer. Let’s create something amazing together!
            </p>
          </div>
          {/* Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={contactImg}
              alt="Contact"
              className="rounded-lg shadow-lg max-h-72 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Contact Cards Section */}
      <div className="container mx-auto mt-10 px-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
