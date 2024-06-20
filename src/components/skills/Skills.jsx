import SectionTitle from "../../shared/SectionTitle";
import SkillsTopic from "./SkillsTopic";

function Skills() {
  return (
    <>
      <section className="py-4 md:py-6">
        {/* skills title */}
        <SectionTitle
          title="My Skills"
          desc="I transform your ideas and wishes into unique web projects that
          inspire both you and your customers."
        ></SectionTitle>
        {/* skills topic */}
        <SkillsTopic></SkillsTopic>
      </section>
    </>
  );
}

export default Skills;
