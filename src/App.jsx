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
} from "./components";

import { useAnimeContext } from "./context/animeContext.jsx";

import { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";

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

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary" ref={appRef}>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>

      {showBackToTop && (
        <button
          className="fixed bottom-4 right-4 p-2 shadow cursor-pointer backToTop"
          onClick={handleBackToTop}
        >
          <BsArrowUp />
        </button>
      )}
    </BrowserRouter>
  );
};

export default App;
