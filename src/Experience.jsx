import {
  GizmoHelper,
  GizmoViewport,
  OrbitControls,
  MeshReflectorMaterial,
  TransformControls,
  ContactShadows,
  AccumulativeShadows,
  RandomizedLight,
  Backdrop,
  Environment,
  Lightformer,
  Text,
  Text3D,
  Center,
} from "@react-three/drei"
import { useControls } from "leva"
import { useFrame } from "@react-three/fiber"
import React, { Suspense, useRef } from "react"
import { Perf } from "r3f-perf"
import { Car } from "./model/Car"
import { MeshStandardMaterial } from "three"
import { Color, Depth, LayerMaterial } from "lamina"
import * as THREE from "three"
import Lights from "./Lights"

const Experience = () => {
  const { perfVisible } = useControls({
    perfVisible: false,
  })

  const { colorA, colorB } = useControls("enviroment-sphere", {
    colorA: "blue",
    colorB: "black",
  })

  const rig = new THREE.Vector3()

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime

    state.controls.autoRotate = true

    //   state.camera.position.lerp(
    //     rig.set(
    //       Math.sin(time / 5),
    //       Math.sin(time / 5) + 0.5,
    //       12 + Math.cos(time / 5) / 2
    //     ),
    //     0.05
    //   )
    //   state.camera.lookAt(0, 0, 0)
  })

  return (
    <>
      {perfVisible && <Perf position="top-left" />}

      {/* controls */}
      <OrbitControls makeDefault />

      {/* lights */}
      {/* <directionalLight position={[1, 2, 3]} intensity={1.5} /> */}
      <spotLight
        position={[0, 15, 0]}
        angle={0.3}
        penumbra={1}
        castShadow
        intensity={2}
        shadow-bias={-0.0001}
      />

      <ambientLight intensity={0.5} />
      <color attach="background" args={["#15151a"]} />

      {/* shadows */}
      <AccumulativeShadows
        position={[0, -1, 0]}
        scale={20}
        opacity={0.8}
        frames={100}
        temporal
        blend={100}
      >
        <RandomizedLight
          amount={8}
          radius={1}
          ambient={0.5}
          intensity={1}
          position={[1, 2, 3]}
          bias={0.001}
        />
      </AccumulativeShadows>

      {/* box for testing */}
      {/* <group>
        <mesh castShadow position={[-2, -0.5, 0]}>
          <boxGeometry />
          <meshStandardMaterial color="blue" />
        </mesh>
      </group> */}

      <Text
        font="./fonts/DollieScript.ttf"
        scale={1}
        fontSize={2}
        letterSpacing={0.05}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        position={[1.3, -0.998, 0]}
        color="#DE3163"
        anchorX="center"
        anchorY="middle"
      >
        nini
      </Text>

      {/* model */}
      <Car position={[0, -1, 0]} />

      {/* enviroment */}
      <mesh
        scale={1.5}
        position={[0, -0.999, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <ringGeometry args={[0.9, 1, 30, 1]} />
        <meshStandardMaterial
          color="white"
          roughness={0.7}
          emissive={0xffffff}
          emissiveIntensity={20}
        />
      </mesh>

      <mesh scale={100}>
        <sphereGeometry args={[1, 64, 64]} />
        <LayerMaterial side={THREE.BackSide}>
          <Color color="#444" alpha={1} mode="normal" />
          <Depth
            colorA={colorA}
            colorB={colorB}
            alpha={0.5}
            mode="normal"
            near={0}
            far={300}
            origin={[100, 100, 100]}
          />
        </LayerMaterial>
      </mesh>

      <Lights />

      {/* floor */}
      {/* <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial color="white" />
      </mesh> */}

      {/* GizmoHelper */}
      <GizmoHelper alignment="bottom-right" margin={[100, 100]}>
        <GizmoViewport labelColor="white" axisHeadScale={1} />
      </GizmoHelper>
    </>
  )
}

export default Experience
