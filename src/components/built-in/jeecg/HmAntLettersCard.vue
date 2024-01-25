<template>
  <div class="page-letters">
    <div style="width: 100%">
      <a-input-search
        style="width: 100%"
        v-model:value="cValue"
        placeholder="input search text"
        @search="onSearch"
      />
    </div>
    <div style="margin: 40px 0">
      <a-button class="ant-button" type="primary">{{title}}</a-button>
    </div>

    <div>
      <div class="list" v-for="(item, index) in list" :key="index">
        <div>
          {{ item.value }}
        </div>
        <div class="num" :style="`background:${item.numcolor}`">
          {{ item.num }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HmAntLettersCard",
  props: {
    /**
     * 值
     * @model
     */
     value: {
      type: String,
      default: "",
    },
    /**
     * 按钮文字
     */
    title:{
      type: String,
      default:'写信'
    },
    /**
     * 值
     */
    clist: {
      type: Array,
      default: function () {
        return [
          {
            value: "收件箱",
            num: 10,
            numcolor: "rgb(245,178,115)",
          },
          {
            value: "发件箱",
            num: 1,
            numcolor: "rgb(245,178,115)",
          },
          {
            value: "草稿箱",
            num: 2,
            numcolor: "rgb(232,88,96)",
          },
          {
            value: "垃圾箱",
            num: 0,
            numcolor: "rgb(232,88,96)",
          },
        ];
      },
    },
  },
  data() {
    return {
      cValue: "",
      list: [
        {
          value: "收件箱",
          num: 10,
          numcolor: "rgb(245,178,115)",
        },
        {
          value: "发件箱",
          num: 1,
          numcolor: "rgb(245,178,115)",
        },
        {
          value: "草稿箱",
          num: 2,
          numcolor: "rgb(232,88,96)",
        },
        {
          value: "垃圾箱",
          num: 0,
          numcolor: "rgb(232,88,96)",
        },
      ],
    };
  },
  watch: {
    value(value) {
      this.cValue = value;
    },
    clist(value) {
      this.list = value;
    },
  },
  mounted() {
    this.cValue = this.value;
    this.list = this.clist;
  },
  methods: {
    onSearch: function (e) {
      // console.log("onSearch",this.cValue);
      this.$emit("update:value", this.cValue);
      this.$emit("search", e);
    },
  },
};
</script>
<style scoped>
.page-letters {
  min-width: 300px;
  width: 100%;
  padding: 20px;
  text-align: center;
  box-sizing: border-box;
}
.ant-button {
  width: 100%;
}
.list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 5px;
  box-sizing: border-box;
  margin-top: 5px;
  border-bottom: 1px solid #e5e5e5;
  font-size: 16px;
}
.num {
  padding: 5px;
  box-sizing: border-box;
}
</style>