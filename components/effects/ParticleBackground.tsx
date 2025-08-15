import { useEffect } from 'react';
import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { ParticleSystem } from 'three/examples/jsm/particles/ParticleSystem';
import { motion } from 'framer-motion';

const ParticleBackground: React.FC = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const particles = new ParticleSystem();
    particles.setColors(new THREE.Color(0xff69b4), new THREE.Color(0x000000));
    scene.add(particles);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.x += 0.01;
      particles.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();
    
    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="absolute inset-0">
      <Canvas className="w-full h-full">
        {/ Particle system and other 3D elements can be added here /}
      </Canvas>
    </div>
  );
};

const ParticleBackgroundWrapper: React.FC = () => {
  return (
    <motion.div
      className="relative w-full h-screen bg-black overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ParticleBackground />
      <div className="absolute inset-0 flex justify-center items-center">
        <h1 className="text-5xl font-bold text-pink-500">
          Welcome to luxery dark AirBNB
        </h1>
      </div>
    </motion.div>
  );
};

export default ParticleBackgroundWrapper;