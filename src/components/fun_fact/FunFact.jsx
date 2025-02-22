import * as Icons from "react-icons/ci";
const funFactData = [
  {
    icon: "CiTrophy",
    title: "Job Achievement",
    count: "35%",
  },
  {
    icon: "CiCalendar",
    title: "Years of Experience",
    count: "1.5+",
  },
  {
    icon: "CiFaceSmile",
    title: "Happy Clients",
    count: "8+",
  },
  {
    icon: "CiFloppyDisk",
    title: "Project Completed",
    count: "14+",
  },
];

function FunFact() {
  return (
    <>
      <section className="py-4 md:py-6">
        <div className="container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 bg-main-bg dark:bg-gray-900 dark:ring-gray-800 p-4 rounded-xl gap-4 md:gap-6 ring-1 ring-ring-color">
          {funFactData?.map((funFact, ind) => {
            const IconComponent = Icons[funFact?.icon];
            return (
              <div
                key={ind}
                className="p-6 flex flex-col justify-center items-center text-center space-y-3"
              >
                <IconComponent className="text-4xl text-primary"></IconComponent>
                <big className="text-primary text-4xl lg:text-[46px] font-semibold">
                  {funFact?.count}
                </big>
                <h5 className="bg-gradient-main-bg text-xl font-medium text-transparent bg-clip-text">
                  {funFact?.title}
                </h5>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default FunFact;
