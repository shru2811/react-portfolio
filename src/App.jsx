import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import { Outlet } from "react-router-dom"; //works as a frame where dynamically page renders
import { ThemeProvider } from "./context/theme";
import useTheme from "./context/theme";
import Footer from "./components/Footer";

function App() {
  const [themeMode, setThemeMode] = useState("dark")

  const lightTheme = () =>{
    setThemeMode("light")
  }
  const darkTheme = () =>{
    setThemeMode("dark")
  }

  //Actual change in theme using hook: useeffect

  useEffect(()=>{
    document.querySelector('html').classList.remove("dark","light");
    document.querySelector('html').classList.add(themeMode);

  },[themeMode])
  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <div className="bg-repeat bg-fixed h-full bg-[url('/src/images/bg_light2.jpg')] dark:bg-[url('/src/images/bg_dark3.jpg')] ">
        <div className="w-5/6 m-auto">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
