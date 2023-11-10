import {
  mobile,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  mongodb,
  git,
  nextjs,
  simplicitic,
  freelancer,
  moneywho,
  dalle,
  threads,
  tellme,
  tiktik,
  bantingcomm,
  courtsite,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "Frontend Developer",
    icon: mobile,
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
    icon: nextjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Frontend Developer (Internship)",
    company_name: "Simplicitic Innovations",
    icon: simplicitic,
    iconBg: "#E6DEDD",
    date: "July 2022 - September 2022",
    points: [
      "Developing and maintaining web applications using React.js, Redux Toolkit and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Freelance",
    icon: freelancer,
    iconBg: "#383E56",
    date: "October 2022 - Present",
    points: [
      "Developing and maintaining web applications using Nextjs, React.js, Firebase and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Understanding client's vision and goals to creating successful web solutions.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Courtsite",
    icon: courtsite,
    iconBg: "#4460f2",
    date: "September 2023 - Present",
    points: [
      "Developing and maintaining web applications using Nextjs, GraphQL and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Threads Clone",
    description:
      "Develop Threads, Next.js 13 app that skyrocketed to 100 million sign-ups in less than 5 days, and dethroned giants like Twitter, ChatGPT, and TikTok to become the fastest-growing app ever!",
    tags: [
      {
        name: "nextjs",
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
    image: threads,
    source_code_link: "https://github.com/shaoxuan0916/threads_clone",
  },
  {
    name: "DALL-E Clone",
    description:
      "MidJourney and DALL-E are taking over social media. Dive into the world of artificial intelligence and build your own version of these tools that can generate everything from memes and art to beautiful UI/UX designs!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
    ],
    image: dalle,
    source_code_link: "https://github.com/shaoxuan0916/Dall-e-clone",
  },
  {
    name: "Money Who",
    description:
      "A simple web application that calculate who owes who money. It provides the easiest way to record shared expenses with friends and family. No pen or paper needed. Just [Money Who] !",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: moneywho,
    source_code_link: "https://github.com/shaoxuan0916/money_who",
  },
  {
    name: "Tell Me",
    description:
      "A simple web application that can send and receive anonymous messages. Every user can share their unique link to friends or public to let them send messages anonymously.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "zustand",
        color: "pink-text-gradient",
      },
    ],
    image: tellme,
    source_code_link: "https://github.com/shaoxuan0916/tellme",
  },
  {
    name: "Tik Tik (TikTok Clone)",
    description:
      "This TikTok Clone Application includes Google Auth, the ability to upload, publish, share, comment on, and like the videos; filtering by categories and advanced search functionalities, profile pages, suggested accounts, custom responsive design, and much more.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "googleoauth",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: tiktik,
    source_code_link: "https://github.com/shaoxuan0916/tiktik_app",
  },
  {
    name: "SME Landing Page",
    description:
      "This is the landing page that I built for a SME using Nextjs, typescript and Chakra UI. It contains all the basic information and functions that a landing page should have, such as product information, contact form and social media button, as well as some basic SEO.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "chakra-ui",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: bantingcomm,
    source_code_link: "https://github.com/shaoxuan0916/bantingcomm",
  },
];

export { services, technologies, experiences, testimonials, projects };
