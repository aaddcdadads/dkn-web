<template>
  <div class="mentions-div">
    <div class="mentions-title">{{ title }}</div>
    <a-mentions
      class="ant-mentions-class"
      :defaultValue="defaultValue"
      :placement="placement"
      :prefix="prefix"
      :split="split"
      v-model:value="value"
      @blur="onBlur"
      @change="onChange"
      @focus="onFocus"
      @search="onSearch"
      @select="onSelect"
    >
      <a-mentions-option
        :value="item.key"
        v-for="item in listTitleData"
        :key="item.key"
      >
        {{ item.value }}
      </a-mentions-option>
    </a-mentions>
  </div>
</template>

<script>
export default {
  name: "HmAntMentions",
  props: {
    /**
     * 标题
     */
    title: {
      type: String,
      default: "姓名",
    },

    /**
     * 提示文字
     */
    prefix: {
      type: String,
      default: "@",
    },

    /**
     * 数据内容
     * @model
     */
    listTitle: {
      type: Array,
      default: function () {
        return [
          {
            key: "Lucy",
            value: "Lucy",
          },
          {
            key: "Disabled",
            value: "Disabled",
          },
          {
            key: "yiminghe",
            value: "yiminghe",
          },
        ];
      },
    },

    /**
     * 分隔符
     */
    split: {
      type: String,
    },

    /**
     * 弹出展示位置
     * @type Enum
     * @default bottom
     * @options ["bottom","top"]
     */
    placement: {
      type: String,
    },
  },
  data() {
    return {
      listTitleData: [],
    };
  },
  watch: {
    listTitle(val) {
      this.listTitleData = val;
    },
  },
  methods: {
    onBlur: function (e) {
      this.$emit("blur", e);
    },
    onChange: function (e) {
      console.log("输入的值: ", e);
      this.$emit("change", e);
    },
    onFocus: function (e) {
      this.$emit("focus", e);
    },
    onSearch: function (e) {
      this.$emit("search", e);
    },
    onSelect: function (e) {
      this.$emit("select", e);
    },
  },
  created() {
    this.listTitleData = this.listTitle;
  },
};
</script>

<style scoped>

.mentions-div {
  position: relative;
  display: flex;
  /* justify-content: space-evenly; */
  align-items: center;
  min-width: 300px;
  width: 100%;
}
.mentions-title {
  position: relative;
  min-width: 100px;
  max-width: 150px;
  text-align: right;
  margin-right: 20px;
}
.ant-mentions-class {
  width: 100%;

  /* min-width: 200px; */
  /* max-width: 80vw; */
}
</style>