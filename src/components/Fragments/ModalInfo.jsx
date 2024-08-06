import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CardInfo from "../Elements/CardInfo/CardInfo";

const ModalInfo = ({ isVisible, onClose, info }) => {
  const [selectedInfo, setSelectedInfo] = useState(info);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    setSelectedInfo(info);

    // Menambahkan atau menghapus kelas "overflow-hidden" dari body
    if (isVisible) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Menghapus kelas saat komponen di-unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isVisible, info]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      onClose();
      setIsExiting(false);
    }, 500); // Durasi yang sesuai dengan animasi keluar
  };

  return (
    <AnimatePresence>
      {(isVisible || isExiting) && selectedInfo && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: isExiting ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="relative bg-[#E9E6E1] rounded-2xl w-[90%] my-4 pb-2 sm:w-1/2 sm:h-fit h-[80%] overflow-hidden"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: isExiting ? 0 : 1, y: isExiting ? 100 : 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-end py-3 mx-4 border-b-2 border-neutral-800/10">
              <button
                className="text-[1rem] bg-neutral-900 px-4 py-1 rounded-xl font-normal focus:outline-none text-zinc-500"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
            <div className="flex flex-col items-center px-2 pb-12 h-full overflow-y-auto">
              <CardInfo
                textTitle={selectedInfo.textTitle}
                textShort={selectedInfo.textShort}
                textTitle2={selectedInfo.textTitle2}
                textStyle={selectedInfo.textStyle}
              >
                {selectedInfo.content}
              </CardInfo>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalInfo;
