import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

function SocialIcon() {
  return (
    <>
      <button className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full my-transition ring-1 ring-primary hover:bg-primary hover:animate-pulse">
        <a
          title="Facebook"
          href="https://www.facebook.com/profile.php?id=61554869056271"
          target="_blank"
          className="my-transition group-hover:rotate-[360deg]"
        >
          <FaFacebook className="text-xl text-primary group-hover:text-white "></FaFacebook>
        </a>
      </button>
      <button className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full my-transition ring-1 ring-primary hover:bg-primary hover:animate-pulse">
        <a
          title="Facebook"
          href="https://www.linkedin.com/in/mehedi-hassan-miraj"
          target="_blank"
          className="my-transition group-hover:rotate-[360deg]"
        >
          <FaLinkedin className="text-xl text-primary group-hover:text-white "></FaLinkedin>
        </a>
      </button>
      <button className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full my-transition ring-1 ring-primary hover:bg-primary hover:animate-pulse">
        <a
          title="Facebook"
          href="https://github.com/dreammehedi"
          target="_blank"
          className="my-transition group-hover:rotate-[360deg]"
        >
          <FaGithub className="text-xl text-primary group-hover:text-white "></FaGithub>
        </a>
      </button>
    </>
  );
}

export default SocialIcon;
