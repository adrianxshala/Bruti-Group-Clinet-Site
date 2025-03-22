"use client"; // Needed for animations in Next.js (App Router)
import { motion } from "framer-motion";

export default function HeroSection() {
  const title = "Your Text Here"; // Animated text

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
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center w-full max-w-4xl">
        {/* Animated Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 flex justify-center">
          {title.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.05, delay: index * 0.1 }}
            >
              {char}
            </motion.span>
          ))}
        </h1>

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
