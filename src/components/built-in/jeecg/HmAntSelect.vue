<template>
  <div class="select-class">
    <div
      class="select-title"
      v-if="title != ''"
      :style="{ width: labelWidth + 'px' }"
    >
      {{ title }}:
    </div>
    <a-select
      v-model:value="cValue"
      class="ant-select"
      :showArrow="showArrow"
      :placeholder="placeholder"
      :size="size"
      :mode="mode"
      :show-search="showSearch"
      :filter-option="false"
      :disabled="disabled"
      :allowClear="allowClear"
      :options="cOptions"
      @focus="focus"
      ref="select"
      @blur="onBlur"
      @change="handleChange"
      @inputKeydown="onInputKeydown"
      @search="searchByInput"
    >
      <!-- <a-select-option
        v-for="item in cOptions"
        :key="item.value"
        :value="item.value"
        >{{ item.label }}</a-select-option
      > -->
      <!-- <template v-if="fetching" #notFoundContent>
        <a-spin size="small" />
      </template> -->
    </a-select>
  </div>
</template>

<script>
import {
  getAction,
  postAction,
  deleteAction,
  putAction,
} from "/@/request/http";
import { debounce, cloneDeep } from 'lodash'

export default {
  name: "HmAntSelect",
  props: {
    /**
     * 值
     * @model
     */
    value: {
      type: String,
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
     * 搜索过滤字段
     */
    filterKey: {
      type: String,
    },
    /**
     * 远程数据映射
     */
    dataMap: {
      type: Object,
      default: function () {
        return {
          label: "label",
          value: "value",
        };
      },
    },
    /**
     * 分页参数映射
     */
    paginationMap: {
      type: Object,
      default: function () {
        return {
          pageNo: 'pageNo',
          pageSize: 'pageSize'
        }
      }
    },
    /**
     * 类型
     * @type Enum
     * @default default
     * @options ["default","multiple","tags", "combobox"]
     */
    mode: {
      type: String,
    },
    /**
     * 标题
     */
    title: {
      type: String,
      default: "选择",
    },
    /**
     * 提示文字
     */
    placeholder: {
      type: String,
      default: "请选择",
    },
    /**
     * 选项内容
     * @model
     */
    options: {
      type: Array,
      default: function () {
        return [];
      },
    },
    /**
     * 单选是否搜索
     */
    showSearch: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否支持清除
     */
    allowClear: {
      type: Boolean,
      default: true,
    },
    /**
     * 是否禁用
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * 显示箭头
     */
    showArrow: {
      type: Boolean,
      default: true,
    },
    /**
     * 大小
     * @type Enum
     * @default default
     * @options ["large","small","default"]
     */
    size: {
      type: String,
      default: "default",
    },
    /**
     * 选择框宽度
     */
    width: {
      type: String,
      default: "200",
    },
    /**
     * 标题宽度
     */
    labelWidth: {
      type: Number,
    },
  },
  data() {
    return {
      notFoundContent: "暂无数据",
      cWidth: "200px",
      cValue: undefined,
      cOptions: [],
      lastFetchId: 0
    };
  },
  watch: {
    value(value) {
      this.cValue = value;
    },
    width(value) {
      this.cWidth = this.getCssUnit(value);
    },
    url(value) {
      if (!this.showSearch) {
        this.getData(value);
      }
    },
    params: {
      handler: function (value, oldValue) {
        if (JSON.stringify(value) == JSON.stringify(oldValue)) {
          return;
        }
        if (!this.showSearch) {
          this.getData(null, value);
        }
      },
      deep: true,
    },
    options: {
      handler: function (value, oldValue) {
        this.cOptions = this.mapData(value);
      },
      deep: true,
    },
  },
  mounted() {
    // 解决value初始化不为数组的问题
    if (!this.value && (this.mode == "multiple" || this.mode == "tags")) {
      this.cValue = [];
    } else {
      this.cValue = this.value;
    }
    this.cWidth = this.getCssUnit(this.width);
    this.cOptions = this.options;
    this.getData();
  },
  methods: {
    click: function (e) {
      this.$emit("change", e);
    },
    onBlur: function (e) {
      if (this.showSearch) {
        this.getData();
      }
      this.$emit("onBlur", e);
    },
    focus: function (e) {
      this.$emit("focus", e);
    },
    handleChange: function (e) {
      this.$emit("update:value", this.cValue);
      this.$emit("change", e,this.cOptions);
    },
    onDeselect: function (e) {
      this.$emit("deselect", e);
    },
    onFocus: function (e) {
      this.$emit("focus", e);
    },
    onInputKeydown: function (e) {
      this.$emit("inputKeydown", e);
    },
    onPopupScroll: function (e) {
      this.$emit("popupScroll", e);
    },
    onSelect: function (e) {
      this.$emit("select", e);
    },
    onDropdownVisibleChange: function (e) {
      this.$emit("dropdownVisibleChange", e);
    },
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    },
    //查询过滤数据
    searchByInput: debounce(function(val) {
      const searchParams = {
        ...(this.params ? cloneDeep(this.params) : {})
      }
      const filterKey = this.filterKey || this.dataMap.label
      searchParams[filterKey] = val ? `*${val}*` : ""
      this.getData(null, searchParams)
    },300),
    //将查询接口的数据渲染到list中
    getData(url, params) {
      let self = this;
      self.lastFetchId += 1;
      const fetchId = self.lastFetchId;
      url = url || this.url;
      params =
        params || (this.params ? cloneDeep(this.params) : {});
      params[this.paginationMap.pageNo] = 1
      params[this.paginationMap.pageSize] = params[this.paginationMap.pageSize] || 10
      if (!url) return;
      console.log("getData", url, params);
      getAction(url, params).then((resp) => {
        if(fetchId !== this.lastFetchId){
          return;
        }
        console.log("res", resp);
        //查询数据库的数组
        self.cOptions = [];
        let data = [];
        if (resp.data) {
          if(resp.data.list){
            data = resp.data.list;
          }
          if(resp.data.records){
            data = resp.data.records;
          }
        }
        if (resp.result) {
          data = resp.result.records || resp.result;
        }
        if (resp.list) {
          data = resp.list;
        }
        self.cOptions = self.mapData(data);
        self.$emit("getData", self.cOptions)
      });
    },
    filterOption(input, option) {
      return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
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
      console.log("data", data);
      return data;
    },
  },
};
</script>

<style scoped>
.select-class {
  position: relative;
  display: flex;
  /* justify-content: space-evenly; */
  align-items: center;
  min-width: 100px;
  width: 100%;
}
.select-title {
  position: relative;
  min-width: 0px;
  max-width: 500px;
  text-align: left;
  margin-right: 10px;
}
.ant-select {
  /* width: 100%; */
  width: v-bind(cWidth);
  max-width: 80vw;
}

.ant-select-multiple :deep(.ant-select-selection-placeholder) {
  text-align: left;
}

.select-class :deep(.ant-select-selection-placeholder) {
  text-align: left;
}
</style>
