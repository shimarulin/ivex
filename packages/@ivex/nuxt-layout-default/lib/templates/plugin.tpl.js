const LAYOUT_VUEX_MODULE = <%= serialize(options.constants.LAYOUT_VUEX_MODULE) %>
const {
  MODULE_NAMESPACE,
  MODULE_NAME,
  MUTATIONS: {
    SET_SCROLL_PARAMS,
    SET_ROUTE_SCROLL_TOP,
    ADD_HEADER_MODIFIERS,
    REMOVE_HEADER_MODIFIERS,
    SET_HEADER_STYLES
  },
  FIELDS
} = LAYOUT_VUEX_MODULE

const createList = (listOrName) => {
  return (Array.isArray(listOrName) && listOrName) ||
    (typeof listOrName === 'string' && [
      listOrName,
    ]) || []
}

const state = () => ({
  routeScrollTop: {},
  directionY: '',
  process: 0,
  scrollTop: 0,
  header: {
    classModifierList: [],
    styles: {},
    handleScroll: null,
  },
})

const mutations = {
  [SET_SCROLL_PARAMS] (state, { process, scrollTop }) {
    state.directionY = process > state.process ? FIELDS.DIRECTION_Y.DOWN : FIELDS.DIRECTION_Y.UP
    state.process = process
    state.scrollTop = scrollTop
  },

  [SET_ROUTE_SCROLL_TOP] (state, { path, scrollTop }) {
    state.routeScrollTop[path] = scrollTop
  },

  [SET_HEADER_STYLES] (state, styles) {
    state.header.styles = styles
  },

  [ADD_HEADER_MODIFIERS] (state, modifierListOrName) {
    const modifierList = createList(modifierListOrName)
    state.header.classModifierList = Array.from(new Set([
      ...state.header.classModifierList,
      ...modifierList,
    ]))
  },

  [REMOVE_HEADER_MODIFIERS] (state, modifierListOrName) {
    const modifierList = createList(modifierListOrName)
    state.header.classModifierList = state.header.classModifierList.filter((modifier) => {
      return !(modifierList.indexOf(modifier) !== -1)
    })
  },
}

export default ({ store }, inject) => {
  // Set namespace
  if (store && !store.state.ivex) {
    store.registerModule(MODULE_NAMESPACE, {
      namespaced: true,
    })
  }

  store.registerModule([
    MODULE_NAMESPACE,
    MODULE_NAME,
  ], {
    namespaced: true,
    state,
    mutations
  })

  if (store.$onRegisterModule && typeof store.$onRegisterModule === 'function') {
    store.$onRegisterModule(`${MODULE_NAMESPACE}/${MODULE_NAME}`)
  }
}
