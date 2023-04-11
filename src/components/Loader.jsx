import React from "react";
import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load"></span>
      <p className="text-[14px] text-white font-semibold mt-60">
        {progress.toFixed(1)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
