import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CardLoading from "../Elements/loading/CardLoading";

const LoadingSection = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000); // Durasi 4 detik (2 detik animasi + 2 detik delay)
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.section
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: -1200,
        transition: {
          duration: 3,
          delay: 2,
        },
      }}
      exit={{ y: window.innerWidth }}
      className="min-h-screen flex flex-col justify-center items-center fixed w-screen bg-[#dad5ce] z-50 "
    >
      <CardLoading thumbUrl="imgthumb/10.webp" delay="0.5" />
      <CardLoading thumbUrl="imgthumb/6.webp" delay="0.8" />
      <CardLoading thumbUrl="imgthumb/8.webp" delay="1.1" />
      <CardLoading thumbUrl="imgthumb/9.webp" delay="1.4" />
      <CardLoading thumbUrl="imgthumb/7.webp" delay="1.7" />
    </motion.section>
  );
};

export default LoadingSection;
