import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills"
import { Outlet } from "react-router-dom";    //works as a frame where dynamically page renders

function App() {
  return (
   <>
     <div className="w-4/5 m-auto h-screen">
      <Navbar />
      <Outlet />
    </div>
   </>
  );
}

export default App;
