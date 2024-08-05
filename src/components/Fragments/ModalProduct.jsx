import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CardProduct from "../Elements/CardProduct/CardProduct";
import { productData } from "../../constants";

const ModalProduct = ({ isVisible, onClose, product }) => {
  const [selectedProduct, setSelectedProduct] = useState(product);

  useEffect(() => {
    setSelectedProduct(product);
  }, [product]);

  return (
    <AnimatePresence>
      {isVisible && selectedProduct && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="relative bg-[#E9E6E1]  rounded-2xl w-[90%] my-12 sm:w-1/2 h-fit"
            initial={{ opacity: 1, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-between px-4 py-2">
              <div className="flex items-center ">
                {productData.map((prod) => (
                  <label key={prod.id} className="block">
                    <input
                      type="radio"
                      name="product"
                      value={prod.id}
                      onChange={() => setSelectedProduct(prod)}
                      className="sr-only" // Hide default radio input
                      id={`product-${prod.id}`}
                      checked={selectedProduct?.id === prod.id}
                    />
                    <span
                      className={`inline-block w-3 h-3 mx-2 rounded-full cursor-pointer ${
                        selectedProduct.id === prod.id
                          ? `ring-2 ring-zinc-700 ${prod.color} ease-in-out duration-200`
                          : "ring-2 bg-zinc-400 ring-zinc-500 ease-in-out duration-200 delay-200"
                      }`}
                      onClick={() => {
                        document.getElementById(`product-${prod.id}`).click();
                      }}
                    ></span>
                  </label>
                ))}
              </div>
              <button
                className="text-3xl font-normal focus:outline-none text-zinc-500"
                onClick={onClose}
              >
                &times; {/* Symbol for close (×) */}
              </button>
            </div>
            <div className="flex flex-col items-center px-2">
              <CardProduct
                id={selectedProduct.id}
                title={selectedProduct.title}
                imgProduct={selectedProduct.image}
                bgColor={selectedProduct.color}
                desc={selectedProduct.description}
                linkDetails={selectedProduct.link}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalProduct;
