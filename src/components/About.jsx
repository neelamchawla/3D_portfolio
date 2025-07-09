/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useEffect, useRef } from "react";

import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { saveAs } from "file-saver";
import Resume from "../assets/general/Neelam R - Resume.pdf";
import { useAnimeContext } from "../context/animeContext.jsx";
import { gsap, ScrollTrigger } from "gsap/all";

import { MyPic } from "../assets/index.js";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-[250px]  p-[1px] rounded-[20px] shadow-card"
    >
      <div className="animated-border-box-glow"></div>

      <Tilt
        className="flex min-h-[280px] w-[250px] content-center items-center justify-center rounded-[20px] bg-gradient-to-r from-violet-500 to-fuchsia-500 flex-col"
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        style={{
          boxShadow: "0 48px 60px 0 rgba(2,14,26,.24)",
          transformStyle: "preserve-3d",
        }}
      >
        <h3 className="text-white text-[20px] font-bold py-6 text-center">
          {services[index].Description}
        </h3>

        <div
          className="flex justify-evenly items-center"
          style={{
            transform: "translateZ(60px)",
          }}
        >
          <span className="text-9xl" role="img" aria-label="img">
            <img
              src={icon}
              role="img"
              aria-label="img"
              alt="web-development"
              className="w-[170px] h-[170px] object-contain"
            />
          </span>
        </div>

        <h3 className="text-white text-[20px] font-bold py-6 text-center">
          {title}
        </h3>
      </Tilt>
    </motion.div>
  </Tilt>
);

const About = () => {
  const { setCurrentBG } = useAnimeContext();
  const aboutRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "+=200 70%",
        end: "+=00 60%",
        scrub: true,
        pinSpacing: false,
        onEnter: () => {
          setCurrentBG("#1e0a55");
          gsap.to(textRef.current, {
            color: "#282828",
            duration: 1,
          });
        },
        onLeaveBack: () => {
          setCurrentBG("#1d1836");
          gsap.to(textRef.current, {
            duration: 1,
          });
        },
      },
    });
  }, [setCurrentBG]);

  const saveFile = () => {
    saveAs(Resume, "Neelam R. - Resume.pdf");
  };

  return (
    <div ref={aboutRef}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.div className="flex flex-col md:flex-row items-center justify-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-justify text-secondary text-[17px] max-w-3xl leading-[30px] pb-8 md:pr-8"
        >
          I am a dedicated Software Developer with strong expertise in
          TypeScript and JavaScript, specializing in modern frameworks such as
          React.js, Next.js, Node.js, Three.js, GSAP, Expo and React Native.
          <br />
          I have experience in both Web and Mobile Application development,
          delivering cross-platform solutions that are efficient, scalable, and
          user-friendly.
          <br />
          My focus is on building high-performance applications that address
          real-world needs and drive meaningful results. Let&apos;s work
          together to bring your ideas to life.
          <>
            <button className="c-h-button c-h-button--gooey" onClick={saveFile}>
              {" "}
              Download Resume
              <div className="c-h-button__blobs">
                <div />
                <div />
                <div />
              </div>
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              style={{ display: "block", height: 0, width: 0 }}
            >
              <defs>
                <filter id="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation={10}
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                    result="goo"
                  />
                  <feBlend in="SourceGraphic" in2="goo" />
                </filter>
              </defs>
            </svg>
          </>
        </motion.p>

        <div className="gradient-border" id="box">
          <img
            src={MyPic}
            role="img"
            aria-label="img"
            alt="my_pic"
            className="object-contain"
          />
        </div>
      </motion.div>

      <div
        id="Service-Card"
        className="mt-20 flex flex-wrap gap-10 justify-center"
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <div className="mt-20 flex justify-center items-center">
        <motion.div
          ref={textRef}
          variants={fadeIn("", "", 0.1, 1)}
          className="!text-teal-300 text-[17px] max-w-3xl leading-[30px] text-center"
        >
          I am always eager to learn and adapt to new technologies and
          methodologies, ensuring that I stay at the forefront of the
          ever-evolving software development landscape.
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
