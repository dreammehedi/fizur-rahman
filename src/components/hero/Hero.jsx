import Tilt from "react-parallax-tilt";
import { TypeAnimation } from "react-type-animation";
import heroImg from "../../assets/mehedi.jpg";
import HireMeBtn from "../button/HireMeBtn";
import SocialIcon from "../social/SocialIcon";

function Hero() {
  return (
    <>
      {/* hero */}
      <section className="my-1 pb-4 md:pb-6">
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 bg-main-bg p-6 md:p-8 lg:p-12 rounded-xl ring-1 ring-ring-color md:justify-center md:text-center lg:justify-normal lg:text-left items-center">
          <Tilt
            perspective={600}
            glareEnable={true}
            glareMaxOpacity={0.55}
            scale={1.03}
          >
            <img
              className="cursor-pointer w-full h-auto md:max-w-[350px] md:h-[350px] md:mx-auto lg:h-auto lg:mx-0 rounded-xl md:rounded-full lg:rounded-xl object-cover"
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
                ]}
                speed={30}
                deletionSpeed={50}
                repeat={Infinity}
              />
              {/* Hi, I am Mehedi Hassan - Web Designer + Junior Web Developer */}
            </h1>
            <p>
              {`I'm a Junior Web Developer with a passion for front-end
              development and UX design. I specialize in creating beautifully
              simple and intuitive websites.`}
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
