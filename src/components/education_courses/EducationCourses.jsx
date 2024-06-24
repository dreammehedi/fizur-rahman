import educationData from "./EducationData";

function EducationCourses() {
  return (
    <>
      <section id="works" className="py-4 md:py-6">
        <div className="container w-full md:max-w-5xl md:mx-auto">
          <h2 className="bg-gradient-main-bg text-transparent bg-clip-text text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
            Education & Courses
          </h2>
          <div className="mt-6 md:mt-8 rounded-xl ring-1 ring-ring-color p-4 md:p-6 bg-main-bg dark:bg-gray-900 dark:ring-gray-800 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="">
              <h3 className="text-2xl text-primary font-semibold mb-4">
                Education
              </h3>
              {educationData.map((education, ind) => {
                return (
                  <div
                    key={ind}
                    className={`${
                      ind === 1 && "pt-2"
                    } border-l border-gray-300 pl-6`}
                  >
                    <div className="relative flex flex-col space-y-2">
                      <h4 className="mydot text-black dark:text-white font-semibold">
                        {education?.education}
                      </h4>
                      <h5 className="text-[18px] text-gray-800 dark:text-gray-200">
                        {" "}
                        {education?.schools}
                      </h5>
                      <p className="text-sm"> {education?.years}</p>
                      <span className="text-sm text-gray-500 dark:text-gray-300">
                        {" "}
                        {education?.gpa}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="">
              <h3 className="text-2xl text-primary font-semibold mb-4">
                Courses
              </h3>

              <div className="border-l border-gray-300 pl-6">
                <div className="relative flex flex-col space-y-2">
                  <h4 className="mydot text-black dark:text-white font-semibold">
                    Complete Web Development Course
                  </h4>
                  <h5 className="text-[18px] text-gray-800 dark:text-gray-200">
                    Programming Hero
                  </h5>
                  <p className="text-sm">December 2023 - June 2024</p>
                  <span className="ring-1 ring-primary mr-auto px-4 py-2 rounded-full text-primary dark:text-white text-sm">
                    Course Complete
                  </span>
                  <a
                    href="https://drive.google.com/file/d/1Hvq0wFBYwmmmG_ulGrdqUU9vNqIUYmMp/view?usp=sharing"
                    target="_blank"
                  >
                    <button className="group mr-auto project-tech-btn my-transition animate-none hover:animate-bounce">
                      <span className="relative z-10 group-hover:text-white dark:text-white text-sm">
                        See Certificate
                      </span>
                      <span className="absolute inset-0 overflow-hidden rounded-md">
                        <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-primary transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EducationCourses;
