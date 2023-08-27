import { IPlugin } from "./plugin.types"

// Declaring global namespace because we need to redefining window interface in order to show typescript that we have to use custom attribute in window
declare global {
  interface Window {
    // Defining custom attribute that allows interact with plugin
    DAMAGE_SELECTOR_API: IPlugin
  }
}
