import React, { useEffect, useRef, Suspense, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Bird model with animation and responsive positioning
const Bird = ({ scrollY, viewport }) => {
  const gltf = useLoader(GLTFLoader, '/Hummingbird.glb');
  const birdRef = useRef();
  const mixer = useRef();
  const clock = useRef(new THREE.Clock());
 
  // Initial setup for animations
  useEffect(() => {
    if (gltf.animations && gltf.animations.length) {
      mixer.current = new THREE.AnimationMixer(gltf.scene);
      const flyAction = mixer.current.clipAction(gltf.animations[0]);
      flyAction.play();
    }
   
    // Adjust scale based on viewport size
    const scaleFactor = viewport.width < 640 ? 0.3 : viewport.width < 1024 ? 0.4 : 0.5;
    gltf.scene.scale.set(scaleFactor, scaleFactor, scaleFactor);
  }, [gltf, viewport]);
 
  // Animation and scroll-based displacement with responsive adjustments
  useFrame(() => {
    if (mixer.current) {
      mixer.current.update(clock.current.getDelta());
    }
   
    if (birdRef.current) {
      const time = clock.current.getElapsedTime();
      const scrollFactor = scrollY.current / (document.body.scrollHeight - window.innerHeight);
      
      // Adjust horizontal movement range based on viewport size
      const startX = viewport.width < 640 ? -2 : -4;
      const rangeX = viewport.width < 640 ? 4 : viewport.width < 1024 ? 6 : 7.5;
      
      // Bird flies horizontally across screen based on scroll position
      birdRef.current.position.x = startX + scrollFactor * rangeX;
      
      // Adjust vertical position and oscillation based on viewport size
      const baseHeight = viewport.width < 640 ? 0.3 : 0.5;
      const oscillationIntensity = viewport.width < 640 ? 0.1 : 0.2;
      birdRef.current.position.y = Math.sin(time * 2) * oscillationIntensity + baseHeight;
      
      // Bird slightly turns as it moves
      birdRef.current.rotation.y = Math.sin(time * 0.5) * 1 + scrollFactor * Math.PI;
    }
  });
 
  return <primitive ref={birdRef} object={gltf.scene} />;
};

// Main component with scroll tracking and responsive handling
const ScrollBird = () => {
  const scrollY = useRef(0);
  const [viewport, setViewport] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });
 
  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };
    
    const handleResize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
   
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Adjust camera FOV based on viewport size
  const cameraFOV = viewport.width < 640 ? 60 : viewport.width < 1024 ? 55 : 50;
  
  // Adjust camera position based on viewport size
  const cameraPosition = viewport.width < 640 ? [0, 0, 4] : [0, 0, 5];
  
  return (
    <div className="bird-container" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      pointerEvents: 'none', // Allow interactions with elements underneath
      zIndex: 10, // Ensure proper layering
    }}>
      <Canvas
        camera={{ position: cameraPosition, fov: cameraFOV }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <Suspense fallback={null}>
          <Bird scrollY={scrollY} viewport={viewport} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ScrollBird;