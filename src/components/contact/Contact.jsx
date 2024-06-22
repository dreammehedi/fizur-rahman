import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import Swal from "sweetalert2";
import ContactBtn from "../button/ContactBtn";
import SocialIcon from "../social/SocialIcon";

function Contact() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  //   hanlde contact form
  const onContact = (data) => {
    const templateParams = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      message: data.message,
    };
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          reset();
          Swal.fire({
            title: "Thank you for contacting me!",
            icon: "success",
            timer: 1000,
          });
        },
        () => {
          Swal.fire({
            title: "Something went wrong!",
            icon: "error",
            timer: 1000,
          });
        }
      );
  };

  return (
    <>
      <section className="py-4 md:py-6">
        <div className="container">
          <h2 className="bg-gradient-main-bg text-transparent bg-clip-text text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
            Contact Me
          </h2>
          <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            <form
              onSubmit={handleSubmit(onContact)}
              className="col-span-3 bg-main-bg rounded-xl p-4 md:p-6 flex flex-col space-y-3"
            >
              <div className="mb-4">
                <h2 className="bg-gradient-main-bg text-transparent bg-clip-text text-2xl font-semibold text-left">
                  {`Let’s work together!`}
                </h2>
                <p className="w-full md:max-w-md">
                  I design and code beautifully simple things, and I love what I
                  do. Just simple like that!
                </p>
              </div>
              <div className="flex flex-col space-y-1">
                <input
                  {...register("firstName", { required: true })}
                  className="bg-transparent px-4 py-2 outline-none ring-1 ring-primary/30 rounded-xl mb-2 focus:bg-primary/10 focus:placeholder:text-[12px] focus:placeholder:text-primary"
                  type="text"
                  placeholder="First Name..."
                />
                {errors.firstName && (
                  <span className="font-medium text-xs text-red-500">
                    First Name is Required!
                  </span>
                )}
              </div>{" "}
              <div className="flex flex-col space-y-1">
                <input
                  {...register("lastName", { required: true })}
                  className="bg-transparent px-4 py-2 outline-none ring-1 ring-primary/30 rounded-xl mb-2 focus:bg-primary/10 focus:placeholder:text-[12px] focus:placeholder:text-primary"
                  type="text"
                  placeholder="Last Name..."
                />
                {errors.lastName && (
                  <span className="font-medium text-xs text-red-500">
                    Last Name is Required!
                  </span>
                )}
              </div>{" "}
              <div className="flex flex-col space-y-1">
                <input
                  {...register("email", { required: true })}
                  className="bg-transparent px-4 py-2 outline-none ring-1 ring-primary/30 rounded-xl mb-2 focus:bg-primary/10 focus:placeholder:text-[12px] focus:placeholder:text-primary"
                  type="text"
                  placeholder="Email Address..."
                />
                {errors.email && (
                  <span className="font-medium text-xs text-red-500">
                    Email Address is Required!
                  </span>
                )}
              </div>{" "}
              <div className="flex flex-col space-y-1">
                <input
                  {...register("phoneNumber", {
                    required: true,
                    minLength: 11,
                    maxLength: 13,
                  })}
                  className="bg-transparent px-4 py-2 outline-none ring-1 ring-primary/30 rounded-xl mb-2 focus:bg-primary/10 focus:placeholder:text-[12px] focus:placeholder:text-primary"
                  type="number"
                  placeholder="Phone Number..."
                />
                {errors.phoneNumber?.type === "required" && (
                  <span className="font-medium text-xs text-red-500">
                    Phone Number is Required!
                  </span>
                )}
                {errors.phoneNumber?.type === "minLength" && (
                  <span className="font-medium text-xs text-red-500">
                    Minimum 11 Number!
                  </span>
                )}
                {errors.phoneNumber?.type === "maxLength" && (
                  <span className="font-medium text-xs text-red-500">
                    Maximum 13 Number!
                  </span>
                )}
              </div>
              <div className="flex flex-col space-y-1">
                <textarea
                  {...register("message", { required: true })}
                  rows={5}
                  className="bg-transparent px-4 py-2 outline-none ring-1 ring-primary/30 rounded-xl mb-2 focus:bg-primary/10 focus:placeholder:text-[12px] focus:placeholder:text-primary"
                  placeholder="Message..."
                  name="message"
                  id="message"
                ></textarea>
                {errors.message && (
                  <span className="font-medium text-xs text-red-500">
                    Message is Required!
                  </span>
                )}
              </div>
              <ContactBtn></ContactBtn>
            </form>
            <div className="col-span-2">
              <p>
                {`I'm currently available to take on new projects, so feel free to send me a message about anything you'd like to discuss. You can contact me anytime, 24/7.`}
              </p>
              <div className="mt-8 flex flex-col space-y-2">
                <span className="flex my-transition hover:text-primary  items-center gap-2">
                  <IoIosMail className="text-xl"></IoIosMail>{" "}
                  dreammehedihassan@gmail.com
                </span>
                <span className="flex my-transition hover:text-primary  items-center gap-2">
                  <FaPhone className="text-xl"></FaPhone> +8801830143234
                </span>
                <span className="flex my-transition hover:text-primary items-center gap-2 ">
                  <IoLocation className="text-xl"></IoLocation>
                  Mirzapur, Tangail <br />
                  Dhaka, Bangladesh
                </span>
                <div className="flex flex-wrap items-center gap-4 !text-sm">
                  <SocialIcon cls={"!text-sm"} size={"!size-9"}></SocialIcon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
