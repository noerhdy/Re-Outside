import React from "react";

function CardInfo({}) {
  return (
    <div className="flex w-full  overflow-hidden ">
      <div className="flex  w-full  h-[280px]  ">
        <div className="flex flex-col mx-8 pt-4 h-auto">
          <h1 className="text-2xl text-center font-semibold">Hubungi Kami</h1>
          <div className="text-start py-4 w-full ">
            <p className="font-normal text-[1rem] text-center text-zinc-700">
              Susu Oat kami diracik khusus untuk menghasilkan foam yang padat
              dan lembut saat di steam. Kalau hasilnya ga memuaskan, tolong
              hubungi kita contact di
              <span className="text-blue-500 font-semibold text-[1.2rem] block">
                @oatside.com
              </span>{" "}
              Dan kalau ternyata memuaskan, boleh banget hubungin kita juga,
              karna kita kesepian gaada yang menghubungi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardInfo;
