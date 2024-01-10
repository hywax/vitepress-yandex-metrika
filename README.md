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

Add `yandexMetrika` to the `enhanceApp` section of theme `index.ts`

```typescript
// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { yandexMetrika } from '@hywax/vitepress-yandex-metrika'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    yandexMetrika(ctx, {
      counter: { id: 12345678 },
    })
  },
} satisfies Theme
```

### ⚙️ Configuration

You can customize the plugin `yandexMetrika` by passing the required parameters to the settings object.

| Name                                   | Default value                       | Type                        | Description                                                                                                               |
|----------------------------------------|-------------------------------------|-----------------------------|---------------------------------------------------------------------------------------------------------------------------|
| enabled                                | true                                | Boolean                     | Active Yandex.Metrica                                                                                                     |
| counter.id                             | **required**                        | Number                      | Yandex.Metrica tag ID                                                                                                     |
| counter.initParams.defer               | false                               | Boolean                     | Whether to disable automatically sending data during tag initialization                                                   |
| counter.initParams.clickmap            | true                                | Boolean                     | Whether to collect data for a click map                                                                                   |
| counter.initParams.trackLinks          | true                                | Boolean                     | Track clicks on outbound links                                                                                            |
| counter.initParams.accurateTrackBounce | true                                | Boolean \| Number           | Accurate bounce rate The parameter can accept these valuesAccurate bounce rate                                            |
| counter.initParams.webvisor            | false                               | Boolean                     | Whether to use Session Replay                                                                                             |
| counter.initParams.ecommerce           | false                               | Boolean \| String  \| Array | Collect data for e-commerce — Ecommerce.                                                                                  |
| counter.initParams.trustedDomains      | -                                   | Array                       | Indicates a trusted domain for recording the contents of a child iframe. Contains the domain address of the parent window |
| counter.initParams.childIframe         | false                               | Boolean                     | Whether to record iframe contents without a tag in a child window                                                         |
| counter.initParams.type                | 0                                   | Number                      | Tag type. 1 for YAN                                                                                                       |
| counter.initParams.triggerEvent        | false                               | Boolean                     | Whether to check if the tag is ready                                                                                      |
| cdn.tag                                | https://mc.yandex.ru/metrika/tag.js | String                      | CDN link for tag                                                                                                          |
| cdn.watch                              | https://mc.yandex.ru/watch          | String                      | CDN link for pixel image                                                                                                  |

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
