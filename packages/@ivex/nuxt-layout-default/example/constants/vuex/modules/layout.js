// Module definition
export const LAYOUT_VUEX_MODULE = {
  NAME: 'layout',

  // Fields definitions
  FIELDS: {
    DIRECTION_Y: {
      UP: 'up',
      DOWN: 'down',
    },
    HEADER: {
      MODIFIERS: {
        FIXED: 'fixed',
        TRANSPARENT: 'transparent',
      },
      // MODE: {
      //   // With display: flex
      //   STATIC: 'static',
      //   FIXED: 'fixed',
      // },
    },
    // DIRECTION_X: {
    //   LEFT: 'left',
    //   RIGHT: 'right',
    // },
    // MODE: {
    //   FLEX_BOX: 'flex-box',
    //   FIXED: 'fixed',
    //   // as fixed but like Medium, not implemented
    //   FLOATED: 'floated',
    // },
    // SCROLLABLE_CONTAINER: {
    //   PAGE: 'page',
    //   // SIDEBAR_LEFT: 'sidebar-left',
    //   // SIDEBAR_RIGHT: 'sidebar-right',
    //   // MODAL: 'modal',
    // },
  },

  // Mutations
  MUTATIONS: {
    SET_SCROLL_PARAMS: 'SET_SCROLL_PARAMS',
    ADD_HEADER_MODIFIERS: 'ADD_HEADER_MODIFIERS',
    REMOVE_HEADER_MODIFIERS: 'REMOVE_HEADER_MODIFIERS',
    // ADD_HEADER_MODIFIERS: 'ADD_HEADER_MODIFIERS',
    // SET_HEADER_MODE: 'SET_HEADER_MODE',
    // SET_MODE: 'SET_MODE',
    // SET_SCROLLABLE_CONTAINER: 'SET_SCROLLABLE_CONTAINER',
  },
}
