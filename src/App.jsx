import { useState } from 'react'
import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/about';
import Contact from './pages/contact';
import Projects from './pages/projects/projects';
import Resume from './pages/resume/resume';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
