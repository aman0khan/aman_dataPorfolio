export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "Street Fighter Dashboard",
    description:
      "Street Fighter Player Selection Dashboard.",
    technologies: ["PowerBI"],
    github: "https://github.com/aman0khan/StreetFighter-Dashboard/blob/main/streetFighter.pbix",
    demo: "https://github.com/aman0khan/StreetFighter-Dashboard/blob/main/streetFighter.pbix",
    image: require("public/sf.png"),
    available: true,
  },
  {
    id: 1,
    name: "The Big Cat",
    description:
      "Understandable Dashboard using Excel and Power BI .",
    technologies: ["Excel and Power BI"],
    github: "https://github.com/aman0khan/TheBigCat_BI_dashboard",
    demo: "https://github.com/aman0khan/TheBigCat_BI_dashboard",
    image: require(".//../../public/projects/s1.png"),
    available: true,
  },
  {
    id: 2,
    name: "Global Sales projects",
    description:
      "Solve the business questions Using SQL.",
    technologies: ["Excel and Power BI"],
    github: "https://github.com/aman0khan/Global_Sales_projects_BI_dashboard",
    demo: "https://github.com/aman0khan/Global_Sales_projects_BI_dashboard",
    image: require(".//../../public/projects/Sales Dashboard.png"),
    available: true,
  },
  {
    id: 3,
    name: "Brazilian-Analysis",
    description:
      "Solve the business related problem using SQL, Power BI and Excel.",
    technologies: ["SQL, Power BI and Excel"],
    github: "https://github.com/aman0khan/Brazilian-E-Commerce-Analysis-main_BI_dashboard",
    demo: "https://github.com/aman0khan/Brazilian-E-Commerce-Analysis-main_BI_dashboard",
    image: require(".//../../public/projects/Screenshot 2023-05-18 131129.png"),
    available: true,
  },
  {
    id: 4,
    name: "WalmartAnalysis",
    description:
      "Solve the business related problem using Only SQL.",
    technologies: ["SQL"],
    github: "https://github.com/aman0khan/Walmart_Sales_Project_using_SQL",
    demo: "https://github.com/aman0khan/Walmart_Sales_Project_using_SQL",
    image: require(".//../../public/projects/Screenshot 2024-09-29 at 10.43.14 PM.png"),
    available: true,
  },
  {
    id: 5,
    name: "Electric Vehicle Sales Analysis",
    description:
      "Detailed analysis of electric vehicle sales trends using Power BI and Excel to support strategic decision-making.",
    technologies: ["Power BI", "Excel"],
    github: "https://github.com/aman0khan/EV-DashBoard",
    demo: "https://github.com/aman0khan/EV-DashBoard",
    image: require("public/ev.png"),
    available: true,
  },
];


export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    available: false,
  },
];
