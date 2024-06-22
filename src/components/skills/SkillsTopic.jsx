import SkillTopicItem from "./SkillTopicItem";
import {
  backEndSkillsTopicData,
  frontEndSkillsTopicData,
  otherSkillsTopicData,
} from "./SkillsTopicData";
function SkillsTopic() {
  return (
    <>
      <section className="py-8 md:py-10 lg:py-12">
        <div className="container">
          {/* front-end technology */}
          <div className="mb-4 w-full md:max-w-2xl md:mr-auto">
            <h3 className="text-2xl text-primary font-semibold mb-4">
              Front-End Technology
            </h3>
            <p>
              Front-end technology encompasses the tools and frameworks used to
              create the user interface (UI) and user experience (UX) of a
              website or web application. It focuses on what users see and
              interact with directly.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {frontEndSkillsTopicData?.map((skill, ind) => {
              return (
                <SkillTopicItem key={ind} skillItem={skill}></SkillTopicItem>
              );
            })}
          </div>

          {/* back-end technology */}
          <div className="mt-8 md:mt-10 lg:mt-12 w-full md:max-w-2xl md:mr-auto">
            <h3 className="text-2xl text-primary font-semibold mb-4">
              Back-End Technology
            </h3>
            <p>
              Backend technology involves the server-side development of web
              applications. It focuses on database interactions, server logic,
              and application performance.
            </p>
          </div>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {backEndSkillsTopicData?.map((skill, ind) => {
              return (
                <SkillTopicItem key={ind} skillItem={skill}></SkillTopicItem>
              );
            })}
          </div>

          {/* other technology */}
          <div className="mt-8 md:mt-10 lg:mt-12 w-full md:max-w-5xl md:mr-auto">
            <h3 className="text-2xl text-primary font-semibold mb-4">
              Others Technology
            </h3>
            <p>
              In my projects, I use npm for efficient package management, Git
              and GitHub for robust version control and seamless collaboration,
              Visual Studio Code for streamlined coding experiences, Adobe
              Photoshop for sophisticated graphic design tasks, and Pixso for
              precise image processing. These technologies collectively benefit
              my projects by enhancing productivity, ensuring code reliability
              through version control, facilitating efficient coding with
              powerful IDE features, enabling visually appealing designs, and
              ensuring high-quality image processing for enhanced user
              interfaces and graphics.
            </p>
          </div>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {otherSkillsTopicData?.map((skill, ind) => {
              return (
                <SkillTopicItem key={ind} skillItem={skill}></SkillTopicItem>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default SkillsTopic;
