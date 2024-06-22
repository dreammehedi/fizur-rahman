import PropTypes from "prop-types";
import { FaGithub, FaLink } from "react-icons/fa6";

function ProjectItem({ projectItem, children }) {
  const { title, description, technology, liveLink, githubClientLink } =
    projectItem;
  return (
    <>
      <div className="bg-main-bg dark:bg-gray-900 dark:ring-gray-800 p-6 rounded-xl space-y-3 ring-1 ring-ring-color">
        {children}

        <h2 className="font-semibold text-2xl bg-gradient-main-bg text-transparent bg-clip-text">
          {title}
        </h2>
        <p className="text-sm">{description}</p>
        <div className="flex flex-wrap justify-start gap-4 md:gap-6 items-center">
          {technology?.map((technology, ind) => {
            return (
              <button
                key={ind}
                className="group project-tech-btn my-transition animate-none hover:animate-bounce"
              >
                <span className="relative z-10 group-hover:text-white dark:text-white text-sm">
                  {technology}
                </span>
                <span className="absolute inset-0 overflow-hidden rounded-md">
                  <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-primary transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                </span>
              </button>
            );
          })}
        </div>
        <div className="pt-4 flex flex-wrap justify-start gap-4 md:gap-6">
          <a
            className="my-transition animate-none hover:animate-bounce"
            href={liveLink}
            target="_blank"
          >
            <button className="group project-tech-btn !bg-primary hover:!bg-primary/60">
              <span className="relative z-10 group-hover:text-primary dark:group-hover:text-white text-white flex items-center gap-2 text-sm">
                Live Link <FaLink className="text-xl text-white"></FaLink>
              </span>
              <span className="absolute inset-0 overflow-hidden rounded-md">
                <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-white/20 my-transition group-hover:-translate-x-0 group-hover:scale-150"></span>
              </span>
            </button>
          </a>
          <a
            className="my-transition animate-none hover:animate-bounce"
            href={githubClientLink}
            target="_blank"
          >
            <button className="group project-tech-btn !bg-primary hover:!bg-primary/60">
              <span className="relative z-10 group-hover:text-primary dark:group-hover:text-white text-white flex items-center gap-2 text-sm">
                Client Side <FaGithub className="text-xl text-white"></FaGithub>
              </span>
              <span className="absolute inset-0 overflow-hidden rounded-md">
                <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-white/20 my-transition group-hover:-translate-x-0 group-hover:scale-150"></span>
              </span>
            </button>
          </a>{" "}
          {projectItem?.githubServerLink && (
            <a
              className="my-transition animate-none hover:animate-bounce"
              href={projectItem?.githubServerLink}
              target="_blank"
            >
              <button className="group project-tech-btn !bg-primary hover:!bg-primary/60">
                <span className="relative z-10 group-hover:text-primary dark:group-hover:text-white text-white flex items-center gap-2 text-sm">
                  Server Side{" "}
                  <FaGithub className="text-xl text-white"></FaGithub>
                </span>
                <span className="absolute inset-0 overflow-hidden rounded-md">
                  <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-white/20 my-transition group-hover:-translate-x-0 group-hover:scale-150"></span>
                </span>
              </button>
            </a>
          )}
        </div>
      </div>
    </>
  );
}
ProjectItem.propTypes = {
  projectItem: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};
export default ProjectItem;
