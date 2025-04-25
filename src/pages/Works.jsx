import React from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import ReelVideoCarousel from "../components/ReelVideoCarousel";
import SqVideoCarousel from "../components/SqVideoCarousel copy";
import Footer from "../components/Footer";
import BlurredCircle from "../components/BlurredCircle";
import { useInView } from "react-intersection-observer";

// Fade-in animation component
const FadeInView = ({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Slide-in animation component
const SlideInView = ({
  children,
  direction = "left",
  delay = 0,
  duration = 0.5,
  className = "",
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className="flex flex-col items-center min-h-screen w-full overflow-hidden">
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
        positionClass="top-[60%] right-[0%] md:top-[80%] md:translate-x-[70%] lg:translate-x-[60%] lg:top-[100%]"
      />
      <BlurredCircle
        color="bg-green-400"
        positionClass="top-[110%] left-0 -translate-x-[50%] md:top-[160%] lg: lg:top-[160%] lg:-translate-x-[50%]"
      />
      {/*  */}
      <BlurredCircle
        color="bg-blue-400"
        positionClass="top-[180%] right-[0%] md:hidden"
      />
      {/* <BlurredCircle
        color="bg-green-400"
        positionClass="top-[260%] left-0 -translate-x-[50%] md:hidden"
      /> */}
      {/*  */}
      {/* <BlurredCircle
        color="bg-blue-400"
        positionClass="top-[320%] right-[0%] md:hidden"
      /> */}
      <div className="w-full">
        <NavBar />
      </div>
      <div className="w-full max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-7xl px-4 sm:px-6 md:px-8 mx-auto mt-18 md:mt-24">

      <FadeInView>
          <div className="text-white py-10 md:py-16">
            <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl mb-4">Our Creative <span className="italic font-light">Portfolio</span></h1>
            <p className="text-lg text-gray-300 mb-6 max-w-3xl">
              Welcome to our showcase of visual stories. Each project represents our commitment to crafting compelling narratives through innovative visuals and cutting-edge techniques.
            </p>
            <p className="text-gray-400 mb-8 max-w-2xl">
              Browse through our collection of work spanning various industries and styles. From captivating CGI animations to dynamic motion graphics, our portfolio demonstrates our versatility and creative approach to visual storytelling.
            </p>
          </div>
        </FadeInView>
        
        <div className="text-white py-16">
          <FadeInView>
            <div className="font-bold text-xl md:text-2xl lg:text-4xl overflow-hidden">
              <h2>
                CGI <span className="italic font-light">Videos</span>
              </h2>
            </div>
          </FadeInView>
          
          <FadeInView delay={0.2}>
            <ReelVideoCarousel />
          </FadeInView>
        </div>
        <div className="text-white">
          <FadeInView>
            <div className="font-bold text-xl md:text-2xl lg:text-4xl">
              <h2>
                Video <span className="italic font-light">Editing</span>
              </h2>
            </div>
          </FadeInView>
          <FadeInView delay={0.2}>
            
          </FadeInView>
        </div>
        <div className="text-white">
          <FadeInView>
            <div className="font-bold text-xl md:text-2xl lg:text-4xl">
              <h2>
                Motion <span className="italic font-light">Graphics</span>
              </h2>
            </div>
          </FadeInView>
          <FadeInView delay={0.2}>
            <SqVideoCarousel />
          </FadeInView>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Works;
