# @ivex/nuxt-scroll-area

[![npm version][npm-version-src]][npm-version-href]

> Scroll Area Nuxt module for iVex

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

- Add `@ivex/nuxt-scroll-area` dependency using yarn or npm to your project
- Add `@ivex/nuxt-scroll-area` to `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    '@ivex/nuxt-scroll-area',

    // With options
    [
      '@ivex/nuxt-scroll-area',
      {
        /* module options */
      },
    ],
  ]
}
```

## Usage

```vue
<template>
  <div>
    <div class="container">
      <ScrollArea>
        <div class="long-content">
          Works!
          <div v-for="n in 100" :key="n">
            {{ n }}
          </div>
        </div>
      </ScrollArea>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

.container {
  width: 100%;
  height: 100vh;
  overflow: auto;
}
</style>
```

## Development

- Clone this repository
- Install dependencies using `yarn install` or `npm install`
- Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Vyacheslav Shimarulin

<!-- Badges -->

[david-dm-src]: https://david-dm.org/shimarulin/ivex/status.svg?style=flat-square
[david-dm-href]: https://david-dm.org/shimarulin/ivex
[standard-js-src]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
[standard-js-href]: https://standardjs.com
[circle-ci-src]: https://img.shields.io/circleci/project/github/shimarulin/ivex.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/shimarulin/ivex
[codecov-src]: https://img.shields.io/codecov/c/github/shimarulin/ivex.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/shimarulin/ivex
[npm-version-src]: https://img.shields.io/npm/dt/@ivex/nuxt-scroll-area.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/@ivex/nuxt-scroll-area
[npm-downloads-src]: https://img.shields.io/npm/v/@ivex/nuxt-scroll-area/latest.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@ivex/nuxt-scroll-area
