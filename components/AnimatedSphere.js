import React from 'react'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'

function AnimatedSphere() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2.8}>
        <MeshDistortMaterial
            color="#8352FD" attach="material" distort={0.4} speed={3} roughness={0}/>
    </Sphere>
  )
}

export default AnimatedSphere