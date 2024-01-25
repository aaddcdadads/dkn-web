<template>
  <div class="checkbox-div" v-if="visible">
    <div class="checkbox-title" v-if="title" :style="{ width: labelWidth + 'px' }">{{ title }}:</div>
    <a-checkbox
      v-for="(item, index) in checkboxList"
      :key="index"
      :disabled="disabled || item.disabled"
      class="ant-checkbox"
      v-model:checked="item.checked"
      @change="onChange(item, index)"
    >{{ item.value }}</a-checkbox>
  </div>
</template>

<script>
export default {
  name: "HmAntCheckbox",
  data() {
    return {
      checkboxList: [],
    };
  },
  props: {
    /**
     * 标题
     */
    title: {
      type: String,
      default: "checkbox",
    },
    /**
     * 数据内容
     * @model
     */
    ccheckboxList: {
      type: Array,
      default: function() {
        return [
          {
            key: "1",
            checked: false,
            value: "checkbox",
          },
          {
            key: "2",
            checked: true,
            value: "checkbox",
          },
          {
            key: "3",
            checked: false,
            value: "checkbox",
            disabled: false,
          },
        ];
      },
    },
    /**
     * 是否禁用
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * 标题宽度
     */
    labelWidth: {
      type: Number,
    },
    /**
     * 是否显示
     */
    visible: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    ccheckboxList: {
      handler: function(value) {
        this.checkboxList = value;
      },
      deep: true,
    },
  },
  mounted() {
    this.checkboxList = this.ccheckboxList;
    this.cValue = this.value;
  },
  methods: {
    onChange: function(item, index) {
      this.$emit("onChange", item, index);
    },
  },
};
</script>

<style scoped>
.checkbox-div {
  position: relative;
  display: flex;
  /* justify-content: space-evenly; */
  align-items: center;
  min-width: 100px;
  width: 100%;
}
.checkbox-title {
  position: relative;
  min-width: 0px;
  max-width: 500px;
  text-align: left;
  margin-right: 10px;
}
</style>