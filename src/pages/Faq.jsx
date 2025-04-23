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
        post-production and content creation services. Our expertise includes
        video editing, CGI, visual effects, graphic design, motion graphics,
        colour grading, and sound design.
        <br />
        We also create tailored content for a variety of platforms, including
        promotional videos, social media campaigns, and more. Our focus is on
        transforming raw footage into compelling visual narratives that leave a
        lasting impression
      </>
    ),
  },
  {
    question: "How do I get started with Film Craft Studios?",
    answer: (
      <>
        Getting started with Film Craft Studios is easy. Simply reach out via
        our{" "}
        <Link to="/contact" className="underline text-blue-400">
          Contact Us
        </Link>{" "}
        page on the website or drop us an email – just{" "}
        <a
          href="mailto:info@filmcraftstudios.com"
          className="underline text-blue-400"
        >
          click here
        </a>
        . We’ll arrange a consultation to discuss your project’s goals,
        requirements, and timeline. From understanding your vision to delivering
        the final product, our team will support you every step of the way.
      </>
    ),
  },
  {
    question: "What is your typical project turnaround time?",
    answer: (
      <>
        Turnaround times vary depending on the project's complexity and scope.
        However, we are committed to meeting agreed-upon deadlines and will
        provide a detailed timeline during the initial consultation phase.
      </>
    ),
  },
  {
    question:
      "Can I provide specific instructions or feedback during the editing process?",
    answer: (
      <>
        Absolutely! We value your input and collaboration. You can provide us
        with specific instructions, preferences, and feedback throughout the
        editing process. We believe in open communication and working closely
        with our clients to ensure their vision is brought to life.
      </>
    ),
  },
  {
    question: "What file formats do you accept?",
    answer: (
      <>
        We accept a wide range of file formats, including commonly used formats
        such as MP4, MOV, AVI, JPEG, PNG, PDF and more. If you have specific
        file format requirements, please let us know, and we will do our best to
        accommodate your needs.
      </>
    ),
  },
  {
    question: "What types of videos do you specialize in?",
    answer: (
      <>
        We specialise in a wide range of videos, including but not limited to
        corporate videos, promotional videos, social media content, event
        coverage, documentaries, and more. Whether you need a captivating
        advertisement or a compelling brand story, we have the expertise to
        bring your ideas to life.
      </>
    ),
  },
  {
    question: "Can I provide my own footage for editing?",
    answer: (
      <>
        Absolutely! If you have existing footage that you would like us to edit,
        we are more than happy to work with it. Our skilled team can enhance
        your footage, add special effects, improve audio quality, and create a
        polished final product.
      </>
    ),
  },
  {
    question: "What is your pricing structure?",
    answer: (
      <>
        Our pricing is tailored to each individual project, as the cost depends
        on factors such as the complexity of the editing required, the length of
        the footage, and any additional services requested. For accurate pricing
        information, we encourage you to{" "}
        <Link to="/contact" className="underline text-blue-400">
          contact us
        </Link>{" "}
        directly. We offer competitive rates without compromising on the quality
        of our work.
      </>
    ),
  },
  {
    question: "Do you provide revisions?",
    answer: (
      <>
        Yes, we provide revisions to ensure your satisfaction with the final
        product. We understand that minor adjustments may be necessary, and we
        are committed to working with you to make any required changes to meet
        your expectations.
      </>
    ),
  },
  {
    question: "Can you handle large-scale projects?",
    answer: (
      <>
        Yes, we have the capacity to handle both small and large-scale projects.
        Our team is equipped to manage projects of varying complexities and
        sizes. Whether you need a single video or a series of videos for a
        comprehensive campaign, we have the expertise and resources to deliver
        outstanding results.
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
            <div className="text-gray-300 text-base leading-7 pt-3">
              {answer}
            </div>
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
        If you have any additional questions or require further clarification, please do not hesitate to{" "}
          <Link to="/contact" className="text-purple-400 underline">
            contact us
          </Link>
          . We are here to assist you and make your video editing and content
          creation experience exceptional.
        </p>
      </main>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default FAQ;
