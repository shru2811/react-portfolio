import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import { Outlet } from "react-router-dom"; //works as a frame where dynamically page renders

function App() {
  return (
    <>
      <div className="bg-repeat bg-[url('/src/images/lightPattern.png')] dark:bg-[url('/src/images/pattern2.png')]">
        <div className="w-5/6 m-auto">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
