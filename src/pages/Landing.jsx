import React from "react";
import NavBar from "../components/NavBar";
import ScrollFloat from "../components/ScrollFloatText";
import CircularGallery from "../components/CircularGallery";

const Landing = () => {
  return (
    <div className="flex-col items-center bg-black h-full w-full px-16">
      <div>
        <NavBar />
      </div>

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

      <div className="text-white text-center md:text-2xl lg:text-4xl">
        {/* <ScrollFloat
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.03}
        > */}
        By collaborating with Film Craft Studios, you'll enjoy numerous benefits
        that will elevate your brand's success 💯 to new heights. At Film Craft
        Studios, our bespoke video editing 📽️ and content creation 📝 services
        are designed to unlock 🔓 the full potential of your ideas 💡,
        transforming them into compelling visual narratives. With our expertise,
        your brand 🌿 will effortlessly stand out, engaging audiences 😊 with
        professionally edited videos that leave a lasting impact 💖.
        {/* </ScrollFloat> */}
      </div>

      <div className="py-16 text-white font-bold text-xl md:text-2xl lg:text-4xl">
  <h2>
    Why Choose Film Craft <span className="italic font-light">Studios</span> ?
  </h2>

  {/* Grid Container */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
    {/* First Row (Using First 2 Columns) */}
    <div className="md:col-span-2 bg-gray-800 p-6 rounded-lg">Feature 1</div>
    <div className="hidden md:block"></div> {/* Empty grid space */}

    {/* Second Row (Using Last 2 Columns) */}
    <div className="hidden md:block"></div> {/* Empty grid space */}
    <div className="md:col-span-2 bg-gray-800 p-6 rounded-lg">Feature 2</div>
  </div>
</div>


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
  );
};

export default Landing;
