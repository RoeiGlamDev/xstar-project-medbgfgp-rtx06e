import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/
 * Custom hook to manage 3D interactions for the luxery dark AirBNB website.
 * This hook utilizes Three.js for rendering 3D elements that enhance the user 
 * experience on the HouseIL platform, aligning with our brand's luxurious aesthetic.
 *
 * @returns {Object} - Contains methods and properties for 3D interactions.
 */
export const use3D = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const animationFrameIdRef = useRef<number>();

  const initializeScene = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current! });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000); // Background color: black
    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xff00ff, 0.5); // Pink ambient light
    scene.add(ambientLight);

    // Setup camera position
    camera.position.z = 5;

    // Handle window resize
    window.addEventListener('resize', onWindowResize, false);
    return { scene, camera, renderer };
  };

  const onWindowResize = () => {
    if (cameraRef.current && rendererRef.current) {
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    }
  };

  const animate = () => {
    animationFrameIdRef.current = requestAnimationFrame(animate);
    if (sceneRef.current && rendererRef.current) {
      rendererRef.current.render(sceneRef.current, cameraRef.current!);
    }
  };

  const startAnimation = () => {
    const { scene, camera, renderer } = initializeScene();
    animate();
  };

  useEffect(() => {
    startAnimation();
    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  return {
    canvasRef,
    startAnimation,
  };
};