const Hero = () => {
  return (
    <div className="flex items-center justify-center w-full h-[85vh]">
      <div className="flex items-center gap-x-10 ml-52">
        <div className="flex items-center justify-center">
          <div className="group w-64 h-64  rounded-[8px] relative z-10">
            <div className="w-64 h-64 absolute -top-2 -left-2 rounded-[8px] bg-red-500 -z-10 shadow-md group-hover:top-0 group-hover:left-0 transition-all"></div>
            <img
              src="src/assets/Profile_img.jpg"
              alt="my img"
              className="w-full h-full object-cover rounded-[8px]"
            />
          </div>
        </div>

        <div className="w-[600px]">
          <section className="w-full">
            <h1 className="text-7xl text-red-500 mb-4 poppins-semibold">
              Hello!
            </h1>
            <p className="text-4xl text-slate-600 poppins-semibold tracking-wider leading-[49px]">
              I&apos;m Jeetjyoti, <br />a Full-Stack Web Developer <br />
              based in Assam, India
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Hero;
