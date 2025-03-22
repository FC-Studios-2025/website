import React from 'react';

const FeaturedTestimonial = () => {
  return (
    <div className="bg-blue-600 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <div className="w-16 h-1 bg-white mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/3 mb-10 lg:mb-0">
            <div className="relative">
              <img 
                src="/images/featured-testimonial.jpg" 
                alt="Director of Photography" 
                className="rounded-lg shadow-xl w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-4 -right-4 bg-white text-blue-600 p-4 rounded-lg shadow-lg">
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 6.5C4.5 5.11929 5.61929 4 7 4C8.38071 4 9.5 5.11929 9.5 6.5C9.5 7.88071 8.38071 9 7 9C5.61929 9 4.5 7.88071 4.5 6.5Z" fill="currentColor"/>
                  <path d="M14.5 6.5C14.5 5.11929 15.6193 4 17 4C18.3807 4 19.5 5.11929 19.5 6.5C19.5 7.88071 18.3807 9 17 9C15.6193 9 14.5 7.88071 14.5 6.5Z" fill="currentColor"/>
                  <path d="M7 20C5.93913 20 4.92172 19.5786 4.17157 18.8284C3.42143 18.0783 3 17.0609 3 16C3 14.9391 3.42143 13.9217 4.17157 13.1716C4.92172 12.4214 5.93913 12 7 12C8.06087 12 9.07828 12.4214 9.82843 13.1716C10.5786 13.9217 11 14.9391 11 16C11 17.0609 10.5786 18.0783 9.82843 18.8284C9.07828 19.5786 8.06087 20 7 20Z" fill="currentColor"/>
                  <path d="M17 20C15.9391 20 14.9217 19.5786 14.1716 18.8284C13.4214 18.0783 13 17.0609 13 16C13 14.9391 13.4214 13.9217 14.1716 13.1716C14.9217 12.4214 15.9391 12 17 12C18.0609 12 19.0783 12.4214 19.8284 13.1716C20.5786 13.9217 21 14.9391 21 16C21 17.0609 20.5786 18.0783 19.8284 18.8284C19.0783 19.5786 18.0609 20 17 20Z" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3 lg:pl-16">
            <blockquote className="text-xl lg:text-2xl font-light leading-relaxed mb-8">
              "Film Craft Studios didn't just edit our documentary—they elevated the entire narrative. Their ability to weave together complex storylines while maintaining the emotional core of our subject matter was nothing short of remarkable. The color grading and sound design transformed our footage into a cinematic experience that moved our audience deeply."
            </blockquote>
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-blue-500 overflow-hidden border-2 border-white">
                <img 
                  src="/images/featured-client.jpg" 
                  alt="David Rodriguez" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-4">
                <p className="font-semibold text-xl">David Rodriguez</p>
                <p className="text-blue-300">Director, Horizon Films</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedTestimonial;