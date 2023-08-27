import { useEvent } from "effector-react"
import { useEffect } from "react"
import "./App.css"
import CarPoint from "./components/car-point"
import CompleteButton from "./components/complete-button"
import { onPositionChange, fetchDamageInfoFx } from "./points-store.ts"
import { Options } from "./types/plugin.types.ts"

const Indices = [
  "A1",
  "A2",
  "A3",
  "A4",
  "B1",
  "B2",
  "B3",
  "B4",
  "B5",
  "C1",
  "C2",
  "C3",
  "C4",
]

interface IApp {
  options: Options
}

function App({ options }: IApp) {
  const fetchEvent = useEvent(fetchDamageInfoFx)

  // Fetching initial options on initialization
  useEffect(() => {
    fetchEvent()
    options.onInit()
  }, [])

  // Generating car points
  const carPoints = Indices.map((index) => {
    return (
      <CarPoint
        key={index}
        className={index}
        onClick={() => {
          onPositionChange([index, options.onPositionChange])
        }}
      />
    )
  })

  return (
    <>
      <img src="/car.png" alt="car" className="car" />
      {carPoints}
      <br />
      <CompleteButton onComplete={options.onComplete} />
    </>
  )
}

export default App
