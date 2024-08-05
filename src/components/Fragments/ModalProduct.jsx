import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ModalProfil = ({ isVisible, onClose, product }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-20  bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="relative bg-zinc-100 text-zinc-950 rounded-2xl  w-[90%] h-[90%]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between pb-4">
              <h1 className="font-semibold text-2xl">Ahay</h1>
              <button
                className="text-xl font-semibold focus:outline-none"
                onClick={onClose}
              >
                &times; {/* Symbol for close (×) */}
              </button>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={product?.image} // Example image source
                alt={product?.title} // Example alt text
                className="object-cover w-full grayscale group-hover:grayscale-0 delay-200 aspect-video bg-center duration-500 ease-in-out"
              />
              <div className="text-lg mt-4">Hellooooi</div>
            </div>
            <div className="flex max-w-screen-sm flex-col py-6 dark:border-none border-t border-dashed border-zinc-600">
              <h1 className="font-medium pb-4 cursor-default text-zinc-800 dark:text-zinc-400">
                Find out more
              </h1>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalProfil;
