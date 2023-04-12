import React from "react";
import { styles } from "../style";
import { motion } from "framer-motion";
import { git, github } from "../assets";
import { sectionwrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, slideIn, textVariants } from "../utils/motion";
import { Tilt } from "react-tilt";

const ProjectCard = ({
  key,
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  project_link,
}) => (
  <motion.div
    variants={fadeIn("left", "spring", 0.5, 0.5 * index)}
    initial="hidden"
    whileInView="show"
  >
    <Tilt
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      options={{
        max: 30,
        speed: 450,
        scale: 1.1,
        perspective: 1000,
        reverse: true,
      }}
    >
      <a href={project_link} className="cursor-pointer" target="_blank">
        <div className="relative w-full">
          <img
            src={image}
            alt={name}
            className=" rounded-2xl w-full h-full object-cover "
          />
          <div className="absolute inset-0 flex justify-end m-2">
            <div className="flex justify-center items-center w-10 h-10 black-gradient rounded-full cursor-pointer">
              <a
                href={source_code_link}
                className="flex justify-center items-center"
                target="_blank"
              >
                <img src={github} alt={name} className="w-1/2 h-1/2 " />
              </a>
            </div>
          </div>
          <h3 className="mt-3 text-white font-bold text-xl">{name}</h3>

          <p className="text-secondary text-[14px] mt-2">{description}</p>
          <div className="flex flex-wrap gap-7 justify-start items-center">
            {tags.map((tag, index) => (
              <p className={`${tag.color} cursor-pointer`}>#{tag.name}</p>
            ))}
          </div>
        </div>
      </a>
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
          grandma and she said, 'That's nice, dear.
        </p>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`${project - { index }}`}
            {...project}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default sectionwrapper(Works, "");
