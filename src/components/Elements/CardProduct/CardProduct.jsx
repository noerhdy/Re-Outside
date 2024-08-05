import React from "react";

function CardProduct(props) {
  const { title, imgProduct, bgColor } = props;
  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-2 mx-4">
        <div
          className={`flex  rounded-2xl justify-center w-full h-fit items-center  ${bgColor}`}
        >
          <div className="flex items-center justify-center ">
            <img
              className="max-w-[200px] bg-cover bg-center duration-500 ease-in-out"
              src={imgProduct}
            />
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="text-start items-center space-y-2">
            <h2 className="font-semibold text-xl  text-zinc-950">{title}</h2>
            <p className="font-normal text-[0.875rem] text-start text-zinc-950">
              ONLY REAL CACAO (we use twice the amount of cacao than most),
              NEVER ADDED-FLAVORS, and LESS SUGAR (our sugar content is 40-60%
              lower than most, and we use raw palm nectar instead of refined
              cane sugar)
            </p>
          </div>
        </div>
        <div className=" w-full flex justify-end space-x-2 py-4">
          <div className="bg-transparent hover:bg-neutral-100 hover:border-transparent ease-in-out duration-500 border-2 border-neutral-950 py-2 px-4  rounded-xl">
            <h2 className="font-semibold text-[1rem] text-center text-zinc-950">
              Buy Now
            </h2>
          </div>
          <div className="bg-transparent hover:bg-neutral-100 hover:border-transparent ease-in-out duration-500 border-2 border-neutral-950 py-2 px-4  rounded-xl">
            <h2 className="font-semibold text-[1rem] text-center text-zinc-950">
              View Details
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardProduct;
