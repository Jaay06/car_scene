import React, { useState } from "react"
import { HexColorInput, HexColorPicker } from "react-colorful"
import useGame from "./useGame"

const Overlay = () => {
  const color = useGame((state) => state.color)
  const changeColor = useGame((state) => state.changeColor)

  const changeDriverDecal = useGame((state) => state.changeDriverDecal)
  const changePassangerDecal = useGame((state) => state.changePassangerDecal)

  const [show, setShow] = useState(true)

  const decals = [
    "/carRed.png",
    "/fireSkull.png",
    "/punisher.png",
    "/barbie.png",
    "/BarbieTop.png",
  ]

  return (
    <div className="overlay">
      <div className="hambuger-menu" onClick={() => setShow(!show)}>
        <img src="/hambuger.svg" alt="" />
      </div>
      <div className="container">
        <div className="title">
          Lighting and Scene Car Customization
          <p className="sub-titile"></p>
        </div>

        <div className="car-model-link">
          <a href="https://skfb.ly/ops7I">Model Link</a>
        </div>

        {/* customize btn */}

        <div
          className="customize"
          style={{
            transform: `translateX(${!show ? 150 : 0}%)`,
            transformOrigin: "right",
            transition: "transform 0.4s ease",
          }}
        >
          <button
            style={{ backgroundColor: `${color}` }}
            onClick={() => setShow(!show)}
          >
            Customize Car
          </button>
        </div>

        {/* customize side bar */}
        <div
          className="sidebar"
          style={{
            transform: `translateX(${show ? 150 : 0}%)`,
            transformOrigin: "right",
            transition: "transform 0.4s ease",
          }}
        >
          {/* hide button */}
          <button
            style={{ backgroundColor: `${color}` }}
            onClick={() => setShow(!show)}
            className="Hide"
          >
            <span>Hide</span>
          </button>
          <div className="colorPicker">
            <span>Change Car color</span>
            <HexColorPicker
              color={color}
              onChange={(newColor) => changeColor(newColor)}
            />
            <HexColorInput
              color={color}
              onChange={(newColor) => changeColor(newColor)}
            />
            <div className="sticker">
              <span>Stickers</span>
              <div>
                <span>Driver's Seat</span>
                <hr />
                <div className="decals">
                  {decals.map((decal) => (
                    <div
                      className="decal"
                      key={decal}
                      onClick={() => changeDriverDecal(decal)}
                    >
                      <img src={decal} alt="" />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span>Passanger's Seat</span>
                <hr />
                <div className="decals">
                  {decals.map((decal) => (
                    <div
                      className="decal"
                      key={decal}
                      onClick={() => changePassangerDecal(decal)}
                    >
                      <img src={decal} alt="" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overlay
