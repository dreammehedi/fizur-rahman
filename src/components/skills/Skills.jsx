import SectionTitle from "../../shared/SectionTitle";
import SkillsTopic from "./SkillsTopic";

function Skills() {
  return (
    <>
      <section className="py-4 md:py-6" id="skills">
        {/* skills title */}
        <SectionTitle
          title="My Skills"
          desc="As a Flutter developer, I bring your ideas to life with cross-platform mobile apps that deliver seamless performance, beautiful interfaces, and native-like experiences on both iOS and Android."
        ></SectionTitle>
        {/* skills topic */}
        <SkillsTopic></SkillsTopic>
      </section>
    </>
  );
}

export default Skills;
