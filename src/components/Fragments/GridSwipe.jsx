import React from "react";
import { Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const images = [
  { src: "carousel/4.jpg", alt: "Slide 1" },
  { src: "carousel/2.jpg", alt: "Slide 2" },
  { src: "carousel/1.jpg", alt: "Slide 3" },
  { src: "carousel/3.jpg", alt: "Slide 4" },
];

const GridSwipe = () => {
  return (
    <>
      <div className="flex justify-center flex-col relative items-center overflow-hidden rounded-2xl">
        <Swiper
          modules={[Scrollbar, A11y, Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="w-full h-full relative "
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full overflow-hidden ">
                <img
                  className="w-full h-full aspect-square object-cover "
                  src={image.src}
                  alt={image.alt}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute  bottom-0 w-full  z-[20] flex items-center justify-center sm:rounded-none rounded-xl">
          <div className="justify-center flex flex-col w-full py-4 items-center bg-neutral-800/70 text-white font-semibold text-[1rem] ">
            <h1>Join Community</h1>
            <h1>@Oatside</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default GridSwipe;
