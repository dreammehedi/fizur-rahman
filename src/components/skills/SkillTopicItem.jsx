import PropTypes from "prop-types";
import Tilt from "react-parallax-tilt";
function SkillTopicItem({ skillItem }) {
  return (
    <>
      <div className="group text-center cursor-pointer my-transition space-y-3 text-primary dark:text-white font-semibold rounded-xl overflow-hidden">
        <Tilt
          perspective={600}
          glareMaxOpacity={0.55}
          scale={1.06}
          glareEnable={true}
          glareColor="#0369a1"
          glarePosition="all"
          glareBorderRadius="20px"
        >
          <div className="bg-main-bg dark:bg-primary/60 dark:ring-gray-800 p-6 md:p-8 rounded-xl flex flex-col justify-center items-center space-y-3 my-transition grayscale hover:grayscale-0 text-center ring-1 ring-ring-color overflow-hidden">
            <img
              src={skillItem?.icon}
              className="size-[90px] my-transition group-hover:animate-bounce group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden"
              alt=""
            />

            <span className="text-[18px]">{skillItem?.skillsPercentage}</span>
          </div>
        </Tilt>
        <h5 className="font-medium">{skillItem?.title}</h5>
      </div>
    </>
  );
}
SkillTopicItem.propTypes = {
  skillItem: PropTypes.object.isRequired,
};
export default SkillTopicItem;
