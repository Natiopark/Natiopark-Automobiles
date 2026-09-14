"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, ContactShadows } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import type { Group } from "three";

function MetallicN() {
  const group = useRef<Group>(null);

  const { circleGeo, nShape } = useMemo(() => {
    const circle = new THREE.TorusGeometry(1.35, 0.045, 16, 96);

    // Extruded geometric N
    const shape = new THREE.Shape();
    // Outer N silhouette (normalized around origin, roughly -1..1)
    shape.moveTo(-0.85, 0.9);
    shape.lineTo(-0.35, 0.9);
    shape.lineTo(0.35, -0.35);
    shape.lineTo(0.35, 0.9);
    shape.lineTo(0.85, 0.9);
    shape.lineTo(0.85, -0.9);
    shape.lineTo(0.35, -0.9);
    shape.lineTo(-0.35, 0.35);
    shape.lineTo(-0.35, -0.9);
    shape.lineTo(-0.85, -0.9);
    shape.closePath();

    const extrude = new THREE.ExtrudeGeometry(shape, {
      depth: 0.22,
      bevelEnabled: true,
      bevelThickness: 0.03,
      bevelSize: 0.025,
      bevelSegments: 3,
    });
    extrude.center();

    return { circleGeo: circle, nShape: extrude };
  }, []);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.35;
      group.current.rotation.x = Math.sin(Date.now() * 0.0004) * 0.12;
    }
  });

  const metal = (
    <meshStandardMaterial
      color="#c8c5be"
      metalness={0.95}
      roughness={0.18}
      envMapIntensity={1.4}
    />
  );

  return (
    <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.55}>
      <group ref={group} scale={1.15}>
        <mesh geometry={circleGeo} rotation={[Math.PI / 2, 0, 0]}>
          {metal}
        </mesh>
        <mesh geometry={nShape} position={[0, 0, 0]} scale={0.95}>
          <meshStandardMaterial
            color="#d4d1cb"
            metalness={0.92}
            roughness={0.22}
            envMapIntensity={1.5}
          />
        </mesh>
      </group>
    </Float>
  );
}

export function Logo3DScene() {
  return (
    <div className="relative h-[360px] w-full sm:h-[420px] md:h-[480px]">
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 40 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
        aria-label="Logo NatioPark en 3D métallique"
      >
        <ambientLight intensity={0.35} />
        <directionalLight position={[4, 6, 3]} intensity={1.2} color="#ffffff" />
        <directionalLight position={[-3, -2, -4]} intensity={0.4} color="#2d5a45" />
        <spotLight position={[0, 4, 2]} intensity={0.8} angle={0.4} penumbra={0.6} color="#e8e6e3" />
        <MetallicN />
        <ContactShadows
          position={[0, -1.7, 0]}
          opacity={0.45}
          scale={8}
          blur={2.5}
          far={4}
        />
        <Environment preset="city" />
      </Canvas>
      <div className="pointer-events-none absolute inset-x-0 bottom-4 text-center text-[0.65rem] tracking-[0.25em] text-muted uppercase">
        Emblème NatioPark · 3D
      </div>
    </div>
  );
}
