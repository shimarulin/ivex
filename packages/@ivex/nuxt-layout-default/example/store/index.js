const plugin = store => {
  store.$onRegisterModule = (modulePath) => {
    if (modulePath === '@ivex/layout') {
      store.watch(
        (state, getters) => state['@ivex'].layout.scrollTop,
        (newValue, oldValue) => {
          console.log(`Updating from ${oldValue} to ${newValue}`)
        },
      )
    }
  }

  // console.log(store)
  // console.log()
  store.subscribe((mutation, state) => {
    if (mutation.type === '@ivex/layout/SET_SCROLL_PARAMS') {
      // console.log(mutation.payload.scrollTop)
    }
  })
}

// Fake module
export const plugins = [
  plugin,
]
