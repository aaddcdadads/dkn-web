<template>
  <div class="switch-div">
    <div class="switch-title" v-if="title"  :style="{width: labelWidth + 'px'}">{{ title }}:</div>
    <div class="switch-class">
      <a-switch
        :checked="checkedValue"
        :checkedChildren="checkedChildren"
        :size="size"
        :unCheckedChildren="unCheckedChildren"
        :disabled="disabled"
        @change="onChange"
        @click="onClick"
      >
      </a-switch>
    </div>
  </div>
</template>

<script>
export default {
  name: "HmAntSwitch",
  props: {
    /**
     * 标题
     */
    title: {
      type: String,
      default: "开关",
    },
    /**
     * 选中
     */
    checked: {
      type: Boolean,
    },
    /**
     * 选中文字
     */
    checkedChildren: {
      type: String,
    },
    /**
     * 未选中文字
     */
    unCheckedChildren: {
      type: String,
    },
    /**
     * 是否禁用
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * 大小
     * @type Enum
     * @default default
     * @options ["default","small"]
     */
    size: {
      type: String,
    },
    /**
     * 标题宽度
     */
    labelWidth:{
      type:Number
    }
  },
  data() {
    return {
      checkedValue: this.checked,
    };
  },
  watch: {
    checked(value) {
      this.checkedValue = value;
    },
  },
  methods: {
    onChange: function (e) {
      this.$emit("change", e);
      this.checkedValue = !this.checkedValue;
    },
    onClick: function (e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style scoped>
.switch-div {
  position: relative;
  display: flex;
  /* justify-content: space-evenly; */
  align-items: center;
  min-width: 10px;
  width: 100%;
}
.switch-title {
  position: relative;
  min-width: 0px;
  max-width: 500px;
  text-align: left;
  margin-right: 10px;
}
.switch-class {
  position: relative;
  /* width: 100%;
  min-width: 50px;
  max-width: 100px; */
}
</style>