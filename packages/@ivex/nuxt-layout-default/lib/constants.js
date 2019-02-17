// Module definition
export const LAYOUT_VUEX_MODULE = {
  MODULE_NAMESPACE: '@ivex',
  MODULE_NAME: 'layout',

  // Field definitions
  FIELDS: {
    DIRECTION_Y: {
      UP: 'up',
      DOWN: 'down',
    },
    HEADER: {
      MODIFIERS: {
        FIXED: 'fixed',
        OFF_SCREEN: 'off-screen',
      },
    },
  },

  // Mutation definitions
  MUTATIONS: {
    SET_SCROLL_PARAMS: 'SET_SCROLL_PARAMS',
    SET_HEADER_STYLES: 'SET_HEADER_STYLES',
    ADD_HEADER_MODIFIERS: 'ADD_HEADER_MODIFIERS',
    REMOVE_HEADER_MODIFIERS: 'REMOVE_HEADER_MODIFIERS',
  },
}
