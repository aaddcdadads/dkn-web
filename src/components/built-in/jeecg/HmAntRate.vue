<template>
  <div class="rate-div">
    <div class="rate-title" v-if="title" :style="{width: labelWidth + 'px'}">{{ title }}:</div>
    <a-rate
      class="rate-body"
      :allowClear="allowClear"
      :allowHalf="allowHalf"
      :count="count"
      :tooltips="tooltips"
      :disabled="disabled"
      v-model:value="cvalue"
      @blur="onBlur"
      @change="onChange"
      @focus="onFocus"
      @hoverChange="onHoverChange"
      @keydown="onKeydown"
    >
    </a-rate>
  </div>
</template>

<script>
export default {
  name: "HmAntRate",
  props: {
    /**
     * 标题
     */
    title: {
      type: String,
      default: "评分",
    },
    /**
     * 值
     * @model
     */
    value: {
      type: String,
    },
    /**
     * star 总数
     */
    count: {
      type: Number,
      default: 5,
    },
    /**
     * 提示信息
     */
    tooltips: {
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
     * 允许半选
     */
    allowHalf: {
      type: Boolean,
      default: true,
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
      cvalue: "",
      allowClear: true,
    };
  },
  watch: {
    value(value) {
      this.cvalue = value;
    },
  },
  mounted() {
    this.cvalue = this.value;
  },
  methods: {
    onBlur: function (e) {
      this.$emit("blur", e);
    },
    onChange: function (e) {
       this.$emit("update:value", this.cvalue);
      this.$emit("onChange", e);
      console.log("e", e);
    },
    onFocus: function (e) {
      this.$emit("focus", e);
    },
    onHoverChange: function (e) {
      this.$emit("hoverChange", e);
    },
    onKeydown: function (e) {
      this.$emit("keydown", e);
    },
  },
};
</script>

<style scoped>
.rate-div {
  position: relative;
  display: flex;
  /* justify-content: space-evenly; */
  align-items: center;
  min-width: 100px;
  width: 100%;
}
.rate-title {
  position: relative;
  min-width: 0px;
  max-width: 500px;
  text-align: left;
  margin-right: 10px;
}

</style>