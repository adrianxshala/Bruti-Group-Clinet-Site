"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import CountUp from "react-countup";
import { motion } from "framer-motion";
const AboutSection = () => {
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about");
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
          setStartCounting(true);
          window.removeEventListener("scroll", handleScroll); // Remove event listener after starting count
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="about" className=" overflow-hidden bg-grid">
      <div className="relative z-10 max-w-7xl mx-auto py-12  px-6 lg:px-8">
        <header className="text-center ">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-3xl sm:text-4xl font-bold pb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-950 via-green-900 to-cyan-500 glow"
          >
            Rreth Nesh
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-gray-600 max-w-3xl mx-auto pb-8"
          >
            Ne jemi lider në ndërtimet komerciale, duke sjellë inovacion, cilësi
            dhe qëndrueshmëri në çdo projekt që realizojmë.
          </motion.p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center ">
          <div className="space-y-10">
          <div className="grid grid-cols-2 gap-6">
  {[
    {
      value: 100,
      label: "Projekte të përfunduara",
      gradient: "bg-gradient-to-r from-green-950 via-green-900 to-cyan-500",
    },
    {
      value: 20,
      label: "Partnerë të besuar",
      gradient: "bg-gradient-to-r from-green-700 via-green-700 to-cyan-900",
    },
    {
      value: 500,
      label: "Klientë të kënaqur",
      gradient: "bg-gradient-to-r from-green-700 via-lime-400 to-yellow-300",
    },
    {
      value: 25,
      label: "Vite eksperiencë",
      gradient: "bg-gradient-to-r from-yellow-500 via-lime-400 to-orange-500",
    },
  ].map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="relative p-6 rounded-3xl border border-green-950 bg-black shadow-lg glow"
    >
      <div className={`text-4xl font-extrabold ${item.gradient} bg-clip-text text-transparent`}>
        {startCounting ? <CountUp end={item.value} duration={3} /> : 0}
      </div>
      <div className="mt-2 text-sm text-gray-600">{item.label}</div>
    </motion.div>
  ))}
</div>

           
          </div>
          <motion.div   initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7,delay: 0.7 }} className="relative pt-12 ">
            <Image
              src="/assets/about.png"
              alt="Ndërtimi Komercial – Rreth Nesh"
              title="Ndërtimi Komercial – Rreth Nesh"
              width={600}
              height={400}
              loading="lazy"
              className="relative rounded-xl shadow-3xl opacity-90 border border-green-600 "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
