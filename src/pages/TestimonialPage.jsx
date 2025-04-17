import React from "react";
import NavBar from "../components/NavBar";
import TestimonialSlider from "../components/TestimonialSlider";
import Footer from "../components/Footer";
import BlurredCircle from "../components/BlurredCircle";

const TestimonialsPage = () => {
  // Sample testimonial data - replace with your actual data
  const testimonials = [
    {
      id: 1,
      name: "Matthew Green",
      company: "",
      image: "/src/assets/userIcon.png", // Update with actual image paths if needed
      text: "Professionalism at Its Best – Working with Film Craft Studios was an absolute pleasure. They demonstrated unparalleled creativity and execution in every aspect of our project. Their ability to transform our initial concepts into a visually striking video was truly remarkable. We are beyond satisfied with the results and would definitely recommend them.",
    },
    {
      id: 2,
      name: "Benjamin Scott",
      company: "",
      image: "/src/assets/userIcon.png",
      text: "Outstanding Customer Service and Quality – Film Craft Studios gave us great customer service and high-quality work. They were quick to respond, patient, and made sure we got exactly what we wanted. The final video was better than we expected. Well done, team!",
    },
    {
      id: 3,
      name: "Mark Brown",
      company: "",
      image: "/src/assets/userIcon.png",
      text: "Excellent Quality and Fast Turnaround – We were on a tight deadline, and Film Craft Studios delivered exceptional quality in record time. The editing was flawless, and the visual effects added a wow factor to our project. The team was professional, communicative, and committed to meeting our needs.",
    },
    {
      id: 4,
      name: "James Connor",
      company: "",
      image: "/src/assets/userIcon.png",
      text: "Engaging and High-Quality Video Production – The team at Film Craft Studios is exceptional. They took the time to understand our needs and delivered a video that was engaging and of the highest quality. We're extremely satisfied with the results.",
    },
    {
      id: 5,
      name: "Sophie Langford",
      company: "",
      image: "/src/assets/userIcon.png",
      text: "Didn’t Know What to Expect – Pleasantly Surprised Honestly, I wasn’t sure what working with a production company would be like, since it was our first time doing a video. I thought it might be all technical jargon and back-and-forth emails — but the team at Film Craft Studios made it straightforward. They explained things clearly, didn’t over complicate anything, and listened.",
    },
  ];
  
  const handleEmailClick = () => {
    window.location.href = "mailto:info@filmcraftstudios.com";
  };

  return (
    <div className="flex flex-col items-center min-h-screen w-full text-white overflow-hidden">
      <BlurredCircle
        color="bg-blue-400"
        positionClass="-top-[12%] left-[20%] md:-top-[40%] md:left-[15%] lg:left-[22%] lg:-top-[20%]"
      />
      <BlurredCircle
        color="bg-green-400"
        positionClass="-top-[12%] right-[20%] md:-top-[40%] md:right-[15%] lg:right-[22%] lg:-top-[20%]"
      />
      {/*  */}
      <BlurredCircle
        color="bg-blue-400"
        positionClass="top-[60%] right-[0%] md:top-[90%] md:translate-x-[70%] lg:translate-x-[60%] lg:top-[130%]"
      />
      <BlurredCircle
        color="bg-green-400"
        positionClass="top-[110%] left-0 -translate-x-[50%] md:top-[180%] lg: lg:top-[180%] lg:-translate-x-[50%]"
      />
      {/*  */}
      <BlurredCircle
        color="bg-blue-400"
        positionClass="top-[180%] right-[0%] md:hidden"
      />
      <BlurredCircle
        color="bg-green-400"
        positionClass="top-[260%] left-0 -translate-x-[50%] md:hidden"
      />
      {/*  */}
      <BlurredCircle
        color="bg-blue-400"
        positionClass="top-[320%] right-[0%] md:hidden"
      />

      <div className="w-full">
        <NavBar />
      </div>

      {/* Main Content */}
      <main className="w-full max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-6xl px-4 sm:px-6 md:px-8 mx-auto mt-20 md:mt-28">
        <section className="mb-16">
          <section>
            <TestimonialSlider />
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-green-500 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-gray-300">{testimonial.text}</p>

                <div className="mt-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">
              Ready to elevate your brand's visual story?
            </h2>
            <p className="text-gray-300 mb-6">
              Schedule a consultation with our team to discuss your project
              needs.
            </p>
            <button onClick={handleEmailClick} className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Get Started
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default TestimonialsPage;
