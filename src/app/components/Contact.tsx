"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="contact" className="  bg-grid ">
      <div className="container mx-auto px-6 pt-8 ">
      <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-3xl sm:text-4xl font-bold pb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-950 via-green-900 to-cyan-500 glow"
          >
            Na Kontaktoni
          </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
          {/* Background element for blur to work against */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
          
          {mounted && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="p-8 bg-black border border-green-900 rounded-lg">
                <form className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Bruti Group"
                      className="w-full p-3 bg-black/30 backdrop-blur-sm border border-white/10 rounded-md text-white placeholder-white/60"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="brutigroup@gmail.com"
                      className="w-full p-3 bg-black/30 backdrop-blur-sm border border-white/10 rounded-md text-white placeholder-white/60"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      className="w-full p-3 bg-black/30 backdrop-blur-sm border border-white/10 rounded-md text-white placeholder-white/60"
                      rows={4}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full p-3 bg-white hover:bg-gray-200 text-black font-bold rounded-md transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          )}

          <div className="space-y-6">
            <div className="p-8 backdrop-blur-lg bg-black/40 border border-green-900 rounded-lg">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-white">
                  <Phone className="w-6 h-6" />
                  <p>+383 (43) 700-402</p>
                </div>
                <div className="flex items-center space-x-4 text-white">
                  <Mail className="w-6 h-6" />
                  <p>brutigroup@gmail.com</p>
                </div>
                <div className="flex items-center space-x-4 text-white">
                  <MapPin className="w-6 h-6" />
                  <p>23000 Suharekë,Prizren,Kosovë</p>
                </div>
              </div>
            </div>
            
            <div className="h-[300px] rounded-2xl overflow-hidden border border-green-900  relative hidden md:block">
              <div className="absolute inset-0 backdrop-blur-sm bg-black/20" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11759.158684525246!2d20.8153153156619!3d42.5416440791776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1352f8b8a8c7c5d5%3A0x8a4a4a4a4a4a4a4a!2sSuva%20Reka%2C%20Kosovo!5e0!3m2!1sen!2s!4v1650000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    
    </section>
  );
};

export default Contact;