import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function HeadSection() {
  const [hovered, setHovered] = useState(false);
  const [positions, setPositions] = useState(
    Array.from({ length: 25 }, () => ({ x: 0, y: 0 }))
  );

  // Fungsi untuk mendapatkan posisi acak dengan jangkauan lebih luas
  const getRandomPosition = (maxX, maxY) => ({
    x: Math.random() * maxX - maxX / 2, // Nilai acak antara -maxX/2 dan maxX/2
    y: Math.random() * maxY - maxY / 2, // Nilai acak antara -maxY/2 dan maxY/2
  });

  useEffect(() => {
    // Update posisi sticker saat hover berubah
    setPositions(Array.from({ length: 25 }, () => getRandomPosition(600, 100)));

    // Interval untuk mengacak posisi setiap 10 detik
    const intervalId = setInterval(() => {
      setPositions(
        Array.from({ length: 25 }, () => getRandomPosition(1200, 800))
      );
    }, 10000); // 10000 ms = 10 detik

    // Membersihkan interval saat komponen di-unmount
    return () => clearInterval(intervalId);
  }, [hovered]);

  const stickers = Array.from(
    { length: 25 },
    (_, i) => `/img/sticker${i + 1}.svg`
  );

  return (
    <div className="relative font-extrabold text-9xl flex w-full justify-center items-center z-10">
      <div
        className="inline-flex items-center justify-center relative group cursor-default"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Animated Text for "OAT" */}
        <motion.div
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 3, delay: 2 }}
        >
          <div className="inline-flex">
            <span>O</span>
            <span>A</span>
            <span>T</span>
          </div>
        </motion.div>

        {/* Animated Text for "SIDE" */}
        <motion.div
          initial={{ x: 1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 3, delay: 2 }}
        >
          <div className="inline-flex">
            <span>S</span>
            <span>I</span>
            <span>D</span>
            <span>E</span>
          </div>
        </motion.div>

        {/* Animated Stickers */}
        {stickers.map((src, index) => (
          <motion.div
            key={index}
            className="absolute mx-0"
            initial={{
              x: Math.random() * 1000 - 500,
              y: Math.random() * 500 - 250,
              opacity: 0,
            }} // Posisi awal acak
            animate={{
              x: hovered ? positions[index].x : Math.random() * 1000 - 500,
              y: hovered ? positions[index].y : Math.random() * 1000 - 250,
              opacity: 1,
            }} // Posisi akhir atau acak
            transition={{
              duration: 1, // Durasi animasi
              ease: "easeInOut", // Efek easing
            }}
            style={{ zIndex: hovered ? -1 : 1 }} // Ubah z-index berdasarkan status hover
          >
            <img
              className="w-20 object-cover bg-cover transition-transform duration-500"
              src={src}
              alt={`sticker${index + 1}`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default HeadSection;
