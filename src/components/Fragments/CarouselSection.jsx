import React from "react";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
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

const CarouselSection = () => {
  return (
    <>
      <div className="flex justify-center relative items-center overflow-hidden">
        <Swiper
          modules={[Scrollbar, A11y, Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="w-full h-full relative"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                  src={image.src}
                  alt={image.alt}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute bottom-5 w-full z-[2] flex items-center justify-center rounded-xl">
          <div className="justify-center flex w-full items-center bg-gray-950/30 text-zinc-50 font-semibold text-[1rem] py-1 rounded-xl border-2 border-zinc-50 mx-2">
            Join Community
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselSection;
