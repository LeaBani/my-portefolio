import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Resume from './Resume';
import Content from './Main/Content';
import NavBar from './Header/NavBar';
import ScrollToTop from './ScrollToTop';
import Contact from './Contact';
import Projects from './Projects';
import Error from './Error';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/my-resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
