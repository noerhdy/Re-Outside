import React from "react";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const CarouselSection = () => {
  return (
    <div className="max-w-full h-fit flex justify-center  items-center overflow-hidden rounded-xl">
      <Swiper
        modules={[Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="w-full h-96 relative" // Make the container relative
      >
        <SwiperSlide>
          <img
            className="w-full h-full object-cover"
            src="carousel/4.jpg"
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full object-cover"
            src="carousel/2.jpg"
            alt="Slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full object-cover"
            src="carousel/1.jpg"
            alt="Slide 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full object-cover"
            src="carousel/3.jpg"
            alt="Slide 4"
          />
        </SwiperSlide>
        {/* Custom Scrollbar */}
        <div className="swiper-scrollbar w-full absolute  top-10 z-10" />
      </Swiper>
    </div>
  );
};

export default CarouselSection;
