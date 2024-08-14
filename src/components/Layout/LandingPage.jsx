import React, { useState, useEffect } from "react";
import HeadSection from "../Fragments/HeadSection";
import MiddleSection from "../Fragments/MiddleSection";
import { motion } from "framer-motion";
import MarqueeTagline from "../Fragments/MarqueeTagline";
import GridProduct from "../Fragments/GridProduct";
import GridSwipe from "../Fragments/GridSwipe";
import GridInfo from "../Fragments/GridInfo";

function LandingPage() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth < 960);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="overflow-hidden sm:h-auto md:h-screen h-auto">
      <HeadSection />
      <motion.div
        className="z-10 relative"
        initial={{ y: 500, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 3, delay: 2 }}
      >
        {/* Grid Keseluruhan */}
        <div className="grid grid-cols-1 md:grid-cols-5 sm:px-12 px-4 gap-0 sm:gap-2 space-y-4 sm:space-y-0 h-auto z-10 relative">
          {/* Grid Kiri */}
          <div className="col-span-5 md:col-span-4 rounded-2xl pt-6 sm:pt-0">
            {/* Grid Utama (Kiri) Product */}
            <div className="grid grid-cols-5 overflow-hidden mb-4 sm:mb-2 ">
              <div className="col-span-5 overflow-hidden rounded-2xl flex flex-col justify-center items-start ">
                <GridProduct />
              </div>
            </div>

            {/* Grid (Kiri 1) Tagline*/}
            <div className="grid grid-cols-6 gap-4 sm:gap-2">
              <div className="col-span-6 sm:col-span-3 sm:h-40 h-fit  bg-[#292321] flex items-center justify-center rounded-2xl">
                <div className="flex flex-col items-center py-2 w-full  text-[#f7f6f5] tracking-wider">
                  <h2 className="text-2xl sm:text-3xl font-bold">
                    Always look
                  </h2>
                  <h2 className="text-2xl sm:text-3xl font-bold">
                    the OATSIDE of life
                  </h2>
                  <MiddleSection />
                </div>
              </div>

              {/* Grid (Kiri 2) - About*/}
              <div className="col-span-3 sm:col-span-1 h-40 bg-[#c2baaf] p-4 rounded-2xl flex flex-col justify-center items-start overflow-hidden">
                <div className="flex flex-col items-start space-y-2 h-full w-full text-[#4f443f] tracking-wider">
                  <h1 className="font-semibold text-[1rem] text-[#8b786b]">
                    Our Story
                  </h1>
                  <div className="text-start text-[0.75rem] text-[#292321]">
                    <p className="font-medium">We Confess:</p>
                    <p>
                      like many of you, we used to be full-fat-only,
                      Jersey-cow-milk drinkers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Grid (Kiri 3) - Info */}
              <div className="col-span-3 sm:col-span-2 p-4 h-40 bg-neutral-900 flex items-center justify-center rounded-2xl">
                <GridInfo />
              </div>
            </div>
          </div>

          {/* Grid (Kanan) Swipe Ig Highlights */}
          <div className="grid col-span-1 rounded-2xl overflow-hidden sm:pb-0 pb-4">
            <GridSwipe />
          </div>
        </div>
      </motion.div>
      {/* Marque Footer */}
      {isDesktop && <MarqueeTagline />}
    </section>
  );
}

export default LandingPage;
