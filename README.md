[![vitepress-yandex-metrika](https://raw.githubusercontent.com/hywax/vitepress-yandex-metrika/main/public/cover.jpg)](https://github.com/hywax/vitepress-yandex-metrika)

# VitePress Yandex Metrika

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

Plugin for VitePress to track Yandex Metrika statistics.

<details>
  <summary><b>Table of Contents</b></summary>

* [Features](#-features)
* [Usage](#-usage)
    * [Setup](#-setup)
    * [Configuration](#-configuration)
* [License](#-license)
</details>

## 🎯 Features

* 📊 Support multiply counters
* ✨ Correct work with SPA
* ✅ Support for all settings
* 🌐 CDN option
* 0️⃣ Zero dependencies

## ✨ Installation

```shell
# Using pnpm
pnpm add @hywax/vitepress-yandex-metrika -D

# Using yarn
yarn add @hywax/vitepress-yandex-metrika -D

# Using npm
npm install @hywax/vitepress-yandex-metrika -D
```

## ⚡ Usage

### 🚀 Setup

1. Add `yandexMetrikaPlugin` to the `plugins` section of `config.ts`

```typescript
// .vitepress/config.ts
export default defineConfig({
  vite: {
    plugins: [
      yandexMetrikaPlugin({
        counter: {
          id: '1234567',
          // ... other settings
        },
      }),
    ],
  }
})
```

2. Add `yandexMetrikaHit` to the `enhanceApp` section of theme `index.ts`
```typescript
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { yandexMetrikaHit } from '@hywax/vitepress-yandex-metrika'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    yandexMetrikaHit(ctx)
  },
} satisfies Theme
```

### ⚙️ Configuration

You can customize the plugin `yandexMetrikaPlugin` by passing the required parameters to the settings object.

| Name                | Default value | Type    | Description                                                                                                               |
|---------------------|---------------|---------|---------------------------------------------------------------------------------------------------------------------------|
| defer               | `false`       | Boolean | Whether to disable automatically sending data during tag initialization                                                   |
| clickmap            | `true`        | Boolean | Whether to collect data for a click map                                                                                   |
| trackLinks          | `true`        | Boolean | Track clicks on outbound links                                                                                            |
| accurateTrackBounce | `true`        | Boolean | Number                                                                                                                    |Accurate bounce rate The parameter can accept these values:  true — Enable the accurate bounce rate, with a non-bounce event registered after 15000 ms (15 s). false — Don't enable the accurate bounce rate. <N> (integer) — Enable the accurate bounce rate. Non-bounce events are recorded after <N> ms.|
| webvisor            | `false`       | Boolean | Whether to use Session Replay                                                                                             |
| ecommerce           | `false`       | Boolean | String                                                                                                                    | Array|Collect data for e-commerce — Ecommerce.  true — Enable e-commerce data collection. Data is transmitted via a JavaScript array named dataLayer in the global namespace (window.dataLayer) false — Disable Ecommerce data collection. <objectName> (String) — Enable Ecommerce data collection. Data is transmitted via a JavaScript array named <objectName> in the global namespace (window.<objectName>) <array> (Array) — Enable Ecommerce data collection. Data is transmitted via a JavaScript <array>|
| trustedDomains      | `[]`          | Array   | Indicates a trusted domain for recording the contents of a child iframe. Contains the domain address of the parent window |
| childIframe         | `false`       | Boolean | Whether to record iframe contents without a tag in a child window                                                         |
| type                | `0`           | Number  | Tag type. 1 for YAN                                                                                                       |
| triggerEvent        | `false`       | Boolean | Whether to check if the tag is ready                                                                                      |

More information can be found on the [documentation page](https://yandex.com/support/metrica/code/counter-initialize.html).

## 📄 License
This template was created under the [MIT License](LICENSE).

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@hywax/vitepress-yandex-metrika/latest.svg?logo=hackthebox&color=4A4DFF&logoColor=fff
[npm-version-href]: https://npmjs.com/package/@hywax/vitepress-yandex-metrika
[npm-downloads-src]: https://img.shields.io/npm/dm/@hywax/vitepress-yandex-metrika.svg?colorA=4A4DFF
[npm-downloads-href]: https://npmjs.com/package/@hywax/vitepress-yandex-metrika
[license-src]: https://img.shields.io/badge/License-MIT-4A4DFF?logo=opensourceinitiative&logoColor=fff
[license-href]: https://npmjs.com/package/@hywax/vitepress-yandex-metrika
