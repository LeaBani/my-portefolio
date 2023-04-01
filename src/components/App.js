import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Resume from './Resume';
import Content from './Main/Content';
import NavBar from './Header/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>

      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/my-resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
