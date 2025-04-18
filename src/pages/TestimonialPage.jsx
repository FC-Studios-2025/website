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
      image: "https://res.cloudinary.com/dragkodnu/image/upload/f_auto,q_auto/v1/reviews/mntuvyrxlm4nlbxuemjg", // Update with actual image paths if needed
      text: "Genuinely Impressive Work It was an absolute pleasure collaborating with Film Craft Studios. From the start, they really got what we were aiming for and brought it to life better than we could’ve imagined. Their attention to detail and creative flair made a huge difference. They were also super responsive throughout, which made the whole process smooth. Really chuffed with the final video – highly recommended.",
    },
    {
      id: 2,
      name: "Benjamin Scott",
      company: "",
      image: "https://res.cloudinary.com/dragkodnu/image/upload/f_auto,q_auto/v1/reviews/eibrv5jjcdnv4bw1ub0t",
      text: "Genuine People Who Care About the Work You can tell these guys care about what they do. It wasn’t just about ticking boxes — they wanted the video to work for us. They asked the right questions, offered ideas we hadn’t thought of, and were really patient when we changed our minds halfway through. Really solid experience overall.",
    },
    {
      id: 3,
      name: "Mark Brown",
      company: "",
      image: "https://res.cloudinary.com/dragkodnu/image/upload/f_auto,q_auto/v1/reviews/qv8coauqmjt9ybfg2kgz",
      text: "Good Value and No Nonsense We didn’t have a huge budget, but the team still treated our project like it mattered. They were upfront about what was possible and gave us a fair price. No hidden costs, no pressure to upgrade — just honest advice and solid work. Respect to them for that.",
    },
    {
      id: 4,
      name: "James Connor",
      company: "",
      image: "https://res.cloudinary.com/dragkodnu/image/upload/f_auto,q_auto/v1/reviews/vstgdx0wdg6up0vmyuol",
      text: "They Just Get It Explaining creative ideas can be tricky, but somehow the team just got what we were trying to say — even when we weren’t sure ourselves. They took some vague direction and turned it into something that worked. Really grateful for how easy they made it.",
    },
    {
      id: 5,
      name: "Sophie Langford",
      company: "",
      image: "https://res.cloudinary.com/dragkodnu/image/upload/f_auto,q_auto/v1/reviews/z9dfxfhewtbgw6zvopij",
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
