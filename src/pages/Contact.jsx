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

      <main className="relative py-20 md:pt-48">
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
