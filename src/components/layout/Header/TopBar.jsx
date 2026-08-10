import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "./TopBar.css";

export default function TopBar() {
  const slides = [
    {
      text: (
        <>
          Checkout – Limited Time Only
        </>
      ),
    },
    {
      text: (
        <>
          <span style={{ color: "#fb3f26" }}>Free</span> Shipping On Orders Over
          $100
        </>
      ),
    },
    {
      text: (
        <>
          Summer Sale Up To <span style={{ color: "#fb3f26" }}>50%</span> Off
        </>
      ),
    },
  ];

  return (
    <div className="top-bar">
      <div className="top-bar-wrapper mx-auto d-flex justify-content-center">
        <Swiper
          navigation
          slidesPerView={1}
          loop={true}
          speed={2000}
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 2000,
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>{slide.text}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
