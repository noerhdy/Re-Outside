import React from "react";

function ListProduct() {
  return (
    <>
      <div className="flex my-4 rounded-2xl  justify-center gap-10 items-center w-full bg-[#c2baaf]/90 sm:bg-[#dad5ce]/90">
        <div className="flex flex-col items-center  ">
          <h2 className="font-semibold text-7xl text-center text-zinc-950">
            Barista Blend
          </h2>
          <img
            className=" max-w-[220px] bg-cover bg-center duration-500 ease-in-out"
            src="/img/Milk.webp"
            alt=""
          />
          <div className="bg-transparent hover:bg-neutral-100 hover:border-transparent ease-in-out duration-500 border-4 border-neutral-950 py-2 px-6 mb-4 rounded-md">
            <h2 className="font-semibold text-[1.2rem] text-center text-zinc-950">
              View Details
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListProduct;
