import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Aboutme from './pages/aboutme';
import Academics from './pages/academic';
import Myprojects from './pages/myprojects';
import Navbar from './components/Navbar'
import './App.css'

export default function App()
{
  return (
    <div>
      <Navbar/>
    <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/Aboutme" element={<Aboutme/>} />
        <Route path="/Academics" element={<Academics/>} />
        <Route path="/Myprojects" element={<Myprojects/>} />
  
    </Routes>
    </div>
  );
};
