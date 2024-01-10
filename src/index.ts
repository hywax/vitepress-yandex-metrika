import type { EnhanceAppContext } from 'vitepress'

export interface Counter {
  id: number
  initParams?: {
    defer?: boolean
    clickmap?: boolean
    trackLinks?: boolean
    accurateTrackBounce?: boolean
    webvisor?: boolean
    ecommerce?: boolean | string | Array<string | boolean>
    trustedDomains?: string[]
    childIframe?: boolean
    type?: number
    triggerEvent?: boolean
  }
}

export interface Options {
  enabled?: boolean
  counter: Counter | Counter[]
  cdn?: string
}

function injectMetrikaScript() {
  const metrikaScript = document.createElement('script')

  metrikaScript.src = 'https://mc.yandex.ru/metrika/tag.js'
  metrikaScript.async = true

  document.body.appendChild(metrikaScript)
}

function injectStackMetrikaScript() {
  window.ym = window.ym || function (...args) {
    (window.ym!.a = window.ym!.a || []).push(args)
  }

  window.ym.l = new Date().getTime()
}

function injectCounter(counter: Counter) {
  if (!window.ym) {
    return
  }

  window.ym(counter.id, 'init', counter.initParams)

  const pixel = document.createElement('img')
  pixel.src = `https://mc.yandex.ru/watch/${counter.id}`
  pixel.style.position = 'absolute'
  pixel.style.left = '-9999px'

  const wrapper = document.createElement('div')
  wrapper.appendChild(pixel)
}

export function yandexMetrika(ctx: EnhanceAppContext, options: Options) {
  if (!(options.enabled || true) || typeof window === 'undefined') {
    return
  }

  injectMetrikaScript()
  injectStackMetrikaScript()

  if (Array.isArray(options.counter)) {
    options.counter.forEach((counter) => injectCounter(counter))
  } else {
    injectCounter(options.counter)
  }

  const { router } = ctx
  const cacheAfterRouteChange = router.onAfterRouteChanged

  router.onAfterRouteChanged = (to: string) => {
    const counters = Object.values(window.Ya?._metrika.counters || {})
    counters.forEach((counter) => counter?.hit(to))

    cacheAfterRouteChange?.(to)
  }
}
