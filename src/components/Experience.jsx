import React from "react";
import { color, motion } from "framer-motion";
import { slideIn, staggerContainer } from "../utils/motion";
import { sectionwrapper } from "../hoc";
import { styles } from "../style";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";

const ExperianceComponent = ({
  title,
  key,
  iconBg,
  icon,
  date,
  company_name,
  points,
}) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    iconStyle={{ background: iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={icon}
          alt={title}
          className="object-contain w-[70%] h-[70%]"
        />
      </div>
    }
    date={date}
  >
    <div className="text-white text-[24px] font-semibold">
      <h3>{title}</h3>
      <p className="text-secondary text-[16px] font-semibold">{company_name}</p>
    </div>

    <ul className="mt-5 list-disc mx-3">
      {points.map((point, index) => (
        <li key={key} className="to-white p-1">{point}</li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={staggerContainer}>
        <motion.p
          variants={slideIn("left", "spring", 0.5, 0.4)}
          initial="hidden"
          whileInView="show"
          className={`${styles.sectionSubText}`}
        >
          What have i done so far
        </motion.p>
        <motion.h2
          variants={slideIn("left", "spring", 0.6, 0.5)}
          initial="hidden"
          whileInView="show"
          className={`${styles.sectionHeadText}`}
        >
          Experiances
        </motion.h2>
      </motion.div>

      <div className="mt20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperianceComponent key={index} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default sectionwrapper(Experience, "experience");
