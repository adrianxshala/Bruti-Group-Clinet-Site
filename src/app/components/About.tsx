// import React, { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import { Card } from "@/components/ui/card";
// import CountUp from "react-countup";

// const About = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   const stats = [
//     { value: 25, suffix: "", label: "Vite përvoj" },
//     { value: 70, suffix: "", label: "Ekipi i ekspertëve" },
//     { value: 7, suffix: "", label: "Qytetet e shërbyera" },
//     { value: 98, suffix: "%", label: "98" },
//   ];

//   return (
//     <section id="about" className="py-16 relative">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto text-center">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.9, delay: 0.1 }}
//             className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 glow"
//           >
//             Rreth Nesh
//           </motion.h2>
//           <Card className="p-6 sm:p-8 bg-black/40 card-glow border-white/10">
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 0.3 }}
//               className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed"
//             >
//               Që nga themelimi ynë në vitin 2000, ne kemi qenë në ballë të
//               risi furnizimi me energji elektrike. Angazhimi ynë për cilësinë dhe
//               besueshmëria na ka bërë një partner të besueshëm për kontraktorët,
//               industritë dhe pronarët e shtëpive në të gjithë vendin.
//             </motion.p>
//             <div
//               ref={ref}
//               className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
//             >
//               {stats.map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{
//                     opacity: 0,
//                     x: index % 2 === 0 ? -20 : 20,
//                   }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 1.1, delay: 0.5 }}
//                   className="text-center"
//                 >
//                   <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
//                     {isInView && (
//                       <CountUp start={0} end={stat.value} duration={8} />
//                     )}{" "}
//                     {stat.suffix}
//                   </h3>
//                   <p className="text-gray-400 text-sm sm:text-base lg:text-lg">
//                     {stat.label}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
