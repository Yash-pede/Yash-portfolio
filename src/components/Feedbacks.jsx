import React from "react";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../utils/motion";
import { sectionwrapper } from "../hoc";
import { testimonials } from "../constants";
import { styles } from "../style";
import { Tilt } from "react-tilt";

const FeedbackCard = ({ testimonial, name, image, key }) => (
  <motion.div
    className=""
    variants={slideIn("up", "spring", 0.7, key * 0.6)}
    initial="hidden"
    whileInView="show"
  >
    <Tilt
      options={{
        max: 25,
        scale: 1.1,
        perspective: 1000,
      }}
      className={`${styles.padding} bg-tertiaryp-5 rounded-2xl sm:w-[360px] w-full transition-all duration-500 ease-out overflow-hidden  hover:duration-700 hover:bg-[#1A202C] `}
    >
      <div className="space-y-7 ">
        <div className="flex flex-row justify-start items-center md:space-x-7 sm:space-x-5 space-x-6 ">
          <img
            src={image}
            alt="not found"
            className="sm:h-16 rounded-full md:h-20 h-10"
          />
          <p className={`${styles.sectionSubText}`}>{name}</p>
        </div>
        <p className="text-secondary text-[14px]">{testimonial}</p>
      </div>
    </Tilt>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`bg-slate-800 w-full rounded-2xl ${styles.paddingY}`}>
      <motion.div
        className=""
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
      >
        <p className={`${styles.sectionSubText} ${styles.paddingX}`}>
          What others have to say{" "}
        </p>
        <h2 className={`${styles.paddingX} ${styles.sectionHeadText}`}>
          Testimonials.
        </h2>

        <div className="flex flex-wrap justify-center items-center overscroll-none">
          {testimonials.map((testimonial, index) => (
            <FeedbackCard
              key={index}
              testimonial={testimonial.testimonial}
              {...testimonial}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default sectionwrapper(Feedbacks, "");
