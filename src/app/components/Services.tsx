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
    icon: <Wrench className="w-8 h-8" />,
    title: 'Instalime Ngrohjeje dhe Hidraulike',
    description: 'Sisteme efikase për përdorim rezidencial dhe industrial',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Menaxhim Projektesh',
    description: 'Mbikëqyrje profesionale për realizim të suksesshëm të projekteve',
  },
];

const Sherbimet = () => {
  return (
    <section id="sherbimet" className="relative overflow-hidden bg-grid min-h-screen flex items-center justify-center">
      {/* Sfondi me rrjetë (grid) */}
      <div className="absolute inset-0 z-0">
        <div className="grid-overlay"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 py-20">
        <h2 className="text-4xl font-bold mb-16 text-center text-white glow">
          Shërbimet Tona
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sherbimet.map((sherbim, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: index * 0.1 }}
            >
              {/* Kontejneri i kartës */}
              <div className="relative p-8 bg-black/10 border border-white/10 rounded-xl flex flex-col items-center text-center h-full backdrop-blur-sm overflow-hidden">
                
                <div className="text-white mb-6">{sherbim.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-white">{sherbim.title}</h3>
                <p className="text-gray-400">{sherbim.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sherbimet;
