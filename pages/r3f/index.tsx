import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  Environment,
  Loader,
  // useProgress,
  // Html,
  Float,
} from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// function Loader() {
//   const { progress } = useProgress();
//   console.log('progress', progress);
//   return <Html center>{progress} % loaded</Html>;
// }

const DynamicSuzi = dynamic(() => import('@/components/Suzi'), {
  ssr: false,
});

export default function R3F() {
  return (
    <>
      <Canvas>
        <Perf position='top-left' />
        <OrbitControls />
        <Float>
          <Suspense fallback={null}>
            <group position={[0, -0.5, 0]}>
              <DynamicSuzi />
            </group>
          </Suspense>
        </Float>
        <Environment preset='city' />
      </Canvas>
      <Loader />
    </>
  );
}
