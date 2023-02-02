import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes, 
  Route
} from 'react-router-dom';
import Navbar from './components/NavSelection';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Project from './pages/Projects';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='projects' element={<Project />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
