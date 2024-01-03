import { create } from "zustand"

const useGame = create((set) => ({
  color: "#DE3163",
  changeColor: (color) => set(() => ({ color: color })),

  driverDecal: "/barbie.png",
  changeDriverDecal: (decal) => set(() => ({ driverDecal: decal })),

  passangerDecal: "/barbie.png",
  changePassangerDecal: (decal) => set(() => ({ passangerDecal: decal })),
}))

export default useGame
