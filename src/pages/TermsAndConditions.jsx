import React from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BlurredCircle from "../components/BlurredCircle";
import { useInView } from "react-intersection-observer";

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

const TermsAndConditions = () => {
  return (
    <div className="flex flex-col items-center min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Blurs */}
      <BlurredCircle color="bg-blue-400" positionClass="-top-[10%] left-[10%]" />
      <BlurredCircle color="bg-green-400" positionClass="top-[60%] right-[0%]" />
      <BlurredCircle color="bg-blue-400" positionClass="top-[110%] left-0 -translate-x-[50%]" />

      <NavBar />

      {/* External Horizontal Banner */}
      <img
        src="https://images.unsplash.com/photo-1600369672203-d3a9e5c35692"
        alt="Terms Banner"
        className="w-full h-64 object-cover object-center"
        loading="lazy"
      />

      <div className="w-full max-w-4xl px-6 md:px-12 lg:px-20 py-24">
        <FadeInView>
          <h1 className="text-3xl md:text-5xl font-bold mb-8">
            Terms & <span className="italic font-light">Conditions</span>
          </h1>
        </FadeInView>

        <FadeInView delay={0.1}>
          <div className="space-y-12 text-gray-300 text-base leading-7">
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">1. Terms of Website Use</h2>
              <p>
                By accessing our website (www.FilmCraftStudios.com), you agree to comply with these terms. If you disagree, please discontinue use.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">2. Other Applicable Terms</h2>
              <p>
                Please review our <a href="/privacy-policy" className="underline text-white">Privacy Policy</a> for how we handle your data.
              </p>
              <img
                src="https://images.unsplash.com/photo-1612831455543-11903f54069c"
                alt="Privacy Illustration"
                className="w-full max-w-md mt-4 rounded-xl shadow-lg"
                loading="lazy"
              />
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">3. User Responsibilities</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Ensure accurate information is provided.</li>
                <li>Follow applicable laws while using our service.</li>
              </ul>
              <img
                src="https://images.unsplash.com/photo-1603961594063-2e8b91be3e77"
                alt="User Rules"
                className="w-full max-w-lg mt-4 rounded-xl shadow-lg"
                loading="lazy"
              />
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">4. Changes to These Terms</h2>
              <p>
                We may revise these terms from time to time. Continuing to use the site means you accept the changes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">5–11. Operations, IP & Legal Jurisdiction</h2>
              <p>
                We do not guarantee uninterrupted access. You agree not to misuse the site. Legal matters will be governed by English law. Content is IP protected.
              </p>
              <img
                src="https://images.unsplash.com/photo-1556742400-b5dbb8f7b39f"
                alt="Legal Docs"
                className="w-full max-w-lg mt-4 rounded-xl shadow-lg"
                loading="lazy"
              />
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">12. Contact</h2>
              <p>
                For concerns or clarification, email us at <a href="mailto:info@filmcraftstudios.com" className="underline text-white">info@filmcraftstudios.com</a>.
              </p>
            </section>
          </div>
        </FadeInView>
      </div>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
