import React, { useRef, useState } from "react";
import { SKILLS } from "../lib/constants";
import { useInView, motion } from "framer-motion";
import Skill from "./Skill";
import Status from "./Status";

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

const Skills = () => {
  const [active, setActive] = useState("React");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <div
      ref={ref}
      id="skills"
      className="flex flex-col items-center py-4 scroll-m-28"
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
        className="text-3xl poppins-semibold text-slate-800 mb-6"
      >
        My Skills
      </motion.h1>
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView && "visible"}
        className="flex items-center justify-center flex-wrap gap-y-4 px-4"
      >
        {SKILLS.map((skill, i) => {
          const isActive = active === skill.name;
          return (
            <Skill
              key={i}
              skill={skill.name}
              isActive={isActive}
              setActive={setActive}
            />
          );
        })}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative bg-slate-200 w-[700px] rounded-[8px] my-10 h-96 flex flex-col items-center gap-y-4"
      >
        {SKILLS.filter((skill) => skill.name === active).map((skill, i) => (
          <React.Fragment key={i}>
            <Status title={"Knowledge"} value={skill.knowledge} />
            <Status title={"Experience"} value={skill.experience} />
            <Status title={"Creativity"} value={skill.creativity} />
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
export default Skills;
