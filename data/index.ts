import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Workspace: Mac, Linux",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stacks",
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
    title: "Adapting to the newest tech stack and keeping me update",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
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
    title: "GatherGram",
    des: "Streamline event planning with personalized recommendations and management tools.",
    img: "/p1.svg",
    iconLists: [
      "/re.svg",
      "/ts.svg",
      "/android.svg",
      "/graphql.svg",
      "/jest.svg",
    ],
    link: "https://github.com/akvarun/GatherGram/",
  },
  {
    id: 2,
    title: "DigitalDemocracy",
    des: "A robust, user-friendly school voting system built with the MERN stack, currently facilitating seamless voting for over 1200 students.",
    img: "/p2.svg",
    iconLists: [
      "/re.svg",
      "/bootstrap.svg",
      "/mongodb.svg",
      "/nodejs.svg",
      "/javascript.svg",
    ],
    link: "https://github.com/akvarun/DigitalDemocracy",
  },
  {
    id: 3,
    title: "CORA",
    des: "Efficient GO lang-powered university scheduling with real-time timetables and bookings.",
    img: "/p3.svg",
    iconLists: [
      "/go.svg",
      "/bootstrap.svg",
      "/mysql.svg",
      "/javascript.svg",
      "/jira.svg",
    ],
    link: "https://github.com/akvarun/coraserver",
  },
  {
    id: 4,
    title: "BurgerBuddy - Lexbot",
    des: "A chatbot leveraging AWS Lexbot, S3, DynamoDB, Lambda, SES, Cognito, IAM, and ECR to assist users in ordering burgers efficiently.",
    img: "/p12.svg",
    iconLists: [
      "/Lex.svg",
      "/lamda.svg",
      "/Cognito.svg",
      "/DynamoDB.svg",
      "/SES.svg",
    ],
    link: "https://burgerbuddybottt.s3.amazonaws.com/index.html",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "Google Cloud Platform",
    img: "/gcp.svg",
    nameImg: "/Google_Cloud.svg",
    link: "https://www.cloudskillsboost.google/public_profiles/81387d9c-6264-4c19-b1ef-7dafd02b34dc",
  },
  {
    id: 2,
    name: "Hadoop",
    img: "/ibm-icon.svg",
    nameImg: "/hadoop.svg",
    link: "https://www.coursera.org/account/accomplishments/verify/5DMF2A23LK7S",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Machine Learning Engineer",
    desc: "UF college of Medicine, QPSi",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Engineer",
    desc: "Vinjumuri Innovations, Virginia",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Software Engineering Intern",
    desc: "Sayl Energy, India",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Software Engineering Intern",
    desc: "Amrita X IDEA",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/akvarun",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/akvarun/",
  }
];
