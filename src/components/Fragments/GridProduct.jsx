import React, { useState } from "react";
import { productData } from "../../constants";
import ModalProduct from "./ModalProduct";
import ButtonCta from "../Elements/Button/ButtonCta";

function GridProduct() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedProduct(null);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center w-full">
      <div className="flex flex-row sm:flex-col justify-between sm:justify-center w-full items-center h-full p-4 bg-[#c2baaf]/90 sm:bg-[#dad5ce]/90">
        <div className="flex flex-row sm:flex-col items-center space-x-1 sm:space-x-0 lg:items-start text-lg sm:text-2xl md:text-7xl font-bold text-[#4f443f] sm:text-black">
          <h1>Our</h1>
          <h1>Oat</h1>
          <h1>Milk</h1>
        </div>
        <ButtonCta
          classname="flex justify-center items-center px-2 py-2 md:px-10 md:py-4 bg-[#FEDF6F] hover:bg-zinc-900 text-black hover:text-white font-semibold text-sm md:text-xl relative overflow-hidden rounded-xl border-2 sm:border-4 border-black shadow-[2px_2px_0px_#000] sm:shadow-[4px_4px_0px_#000] hover:shadow-none"
          link="https://linktr.ee/oatsideminiid"
        >
          Shop Now
        </ButtonCta>
      </div>

      <div className="flex bg-[#dad5ce]/90 flex-row gap-10">
        {productData.map((item, index) => (
          <div
            className="group relative max-w-[180px] cursor-pointer"
            key={index}
            onClick={() => openModal(item)}
          >
            <div className="flex flex-col items-center transform transition-transform duration-700 ease-in-out sm:translate-y-[180px] translate-y-24 group-hover:translate-y-0">
              <h2 className="font-semibold text-[0.875rem] text-center sm:text-[1rem] text-zinc-950 transition-transform duration-500 ease-in-out group-hover:translate-y-3">
                {item.title}
              </h2>
              <img
                className="w-fit sm:max-w-[180px] bg-cover bg-center duration-500 ease-in-out"
                src={item.image}
                alt={item.title}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <ModalProduct
        isVisible={isModalVisible}
        onClose={closeModal}
        product={selectedProduct}
      />
    </div>
  );
}

export default GridProduct;
