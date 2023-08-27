import { createStore, createEvent, createEffect } from "effector"
import DamageBackendAPI from "./api/damage-backend.api"
import { OnPositionChangeFn, OnCompleteFn } from "./types/plugin.types"

export const onPositionChange = createEvent<[string, OnPositionChangeFn]>()
export const onComplete = createEvent<[string[], OnCompleteFn]>()

export const $buttonsState = createStore<string[]>([])
export const fetchDamageInfoFx = createEffect<void, string[]>()

fetchDamageInfoFx.use(DamageBackendAPI.getDamageInfo)

// Subscribing $buttonsState store to events
$buttonsState
  .on(onPositionChange, (prevState, [index, _onPositionChange]) => {
    let newState: string[] = []

    // If this car point already is in array of damaged points removing it from array and if it's not then adding
    if (prevState.includes(index)) {
      newState = prevState.filter((prevIndex) => prevIndex != index)
    } else {
      newState = [...prevState, index]
    }

    //Sending updated array of damaged points
    DamageBackendAPI.postDamageInfo(newState).then((_newState) =>
      _onPositionChange(_newState)
    )

    return newState
  })

  .on(onComplete, (_, [state, _onComplete]) => {
    DamageBackendAPI.postDamageInfo(state).then((newStates) =>
      _onComplete(newStates)
    )
    return state
  })
  .on(fetchDamageInfoFx.doneData, (_, newState) => newState)
