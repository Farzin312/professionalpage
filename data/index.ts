export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Versatile Software Developer Crafting End-to-End Solutions",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Flexible for Collaborations!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "Currently competing in hackathons, building versatile software, and expanding my skills.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60 mb-20",
    titleClassName: "justify-center md:justify-start lg:justify-center mb-20",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Costivity-Expense Tracker",
    des: "A work-in-progress expense tracker that uses Plaid and AI to provide financial insights without manual input. Built by me and my team.",
    img: "/p1.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/python.png", "/c.svg"],
    link: "https://costivity.com",
  },
  {
    id: 2,
    title: "Intel-O-Flash",
    des: "An AI-powered flashcard app with Next.js, MUI, and Firebase for efficient study. Offers a sleek UI and secure login.",
    img: "flashcard.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/node.svg",
      "/firebase-icon.svg",
      "/groq.svg",
    ],
    link: "https://ai-flashcards-amber.vercel.app/login",
  },
  {
    id: 3,
    title: "Sage.ai",
    des: "An AI platform that helps students choose the best courses and instructors through real-time professor reviews and insights.",
    img: "/sage.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/groq.svg",
      "/js.svg",
      "/firebase-icon.svg",
    ],
    link: "https://ai-rate-my-professor-three.vercel.app/login",
  },
  {
    id: 4,
    title: "ChatterBot",
    des: "An AI customer support app built with Firebase, Next.js, and LLaMA AI, designed for efficient and instant responses.",
    img: "/chatterbot.png",
    iconLists: [
      "/next.svg",
      "/css.svg",
      "/firebase-icon.svg",
      "/js.svg",
      "/groq.svg",
    ],
    link: "https://ai-customer-support-alpha-five.vercel.app/home",
  },
];

export const testimonials = [
  {
    quote:
      "Farzin played a crucial role in the success of our project at SouthLink. His expertise in full-stack development and his ability to understand our needs made a huge impact. He consistently delivered high-quality work on time, and his proactive communication ensured the project ran smoothly. I’d highly recommend him for any team looking for a dependable and skilled developer.",
    name: "SouthLink",
    title: "Owner of the Gas Station",
    logo: "/southlink.jpeg", // Replace with your logo file path
  },
  {
    quote:
      "Collaborating with Farzin has been an inspiring experience. His creativity and technical skills bring out the best in our projects. As a fellow student at the University of Delaware, I’ve seen his commitment to excellence firsthand. Farzin is always willing to help, share knowledge, and explore new ideas, making him a fantastic teammate.",
    name: "Ujjwala Pothula",
    title: "University of Delaware",
    logo: "delaware.svg",
  },
  {
    quote:
      "Working with Farzin at Fordham University has been nothing short of rewarding. His attention to detail and ability to think critically have been invaluable to our projects. Farzin’s commitment to learning and pushing boundaries stands out, making him a reliable and innovative collaborator.",
    name: "Mir Shahiduzzaman",
    title: "Intern at Pulp and student at Fordham University",
    logo: "/fordam.svg",
  },
  {
    quote:
      "I can confidently say Farzin brings a strong sense of responsibility and accountability to his work. He takes initiative and approaches tasks thoughtfully, ensuring he follows through consistently. Farzin communicates clearly and effectively, is always open to feedback, and is dedicated to continuous improvement. His knack for creative problem-solving adds great value to every project we tackle together.",
    name: "Muhammad Amir",
    title: "Brooklyn College",
    logo: "/brooklyn.svg",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Tech Fellow",
    desc: "Led programming sessions for up to 30 students, teaching JavaScript and Python, troubleshooting hardware/software issues, and presenting new APIs to enhance the business model.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Hackathon Participant - Software Engineer",
    desc: "Monthly hackathons with Major League Hacking focused on AI, cloud, and web projects. Builds versatile applications, staying updated on tech trends and advancing technical skills.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Software Engineer - Headstarter AI",
    desc: "Led a team in the Headstarter AI Fellowship, creating innovative software solutions and currently developing a new-age expense tracker using AI and modern tech.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Full-Stack Developer",
    desc: "Developed a full-stack web app for SouthLink using React, Flask, and Docker, including backend APIs and responsive UIs to create a seamless user experience.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Farzin312",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "http://www.linkedin.com/in/farzin-shifat-5b7b43207",
  },
];
