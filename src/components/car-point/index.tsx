import "./index.css"
import { useStore } from "effector-react"
import { $buttonsState } from "../../points-store"

interface ChildComponentProps {
  className: string
  onClick: () => void
}

const CarPoint: React.FC<ChildComponentProps> = (props) => {
  //Checking if the button is pressed
  const isButtonPressed = !!useStore($buttonsState).find(
    (index) => index === props.className
  )

  return (
    <button
      className={`carPoint ${props.className} ${
        isButtonPressed ? "pressed" : ""
      }`}
      onClick={props.onClick}
    ></button>
  )
}

export default CarPoint
