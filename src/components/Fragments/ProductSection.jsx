import React from "react";
import { productData } from "../../constants";
import ButtonCta from "../Elements/ButtonCta";

function ProductSection() {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-center space-y-2">
        <div className="flex flex-col items-start font-bold text-7xl">
          <h1>Our</h1>
          <h1>Oat</h1>
          <h1>Milk</h1>
        </div>
        <div>
          <ButtonCta
            classname="justify-center items-center px-10 py-4 bg-yellow-400 hover:bg-black text-black hover:text-white font-semibold text-xl relative overflow-hidden rounded-xl border-4 border-black  shadow-[4px_4px_0px_#000] hover:shadow-[0px_0px_0px_#000]"
            link="https://linktr.ee/oatsideminiid"
          >
            Shop Now
          </ButtonCta>
        </div>
      </div>

      <div className="flex justify-center items-center gap-8 ">
        {productData.map((item, index) => (
          <div className=" group z-10 relative " key={index}>
            <div className=" translate-y-[180px] group-hover:translate-y-[0px] flex flex-col  items-center transform transition-transform duration-700 ease-in-out">
              <h2 className="font-semibold text-[1.2rem] transform text-zinc-950  transition-transform duration-500 ease-in-out group-hover:translate-y-[20px]">
                {item.title}
              </h2>
              <img
                className="max-w-[180px] bg-cover bg-center  duration-500 ease-in-out "
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
