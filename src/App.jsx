import Topbar from "./components/topbar/Topbar";
import Home from "./components/home/Home"
import About from "./components/about/About"
import Skills from "./components/skills/Skills"
import Education from "./components/education/Education"
import Experience from "./components/experience/Experience"
import Practice from "./components/practice/Practice"
import Contact from "./components/contact/Contact"
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Home/>
       <About/>
       <Skills/>
       <Education/>
       <Experience/>
       <Practice/>
       <Contact/>
     </div>
    </div>
  );
}

export default App;
