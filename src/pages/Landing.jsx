import React from "react";
import NavBar from "../components/NavBar";
import ScrollFloat from "../components/ScrollFloatText";
import CircularGallery from "../components/CircularGallery";
import VideoCarousel from "../components/ReelVideoCarousel";
import ReelVideoCarousel from "../components/ReelVideoCarousel";
import SqVideoCarousel from "../components/SqVideoCarousel copy";
import BasicButton from "../components/BasicButton";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <div className="flex flex-col items-center bg-black min-h-screen w-full">
      
      {/* Navigation bar - full width */}
      <div className="w-full">
        <NavBar />
      </div>

      {/* Main content container with responsive max-width */}
      <div className="w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Hero video section */}
        <div className="relative w-full h-auto aspect-video">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-auto object-cover rounded-sm"
            onEnded={(e) => e.target.play()}
          >
            <source
              src="https://res.cloudinary.com/dgwxaup3v/video/upload/v1741803762/nw8051j68aiit9dmjpd5.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Description text */}
        <div className="text-white font-light text-center md:text-2xl lg:text-3xl mt-12">
          By collaborating with Film Craft Studios, you'll enjoy numerous
          benefits that will elevate your brand's success 💯 to new heights. At
          Film Craft Studios, our bespoke video editing 📽️ and content creation
          📝 services are designed to unlock 🔓 the full potential of your ideas
          💡, transforming them into compelling visual narratives. With our
          expertise, your brand 🌿 will effortlessly stand out, engaging
          audiences 😊 with professionally edited videos that leave a lasting
          impact 💖.
        </div>

        {/* Why Choose Us section */}
        <div className="py-16 text-white font-bold text-xl md:text-2xl lg:text-4xl">
          <h2>
            Why Choose Film Craft{" "}
            <span className="italic font-light">Studios</span> ?
          </h2>

          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {/* First Row (Using First 2 Columns) */}
            <div className="md:col-span-2 bg-gray-800 p-6 rounded-lg">
              Feature 1
            </div>
            <div className="hidden md:block"></div> {/* Empty grid space */}
            {/* Second Row (Using Last 2 Columns) */}
            <div className="hidden md:block"></div> {/* Empty grid space */}
            <div className="md:col-span-2 bg-gray-800 p-6 rounded-lg">
              Feature 2
            </div>
          </div>
        </div>

        {/* Enchant Your Audience section */}
        <div className="text-white py-16">
          <div className="font-bold text-xl md:text-2xl lg:text-4xl">
            <h2>
              Enchant Your <span className="italic font-light">Audience</span>
            </h2>
          </div>
          <div style={{ height: "600px", position: "relative" }}>
            <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
          </div>
        </div>
      </div>

      {/* Video carousels - full width sections */}
      <div className=" text-white py-16">
        <div className="font-bold text-xl md:text-2xl lg:text-4xl overflow-hidden">
          <h2>
            Reel <span className="italic font-light">Video</span>
          </h2>
        </div>
        <ReelVideoCarousel></ReelVideoCarousel>
      </div>
      <div className="text-white py-16">
        <div className="font-bold text-xl md:text-2xl lg:text-4xl">
          <h2>
            Motion <span className="italic font-light">Video</span>
          </h2>
        </div>
        <SqVideoCarousel></SqVideoCarousel>
      </div>

      {/* Back to constrained width for pricing section */}
      <div className="w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl px-4 sm:px-6 md:px-8">
        <div className="text-white py-16">
          <div className="text-xl md:text-2xl lg:text-4xl font-bold">
            <h2>
              Custom <span className="italic font-light">Pricing</span>
            </h2>
          </div>
          <div className="text-center md:text-2xl p-8 my-16 border rounded-xl font-light">
            <div className="pb-8">
              <div className="font-bold md:text-2xl">Flexible Options</div>
              Tailor your package to suit your specific project requirements and
              goals.
            </div>
            <div className="pb-8">
              <div className="font-bold md:text-2xl">Transparent Pricing</div>
              No hidden fees—what you see is what you get with our
              straightforward pricing.
            </div>
            <div>
              <div className="font-bold md:text-2xl">Expert Support</div>
              Our team is here to assist you every step of the way.
            </div>
            <div className="py-8">
              <hr />
            </div>
            <div className="flex justify-center">
              <BasicButton>Get Details</BasicButton>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
