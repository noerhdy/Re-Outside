import React, { useState } from "react";
import { productData } from "../../constants";
import ModalProduct from "./ModalProduct";

const ToggleProduct = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleRadioChange = (event) => {
    const productId = Number(event.target.value);
    const selected = productData.find((product) => product.id === productId);
    setSelectedProduct(selected);
    setIsModalVisible(true); // Menampilkan modal saat produk dipilih
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedProduct(null); // Mengatur ulang produk yang dipilih
  };

  return (
    <div>
      <div className="flex p-4 space-x-2">
        {productData.map((product) => (
          <label key={product.id} className="block">
            <input
              type="radio"
              name="product"
              value={product.id}
              onChange={handleRadioChange}
              className="mr-2 hidden"
              id={`product-${product.id}`}
            />
            <span
              style={{ backgroundColor: product.color }}
              className="inline-block w-6 h-6 rounded-full cursor-pointer"
              onClick={() => {
                document.getElementById(`product-${product.id}`).click();
              }}
            ></span>
          </label>
        ))}
      </div>

      <ModalProduct
        isVisible={isModalVisible}
        onClose={closeModal}
        product={selectedProduct}
      />
    </div>
  );
};

export default ToggleProduct;
