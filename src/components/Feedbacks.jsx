import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { sectionwrapper } from "../hoc";

const Feedbacks = () => {
  return (
    <div className="bg-slate-800 h-56 w-full">
      <motion.div className=""
        variants={fadeIn("left", "spring", 1, 0.75)}
        initial="hidden"
        whileInView="show"
      >
        uyg
      </motion.div>
    </div>
  );
};

export default sectionwrapper(Feedbacks,"");
