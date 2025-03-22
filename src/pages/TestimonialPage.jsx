import React from 'react';
import FeaturedTestimonial from '../components/FeaturedTestimonial';
import Testimonials from '../components/Testimonials';
import TestimonialSlider from '../components/TestimonialSlider';

const TestimonialsPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-600 py-32">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/images/testimonials-hero.jpg" 
            alt="Film production background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Testimonials</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover why clients trust Film Craft Studios to bring their vision to life through stunning visuals and creative storytelling.
          </p>
        </div>
      </div>

      {/* Featured Testimonial */}
      <FeaturedTestimonial/>

      {/* Testimonial Grid */}
      <Testimonials />

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