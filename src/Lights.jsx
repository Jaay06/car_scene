import { Environment, Float, Lightformer } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useControls } from "leva"
import React, { useRef } from "react"

const Lights = () => {
  const topLightRef = useRef()

  useFrame((state, delta) => {
    // const time = state.clock.getElapsedTime()
    // topLightRef.current.position.z = Math.sin(time) * 10
  })

  return (
    <>
      <Environment background={true}>
        {/* sides */}
        <Lightformer
          ref={topLightRef}
          form="ring"
          intensity={3}
          color="white"
          scale={[10, 5]}
          target={[0, 0, 0]}
          position={[0, 10, 0]}
        />

        <Lightformer
          form="rect"
          intensity={3}
          color="white"
          scale={[10, 5]}
          target={[0, 0, 0]}
          position={[-10, 0, 0]}
        />

        <Lightformer
          form="rect"
          intensity={1}
          color="white"
          scale={[10, 5]}
          target={[0, 0, 0]}
          position={[10, 0, 0]}
        />

        <Lightformer
          form="circle"
          intensity={1}
          color="#f3e7d3"
          scale={[2, 2]}
          target={[0, 0, -1]}
          position={[0, 0, -10]}
        />

        <Float speed={5} floatIntensity={2} rotationIntensity={2}>
          <Lightformer
            form="ring"
            color="red"
            intensity={1}
            scale={10}
            position={[-15, 4, -18]}
            target={[0, 0, 0]}
          />
        </Float>
      </Environment>
    </>
  )
}

export default Lights
