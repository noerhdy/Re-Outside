import React from "react";
import { productData } from "../../constants";
import MarqueeSection from "./MarqueeSection";

function ProductSection() {
  return (
    <>
      <div className=" flex justify-between">
        <div className=" font-bold text-2xl bg-zinc-200 w-full rounded-tr-xl">
          <h1>Susu Oat Kami</h1>
        </div>
        <MarqueeSection />
      </div>
      <div className="bg-blue-500 flex flex-col overflow-hidden justify-center">
        <div className=" flex overflow-hidden justify-center h-60">
          {productData.map((item, index) => (
            <div
              className="flex flex-col justify-center items-center translate-y-32"
              key={index}
            >
              <h2 className="mb-6">{item.title}</h2>
              <img
                className="group  max-w-[150px] bg-cover bg-center "
                src={item.image}
              ></img>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductSection;
