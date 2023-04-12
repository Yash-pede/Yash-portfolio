import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgURL]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2} scale={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.5]} />
      <mesh>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal position={[0, 0, 1]}
          map={decal }  flatShading/>
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => (

  
  <Canvas shadows gl={{ preserveDrawingBuffer: true }}>
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls enableZoom={false} />
      <Ball imgURL={icon} />
    </Suspense>
    <Preload all />
  </Canvas>
);

export default BallCanvas;
