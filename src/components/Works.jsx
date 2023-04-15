import React from "react";
import { styles } from "../style";
import { motion } from "framer-motion";
import { git, github } from "../assets";
import { sectionwrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, slideIn, textVariants } from "../utils/motion";
import { Tilt } from "react-tilt";
import { Link } from "react-router-dom";

const ProjectCard = ({
  projectId,
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  project_link,
}) => (
  <motion.div
    variants={fadeIn("up", "tween", 0.5, 0.6 * (index + 1))}
    initial="hidden"
    whileInView="show"
  >
    <Tilt
      className="bg-[#1c1b24] p-5 rounded-2xl sm:w-[360px] max-w-xs transition-all duration-500 ease-out overflow-hidden  hover:duration-700 hover:bg-[#1A202C]"
      options={{
        max: 30,
        speed: 450,
        scale: 1.1,
        perspective: 1000,
        reverse: true,
      }}
    >
      <div className="inset-0 relative overflow-hidden">
          <a href={project_link} target="_blank">
            <img src={image} alt="project img" />
          <div className="absolute inset-0 flex justify-end">
            <div className=" black-gradient w-10 h-10 m-2 rounded-full">
              <a href={source_code_link} target="_blank">
                <img className="p-0.5" src={github} alt="Github" />
              </a>
            </div>
          </div>
          </a>
        <h3 className="mt-3 text-white font-bold text-xl">{name}</h3>

        <p className="text-secondary text-[14px] mt-2">{description}</p>
        {tags.map((tag, index) => (
          <p className={`${tag.color}`}>#{tag.name}</p>
        ))}
      </div>
    </Tilt>
  </motion.div>
);

const Works = () => {
  return (
    <>
      <motion.p
        variants={slideIn("left", "spring", 0.5, 0.4)}
        initial="hidden"
        whileInView="show"
        className={`${styles.sectionSubText} hover:underline hover:underline-offset-4 hover:decoration-sky-600 transition-all duration-500`}
      >
        My works
      </motion.p>
      <motion.h2
        variants={slideIn("left", "spring", 0.6, 0.5)}
        initial="hidden"
        whileInView="show"
        className={`${styles.sectionHeadText} hover:underline hover:underline-offset-8 hover:decoration-sky-600 transition-all duration-150`}
      >
        Projects.
      </motion.h2>

      <motion.div
        variants={fadeIn("up", "spring", 0.7, 0.5)}
        initial="hidden"
        whileInView="show"
        className="mt-7"
      >
        <p>
          I poured my heart and soul into this project, and by the end of it, I
          think I had more bugs than lines of code.
        </p>
        <p className={`mt-4`}>
          I thought my project was pretty impressive, until I showed it to my
          grandma and she said, 'That's nice, dear.'
        </p>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={project.projectId} {...project} index={index} />
        ))}
      </div>
    </>
  );
};

export default sectionwrapper(Works, "");
