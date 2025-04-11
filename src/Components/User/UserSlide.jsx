import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Replace with your actual image paths from public/images or assets
const slides = [
  { image: "https://zarokharesto.com/images/demo/slides/slide-image-05.jpg", alt: "Delicious Food 1" },
  { image: "https://media.istockphoto.com/id/1418692720/photo/north-indian-famous-food-aloo-paratha-with-mango-pickle-and-butter.jpg?s=612x612&w=0&k=20&c=jf6SyEAWo_ni2mu9F-863pNKgqkB_3uVfVAgzqrJRto=", alt: "Delicious Food 2" },
  { image: "https://t3.ftcdn.net/jpg/06/32/70/02/360_F_632700248_xyeAOc7I9kFHmcK0wto4fXV2VMmyxdgM.jpg", alt: "Delicious Food 3" },
];

export const UserSlide = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="h-[300px] md:h-[500px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover rounded-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
