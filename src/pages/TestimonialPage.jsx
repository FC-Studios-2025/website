import React from 'react';
import FeaturedTestimonial from '../components/FeaturedTestimonial';
import Testimonials from '../components/Testimonials';
import TestimonialSlider from '../components/TestimonialSlider';
import NavBar from '../components/NavBar';

const TestimonialsPage = () => {
  return (
    <div>
      <div>
        <NavBar/>
      </div>
      {/* Hero Section */}
      <div className="relative py-32">
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-6">Testimonials</h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            Discover why clients trust Film Craft Studios to bring their vision to life through stunning visuals and creative storytelling.
          </p>
        </div>
      </div>

      {/* Featured Testimonial */}
      {/* <FeaturedTestimonial/> */}

      {/* Testimonial Grid */}
      {/* <Testimonials /> */}

      {/* Video Testimonial */}
      {/* <VideoTestimonialSection /> */}

      {/* Testimonial Slider */}
      <TestimonialSlider />

      {/* Call to Action */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Create Something Extraordinary?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our satisfied clients and let us help bring your creative vision to life with our professional video editing and production services.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-colors">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;