import { LAYOUT_VUEX_MODULE } from '@/constants'

const { MUTATIONS: { SET_SCROLL_PARAMS, SET_MODE, SET_SCROLLABLE_CONTAINER }, FIELDS } = LAYOUT_VUEX_MODULE

export const state = () => ({
  directionY: '',
  process: 0,
  scrollTop: 0,
  // mode: FIELDS.MODE.FIXED,
  scrollableContainer: FIELDS.SCROLLABLE_CONTAINER.PAGE,
})

export const mutations = {
  [SET_SCROLL_PARAMS] (state, { process, scrollTop }) {
    state.directionY = process > state.process ? FIELDS.DIRECTION_Y.DOWN : FIELDS.DIRECTION_Y.UP
    state.process = process
    state.scrollTop = scrollTop
  },
  [SET_MODE] (state, mode) {
    state.mode = mode
  },
  [SET_SCROLLABLE_CONTAINER] (state, scrollableContainer) {
    state.scrollableContainer = scrollableContainer
  },
}
