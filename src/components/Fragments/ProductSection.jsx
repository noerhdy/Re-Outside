import React from "react";
import { productData } from "../../constants";
import MarqueeSection from "./MarqueeSection";
import MiddleSection from "./MiddleSection";

function ProductSection() {
  return (
    <>
      <div className="z-10 relative flex">
        <div className="flex justify-between items-center w-full">
          <div className="font-bold text-2xl z-10 bg-zinc-100 w-full rounded-tl-xl h-full items-center justify-center flex relative">
            <h1>Susu Oat Kami</h1>
          </div>
          <MiddleSection />
        </div>
      </div>
      <div className="bg-zinc-100 flex flex-col overflow-hidden justify-center rounded-b-xl">
        <div className="flex overflow-hidden justify-center h-60 gap-8">
          {productData.map((item, index) => (
            <div
              className="flex group flex-col justify-center items-center translate-y-[80px] z-10 relative"
              key={index}
            >
              <h2 className="font-semibold transform transition-transform duration-500 ease-in-out group-hover:translate-y-[-30px]">
                {item.title}
              </h2>
              <img
                className="max-w-[170px] transform transition-transform duration-500 ease-in-out group-hover:translate-y-[-50px] bg-cover bg-center drop-shadow-2xl"
                src={item.image}
                alt={item.title}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductSection;
