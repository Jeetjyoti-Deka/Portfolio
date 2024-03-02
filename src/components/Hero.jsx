import { motion } from "framer-motion";
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

const Hero = () => {
  return (
    <div className="flex items-center justify-center w-full h-[85vh]">
      <div className="flex items-center gap-x-10 ml-52">
        <div className="flex items-center justify-center">
          <div className="group w-64 h-64  rounded-[8px] relative z-10">
            <motion.div
              initial={{
                x: 0,
                y: 0,
                opacity: 0,
              }}
              animate={{
                x: -10,
                y: -10,
                opacity: 1,
              }}
              transition={{
                delay: 1,
                duration: 0.2,
              }}
              className="w-64 h-64 absolute top-0 left-0 rounded-[8px] bg-red-500 -z-10 shadow-md"
            ></motion.div>
            <motion.img
              initial={{
                scale: 0.3,
                opacity: 0.5,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.4,
              }}
              src="src/assets/Profile_img.jpg"
              alt="my img"
              className="w-full h-full object-cover rounded-[8px]"
            />
          </div>
        </div>

        <div className="w-[600px]">
          <section className="w-full">
            <motion.h1
              variants={container}
              initial="hidden"
              animate="visible"
              transition={{
                delay: 0.4,
              }}
              className="text-7xl text-red-500 mb-4 poppins-semibold"
            >
              {"Hello!".split("").map((c, i) => (
                <motion.span variants={item} key={i}>
                  {c}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              variants={container}
              initial="hidden"
              animate="visible"
              className="text-4xl text-slate-600 poppins-semibold tracking-wider leading-[49px]"
            >
              {"I'm Jeetjyoti,".split(" ").map((c, i) => (
                <motion.span className="mx-1" variants={item} key={i}>
                  {c}
                </motion.span>
              ))}{" "}
              <br />
              {"a Full-Stack Web Developer".split(" ").map((c, i) => (
                <motion.span className="mx-1" variants={item} key={i}>
                  {c}
                </motion.span>
              ))}{" "}
              <br />
              {"based in Assam, India".split(" ").map((c, i) => (
                <motion.span className="mx-1" variants={item} key={i}>
                  {c}
                </motion.span>
              ))}
            </motion.p>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Hero;
