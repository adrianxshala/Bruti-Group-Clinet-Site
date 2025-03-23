"use client"; // Needed for animations in Next.js (App Router)
import { motion } from "framer-motion";



const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06, // Slightly increased stagger duration for a smoother effect
    },
  },
};

export default function HeroSection() {
 

  return (
    <section
      className="h-screen flex flex-col items-center justify-center text-white relative bg-black px-6 md:px-12"
      style={{
        backgroundImage: "url('/assets/Untitled.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center w-full max-w-4xl">
        {/* Animated Title */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-5xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-850 via-blue-600 to-cyan-300 drop-shadow-lg"
          >
          
          Bruti Group
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-4 text-base md:text-lg text-gray-300"
        >
          Build amazing experiences with cutting-edge technology.
        </motion.p>

        {/* CTA Button */}
        <motion.button
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.3, delay: 1 }}
  className="mt-6 px-6 py-3 font-semibold rounded-lg shadow-md 
             bg-gradient-to-r from-blue-950 via-blue-800 to-cyan-400 
             text-white hover:from-blue-900 hover:via-blue-700 hover:to-cyan-300 
             transition duration-300"
>
  Get Started
</motion.button>

      </div>
    </section>
  );
}
