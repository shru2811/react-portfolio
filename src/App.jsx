import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950">

      {/* Cosmic overlay effects */}
      <div className="absolute inset-0 
          bg-[radial-gradient(circle_at_25%_25%,_rgba(120,119,198,0.3),_transparent_50%)] 
          bg-[radial-gradient(circle_at_75%_75%,_rgba(168,85,247,0.2),_transparent_50%)]
        "></div>

      {/* Floating cosmic elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Cosmic stars - white color with even distribution and movement */}
        {/* Top row stars */}
        <div className="absolute top-16 left-[10%] w-1 h-1 bg-white rounded-full opacity-90 animate-pulse animate-float"></div>
        <div className="absolute top-20 left-[25%] w-2 h-2 bg-white rounded-full opacity-75 animate-pulse animate-float-delayed"></div>
        <div className="absolute top-24 left-[40%] w-1 h-1 bg-white rounded-full opacity-85 animate-pulse animate-float"></div>
        <div className="absolute top-16 left-[55%] w-1 h-1 bg-white rounded-full opacity-95 animate-pulse animate-float-delayed"></div>
        <div className="absolute top-32 left-[70%] w-2 h-2 bg-white rounded-full opacity-70 animate-pulse animate-float"></div>
        <div className="absolute top-28 left-[85%] w-1 h-1 bg-white rounded-full opacity-80 animate-pulse animate-float-delayed"></div>

        {/* Middle-top row stars */}
        <div className="absolute top-48 left-[5%] w-2 h-2 bg-white rounded-full opacity-65 animate-pulse animate-float-delayed"></div>
        <div className="absolute top-56 left-[18%] w-1 h-1 bg-white rounded-full opacity-88 animate-pulse animate-float"></div>
        <div className="absolute top-40 left-[32%] w-3 h-3 bg-white rounded-full opacity-60 animate-pulse animate-float-delayed"></div>
        <div className="absolute top-64 left-[48%] w-1 h-1 bg-white rounded-full opacity-92 animate-pulse animate-float"></div>
        <div className="absolute top-52 left-[62%] w-2 h-2 bg-white rounded-full opacity-72 animate-pulse animate-float-delayed"></div>
        <div className="absolute top-72 left-[78%] w-1 h-1 bg-white rounded-full opacity-85 animate-pulse animate-float"></div>
        <div className="absolute top-44 left-[92%] w-1 h-1 bg-white rounded-full opacity-78 animate-pulse animate-float-delayed"></div>

        {/* Middle-bottom row stars */}
        <div className="absolute bottom-64 left-[8%] w-1 h-1 bg-white rounded-full opacity-82 animate-pulse animate-float"></div>
        <div className="absolute bottom-72 left-[22%] w-2 h-2 bg-white rounded-full opacity-68 animate-pulse animate-float-delayed"></div>
        <div className="absolute bottom-48 left-[35%] w-1 h-1 bg-white rounded-full opacity-90 animate-pulse animate-float"></div>
        <div className="absolute bottom-80 left-[50%] w-2 h-2 bg-white rounded-full opacity-75 animate-pulse animate-float-delayed"></div>
        <div className="absolute bottom-56 left-[65%] w-3 h-3 bg-white rounded-full opacity-55 animate-pulse animate-float"></div>
        <div className="absolute bottom-88 left-[80%] w-1 h-1 bg-white rounded-full opacity-87 animate-pulse animate-float-delayed"></div>

        {/* Bottom row stars */}
        <div className="absolute bottom-16 left-[12%] w-2 h-2 bg-white rounded-full opacity-73 animate-pulse animate-float"></div>
        <div className="absolute bottom-24 left-[28%] w-1 h-1 bg-white rounded-full opacity-91 animate-pulse animate-float-delayed"></div>
        <div className="absolute bottom-32 left-[42%] w-1 h-1 bg-white rounded-full opacity-76 animate-pulse animate-float"></div>
        <div className="absolute bottom-20 left-[58%] w-2 h-2 bg-white rounded-full opacity-69 animate-pulse animate-float-delayed"></div>
        <div className="absolute bottom-36 left-[72%] w-1 h-1 bg-white rounded-full opacity-84 animate-pulse animate-float"></div>
        <div className="absolute bottom-28 left-[88%] w-3 h-3 bg-white rounded-full opacity-58 animate-pulse animate-float-delayed"></div>

        {/* Floating cosmic dust */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 
            bg-gradient-to-r from-white/15 to-white/10 
            rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 
            bg-gradient-to-r from-white/12 to-white/8 
            rounded-full blur-2xl animate-float-delayed"></div>
        <div className="absolute top-1/3 right-1/6 w-24 h-24 
            bg-gradient-to-r from-white/18 to-white/12 
            rounded-full blur-lg animate-float"></div>
        <div className="absolute bottom-1/3 left-1/6 w-40 h-40 
            bg-gradient-to-r from-white/10 to-white/6 
            rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute top-2/3 left-2/3 w-20 h-20 
            bg-gradient-to-r from-white/20 to-white/15 
            rounded-full blur-md animate-float"></div>
        <div className="absolute bottom-1/6 right-1/3 w-36 h-36 
            bg-gradient-to-r from-white/14 to-white/9 
            rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute top-1/6 left-1/2 w-28 h-28 
            bg-gradient-to-r from-white/16 to-white/11 
            rounded-full blur-lg animate-float"></div>
        <div className="absolute bottom-2/3 right-1/5 w-44 h-44 
            bg-gradient-to-r from-white/8 to-white/5 
            rounded-full blur-2xl animate-float-delayed"></div>
      </div>

      <div className="relative z-10">
        <div className="w-5/6 m-auto">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;