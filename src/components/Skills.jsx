import React, { useRef, useState } from "react";
import { SKILLS } from "../lib/constants";
import { useInView, motion, AnimatePresence } from "framer-motion";
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

const status_container = {
  hidden: { opacity: 0, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 1.1,
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
      className="flex flex-col items-center py-4 mb-20 lg:mb-40 scroll-m-28"
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
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
        transition={{
          delay: 1,
          type: "spring",
          stiffness: 100,
          duration: 0.6,
        }}
        // className="relative bg-slate-200 w-[300px] xs:w-[400px] sm:w-[500px] md:w-[700px] rounded-[8px] my-10 h-96 flex flex-col items-center gap-y-4 py-4"
      >
        <div className="min-h-96">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 50, transition: { delay: 0.5 } }}
              animate={{ opacity: 1, x: 0, transition: { delay: 0.5 } }}
              exit={{ x: 50, opacity: 0, transition: { duration: 0.3 } }}
              className="relative bg-slate-200 w-[300px] xs:w-[400px] sm:w-[600px] md:w-[700px] rounded-[8px] my-10 flex flex-col items-center gap-y-4 pt-4 pb-8"
            >
              <motion.h2
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.8,
                }}
                className="poppins-medium text-lg"
              >
                {active}
              </motion.h2>
              <motion.p
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1,
                }}
                className="px-4 sm:px-6 poppins-regular text-center"
              >
                {SKILLS.filter((skill) => skill.name == active)[0].description}
              </motion.p>
              <motion.div
                key={active}
                variants={status_container}
                initial="hidden"
                animate="visible"
                className="flex w-full flex-col items-center gap-y-4"
              >
                {SKILLS.filter((skill) => skill.name === active).map(
                  (skill, i) => (
                    <React.Fragment key={i}>
                      <Status title={"Knowledge"} value={skill.knowledge} />
                      <Status title={"Experience"} value={skill.experience} />
                      <Status title={"Creativity"} value={skill.creativity} />
                    </React.Fragment>
                  )
                )}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
export default Skills;
