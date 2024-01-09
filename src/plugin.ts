import type { HtmlTagDescriptor, Plugin, ResolvedConfig } from 'vite'

export interface Counter {
  id: string
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

export interface ViteYandexMetrika {
  enableDev?: boolean
  counter: Counter | Counter[]
  cdn?: string
}

function injectScript(url: string): HtmlTagDescriptor {
  const template = `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();
  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
(window, document, "script", "${url}/metrika/tag.js", "ym");`

  return {
    tag: 'script',
    injectTo: 'body',
    children: template,
  }
}

function injectTag(counter: Counter, url: string): HtmlTagDescriptor[] {
  return [
    {
      tag: 'script',
      injectTo: 'body',
      children: `ym(${counter.id}, "init", ${JSON.stringify(counter.initParams || {})});`,
    },
    {
      tag: 'noscript',
      injectTo: 'body',
      children: `<div><img src="${url}/watch/${counter.id}" style="position:absolute; left:-9999px;" alt="" /></div>`,
    },
  ]
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
      const url = options.cdn || 'https://mc.yandex.ru'

      if (viteConfig.command === 'serve' && !options.enableDev) {
        return tags
      }

      tags.push(injectScript(url))

      if (Array.isArray(options.counter)) {
        options.counter.forEach((counter) => tags.push(...injectTag(counter, url)))
      } else {
        tags.push(...injectTag(options.counter, url))
      }

      return tags
    },
  }
}
