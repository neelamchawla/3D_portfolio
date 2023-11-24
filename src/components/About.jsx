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

import { useAnimeContext } from "../context/animeContext.jsx";
import { gsap, ScrollTrigger } from "gsap/all";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-[250px]  p-[1px] rounded-[20px] shadow-card"
    >
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
              className="w-16 h-16 object-contain"
            />
          </span>
        </div>

        <h3 className="text-white text-[20px] font-bold pt-8 text-center">
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

  return (
    <div ref={aboutRef}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I&apos;m a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React.Js, Next.Js, Node.Js, and
        Three.js. I&apos;m a quick learner and collaborate closely with clients
        to create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let&apos;s work together to bring your ideas to
        life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
