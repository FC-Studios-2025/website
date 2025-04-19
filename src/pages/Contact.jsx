import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BlurredCircle from "../components/BlurredCircle";
import ContactForm from "../components/ContactForm";

const FadeInView = ({ children, delay = 0, duration = 0.5, className = "" }) => {
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
      <BlurredCircle color="bg-purple-400" positionClass="-top-[10%] left-[5%]" />
      <BlurredCircle color="bg-pink-400" positionClass="top-[80%] right-[0%]" />
      <BlurredCircle color="bg-purple-400" positionClass="top-[110%] left-[10%]" />

      <NavBar />

      <main className="w-full max-w-3xl px-6 md:px-12 lg:px-20 py-24">
        <FadeInView>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Contact <span className="italic font-light">Us</span>
          </h1>
        </FadeInView>

        <FadeInView delay={0.1}>
          <p className="text-gray-300 text-base leading-7 mb-12">
            We’d love to hear from you — whether you have a question, feedback, or a collaboration in mind.
            Fill out the form below and we’ll get back to you as soon as possible.
          </p>
        </FadeInView>

        <FadeInView delay={0.2}>
          <ContactForm />
        </FadeInView>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
