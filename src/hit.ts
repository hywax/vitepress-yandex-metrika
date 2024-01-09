import type { EnhanceAppContext } from 'vitepress'

export function yandexMetrikaHit(ctx: EnhanceAppContext) {
  if (typeof window === 'undefined') {
    return
  }

  if (typeof window?.Ya === 'undefined') {
    return
  }

  const counters = Object.values(window.Ya._metrika.counters) || []
  const { router } = ctx
  const cacheAfterRouteChange = router.onAfterRouteChanged

  router.onAfterRouteChanged = (to: string) => {
    counters.forEach((counter) => counter?.hit(to))

    cacheAfterRouteChange?.(to)
  }
}
