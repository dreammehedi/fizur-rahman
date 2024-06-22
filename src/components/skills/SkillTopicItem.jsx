import PropTypes from "prop-types";
import Tilt from "react-parallax-tilt";
function SkillTopicItem({ skillItem }) {
  return (
    <>
      <div className="group text-center cursor-pointer my-transition space-y-3 text-primary font-semibold">
        <Tilt
          perspective={600}
          glareEnable={true}
          glareMaxOpacity={0.55}
          scale={1.06}
        >
          <div className="bg-main-bg p-6 md:p-8 rounded-xl flex flex-col justify-center items-center space-y-3 my-transition grayscale hover:grayscale-0 text-center ring-1 ring-ring-color">
            <img
              src={skillItem?.icon}
              className="size-[90px] my-transition group-hover:animate-bounce group-hover:shadow-md p-2 rounded-xl object-cover"
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
