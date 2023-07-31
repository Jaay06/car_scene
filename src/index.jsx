import { Canvas } from "@react-three/fiber"
import "./style.css"
import ReactDOM from "react-dom/client"
import Experience from "./Experience"
import Overlay from "./Overlay"
import { Leva } from "leva"

const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(
  <>
    <Leva hidden />
    <Canvas
      shadows
      camera={{
        fov: 25,
        near: 0.1,
        far: 200,
        position: [0, 4, 15],
        zoom: 1.5,
      }}
    >
      <Experience />
    </Canvas>
    <Overlay />
  </>
)
