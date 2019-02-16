<template>
  <Menu
    class="app-header"
    mode="horizontal"
    theme="dark"
    :active-name="activeItemName"
  >
    <div class="layout-nav">
      <MenuItem
        name="/"
        to="/"
      >
        <Icon type="ios-navigate"/>
        Item 1
      </MenuItem>
      <MenuItem
        name="/inner"
        to="/inner"
      >
        <Icon type="ios-keypad"/>
        Item 2
      </MenuItem>
      <MenuItem
        name="/inner-long"
        to="/inner-long"
      >
        <Icon type="ios-analytics"/>
        Item 3
      </MenuItem>
    </div>
  </Menu>
</template>

<script>
export default {
  name: 'AppHeader',
  computed: {
    activeItemName () {
      return this.$route.path
    },
  },
}
</script>

<style lang="less" scoped>
.app-header {
  /*width: 100%;*/
  /*height: 100%;*/

  /* background: transparent; */
  /*color: #47494e;*/

  & .ivu-menu-light {
    /* background: transparent; */
  }

  &.ivu-menu-horizontal {
    /*margin-top: 3px;*/

    &::after {
      display: none;
    }
  }
}
</style>
