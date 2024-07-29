import React from "react";
import MarqueeSection from "./MarqueeSection";
import MarqueeTagline from "./MarqueeTagline";
import { useState } from "react";
import { useEffect } from "react";

function MiddleSection() {
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
    <div className="max-w-screen-xl py-2 pl-2 bg-slate-500 rounded-bl-xl  ">
      <div className="grid grid-cols-10 gap-2">
        <div className="col-span-4 grid gap-2 bg-zinc-800 rounded-md">
          <MarqueeTagline />
        </div>
        <div className="col-span-3 grid gap-2 bg-zinc-800 rounded-md">
          <div className="font-medium px-2 flex justify-center items-center">
            <span className="text-[1rem] mr-1 text-zinc-100">
              Free from fake{" "}
            </span>
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

        <div className="col-span-3 grid gap-2 bg-zinc-800 rounded-md">
          <MarqueeSection />
        </div>
      </div>
    </div>
  );
}

export default MiddleSection;
