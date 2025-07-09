import {
  // services
  reactjs,
  nodejs,
  reactNative,
  nextJsLogo,
  // tech
  html,
  css,
  javascript,
  typescript,
  next,
  tailwind,
  mongodb,
  threejs,
  git,
  figma,
  sitecore,
  // experiences
  horizontal,
  openeyes,
  futurelink,
  // projects
  Animato,
  Iphone,
  threejsPro,
  Vite,
  Scroller,
  // carrent,
  SpaceX,
  MovieLand,
  Projects,
  LinkedIn,
} from "../assets/index.js";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "feedbacks",
    title: "Testimonials",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React JS",
    Description: "Front End",
    icon: reactjs,
  },
  {
    title: "Node JS",
    Description: "Back End",
    icon: nodejs,
  },
  {
    title: "React Native",
    Description: "Mobile App",
    icon: reactNative,
  },
  {
    title: "Next JS",
    Description: "Full Stack",
    icon: nextJsLogo,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "GitHub",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Sitecore",
    icon: sitecore,
  },
];

const experiences = [
  {
    title: "DX Engineer",
    company_name: "Horizontal Integration India Pvt Ltd",
    icon: horizontal,
    iconBg: "#383E56",
    date: "Jul 2023 - Present",
    points: [
      "Developing web applications using Next.js and Sitecore SXA.",
      "Collaborating with cross-functional teams to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "OpenEyes Technologies Inc.",
    icon: openeyes,
    iconBg: "#383E56",
    date: "Dec 2021 - Jun 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Future Link Consultants",
    icon: futurelink,
    iconBg: "#E6DEDD",
    date: "Sep 2017 - Nov 2021",
    points: [
      "Developing and maintaining web applications using React.js, WordPress and Shopify.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Jr. Software Engineer",
  //   company_name: "Codezeros Technology",
  //   icon: codezeros,
  //   iconBg: "#383E56",
  //   date: "Jan 2020 - Aug 2020",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies such as Redux, Saga and Thunk.",
  //     "Material UI, Bootstrap, Firebase, Stripe, Github are some of the other technologies were also used in the projects.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Designer",
  //   company_name: "Padmavati Online Services",
  //   icon: tech,
  //   iconBg: "#E6DEDD",
  //   date: "Jun 2017 - Feb 2019",
  //   points: [
  //     "Developing and maintaining web applications using PHP, Laravel, CodeIgnitor and other related technologies.",
  //     "Planning site designs, functionality and navigation.",
  //     "Building wireframes & prototypes which were then turned into functional and responsive digital products.",
  //     "Reviewing UX with multiple teams and making necessary edits.",
  //     "Handling all composition, color, illustration, typography, and branding for projects."
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Neelam is a very hard working candidate. Her dedication and commitment towards solving complex problems is unique. Her attention to details for a given task is exceptional and that is what makes her outstanding.",
    name: "Debtanu Biswas",
    designation: "Senior Tech Lead",
    company: "Horizontal Digital",
    image: "https://randomuser.me/api/portraits/men/17.jpg",
  },
  {
    testimonial:
      "Working with Neelam has been a great experience. She is proactive, detail-oriented, and always ready to support the team. Her collaborative mindset makes her an asset to any project.",
    name: "Akash Savalagi",
    designation: "Tech Lead",
    company: "Horizontal Digital",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
  },
  {
    testimonial:
      "I had the pleasure of working with Neelam on different projects, where their expertise in NextJs, CSS consistently exceeded expectations. Neelam is not only technically proficient but also a great team player, always willing to support colleagues and clients with insightful solutions.",
    name: "Jay Thakkar",
    designation: "Senior Software Engineer",
    company: "Horizontal Digital",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I had the opportunity to work closely with Neelam on multiple projects where I handled the backend and she managed the frontend development. Her expertise in React.js and front-end technologies was instrumental in delivering seamless, high-performance web applications. Neelam has a natural ability to translate complex designs into smooth, user-friendly interfaces, and her focus on UI/UX ensured that the end-users always had an intuitive experience. What sets Neelam apart is her efficiency in building scalable, responsive components and optimizing them for performance. Her strong grasp of JavaScript, TypeScript, and API integration made our collaboration seamless, with smooth data flow and well-synchronized front-to-back-end functionality. She’s a proactive team player who consistently contributes innovative solutions to meet project goals. Working with her was a pleasure, and I’d highly recommend her for any front-end development role.",
    name: "Dhruvi Patel",
    designation: "DX Engineer",
    company: "Horizontal Digital",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    testimonial:
      "Working with Neelam on the same team has been a great experience. She is highly skilled in front-end development, especially with Next JS and Sitecore. She consistently delivers outstanding results, demonstrating excellent problem-solving skills and a commitment to achieving goals. Her professionalism, dedication, and collaborative spirit make her an invaluable asset to any project. Neelam's innovative solutions and insights greatly enhance our team's performance. I highly recommend her for any team or project!!",
    name: "Rahul Kumawat",
    designation: "DX Engineer",
    company: "Horizontal Digital",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    testimonial:
      "Neelam is technically very sound and always ready to take new challenges. She possesses exemplary skills pertaining to front-end development. She is a result oriented professional. She is very passionate about her work and will leave no stone unturned to achieve her goal. I wish her all the best for her future endeavors !!",
    name: "Aalap Desai",
    designation: "Talent Acquisition Manager",
    company: "Horizontal Digital",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    testimonial:
      "There is no better colleague than Neelam. She is one of the most dedicated professionals I’ve worked with and is willing to put that extra help whenever you need it. Her expertise as a developer is considerable, and it helped our team come up with more efficient solutions for different projects. Her contribution was very valuable to the projects, and I highly recommend Neelam and would love to work with her again.",
    name: "Vinayak P",
    designation: "Business Analyst",
    company: "PMC",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial:
      "Neelam is a very hard-working person who can tackle any website-related problems with ease. We have worked together on several projects, and I found her a highly skilled and dedicated professional. Her expertise in the field of WordPress and Shopify has helped our company immensely. She’s also an all-around great person to work with! I highly recommend her to anyone looking for help on their team or any projects based on WordPress, Shopify, or React.Js.",
    name: "Sagar Soni",
    designation: "Performance marketing & media buying",
    company: "",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    testimonial:
      "Neelam is an incredibly productive and multi-skilled individual with extensive knowledge. Working with Neelam has been a pleasure due to her dedication to delivering outstanding results. Neelam has showcased her expertise in technologies like React and Angular for front-end development and PHP Laravel for back-end development. Our collaboration on an online Surveys Application based on React was a testament to her technical prowess and teamwork. Neelam's professionalism, expertise, and commitment make her a valuable asset to any team or project.",
    name: "Aaradhana Mulik",
    designation: "Associate Manager - Content & Communications",
    company: "Ascendion",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
];

const projects = [
  {
    name: "Animato",
    description:
      "In this project, I have introduced an innovative scrolling effect that adds a captivating and distinctive visual element.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "GSAP",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Animato,
    source_code_link: "https://animato-shoe.netlify.app/",
  },
  {
    name: "iPhone",
    description:
      "In this project, I have introduced 3D Iphone selection , with custom video carousel display.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "GSAP",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Iphone,
    source_code_link: "https://iphone15pro-demo.netlify.app/",
  },
  {
    name: "Let's Do It - Three.JS",
    description:
      "Web application that enables users to pick colors, choose logo and search for logo with AI generated prompt for T-Shirt.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs + open.ai",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: threejsPro,
    source_code_link: "https://threejs-product.netlify.app/",
  },
  {
    name: "EvoGym",
    description:
      "A comprehensive Fitness Training platform that allows users to register to offers, curated recommendations to others.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Vite,
    source_code_link: "https://fitness-pro.pages.dev/",
  },
  {
    name: "Scroller",
    description:
      "In this project, I have introduced an innovative scrolling effect distinctive visual element.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "GSAP",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Scroller,
    source_code_link: "https://animate-scroller.netlify.app/",
  },
  // {
  //   name: "Car Rent",
  //   description:
  //     "Web-based platform that allows users to search, and manage car rentals, providing a convenient transportation.",
  //   tags: [
  //     {
  //       name: "react + Ts",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "next.js",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: carrent,
  //   source_code_link: "https://github.com/",
  // },
  {
    name: "SpaceX",
    description:
      "Web-based platform that allows users to explore the animation on scrolling.",
    tags: [
      {
        name: "react + Ts",
        color: "blue-text-gradient",
      },
      {
        name: "framer motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: SpaceX,
    source_code_link: "https://neelamchawla.github.io/spaceX/",
  },
  {
    name: "MovieLand",
    description:
      "Web-based platform that allows users to search for details like Year, Genre of any hollywood Movies.",
    tags: [
      {
        name: "react + Ts",
        color: "blue-text-gradient",
      },
      {
        name: "framer motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: MovieLand,
    source_code_link: "https://moviezland.netlify.app/",
  },
  {
    name: "More Projects....",
    description: "Github Repo, to explore more projects.",
    tags: [
      {
        name: "react + Ts",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Projects,
    source_code_link: "https://github.com/",
  },
  {
    name: "LinkedIn Profile",
    description: "Explore more about me, on my LinkedIn profile.",
    tags: [
      {
        name: "react + Ts",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "react native",
        color: "pink-text-gradient",
      },
    ],
    image: LinkedIn,
    source_code_link: "https://www.linkedin.com/in/neelam-r/",
  },
];

export { services, technologies, experiences, testimonials, projects };
