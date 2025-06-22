import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


import Navbar from './Navbar'
import Home from './mainpage/Home'
import About from './mainpage/About'
import Projects from './mainpage/Projects'
import Contact from './mainpage/Contact'

export default function MainPage () {
    useEffect(() => {
    AOS.init({
      duration: 800, 
      once: true,    
    });
  }, []);


    return (
        <main className=""> 
            <Navbar />
            <Home />
            <About />
            <Projects />
            <Contact />
        </main>
    )
}