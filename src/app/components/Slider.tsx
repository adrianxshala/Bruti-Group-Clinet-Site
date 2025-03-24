'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
const images = [
  "/assets/presa.jpg",
  "/assets/Untitled.png",
  "/assets/presa.jpg",
  "/assets/Untitled.png",
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
   <div className='bg-grid '>
    <div>
    <motion.h2
  className="text-3xl sm:text-4xl font-bold py-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-950 via-green-900 to-cyan-500 glow"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.5 }}
>
  Punët e Pervendosura
</motion.h2>

<motion.p
  className="text-gray-400 text-center max-w-2xl mx-auto"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9, delay: 0.7 }}
>
  Shihni disa nga projektet tona të përfunduara, ku kemi implementuar zgjidhje të avancuara për sistemet e ngrohjes  për klientët tanë.
</motion.p>

    </div>
     <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg ">
      <div className="relative flex items-center justify-center h-[500px] rounded-lg">
        <img src={images[currentIndex]} alt="Slide" className="w-full h-full object-cover transition-transform duration-500 ease-in-out p-8 rounded-lg opacity-80" />
      </div>

      <button 
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 cursor-pointer text-2xl z-10 hover:bg-opacity-70"
        onClick={prevSlide}
      >
        ❮
      </button>
      <button 
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 cursor-pointer text-2xl z-10 hover:bg-opacity-70"
        onClick={nextSlide}
      >
        ❯
      </button>

      {/* Responsive Design */}
      <style jsx>{`
        @media (max-width: 768px) {
          .slider-container {
            max-width: 100%;
            
          }

          .slider {
            height: 350px;
          }

          .prev, .next {
            padding: 10px;
            font-size: 18px;
          }
        }

        @media (max-width: 480px) {
          .slider {
            height: 250px;
          }

          .prev, .next {
            padding: 8px;
            font-size: 16px;
          }
        }
      `}</style>
    </div>
   </div>
  );
};

export default Slider;
