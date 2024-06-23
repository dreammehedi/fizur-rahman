import Tilt from "react-parallax-tilt";
import { TypeAnimation } from "react-type-animation";
import heroImg from "../../assets/mehedi.jpg";
import HireMeBtn from "../button/HireMeBtn";
import HeroParticles from "../hero_particles/HeroParticles";
import SocialIcon from "../social/SocialIcon";

function Hero() {
  return (
    <>
      {/* hero */}
      <section className="my-1 py-4 md:py-6">
        <HeroParticles></HeroParticles>
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 bg-main-bg dark:bg-gray-900 p-6 md:p-8 lg:p-12 rounded-xl ring-1 ring-ring-color dark:ring-gray-800 md:justify-center md:text-center lg:justify-normal lg:text-left items-center overflow-hidden">
          <Tilt perspective={800} glareMaxOpacity={0.55} scale={1.03}>
            <img
              className="overflow-hidden cursor-pointer w-full h-auto md:max-w-[350px] md:h-[350px] md:mx-auto lg:h-auto lg:mx-0 rounded-xl md:rounded-full lg:rounded-xl object-cover"
              src={heroImg}
              alt=""
            />
          </Tilt>
          <div className="lg:col-span-2 space-y-3">
            <h1 className="bg-gradient-main-bg font-semibold text-3xl md:text-4xl lg:text-[55px] lg:leading-[75px] lg:mr-[1.5rem] !text-transparent !bg-clip-text break-words text-wrap">
              <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                  "Hi, I'm Mehedi Hassan - ",
                  300,
                  "Hi, I'm Mehedi Hassan - Web Designer",
                  1000,
                  "Hi, I'm Mehedi Hassan - Front-End Developer",
                  1000,
                  "Hi, I'm Mehedi Hassan - React JS Developer",
                  1000,
                  "Hi, I'm Mehedi Hassan - Junior MERN Stack Developer",
                  1000,
                ]}
                speed={30}
                deletionSpeed={50}
                repeat={Infinity}
              />
            </h1>
            <p>
              {`A versatile developer with expertise in web design, front-end development, and full-stack development using the MERN stack. I am passionate about creating responsive and user-friendly web applications using React.js. With a keen eye for design and a focus on improved user experience, I excel at turning complex problems into simple, beautiful, and intuitive solutions.`}
            </p>
            <div className="flex justify-start md:justify-center lg:justify-normal items-center gap-4">
              <HireMeBtn></HireMeBtn>
              <SocialIcon></SocialIcon>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
