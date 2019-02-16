<template>
  <div class="content">
    Page content
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { LAYOUT_VUEX_MODULE } from '../../lib/constants'

const { MODULE_NAMESPACE, MODULE_NAME, FIELDS: { HEADER }, MUTATIONS: { ADD_HEADER_MODIFIERS, REMOVE_HEADER_MODIFIERS } } = LAYOUT_VUEX_MODULE
const MODULE = `${MODULE_NAMESPACE}/${MODULE_NAME}`

export default {
  name: 'MainPage',
  fetch ({ store }) {
    store.commit(`${MODULE}/${ADD_HEADER_MODIFIERS}`, HEADER.MODIFIERS.FIXED)
  },
  beforeDestroy () {
    this[REMOVE_HEADER_MODIFIERS](HEADER.MODIFIERS.FIXED)
  },
  methods: {
    ...mapMutations(MODULE, [
      ADD_HEADER_MODIFIERS,
      REMOVE_HEADER_MODIFIERS,
    ]),
  },
}
</script>

<style scoped>
  html,
  body {
    margin: 0;
    padding: 0;
  }

  .content {
    position: relative;
    width: 100%;
    height: 150vh;
    background: #47494e;
  }
</style>
