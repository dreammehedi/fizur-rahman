import skillsTopicData from "./SkillsTopicData";
function SkillsTopic() {
  return (
    <>
      <section className="py-8 md:py-10 lg:py-12">
        <div className="container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 ">
          {skillsTopicData.map((skill, ind) => {
            return (
              <div
                key={ind}
                className="text-center cursor-pointer my-transition space-y-3 text-primary font-semibold"
              >
                <div className="group bg-main-bg p-6 md:p-8 rounded-xl flex flex-col justify-center items-center space-y-3 my-transition grayscale hover:grayscale-0 text-center ring-1 ring-ring-color">
                  <img
                    src={skill?.icon}
                    className="size-[90px] my-transition group-hover:animate-bounce object-cover"
                    alt=""
                  />
                  <span className="text-[18px]">{skill?.skillsPercentage}</span>
                </div>

                <h5 className="font-medium">{skill?.title}</h5>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default SkillsTopic;
