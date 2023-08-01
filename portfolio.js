import emoji from "react-easy-emoji";

export const greetings = {
  name: "Kishan Khadela",
  title: "Welcome.",
  description:
    "Hello! I'm a passionate MERN stack developer and creative Web Designer based in India. With a strong foundation in MongoDB, Express, React, and Node.js, I love working on new and exciting technologies in the world of Web Development.As a senior web developer, I have extensive experience working with various startups and being a core part of developer teams, contributing to major feature development.Additionally, I've successfully handled diverse client projects as a freelancer.I'm an avid Open Source enthusiast, always looking for new opportunities to learn and grow. Let's connect and build something amazing together! Feel free to reach out for potential opportunities or to discuss any exciting projects.",
  resumeLink: "https://www.canva.com/design/DAFqLlD_sp4/JKryPoBs-DUqi6IjjfvysA/view?utm_content=DAFqLlD_sp4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
};

export const openSource = {
  githubUserName: "kishan1207",
};

export const contact = {};

export const socialLinks = {
  url: 'https://www.canva.com/design/DAFqLlD_sp4/JKryPoBs-DUqi6IjjfvysA/view?utm_content=DAFqLlD_sp4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink',
  instagram: "https://www.instagram.com/kishankhadela1207/",
  github: "https://github.com/kishan1207/",
  linkedin: "https://www.linkedin.com/in/kishan-khadela-830311134/",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "I BUILD WEB DREAMS FROM FRONTEND FANTASIES, BACKEND MAGIC, AND DATABASE WIZARDRY, CRAFTING DIGITAL REALMS OF LIMITLESS POSSIBILITIES.",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/webdev.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications."
        ),
        emoji(
          "⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks."
        ),
        emoji(
          "⚡ MERN stack mastery, crafting captivating web wonders."
        ),
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "logos:html-5",
        },
        {
          skillName: "CSS",
          fontAwesomeClassname: "logos:css-3",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:nodejs-icon",
        },
        {
          skillName: "React JS",
          fontAwesomeClassname: "devicon:react",
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "logos:nextjs-icon",
        },
        {
          skillName: "Gatsby JS",
          fontAwesomeClassname: "logos:gatsby",
        },
        {
          skillName: "Node JS",
          fontAwesomeClassname: "logos:nodejs",
        },
        {
          skillName: "Express JS",
          fontAwesomeClassname: "skill-icons:expressjs-dark",
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "logos:mongodb-icon",
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
        },
        {
          skillName: "Google Firebase",
          fontAwesomeClassname: "logos:firebase",
        },
        {
          skillName: "AWS Services",
          fontAwesomeClassname: "logos:aws",
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "logos:vercel-icon",
        },
        {
          skillName: "npm",
          fontAwesomeClassname: "logos:npm-icon",
        },
        {
          skillName: "yarn",
          fontAwesomeClassname: "logos:yarn",
        },
        {
          skillName: "GIT Version Control",
          fontAwesomeClassname: "logos:git",
        },

      ],
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Web Developer",
  },
  {
    Stack: "React JS", //Insert stack or technology you have experience in
  },
  {
    Stack: "Node JS",
  },
  {
    Stack: "Database",
  },
];

export const educationInfo = [
  {
    schoolName: "Dr. Shubhash Technical Campus",
    subHeader: "B.E in Information Technology",
    duration: "September 2016 - December 2019",
    desc: "Programming Bootcamp to learn Full Stack Development",
    descBullets: [
      "  Dynamic Programming Language: JavaScript",
      "  Web Application Development: HTML, CSS, JavaScript, React.js, APIs using Spring Boot",
      "  Database Programming: Spring JDBC/DAO, MongoDB,Table Design, SQL, PostgreSQL",
      "  Completed 1000+ hours of JavaScript, HTML, CSS, Front-end and Back-end training",
      "  Completed 100+ hours of pair programming on group projects",
    ],
  },
];

export const experience = [
  {
    role: "MERN Stack Developer",
    company: "TechCompose Solutions Pvt. Ltd.",
    companylogo: "https://media.licdn.com/dms/image/C4D0BAQEBxX2XeN8pew/company-logo_200_200/0/1673343223541?e=1698883200&v=beta&t=qFFPdmUUyPpVxrKVHrTA46FR0dzfLVKfqIROaZ4_igU",
    date: "May 2022 - Present",
    descBullets: [
      "  As a MERN Stack Developer at TechCompose Solutions, I am responsible for the development and maintenance of the company's web application. Utilizing my skills in Next.js, React, MongoDB, Node.js, Django, and Express.js.",
      "  Writing and maintaining reliable code",
      "  Communication with clients and teams queries and suggestion",
    ],
  },
  {
    role: "MERN Stack Developer Intern",
    company: "Elsner Technologies Pvt. Ltd.",
    companylogo: "https://media.licdn.com/dms/image/C4E0BAQFpeYNWIsBAxw/company-logo_200_200/0/1643273360199?e=1698883200&v=beta&t=N6NuRYDHNAXvPGRCRnM-Cxd1tzVeR4tTCGLBpfFB2uQ",
    date: "Dec 2020 - Mar 2022",
    descBullets: [
      "  Developing new user-facing features using React.js and Node.js",
      "  Planning and developing new web applications",
      "  Good Command over JavaScript and proficiency with React.js. Developing user interface components and implementing them following well - known React.js workflows(such as Flux or Redux).",
    ],
  },
];

export const projects = [
  {
    name: "WhiteStones Realty",
    desc: "Manage properties and Enquiries effortlessly with our user-friendly real estate web app.",
    link: "https://whitestonesrealty.in/",
    tags: ["TypeSctipt","ReactJs","NodeJs" ,"ExpressJs","MongoDB"],
  },
  {
    name: "Artboxy",
    desc: "Web app showcasing user-created profiles, exhibitions, and artwork like Instagram.Includes features for likes, comments, followers, and artwork sales.Personal messaging enabled.",
    link: "https://www.artboxy.com/",
    tags: ["JavaScript","ReactJs", "NodeJs", "Firebase","Firestore DB"],
  },
  {
    name: "Chit-Chat Web App",
    desc: "Chitchat is fully responsive and awsome chat app with Easy to use chat app, Attractive Features Dark &light.",
    github: "https://github.com/kishan1207/chat-template",
    link: "https://github.com/kishan1207/chat-template",
    tags: ["Intern", "Chat App", "TypeScript", "Css", "React Js",],
  },
];

export const feedbacks = [
  {
    name: "Austin Coontz",
    feedback:
      "I was trying to make a website that is blazingly fast. I had no idea where to start. What did I do? Called my friend Brendan. I had no Idea what i Was doing! He fixed it. Website? Fast. Blazingly. Done.",
  },
  {
    name: "Andrew Rose",
    feedback:
      "Brendan Glancy, the website developer I worked with was exceptional. He took the time to understand my needs and goals, and created a website that not only met, but exceeded my expectations. Their communication was clear and timely throughout the process, and I would highly recommend them to anyone in need of an exceptional website.",
  },
];

export const seoData = {
  title: "Kishan's Portfolio",
  description: "Full Stack Developer showcasing my work and experience.",
  image: "https://avatars.githubusercontent.com/u/73116795?v=4",
  url: "https://brendanglancy.software/",
  keywords: [
    "Kishan Khadela",
    "Portfolio",
    "Full Stack Developer",
    "Open to work",
    "Hire React js Developer",
    "Developer",
    "web developer",
  ],
};
