<template>
  <Layout class="layout-default">
    <Header
      :class="headerClassNames"
      :style="header.styles"
    >
      <AppHeader/>
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
              :ref="_page"
              class="layout-default__content-wrapper"
              tabindex="-1"
            >
              <Nuxt/>
            </div>
            <Footer class="layout-default__footer">
              <AppFooter/>
            </Footer>
          </Layout>
        </ScrollArea>
      </Content>
    </Layout>
  </Layout>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

const LAYOUT_VUEX_MODULE = {
  'MODULE_NAMESPACE': '@ivex',
  'MODULE_NAME': 'layout',
  'FIELDS': {
    'DIRECTION_Y': {
      'UP': 'up', 'DOWN': 'down',
    },
    'HEADER': {
      'MODIFIERS': {
        'FIXED': 'fixed',
      },
      'SCROLL': {
        'DIRECTIONAL': {
          'UP': {}, 'BOTTOM': {},
        },
        'POSITIONAL': [],
      },
    },
  },
  'MUTATIONS': {
    'SET_SCROLL_PARAMS': 'SET_SCROLL_PARAMS', 'SET_HEADER_STYLES': 'SET_HEADER_STYLES', 'ADD_HEADER_MODIFIERS': 'ADD_HEADER_MODIFIERS', 'REMOVE_HEADER_MODIFIERS': 'REMOVE_HEADER_MODIFIERS',
  },
}
const {
  MODULE_NAMESPACE,
  MODULE_NAME,
  MUTATIONS: { SET_SCROLL_PARAMS },
} = LAYOUT_VUEX_MODULE
const CLASS_NAME_PREFIX = 'layout-default'
const PAGE = 'page'
const MODULE = `${MODULE_NAMESPACE}/${MODULE_NAME}`

export default {
  name: 'LayoutDefault',
  computed: {
    ...mapState(`${MODULE}`, [
      'directionY',
      'process',
      'scrollTop',
      'header',
    ]),
    headerClassNames () {
      const classNameElement = `${CLASS_NAME_PREFIX}__header`
      const classNameModifierList = this.header.classModifierList
        .map((modifier) => `${classNameElement}_${modifier}`)

      return [
        classNameElement,
        ...classNameModifierList,
      ]
    },
    headerStyles () {
      const classNameElement = `${CLASS_NAME_PREFIX}__header`
      const classNameModifierList = this.header.classModifierList
        .map((modifier) => `${classNameElement}_${modifier}`)

      return [
        classNameElement,
        ...classNameModifierList,
      ]
    },
    _page () { return PAGE },
  },
  mounted: function () {
    window.addEventListener('keydown', this.handleKeydown)
    this.$nextTick(() => {
      this.$refs[PAGE].focus()
    })
  },
  beforeDestroy: function () {
    window.removeEventListener('keydown', this.handleKeydown)
  },
  methods: {
    ...mapMutations(`${MODULE}`, [
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
        this.$refs[PAGE] !== document.activeElement
      ) {
        this.$refs[PAGE].focus()
      }
    },
  },
}
</script>

<style lang="less">
  /* @import "../assets/styles/variables"; */

  // z-index
  //@zindex-header : @zindex-modal - 10;
  //@zindex-scrollbar : @zindex-modal - 1;
  @zindex-header : 990;

  @zindex-scrollbar : 998;

  .layout-default .__vuescroll {
    .__view {
      display: flex;
    }

    .__rail-is-vertical {
      z-index: @zindex-scrollbar;
    }

    .__rail-is-horizontal {
      z-index: @zindex-scrollbar;
    }
  }

  .layout-default {
    height: 100vh;

    &__header {
      &_fixed {
        position: fixed;
        top: 0;
        left: 0;
        z-index: @zindex-header;
        width: 100%;
      }
    }

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
