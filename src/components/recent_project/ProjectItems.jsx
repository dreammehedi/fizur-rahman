import { FaGithub, FaLink } from "react-icons/fa6";
import blissfulBookingMain from "../../assets/blissful-booking-main.png";
import eduCollaborativeMain from "../../assets/edu-collaborative-home.png";
import havenHouseMain from "../../assets/haven-house-main.png";
function ProjectItems() {
  return (
    <>
      <section className="py-8 md:py-10 lg:py-12">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-main-bg p-6 rounded-xl space-y-3 ring-1 ring-ring-color">
            <img
              className="w-full h-[400px] object-fill"
              src={eduCollaborativeMain}
              alt=""
            />
            <h2 className="font-semibold text-2xl bg-gradient-main-bg text-transparent bg-clip-text">
              Education Collaborative Study Plateform
            </h2>
            <p className="text-sm">
              I recently developed an Education Collaborative Study Platform
              designed to connect students, tutors, and administrators
              seamlessly. This platform streamlines study session scheduling,
              resource sharing, and user management, ensuring an efficient and
              collaborative learning environment.
            </p>
            <div className="flex flex-wrap justify-start gap-4 md:gap-6 items-center">
              <button className="group project-tech-btn my-transition animate-none hover:animate-bounce">
                <span className="relative z-10 group-hover:text-white text-sm">
                  React JS
                </span>
                <span className="absolute inset-0 overflow-hidden rounded-md">
                  <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-primary transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                </span>
              </button>
              <button className="group project-tech-btn my-transition animate-none hover:animate-bounce">
                <span className="relative z-10 group-hover:text-white text-sm">
                  Firebase
                </span>
                <span className="absolute inset-0 overflow-hidden rounded-md">
                  <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-primary transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                </span>
              </button>
              <button className="group project-tech-btn my-transition animate-none hover:animate-bounce">
                <span className="relative z-10 group-hover:text-white text-sm">
                  Express JS
                </span>
                <span className="absolute inset-0 overflow-hidden rounded-md">
                  <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-primary transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                </span>
              </button>
              <button className="group project-tech-btn my-transition animate-none hover:animate-bounce">
                <span className="relative z-10 group-hover:text-white text-sm">
                  Node JS
                </span>
                <span className="absolute inset-0 overflow-hidden rounded-md">
                  <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-primary transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                </span>
              </button>
              <button className="group project-tech-btn my-transition animate-none hover:animate-bounce">
                <span className="relative z-10 group-hover:text-white text-sm">
                  MongoDB
                </span>
                <span className="absolute inset-0 overflow-hidden rounded-md">
                  <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-primary transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                </span>
              </button>
            </div>
            <div className="pt-4 flex flex-wrap justify-start gap-4 md:gap-6">
              <a
                className="my-transition animate-none hover:animate-bounce"
                href="https://educollaborate-study.web.app/"
                target="_blank"
              >
                <button className="group project-tech-btn !bg-primary hover:!bg-primary/60">
                  <span className="relative z-10 group-hover:text-primary text-white flex items-center gap-2 text-sm">
                    Live Link{" "}
                    <FaLink className="text-xl group-hover:text-primary text-white"></FaLink>
                  </span>
                  <span className="absolute inset-0 overflow-hidden rounded-md">
                    <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-white/20 my-transition group-hover:-translate-x-0 group-hover:scale-150"></span>
                  </span>
                </button>
              </a>
              <a
                className="my-transition animate-none hover:animate-bounce"
                href="https://github.com/dreammehedi/edu-collaborative"
                target="_blank"
              >
                <button className="group project-tech-btn !bg-primary hover:!bg-primary/60">
                  <span className="relative z-10 group-hover:text-primary text-white flex items-center gap-2 text-sm">
                    Client Side{" "}
                    <FaGithub className="text-xl group-hover:text-primary text-white"></FaGithub>
                  </span>
                  <span className="absolute inset-0 overflow-hidden rounded-md">
                    <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-white/20 my-transition group-hover:-translate-x-0 group-hover:scale-150"></span>
                  </span>
                </button>
              </a>{" "}
              <a
                className="my-transition animate-none hover:animate-bounce"
                href="https://github.com/dreammehedi/edu-collaborative-server"
                target="_blank"
              >
                <button className="group project-tech-btn !bg-primary hover:!bg-primary/60">
                  <span className="relative z-10 group-hover:text-primary text-white flex items-center gap-2 text-sm">
                    Server Side{" "}
                    <FaGithub className="text-xl group-hover:text-primary text-white"></FaGithub>
                  </span>
                  <span className="absolute inset-0 overflow-hidden rounded-md">
                    <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-white/20 my-transition group-hover:-translate-x-0 group-hover:scale-150"></span>
                  </span>
                </button>
              </a>
            </div>
          </div>
          <div className="bg-main-bg p-6 rounded-xl space-y-3 ring-1 ring-ring-color">
            <img
              className="w-full h-[400px] object-fill"
              src={blissfulBookingMain}
              alt=""
            />
            <h2 className="font-semibold text-2xl bg-gradient-main-bg text-transparent bg-clip-text">
              Blissful Hotel Booking Website
            </h2>
            <p className="text-sm">
              Discover the perfect stay with Blissful Booking, your go-to
              destination for booking the best hotels worldwide. I recently
              developed this user-friendly hotel booking website that makes it
              easy for travelers to find and book accommodations that suit their
              needs and preferences.
            </p>
            <div className="flex flex-wrap justify-start gap-4 md:gap-6 items-center">
              <button className="group project-tech-btn my-transition animate-none hover:animate-bounce">
                <span className="relative z-10 group-hover:text-white text-sm">
                  React JS
                </span>
                <span className="absolute inset-0 overflow-hidden rounded-md">
                  <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-primary transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                </span>
              </button>
              <button className="group project-tech-btn my-transition animate-none hover:animate-bounce">
                <span className="relative z-10 group-hover:text-white text-sm">
                  Firebase
                </span>
                <span className="absolute inset-0 overflow-hidden rounded-md">
                  <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-primary transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                </span>
              </button>
              <button className="group project-tech-btn my-transition animate-none hover:animate-bounce">
                <span className="relative z-10 group-hover:text-white text-sm">
                  Express JS
                </span>
                <span className="absolute inset-0 overflow-hidden rounded-md">
                  <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-primary transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                </span>
              </button>

              <button className="group project-tech-btn my-transition animate-none hover:animate-bounce">
                <span className="relative z-10 group-hover:text-white text-sm">
                  MongoDB
                </span>
                <span className="absolute inset-0 overflow-hidden rounded-md">
                  <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-primary transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                </span>
              </button>
            </div>
            <div className="pt-4 flex flex-wrap justify-start gap-4 md:gap-6">
              <a
                className="my-transition animate-none hover:animate-bounce"
                href="https://blissful-bookings.firebaseapp.com/"
                target="_blank"
              >
                <button className="group project-tech-btn !bg-primary hover:!bg-primary/60">
                  <span className="relative z-10 group-hover:text-primary text-white flex items-center gap-2 text-sm">
                    Live Link{" "}
                    <FaLink className="text-xl group-hover:text-primary text-white"></FaLink>
                  </span>
                  <span className="absolute inset-0 overflow-hidden rounded-md">
                    <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-white/20 my-transition group-hover:-translate-x-0 group-hover:scale-150"></span>
                  </span>
                </button>
              </a>
              <a
                className="my-transition animate-none hover:animate-bounce"
                href="https://github.com/dreammehedi/blissful-booking"
                target="_blank"
              >
                <button className="group project-tech-btn !bg-primary hover:!bg-primary/60">
                  <span className="relative z-10 group-hover:text-primary text-white flex items-center gap-2 text-sm">
                    Client Side{" "}
                    <FaGithub className="text-xl group-hover:text-primary text-white"></FaGithub>
                  </span>
                  <span className="absolute inset-0 overflow-hidden rounded-md">
                    <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-white/20 my-transition group-hover:-translate-x-0 group-hover:scale-150"></span>
                  </span>
                </button>
              </a>{" "}
              <a
                className="my-transition animate-none hover:animate-bounce"
                href="https://github.com/dreammehedi/blissful-booking-server"
                target="_blank"
              >
                <button className="group project-tech-btn !bg-primary hover:!bg-primary/60">
                  <span className="relative z-10 group-hover:text-primary text-white flex items-center gap-2 text-sm">
                    Server Side{" "}
                    <FaGithub className="text-xl group-hover:text-primary text-white"></FaGithub>
                  </span>
                  <span className="absolute inset-0 overflow-hidden rounded-md">
                    <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-white/20 my-transition group-hover:-translate-x-0 group-hover:scale-150"></span>
                  </span>
                </button>
              </a>
            </div>
          </div>{" "}
          <div className="bg-main-bg p-6 rounded-xl space-y-3 ring-1 ring-ring-color">
            <img
              className="w-full h-[400px] object-fill"
              src={havenHouseMain}
              alt=""
            />
            <h2 className="font-semibold text-2xl bg-gradient-main-bg text-transparent bg-clip-text">
              Blissful Hotel Booking Website
            </h2>
            <p className="text-sm">
              Discover the perfect stay with Blissful Booking, your go-to
              destination for booking the best hotels worldwide. I recently
              developed this user-friendly hotel booking website that makes it
              easy for travelers to find and book accommodations that suit their
              needs and preferences.
            </p>
            <div className="flex flex-wrap justify-start gap-4 md:gap-6 items-center">
              <button className="group project-tech-btn my-transition animate-none hover:animate-bounce">
                <span className="relative z-10 group-hover:text-white text-sm">
                  React JS
                </span>
                <span className="absolute inset-0 overflow-hidden rounded-md">
                  <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-primary transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                </span>
              </button>
              <button className="group project-tech-btn my-transition animate-none hover:animate-bounce">
                <span className="relative z-10 group-hover:text-white text-sm">
                  Firebase
                </span>
                <span className="absolute inset-0 overflow-hidden rounded-md">
                  <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-primary transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                </span>
              </button>

              <button className="group project-tech-btn my-transition animate-none hover:animate-bounce">
                <span className="relative z-10 group-hover:text-white text-sm">
                  MongoDB
                </span>
                <span className="absolute inset-0 overflow-hidden rounded-md">
                  <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-primary transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                </span>
              </button>
            </div>
            <div className="pt-4 flex flex-wrap justify-start gap-4 md:gap-6">
              <a
                className="my-transition animate-none hover:animate-bounce"
                href="https://haven-house-c40d3.web.app/"
                target="_blank"
              >
                <button className="group project-tech-btn !bg-primary hover:!bg-primary/60">
                  <span className="relative z-10 group-hover:text-primary text-white flex items-center gap-2 text-sm">
                    Live Link{" "}
                    <FaLink className="text-xl group-hover:text-primary text-white"></FaLink>
                  </span>
                  <span className="absolute inset-0 overflow-hidden rounded-md">
                    <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-white/20 my-transition group-hover:-translate-x-0 group-hover:scale-150"></span>
                  </span>
                </button>
              </a>
              <a
                className="my-transition animate-none hover:animate-bounce"
                href="https://github.com/dreammehedi/haven-house"
                target="_blank"
              >
                <button className="group project-tech-btn !bg-primary hover:!bg-primary/60">
                  <span className="relative z-10 group-hover:text-primary text-white flex items-center gap-2 text-sm">
                    Code Link{" "}
                    <FaGithub className="text-xl group-hover:text-primary text-white"></FaGithub>
                  </span>
                  <span className="absolute inset-0 overflow-hidden rounded-md">
                    <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-white/20 my-transition group-hover:-translate-x-0 group-hover:scale-150"></span>
                  </span>
                </button>
              </a>{" "}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectItems;
