'use client';
import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

function SmokeParticles() {
  const smokeRefs = useRef<THREE.Mesh[]>([]);
  const smokeTexture = useLoader(THREE.TextureLoader, '/assets/smoke.png');

  useFrame(() => {
    smokeRefs.current.forEach((mesh, index) => {
      if (mesh) {
        const speed = 0.001 + index * 0.0002; 
        mesh.position.x += Math.sin(performance.now() * speed) * 0.02; 
      }
    });
  });

  return (
    <>

      {[...Array(3)].map((_, index) => (
        <mesh
          key={index}
          ref={(el) => {
            if (el) smokeRefs.current[index] = el;
          }}
          position={[
            index === 0 ? -16 : index === 1 ? 0 : 16, 
            -6, 
            -1, 
          ]}
          scale={1.8} 
        >
          <planeGeometry args={[40, 20]} /> 
          <meshLambertMaterial
            transparent
            opacity={0.4} 
            attach="material"
            map={smokeTexture} 
          />
        </mesh>
      ))}
    </>
  );
}

export default function SmokeEffect() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 25], 
        fov: 60, 
        near: 0.1,
        far: 100,
      }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '70vh',
        zIndex: 1,
        pointerEvents: 'none',
      }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <SmokeParticles />
    </Canvas>
  );
}
