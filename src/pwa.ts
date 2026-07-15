import { registerSW } from 'virtual:pwa-register'

export function setupPwa() {
  if ('serviceWorker' in navigator) {
    registerSW({ immediate: true })
  }
}
