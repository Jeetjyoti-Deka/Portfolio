/* eslint-disable react/prop-types */
import StatusBar from "./StatusBar";
import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Status = ({ title, value }) => {
  return (
    <motion.div
      variants={item}
      className="w-[100%] sm:w-[70%] flex items-center gap-x-4 px-4 sm:px-0"
    >
      <p className="w-20 sm:w-24 poppins-medium text-sm sm:text-lg">{title}</p>
      <div className="flex-1 border-2 border-slate-500 p-[2px] rounded-[8px]">
        <StatusBar status={value} />
      </div>
    </motion.div>
  );
};
export default Status;
