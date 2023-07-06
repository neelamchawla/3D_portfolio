import {
  mobile,
  backend,
  creator,
  web,
  
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
  canva,
  // docker,
  
  // meta,
  // starbucks,
  // tesla,
  // shopify,
  openeyes,
  futurelink,
  codezeros,
  tech,

  carrent,
  threejsPro,
  Vite,
  // jobit,
  // tripguide,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React.Js Developer",
    icon: mobile,
  },
  {
    title: "Node.Js Developer",
    icon: creator,
  },
  {
    title: "Video / Image Creator",
    icon: backend,
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Canva",
    icon: canva,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "OpenEyes Technologies Inc.",
    icon: openeyes,
    iconBg: "#383E56",
    date: "Dec 2021 - Till Date",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Future Link Consultants",
    icon: futurelink,
    iconBg: "#E6DEDD",
    date: "Sep 2020 - Nov 2021",
    points: [
      "Developing and maintaining web applications using React.js, WordPress and Shopify.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Jr. Software Engineer",
    company_name: "Codezeros Technology",
    icon: codezeros,
    iconBg: "#383E56",
    date: "Jan 2020 - Aug 2020",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies such as Redux, Saga and Thunk.",
      "Material UI, Bootstrap, Firebase, Stripe, Github are some of the other technologies were also used in the projects.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Designer",
    company_name: "Padmavati Online Services",
    icon: tech,
    iconBg: "#E6DEDD",
    date: "Jun 2017 - Feb 2019",
    points: [
      "Developing and maintaining web applications using PHP, Laravel, CodeIgnitor and other related technologies.",
      "Planning site designs, functionality and navigation.",
      "Building wireframes & prototypes which were then turned into functional and responsive digital products.",
      "Reviewing UX with multiple teams and making necessary edits.",
      "Handling all composition, color, illustration, typography, and branding for projects."
    ],
  },
];

const testimonials = [
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
    designation: "B2B Content | Content Marketing | Corporate Communications",
    company: "",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, and manage car rentals, providing a convenient transportation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Let's Do It - ThreeJs",
    description:
      "Web application that enables users to pick colors, choose logo and search for logo with AI generated prompt for 3D T-Shirt.",
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
];

export { services, technologies, experiences, testimonials, projects };