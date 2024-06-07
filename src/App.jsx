import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div className="w-4/5 m-auto h-screen">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
