"use client"; // Needed for animations in Next.js (App Router)
import { motion } from "framer-motion";

import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();

  return (
    <section
      className="h-screen flex flex-col items-center justify-center text-white relative bg-black px-6 md:px-12"
      style={{
        backgroundImage: "url('/assets/about.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center w-full max-w-4xl">
        {/* Animated Title */}
        <div className="relative z-10 text-center w-full max-w-4xl">
  {/* Animated Title */}
  <motion.h1
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: 0.3 }}
    className="text-6xl md:text-5xl lg:text-6xl font-inter font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-green-900 via-green-700  to-cyan-700 glow drop-shadow-lg"
  >
    Bruti Group
  </motion.h1>
</div>


        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-4 text-base md:text-lg text-gray-300"
        >
          Zgjidhje të avancuara për ndërtim dhe instalime ngrohjeje
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="mt-6 px-8  py-2 font-semibold rounded-sm shadow-3xl relative bg-black border border-green-900 text-gray-300
                  overflow-hidden group"
          onClick={() => router.push("/projektet")}
        >
          Projektet 
        </motion.button>
      </div>
    </section>
  );
}
