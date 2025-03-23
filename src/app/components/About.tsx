"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import CountUp from "react-countup";

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
    <section id="about" className="relative py-20 overflow-hidden bg-grid">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <header className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-950 via-green-900 to-cyan-500 glow">
            Rreth Nesh
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Ne jemi lider në ndërtimet komerciale, duke sjellë inovacion, cilësi dhe qëndrueshmëri në çdo projekt që realizojmë.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: 100, label: "Projekte të përfunduara", color: "yellow-600" },
                { value: 20, label: "Partnerë të besuar", color: "blue-400" },
                { value: 500, label: "Klientë të kënaqur", color: "green-500" },
                { value: 25, label: "Vite eksperiencë", color: "gray-300" },
              ].map((item, index) => (
                <div key={index} className={`relative p-6 rounded-3xl border border-${item.color} bg-black shadow-lg`}>
                  <div className={`text-4xl font-extrabold text-${item.color}`}>
                    {startCounting ? <CountUp end={item.value} duration={3} /> : 0}
                  </div>
                  <div className="mt-2 text-sm text-gray-600">{item.label}</div>
                </div>
              ))}
            </div>
            <div className="hidden md:block">
              <h2 className="text-xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-950 via-green-900 to-cyan-500 glow">
                Misioni ynë
              </h2>
              <p className="text-gray-600">
                Të ofrojmë zgjidhje ndërtimi cilësore dhe të qëndrueshme, duke transformuar idetë në realitet me teknologji të avancuar dhe ekspertizë të lartë.
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/assets/presa.jpg"
              alt="Ndërtimi Komercial – Rreth Nesh"
              title="Ndërtimi Komercial – Rreth Nesh"
              width={600}
              height={400}
              loading="lazy"
              className="relative rounded-xl shadow-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
