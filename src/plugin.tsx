import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { PluginOptions } from "./types/plugin.types.ts"
import "./plugin.css"

if (import.meta.env.MODE === "development") {
  const renderElement = document.getElementById("root")
  ReactDOM.createRoot(renderElement as HTMLElement).render(
    <App
      options={{
        initializedOptions: ["A1"],
        onPositionChange: (positions: string[]) => {
          console.log(`on positions change: ${positions}`)
        },
        onComplete: (positions: string[]) => {
          console.log(`on complete: ${positions}`)
        },
        onInit: () => {
          console.log("on init")
        },
      }}
    />
  )
} else if (import.meta.env.MODE === "production") {
  window.DAMAGE_SELECTOR_API = {
    init: (pluginOptions: PluginOptions) => {
      const { selector } = pluginOptions
      if (!selector) {
        return
      }

      const renderElement = document.querySelector(selector)
      if (renderElement === null) {
        return
      }

      ReactDOM.createRoot(renderElement as HTMLElement).render(
        <App options={pluginOptions.options} />
      )
    },
  }
} else {
  throw new Error(`Such mode doesn't exist: ${import.meta.env.MODE}`)
}
