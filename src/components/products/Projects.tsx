import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  previewUrl: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Facebook Ads Bootcamp 1.0",
    description:
      "This bootcamp is designed to provide you with the necessary tools you need",
    image: "/assets/projects/one.jpeg",
    tag: ["All", "Financial"],
    previewUrl: "https://tinyurl.com/2k789db8",
  },
  {
    id: 2,
    title: "Oil and Gas Money Blueprint",
    description:
      "With the help of the Oil and Gas Money Blueprint, unleash the potential of the oil and gas sector",
    image: "/assets/projects/two.jpeg",
    tag: ["All", "Finance"],
    previewUrl: "https://tinyurl.com/pn2mct7t",
  },
  {
    id: 3,
    title: "Affiliate Marketing Start-Up Blueprint",
    description:
      "With the Affiliate Marketing Start-Up Blueprint, you can get your online business off the ground",
    image: "/assets/projects/three.jpeg",
    tag: ["All", "Finance"],
    previewUrl: "https://tinyurl.com/3mpxdbna",
  },
  {
    id: 4,
    title: "Transform Your Skincare Business in 90 Days Program",
    description:
      "With this you can unleash the potential of your skincare business",
    image: "/assets/projects/four.jpeg",
    tag: ["All"],
    previewUrl: "https://tinyurl.com/mryxsvv6",
  },
  {
    id: 5,
    title: "Ultimate Deliverance From Masturbation (UDFM)",
    description:
      "our journey to a life of freedom and self-control can be facilitated by the Ultimate Deliverance From Masturbation (UDFM) programme",
    image: "/assets/projects/five.jpeg",
    tag: ["All", "Relationship"],
    previewUrl: "https://tinyurl.com/msfyh366",
  },
  {
    id: 6,
    title: "Hassle Free USA Relocation System",
    description:
      "The seamless and stress-free nature of your relocation is the goal of the Hassle-Free USA Relocation System",
    image: "/assets/projects/six.jpeg",
    tag: ["All"],
    previewUrl: "https://tinyurl.com/z3ccwf3c",
  },
  {
    id: 7,
    title:
      "Blueprint Secrets To Earning $100-$2,000 Weekly With Crypto & DeFi Jobs",
    description:
      "The seamless and stress-free nature of your relocation is the goal of the Hassle-Free USA Relocation System",
    image: "/assets/projects/seven.jpeg",
    tag: ["All"],
    previewUrl: "https://tinyurl.com/z3ccwf3c",
  },
  {
    id: 8,
    title: "How To Relocate To Europe Using A Study-Free Route",
    description: "How to Relocate to Europe Using a Study-Free Route",
    image: "/assets/projects/eight.jpeg",
    tag: ["All"],
    previewUrl: "https://tinyurl.com/xezyweb4Residence",
  },
  {
    id: 9,
    title: "Newbie Affiliate Marketing Expo (NAME)",
    description:
      "This programme gives you a thorough introduction to affiliate marketing",
    image: "/assets/projects/nine.jpeg",
    tag: ["All", "Finance"],
    previewUrl: "https://tinyurl.com/5eydh4wn",
  },
  {
    id: 10,
    title: "Google Ads System For Real Estate Marketers",
    description:
      "The Google Ads System for Real Estate Marketers enables you to use the power of Google Ads to transform your real estate business",
    image: "/assets/projects/ten.jpeg",
    tag: ["All", "Finance"],
    previewUrl: "https://tinyurl.com/s9um7v6y",
  },
  {
    id: 11,
    title: "The Ultimate Guide to Building an Automated Sales System",
    description:
      "Take control of your sales process by using. The Ultimate Guide to Building an Automated Sales System",
    image: "/assets/projects/eleven.jpg",
    tag: ["All", "Finance"],
    previewUrl: "https://tinyurl.com/yavrpmjk",
  },
  {
    id: 12,
    title: "Car Money Blueprint",
    description:
      "The Car Money Blueprint will reveal the secrets of making money with your car",
    image: "/assets/projects/twelve.jpeg",
    tag: ["All", "Finance"],
    previewUrl: "https://tinyurl.com/2njmz768",
  },
  {
    id: 13,
    title: "The Canada Japa Work Permit Handbook",
    description:
      "Dreaming about working in Canada? The Canada Japa Work Permit Handbook is your vital guide to getting it done",
    image: "/assets/projects/thirteen.jpeg",
    tag: ["All"],
    previewUrl: "https://tinyurl.com/mr363wnr",
  },
  {
    id: 14,
    title: "Ghostwriting Income Generator",
    description:
      "With the Ghostwriting Income Generator, you can discover how to create a consistent income",
    image: "/assets/projects/fourteen.jpeg",
    tag: ["All", "Finance"],
    previewUrl: "https://tinyurl.com/3fu3samk",
  },
  {
    id: 15,
    title: "YouTube Growth and Monetization Blueprint",
    description:
      "Are you ready to transform your YouTube love into a profitable venture? The YouTube Growth and Monetization Blueprint is your comprehensive guide",
    image: "/assets/projects/fifteen.jpeg",
    tag: ["All", "Finance"],
    previewUrl: "https://tinyurl.com/mrxnzt27",
  },
  {
    id: 16,
    title: "Sell More with Jiji, Jumia, and Konga",
    description:
      "Get the most out of your online business by using our in-depth tutorial, Sell More with Jiji, Jumia, and Konga",
    image: "/assets/projects/sixteen.jpeg",
    tag: ["All", "Finance"],
    previewUrl: "https://tinyurl.com/3m5c29ww",
  },
  {
    id: 17,
    title: "Affiliate Beginners Course (ABC)",
    description:
      "With our Affiliate Beginners Course (ABC), get started on your path to affiliate marketing!",
    image: "/assets/projects/seventeen.jpeg",
    tag: ["All", "Finance"],
    previewUrl: "https://tinyurl.com/36nybvxs",
  },
  {
    id: 18,
    title: "Virtual Assistant Dollar Program",
    description:
      "The Virtual Assistant Dollar Programme can help you reach your full potential!",
    image: "/assets/projects/eighteen.jpeg",
    tag: ["All", "Finance"],
    previewUrl: " https://tinyurl.com/5ceavsj9 ",
  },
];

const Projects: React.FC = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef<HTMLUListElement>(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="px-5 md:px-20">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Finance"
          isSelected={tag === "Finance"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Relationship"
          isSelected={tag === "Relationship"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
