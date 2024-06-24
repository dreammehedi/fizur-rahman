import SectionTitle from "../../shared/SectionTitle";
import ProjectItems from "./ProjectItems";

function RecentProject() {
  return (
    <>
      <section className="py-4 md:py-6" id="projects">
        {/* recent title */}
        <SectionTitle
          title="Recent Project"
          desc="Here are some of my latest projects, where I've applied my skills in front-end development and UX design to create engaging, user-friendly websites. Each project reflects my commitment to transforming ideas into unique web experiences that inspire clients and users."
        ></SectionTitle>

        {/* recent project items */}
        <ProjectItems></ProjectItems>
      </section>
    </>
  );
}

export default RecentProject;
