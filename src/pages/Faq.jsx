import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BlurredCircle from "../components/BlurredCircle";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What services do you offer at Film Craft Studios?",
    answer: (
      <>
        At Film Craft Studios, we provide a comprehensive range of video
        post-production and content creation services, including video editing,
        CGI, visual effects, motion graphics, graphic design, colour grading,
        and sound design. We also tailor content for platforms like social media
        and marketing campaigns, transforming raw footage into compelling visual
        narratives.
      </>
    ),
  },
  {
    question: "How do I get started with Film Craft Studios?",
    answer: (
      <>
        Getting started is easy. Reach out through our{" "}
        <Link to="/contact" className="underline text-blue-400">
          Contact Us
        </Link>{" "}
        page or email us directly by{" "}
        <a href="mailto:info@filmcraftstudios.com" className="underline text-blue-400">
          clicking here
        </a>
        . We'll arrange a consultation to discuss your goals, requirements, and
        timelines.
      </>
    ),
  },
  {
    question: "What is your typical project turnaround time?",
    answer: (
      <>
        It depends on the complexity and scope of the project. We provide a
        tailored timeline after the initial consultation and are committed to
        meeting agreed-upon deadlines.
      </>
    ),
  },
  {
    question:
      "Can I provide specific instructions or feedback during the editing process?",
    answer: (
      <>
        Absolutely! We encourage collaboration. You can provide specific
        instructions and feedback at any stage of the editing process. Open
        communication ensures your vision is realized.
      </>
    ),
  },
  {
    question: "What file formats do you accept?",
    answer: (
      <>
        We accept a wide range of formats including MP4, MOV, AVI, JPEG, PNG,
        PDF and more. If you need something specific, just let us know and we'll
        do our best to accommodate.
      </>
    ),
  },
  {
    question: "What types of videos do you specialize in?",
    answer: (
      <>
        We handle everything from corporate and promotional videos to event
        coverage, documentaries, and social media content. Whether it's an
        advertisement or a brand story, we deliver.
      </>
    ),
  },
  {
    question: "Can I provide my own footage for editing?",
    answer: (
      <>
        Yes! We can enhance, clean, and professionally edit your existing
        footage to deliver a polished final product.
      </>
    ),
  },
  {
    question: "What is your pricing structure?",
    answer: (
      <>
        Pricing varies based on factors like editing complexity, video length,
        and additional services. For an accurate quote, please{" "}
        <Link to="/contact" className="underline text-blue-400">
          contact us
        </Link>{" "}
        directly.
      </>
    ),
  },
  {
    question: "Do you provide revisions?",
    answer: (
      <>
        Yes. We offer revisions to ensure complete satisfaction. We work with
        you to make the necessary changes until you're happy with the result.
      </>
    ),
  },
  {
    question: "Can you handle large-scale projects?",
    answer: (
      <>
        Definitely. We have the infrastructure and expertise to handle projects
        of all sizes, from single videos to multi-video campaigns.
      </>
    ),
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-700 py-4">
      <button
        className="flex justify-between items-center w-full text-left text-lg font-semibold text-white"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span className="text-xl text-purple-400">{isOpen ? "✖" : "+"}</span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="text-gray-300 text-base leading-7 pt-3">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

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
      <BlurredCircle
        color="bg-blue-400"
        positionClass="top-[60%] right-[0%] md:top-[90%] md:translate-x-[70%] lg:translate-x-[55%] lg:top-[120%]"
      />

      <NavBar />

      <main className="w-full max-w-4xl px-6 md:px-12 lg:px-20 py-24">
        <h1 className="text-3xl md:text-5xl font-bold mb-10">
          Frequently Asked <span className="italic font-light">Questions</span>
        </h1>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={`${index + 1}. ${faq.question}`}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>

        <p className="text-gray-400 text-sm mt-16">
          If you have additional questions,{" "}
          <Link to="/contact" className="text-purple-400 underline">
            contact us here
          </Link>
          .
        </p>
      </main>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default FAQ;