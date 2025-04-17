import {
    northeastern,
    bose,
    busek,
    cplusplus,
    java,
    python,
    ubuntu,
    c,
    javascript,
    git,
    scrum,
    supermarket,
    minesweeper,
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
      title: "C++",
      icon: cplusplus,
    },
    {
      title: "Java",
      icon: java,
    },
    {
      title: "Python",
      icon: python,
    },
    {
      title: "Ubuntu",
      icon: ubuntu,
    },
    {
      title: "C",
      icon: c,
    },
    {
      title: "JavaScript",
      icon: javascript,
    },
    {
      title: "Git",
      icon: git,
    },
    {
      title: "Scrum",
      icon: scrum,
    },
  ];
  
  const experiences = [
    {
      title: "Bachelor's in Computer Science",
      company_name: "Northeastern University",
      icon: northeastern,
      iconBg: "#C4C4C4",
      date: "September 2020 - May 2024",
      points: [
        "Graduated with honors from Khoury College of Computer Science and a GPA of 3.7/4.0",
        "Took courses in Software Development, Object-Oriented Design, Algorithms, Networks, Systems, Security, and AI",
        "Developed skill with Windows, Ubuntu, Git, VS Code, Vim, React, Unit Testing, and more",
      ],
    },
    {
      title: "Embedded SW Engineer Co-op",
      company_name: "Bose Corporation",
      icon: bose,
      iconBg: "#1e1e1e",
      date: "December 2022 - June 2023",
      points: [
        "Worked inside Scrum team responsible for new features, bug fixes, and explorations ",
        "Programmed on development units with thorough accompanying unit and integration tests",
      ],
    },
    {
      title: "Robotics Software Co-op",
      company_name: "Busek Co",
      icon: busek,
      iconBg: "#479FFF",
      date: "January 2022 - July 2022",
      points: [
        "Maintained and updated C++ codebase, independently debugging to enable hardware tests",
        "Implemented changes to pose estimation software, greatly speeding up visual detection",
        "Developed Unity visualization tool to graphically enhance MatLab interface",
        "Tracked data with web-based databases and custom web dashboards over sockets",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      name: "Vinodh Bodapati",
      designation: "Senior Software Engineer at Bose",
      image: "https://media.licdn.com/dms/image/v2/C5603AQGV7tNRBaa9FQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1519119386157?e=1750291200&v=beta&t=xmrweiVmy3UI1pv0zn7Q2W_dVK5eoa31RgJb0NDTiGc",
    },
    {
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      name: "Simon Halpern",
      designation: "Former Director of Robotics at Busek",
      image: "https://media.licdn.com/dms/image/v2/C4E03AQGBumDrceyd8g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1647271137503?e=1750291200&v=beta&t=LcmNeL37ZrZdl3AhOgsid2WHyQd3FWnbXa6S1GSeARw",
    },
    {
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      name: "Matt Rizzo",
      designation: "Embedded Engineer at Bose",
      image: "https://media.licdn.com/dms/image/v2/C4D03AQEFxwCBVRimAg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1518647650015?e=1750291200&v=beta&t=Xohok5HNRqemFEk8zTNefBGJAQaQwPe-VkCuIuer5l8",
    },
  ];
  
  const projects = [
    {
      name: "Supermarket Check Out",
      description:
        "C++ program using Object-Oriented Design to create a receipt based on a complex shopping cart. Handles store-wide deals and ensures lowest cost according to individually assigned discounts.",
      tags: [
        {
          name: "c++",
          color: "blue-text-gradient",
        },
        {
          name: "ood",
          color: "green-text-gradient",
        },
      ],
      image: supermarket,
      source_code_link: "https://github.com/NickMFrank/supermarket-example",
    },
    {
      name: "Minesweeper",
      description:
        "Complete recreation of the classic game minesweeper in C++. Allows for creation of a custom-sized board with standard functionality (including search for revealed tiles).",
      tags: [
        {
          name: "c++",
          color: "blue-text-gradient",
        },
        {
          name: "ood",
          color: "green-text-gradient",
        },
        {
          name: "smfl",
          color: "pink-text-gradient",
        },
      ],
      image: minesweeper,
      source_code_link: "https://github.com/NickMFrank/MinesweeperGame",
    },
  ];
  
  export { services, experiences, testimonials, projects };
  