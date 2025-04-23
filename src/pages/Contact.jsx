import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BlurredCircle from "../components/BlurredCircle";
import ContactForm from "../components/ContactForm";

const FadeInView = ({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
}) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

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

const Contact = () => {
  return (
    <div className="flex flex-col items-center min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Blurs */}
      <BlurredCircle
        color="bg-blue-400"
        positionClass="-top-[12%] left-[20%] md:-top-[40%] md:left-[15%] lg:left-[22%] lg:-top-[20%]"
      />
      <BlurredCircle
        color="bg-green-400"
        positionClass="-top-[12%] right-[20%] md:-top-[40%] md:right-[15%] lg:right-[22%] lg:-top-[20%]"
      />
      {/* <BlurredCircle
        color="bg-blue-400"
        positionClass="top-[60%] right-[0%] md:top-[90%] md:translate-x-[70%] lg:translate-x-[60%] lg:top-[130%]"
      /> */}
      <NavBar />

      {/* Banner */}
      <div className="w-full flex flex-col md:flex-row md:h-[400px] mt-18 md:mt-24">
        {/* Image Section */}
        <div className="w-full md:w-2/3">
          <img
            src="https://images.unsplash.com/photo-1533750349088-cd871a92f312"
            alt="Privacy Banner"
            className="w-full h-64 md:h-full object-cover object-center"
            loading="lazy"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/3 flex flex-col justify-center bg-amber-100 p-6 md:p-10">
          <div className="flex flex-col md:flex-row items-center mb-4">
            <div className="w-40 h-40 md:w-40 md:h-40 mb-4 md:mb-0 md:mr-4">
              <iframe
                src="https://lottie.host/embed/90bedcc4-bc34-45f6-86e9-2104e6892a2b/DQ5YkoXafY.json"
                className="w-full h-full"
              ></iframe>
            </div>
            <p className="text-black text-base md:text-lg mb-4">
              Reach out to our team with questions, feedback, or support needs
              through our contact form, email, or phone.
            </p>
          </div>

          <h3 className="text-lg font-medium text-gray-800 mb-2">Email</h3>

          <a
            href="mailto:info@filmcraftstudios.com"
            className="text-blue-600 hover:text-blue-800 transition-colors text-base md:text-lg font-medium underline"
          >
            info@filmcraftstudios.com
          </a>
        </div>
      </div>

      <main className="relative py-20 md:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Contact <span className="italic font-light">Us</span>
            </h1>
          </FadeInView>

          <FadeInView delay={0.1}>
            <p className="text-gray-300 text-base leading-7 mb-12">
              We’d love to hear from you — whether you have a question,
              feedback, or a collaboration in mind. Fill out the form below and
              we’ll get back to you as soon as possible.
            </p>
          </FadeInView>

          <FadeInView delay={0.2}>
            <ContactForm />
          </FadeInView>
        </div>
      </main>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
