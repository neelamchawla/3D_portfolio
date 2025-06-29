/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useEffect, useRef } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { link } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { gsap, ScrollTrigger } from "gsap/all";
import { useAnimeContext } from "../context/animeContext.jsx";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full md:min-w-full min-h-[26.5em] min-w-[31em]"
        style={{
          boxShadow: "0 48px 60px 0 rgba(2,14,26,.24)",
          transformStyle: "preserve-3d",
        }}
      >
        <a href={source_code_link} target="_blank" rel="noreferrer">
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-fill rounded-2xl"
            />

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                <img
                  src={link}
                  alt="source_code"
                  className="w-3/4 h-3/4 object-contain"
                />
              </div>
            </div>
          </div>
        </a>

        <div
          className="mt-5"
          style={{
            transform: "translateZ(60px)",
          }}
        >
          <span className="text-9xl" role="img" aria-label="img">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
          </span>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  const { setCurrentBG } = useAnimeContext();
  const projectRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
      scrollTrigger: {
        trigger: projectRef.current,
        start: "+=200 70%",
        end: "+=00 60%",
        scrub: true,
        pinSpacing: false,
        onEnter: () => {
          setCurrentBG("#142331");
          gsap.to(textRef.current, {
            color: "#d0d0d0",
            duration: 1,
          });
        },
        onLeaveBack: () => {
          setCurrentBG("#1e0a55");
          gsap.to(textRef.current, {
            duration: 1,
          });
        },
      },
    });
  }, [setCurrentBG]);

  return (
    <div ref={projectRef}>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-auto leading-[30px]"
        >
          The following projects highlight my skills and professional experience
          through real-world, practical examples. Each project includes a brief
          description along with links to the source code and live demos. These
          projects demonstrate my ability to solve complex problems, work across
          diverse technologies, and manage development tasks efficiently from
          concept to deployment.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center md:justify-start">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
