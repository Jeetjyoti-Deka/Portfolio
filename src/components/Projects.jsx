import { PROJECTS } from "../lib/constants";
import Project from "./Project";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col gap-y-10 items-center scroll-m-32"
    >
      <h2 className="text-3xl poppins-semibold text-slate-800 text-center">
        Projects
      </h2>
      {PROJECTS.map((project, i) => (
        <Project project={project} key={i} />
      ))}
    </div>
  );
};
export default Projects;
