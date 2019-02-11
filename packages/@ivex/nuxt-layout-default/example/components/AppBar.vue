<template>
  <div class="top-bar">
    <Menu
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
        <MenuItem name="4">
          <Icon type="ios-paper"/>
          Item 4
        </MenuItem>
      </div>
    </Menu>
  </div>
</template>

<script>
export default {
  name: 'AppBar',
  computed: {
    activeItemName () {
      // console.log(this.$route.path)
      return this.$route.path
    },
  },
}
</script>

<style lang="less" scoped>
.top-bar {
  width: 100%;
  height: 100%;

  /* background: transparent; */
  color: #47494e;

  & .ivu-menu-light {
    /* background: transparent; */
  }

  .ivu-menu-horizontal.ivu-menu-light {
    margin-top: 3px;

    &::after {
      display: none;
    }
  }
}
</style>
