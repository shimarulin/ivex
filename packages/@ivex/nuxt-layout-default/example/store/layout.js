import { LAYOUT_VUEX_MODULE } from '../constants'

const { MUTATIONS: { SET_SCROLL_PARAMS, ADD_HEADER_MODIFIERS, REMOVE_HEADER_MODIFIERS, SET_HEADER_STYLES }, FIELDS } = LAYOUT_VUEX_MODULE

// const updateSet = (upgradeableSet) => {
//   const transform = (toUpgradeSet, action) => {
//     const actionList = [
//       'add',
//       'delete',
//     ]
//
//     if (actionList.indexOf(action) === -1) {
//       throw new Error(`Action expected one of [${actionList.join(', ')}] but got ${action}`)
//     }
//
//     return (itemListOrName) => {
//       if (Array.isArray(itemListOrName)) {
//         itemListOrName.forEach((modifier) => {
//           toUpgradeSet[action](modifier)
//         })
//       } else if (typeof itemListOrName === 'string') {
//         toUpgradeSet[action](itemListOrName)
//       }
//
//       return toUpgradeSet
//     }
//   }
//
//   return {
//     add (itemListOrName) {
//       return transform(upgradeableSet, 'add')(itemListOrName)
//     },
//     delete (itemListOrName) {
//       return transform(upgradeableSet, 'delete')(itemListOrName)
//     },
//   }
// }
//
// const createHeaderMutation = (action) => {
//   return (state, modifierListOrName) => {
//     state.header.classModifierList = Array.from(
//       updateSet(new Set(state.header.classModifierList))[action](modifierListOrName),
//     )
//   }
// }

const createList = (listOrName) => {
  return (Array.isArray(listOrName) && listOrName) ||
    (typeof listOrName === 'string' && [
      listOrName,
    ]) || []
}

export const state = () => ({
  directionY: '',
  process: 0,
  scrollTop: 0,
  // mode: FIELDS.MODE.FIXED,
  header: {
    // Default values
    // mode: FIELDS.HEADER.MODE.STATIC,
    // transparent: false,
    // offScreen: false,
    // scrollOffScreenParams: null,
    // classModifierList: new Set(),
    classModifierList: [],
    styles: {},
    handleScroll: null,
  },
})

export const mutations = {
  [SET_SCROLL_PARAMS] (state, { process, scrollTop }) {
    state.directionY = process > state.process ? FIELDS.DIRECTION_Y.DOWN : FIELDS.DIRECTION_Y.UP
    state.process = process
    state.scrollTop = scrollTop
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
  // [SET_HEADER_MODE] (state, mode) {
  //   if (Object.values(FIELDS.HEADER.MODE).indexOf(mode) !== -1) {
  //     state.header.mode = mode
  //   } else {
  //     console.error(`The "${mode}" isn't valid value for header state`)
  //   }
  // },
  // [SET_MODE] (state, mode) {
  //   state.mode = mode
  // },
}
