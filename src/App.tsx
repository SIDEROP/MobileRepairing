import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import gsap from "gsap";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(".logo", {
      duration: 1.5,
      x: 0,
      opacity: 1,
      ease: "elastic.out(1, 0.3)",
      repeat: -1,
      repeatDelay: 3,
      yoyo: true,
    });

    const handleMouseMove = (e: MouseEvent) => {
      if (dotRef.current) {
        gsap.to(dotRef.current, {
          duration: 0.3,
          x: e.clientX - 10,
          y: e.clientY - 10,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Router>
      <div className="min-[100vh] overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
        <div
          ref={dotRef}
          className=" overflow-hidden fixed w-5 h-5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mix-blend-multiply pointer-events-none z-51"
          style={{
            filter: "blur(2px)",
            transform: "translate(-50%, -50%)",
          }}
        />
        <Header />

        <main
         id="main" className="max-w-6xl mx-auto px-4 py-8 overflow-auto h-[100vh]"
          style={{ scrollBehavior: "smooth" }}
        >
          <Home />
        <Footer />
        </main>
      </div>
    </Router>
  );
};

export default App;
