import React, { useState, useEffect } from "react";
import CarouselSection from "../Fragments/CarouselSection";
import HeadSection from "../Fragments/HeadSection";
import MiddleSection from "../Fragments/MiddleSection";
import ProductSection from "../Fragments/ProductSection";
import ButtonCta from "../Elements/ButtonCta";
import { motion } from "framer-motion";
import MarqueeTagline from "../Fragments/MarqueeTagline";

function LandingPage() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const wordsLink = [
    { text: "Dear cows" },
    { text: "FAQ" },
    { text: "Contact us" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="overflow-hidden sm:h-svh h-auto">
      <HeadSection />
      <motion.div
        className="z-10 relative"
        initial={{ y: 500, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 3, delay: 2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-5 sm:px-12 px-4 gap-0 sm:gap-2 space-y-4 sm:space-y-0  z-10 relative">
          {/* Product Section */}
          <div className="col-span-5 md:col-span-4 rounded-2xl  gap-2">
            <div className="grid grid-cols-5 overflow-hidden mb-2">
              <div className="col-span-5 overflow-hidden rounded-2xl flex flex-col justify-center items-start gap-2">
                <ProductSection />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-2">
              {/* Middle Section */}
              <div className="col-span-6 sm:col-span-3 sm:h-40 h-fit sm:bg-[#dad5ce] bg-[#292321]  flex items-center justify-center rounded-2xl">
                <div className="flex flex-col items-center  py-2 w-full sm:text-[#4f443f] text-[#f7f6f5]  tracking-wider">
                  <h2 className="text-2xl sm:text-3xl font-bold">
                    Always look
                  </h2>
                  <h2 className="text-2xl sm:text-3xl font-bold">
                    the OATSIDE of life
                  </h2>
                  <MiddleSection />
                </div>
              </div>

              {/* Our Story Section */}
              <div className="col-span-3 sm:col-span-1 h-40 bg-[#c2baaf]  p-4 rounded-2xl flex flex-col justify-center items-start gap-2">
                <h1 className="font-semibold text-[1rem] text-[#8b786b]">
                  Our Story
                </h1>
                <div className="text-start text-[0.75rem] text-[#292321]">
                  <p>We Confess:</p>
                  <p>
                    like many of you, we used to be full-fat-only,
                    Jersey-cow-milk drinkers.
                  </p>
                </div>
              </div>

              <div className=" col-span-3 sm:col-span-2 p-4 h-40 bg-neutral-900 flex items-center justify-center rounded-2xl">
                <div className="flex flex-col items-start gap-1 w-full">
                  <h1 className="font-semibold text-[1rem] text-[#8b786b]">
                    Info
                  </h1>
                  {wordsLink.map((word, index) => (
                    <div className="w-full" key={index}>
                      <ButtonCta classname="justify-start w-full pl-2 py-2 items-center bg-neutral-800 text-[#a99b8e]  hover:text-zinc-50 font-semibold text-[0.75rem] relative overflow-hidden rounded-md">
                        {word.text}
                      </ButtonCta>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid col-span-1 rounded-2xl overflow-hidden">
            <CarouselSection />
          </div>
        </div>
      </motion.div>
      {isDesktop && <MarqueeTagline />}
    </section>
  );
}

export default LandingPage;
