import React from "react";
import { motion } from "framer-motion";

function CardProduct({ id, title, imgProduct, bgColor, desc, linkDetails }) {
  const handleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="flex flex-col justify-center items-center space-y-2 mx-4 ">
      <div
        className={`flex rounded-2xl justify-center w-full h-[300px] overflow-hiddenitems-center ${bgColor}`}
      >
        <motion.img
          key={imgProduct} // Menggunakan imgProduct sebagai key untuk mengidentifikasi perubahan
          src={imgProduct}
          alt={title}
          initial={{ y: 20, opacity: 0 }} // Mulai dari bawah dengan opasitas 0
          animate={{ y: 0, opacity: 1 }} // Menuju posisi normal dengan opasitas 1
          exit={{ y: -20, opacity: 0 }} // Keluar ke atas dengan opasitas 0
          transition={{ duration: 0.6 }} // Durasi animasi
          className="max-w-[180px] bg-cover bg-center duration-500 ease-in-out"
        />
      </div>
      <div className="flex flex-col space-y-4">
        <div className="text-start items-center space-y-2">
          <h2 className="font-semibold text-xl text-zinc-950">{title}</h2>
          <p className="font-normal text-[0.875rem] text-start text-zinc-700">
            {desc}
          </p>
        </div>
      </div>
      <div className="w-full flex justify-end space-x-2 py-4">
        {/* button LinkDetails */}
        <button
          onClick={() => handleClick(linkDetails)}
          className="group bg-neutral-300   border-transparent ease-in-out duration-500 border-2 hover:border-neutral-950 py-2 px-4 rounded-xl"
        >
          <h2 className="font-medium text-[1rem] text-center group-hover:text-neutral-900  text-zinc-700">
            View Details
          </h2>
        </button>
        {/* button SHOPNOW */}
        <button
          onClick={() => handleClick("https://linktr.ee/oatsideminiid")}
          className="group bg-[#FEDF6F] hover:bg-[#fdd236] border-transparent ease-in-out duration-500 border-2 hover:border-neutral-950 py-2 px-4 rounded-xl"
        >
          <h2 className="font-semibold text-[1rem] group-hover:text-neutral-950  text-center text-zinc-800">
            Shop Now
          </h2>
        </button>
      </div>
    </div>
  );
}

export default CardProduct;
