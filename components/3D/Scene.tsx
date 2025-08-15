import { useEffect } from 'react';
import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

interface SceneProps {
  title: string;
}

const Scene: React.FC<SceneProps> = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className="relative h-screen bg-black flex items-center justify-center">
      <motion.div 
        className="text-5xl font-bold text-pink-500 mb-8"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        Welcome to luxery dark AirBNB
      </motion.h1>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {/ Placeholder for 3D model /}
        <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="pink" />
        </mesh>
        <OrbitControls />
      </Canvas>
      <div className="absolute bottom-10 left-10 text-white">
        <motion.div 
          className="text-lg"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1.5 }}
        >
          Experience the future of luxury accommodations with cutting-edge technology at luxery dark AirBNB.
        </motion.p>
      </div>
    </div>
  );
};

export default Scene;