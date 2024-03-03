/* eslint-disable react/prop-types */
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Badge from "./Badge";

const Project = ({ project }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 1 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.9 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  return (
    <motion.div
      style={{
        opacity: opacityProgress,
        scale: scaleProgress,
      }}
      ref={ref}
      className="flex gap-x-6 items-start justify-center py-4 px-6 rounded-[4px] my-10 hover:bg-slate-100 transition-colors relative"
    >
      <div className="w-[450px] relative">
        <motion.div
          initial={{
            x: 0,
            y: 0,
            opacity: 0,
          }}
          animate={
            isInView && {
              x: -10,
              y: -10,
              opacity: 1,
            }
          }
          transition={{
            delay: 0.5,
            duration: 0.2,
          }}
          className="w-32 h-32 absolute top-0 left-0 rounded-[4px] bg-red-500 -z-10 shadow-md"
        ></motion.div>
        <img src={project?.img} alt={project.name} className="object-contain" />
        <motion.div
          initial={{
            x: 0,
            y: 0,
            opacity: 0,
          }}
          animate={
            isInView && {
              x: 10,
              y: 10,
              opacity: 1,
            }
          }
          transition={{
            delay: 0.5,
            duration: 0.2,
          }}
          className="w-32 h-32 absolute bottom-0 right-0 rounded-[4px] bg-blue-500 -z-10 shadow-md"
        ></motion.div>
      </div>
      <div>
        <h2 className="poppins-semibold text-2xl mt-2">{project?.name}</h2>
        <p className="poppins-regular max-w-[550px] mt-4 tracking-wide flex items-center justify-start flex-wrap gap-y-2">
          <span className="poppins-medium text-xl">Tech Stack</span>:
          {project?.tech_stack?.map((item, i) => (
            <Badge value={item} key={i} />
          ))}
        </p>
        <motion.a
          whileHover={{
            scale: 1.03,
            y: -2,
          }}
          href={project?.live_link}
          target="_blank"
          className="bg-green-500 py-2 px-4 rounded-full mt-6 text-white flex items-center gap-x-2 w-fit text-lg poppins-light"
        >
          Live Website
          <div className="w-4">
            <img
              src="src/assets/link_arrow.svg"
              alt="arrow"
              className="object-contain invert"
            />
          </div>
        </motion.a>
      </div>
    </motion.div>
  );
};
export default Project;
