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
      <div className="bg-[url('/src/images/lightPattern.png')] dark:bg-[url('/src/images/pattern2.png')]">
        <div className="w-4/5 m-auto flex flex-col justify-center h-[100vh]">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
