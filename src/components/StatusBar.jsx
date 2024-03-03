/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const StatusBar = ({ status }) => {
  return (
    <motion.div
      className=" bg-slate-900 h-3 origin-left rounded-[8px] "
      style={{ scaleX: `${status}%` }}
    ></motion.div>
  );
};
export default StatusBar;
