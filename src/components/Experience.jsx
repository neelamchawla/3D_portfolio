/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "gsap/all";
import { useAnimeContext } from "../context/animeContext.jsx";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        animation: "running",
        animationName: "fadeIn",
        animationDuration: "1s",
        animationTimingFunction: "ease-in-out",
        animationFillMode: "forwards",
        animationIterationCount: "1",
        animationDelay: "3s",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="rounded-full"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { setCurrentBG } = useAnimeContext();
  const expRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
      scrollTrigger: {
        trigger: expRef.current,
        start: "+=200 70%",
        end: "+=00 60%",
        scrub: true,
        pinSpacing: false,
        onEnter: () => {
          setCurrentBG("#441049");
          gsap.to(textRef.current, {
            color: "#ffe4c4",
            duration: 1,
          });
        },
        onLeaveBack: () => {
          setCurrentBG("#1e0a55");
          gsap.to(textRef.current, {
            color: "#d0d0d0",
            duration: 1,
          });
        },
      },
    });
  }, [setCurrentBG]);

  return (
    <div ref={expRef}>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center text-slate-200`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");
