import React from "react";
import ContactCard from "./ContactCard";

function Contact() {
  return (
    <div className="pb-[6.5rem] xl:h-screen flex flex-col justify-evenly animate-slide-in-top">
      <div className="flex justify-center items-center flex-col m-0">
        <h1 className="text-5xl font-bold dark:text-indigo-200 2xl:text-7xl">Contact me</h1>
        <p className="text-xl text-gray-500 mt-3 dark:text-gray-300 2xl:text-3xl">
          Get In Touch with me
        </p>
      </div>
      <div className="flex xl:flex-row flex-col gap-5 items-center xl:justify-evenly mt-16">
        <ContactCard
          head="LinkedIn Profile"
          desc="Let's Connect to stay updated and expand our professional network."
          img="https://img.freepik.com/premium-photo/3d-linkedin-logo-background-design-social-media_697471-3.jpg"
          con="Connect"
          href="https://www.linkedin.com/in/shru2003/"
        />
        <ContactCard
          head="Gmail"
          desc="Feel free to mail me for anything. I'm looking forward to connecting with you!"
          img="https://besthqwallpapers.com/Uploads/9-11-2021/181262/thumb2-gmail-3d-logo-4k-gray-brickwall-creative-postal-services.jpg"
          con="Mail Me"
          href="mailto:sshruti.2811@gmail.com"
        />
        <ContactCard
          head="GitHub"
          desc="Stay updated about my coding journey & source codes of the projects I'm working on."
          img="https://umaar.github.io/experiments/github-3d-logo/render-2.jpg"
          con="Click Me"
          href="https://github.com/shru2811"
        />
      </div>
    </div>
  );
}

export default Contact;
