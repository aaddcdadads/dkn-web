<template>
  <div class="date-div">
    <div class="data-title" v-if="title" :style="{width: labelWidth + 'px'}">{{ title }}:</div>

    <a-date-picker
      class="ant-date-class"
      :locale="locale"
      :disabled-date="disabledDate"
      :size="size"
      :disabled="disabled"
      v-model:value="cValue"
      :showTime="showTime"
      @change="onChange"
      @ok="onOk"
      v-if="!isRange"
    ></a-date-picker>

    <a-range-picker
      class="ant-date"
      :locale="locale"
      :size="size"
      :disabled="disabled"
      v-model:value="cValue"
      :showTime="showTime"
      @change="onChange"
      @ok="onOk"
      v-if="isRange"
    ></a-range-picker>
  </div>
</template>
<script>
import moment from "moment";
import locale from "ant-design-vue/es/date-picker/locale/zh_CN";

export default {
  name: "HmAntDatePicker",
  props: {
    /**
     * 标题
     */
    title: {
      type: String,
      default: "日期选择"
    },
    /**
     * 当前值
     * @model
     */
    value: {
      type: String
    },
    /**
     * 显示时分秒
     */
    showTime: {
      type: Boolean,
      default: true
    },
    /**
     * 是否禁用
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * 是否是区间
     */
    isRange: {
      type: Boolean,
      default: true
    },
    /**
     * 不可选择日期
     */
    disabledDate: {
      type: Function
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
    labelWidth: {
      type: Number
    }
  },
  watch: {
    value(val) {
      this.updateCValue(val);
    },
    open(val) {
      this.cOpen = val;
    },
    width(value) {
      this.cWidth = this.getCssUnit(value);
    }
  },
  mounted() {
    console.log(`mounted: `, this.value)
    this.cWidth = this.getCssUnit(this.width);
    this.updateCValue(this.value);
  },
  data() {
    return {
      locale: locale,
      cValue: null,
      cOpen: false,
      cWidth: "200px"
    };
  },
  computed: {
    format() {
      return this.showTime ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD";
    }
  },
  methods: {
    updateCValue(val) {
      if (!val) {
        this.cValue = this.isRange ? [] : null;
        return;
      }
      if (!this.isRange) {
        this.cValue = moment(val);
        return;
      }
      let valArr = val.split(",");
      
      if (valArr.length === 1) {
        this.cValue = moment(val);
      }
      if (valArr.length === 2) {
        this.cValue = [moment(valArr[0]), moment(valArr[1])];
      }
    },
    onChange: function(data) {
      console.log("onChange: ", data);
      this.$emit("change", data);

      if (this.cValue.length === null || this.cValue.length === undefined) {
        this.$emit("update:value", this.cValue.format(this.format));
      } else {
        let value = "";
        if (this.cValue.length > 0) {
          value = `${this.cValue[0].format(this.format)},${this.cValue[1].format(this.format)}`
        }
        this.$emit("update:value", value);
      }
      
    },
    onOk: function(e) {
      console.log("onOk: ", e);
      if (this.cValue.length === null || this.cValue.length === undefined) {
        this.$emit("update:value", this.cValue.format(this.format));
      } else {
        this.$emit(
          "update:value",
          `${this.cValue[0].format(this.format)},${
            this.cValue.length > 0 ? this.cValue[1].format(this.format) : ""
          }`
        );
      }
      this.$emit("ok", e);
    },
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    }
  },
};
</script>

<style scoped>
.date-div {
  position: relative;
  display: flex;
  /* justify-content: space-evenly; */
  align-items: center;
  min-width: 100px;
  width: 100%;
}
.data-title {
  position: relative;
  min-width: 0px;
  max-width: 500px;
  text-align: left;
  margin-right: 10px;
}
.ant-calendar-picker {
  width: v-bind(cWidth) !important;
}

</style>