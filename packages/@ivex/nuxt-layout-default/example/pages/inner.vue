<template>
  <div class="content">
    Inner Page content
  </div>
</template>

<script>
// import { mapMutations } from 'vuex'
// import { LAYOUT_VUEX_MODULE } from '../constants'

// const { FIELDS: { HEADER }, MUTATIONS: { SET_HEADER_MODE } } = LAYOUT_VUEX_MODULE
export default {
  name: 'InnerPageFixed',
  mounted () {
    // this[SET_HEADER_MODE](HEADER.MODE.FIXED)
  },
  // methods: {
  //   ...mapMutations(LAYOUT_VUEX_MODULE.NAME, [
  //     SET_HEADER_MODE,
  //   ]),
  // },
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
    height: 50vh;
    background: #18394e;
  }
</style>
