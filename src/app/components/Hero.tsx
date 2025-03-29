"use client"; // Needed for animations in Next.js (App Router)
import { motion } from "framer-motion";

import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();

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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="text-5xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-950 via-green-900 to-cyan-500 drop-shadow-lg"
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
          Infrastrukturë ,Arkitekturë dhe dizajn modern
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="mt-6 px-6 py-3 font-semibold rounded-sm shadow-md relative  bg-white
                 text-black overflow-hidden group"
          onClick={() => router.push("/projektet")}
        >
          Projektet Tona
        </motion.button>
      </div>
    </section>
  );
}
