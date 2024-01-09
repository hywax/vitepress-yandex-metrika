import type { HtmlTagDescriptor, Plugin, ResolvedConfig } from 'vite'

export interface ViteYandexMetrika {
  enableDev?: boolean
}

export function yandexMetrikaPlugin(options: ViteYandexMetrika): Plugin {
  let viteConfig: ResolvedConfig

  return {
    name: 'vitepress-yandex-metrika',
    configResolved(resolvedConfig: ResolvedConfig) {
      viteConfig = resolvedConfig
    },
    transformIndexHtml() {
      const tags: HtmlTagDescriptor[] = []

      if (viteConfig.command === 'serve' && !options.enableDev) {
        return tags
      }

      // todo insert tag on page

      return tags
    },
  }
}
