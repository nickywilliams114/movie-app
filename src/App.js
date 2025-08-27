import React, { useRef, useEffect } from "react";
import "./StarsBackground.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";


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
        <div className="App">
          <Navbar />          
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/movies/:title" component={Movies} />          
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
