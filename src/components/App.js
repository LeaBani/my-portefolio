import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Resume from './Resume';
import Content from './Main/Content';

function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/my-resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
