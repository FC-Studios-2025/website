import React from 'react';
import NavBar from '../components/NavBar';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div>
        <NavBar/>
      </div>
      {/* Header Section */}
      <div className="relative bg-gradient-to-b from-gray-900 to-black py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6 flex items-center">
            About
            <span className="px-2 text-teal-400 font-bold">Film Craft Studios</span>
          </h1>
          <p className="text-xl max-w-3xl">
            Where Stories Come to Life
          </p>
        </div>
      </div>

      {/* Welcome Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 border-l-4 border-teal-400 pl-6">
            <h2 className="text-3xl font-bold mb-6">Welcome to Film Craft Studios</h2>
            <p className="text-lg text-gray-300 mb-8">
              We believe in the power of storytelling. We don't just edit videos—we craft emotions, shape
              narratives, and bring ideas to life through stunning visuals. Every frame matters, and we ensure
              yours leaves a lasting impression.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🎬</span>
                <p className="text-gray-300">Creative storytelling, crafted with passion</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🚀</span>
                <p className="text-gray-300">From raw footage to cinematic brilliance</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🎥</span>
                <p className="text-gray-300">Seamlessly blending visuals, sound, and colour</p>
              </div>
            </div>
          </div>
          
          <p className="text-lg text-gray-300 mb-8">
            Whether it's brand content, promotional videos, or breathtaking visual effects, we are here
            to turn your vision into reality—beautifully, professionally, and with a creative edge.
          </p>
          <p className="text-xl font-semibold text-teal-400">
            Your vision, our craft. Let's create something extraordinary.
          </p>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10">Our Services</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-black bg-opacity-50 p-6 rounded-lg border border-gray-800 hover:border-teal-400 transition-colors">
              <div className="text-teal-400 mb-3">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1">Professional Video Editing</h3>
            </div>
            
            <div className="bg-black bg-opacity-50 p-6 rounded-lg border border-gray-800 hover:border-teal-400 transition-colors">
              <div className="text-teal-400 mb-3">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.6,2.3L12.8,1l-2,3.3L8.8,1L8,2.3l2.9,4.7L8,11.7L8.8,13l2-3.3l2,3.3l0.8-1.3L10.7,7L13.6,2.3z M18,7h-2.6L13,4 h1.5L18,7z M2,7h2.6L7,4H5.5L2,7z M18,13h-2.6L13,16h1.5L18,13z M2,13h2.6L7,16H5.5L2,13z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1">Graphic Designing</h3>
            </div>
            
            <div className="bg-black bg-opacity-50 p-6 rounded-lg border border-gray-800 hover:border-teal-400 transition-colors">
              <div className="text-teal-400 mb-3">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1">Content for Brands</h3>
            </div>
            
            <div className="bg-black bg-opacity-50 p-6 rounded-lg border border-gray-800 hover:border-teal-400 transition-colors">
              <div className="text-teal-400 mb-3">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1">Animated Posters</h3>
            </div>
            
            <div className="bg-black bg-opacity-50 p-6 rounded-lg border border-gray-800 hover:border-teal-400 transition-colors">
              <div className="text-teal-400 mb-3">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1">Promotional Videos</h3>
            </div>
            
            <div className="bg-black bg-opacity-50 p-6 rounded-lg border border-gray-800 hover:border-teal-400 transition-colors">
              <div className="text-teal-400 mb-3">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1">Colour Correction</h3>
            </div>
            
            <div className="bg-black bg-opacity-50 p-6 rounded-lg border border-gray-800 hover:border-teal-400 transition-colors">
              <div className="text-teal-400 mb-3">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1">Audio Enhancement</h3>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                Our Mission
                <span className="ml-2 w-12 h-1 bg-teal-400"></span>
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                At Film Craft Studios, we redefine excellence across every creative medium. From Creative
                Production to Post-Production, we blend artistry with innovation to craft content that
                captivates.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Every project is approached with meticulous craftsmanship, ensuring every edit, effect, and
                frame is polished to perfection. Our goal is to bring clarity to your vision, elevate your brand,
                and create content that commands attention.
              </p>
              <div className="flex flex-wrap items-center mt-8">
                <span className="bg-gray-800 text-white px-4 py-2 rounded-full mr-3 mb-3">Creative.</span>
                <span className="bg-gray-800 text-white px-4 py-2 rounded-full mr-3 mb-3">Polished.</span>
                <span className="bg-gray-800 text-white px-4 py-2 rounded-full mr-3 mb-3">Impactful.</span>
                <span className="text-teal-400 font-semibold ml-2 mb-3">That's our promise.</span>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                Our Vision
                <span className="ml-2 w-12 h-1 bg-teal-400"></span>
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Our vision is to be a leading force in the Multimedia industry, setting standards for creativity
                and quality. We strive to push the boundaries of visual storytelling, ensuring every project is
                unique and impactful.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-8 mt-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="text-2xl mr-3">✨</span>
                  By collaborating with Film Craft Studios
                </h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="text-teal-400 mr-2">•</span>
                    <span>You'll enjoy numerous benefits that will elevate your brand's success</span>
                  </li>
                  <li className="flex">
                    <span className="text-teal-400 mr-2">•</span>
                    <span>Access to premium editing techniques that make your content stand out</span>
                  </li>
                  <li className="flex">
                    <span className="text-teal-400 mr-2">•</span>
                    <span>Customized solutions tailored to your specific brand needs</span>
                  </li>
                  <li className="flex">
                    <span className="text-teal-400 mr-2">•</span>
                    <span>Timely delivery without compromising on quality</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-black bg-opacity-50 rounded-lg overflow-hidden transition-transform hover:scale-105">
              <div className="h-64 bg-gray-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
                <p className="text-teal-400 mb-3">Creative Director</p>
                <p className="text-gray-300">With over 10 years in film production, Sarah brings creative vision and technical expertise to every project.</p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-black bg-opacity-50 rounded-lg overflow-hidden transition-transform hover:scale-105">
              <div className="h-64 bg-gray-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Michael Chen</h3>
                <p className="text-teal-400 mb-3">Lead Editor</p>
                <p className="text-gray-300">Michael's attention to detail and masterful editing techniques transform raw footage into cinematic experiences.</p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-black bg-opacity-50 rounded-lg overflow-hidden transition-transform hover:scale-105">
              <div className="h-64 bg-gray-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Alex Rivera</h3>
                <p className="text-teal-400 mb-3">Motion Graphics Artist</p>
                <p className="text-gray-300">Alex specializes in creating stunning visual effects and animated elements that bring stories to life.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-300">
              Our talented team of creative professionals is dedicated to delivering exceptional results 
              that exceed your expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-900 p-8 rounded-lg border-l-4 border-teal-400">
              <p className="text-gray-300 mb-6 italic">
                "Film Craft Studios transformed our brand vision into a compelling visual narrative. 
                Their attention to detail and creative approach exceeded our expectations."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                <div className="ml-4">
                  <p className="font-semibold">David Turner</p>
                  <p className="text-sm text-gray-400">CEO, Vertex Marketing</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-gray-900 p-8 rounded-lg border-l-4 border-teal-400">
              <p className="text-gray-300 mb-6 italic">
                "Working with Film Craft Studios was a game-changer for our product launch. 
                Their promotional video captured the essence of our brand and resonated with our audience."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                <div className="ml-4">
                  <p className="font-semibold">Emily Zhao</p>
                  <p className="text-sm text-gray-400">Marketing Director, TechVision</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-t from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Bring Your Vision to Life?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Get in touch with our team today to discuss your project and discover how 
            Film Craft Studios can transform your ideas into captivating visual stories.
          </p>
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;