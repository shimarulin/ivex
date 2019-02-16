// Fake module
export const state = () => ({
  prop1: '',
})

export const mutations = {
  SET_PROP1 (state, prop1) {
    state.prop1 = prop1
  },
}
