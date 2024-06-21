import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ClientTestimonialsData from "./ClientTestimonialsData";
import "./testimonial.css";

function ClientTestimonials() {
  return (
    <>
      <section className="py-4 md:py-6 bg-main-bg">
        <div className="container w-full">
          <h2 className="bg-gradient-main-bg text-transparent bg-clip-text text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
            Client Testimonials
          </h2>
          <Swiper
            breakpoints={{
              576: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
            slidesPerView={2}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mt-6 md:mt-8"
          >
            {ClientTestimonialsData?.map((testimonial, ind) => {
              return (
                <SwiperSlide
                  key={ind}
                  className="rounded-xl p-6 md:p-8 ring-1 ring-ring-color bg-white space-y-6 md:space-y-8"
                >
                  <p className="font-medium">{testimonial?.feedback}</p>
                  <div className="flex items-center gap-3">
                    <a href="" target="_blank">
                      <img
                        className="size-16 rounded-full object-cover ring-2 ring-primary/60"
                        src={testimonial?.userPhoto}
                        alt=""
                      />
                    </a>
                    <div className="flex flex-col space-y-1">
                      <h5 className="text-[18px] font-semibold">
                        {testimonial?.name}
                      </h5>
                      <span className="font-medium text-sm">
                        {testimonial?.designation}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default ClientTestimonials;
