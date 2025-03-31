import React from "react";
// Note: You'll need to install and import Swiper
// npm install swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director, TechVision",
      content:
        "Film Craft Studios transformed our brand story into a visual masterpiece. Their attention to detail and creative vision exceeded our expectations.",
      image: "/images/testimonial-1.jpg",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Event Coordinator, Global Events",
      content:
        "Working with Film Craft Studios was seamless from start to finish. They captured the essence of our corporate event perfectly.",
      image: "/images/testimonial-2.jpg",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Creative Director, Artisan Brands",
      content:
        "I've worked with many video editors, but Film Craft Studios brings something special to each project. Their ability to blend visuals, sound, and narrative is remarkable.",
      image: "/images/testimonial-3.jpg",
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Founder, Startup Innovations",
      content:
        "The animated explainer video Film Craft Studios created for our product launch simplified complex concepts and drove customer engagement.",
      image: "/images/testimonial-4.jpg",
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Founder, Startup Innovations",
      content:
        "The animated explainer video Film Craft Studios created for our product launch simplified complex concepts and drove customer engagement.",
      image: "/images/testimonial-4.jpg",
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Founder, Startup Innovations",
      content:
        "The animated explainer video Film Craft Studios created for our product launch simplified complex concepts and drove customer engagement.",
      image: "/images/testimonial-4.jpg",
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Founder, Startup Innovations",
      content:
        "The animated explainer video Film Craft Studios created for our product launch simplified complex concepts and drove customer engagement.",
      image: "/images/testimonial-4.jpg",
    },
  ];

  return (
    <div className=" py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <div className="w-16 h-1 mx-auto mt-2 mb-8"></div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="pb-12">
              <div className="border border-gray-700 rounded-lg shadow-lg p-8 h-full flex flex-col">
                <div className="flex-grow">
                  <div className="text-white mb-4">
                    <svg
                      className="w-10 h-10 opacity-20"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7.031 14c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7l-0.031-1c0-7.732 6.268-14 14-14v4c-2.671 0-5.182 1.040-7.071 2.929-0.364 0.364-0.695 0.751-0.995 1.157 0.357-0.056 0.724-0.086 1.097-0.086zM25.031 14c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7l-0.031-1c0-7.732 6.268-14 14-14v4c-2.671 0-5.182 1.040-7.071 2.929-0.364 0.364-0.695 0.751-0.995 1.157 0.358-0.056 0.724-0.086 1.097-0.086z"></path>
                    </svg>
                  </div>
                  <p className="text-gray-400 text-lg mb-6">
                    {testimonial.content}
                  </p>
                </div>
                <div className="flex items-center mt-4">
                  <div className="ml-4">
                    <h4 className="font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSlider;
