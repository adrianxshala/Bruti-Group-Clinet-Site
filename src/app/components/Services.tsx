'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Wrench, Users } from 'lucide-react';

const sherbimet = [
  {
    icon: <Building2 className="w-12 h-12" />,
    title: 'Ndërtim Komercial',
    description: 'Zgjidhje të qëndrueshme dhe të shkallëzueshme për ndërtesa komerciale',
  },
  {
    icon: <Wrench className="w-10 h-10" />,
    title: 'Instalime Ngrohjeje dhe Hidraulike',
    description: 'Sisteme efikase për përdorim rezidencial dhe industrial',
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: 'Menaxhim Projektesh',
    description: 'Mbikëqyrje profesionale për realizim të suksesshëm të projekteve',
  },
];

const Sherbimet = () => {
  return (
    <section id="sherbimet" className="relative overflow-hidden bg-grid flex items-center justify-center  ">
      {/* Sfondi me rrjetë (grid) */}
      <div className="absolute inset-0 z-0 h-screen">
        <div className="grid-overlay"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold py-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-950 via-green-900 to-cyan-500 glow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6,delay: 0.5 }}
        >
          Shërbimet Tona
        </motion.h2>

        <motion.p
          className="text-gray-400 text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
        >
          Ne ofrojmë zgjidhje ndërtimi dhe menaxhimi të nivelit të lartë për projekte komerciale dhe industriale, duke garantuar cilësi dhe efikasitet.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 ">
          {sherbimet.map((sherbim, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay:  1.5,
                type: 'spring',
                stiffness: 300,
                damping: 20,
              }}
            >
            
              {/* Kontejneri i kartës */}
              <div className="relative p-6 sm:p-8 bg-black/10 border border-white/10 rounded-xl flex flex-col items-center text-center h-full backdrop-blur-md overflow-hidden">
                <div className="text-white mb-4 sm:mb-6">{sherbim.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 text-white">{sherbim.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base">{sherbim.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sherbimet;
