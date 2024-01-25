<template>
  <div class="cascader-div">
    <div class="cascader-title" v-if="title != ''" :style="{ width: labelWidth + 'px' }">{{ title }}:</div>
    <a-cascader class="cascader-value" :allowClear="allowClear" :showSearch="searchOptions" :expandTrigger="expandTrigger"
      :notFoundContent="notFoundContent" :options="cOptions" :placeholder="placeholder" :popupPlacement="popupPlacement"
      :size="size" :changeOnSelect="changeOnSelect" :disabled="disabled" :field-names="dataMap" v-model:value="value"
      @change="change" @popupVisibleChange="popupVisibleChange" @search="search"></a-cascader>
  </div>
</template>
<script>
import {
  getAction,
} from "/@/request/http";
import { debounce, cloneDeep } from 'lodash'
export default {
  name: "HmAntCascader",
  data() {
    return {
      cWidth: "200px",
      cOptions: [],
    };
  },
  props: {
    /**
     * 值
     * @model
     */
    value:{
      type: Array,
      default: function(){
        return []
      }
    },
    /**
     * 标题
     */
    title: {
      type: String,
      default: "级联选择"
    },
    /**
     * 数据内容
     */
    options: {
      type: Array,
      default: function() {
        return [
          {
            value: "zhejiang",
            label: "Zhejiang",
            children: [
              {
                value: "hangzhou",
                label: "Hangzhou",
                children: [
                  {
                    value: "xihu",
                    label: "West Lake"
                  }
                ]
              }
            ]
          },
          {
            value: "jiangsu",
            label: "Jiangsu",
            children: [
              {
                value: "nanjing",
                label: "Nanjing",
                children: [
                  {
                    value: "zhonghuamen",
                    label: "Zhong Hua Men"
                  }
                ]
              }
            ]
          }
        ];
      }
    },
    /**
     * 数据源
     */
    dataUrl: {
      type: String,
      default: ""
    },
    /**
     * 提示文字
     */
    placeholder: {
      type: String,
      default: "请选择"
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
     * @options ["large","default","small"]
     */
    size: {
      type: String
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
      type: Number
    },
    /**
     * 是否显示清除按钮
     */
    allowClear: {
      type: Boolean,
      default: true
    },
    /**
     * 弹出框的展开方式
     * @type Enum
     * @default click
     * @options ["click","hover"]
     */
    expandTrigger: {
      type: String,
      default: "click"
    },
    /**
     * 当下拉列表为空时显示的内容
     */
    notFoundContent: {
      type: String,
      default: "Not Found"
    },
    /**
     * 弹出框的定位
     * @type Enum
     * @default bottomLeft
     * @options ["bottomLeft","bottomRight","topLeft","topRight"]
     */
    popupPlacement: {
      type: String,
      default: "bottomLeft"
    },
    /**
     * 是否支持搜索
     */
    showSearch: {
      type: [Boolean, Object],
      default: false
    },
    /**
     * 是否支持选中即改变值
     */
    changeOnSelect: {
      type: Boolean,
      default: false
    },
    /**
     * 字段名映射
     */
    dataMap: {
      type: Object,
      default: function() {
        return {
          label: "label",
          value: "value",
          children: "children"
        };
      }
    },
    /**
     * 数据父字段
     */
    parentColumn: {
      type: String,
      default: 'parentId',
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
  },

  watch: {
    width(value) {
      this.cWidth = this.$getCssUnit(value);
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
      handler: function (value) {
        //判断value是否为树状结构，如果不是则调用mapData方法转换
        if (value.length > 0 && value[0].hasOwnProperty(this.dataMap.children)) {
          this.cOptions = value;
        } else {
          this.cOptions = this.mapData(value);
        }
      },
      deep: true,
    },
    dataUrl(value) {
      console.log("value变化",value)
      this.getDataUrl(value);
    }
  },
  mounted() {
    this.cWidth = this.$getCssUnit(this.width);
    if (!this.showSearch) {
      this.getData();
    }
    this.getDataUrl(this.dataUrl);
  },
  computed: {
    searchOptions() {
      return this.showSearch
        ? {
          filter: (inputValue, path) => {
            return (
              path.some(
                option =>
                  option[this.dataMap.label]
                    .toLowerCase()
                    .indexOf(inputValue.toLowerCase()) > -1
              ) ||
              inputValue.toLowerCase().indexOf(
                path[path.length - 1][this.dataMap.label].toLowerCase()
              ) > -1
            );
          },
          limit: 10,
          ...this.showSearch
        }
        : false;
    }
  },
  methods: {
    //使用url获取数据
    getData(url = this.url, params) {
      let self = this;
      params = params || (this.params ? cloneDeep(this.params) : {});
      params[this.paginationMap.pageNo] = 1
      params[this.paginationMap.pageSize] = 10
      if (!url) return;
      getAction(url, params).then((resp) => {
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
    //实现一个方法，使用es6语法根据this.parentColumn将对象数组转换为树状结构
    mapData(data) {
      let map = {};
      let tree = [];
      let self = this;
      data.forEach((item) => {
        map[item[self.dataMap.value]] = item;
      });

      data.forEach((item) => {
        let parent = map[item[self.parentColumn]];
        console.log(item,self.parentColumn,item[self.parentColumn])
        console.log(parent)
        if (parent) {
          (parent[self.dataMap.children] || (parent[self.dataMap.children] = [])).push(
            item
          );
        } else {
          tree.push(item);
        }
      });
      return tree;
    },
    change: function(e) {
      this.$emit("update:value", e);
      this.$emit("change", e);
    },
    popupVisibleChange: function(e) {
      this.$emit("popupVisibleChange", e);
    },
    search: function(e) {
      this.$emit("search", e);
    },
    getDataUrl(url) {
      let self = this;
      if (!url) return;
      if (url.indexOf("?") !== -1) {
        let value = url.substring(url.indexOf("?") + 1);
        if (value) {
          self.dataMap.label = value;
          self.dataMap.value = value;
        }
      }
      getAction(`${url}`).then(response => {
          self.cOptions = [];
          self.cOptions = response;
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>
<style scoped>
.cascader-div {
  position: relative;
  display: flex;
  /* justify-content: space-evenly; */
  align-items: center;
  min-width: 100px;
  width: 100%;
}
.cascader-title {
  position: relative;
  min-width: 0px;
  max-width: 500px;
  text-align: left;
  margin-right: 10px;
}
.cascader-value {
  /* width: 100%; */
  width: v-bind(cWidth);
  max-width: 80vw;
}
</style>
