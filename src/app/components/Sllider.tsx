"use client"; // Needed for animations in Next.js (App Router)
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const slides1 = [
  "/assets/presa.jpg",
  "/assets/presa.jpg",
  "/assets/presa.jpg",
  "/assets/presa.jpg",
  "/assets/presa.jpg",
  "/assets/presa.jpg",

];



export default function MultiSlider() {
  return (
    <section className="h-screen flex flex-col items-center justify-center relative bg-grid min-h-screen text-white gap-10">
      {/* Title Animation */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center"
      >
        Explore Our Collection
      </motion.h1>

      {/* First Swiper - Coverflow Effect */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl"
      >
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Autoplay, Pagination]}
          className="w-full"
        >
          {slides1.map((src, index) => (
            <SwiperSlide key={index} className="max-w-xs">
              <img
                src={src}
                alt={`Slide ${index}`}
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Second Swiper - Fade Effect */}
      {/* <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl mt-10"
      >
        <Swiper
          effect="fade"
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectFade, Autoplay, Pagination, Navigation]}
          className="w-full"
        >
          {slides2.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Slide ${index}`}
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div> */}
    </section>
  );
}
