import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CardProduct from "../Elements/CardProduct/CardProduct";
import CardInfo from "../Elements/CardProduct/CardInfo";

const ModalInfo = ({ isVisible, onClose, product }) => {
  const [selectedProduct, setSelectedProduct] = useState(product);

  useEffect(() => {
    setSelectedProduct(product);
  }, [product]);

  return (
    <AnimatePresence>
      {isVisible && selectedProduct && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="relative bg-[#E9E6E1] rounded-2xl w-[90%] my-4 sm:w-1/2 h-fit"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-between py-3  mx-4 border-b-2 border-neutral-800/10">
              <div className="flex items-center">
                {/* Removed radio buttons and labels */}
              </div>
              <button
                className="text-[1rem] bg-neutral-900 px-4 py-1 rounded-xl font-normal focus:outline-none text-zinc-500"
                onClick={onClose}
              >
                Close
              </button>
            </div>
            <div className="flex flex-col items-center px-2 overflow-y-auto">
              <CardInfo />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalInfo;
