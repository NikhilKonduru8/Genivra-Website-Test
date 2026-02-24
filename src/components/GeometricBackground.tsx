"use client";

import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const SHAPE_CONFIGS = [
  { type: "box" as const, pos: [-12, -2, -20], scale: 1.2, rot: [0.2, 0.5, 0] },
  { type: "box" as const, pos: [14, 3, -25], scale: 0.9, rot: [0, 0.8, 0.3] },
  { type: "box" as const, pos: [-8, 5, -15], scale: 0.7, rot: [0.1, 0.2, 0.4] },
  { type: "box" as const, pos: [10, -5, -22], scale: 1, rot: [-0.2, 0.6, 0] },
  { type: "box" as const, pos: [0, 4, -18], scale: 0.6, rot: [0.3, 0, 0.2] },
  { type: "cylinder" as const, pos: [-15, 2, -12], scale: 0.8, rot: [0, 0, Math.PI / 4] },
  { type: "cylinder" as const, pos: [12, -3, -16], scale: 0.7, rot: [0, 0, -0.3] },
  { type: "cylinder" as const, pos: [-5, -4, -24], scale: 0.5, rot: [0.2, 0, 0] },
  { type: "cylinder" as const, pos: [8, 5, -14], scale: 0.6, rot: [0, 0, Math.PI / 6] },
  { type: "icosahedron" as const, pos: [-10, 1, -19], scale: 0.9, rot: [0, 0, 0] },
  { type: "icosahedron" as const, pos: [6, -2, -21], scale: 0.7, rot: [0, 0, 0] },
  { type: "icosahedron" as const, pos: [3, 6, -11], scale: 0.5, rot: [0, 0, 0] },
  { type: "octahedron" as const, pos: [-3, -5, -17], scale: 0.6, rot: [0, 0, 0] },
  { type: "octahedron" as const, pos: [15, 1, -23], scale: 0.5, rot: [0, 0, 0] },
  { type: "tetrahedron" as const, pos: [-14, 4, -13], scale: 0.5, rot: [0, 0, 0] },
  { type: "tetrahedron" as const, pos: [5, -6, -20], scale: 0.6, rot: [0, 0, 0] },
  { type: "box" as const, pos: [-18, 0, -26], scale: 0.8, rot: [0, 0.4, 0.1] },
  { type: "box" as const, pos: [18, -1, -22], scale: 0.7, rot: [0, -0.3, 0.2] },
  { type: "cylinder" as const, pos: [-2, 7, -10], scale: 0.4, rot: [0.5, 0, 0] },
  { type: "cylinder" as const, pos: [16, 4, -18], scale: 0.55, rot: [0, 0, -0.2] },
];

function WireframeShape({
  type,
  position,
  scale,
  rotation: rot,
}: {
  type: "box" | "cylinder" | "icosahedron" | "octahedron" | "tetrahedron";
  position: [number, number, number];
  scale: number;
  rotation: [number, number, number];
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    meshRef.current.rotation.x = rot[0] + t * 0.02;
    meshRef.current.rotation.y = rot[1] + t * 0.03;
    meshRef.current.rotation.z = rot[2] + t * 0.015;
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      {type === "box" && <boxGeometry args={[1, 1, 1]} />}
      {type === "cylinder" && <cylinderGeometry args={[0.5, 0.5, 1.5, 16]} />}
      {type === "icosahedron" && <icosahedronGeometry args={[1, 0]} />}
      {type === "octahedron" && <octahedronGeometry args={[1, 0]} />}
      {type === "tetrahedron" && <tetrahedronGeometry args={[1, 0]} />}
      <meshBasicMaterial
        color="#94a3b8"
        wireframe
        transparent
        opacity={0.04}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      {SHAPE_CONFIGS.map((config, i) => (
        <WireframeShape
          key={i}
          type={config.type}
          position={config.pos as [number, number, number]}
          scale={config.scale}
          rotation={config.rot as [number, number, number]}
        />
      ))}
    </>
  );
}

export default function GeometricBackground() {
  return (
    <div className="fixed inset-0 z-[-1] bg-[#0a0f1a]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/40 via-transparent to-[#0a0f1a]/50 z-10 pointer-events-none" />
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 10], fov: 55 }}
          dpr={[1, 1.25]}
          gl={{ antialias: true, alpha: true }}
          className="absolute inset-0"
        >
          <color attach="background" args={["#0a0f1a"]} />
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
}
