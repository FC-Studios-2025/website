import React from "react";
import NavBar from "../components/NavBar";
import TestimonialSlider from "../components/TestimonialSlider";
import Footer from "../components/Footer";

const TestimonialsPage = () => {
  // Sample testimonial data - replace with your actual data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "Bright Innovations",
      image: "/testimonial-1.jpg",
      text: "Film Craft Studios transformed our brand message into a compelling visual story that resonated with our audience. Their creative approach and attention to detail exceeded our expectations.",
    },
    {
      id: 2,
      name: "Michael Zhang",
      company: "Elevate Brands",
      image: "/testimonial-2.jpg",
      text: "Working with Film Craft Studios was a game-changer for our marketing campaigns. Their team's expertise in video production delivered results that directly impacted our engagement metrics.",
    },
    {
      id: 3,
      name: "Priya Patel",
      company: "Nexus Technologies",
      image: "/testimonial-3.jpg",
      text: "The professionalism and creative vision of Film Craft Studios helped us stand out in a crowded market. They truly understand how to capture a brand's essence through visual storytelling.",
    },
    {
      id: 4,
      name: "David Williams",
      company: "Spectrum Creatives",
      image: "/testimonial-4.jpg",
      text: "From concept to final edit, Film Craft Studios delivered exceptional quality. Their strategic approach to content creation helped us connect with our audience on a deeper level.",
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen w-full text-white overflow-hidden">
      <div className="w-full">
        <NavBar />
      </div>

      {/* Main Content */}
      <main className="w-full max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-6xl px-4 sm:px-6 md:px-8 mx-auto mt-26 md:mt-30">
        <section className="mb-16">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6 flex items-center">
            Client
            <span className="px-2 text-teal-400 font-bold">Reviews</span>
          </h1>
          <p className="text-xl max-w-3xl">
            Hear what our clients have to say about their experience working
            with Film Craft Studios.
          </p>

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
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Get Started
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default TestimonialsPage;
