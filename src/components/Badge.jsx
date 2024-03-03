/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Badge = ({ value, isActive = false }) => {
  return (
    <motion.p
      variants={item}
      whileHover={{
        scale: 1.1,
      }}
      className={`bg-slate-200 poppins-medium mx-2 px-4 py-2 rounded-full cursor-pointer hover:text-white hover:bg-slate-700 transition-colors ${
        isActive && "text-white bg-slate-700"
      }`}
      onClick={() => {
        if (!isActive) {
          isActive = true;
        }
      }}
    >
      {value}
    </motion.p>
  );
};
export default Badge;
