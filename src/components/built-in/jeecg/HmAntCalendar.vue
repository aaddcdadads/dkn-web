<template>
  <a-calendar
    :defaultValue="defValue"
    :fullscreen="fullscreen"
    :locale="locale"
    :mode="mode"
    :validRange="validRangeArr"
    v-model:value="val"
    :valueFormat="valueFormat"
    @change="onChange"
    @panelChange="onPanelChange"
    @select="onSelect"
    class="calendar-class"
  >
  </a-calendar>
</template>

<script>
// import { Calendar } from "ant-design-vue";
import moment from "moment";
export default {
  name: "HmAntCalendar",
  props: {
    /**
     * 初始模式
     * @type Enum
     * @default month
     * @options ["month","year"]
     */
    mode: {
      type: String,
    },
    /**
     * 绑定值的格式
     */
    valueFormat: {
      type: String,
    },
    /**
     * 默认日期
     */
    defaultValue: {
      type: String, //默认日期
    },
    /**
     * 展示日期
     * @model
     */
    value: {
      type: String,
    },
    /**
     * 可显日期
     */
    validRange: {
      type: Array,
    },
    /**
     * 全屏展示
     */
    fullscreen: {
      type: Boolean,
      default: true,
    },
    /**
     * 国际化配置
     */
    locale: {
      type: Object, //默认配置
      default: () => {
        return {
          lang: {
            year: "年",
            month: "月",
          },
        };
      },
    },
  },
  data() {
    return {
      defValue: null,
      val: null,
      validRangeArr: null,
    };
  },
  watch: {
    defaultValue(val) {
      this.defValue = moment(val);
    },
    value(val) {
      this.val = moment(val);
    },
    validRange(val) {
      console.log(val);
      this.validRangeArr = [moment(val[0]), moment(val[1])];
    },
  },
  methods: {
    onPanelChange: function (e) {
      this.$emit("panelChange", e);
    },
    onChange: function (e) {
      this.$emit("change", e);
    },
    onSelect: function (e) {
      this.$emit("select", e);
    },
  },
  created() {
    this.val = moment(this.value);
    console.log(this.validRange, "this.validRange");
    this.validRangeArr = [
      moment(this.validRange ? this.validRange[0] : undefined),
      moment(this.validRange ? this.validRange[1] : undefined),
    ];
  },
};
</script>
<style scoped>
.calendar-class {
  width: 100%;
  min-height: 50vw;
}
</style>
