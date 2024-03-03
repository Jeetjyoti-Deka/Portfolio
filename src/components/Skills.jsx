import { useRef } from "react";
import { SKILLS } from "../lib/constants";
import { useInView, motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <div
      ref={ref}
      id="skills"
      className="flex flex-col items-center overflow-y-hidden py-4 scroll-mt-96"
    >
      <motion.h1
        initial={{
          y: 10,
          opacity: 0,
        }}
        animate={{
          y: isInView ? 0 : 10,
          opacity: isInView ? 1 : 0,
        }}
        transition={{
          delay: 0.4,
          duration: 0.4,
        }}
        className="text-3xl poppins-semibold text-slate-800 mb-6 "
      >
        My Skills
      </motion.h1>
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView && "visible"}
        className="flex items-center justify-center flex-wrap gap-y-4 px-4"
      >
        {SKILLS.map((skill, i) => (
          <motion.p
            variants={item}
            whileHover={{
              scale: 1.1,
            }}
            className="bg-slate-200 poppins-medium mx-2 px-4 py-2 rounded-full cursor-pointer hover:text-white hover:bg-slate-700 transition-colors"
            key={i}
          >
            {skill}
          </motion.p>
        ))}
      </motion.div>
    </div>
  );
};
export default Skills;
