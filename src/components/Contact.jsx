/* eslint-disable react-refresh/only-export-components */
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import EarthCanvas from "./canvas/Earth.jsx";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import Swal from "sweetalert2";

import { useAnimeContext } from "../context/animeContext.jsx";
import { gsap, ScrollTrigger } from "gsap/all";

const Contact = () => {
  const { setCurrentBG } = useAnimeContext();

  const formRef = useRef();
  const contactRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
      scrollTrigger: {
        trigger: contactRef.current,
        start: "+=200 70%",
        end: "+=00 60%",
        scrub: true,
        pinSpacing: false,
        onEnter: () => {
          setCurrentBG("#000000");
          gsap.to(textRef.current, {
            color: "#282828",
            duration: 1,
          });
        },
        onLeaveBack: () => {
          setCurrentBG("#050816");
          gsap.to(textRef.current, {
            duration: 1,
          });
        },
      },
    });
  }, [setCurrentBG]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (form.name === "" || form.email === "" || form.message === "") {
      Swal("Please fill all the fields");
      setLoading(false);
    } else if (form.name !== "" || form.email !== "" || form.message !== "") {
      emailjs
        .send(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          {
            from_name: form.name,
            to_name: "Neelam Chawla",
            from_email: form.email,
            to_email: "neelam.projects@gmail.com",
            message: form.message,
          },
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setLoading(false);
            // alert("Thank you. I will get back to you as soon as possible.");
            Swal(
              "Thank you for reaching out!!",
              "I will contact you shortly.",
              "success"
            );
            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          // eslint-disable-next-line no-unused-vars
          (error) => {
            setLoading(false);
            // console.error(error);
            // alert("Ahh!! Something went wrong. Please try again.");
            Swal("Ahh!! Something went wrong.", "Please try again.", "error");
          }
        );
    }
  };

  return (
    <div
      ref={contactRef}
      className={`xl:mt-5 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-[#100d25ab] p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your Name..."
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your Email ID..."
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={3}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Enter your Message..."
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
