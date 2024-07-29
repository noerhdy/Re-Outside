import React from "react";
import Marquee from "react-fast-marquee";

function MarqueeSection() {
  const wordsMarquee = [
    {
      text: "like many of you,",
      bgColor: "bg-[#C9DA8F]",
      textColor: "text-[#1C461F]",
    },
    {
      text: "we used to be",
      bgColor: "bg-[#BEADE1]",
      textColor: "text-[#52225E] ",
    },
    {
      text: "full-fat-only,",
      bgColor: "bg-[#F682A5]",
      textColor: "text-[#52225E] ",
    },
    {
      text: "jersey-cow-milk,",
      bgColor: "bg-[#C0C6FE]",
      textColor: "text-[#020B66] ",
    },
    {
      text: "Drinkers.",
      bgColor: "bg-[#F9A474]",
      textColor: "text-[#582614] ",
    },
  ];

  return (
    <div className="max-w-[300px] z-10 bg-[#fefefe] py-2 font-semibold appearance-none  overflow-hidden h-full rounded-bl-2xl  relative  pt-4 ">
      <div className="">
        <h1 className="absolute top-0 z-10 px-2 text-[1rem]  bg-[#fefefe] rounded-br-xl ">
          We confess
        </h1>
        <Marquee pauseOnClick={false} autoFill speed={50}>
          {wordsMarquee.map((item, i) => (
            <div
              key={i}
              className={`flex items-center text-[0.875rem] justify-center px-4 py-2 rounded-md ${item.bgColor} ${item.textColor} mx-1`}
            >
              {item.text}
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default MarqueeSection;
