import { useGLTF } from '@react-three/drei';
import { useLayoutEffect } from 'react';

export default function Suzi(props: any) {
  const { scene, materials } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/suzanne-high-poly/model.gltf'
  ) as any;

  useLayoutEffect(() => {
    scene.traverse(
      (obj: any) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
    );
    materials.default.color.set('orange');
    materials.default.roughness = 0;
  });

  return <primitive object={scene} {...props} />;
}
