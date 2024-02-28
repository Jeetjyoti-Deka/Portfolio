const Hero = () => {
  return (
    <div className="flex items-center justify-center w-screen h-[90vh]">
      <div className="flex items-center gap-x-10 ml-52">
        <div className="flex items-center justify-center">
          <div className="w-64 h-64 overflow-hidden rounded-[8px]">
            <img
              src="src/assets/hero-img.jpg"
              alt="my img"
              className="w-full h-full object-cover"
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
