import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div className="w-4/5 m-auto h-screen ">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
