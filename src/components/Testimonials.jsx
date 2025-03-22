import React from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  // Testimonial data - in a real application, this might come from an API or CMS
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director, TechVision",
      content: "Film Craft Studios transformed our brand story into a visual masterpiece. Their attention to detail and creative vision exceeded our expectations. The promotional video they created for our product launch drove engagement beyond our projections.",
      image: "/images/testimonial-1.jpg",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Event Coordinator, Global Events",
      content: "Working with Film Craft Studios was seamless from start to finish. They captured the essence of our corporate event and delivered a highlight reel that perfectly balanced professionalism and creativity. Their color correction and audio enhancement made all the difference.",
      image: "/images/testimonial-2.jpg",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Creative Director, Artisan Brands",
      content: "I've worked with many video editors, but Film Craft Studios brings something special to each project. Their ability to blend visuals, sound, and narrative into a cohesive story is remarkable. They don't just edit videos—they craft experiences.",
      image: "/images/testimonial-3.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 relative inline-block">
            Client Testimonials
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-blue-600 mt-2"></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-6">
            Don't just take our word for it. Here's what our clients have to say about our work.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;