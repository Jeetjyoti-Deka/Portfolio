import { motion } from "framer-motion";

const ScrollDown = () => {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          opacity: 1,
          y: -50,
        }}
        transition={{
          delay: 2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.3,
          duration: 1,
        }}
        className="w-10 h-10"
      >
        <img
          src="/public/chevrolet-down.svg"
          alt="arrow down"
          className="object-contain"
        />
      </motion.div>
    </div>
  );
};
export default ScrollDown;
