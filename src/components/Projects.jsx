import Project from "./Project";

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col items-center scroll-m-32">
      <h2 className="text-3xl poppins-semibold text-slate-800  text-center">
        Projects
      </h2>
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
    </div>
  );
};
export default Projects;
