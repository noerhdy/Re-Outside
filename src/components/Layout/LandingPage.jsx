import React from "react";
import CarouselSection from "../Fragments/CarouselSection";
import HeadSection from "../Fragments/HeadSection";
import MiddleSection from "../Fragments/MiddleSection";
import ProductSection from "../Fragments/ProductSection";

function LandingPage() {
  return (
    <section className="overflow-hidden ">
      <HeadSection />
      <div className="grid grid-cols-5 grid-flow-row-dense  gap-2">
        {/* Product Section */}
        <div className="col-span-4  bg-zinc-100  border-zinc-950 border-2 overflow-hidden flex w-full rounded-2xl justify-center items-center">
          <ProductSection />
        </div>

        {/* Carousel Section */}
        <div className="col-start-5 col-span-1  row-span-1 h-fit border-zinc-950 border-2 rounded-2xl  justify-center items-center flex">
          <CarouselSection />
        </div>

        {/* Our Story Section */}
        <div className="  col-span-1 bg-zinc-800 text-white p-4 rounded-2xl flex flex-col justify-center items-start gap-2">
          <h1 className="font-semibold text-lg">Our Story</h1>
          <div className="text-start text-sm">
            <p>We Confess:</p>
            <p>
              like many of you, we used to be full-fat-only, Jersey-cow-milk
              drinkers.
            </p>
          </div>
        </div>

        {/* Middle Section */}
        <div className="col-span-3 bg-zinc-800 p-2 flex items-center justify-center rounded-2xl">
          <div className="flex flex-col items-center p-4 gap-1 w-full text-zinc-200  ">
            <h2 className="text-3xl md:text-5xl font-semibold">Always look</h2>
            <h2 className="text-3xl md:text-5xl font-semibold">
              the OATSIDE of life
            </h2>
            <MiddleSection />
          </div>
        </div>

        {/* Informasi Section */}
        <div className="col-span-1 col-start-5  bg-zinc-300 p-2 flex items-center justify-center rounded-2xl">
          <div className="flex flex-col items-start p-2 gap-1 w-full">
            <h1 className="font-semibold text-lg">Info</h1>
            <div className="bg-zinc-100 p-2 w-full rounded-xl border-zinc-950 border-2">
              <h2 className="text-sm font-medium">Dear cows</h2>
            </div>
            <div className="bg-zinc-500 p-2 w-full rounded-md">
              <h2 className="text-sm font-medium">FAQ</h2>
            </div>
            <div className="bg-zinc-500 p-2 w-full rounded-md">
              <h2 className="text-sm font-medium">Contact us</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
