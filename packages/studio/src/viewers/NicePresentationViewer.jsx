import React from "react";

import Canvas from "./Canvas.jsx";

import Controls from "../components-3d/Controls.jsx";
import { ShapeGeometries } from "../components-3d/ShapeGeometry.jsx";
import DefaultGeometry from "../components-3d/DefaultGeometry.jsx";

const PrettyMaterial = ({ ...props }) => {
  return <meshStandardMaterial {...props} color="#B4D4E4" metalness={0.5} />;
};

export default React.memo(function NicePresentationViewer({
  shapes,
  orthographicCamera,
  disableAutoPosition,
}) {
  return (
    <Canvas orthographic={orthographicCamera}>
      <directionalLight intensity={0.7} position={[-1, 0.1, 1]} castShadow />
      <directionalLight
        intensity={0.1}
        position={[1.1, -0.1, -1.1]}
        castShadow
      />
      <ambientLight intensity={0.6} />
      <Controls hideGizmo center>
        {shapes !== "error" && shapes.length && (
          <ShapeGeometries
            shapes={shapes}
            disableAutoPosition={disableAutoPosition}
            selectMode="none"
            FaceMaterial={PrettyMaterial}
            LineMaterial={null}
          />
        )}
        {shapes === "error" && <DefaultGeometry />}
      </Controls>
    </Canvas>
  );
});
