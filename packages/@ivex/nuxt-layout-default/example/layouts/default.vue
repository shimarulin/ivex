<template>
  <Layout class="layout-default">
    <Header
      :class="headerClassNames"
    >
      <AppBar/>
    </Header>
    <Layout class="layout-default__main-container">
      <Content class="layout-default__content">
        <ScrollArea
          @handle-scroll="SET_SCROLL_PARAMS"
        >
          <Layout
            class="layout-default__page-wrapper"
          >
            <div
              :ref="refNames.page"
              class="layout-default__content-wrapper"
              tabindex="-1"
            >
              <Nuxt/>
            </div>
            <Footer class="layout-default__footer">
              2011-2016 &copy; TalkingData
            </Footer>
          </Layout>
        </ScrollArea>
      </Content>
    </Layout>
  </Layout>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { LAYOUT_VUEX_MODULE } from '@/constants'

const { FIELDS: { SCROLLABLE_CONTAINER }, MUTATIONS: { SET_SCROLL_PARAMS } } = LAYOUT_VUEX_MODULE
const classNamePrefix = 'layout-default'

// const getScrollIntervalValue = (scrollTop) => {
//   const startPoint = 150
//   const endPoint = 450
//   if (scrollTop <= startPoint) {
//     return 0
//   } else if (scrollTop >= endPoint) {
//     return 1
//   } else {
//     return (scrollTop - startPoint) / (endPoint - startPoint)
//   }
// }

export default {
  name: 'LayoutDefault',
  computed: {
    ...mapState(LAYOUT_VUEX_MODULE.NAME, [
      // 'directionY',
      // 'process',
      // 'scrollTop',
      // 'mode',
      'scrollableContainer',
      'header',
    ]),
    headerClassNames () {
      const classNameElement = `${classNamePrefix}__header`
      const classNameModifierList = this.header.modifierList
        .map((modifier) => `${classNameElement}_${modifier}`)

      return [
        classNameElement,
        ...classNameModifierList,
      ]
    },
    // headerStyles () {
    //   const styles = {
    //     boxShadow: 'none',
    //     backgroundColor: 'transparent',
    //   }
    //   const getBoxShadow = (val) => `0 3px 12px rgba(0, 0, 0, ${0.1 * val})`
    //   const getBackgroundColor = (val) => `rgba(255, 255, 255, ${1 * val})`
    //
    //   if (this.mode === MODE.FIXED) {
    //     const scrollIntervalValue = getScrollIntervalValue(this.scrollTop)
    //     styles.boxShadow = getBoxShadow(scrollIntervalValue)
    //     styles.backgroundColor = getBackgroundColor(scrollIntervalValue)
    //   } else {
    //     styles.boxShadow = getBoxShadow(1)
    //     styles.backgroundColor = getBackgroundColor(1)
    //   }
    //   return styles
    // },
    // pageWrapperClassNames () {
    //   const prefix = 'layout-default__page-wrapper'
    //   return {
    //     [`${prefix}_full-height`]: this.mode === MODE.FIXED,
    //   }
    // },
    refNames () {
      return {
        page: SCROLLABLE_CONTAINER.PAGE,
      }
    },
  },
  mounted: function () {
    window.addEventListener('keydown', this.handleKeydown)
    this.$nextTick(() => {
      this.$refs[this.scrollableContainer].focus()
    })
  },
  beforeDestroy: function () {
    window.removeEventListener('keydown', this.handleKeydown)
  },
  methods: {
    ...mapMutations(LAYOUT_VUEX_MODULE.NAME, [
      SET_SCROLL_PARAMS,
    ]),
    handleKeydown (ev) {
      const pageScrollKeys = [
        'ArrowUp',
        'ArrowDown',
        'PageUp',
        'PageDown',
        'Home',
        'End',
      ]

      /**
         * Autofocus to the scrollable content
         * */
      if (
        pageScrollKeys.includes(ev.key) &&
          this.$refs[this.scrollableContainer] !== document.activeElement
      ) {
        this.$refs[this.scrollableContainer].focus()
      }
    },
  },
}
</script>

<style scoped lang="less">
  @import "../assets/styles/variables";

  @class-name-prefix: layout-default;

  .@{class-name-prefix} {
    height: 100vh;

    &__main-container {
      flex-grow: 1;
      overflow: auto;
    }

    &__content {
      height: 100%;
      overflow: auto;
    }

    &__page-wrapper {
      flex-grow: 1;
      min-height: 100%;
    }

    &__content-wrapper {
      flex-grow: 1;

      &:focus {
        outline: none;
      }
    }
  }
</style>

<style>
  .layout-default .__vuescroll .__view {
    display: flex;
  }
</style>
