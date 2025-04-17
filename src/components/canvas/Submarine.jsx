import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Submarine = () => {
  const submarine = useGLTF('./submarine/scene.gltf')
  return (
    
    <mesh>
      <hemisphereLight intensity={0.35} groundColor="black" />
      <pointLight intensity={1} position={[2, 3, 4]} />
      <spotLight 
        position={[-20, 50, 10]}
        angle={0.12}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
      object={submarine.scene}
      scale={100}
      position-y={0}
      rotation-y={0}
    />
    </mesh>
  )
}

const SubmarineCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{preserveDrawingBuffer: true}}
      camera= {{
        fov:45, near: 0.1, far:200, position: [-4, 3, 6]
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Submarine />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default SubmarineCanvas