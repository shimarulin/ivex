<template>
  <div class="content">
    Page content
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { LAYOUT_VUEX_MODULE } from '../constants'

const { FIELDS: { HEADER }, MUTATIONS: { ADD_HEADER_MODIFIERS, REMOVE_HEADER_MODIFIERS } } = LAYOUT_VUEX_MODULE
export default {
  name: 'MainPage',
  beforeMount () {
    this[ADD_HEADER_MODIFIERS](HEADER.MODIFIERS.FIXED)
  },
  methods: {
    ...mapMutations(LAYOUT_VUEX_MODULE.NAME, [
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
