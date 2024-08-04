import React from "react";
import Marquee from "react-fast-marquee";

function MarqueeTagline() {
  const text1 = "Always look on";
  const text2 = "the OATSIDE of life";
  const sticker1 = "/img/sticker7.svg";
  const sticker2 = "/img/sticker8.svg";

  return (
    <Marquee pauseOnClick={false} autoFill speed={50}>
      <div className="flex items-center font-semibold my-4 py-2 bg-neutral-800">
        <div className="text-container ">
          <span className="text-[0.875rem] tracking-widest text-white">
            {text1}
          </span>
        </div>
        <div className="mx-4">
          <img
            src={sticker1}
            alt="Separator"
            className="w-8 h-8 animate-flip"
          />
        </div>
        <div className="text-container">
          <span className="text-[0.875rem] tracking-wider text-white">
            {text2}
          </span>
        </div>
        <div className="mx-4">
          <img
            src={sticker2}
            alt="Separator"
            className="w-8 h-8 animate-spin"
          />
        </div>
      </div>
    </Marquee>
  );
}

export default MarqueeTagline;
