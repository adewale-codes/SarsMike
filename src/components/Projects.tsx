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
