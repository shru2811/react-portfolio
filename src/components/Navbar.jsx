import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between align-center mt-5 sticky">
      <div className="text-4xl font-bold">Portfolio</div>
      <div className="text-xl font-semibold">
        <ul className="flex justify-between gap-10 mt-2 text-gray-500 cursor-pointer">
          <li className="hover:text-black">Home</li>
          <li className="hover:text-black">About</li>
          <li className="hover:text-black">Skills</li>
          <li className="hover:text-black">Contact</li>
          <li>
            <ion-icon name="moon-outline" id="moon"></ion-icon>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
