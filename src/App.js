import React from 'react';
import Header from'./components/Header';
import Home from'./components/home';
import Project from'./components/project';
import Resume from'./components/resume';
import Footer from'./components/footer';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
  <>
 
    <BrowserRouter>
    <Header/>
      <Routes>

      <Route path="/" element={<Home />} />
        
          <Route path="/project" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
        
        
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  </>

  )
}

export default App;
