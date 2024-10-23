import Tilt from "react-parallax-tilt";
import { TypeAnimation } from "react-type-animation";
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
              src={""}
              alt=""
            />
          </Tilt>
          <div className="lg:col-span-2 space-y-3">
            <h1 className="bg-gradient-main-bg font-semibold text-3xl md:text-4xl lg:text-[55px] lg:leading-[75px] lg:mr-[1.5rem] !text-transparent !bg-clip-text break-words text-wrap">
              <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                  "Hi, I'm Fizur Rahman - ",
                  300,
                  "Hi, I'm Fizur Rahman - App Developer",
                  1000,
                  "Hi, I'm Fizur Rahman - Mobile Application Developer",
                  1000,
                  "Hi, I'm Fizur Rahman - Flutter Application Developer",
                  1000,
                ]}
                speed={30}
                deletionSpeed={50}
                repeat={Infinity}
              />
            </h1>
            <p>
              {`Fizur Rahman is a mobile application developer specializing in creating user-friendly apps for iOS and Android. Proficient in Swift, Kotlin, and Java, he is dedicated to delivering high-quality mobile solutions and enhancing user experiences. Fizur excels in all phases of app development and actively stays updated on industry trends. Outside of coding, he enjoys exploring new technologies and contributing to open-source projects.`}
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
