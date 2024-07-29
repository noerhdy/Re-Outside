import React, { useState, useEffect } from "react";

function HeadSection() {
  const words = [
    { text: "Flavours", bgColor: "bg-[#C9DA8F]", textColor: "text-[#1C461F]" },
    { text: "Colours", bgColor: "bg-[#C0C6FE]", textColor: "text-[#020B66]" },
    { text: "People", bgColor: "bg-[#FEDF6F]", textColor: "text-[#4A411E]" },
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
    <div className="max-w-screen-xl flex flex-col justify-center items-center bg-[#fefefe] relative">
      <div className="flex flex-col items-center text-5xl font-semibold gap-4">
        <h1>Always look on</h1>
        <h1>
          the <span className="font-extrabold">OATSIDE</span> of life
        </h1>
      </div>
      <div className="flex items-center mt-2 space-x-2 font-medium">
        <span className="whitespace-nowrap text-[1rem] font-semibold">
          Free from fake{" "}
        </span>
        <div className="relative inline-flex items-center justify-center px-6 py-1 rounded-full">
          <div
            className={`absolute inset-0 rounded-full transition-colors duration-500 ease-in-out ${words[currentWordIndex].bgColor}`}
          />
          <div
            className={`relative z-10 transition-opacity font-semibold duration-500 ease-in-out ${
              words[currentWordIndex].textColor
            } ${!showText ? "opacity-0" : "opacity-100"}`}
            style={{ width: "min-content" }}
          >
            {words[currentWordIndex].text}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeadSection;
