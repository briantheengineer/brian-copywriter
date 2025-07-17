import './App.css';
import './i18n'; 
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import Projects from './components/mainpage/Projects';
import ProjectDetail from './components/ProjectDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectDetail />} />
    </Routes>
  );
}

export default App;
