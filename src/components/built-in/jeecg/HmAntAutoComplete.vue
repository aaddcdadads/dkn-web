<template>
  <div class="complete-div">
    <div class="complete-title" v-if="title" :style="{width: labelWidth + 'px'}">{{ title }}:</div>
    <a-auto-complete
      class="complete-body"
      v-model:value="cvalue"
      :autofocus = "autofocus"
      :allowClear="allowClear"
      :placeholder="placeholder"
      :defaultOpen="defaultOpen"
      :open="cOpen"
      :options = "cOptions"
      :disabled="disabled"
      @select="onSelect"
      @search="onSearch"
      @change="onChange"
      @blur="blur"
      @focus="onFocus"
    >
      <a-input-search v-if="showIcon" size="large" enterButton></a-input-search>
    </a-auto-complete>
  </div>
</template>

<script>
import {
  getAction,
  postAction,
  deleteAction,
  putAction,
} from "/@/request/http";

export default {
  name: "HmAntAutoComplete",

  props: {
    /**
     * 值
     * @model
     */
    value: {
      type: String
    },
    /**
     * GET URL
     */
    url: {
      type: String,
      default: "",
    },
    /**
     * GET Params
     */
    params: {
      type: Object,
      default: function () {
        return {};
      },
    },
    /**
     * 远程数据映射
     */
    dataMap: {
      type: Object,
      default: function () {
        return {
          value: "value",
        };
      },
    },
    
    /**
     * 配置数据
     */
    options: {
      type: Array,
      default: function () {
        return [
            {
                value: "id",
            },
            {
                value: "name",
            }
        ];
      },
    },
    /**
     *自动获得焦点
     */
    autofocus: {
      type: Boolean,
      default: false
    },
    /**
     *默认展开
     */
    defaultOpen: {
      type: Boolean,
      default: false
    },
    /**
     *打开选择项
     */
    open: {
      type: Boolean,
      default: false
    },
    /**
     *显示搜索按钮
     */
    showIcon: {
      type: Boolean,
      default: true
    },
    /**
     * 标题
     */
    title: {
      type: String,
      default: "选择"
    },
    /**
     * 提示文字
     */
    placeholder: {
      type: String,
      default: "请输入"
    },
    /**
     * 是否禁用
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * 输入框宽度
     */
    width: {
      type: String,
      default: "200"
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
      cOpen: false,
      cOptions: [],
      allowClear: true,
      cWidth: "200px"
    };
  },
  watch: {
    
    value(value) {
      console.log("value", val);
      this.cvalue = value;
    },
    open(val) {
      this.cOpen = val;
      console.log("value", val);
    },
    width(value) {
      this.cWidth = this.getCssUnit(value);
    },
    url(value) {
      this.getData(value);
    },
    params: {
      handler: function (value, oldValue) {
        if (JSON.stringify(value) == JSON.stringify(oldValue)) {
          return;
        }
        this.getData(null, value);
      },
      deep: true,
    },
    options: {
      handler: function (value, oldValue) {
        this.cOptions = this.mapData(value);
      },
      deep: true,
    }
  },
  mounted() {
    this.cvalue = this.value;
    this.cWidth = this.getCssUnit(this.width);
    this.cOpen = this.open;
    this.cOptions = this.options;
    this.getData();
  },
  methods: {
    onChange: function(e) {
        this.cOpen = false;
      this.$emit("update:value", this.cvalue);
      this.$emit("change", e);
    },
    blur: function(e) {
      this.cOpen = false;
      this.$emit("blur", e);
    },
    onFocus: function(e) {
        this.cOpen = true;
      this.$emit("focus", e);
    },
    onSearch: function(searchText) {
      console.log("执行方法", searchText);
      
      this.$emit("search", searchText);
    },
    onSelect: function(e) {
      this.$emit("select", e);
    },
    dropdownVisibleChange: function(e) {
      console.log("触发事件e", e);
      //this.copen = e;
      this.$emit("dropdownVisibleChange", e);
    },
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    },
    //将查询接口的数据渲染到list中
    getData(url, params) {
      let self = this;
      url = url || this.url;
      params =
        params || (this.params ? JSON.parse(JSON.stringify(this.params)) : {});
      if (!url) return;
      console.log("getData", url,params);
      getAction(url, params).then((resp) => {
        console.log("res", resp);
        //查询数据库的数组
        self.cOptions = [];
        let data = [];
        if (resp.data) {
          data = resp.data.list;
        }
        if (resp.result) {
            data =  resp.result.records || resp.result;
        }

        self.cOptions = self.mapData(data);
      })
      //console.log("请求使用的url和参数", url, params);
    },
    //处理数据
    mapData(data) {
      let self = this;
      if (!this.dataMap || Object.keys(this.dataMap).length == 0) {
        return data;
      }
      let keys = Object.keys(this.dataMap);
      data.forEach((item) => {
        keys.forEach((key) => {
          item[key] = item[self.dataMap[key]];
        });
      });
      console.log("data",data);
      return data;
    },
  }
};
</script>

<style scoped>
.complete-div {
  position: relative;
  display: flex;
  /* justify-content: space-evenly; */
  align-items: center;
  min-width: 100px;
  width: 100%;
}
.complete-title {
  position: relative;
  min-width: 0px;
  max-width: 500px;
  text-align: left;
  margin-right: 10px;
}
.complete-body {
  /* width: 100%; */
  width: v-bind(cWidth);
  max-width: 80vw;
}


.complete-body /deep/ .ant-select-selection-placeholder {
  margin: 5px 0px;
}
</style>