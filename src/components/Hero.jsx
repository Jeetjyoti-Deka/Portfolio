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
    <div
      id="home"
      className="flex items-center justify-center w-full h-[100vh]"
    >
      <div className="flex flex-col lg:flex-row items-center gap-x-10 sm:mt-32 lg:mt-0 lg:ml-52">
        <div className="flex items-center justify-center">
          <div className="group w-40 sm:w-64 h-40 sm:h-64 mb-10 lg:mb-0 rounded-[8px] relative z-10">
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
              className="w-16 sm:w-32 h-16 sm:h-32 absolute top-0 left-0 rounded-[4px] bg-red-500 -z-10 shadow-lg"
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
              src="/public/Profile_img.jpg"
              alt="my img"
              className="w-full h-full object-cover rounded-[8px]"
            />
            <motion.div
              initial={{
                x: 0,
                y: 0,
                opacity: 0,
              }}
              animate={{
                x: 10,
                y: 10,
                opacity: 1,
              }}
              transition={{
                delay: 1,
                duration: 0.2,
              }}
              className="w-16 sm:w-32 h-16 sm:h-32 absolute bottom-0 right-0 rounded-[4px] bg-blue-500 -z-10 shadow-lg"
            ></motion.div>
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
              className="text-5xl sm:text-7xl text-center lg:text-left text-red-500 mb-4 poppins-semibold"
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
              className="text-xl sm:text-4xl text-center lg:text-left text-slate-600 poppins-semibold sm:tracking-wider sm:leading-[49px]"
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
