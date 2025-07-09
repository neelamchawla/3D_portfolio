import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  FloatingButton,
} from "./components";

import { useAnimeContext } from "./context/animeContext.jsx";

import { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const { appRef } = useAnimeContext();

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [showAlt, setShowAlt] = useState(false);
  const [prevY, setPrevY] = useState(0);

  const handleMouseMove = (e) => {
    const currentY = e.clientY;
    if (currentY > prevY) {
      // Mouse moved down
      setShowAlt(true);
    } else if (currentY < prevY) {
      // Mouse moved up
      setShowAlt(false);
    }
    setPrevY(currentY);
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <BrowserRouter>
      <div id="main-wrapper" className="relative z-0 bg-primary" ref={appRef}>
        <div
          id="home"
          // className="bg-hero-pattern hover:bg-hero-pattern-alt bg-cover bg-no-repeat bg-center"
          className="relative w-full overflow-hidden group"
          onMouseMove={handleMouseMove}
        >
          {/* Default background image */}
          {/* <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center bg-no-repeat transition-opacity duration-700 group-hover:opacity-0"></div> */}

          {/* Hover background image */}
          {/* <div className="absolute inset-0 bg-hero-pattern-alt bg-cover bg-center bg-no-repeat opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div> */}

          {/* Background 1 */}
          <div
            className={`absolute inset-0 bg-hero-pattern bg-cover bg-center bg-no-repeat transition-opacity duration-700 ${
              showAlt ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* Background 2 */}
          <div
            className={`absolute inset-0 bg-hero-pattern-alt bg-cover bg-center bg-no-repeat transition-opacity duration-700 ${
              showAlt ? "opacity-100" : "opacity-0"
            }`}
          />

          <Navbar />
          <Hero />
        </div>
        <FloatingButton />
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div id="contact" className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>

      <footer className="w-full flex justify-center items-center p-4 bg-[#020024] text-white">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Neelam Ramrakhiani. All rights
          reserved.
        </p>
      </footer>
      {showBackToTop && (
        <button
          className="fixed bottom-36 right-8 p-2 shadow cursor-pointer backToTop"
          onClick={handleBackToTop}
        >
          <BsArrowUp />
        </button>
      )}
    </BrowserRouter>
  );
};

export default App;
