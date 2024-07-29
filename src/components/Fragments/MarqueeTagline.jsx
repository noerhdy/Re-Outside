import React from "react";
import Marquee from "react-fast-marquee";

function MarqueeTagline() {
  const text1 = "Always look on";
  const text2 = "the OATSIDE of life";
  const sticker1 = "/img/sticker.svg";
  const sticker2 = "/img/sticker2.svg";

  return (
    <Marquee pauseOnClick={false} autoFill speed={50}>
      <div className="flex items-center font-semibold">
        <div className="text-container ">
          <span className="text-[1.2rem] tracking-widest text-white">
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
          <span className="text-[1.2rem] tracking-wider text-white">
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
