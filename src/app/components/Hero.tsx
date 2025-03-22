"use client"; // Needed for animations in Next.js (App Router)
import { motion } from "framer-motion";

const letterVariants = {
  hidden: { opacity: 0, filter: 'blur(5px)' },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06, // Slightly increased stagger duration for a smoother effect
    },
  },
};

export default function HeroSection() {
  const text = 'Bruti Group'; // Text before Neon Electric

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
        className="text-3xl md:text-5xl lg:text-6xl font-bold " // Adjusted font sizes for mobile
      >
        {text.split('').map((char, index) => (
          <motion.span key={index} variants={letterVariants} className="inline-block">
            {char === ' ' ? '\u00A0' : char} {/* Handle spaces */}
          </motion.span>
        ))}
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
          className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 transition text-white font-semibold rounded-lg shadow-md"
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
}