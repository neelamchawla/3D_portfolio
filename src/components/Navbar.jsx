import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
      sm:px-2 md:px-6 w-full md:w-11/12 flex items-center pt-4 fixed -top-[28px] md:top-5 z-20 mx-0 md:mx-20
      ${
        scrolled
          ? "bg-[#050816e6] rounded-sm md:rounded-full shadow-lg shadow-indigo-500/50"
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center h-[5rem] max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center w-[70%] pl-3 md:pl-0"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="min-w-[5em] w-[8em] h-28 object-contain -mr-[3em]"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Neelam&nbsp;
            <span className="max-md:block hidden">| Software Developer</span>
          </p>
        </Link>

        <ul className="list-none hidden md:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* small device - Toggle */}
        <div className="md:hidden flex flex-1 justify-end items-center pr-3 md:pr-0">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[100%] h-[28px] object-contain max-w-[30%]"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
