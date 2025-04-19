import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BlurredCircle from "../components/BlurredCircle";

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

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col items-center min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Blurs */}
      <BlurredCircle color="bg-purple-400" positionClass="-top-[10%] left-[5%]" />
      <BlurredCircle color="bg-pink-400" positionClass="top-[80%] right-[0%]" />
      <BlurredCircle color="bg-purple-400" positionClass="top-[110%] left-[10%]" />

      <NavBar />

      {/* Banner */}
      <img
        src="https://images.unsplash.com/photo-1533750349088-cd871a92f312"
        alt="Privacy Banner"
        className="w-full h-64 object-cover object-center"
        loading="lazy"
      />

      <div className="w-full max-w-4xl px-6 md:px-12 lg:px-20 py-24">
        <FadeInView>
          <h1 className="text-3xl md:text-5xl font-bold mb-8">
            Privacy <span className="italic font-light">Policy</span>
          </h1>
        </FadeInView>

        <FadeInView delay={0.1}>
          <div className="space-y-12 text-gray-300 text-base leading-7">
            <section>
              <p>
                We value your privacy and are committed to protecting your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">What We Collect</h2>
              <p>
                When you visit our website, we collect certain information. Most of this data is non-identifiable, and any personally identifiable information is only gathered with your consent.
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
              <h2 className="text-xl font-semibold text-white mb-2">Personally Identifiable Info</h2>
              <p>
                If you reach out to us — for example, through email — we may store your name and contact details to respond appropriately. This is the only scenario where personal data is collected directly and voluntarily.
              </p>
              <p className="mt-2">
                We do not use cookies or tracking pixels.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">Anonymized Analytics</h2>
              <p>
                Other data, such as browser type and session duration, is collected purely for analytics. This information cannot be used to personally identify you and is only used to improve our service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">Questions?</h2>
              <p>
                If you have any concerns or questions about how your information is handled, please{" "}
                <a href="/contact" className="underline text-white">contact us</a>.
              </p>
            </section>
          </div>
        </FadeInView>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
