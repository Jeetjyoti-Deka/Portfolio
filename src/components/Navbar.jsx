import { NAV_LINKS } from "../lib/constants";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        delay: 0.3,
        duration: 0.2,
        type: "spring",
        stiffness: 130,
      }}
      className="fixed top-0 left-0 w-screen h-20 px-6 bg-white z-50 flex items-center justify-between border-b-2 border-solid shadow-md"
    >
      <h1 className="poppins-medium text-xl sm:text-2xl">Jeetjyoti Deka</h1>
      <div className="sm:flex items-center gap-x-6 hidden">
        {NAV_LINKS.map((link) => (
          <a
            className="poppins-medium text-lg"
            key={link.route}
            href={link.route}
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="sm:hidden block w-6 h-6">
        <img
          src="src/assets/menu.svg"
          alt="menu"
          className="w-full h-full object-contain"
        />
      </div>
    </motion.nav>
  );
};
export default Navbar;
