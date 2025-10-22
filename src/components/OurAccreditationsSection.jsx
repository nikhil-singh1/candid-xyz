import React from "react";
import { motion } from "framer-motion";

const accreditations = [
  { src: "/cyber.jpeg", alt: "Cyber Accreditation" },
  { src: "/ico.jpeg", alt: "ICO Accreditation" },
  { src: "/procurement.jpeg", alt: "Procurement Accreditation" },
];

const OurAccreditationsSection = () => {
  return (
    <section className="relative overflow-hidden py-20 bg-[var(--color-primary-dark)] backdrop-blur-md">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-r from-[var(--color-primary-light)]/20 via-white to-[var(--color-primary-dark)]/10 opacity-60"></div>

      {/* Title */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Our Accreditations
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-200 mt-2 font-semibold"
        >
          Certified and trusted by global organizations for excellence and integrity.
        </motion.p>
      </div>

      {/* Logos */}
      <div className="container mx-auto flex flex-wrap justify-center items-center gap-10 px-6">
        {accreditations.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="h-24 w-auto object-contain grayscale hover:grayscale-0 transition duration-500"
            />
          </motion.div>
        ))}
      </div>

      {/* Floating animation background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[var(--color-primary-light)]/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[var(--color-primary-dark)]/20 rounded-full blur-2xl animate-pulse delay-2000"></div>
    </section>
  );
};

export default OurAccreditationsSection;
