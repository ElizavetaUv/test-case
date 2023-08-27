import "./index.css"
import { onComplete as _onComplete, $buttonsState } from "../../points-store"
import { OnCompleteFn } from "../../types/plugin.types"

interface ICompleteButton {
  onComplete: OnCompleteFn
}
function CompleteButton({ onComplete }: ICompleteButton) {
  return (
    <button
      className="completeButton"
      onClick={() => {
        _onComplete([$buttonsState.getState(), onComplete])
      }}
    >
      Rapporto danni
    </button>
  )
}

export default CompleteButton
