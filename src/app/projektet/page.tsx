"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import about from "../../../public/assets/about.png";
import about1 from "../../../public/assets/about2.png";
import about2 from "../../../public/assets/about3.png";

const Page = () => {
  return (
    <div className="container mx-auto px-4 py-20  ">
      <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-950 via-green-900 to-cyan-500 glow">Projektet e Perfunduara</h2>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {[about, about1, about2].map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-xl shadow-lg border border-green-900"
          >
            <Image
              src={img}
              alt={`About Image ${index + 1}`}
              width={400} // Set fixed width
              height={300} // Set fixed height
              className="w-full h-[300px] object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Page;
