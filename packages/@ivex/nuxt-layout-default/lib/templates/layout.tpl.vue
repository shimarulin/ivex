<template>
  <Layout class="layout-<%= options.name %>">
    <Header
      :class="headerClassNames"
      :style="header.styles"
    >
      <<%= options.components.AppHeader %>/>
    </Header>
    <Layout class="layout-<%= options.name %>__main-container">
      <Content class="layout-<%= options.name %>__content">
        <ScrollArea
          @handle-scroll="SET_SCROLL_PARAMS"
        >
          <Layout
            class="layout-<%= options.name %>__page-wrapper"
          >
            <div
              :ref="_page"
              class="layout-<%= options.name %>__content-wrapper"
              tabindex="-1"
            >
              <Nuxt/>
            </div>
            <Footer class="layout-<%= options.name %>__footer">
              <<%= options.components.AppFooter %>/>
            </Footer>
          </Layout>
        </ScrollArea>
      </Content>
    </Layout>
  </Layout>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

const LAYOUT_VUEX_MODULE = <%= serialize(options.constants.LAYOUT_VUEX_MODULE) %>
const {
  MODULE_NAMESPACE,
  MODULE_NAME,
  MUTATIONS: { SET_SCROLL_PARAMS, SET_ROUTE_SCROLL_TOP },
} = LAYOUT_VUEX_MODULE
const CLASS_NAME_PREFIX = 'layout-<%= options.name %>'
const PAGE = 'page'
const MODULE = `${MODULE_NAMESPACE}/${MODULE_NAME}`

let removeBeforeEach
let removeAfterEach

export default {
  name: 'Layout<%= _.capitalize(options.name) %>',
  computed: {
    ...mapState(`${MODULE}`, [
      'header',
      'routeScrollTop'
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
    _page () { return PAGE },
  },
  mounted: function () {
    // console.log(this.$nuxt)
    window.addEventListener('keydown', this.handleKeydown)
    window.addEventListener('popstate', this.handlePopstate)

    removeBeforeEach = this.$router.beforeEach((to, from, next) => {
      const element = this.getScrollElement()
      if (element !== null) {
        this[SET_ROUTE_SCROLL_TOP]({
          path: from.path,
          scrollTop: element.scrollTop
        })
      }

      next()
    })

    removeAfterEach = this.$router.afterEach(() => {
      const element = this.getScrollElement()
      if (element !== null) {
        element.scrollTop = 0
      }
    })

    this.$nextTick(() => {
      this.$refs[PAGE].focus()
    })
  },
  beforeDestroy: function () {
    window.removeEventListener('keydown', this.handleKeydown)
    window.removeEventListener('popstate', this.handlePopstate)

    typeof removeBeforeEach === 'function' && removeBeforeEach()
    typeof removeAfterEach === 'function' && removeAfterEach()
  },
  methods: {
    ...mapMutations(`${MODULE}`, [
      SET_SCROLL_PARAMS,
      SET_ROUTE_SCROLL_TOP,
    ]),
    getScrollElement () {
      return document.querySelector(`.${CLASS_NAME_PREFIX}__content > .__vuescroll > .__panel`)
    },
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
    handlePopstate () {
      const element = this.getScrollElement()
      if (element !== null) {
        element.scrollTop = this.routeScrollTop[this.$route.path]
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

  @zindex-scrollbar : 999;

  .layout-<%= options.name %> .__vuescroll {
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

  .layout-<%= options.name %> {
    height: 100vh;

    &__header {
      transition: transform 0.3s ease-in-out;

      &_fixed {
        position: fixed;
        top: 0;
        left: 0;
        z-index: @zindex-header;
        width: 100%;
      }

      &_off-screen {
        transform: translateY(-100%);
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
