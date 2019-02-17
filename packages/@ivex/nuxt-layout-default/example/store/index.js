import Vue from 'vue'
const vuexEventBusPlugin = store => {
  store.$bus = new Vue()
}

const vuexOffScreenPlugin = store => {
  store.$bus.$on('registerModule', modulePath => {
    if (modulePath === '@ivex/layout') {
      let fixedValue = 0

      store.commit('@ivex/layout/ADD_HEADER_MODIFIERS', 'fixed')
      store.watch(
        (state) => state['@ivex'].layout.scrollTop,
        (newValue, oldValue) => {
          const isOffScreen = store.state['@ivex'].layout.header.classModifierList.indexOf('off-screen') !== -1
          if (newValue > oldValue) {
            const diff = newValue - fixedValue > 100
            if (!isOffScreen && diff) {
              store.commit('@ivex/layout/ADD_HEADER_MODIFIERS', 'off-screen')
            }
            if (isOffScreen) {
              fixedValue = newValue
            }
          } else {
            isOffScreen && store.commit('@ivex/layout/REMOVE_HEADER_MODIFIERS', 'off-screen')
            fixedValue = newValue
          }
        },
      )
    }
  })
}

export const plugins = [
  vuexEventBusPlugin,
  vuexOffScreenPlugin,
]
