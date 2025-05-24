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
import ResponsiveSection from "../components/ResponsiveSection";
import HeroText from "../components/HeroText";
import CreativeApproachComponent from "../components/CreativeApproachComponent";
import SecondaryHeroText from "../components/SecondaryHeroText";
import { Link } from "react-router-dom";

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

const approachesList1 = [
  "Storytelling techniques",
  "Engaging visual narratives",
  "Unique angle selection",
  "Emotional content resonance",
  "Attention-grabbing openings",
  "Consistent style guidance",
  "Incorporate trends subtly",
  "Effective pacing tips",
  "Audience interaction ideas",
  "Surprising plot twists",
  "Humor infusion methods",
  "Symbolism and metaphors",
  "Visual symbolism tips",
  "Authenticity emphasis",
];
const approachesList2 = [
  "Compelling intros",
  "Audience engagement hooks",
  "Call-to-action integration",
  "Thumbnail optimization",
  "SEO-friendly titles",
  "Consistent posting schedule",
  "Collaborations for reach",
  "Social media sharing",
  "Live interaction sessions",
];

const Landing = () => {
  // Video data formatted for the ReelVideoCarousel component
  const CGIreelsData = [
    {
      id: "video1",
      src: "https://www.fcscreative.co.uk/wp-content/uploads/2025/05/r1.2.mp4",
      aspectRatio: "9/16",
    },
    {
      id: "video2",
      src: "https://www.fcscreative.co.uk/wp-content/uploads/2025/05/r1.3.mp4",
      aspectRatio: "9/16",
    },
    {
      id: "video8",
      src: "https://www.fcscreative.co.uk/wp-content/uploads/2025/05/r1.4.mp4",
      aspectRatio: "9/16",
    },
    {
      id: "video9",
      src: "https://www.fcscreative.co.uk/wp-content/uploads/2025/05/r1.5.mp4",
      aspectRatio: "9/16",
    },
    {
      id: "video10",
      src: "https://www.fcscreative.co.uk/wp-content/uploads/2025/05/r1.6.mp4",
      aspectRatio: "9/16",
    },
    {
      id: "video11",
      src: "https://www.fcscreative.co.uk/wp-content/uploads/2025/05/r11.mp4",
      aspectRatio: "9/16",
    },
  ];

  const VideoEditing = [
    {
      id: "video3",
      src: "https://www.fcscreative.co.uk/wp-content/uploads/2025/05/r3.mp4",
      aspectRatio: "9/16",
    },
    {
      id: "video4",
      src: "https://www.fcscreative.co.uk/wp-content/uploads/2025/05/r4.mp4",
      aspectRatio: "9/16",
    },
    {
      id: "video5",
      src: "https://www.fcscreative.co.uk/wp-content/uploads/2025/05/r5.mp4",
      aspectRatio: "9/16",
    },
    {
      id: "video6",
      src: "https://www.fcscreative.co.uk/wp-content/uploads/2025/05/r6.mp4",
      aspectRatio: "9/16",
    },
    {
      id: "video7",
      src: "https://www.fcscreative.co.uk/wp-content/uploads/2025/05/r7.mp4",
      aspectRatio: "9/16",
    },
  ];

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
        positionClass="top-[110%] left-0 -translate-x-[50%] md:top-[180%] lg:top-[180%] lg:-translate-x-[50%]"
      />
      {/*  */}
      <BlurredCircle
        color="bg-blue-400"
        positionClass="top-[180%] right-[0%] md:top-[410%] md:translate-x-[70%] lg:translate-x-[60%] lg:top-[330%]"
      />
      <BlurredCircle
        color="bg-green-400"
        positionClass="top-[260%] left-0 -translate-x-[50%] md:top-[560%] lg:top-[400%] lg:-translate-x-[50%]"
      />
      <BlurredCircle
        color="bg-blue-400"
        positionClass="top-[300%] right-[0%] md:top-[790%] md:translate-x-[70%] lg:translate-x-[60%] lg:top-[490%]"
      />
      <BlurredCircle
        color="bg-green-400"
        positionClass="top-[410%] left-0 -translate-x-[50%] md:top-[870%] lg:top-[560%] lg:-translate-x-[50%]"
      />
      <BlurredCircle
        color="bg-blue-400"
        positionClass="top-[460%] right-[0%] md:top-[1000%] md:translate-x-[70%] lg:translate-x-[60%] lg:top-[690%]"
      />
      <BlurredCircle
        color="bg-green-400"
        positionClass="top-[560%] left-0 -translate-x-[50%] md:top-[1100%] lg:top-[720%] lg:-translate-x-[50%]"
      />
      <BlurredCircle
        color="bg-blue-400"
        positionClass="top-[640%] right-[0%] md:top-[1300%] md:translate-x-[70%] lg:translate-x-[60%] lg:top-[860%]"
      />
      <BlurredCircle
        color="bg-green-400"
        positionClass="top-[700%] left-0 -translate-x-[50%] md:top-[1350%] lg:top-[920%] lg:-translate-x-[50%]"
      />
      {/*  */}
      {/* <BlurredCircle
        color="bg-blue-400"
        positionClass="top-[320%] right-[0%] md:hidden"
      />
      <BlurredCircle
        color="bg-green-400"
        positionClass="top-[400%] left-0 -translate-x-[50%] md:hidden"
      /> */}

      {/* Navigation bar - full width */}
      <div className="w-full">
        <NavBar />
      </div>

      {/* Main content container with responsive max-width */}
      <div className="w-full max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-7xl px-4 sm:px-6 md:px-8 mx-auto mt-18 md:mt-24">
        <div className="w-full">
          <HeroText />
        </div>
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
                src="https://www.fcscreative.co.uk/wp-content/uploads/2025/05/fcsad.mp4"
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
            heights. Our bespoke production services 📽️📝 bring your ideas 💡 to
            life, transforming them into captivating visual stories. With our
            expertise, your brand 🌿 will stand out and engage audiences 😊,
            leaving a lasting impact 💖.
            <div className="flex justify-center">
              <Link
                to="/about"
                className="flex items-center justify-center rounded-md font-medium transition-all duration-200 gap-2 
               border text-white px-8 py-2 text-base hover:opacity-80 my-4 md:my-8"
              >
                Know More
              </Link>
            </div>
          </div>
        </FadeInView>

        {/* Why Choose Us section */}
        <div className="py-16 text-white font-bold text-xl md:text-2xl lg:text-4xl">
          <FadeInView>
            <h2>
              Why Choose Film Craft{" "}
              <span className="italic font-light">Studios</span> ?
            </h2>
            <p className="text-xl font-light py-2 md:py-4 text-gray-200">
              We make creative projects seamless — with a thoughtful,
              client-first approach that puts your vision at the centre.
            </p>
          </FadeInView>

          {/* Grid Container */}
          <div>
            <SlideInView direction="left">
              <ResponsiveSection
                heading1={"Creative Collaboration, Not Limitation"}
                description1={
                  "We work closely with you from the outset, valuing your input and shaping it into something unique and engaging."
                }
                imgUrl1={
                  "https://www.fcscreative.co.uk/wp-content/uploads/2025/05/card1img.jpg"
                }
                altText1={"gifAnimation"}
                heading2={"Clear, Consistent Communication"}
                description2={
                  "We keep communication open and straightforward throughout, so you always know where things stand — no chasing, no confusion. "
                }
                imgUrl2={
                  "https://assets4.lottiefiles.com/packages/lf20_zxmqc93z.json"
                }
                altText2={"gifAnimation"}
              />
            </SlideInView>

            <SlideInView direction="right" delay={0.2}>
              <ResponsiveSection
                heading1={"Fair and Honest Pricing"}
                description1={
                  "High-quality content shouldn’t break the bank. Our pricing is honest, competitive, and free from hidden extras — so you can budget with confidence."
                }
                imgUrl1={
                  "https://www.fcscreative.co.uk/wp-content/uploads/2025/05/card2img-scaled.jpg"
                }
                altText1={"gifAnimation"}
                heading2={"Reliable Turnarounds, Without Compromise"}
                description2={
                  "We know timing matters — whether it’s a launch or campaign, we stick to deadlines and deliver on time without compromising on quality."
                }
                imgUrl2={
                  "https://assets2.lottiefiles.com/packages/lf20_f8xnmcvu.json"
                }
                altText2={"gifAnimation"}
              />
            </SlideInView>
          </div>
        </div>

        <section className=" max-w-7xl mx-auto px-4 sm:px-6 lg:p-18">
          <FadeInView delay={0.3}>
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
                  src="https://www.fcscreative.co.uk/wp-content/uploads/2025/05/Purple-and-Blue-Meet-the-Drama-Teacher-Illustrative-Drama-Class-Education-Presentation-2.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </FadeInView>
        </section>

        <SecondaryHeroText />

        <section className=" max-w-7xl mx-auto px-4 sm:px-6 lg:p-18">
          <FadeInView delay={0.4}>
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
                  src="https://www.fcscreative.co.uk/wp-content/uploads/2025/05/Purple-and-Blue-Meet-the-Drama-Teacher-Illustrative-Drama-Class-Education-Presentation-2.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </FadeInView>
        </section>

        {/* Enchant Your Audience section */}
        <div className="text-white py-16">
          <FadeInView>
            <div className="font-bold md:pb-6 text-xl md:text-2xl lg:text-4xl">
              <h2>
                Enchant Your <span className="italic font-light">Audience</span>
              </h2>
            </div>
          </FadeInView>
          <FadeInView delay={0.2}>
            <div className="h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] relative w-full">
              <CircularGallery
                bend={1}
                textColor="#ffffff"
                borderRadius={0.02}
              />
            </div>
          </FadeInView>
        </div>

        {/* Creative Approach */}
        <div className="text-white pb-16">
          <FadeInView>
            <div className="font-bold text-xl md:text-2xl lg:text-4xl">
              <h2>
                Approach for{" "}
                <span className="italic font-light">Exceptional Outcome</span>
              </h2>
            </div>
          </FadeInView>
          <FadeInView delay={0.3}>
            <div className=" w-full">
              <CreativeApproachComponent approaches={approachesList1} />
            </div>
          </FadeInView>
        </div>

        {/* Video carousels - full width sections */}
        <div className="text-white">
          <FadeInView>
            <div className="font-bold text-xl md:text-2xl lg:text-4xl">
              <h2>
                Video <span className="italic font-light">Editing</span>
              </h2>
            </div>
          </FadeInView>
          <FadeInView delay={0.2}>
            <ReelVideoCarousel
              videos={VideoEditing}
              // carouselTitle="Featured Reels"
              // containerClassName="bg-white py-8"
            />
          </FadeInView>
        </div>
        <div className="text-white py-16">
          <FadeInView>
            <div className="font-bold text-xl md:text-2xl lg:text-4xl overflow-hidden">
              <h2>
                CGI <span className="italic font-light">Videos</span>
              </h2>
            </div>
          </FadeInView>

          <FadeInView delay={0.2}>
            <ReelVideoCarousel
              videos={CGIreelsData}
              // carouselTitle="Featured Reels"
              // containerClassName="bg-white py-8"
            />
          </FadeInView>
        </div>

        {/* Lead Conversion Rate */}
        <div className="text-white pb-16">
          <FadeInView>
            <div className="font-bold text-xl md:text-2xl lg:text-4xl">
              <h2>
                Improve Your{" "}
                <span className="italic font-light">Lead Conversion Rate</span>
              </h2>
            </div>
          </FadeInView>
          <FadeInView delay={0.3}>
            <div className=" w-full">
              <CreativeApproachComponent approaches={approachesList2} />
            </div>
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
            <div className="flex justify-center">
              <Link
                to="/works"
                className="flex items-center justify-center rounded-md font-medium transition-all duration-200 gap-2 
               border text-white px-8 py-2 text-base hover:opacity-80 my-4 md:my-8"
              >
                View More
              </Link>
            </div>
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
                Tailor your package to meet the specific needs, goals, and scope
                of your project. Whether you're after a one-off production or
                long-term collaboration, we adapt to suit you.
              </motion.div>

              <motion.div
                className="pb-8"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="font-bold md:text-2xl text-white">
                  Transparent Pricing
                </div>
                No hidden charges or unexpected extras—just clear, upfront
                pricing you can trust. What you see is exactly what you get.
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="font-bold md:text-2xl text-white">
                  Expert Guidance & Support
                </div>
                From your initial enquiry to the final delivery, our team is
                with you every step of the way, offering dedicated support and
                industry expertise.
              </motion.div>

              <div className="py-8">
                <hr />
              </div>

              <div className="flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <BasicButton onClick={handleEmailClick}>
                    Drop Us a Line
                  </BasicButton>
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
