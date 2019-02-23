<template>
  <iInput
    :type="isVisible ? 'text' : 'password'"
    :size="size"
    :placeholder="placeholder"
    :maxlength="maxlength"
    :disabled="disabled"
    :readonly="readonly"
    :name="name"
    :autofocus="autofocus"
    :autocomplete="autocomplete"
    :element-id="elementId"
    :prefix="prefix"
    @on-enter="$emit('on-enter', $event)"
    @on-change="handleChange"
    @on-focus="$emit('on-focus', $event)"
    @on-blur="$emit('on-blur', $event)"
    @on-keyup="$emit('on-keyup', $event)"
    @on-keydown="$emit('on-keydown', $event)"
    @on-keypress="$emit('on-keypress', $event)"
    @on-search="$emit('on-search', $event)"
  >
    <span slot="suffix">
      <Icon
        v-if="isAvailableToggle"
        :type="isVisible ? iconOn : iconOff"
        :color="isVisible ? colorActive : ''"
        @click="handleClick"
      />
    </span>
  </iInput>
</template>

<script>
export default {
  name: 'Password',
  props: {
    value: {
      type: String,
      default: '',
    },
    size: {
      validator (value) {
        return [
          'small',
          'large',
          'default',
        ].includes(value)
      },
      default () {
        return !this.$IVIEW || this.$IVIEW.size === '' ? 'default' : this.$IVIEW.size
      },
    },
    placeholder: {
      type: String,
      default: '',
    },

    /* eslint-disable-next-line vue/require-default-prop */
    maxlength: {
      type: Number,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },

    /* eslint-disable-next-line vue/require-default-prop */
    name: {
      type: String,
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
    autocomplete: {
      validator (value) {
        return [
          'on',
          'off',
        ].includes(value)
      },
      default: 'off',
    },
    // clearable: {
    //   type: Boolean,
    //   default: false,
    // },

    /* eslint-disable-next-line vue/require-default-prop */
    elementId: {
      type: String,
    },
    prefix: {
      type: String,
      default: '',
    },

    /** Prop: icon-on - the showed toggle icon if a password is visible */
    iconOn: {
      type: String,
      default: 'md-eye',
    },

    /** Prop: icon-off - the showed toggle icon if a password is hidden */
    iconOff: {
      type: String,
      default: 'md-eye-off',
    },

    /** Prop: color-active - the color of the toggle icon if a password is visible */
    /* eslint-disable-next-line vue/require-default-prop */
    colorActive: {
      type: String,
    },
  },
  data: () => ({
    isVisible: false,
  }),
  computed: {
    isAvailableToggle () {
      return this.value.length > 0
    },
  },
  watch: {
    value: function (val) {
      if (val.length === 0) {
        this.isVisible = false
      }
    },
  },
  methods: {
    handleChange (event) {
      this.$emit('input', event.target.value)
      this.$emit('on-change', event)
    },
    handleClick (event) {
      this.isVisible = !this.isVisible
      this.$emit('on-click', event)
    },
  },
}
</script>

<style scoped>
.ivu-input-type .ivu-icon {
  cursor: pointer;
}
</style>
