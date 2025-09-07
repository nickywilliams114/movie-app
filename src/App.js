import React, { useRef, useEffect } from "react";
import "./StarsBackground.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";



function Layout({ children }) {
  const location = useLocation();

  // Show wrapper only on home and search pages
  const showWrapper =
    location.pathname === "/" || location.pathname.startsWith("/search");

  return (
    <div>
      {showWrapper && (
        <figure className="img__wrapper">
          <img src="./assets/MovieFind.svg" alt='MovieFind logo' />
        </figure>
      )}
      {children}
    </div>
  );
}


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
        <div id="App">
          <Layout>
            <Navbar />          
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/search" element={<Movies />}></Route>      
                <Route path=":title" element={<Movies />}></Route>    
              </Routes>
          </Layout>
        </div>
      </Router>
    </div>
  );
}

export default App;
