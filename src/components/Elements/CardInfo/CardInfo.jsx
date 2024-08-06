import React from "react";

function CardInfo({ textTitle, textTitle2, children, textStyle, textShort }) {
  //  textTitle perlu diganti dengan textShort hanya index 2 FAQ
  const displayTitle = textTitle === "FAQ" ? textShort : textTitle;
  return (
    <div className="flex w-full  ">
      <div className="flex  w-full  h-[80%]  ">
        <div className="flex flex-col mx-8 pt-4 h-auto">
          <h1 className="text-2xl text-center font-semibold">
            {displayTitle || textTitle2}
          </h1>
          <h1 className={`${textStyle} text-center`}>{textShort}</h1>
          {children}
        </div>
      </div>
    </div>
  );
}

export default CardInfo;
