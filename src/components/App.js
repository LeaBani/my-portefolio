import { useState } from "react";

import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Resume from './Resume';
import Content from './Content';
import NavBar from './Header/NavBar';
import ScrollToTop from './ScrollToTop';
import Contact from './Contact';
import Projects from './Projects';
import Error from './Error';
import Footer from './Footer';

import { FaToggleOff, FaToggleOn, FaSun, FaMoon } from "react-icons/fa";

function App() {

  const [isDark, setIsDark] = useState(false);

  function toggleIsDark(){
    setIsDark(!isDark);
    // console.log(isDark);
  };

  return (
    <div className={isDark ? "App-dark" : "App-light"} >
      <NavBar isDark={isDark} />
      <ScrollToTop/>
      <div onClick={toggleIsDark}>{isDark 
      ? <div className="App-icon-group"><FaToggleOn className="App-icon-one"/><FaSun className="App-icon"/></div> 
      : <div className="App-icon-group"><FaToggleOff className="App-icon-one"/><FaMoon className="App-icon"/></div>}</div>
      <Routes>
        <Route path="/" element={<Content isDark={isDark} />} />
        <Route path="/my-resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer isDark={isDark}/>
    </div>
  );
}

export default App;
