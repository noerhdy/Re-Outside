import React from "react";
import { productData } from "../../constants";

function ProductSection() {
  return (
    <>
      <div className="bg-zinc-100 flex flex-col mx-8 items-center justify-center">
        <div className="flex flex-col items-start w-full font-bold text-7xl  ">
          <h1>Our</h1>
          <h1>Oat</h1>
          <h1>Milk</h1>
        </div>
        <div className="">
          <div className="my-2 bg-yellow-300 flex items-center justify-center  py-2 px-4 hover:border-b-8 rounded-full border-zinc-950 border-2  ">
            <h2 className="text-xl font-semibold ">Shop Now</h2>
          </div>
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
    </>
  );
}

export default ProductSection;
