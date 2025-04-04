import React, { useEffect, useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Bird model with animation
const Bird = ({ scrollY }) => {
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
    
    // Scale the model if needed
    gltf.scene.scale.set(0.5, 0.5, 0.5);
  }, [gltf]);
  
  // Animation and scroll-based displacement
  useFrame(() => {
    if (mixer.current) {
      mixer.current.update(clock.current.getDelta());
    }
    
    if (birdRef.current) {
      // Move bird based on scroll
      // Using normalized scroll value and add some oscillation for natural movement
      const time = clock.current.getElapsedTime();
      const scrollFactor = scrollY.current / (document.body.scrollHeight - window.innerHeight);
      
      // Bird flies horizontally across screen based on scroll position
      birdRef.current.position.x = -4 + scrollFactor * 7.5; // -5 to 5 across viewport
      
      // Add some vertical oscillation for natural flight
      birdRef.current.position.y = Math.sin(time * 2) * 0.2 + 0.5;
      
      // Bird slightly turns as it moves
      birdRef.current.rotation.y = Math.sin(time * 0.5) * 1 + scrollFactor * Math.PI;
      
      // Wings flapping is handled by the animation mixer
    }
  });
  
  return <primitive ref={birdRef} object={gltf.scene} />;
};

// Main component with scroll tracking
const ScrollBird = () => {
  const scrollY = useRef(0);
  
  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="bird-container" style={{ 
      position: 'fixed', 
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      pointerEvents: 'none', // Allow interactions with elements underneath
    }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <Suspense fallback={null}>
          <Bird scrollY={scrollY} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ScrollBird;