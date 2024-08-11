import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CardInfo from "../Elements/CardInfo/CardInfo";

const ModalInfo = ({ isVisible, onClose, info }) => {
  const [selectedInfo, setSelectedInfo] = useState(info);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    setSelectedInfo(info);

    if (isVisible) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isVisible, info]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      onClose();
      setIsExiting(false);
    }, 500);
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
            className="relative bg-[#E9E6E1] rounded-2xl w-[90%] sm:w-1/2 max-h-[90%] flex flex-col"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: isExiting ? 0 : 1, y: isExiting ? 100 : 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.8 }}
          >
            {/* Header */}
            <div className="flex justify-end py-3 px-4 "></div>

            {/* Main Content */}
            <div className="flex-grow overflow-y-auto px-4 py-2">
              <CardInfo
                textTitle={selectedInfo.textTitle}
                textShort={selectedInfo.textShort}
                textTitle2={selectedInfo.textTitle2}
                textStyle={selectedInfo.textStyle}
              >
                {selectedInfo.content}
              </CardInfo>
            </div>

            {/* Footer */}
            <div className="flex justify-end  rounded-b-xl mx-4 py-3 mt-2 px-1 border-t-2 border-neutral-800/10">
              <button
                className="text-[1rem] bg-neutral-300 hover:bg-neutral-400 px-4 py-1 rounded-xl font-normal focus:outline-none text-zinc-500 hover:text-zinc-300 ease-in-out duration-200"
                onClick={handleClose}
              >
                close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalInfo;
