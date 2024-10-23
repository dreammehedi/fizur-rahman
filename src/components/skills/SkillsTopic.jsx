import SkillTopicItem from "./SkillTopicItem";
import { frontEndSkillsTopicData } from "./SkillsTopicData";
function SkillsTopic() {
  return (
    <>
      <section className="py-8 md:py-10 lg:py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {frontEndSkillsTopicData?.map((skill, ind) => {
              return (
                <SkillTopicItem key={ind} skillItem={skill}></SkillTopicItem>
              );
            })}
          </div>

          {/* <div className="mt-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {otherSkillsTopicData?.map((skill, ind) => {
              return (
                <SkillTopicItem key={ind} skillItem={skill}></SkillTopicItem>
              );
            })}
          </div> */}
        </div>
      </section>
    </>
  );
}

export default SkillsTopic;
