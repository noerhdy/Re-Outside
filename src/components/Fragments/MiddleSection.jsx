import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function MiddleSection() {
  const words = [
    {
      text: "fake flavours",
      bgColor: "bg-[#C9DA8F]",
      textColor: "text-[#1C461F]",
    },
    {
      text: "fake colours",
      bgColor: "bg-[#C0C6FE]",
      textColor: "text-[#020B66]",
    },
    {
      text: "and fake People",
      bgColor: "bg-[#FEDF6F]",
      textColor: "text-[#4A411E]",
    },
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(false);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setShowText(true);
      }, 500); // Durasi fade-out (0.5 detik)
    }, 2000); // Ganti kata setiap 2 detik

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="max-w-screen-xl py-2 pl-2  rounded-bl-xl  ">
      <div className="font-medium px-2 flex justify-center items-center">
        <span className="text-[1rem] mr-1 text-[#f7f6f5] ]">Free from </span>
        <div className="relative flex items-center justify-center w-fit px-4 py-1">
          <div
            className={`absolute inset-0 rounded-md transition-colors duration-500 ease-in-out ${words[currentWordIndex].bgColor}`}
          />
          <div
            className={`relative z-10 transition-opacity font-semibold duration-500 ease-in-out ${
              words[currentWordIndex].textColor
            } ${!showText ? "opacity-0" : "opacity-100"}`}
          >
            {words[currentWordIndex].text}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddleSection;
