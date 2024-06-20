import heroImg from "../../assets/mehedi.jpg";
import HireMeBtn from "../button/HireMeBtn";
import SocialIcon from "../social/SocialIcon";

function Hero() {
  return (
    <>
      {/* hero */}
      <section className="my-1 py-4 md:py-6">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 bg-main-bg p-6 md:p-8 lg:p-12 rounded-xl ring-1 ring-[#f3effa] items-center">
          <img
            className="w-full max-w-[350px] rounded-xl object-cover"
            src={heroImg}
            alt=""
          />
          <div className="col-span-2 space-y-3">
            <h1 className="bg-gradient-main-bg font-semibold text-3xl md:text-4xl lg:text-[55px] lg:leading-[75px] mr-[1.5rem] !text-transparent !bg-clip-text">
              Hi, I am Mehedi Hassan - Web Designer + Junior Web Developer
            </h1>
            <p>
              {`I'm a Junior Web Developer with a passion for front-end
              development and UX design. I specialize in creating beautifully
              simple and intuitive websites.`}
            </p>
            <div className="flex justify-start items-center gap-4">
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
