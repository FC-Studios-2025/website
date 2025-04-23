import React from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BlurredCircle from "../components/BlurredCircle";
import { useInView } from "react-intersection-observer";

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

const TermsAndConditions = () => {
  return (
    <div className=" flex flex-col items-center min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Blurs */}
      <BlurredCircle
        color="bg-blue-400"
        positionClass="-top-[12%] left-[20%] md:-top-[40%] md:left-[15%] lg:left-[22%] lg:-top-[20%]"
      />
      <BlurredCircle
        color="bg-green-400"
        positionClass="-top-[12%] right-[20%] md:-top-[40%] md:right-[15%] lg:right-[22%] lg:-top-[20%]"
      />

      {/* <NavBar /> */}

      {/* External Horizontal Banner */}
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
    <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">
      Terms & <span className="italic font-light">Conditions</span>
    </h1>
    <p className="text-black text-base md:text-lg">
      Learn how we handle your personal data and what steps we take to protect your privacy.
    </p>
  </div>
</div>


      <div className="w-full max-w-7xl px-6 md:px-12 lg:px-20 py-24">
        <FadeInView>
          <h1 className="text-3xl md:text-5xl font-bold mb-8">
            Terms & <span className="italic font-light">Conditions</span>
          </h1>
        </FadeInView>

        <FadeInView delay={0.1}>
          <div className="space-y-12 text-gray-300 text-base leading-7">
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">
                1. Terms of Website Use
              </h2>
              <p>
                By accessing our website (www.FilmCraftStudios.com), you agree
                to comply with these terms. If you disagree, please discontinue
                use.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">
                2. Other Applicable Terms
              </h2>
              <p>
                Please review our{" "}
                <a href="/privacy-policy" className="underline text-blue-400">
                  Privacy Policy
                </a>{" "}
                for how we handle your data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">
                3. User Responsibilities
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Ensure accurate information is provided.</li>
                <li>Follow applicable laws while using our service.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">
                4. Changes to These Terms
              </h2>
              <p>
                We may revise these terms from time to time. Continuing to use
                the site means you accept the changes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">
                5. Changes to the website
              </h2>
              <p>
                We may update the Website from time to time and may change the
                content at any time. However, please note that any of the
                content on the Website may be out of date at any given time, and
                we are under no obligation to update it. We do not guarantee
                that the Website, or any content on it, will be free from errors
                or omissions.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">
                6. Accessing the website
              </h2>
              <p>
                We do not guarantee that the Website, or any content on it, will
                always be available or be uninterrupted. Access to the Website
                is permitted on a temporary basis. We may suspend, withdraw,
                discontinue or change all or any part of the Website without
                notice. We will not be liable to you if for any reason the
                Website is unavailable at any time or for any period. You are
                responsible for making all arrangements necessary for you to
                have access to the Website. You are also responsible for
                ensuring that all persons who access the Website through your
                internet connection are aware of these terms of use and other
                applicable terms and conditions, and that they comply with them.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">
                7. Intellectual property rights
              </h2>
              <p>
                We are the owner or the licensee of all intellectual property
                rights in the Website, and in the material published on it.
                Those works are protected by copyright laws and treaties around
                the world. All such rights are reserved. You must not use any
                part of the content on the Website for commercial purposes
                without obtaining a licence to do so from us or our licensors.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">
                8. Limitation of our liability
              </h2>
              <p>
                Nothing in these terms of use excludes or limits our liability
                for death or personal injury arising from our negligence, or our
                fraud or fraudulent misrepresentation, or any other liability
                that cannot be excluded or limited by English law. To the extent
                permitted by law, we exclude all conditions, warranties,
                representations or other terms which may apply to the Website or
                any content on it, whether express or implied. We will not be
                liable to any user for any loss or damage, whether in contract,
                tort (including negligence), breach of statutory duty, or
                otherwise, even if foreseeable, arising under or in connection
                with: use of, or inability to use, the Website; or use of, or
                reliance on any content displayed on the Website. If you are a
                business user, please note that, in particular, we will not be
                liable for: loss of profits, sales, business, or revenue;
                business interruption; loss of anticipated savings; loss of
                business opportunity, goodwill or reputation; or any indirect or
                consequential loss or damage. If you are a consumer user, please
                note that we only provide the Website for domestic and private
                use. You agree not to use the Website for any commercial or
                business purposes, and we have no liability to you for any loss
                of profit, loss of business, business interruption, or loss of
                business opportunity. We will not be liable for any loss or
                damage caused by a virus, distributed denial-of-service attack,
                or other technologically harmful material that may infect your
                computer equipment, computer programs, data or other proprietary
                material due to your use of the Website or to your downloading
                of any content on it, or on any website linked to it. We assume
                no responsibility for the content of websites linked on the
                Website. Such links should not be interpreted as endorsement by
                us of those linked websites. We will not be liable for any loss
                or damage that may arise from your use of them.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">
                9. Uploading content to the website
              </h2>
              <p>
                We do not provide any interactive services in relation to the
                publicly accessible parts of the Website. You must not seek to
                upload any content to the Website.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">
                10. Viruses
              </h2>
              <p>
                We do not guarantee that the Website will be secure or free from
                bugs or viruses. You are responsible for configuring your
                information technology, computer programmes and platform in
                order to access the Website. You should use your own virus
                protection software. You must not misuse the Website by
                knowingly introducing viruses, trojans, worms, logic bombs or
                other material which is malicious or technologically harmful.
                You must not attempt to gain unauthorised access to the Website,
                the server on which the Website is stored or any server,
                computer or database connected to the Website. You must not
                attack the Website via a denial-of-service attack or a
                distributed denial-of service attack. By breaching this
                provision, you would commit a criminal offence under the
                Computer Misuse Act 1990. We will report any such breach to the
                relevant law enforcement authorities and we will co-operate with
                those authorities by disclosing your identity to them. In the
                event of such a breach, your right to use the Website will cease
                immediately.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">
                11. Applicable law
              </h2>
              <p>
                Please note these terms of use, its subject matter and its
                formation (and any non-contractual disputes or claims) are
                governed by English law. We both agree to the exclusive
                jurisdiction of the courts of England and Wales.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">
                12. Contact
              </h2>
              <p>
                For concerns or clarification, email us at{" "}
                <a
                  href="mailto:info@filmcraftstudios.com"
                  className="underline text-blue-400"
                >
                  info@filmcraftstudios.com
                </a>
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

export default TermsAndConditions;
