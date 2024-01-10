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

interface ym {
  (...args): void

  a?: any[]
  l?: number
}

declare global {
  interface Window {
    Ya?: Ya
    ym?: ym
  }
}
