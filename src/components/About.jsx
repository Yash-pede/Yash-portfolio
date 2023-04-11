import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { fadeIn, textVariants } from "../utils/motion";
import { skills } from "../constants";
import { sectionwrapper } from "../hoc";


const Skillcard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full shadow-2xl shadow-purple-400/50 hover:shadow-lg rounded-2xl">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.75, 0.75)}
      className="w-full green-pink-gradient p-[2px] rounded-xl"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-2xl py-5 px-1 min-h-[280px] flex flex-col justify-evenly items-center"
      >
        <img src={icon} alt="{title}" className="w-16 h-16 object-contain" />

        <h3 className="text-white text-lg font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariants()}
        initial="hidden"
        whileInView="show"
        className="mt-52"
        id="about"
      >
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview</h2>
        <motion.p
          variants={fadeIn("up", "tween", 0.7, 0.6)}
          initial="hidden"
          whileInView="show"
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Hey there, internet amigos! I'm Yash - a nerd extraordinaire with a
          knack for procrasti-wait, what was I saying again? Oh yeah, coding!
          When I'm not busy avoiding responsibility, you can find me geeking out
          over Python or getting creative with React. And let's be real, who
          needs a social life when you have a computer and a pizza delivery guy
          on speed dial? But don't let my love for solitude fool you - I'm a
          coding superstar, and I'm always up for a challenge. So if you want to
          hang out and make some tech magic happen, then hit me up and let's get
          weird!
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-16">
          {skills.map((skill, index) => (
            <Skillcard key={skill.title} index={index} {...skill} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default sectionwrapper(About,"about");
