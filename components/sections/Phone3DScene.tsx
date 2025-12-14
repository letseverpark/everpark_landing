'use client';

import { Canvas } from '@react-three/fiber';
import { ContactShadows, Environment, Float } from '@react-three/drei';
import Phone3D from '../3d/Phone3D';

interface Phone3DSceneProps {
  mouseX: number;
  mouseY: number;
}

export default function Phone3DScene({ mouseX, mouseY }: Phone3DSceneProps) {
  return (
    <div className="w-full h-[550px] md:h-[620px] lg:h-[680px]">
      <Canvas
        camera={{ position: [0, 0, 9], fov: 40 }}
        dpr={[1, 2]}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: 'high-performance'
        }}
        style={{ background: 'transparent' }}
      >
        {/* Ambient light for base illumination */}
        <ambientLight intensity={0.5} />
        
        {/* Key light - main illumination from top right */}
        <directionalLight
          position={[5, 8, 5]}
          intensity={1.2}
          castShadow
          color="#ffffff"
        />
        
        {/* Fill light - softer from left */}
        <directionalLight
          position={[-4, 4, 4]}
          intensity={0.5}
          color="#f0f0f0"
        />
        
        {/* Rim light - creates edge highlight with brand color */}
        <directionalLight
          position={[0, -3, 6]}
          intensity={0.4}
          color="#00b58e"
        />
        
        {/* Back light for depth */}
        <directionalLight
          position={[0, 2, -5]}
          intensity={0.3}
          color="#00ffbd"
        />
        
        {/* Subtle point lights for reflections */}
        <pointLight position={[3, 3, 3]} intensity={0.2} color="#ffffff" />
        <pointLight position={[-3, 3, 3]} intensity={0.2} color="#00b58e" />
        
        {/* Environment for realistic reflections */}
        <Environment preset="city" />
        
        {/* The 3D Phone with Float wrapper for extra smoothness */}
        <Float
          speed={1.5}
          rotationIntensity={0.1}
          floatIntensity={0.3}
          floatingRange={[-0.05, 0.05]}
        >
          <Phone3D mouseX={mouseX} mouseY={mouseY} />
        </Float>
        
        {/* Contact shadow - green tinted for brand consistency */}
        <ContactShadows
          position={[0, -3.5, 0]}
          opacity={0.5}
          scale={12}
          blur={3}
          far={5}
          color="#00b58e"
        />
        
        {/* Secondary subtle shadow */}
        <ContactShadows
          position={[0, -3.5, 0]}
          opacity={0.2}
          scale={8}
          blur={1.5}
          far={3}
          color="#000000"
        />
      </Canvas>
    </div>
  );
}
