export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const emailAddress = "tarvindraju@gmail.com"; //add your email address

//this is your about me string on the first section of the screen

export const aboutMe =
  '"Software Engineer with practical experience in developing and streamlining enterprise solutions. Expertise in enhancing procurement and deployment processes through RESTful APIs and CI/CD pipelines. Proficient in JavaScript, TypeScript, and managin databases like MongoDB and MySQL. Aim to leverage skills in DevOps and large-scale system development for impactful contributions to agile enterprise environments."';

/////////////////////////////////////////  skills /////////////////////////////////////////////////////////
//these skills array should not exceed 8 elements otherwise the alignment of the grid element would mess up

export const programmingLanguagesAndFrameworks = [
  "JavaScript",
  "TypeScript",
  "Python",
  "HTML/CSS",
  "Next.js",
  "React.js",
  "Node.js",
  "Express.js",
];

export const databaseManagement = ["MongoDB", "MySQL", "Redis"];

export const devOpsAndTools = [
  "Azure DevOps",
  "CI/CD Pipelines",
  "Swagger",
  "AWS S3",
  "Neon Database",
  "Drizzle ORM",
];

/////////////////////////////////////////  skills /////////////////////////////////////////////////////////

////////////////////////////////////////  projects ///////////////////////////////////////////////////
export const projects = [
  {
    id: 1,
    title: "PrepAI - AI Mock Interview App", //add your project title
    des: [
      "Delivered a robust AI-driven platform by developing the application using Next.js, React, and Gemini AI for a full-stack development project for AI-powered mock interviews.",
      "Enhanced user engagement and interaction by implementing a feature allowing users to log in, describe their role and experience, and answer interview questions via video, which are then converted to text on the AI mock interview platform.",
      "Improved feedback accuracy for users by integrating Gemini AI to analyze text responses and provide feedback based on the answers given.",
    ],
    img: "chat_app.png", //add your project image

    //add technologies images used in your project

    iconLists: [
      "/react.svg",
      "/next.svg",
      "/materialui.svg",
      "/gemini.svg",
      "/nodejs.svg",
      "/mongodb.svg",
    ],
    link: "", //add the publicly deployed link of your project
    github_link: "", //add the github repository link
  },
  {
    id: 2,
    title: "DevDocer: AI PDF Document Reader",
    des: [
      "Enhanced user experience and document interaction capabilities by implementing real-time chat and advanced search using text vector embedding with React and Node, incorporating Stripe for payment processing and ensuring responsive HTML/DOM",
      "Improved security and scalability of data management by configuring secure user authentication and cloud storage with AWS S3, using Neon database and Drizzle ORM, and integrating REST APIs for seamless back-end communication.",
      "Boosted document retrieval efficiency by enhancing document retrieval and interaction capabilities using the Retrieval Augmented Generation (RAG) framework and Pinecone database.",
    ],
    img: "/fypms1.png",
    iconLists: [
      "/react.svg",
      "/nodejs.svg",
      "/neon_database_white.svg",
      "/aws_white.svg",
      "/stripe.png",
    ],
    link: "",
    github_link: "",
  },
  {
    id: 3,
    title: "ChainFund App - Decentralized finance (DeFi)",
    des: [
      "Enhanced platform's functionality by focusing on the application of Ethereum's ERC20, ERC721, and ERC1155 token standards to represent diversified cryptocurrency assets.",
      "Improved user engagement and transaction efficiency by contributing significantly to user registration, token transactions (buy/sell), and the dividend distribution system.",
      "Enabled decentralized governance by designing and implementing a sophisticated voting mechanism, allowing investors to exert governance rights and make decisions regarding the fund's cryptocurrency composition.",
    ],
    img: "/edu.png",
    iconLists: ["/solidity_white.svg", "ethereum.svg", "/javascript.svg"],
    link: "",
    github_link: "",
  },
];

////////////////////////////////////////  projects ///////////////////////////////////////////////////

/////////////////////////////////////  work experience ////////////////////////////////////////////

export const workExperience = [
  {
    id: 1,
    title:
      "Software Engineer @ Jio Platforms Limited  [On-site]                                    Jun 2021 - Dec 2022",
    desc: [
      "Enhanced procurement process efficiency for SupplierFirst-Buyer First platform by developing RESTful microservices using Express.js and documenting them with Swagger.",
      "Improved code reliability and reduced bugs through test-driven development, writing test cases using Chai and Mocha, with a strong focus on coding best practices.",
      "Streamlined deployment processes by building and releasing CI/CD pipelines utilizing Azure DevOps, thereby supporting agile enterprise operations.",
      "Contributed to full-stack development by collaborating on ER diagram creation, utilizing JavaScript for front-end enhancements and engaging in large-scale transaction processing systems.",
      "Facilitated seamless data integration for SupplierFirst-Buyer First platform by employing algorithms, data structures, SQL, and MongoDB management.",
    ],
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  // {
  //   id: 2,
  //   title: "Software Engineer @ -> Jio Platforms Limited [On-site]",
  //   desc: [
  //     "Enhanced procurement process efficiency for SupplierFirst-Buyer First platform by developing RESTful microservices using Express.js and documenting them with Swagger.",
  //     "Improved code reliability and reduced bugs through test-driven development, writing test cases using Chai and Mocha, with a strong focus on coding best practices.",
  //     "Streamlined deployment processes by building and releasing CI/CD pipelines utilizing Azure DevOps, thereby supporting agile enterprise operations.",
  //     "Contributed to full-stack development by collaborating on ER diagram creation, utilizing JavaScript for front-end enhancements and engaging in large-scale transaction processing systems.",
  //     "Facilitated seamless data integration for SupplierFirst-Buyer First platform by employing algorithms, data structures, SQL, and MongoDB management.",
  //   ],
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

/////////////////////////////////////  work experience ////////////////////////////////////////////

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/", //add your github link here
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://twitter.com/", //add your twitter link here
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/tadiarvindraju/", //add your linkedin link here
  },
];

export const gridItems = [
  {
    id: 0,
    title: "My Skills",
    description: "I constantly try to improve",
    className:
      "lg:col-span-5 md:col-span-6 md:row-span-2 lg:row-span-2 text-purple",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  // {
  //   id: 2,
  //   title: "I'm very flexible with time zone communications",
  //   description: "",
  //   className: "lg:col-span-2 md:col-span-3 lg:row-span-3",
  //   imgClassName: "",
  //   titleClassName: "justify-start",
  //   img: "",
  //   spareImg: "",
  // },
  // {
  //   id: 5,
  //   title: "Tech enthusiast with a passion for development.",
  //   description: "",
  //   className: "md:col-span-3 md:row-span-2 relative",
  //   imgClassName:
  //     "absolute w-60 right-3 top-14 sm:w-60 sm:right-10 sm:top-10  md:w-80 lg:w-60 md:top-36 md:right-8 lg:top-8 lg:right-16",
  //   titleClassName: "flex md:justify-start lg:justify-center sm:justify-start",
  //   img: "/encoded_code.png",
  //   spareImg: "/grid.svg",
  // },
  // {
  //   id: 6,
  //   title: "Do you want to start a project together?",
  //   description: "",
  //   className: "lg:col-span-3 md:col-span-3 md:row-span-1",
  //   imgClassName: "",
  //   titleClassName: "justify-center md:max-w-full max-w-60 text-center",
  //   img: "",
  //   spareImg: "",
  // },
];
