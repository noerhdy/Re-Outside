import React, { useState } from "react";
import { wordsLink } from "../../constants";
import ButtonInfo from "../Elements/Button/ButtonInfo";
import ModalInfo from "./ModalInfo";

function GridInfo() {
  const [selectedInfo, setSelectedInfo] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = (info) => {
    setSelectedInfo(info);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedInfo(null);
    setModalVisible(false);
  };

  return (
    <div className="flex flex-col items-start gap-1 w-full">
      <h1 className="font-semibold text-[1rem] text-[#f7f6f5]">Info</h1>
      {wordsLink.map((word, index) => (
        <ButtonInfo key={index} onClick={() => openModal(word)}>
          {word.textTitle}
        </ButtonInfo>
      ))}
      {isModalVisible && selectedInfo && (
        <ModalInfo
          isVisible={isModalVisible}
          onClose={closeModal}
          info={selectedInfo}
        />
      )}
    </div>
  );
}

export default GridInfo;
