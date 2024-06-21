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
                    <span className="text-[18px]">
                      {skill?.skillsPercentage}
                    </span>
                  </div>

                  <h5 className="font-medium">{skill?.title}</h5>
                </div>
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
                    <span className="text-[18px]">
                      {skill?.skillsPercentage}
                    </span>
                  </div>

                  <h5 className="font-medium">{skill?.title}</h5>
                </div>
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
                    <span className="text-[18px]">
                      {skill?.skillsPercentage}
                    </span>
                  </div>

                  <h5 className="font-medium">{skill?.title}</h5>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default SkillsTopic;
