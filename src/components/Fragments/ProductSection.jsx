import React from "react";
import { productData } from "../../constants";
import ButtonCta from "../Elements/ButtonCta";

function ProductSection() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center w-full ">
      <div className="flex flex-row sm:flex-col justify-between sm:justify-center w-full items-center h-full  p-4  sm:bg-[#dad5ce]/90 bg-[#c2baaf]/90">
        <div className="flex  sm:flex-col flex-row items-center lg:items-start font-bold text-2xl space-x-2 md:text-7xl">
          <h1>Our</h1>
          <h1>Oat</h1>
          <h1>Milk</h1>
        </div>
        <ButtonCta
          classname="justify-center items-center px-2 py-2 md:px-10 md:py-4 bg-[#FEDF6F] hover:bg-zinc-900 text-black hover:text-white font-semibold text-sm md:text-xl relative overflow-hidden rounded-xl sm:border-4 border-2 border-black  sm:shadow-[4px_4px_0px_#000] shadow-[2px_2px_0px_#000] hover:shadow-[0px_0px_0px_#000]"
          link="https://linktr.ee/oatsideminiid"
        >
          Shop Now
        </ButtonCta>
      </div>

      <div className="flex bg-[#dad5ce]/90 flex-row gap-10">
        {productData.map((item, index) => (
          <div className="group z-10 relative max-w-[180px]" key={index}>
            <div className="sm:translate-y-[180px] translate-y-24 group-hover:translate-y-0 flex flex-col  items-center transform transition-transform duration-700 ease-in-out">
              <h2 className="font-semibold text-[1.2rem] text-zinc-950 transition-transform duration-500 ease-in-out group-hover:translate-y-5">
                {item.title}
              </h2>
              <img
                className="sm:max-w-[180px] w-fit bg-cover bg-center duration-500 ease-in-out"
                src={item.image}
                alt={item.title}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductSection;
