import React, { useState } from "react";
import { wordsLink, productData } from "../../constants";
import ButtonInfo from "../Elements/Button/ButtonInfo";
import ModalInfo from "./ModalInfo";

function GridInfo() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setModalVisible(false);
  };

  return (
    <div className="flex flex-col items-start gap-1 w-full">
      <h1 className="font-semibold text-[1rem] text-[#f7f6f5]">Info</h1>
      {wordsLink.map((word, index) => {
        const product = productData[index];
        return (
          <ButtonInfo key={index} onClick={() => openModal(product)}>
            {word.text}
          </ButtonInfo>
        );
      })}
      {isModalVisible && selectedProduct && (
        <ModalInfo
          isVisible={isModalVisible}
          onClose={closeModal}
          product={selectedProduct}
        />
      )}
    </div>
  );
}

export default GridInfo;
