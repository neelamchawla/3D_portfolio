// /* eslint-disable react/prop-types */
// /* eslint-disable react-refresh/only-export-components */
// import { useEffect, useRef } from "react";
// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { SectionWrapper } from "../hoc";
// import { fadeIn, textVariant } from "../utils/motion";
// import { testimonials } from "../constants";
// import { useState } from "react";

// import { gsap, ScrollTrigger } from "gsap/all";
// import { useAnimeContext } from "../context/animeContext.jsx";

// const FeedbackCard = ({
//   index,
//   testimonial,
//   name,
//   designation,
//   company,
//   image,
// }) => (
//   <motion.div
//     variants={fadeIn("", "spring", index * 0.5, 0.75)}
//     className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
//   >
//     <p className="text-white font-black text-[48px]">&quot;</p>

//     <div className="mt-1">
//       <p className="text-white tracking-wider text-[18px]">
//         <ReadMore>{testimonial}</ReadMore>
//       </p>

//       <div className="mt-7 flex justify-between items-center gap-1">
//         <div className="flex-1 flex flex-col">
//           <p className="text-white font-medium text-[16px]">
//             <span className="blue-text-gradient">@</span> {name}
//           </p>
//           <p className="mt-1 text-secondary text-[12px]">
//             {designation} {company === "" ? "" : "at"} {company}
//           </p>
//         </div>

//         <img
//           src={image}
//           alt={`feedback_by-${name}`}
//           className="w-10 h-10 rounded-full object-cover"
//         />
//       </div>
//     </div>
//   </motion.div>
// );

// const ReadMore = ({ children }) => {
//   const text = children;
//   const [isReadMore, setIsReadMore] = useState(true);
//   const toggleReadMore = () => {
//     setIsReadMore(!isReadMore);
//   };

//   return (
//     <p className="text">
//       {isReadMore ? text.slice(0, 150) : text}
//       <span onClick={toggleReadMore} className="read-or-hide">
//         {isReadMore ? "...read more" : " show less"}
//       </span>
//     </p>
//   );
// };

// const Feedbacks = () => {
//   const { setCurrentBG } = useAnimeContext();
//   const feedbackRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     gsap.timeline({
//       scrollTrigger: {
//         trigger: feedbackRef.current,
//         start: "+=200 70%",
//         end: "+=00 60%",
//         scrub: true,
//         pinSpacing: false,
//         onEnter: () => {
//           setCurrentBG("#1e0a55");
//         },
//         onLeaveBack: () => {
//           setCurrentBG("#1d1836");
//         },
//       },
//     });
//   }, [setCurrentBG]);

//   return (
//     <div ref={feedbackRef}>
//       <div className={`mt-12 bg-black-100 rounded-[20px]`}>
//         <div
//           className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
//         >
//           <motion.div variants={textVariant()}>
//             <p className={styles.sectionSubText}>What others say</p>
//             <h2 className={styles.sectionHeadText}>Testimonials.</h2>
//           </motion.div>
//         </div>
//         <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
//           {testimonials.map((testimonial, index) => (
//             <FeedbackCard
//               key={testimonial.name}
//               index={index}
//               {...testimonial}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SectionWrapper(Feedbacks, "feedbacks");

/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { useState } from "react";

import { gsap, ScrollTrigger } from "gsap/all";
import { useAnimeContext } from "../context/animeContext.jsx";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">&quot;</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">
        <ReadMore>{testimonial}</ReadMore>
      </p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} {company === "" ? "" : "at"} {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

const Feedbacks = () => {
  const { setCurrentBG } = useAnimeContext();
  const feedbackRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
      scrollTrigger: {
        trigger: feedbackRef.current,
        start: "+=200 70%",
        end: "+=00 60%",
        scrub: true,
        pinSpacing: false,
        onEnter: () => {
          setCurrentBG("#1e0a55");
        },
        onLeaveBack: () => {
          setCurrentBG("#1d1836");
        },
      },
    });
  }, [setCurrentBG]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust based on how many testimonials you want to show at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div ref={feedbackRef}>
      <div className={`mt-12 bg-black-100 rounded-[20px]`}>
        <div
          className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
        >
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>What others say</p>
            <h2 className={styles.sectionHeadText}>Testimonials.</h2>
          </motion.div>
        </div>
        <div className={`-mt-20 pb-14 ${styles.paddingX}`}>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <FeedbackCard
                key={testimonial.name}
                index={index}
                {...testimonial}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "feedbacks");
