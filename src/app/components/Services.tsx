'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Wrench, Users } from 'lucide-react';
// Import external CSS file

const products = [
  {
    icon: <Building2 className="w-12 h-12" />,
    title: 'Commercial Construction',
    description: 'Durable and scalable solutions for commercial buildings',
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: 'Heating and Plumbing Installation',
    description: 'Efficient systems for residential and industrial use',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Project Management',
    description: 'Expert oversight for successful project delivery',
  },
];

const Products = () => {
  return (
    <section id="products" className="relative overflow-hidden bg-grid min-h-screen">
      {/* Advanced Grid Background */}
      <div className="absolute inset-0  z-0">
        <div className="grid-overlay"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 py-20">
        <h2 className="text-4xl font-bold mb-16 text-center text-white glow">
          Our Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: index * 0.1 }}
            >
              {/* Card Container */}
              <div className="p-6 bg-black/40 border border-white/10 h-48 rounded-xl relative">
                <div className="absolute inset-0 rounded-xl h-20"></div>
                <div className="relative z-10 text-white mb-4">{product.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{product.title}</h3>
                <p className="text-gray-400">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;