import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

function HeadSection({ disableAnimation }) {
  const [hovered, setHovered] = useState(false);
  const [positions, setPositions] = useState(
    Array.from({ length: 25 }, () => ({ x: 0, y: 0 }))
  );

  const getRandomPosition = (maxX, maxY) => ({
    x: Math.random() * maxX - maxX / 2,
    y: Math.random() * maxY - maxY / 2,
  });

  useEffect(() => {
    // Set initial positions with a delay of 5 seconds
    const initialTimeoutId = setTimeout(() => {
      setPositions(
        Array.from({ length: 25 }, () => getRandomPosition(1200, 800))
      );
    }, 5000);

    // Change positions every 10 seconds after the initial update
    const intervalId = setInterval(() => {
      setPositions(
        Array.from({ length: 25 }, () => getRandomPosition(1200, 800))
      );
    }, 10000);

    return () => {
      clearTimeout(initialTimeoutId);
      clearInterval(intervalId);
    };
  }, [hovered]);

  const stickers = Array.from(
    { length: 25 },
    (_, i) => `/img/sticker${i + 1}.svg`
  );

  return (
    <div className="relative font-extrabold md:text-9xl text-8xl flex w-full justify-center items-center sm:pt-0 pt-4 z-10">
      <div
        className="inline-flex items-center justify-center relative group cursor-default"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <>
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
        </>

        {stickers.map((src, index) => (
          <motion.div
            key={index}
            className="absolute mx-0"
            initial={{
              x: Math.random() * 1000 - 500,
              y: Math.random() * 500 - 250,
              opacity: 0,
            }}
            animate={{
              x: hovered ? positions[index].x : Math.random() * 1000 - 500,
              y: hovered ? positions[index].y : Math.random() * 1000 - 250,
              opacity: 1,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            style={{ zIndex: hovered ? -1 : 1 }}
          >
            <img
              className="md:w-20  w-10 object-cover bg-cover transition-transform duration-500"
              src={src}
              alt={`sticker${index + 1}`}
            />
          </motion.div>
        ))}
      </div>
      <Outlet />
    </div>
  );
}

export default HeadSection;
