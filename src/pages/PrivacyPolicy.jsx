import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BlurredCircle from "../components/BlurredCircle";
import { Link } from "react-router-dom";

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

const PrivacyPolicy = () => {
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
            <div className="w-auto h-auto mb-4 md:mb-0 md:mr-4">
              <iframe
                src="https://lottie.host/embed/03122dcb-fb98-435f-b134-d8188bd8918b/m2EnLbo3L7.json"
                className="w-full h-full"
              ></iframe>
            </div>
            <p className="text-black text-base md:text-lg mb-4">
              We respect your privacy and are committed to protecting your
              personal information; this policy outlines how we collect, use,
              and safeguard your data.
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

      <div className="w-full max-w-7xl px-6 md:px-12 lg:px-20 py-24">
        <FadeInView>
          <h1 className="text-3xl md:text-5xl font-bold mb-8">
            Privacy <span className="italic font-light">Policy</span>
          </h1>
        </FadeInView>

        <FadeInView delay={0.1}>
          <div className="space-y-12 text-gray-300 text-base leading-7">
            <section>
              <p>
                We value your privacy and are committed to protecting your
                personal information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">
                What We Collect
              </h2>
              <p>
                When you visit our website, we collect certain information. Most
                of this data is non-identifiable, and any personally
                identifiable information is only gathered with your consent.
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Your IP address</li>
                <li>The type and version of the web browser you used</li>
                <li>The time you spent on our pages</li>
              </ul>
              <img
                src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9"
                alt="Data Tracking Visual"
                className="w-full max-w-md mt-6 rounded-xl shadow-lg"
                loading="lazy"
              />
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">
                Personally Identifiable Info
              </h2>
              <p>
                If you reach out to us — for example, through email — we may
                store your name and contact details to respond appropriately.
                This is the only scenario where personal data is collected
                directly and voluntarily.
              </p>
              <p className="mt-2">We do not use cookies or tracking pixels.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">
                Anonymized Analytics
              </h2>
              <p>
                Other data, such as browser type and session duration, is
                collected purely for analytics. This information cannot be used
                to personally identify you and is only used to improve our
                service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">
                Questions?
              </h2>
              <p>
                If you have any concerns or questions about how your information
                is handled, please{" "}
                <Link to="/contact" className="underline text-blue-400">
                  contact us
                </Link>
                .
              </p>
            </section>
          </div>
        </FadeInView>
      </div>

      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
