import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus, Icosahedron } from "@react-three/drei";
import * as THREE from "three";

const AnimatedSphere = ({ position, color, speed = 1 }: { position: [number, number, number]; color: string; speed?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const AnimatedTorus = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.8;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
      <Torus ref={meshRef} args={[0.8, 0.3, 16, 100]} position={position}>
        <meshStandardMaterial
          color={color}
          metalness={0.9}
          roughness={0.1}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </Torus>
    </Float>
  );
};

const AnimatedIcosahedron = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2.5}>
      <Icosahedron ref={meshRef} args={[0.7, 0]} position={position}>
        <meshStandardMaterial
          color={color}
          metalness={0.8}
          roughness={0.2}
          wireframe
          emissive={color}
          emissiveIntensity={0.5}
        />
      </Icosahedron>
    </Float>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00f5ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        color="#00ff88"
      />

      <AnimatedSphere position={[-3, 1, 0]} color="#00f5ff" speed={1} />
      <AnimatedTorus position={[3, -0.5, -1]} color="#ff00ff" />
      <AnimatedIcosahedron position={[0, 2, -2]} color="#00ff88" />
      <AnimatedSphere position={[2.5, 2, -1]} color="#ff00ff" speed={0.7} />
      <AnimatedTorus position={[-2.5, -1.5, -1]} color="#00f5ff" />
    </>
  );
};

const Hero3D = () => {
  return (
    <div className="absolute inset-0 -z-5">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Hero3D;
