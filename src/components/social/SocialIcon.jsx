import PropTypes from "prop-types";
import * as socialIconItem from "react-icons/fa";
import SocialIconItems from "./SocialIconItems";
function SocialIcon({ cls, size }) {
  return (
    <>
      {SocialIconItems.map((socialIcon, ind) => {
        const IconComponent = socialIconItem[socialIcon?.icon];
        return (
          <a
            key={ind}
            title={socialIcon?.title}
            href={socialIcon?.url}
            target="_blank"
            className="my-transition group-hover:rotate-[360deg]"
          >
            <button
              className={`${cls} group relative inline-flex ${size} size-12 items-center justify-center overflow-hidden rounded-full my-transition ring-1 ring-primary dark:ring-white hover:bg-primary hover:animate-pulse`}
            >
              <IconComponent
                className={`${cls} text-xl text-primary dark:text-white group-hover:text-white `}
              ></IconComponent>
            </button>
          </a>
        );
      })}
    </>
  );
}
SocialIcon.propTypes = {
  cls: PropTypes.string,
  size: PropTypes.string,
};
export default SocialIcon;
