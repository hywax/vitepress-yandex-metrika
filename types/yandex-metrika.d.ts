/**
 * A minimal description of the interfaces.
 * To learn more see - https://github.com/yandex/metrica-tag
 */

export {}

interface Counter {
  hit(to: string): void
}

interface Ya {
  _metrika: {
    counters: Record<string, Counter>
  }
}

declare global {
  interface Window {
    Ya?: Ya
  }
}
