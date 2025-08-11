import React, { useRef, useEffect } from "react";
import "./StarsBackground.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SearchMovie from "./pages/SearchMovie";
import Contact from "./pages/Contact";


function App() {
  const starsRef = useRef(null);

  useEffect(() => {
    const createStar = () => {
      const star = document.createElement("div");
      star.className = "star";
      star.style.width = `${Math.random() * 3 + 1}px`; // Random size
      star.style.height = star.style.width;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDuration = `${Math.random() * 3 + 2}s`; 
      star.style.animationDelay = `${Math.random() * 2}s`; 
      starsRef.current.appendChild(star);
    };
    
    for (let i = 0; i < 100; i++) {
      createStar();
    }
  }, []);
  
  return (
     <div ref={starsRef} className="stars-container">
      <Router>
        <Navbar>
          <Link to="/">Home</Link>
          <Link to="/search">Search Movies</Link>
          <a href="/contact">Contact</a>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchMovie />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
