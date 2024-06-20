import PropTypes from "prop-types";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
function SocialIcon({ cls, size }) {
  return (
    <>
      <a
        title="Facebook"
        href="https://www.facebook.com/profile.php?id=61554869056271"
        target="_blank"
        className="my-transition group-hover:rotate-[360deg]"
      >
        <button
          className={`${cls} group relative inline-flex ${size} size-12 items-center justify-center overflow-hidden rounded-full my-transition ring-1 ring-primary hover:bg-primary hover:animate-pulse`}
        >
          <FaFacebook
            className={`${cls} text-xl text-primary group-hover:text-white `}
          ></FaFacebook>
        </button>
      </a>
      <a
        title="Facebook"
        href="https://www.linkedin.com/in/mehedi-hassan-miraj"
        target="_blank"
        className="my-transition group-hover:rotate-[360deg]"
      >
        <button
          className={`${cls} group relative inline-flex ${size} size-12 items-center justify-center overflow-hidden rounded-full my-transition ring-1 ring-primary hover:bg-primary hover:animate-pulse`}
        >
          <FaLinkedin
            className={`${cls} text-xl text-primary group-hover:text-white `}
          ></FaLinkedin>
        </button>
      </a>
      <a
        title="Facebook"
        href="https://github.com/dreammehedi"
        target="_blank"
        className="my-transition group-hover:rotate-[360deg]"
      >
        <button
          className={`${cls} group relative inline-flex ${size} size-12 items-center justify-center overflow-hidden rounded-full my-transition ring-1 ring-primary hover:bg-primary hover:animate-pulse`}
        >
          <FaGithub
            className={`${cls} text-xl text-primary group-hover:text-white `}
          ></FaGithub>
        </button>
      </a>
    </>
  );
}
SocialIcon.propTypes = {
  cls: PropTypes.string,
  size: PropTypes.string,
};
export default SocialIcon;
