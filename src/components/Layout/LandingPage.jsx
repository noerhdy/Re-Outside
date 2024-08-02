import React from "react";
import CarouselSection from "../Fragments/CarouselSection";
import HeadSection from "../Fragments/HeadSection";
import MiddleSection from "../Fragments/MiddleSection";
import ProductSection from "../Fragments/ProductSection";
import ButtonCta from "../Elements/ButtonCta";
import { motion } from "framer-motion";

function LandingPage() {
  const wordsLink = [
    { text: "Dear cows" },
    { text: "FAQ" },
    { text: "Contact us" },
  ];

  return (
    <section className="overflow-hidden h-screen  mx-12">
      <HeadSection />
      <motion.div
        className="z-10 relative"
        initial={{ y: 500, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 3, delay: 2 }}
      >
        <div className="grid grid-cols-5 gap-2 z-10 relative">
          {/* Product Section */}
          <div className="col-span-4 rounded-2xl gap-2">
            <div className="grid grid-cols-5 overflow-hidden mb-2">
              <div className="col-span-5 bg-[#dad5ce]/90  overflow-hidden rounded-2xl flex flex-col justify-center items-start gap-2">
                <ProductSection />
              </div>
            </div>
            <div className="grid grid-cols-6  gap-2">
              {/* Middle Section */}
              <div className="col-span-3 h-40 bg-[#dad5ce]/90  p-2 flex items-center justify-center rounded-2xl">
                <div className="flex flex-col items-center p-4 gap-1 w-full text-black">
                  <h2 className="text-3xl md:text-5xl font-bold">
                    Always look
                  </h2>
                  <h2 className="text-3xl md:text-5xl font-bold">
                    the OATSIDE of life
                  </h2>
                  <MiddleSection />
                </div>
              </div>

              {/* Our Story Section */}
              <div className="col-span-1 h-40 bg-[#C9DA8F]  p-4 rounded-2xl flex flex-col justify-center items-start gap-2">
                <h1 className="font-semibold text-[1rem] text-[#f7f9ec]">
                  Our Story
                </h1>
                <div className="text-start text-[0.75rem] text-[#1C461F]">
                  <p>We Confess:</p>
                  <p>
                    like many of you, we used to be full-fat-only,
                    Jersey-cow-milk drinkers.
                  </p>
                </div>
              </div>

              <div className=" col-span-2 p-4 h-40 bg-zinc-800 flex items-center justify-center rounded-2xl">
                <div className="flex flex-col items-start gap-1 w-full">
                  <h1 className="font-semibold text-[1rem] text-[#c7d277]">
                    Info
                  </h1>
                  {wordsLink.map((word, index) => (
                    <div className="w-full" key={index}>
                      <ButtonCta classname="justify-start w-full pl-2 py-2 items-center bg-zinc-900 text-[#C9DA8F]  hover:text-zinc-50 font-semibold text-[0.75rem] relative overflow-hidden rounded-md">
                        {word.text}
                      </ButtonCta>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1  rounded-2xl  overflow-hidden">
            {/* Carousel Section */}
            <CarouselSection />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default LandingPage;
