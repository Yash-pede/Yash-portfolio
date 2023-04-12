import React from "react";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import { sectionwrapper } from "../hoc";
import { styles } from "../style";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <h2 className={`${styles.heroSubText}`}>
        Behold, my balls of tech! They're so big, they put Elon Musk's rockets
        to shame.
      </h2>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((tech, index) => (
          <div key={index} className="w-28 h-28">
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>
      <motion.h2
        className={`${styles.heroSubText} uppercase mt-5`}
        variants={slideIn("left", "spring", 3, 0.5)}
        initial="hidden"
        whileInView="show"
      >
        Spin It fast
      </motion.h2>
    </>
  );
};

export default sectionwrapper(Tech, "");
