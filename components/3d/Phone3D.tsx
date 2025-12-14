'use client';

import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { RoundedBox, Html } from '@react-three/drei';
import * as THREE from 'three';
import PhoneScreen from './PhoneScreen';

interface Phone3DProps {
  mouseX: number;
  mouseY: number;
}

export default function Phone3D({ mouseX, mouseY }: Phone3DProps) {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  
  // iPhone 15 Pro proportions (more accurate)
  const phoneWidth = 2.8;
  const phoneHeight = 5.8;
  const phoneDepth = 0.32;
  const cornerRadius = 0.45;
  const bezelWidth = 0.06;
  const screenCornerRadius = 0.38;
  
  // Smooth mouse tracking with damping
  const targetRotation = useRef({ x: 0, y: 0 });
  
  useFrame((state, delta) => {
    if (!groupRef.current) return;
    
    // Update target rotation based on mouse position
    targetRotation.current.x = mouseY * 0.12;
    targetRotation.current.y = mouseX * 0.18;
    
    // Apply damping for smooth movement
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetRotation.current.x,
      delta * 2.5
    );
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotation.current.y,
      delta * 2.5
    );
    
    // Floating animation - slower and more subtle
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.12;
  });

  // Scale based on viewport for responsiveness
  const scale = Math.min(viewport.width / 7, 1.1);

  return (
    <group ref={groupRef} scale={scale}>
      {/* iPhone Frame - Titanium body */}
      <RoundedBox
        args={[phoneWidth, phoneHeight, phoneDepth]}
        radius={cornerRadius}
        smoothness={8}
        position={[0, 0, 0]}
      >
        <meshPhysicalMaterial
          color="#1c1c1e"
          metalness={0.95}
          roughness={0.15}
          clearcoat={0.3}
          clearcoatRoughness={0.2}
        />
      </RoundedBox>
      
      {/* iPhone Frame edge highlight - creates the titanium edge look */}
      <RoundedBox
        args={[phoneWidth + 0.02, phoneHeight + 0.02, phoneDepth - 0.08]}
        radius={cornerRadius}
        smoothness={8}
        position={[0, 0, 0]}
      >
        <meshPhysicalMaterial
          color="#3a3a3c"
          metalness={1}
          roughness={0.1}
          clearcoat={0.5}
        />
      </RoundedBox>
      
      {/* Screen bezel - black border around screen */}
      <RoundedBox
        args={[phoneWidth - bezelWidth * 2, phoneHeight - bezelWidth * 2, 0.02]}
        radius={screenCornerRadius}
        smoothness={8}
        position={[0, 0, phoneDepth / 2 - 0.01]}
      >
        <meshStandardMaterial
          color="#000000"
          metalness={0}
          roughness={0.9}
        />
      </RoundedBox>
      
      {/* Screen glass surface - slightly recessed */}
      <RoundedBox
        args={[phoneWidth - bezelWidth * 3, phoneHeight - bezelWidth * 3, 0.01]}
        radius={screenCornerRadius - 0.03}
        smoothness={8}
        position={[0, 0, phoneDepth / 2]}
      >
        <meshPhysicalMaterial
          color="#f5f5f7"
          metalness={0}
          roughness={0}
          transmission={0.1}
          thickness={0.5}
          clearcoat={1}
          clearcoatRoughness={0}
        />
      </RoundedBox>
      
      {/* Dynamic Island */}
      <mesh position={[0, phoneHeight / 2 - 0.45, phoneDepth / 2 + 0.015]}>
        <capsuleGeometry args={[0.12, 0.5, 16, 32]} />
        <meshStandardMaterial color="#000000" metalness={0} roughness={0.3} />
      </mesh>
      {/* Dynamic Island - rotated to be horizontal */}
      <group position={[0, phoneHeight / 2 - 0.45, phoneDepth / 2 + 0.015]} rotation={[0, 0, Math.PI / 2]}>
        <mesh>
          <capsuleGeometry args={[0.1, 0.4, 16, 32]} />
          <meshStandardMaterial color="#000000" metalness={0} roughness={0.3} />
        </mesh>
      </group>
      
      {/* Side button - Power (right side) */}
      <RoundedBox
        args={[0.06, 0.5, 0.12]}
        radius={0.02}
        smoothness={4}
        position={[phoneWidth / 2 + 0.03, 0.6, 0]}
      >
        <meshPhysicalMaterial
          color="#2c2c2e"
          metalness={0.9}
          roughness={0.2}
        />
      </RoundedBox>
      
      {/* Action button (left side - top) */}
      <RoundedBox
        args={[0.06, 0.25, 0.12]}
        radius={0.02}
        smoothness={4}
        position={[-phoneWidth / 2 - 0.03, 1.2, 0]}
      >
        <meshPhysicalMaterial
          color="#2c2c2e"
          metalness={0.9}
          roughness={0.2}
        />
      </RoundedBox>
      
      {/* Volume Up button */}
      <RoundedBox
        args={[0.06, 0.35, 0.12]}
        radius={0.02}
        smoothness={4}
        position={[-phoneWidth / 2 - 0.03, 0.7, 0]}
      >
        <meshPhysicalMaterial
          color="#2c2c2e"
          metalness={0.9}
          roughness={0.2}
        />
      </RoundedBox>
      
      {/* Volume Down button */}
      <RoundedBox
        args={[0.06, 0.35, 0.12]}
        radius={0.02}
        smoothness={4}
        position={[-phoneWidth / 2 - 0.03, 0.25, 0]}
      >
        <meshPhysicalMaterial
          color="#2c2c2e"
          metalness={0.9}
          roughness={0.2}
        />
      </RoundedBox>
      
      {/* Camera module (back - subtle hint on the edge) */}
      <RoundedBox
        args={[1.1, 1.1, 0.15]}
        radius={0.2}
        smoothness={4}
        position={[-0.55, phoneHeight / 2 - 0.8, -phoneDepth / 2 - 0.02]}
      >
        <meshPhysicalMaterial
          color="#1c1c1e"
          metalness={0.8}
          roughness={0.2}
        />
      </RoundedBox>
      
      {/* Camera lenses */}
      {[[-0.8, phoneHeight / 2 - 0.55], [-0.3, phoneHeight / 2 - 0.55], [-0.55, phoneHeight / 2 - 1.0]].map((pos, i) => (
        <group key={i} position={[pos[0], pos[1], -phoneDepth / 2 - 0.08]}>
          <mesh>
            <cylinderGeometry args={[0.18, 0.18, 0.08, 32]} />
            <meshPhysicalMaterial
              color="#1a1a1a"
              metalness={0.9}
              roughness={0.1}
            />
          </mesh>
          <mesh position={[0, 0, -0.02]}>
            <cylinderGeometry args={[0.12, 0.12, 0.04, 32]} />
            <meshPhysicalMaterial
              color="#0a0a0a"
              metalness={0}
              roughness={0}
              clearcoat={1}
            />
          </mesh>
        </group>
      ))}
      
      {/* Flash */}
      <mesh position={[-0.3, phoneHeight / 2 - 1.0, -phoneDepth / 2 - 0.08]}>
        <cylinderGeometry args={[0.08, 0.08, 0.04, 32]} />
        <meshStandardMaterial color="#fffde7" emissive="#fffde7" emissiveIntensity={0.2} />
      </mesh>
      
      {/* HTML Login Screen overlay */}
      <Html
        transform
        occlude
        position={[0, -0.1, phoneDepth / 2 + 0.02]}
        style={{
          width: '260px',
          height: '520px',
        }}
        distanceFactor={1.4}
      >
        <PhoneScreen />
      </Html>
    </group>
  );
}
