import { useEffect } from 'react';
import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

interface FloatingElementProps {
  position: [number, number, number];
}

const FloatingElement: React.FC<FloatingElementProps> = ({ position }) => {
  return (
    <motion.div
      position={position}
      animate={{
        y: [0, 0.5, 0],
      }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="#ff69b4" />
    </motion.mesh>
  );
};

const FloatingElements: React.FC = () => {
  const elements = [
    [-1, 0, 0],
    [1, 0, 0],
    [0, 1, 0],
    [0, -1, 0],
  ];

  return (
    <Canvas className="w-full h-full bg-black">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {elements.map((pos, index) => (
        <FloatingElement key={index} position={pos} />
      ))}
      <OrbitControls />
    </Canvas>
  );
};

const FloatingElementsWrapper: React.FC = () => {
  useEffect(() => {
    document.title = "luxery dark AirBNB - HouseIL";
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black text-pink-500">
      <h1 className="text-4xl font-bold mb-4">Welcome to luxery dark AirBNB</h1>
      <p className="text-lg mb-8">
        Experience elegance and innovation in our premium offerings.
      </p>
      <FloatingElements />
      <p className="mt-8 text-center">
        Discover exclusive listings and unparalleled services, designed with cutting-edge technology.
      </p>
    </div>
  );
};

export default FloatingElementsWrapper;