export type OnPositionChangeFn = (positions: string[]) => void
export type OnCompleteFn = (positions: string[]) => void
export type OnInitFn = () => void

export type Options = {
  initializedOptions: string[]
  onPositionChange: OnPositionChangeFn
  onComplete: OnCompleteFn
  onInit: OnInitFn
}

export type PluginOptions = {
  selector: string
  options: Options
}

export interface IPlugin {
  init: (pluginOptions: PluginOptions) => void
}
