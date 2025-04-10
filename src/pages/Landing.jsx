import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import NavBar from "../components/NavBar";
import CircularGallery from "../components/CircularGallery";
import ReelVideoCarousel from "../components/ReelVideoCarousel";
import SqVideoCarousel from "../components/SqVideoCarousel copy";
import BasicButton from "../components/BasicButton";
import Footer from "../components/Footer";
import BlurredCircle from "../components/BlurredCircle";
import ContactForm from "../components/ContactForm";

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

const handleEmailClick = () => {
  window.location.href = "mailto:info@filmcraftstudios.com";
};

const Landing = () => {
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
        positionClass="top-[60%] right-[0%] md:top-[90%] md:translate-x-[70%] lg:translate-x-[60%] lg:top-[130%]"
      />
      <BlurredCircle
        color="bg-green-400"
        positionClass="top-[110%] left-0 -translate-x-[50%] md:top-[180%] lg: lg:top-[180%] lg:-translate-x-[50%]"
      />
      {/*  */}
      <BlurredCircle
        color="bg-blue-400"
        positionClass="top-[180%] right-[0%] md:top-[260%] md:translate-x-[70%] lg:translate-x-[60%] lg:top-[330%]"
      />
      <BlurredCircle
        color="bg-green-400"
        positionClass="top-[260%] left-0 -translate-x-[50%] md:top-[380%] lg: lg:top-[400%] lg:-translate-x-[50%]"
      />
      {/*  */}
      <BlurredCircle
        color="bg-blue-400"
        positionClass="top-[320%] right-[0%] md:hidden"
      />
      <BlurredCircle
        color="bg-green-400"
        positionClass="top-[400%] left-0 -translate-x-[50%] md:hidden"
      />

      {/* Navigation bar - full width */}
      <div className="w-full">
        <NavBar />
      </div>

      {/* Main content container with responsive max-width */}
      <div className="w-full max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl px-4 sm:px-6 md:px-8 mx-auto mt-18 md:mt-24">
        {/* Hero video section */}
        <FadeInView duration={0.8}>
          <div className="relative aspect-video shadow-lg shadow-gray-500">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-auto object-cover rounded-sm"
              onEnded={(e) => e.target.play()}
            >
              <source
                src="https://res.cloudinary.com/dragkodnu/video/upload/v1743306230/Rectangle%20Videos/fp2rmpv19sccnxkaku7m.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </FadeInView>

        {/* Description text */}
        <FadeInView delay={0.3} duration={0.7}>
          <div className="text-white font-light text-center md:text-2xl lg:text-3xl mt-12">
            We are Film Craft Studios. By collaborating with us, you'll enjoy
            numerous benefits that will elevate your brand's success 💯 to new
            heights. Our bespoke production services 📽️📝 bring your ideas 💡to
            life, transforming them into captivating visual stories. With our
            expertise, your brand 🌿 will stand out and engage audiences 😊,
            leaving a lasting impact 💖.
          </div>
        </FadeInView>

        {/* Why Choose Us section */}
        <div className="py-16 text-white font-bold text-xl md:text-2xl lg:text-4xl">
          <FadeInView>
            <h2>
              Why Choose Film Craft{" "}
              <span className="italic font-light">Studios</span> ?
            </h2>
          </FadeInView>

          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {/* First Row (Using First 2 Columns) */}
            <SlideInView direction="left" className="md:col-span-2">
              <div className="bg-gray-800 p-6 rounded-lg">Feature 1</div>
            </SlideInView>
            <div className="hidden md:block"></div> {/* Empty grid space */}
            {/* Second Row (Using Last 2 Columns) */}
            <div className="hidden md:block"></div> {/* Empty grid space */}
            <SlideInView
              direction="right"
              delay={0.2}
              className="md:col-span-2"
            >
              <div className="bg-gray-800 p-6 rounded-lg">Feature 2</div>
            </SlideInView>
          </div>
        </div>

        {/* Enchant Your Audience section */}
        <div className="text-white py-16">
          <FadeInView>
            <div className="font-bold text-xl md:text-2xl lg:text-4xl">
              <h2>
                Enchant Your <span className="italic font-light">Audience</span>
              </h2>
            </div>
          </FadeInView>
          <FadeInView delay={0.2}>
            <div style={{ height: "45vh", position: "relative" }}>
              <CircularGallery
                bend={1}
                textColor="#ffffff"
                borderRadius={0.05}
              />
            </div>
          </FadeInView>
        </div>

        {/* Video carousels - full width sections */}
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
                Motion <span className="italic font-light">Graphics</span>
              </h2>
            </div>
          </FadeInView>
          <FadeInView delay={0.2}>
            <SqVideoCarousel />
          </FadeInView>
        </div>

        <div className="text-white">
          <FadeInView>
            <div className="text-xl md:text-2xl lg:text-4xl font-bold">
              <h2>
                Custom <span className="italic font-light">Pricing</span>
              </h2>
            </div>
          </FadeInView>

          <FadeInView delay={0.3} duration={0.8}>
            <div className="text-center md:text-2xl p-8 my-10 border rounded-xl font-light shadow-lg shadow-gray-700 text-gray-300">
              <motion.div
                className="pb-8"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="font-bold md:text-2xl text-white">
                  Flexible Options
                </div>
                Tailor your package to suit your specific project requirements
                and goals.
              </motion.div>

              <motion.div
                className="pb-8"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="font-bold md:text-2xl text-white">
                  Transparent Pricing
                </div>
                No hidden fees—what you see is what you get with our
                straightforward pricing.
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="font-bold md:text-2xl text-white">
                  Expert Support
                </div>
                Our team is here to assist you every step of the way.
              </motion.div>

              <div className="py-8">
                <hr />
              </div>

              <div className="flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <BasicButton onClick={handleEmailClick}>Get Details</BasicButton>
                </motion.div>
              </div>
            </div>
          </FadeInView>
        </div>
        <div>
          <div className="text-white mt-20">
            <FadeInView>
              <ContactForm />
            </FadeInView>
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
