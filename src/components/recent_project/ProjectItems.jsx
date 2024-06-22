import ProjectItem from "./ProjectItem";
import projectItemsData from "./ProjectItemsData";
function ProjectItems() {
  return (
    <>
      <section className="py-8 md:py-10 lg:py-12">
        <div className="container grid grid-cols-1 gap-4 md:gap-6">
          {projectItemsData.map((projectItem, ind) => {
            return (
              <ProjectItem key={ind} projectItem={projectItem}>
                <div className="cursor-pointer w-full overflow-hidden grid-cols-1 grid lg:grid-cols-2 gap-6 md:gap-8">
                  <img
                    className="w-full h-[500px] object-fill rounded-xl p-2"
                    src={projectItem?.imgURL1}
                    alt=""
                  />
                  <img
                    className="w-full h-[500px] object-fill rounded-xl p-2"
                    src={projectItem?.imgURL2}
                    alt=""
                  />
                </div>
              </ProjectItem>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default ProjectItems;
