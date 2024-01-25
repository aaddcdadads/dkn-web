<template>
  <div class="hm-bg-card">
    <div class="title_div">
      <span>{{title}}</span>
    </div>
    <div class="content_div">
      <div style="width:100%">
        <a-tooltip :placement="placement" color="#fff">
          <template #title>
            <span class="tooltip_span">
              {{content}}
              <span>{{company}}</span>
            </span>
          </template>
          <div class="span_div">
            <span class="number_span over_span">
              {{content}}
              <span class="company_span">{{company}}</span>
            </span>
          </div>
        </a-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HmDataCard",
  props: {
    /**
     * 卡片标题
     */
    title: {
      type: String,
      default: "card tilte"
    },
    /**
     * 内容
     */
    content: {
      type: String,
      default: "内容内容内容内容内容内容内容"
    },
    /**
     * 内容单位
     */
    company: {
      type: String,
      default: "家"
    },
    /**
     * 宽度
     */
    width: {
      type: String,
      default: "176"
    },
    /**
     * 高度
     */
    height: {
      type: String,
      default: "110"
    },
    /**
     * 圆角
     */
    borderRadius: {
      type: String,
      default: "4"
    },

    /**
     * 边框颜色
     * @type Color
     */
    borderColor: {
      type: String,
      default: "#BAE7FF"
    },

    /**
     * 标题背景
     * @type Color
     */
    titleBackGround: {
      type: String,
      default: "#E6F7FF"
    },
    /**
     * 标题颜色
     * @type Color
     */
    titleColor: {
      type: String,
      default: "#096DD9"
    },
    /**
     * 标题大小
     */
    titleFontSize: {
      type: String,
      default: "16"
    },
    /**
     * 数字大小
     */
    numberFontSize: {
      type: String,
      default: "26"
    },
    /**
     * 显示位置
     * @type Enum
     * @default bottom
     * @options ["top","left","right","bottom","topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"]
     */
    placement: {
      type: String,
    },
  },

  data() {
    return {
      cWidth: "176px",
      cHeight: "110px",
      cBorderRadius: "4px",
      cBorderColor: "#BAE7FF",
      cTitleBackGround: "#E6F7FF",
      cTitleFontSize: "16px",
      cTitleFontColor: "#096DD9",
      cContentFontSize: "26px"
    };
  },

  watch: {
    width(value) {
      this.cWidth = this.getCssUnit(value);
    },
    height(value) {
      this.cHeight = this.getCssUnit(value);
    },
    borderRadius(value) {
      this.cBorderRadius = this.getCssUnit(value);
    },
    borderColor(value) {
      this.cBorderColor = value;
    },
    titleBackGround(value) {
      this.cTitleBackGround = value;
    },
    titleFontSize: function(newVal, oldVal) {
      this.cTitleFontSize = this.getCssUnit(newVal);
    },
    titleColor: function(newVal, oldVal) {
      this.cTitleFontColor = newVal;
    },
    numberFontSize: function(value) {
      this.cContentFontSize = value;
    }
  },

  computed: {},

  mounted() {
    this.cWidth = this.getCssUnit(this.width);
    this.cHeight = this.getCssUnit(this.height);
    this.cBorderRadius = this.getCssUnit(this.borderRadius);
    this.cBorderColor = this.borderColor;
    this.cTitleBackGround = this.titleBackGround;
    this.cTitleFontSize = this.getCssUnit(this.titleFontSize);
    this.cTitleFontColor = this.titleColor;
    this.cContentFontSize = this.getCssUnit(this.numberFontSize);
  },

  methods: {
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    }
  }
};
</script>

<style scoped>
.hm-bg-card {
  /* display: inline-flex; */
  display: flex;
  flex-direction: column;
  border-width: 1px;
  border-color: v-bind(cBorderColor);
  width: v-bind(cWidth);
  height: v-bind(cHeight);
  border-style: solid;
  border-radius: v-bind(cBorderRadius);
  /* padding: v-bind(cPadding);
  text-align: v-bind(cTextAlign);
   */
  /* box-shadow: v-bind(cBoxShadowHShadow) v-bind(cBoxShadowVShadow)
    v-bind(cBoxShadowBlur) v-bind(cBoxShadowSpread) v-bind(cBoxShadowColor); */
}

.title_div {
  width: 100%;
  height: 42.7%;
  display: flex;
  align-items: center;
  padding-left: 9.1%;
  font-weight: 600;
  color: v-bind(cTitleFontColor);
  background-color: v-bind(cTitleBackGround);
  font-size: v-bind(cTitleFontSize);
}

.content_div {
  width: 100%;
  height: 57.3%;
  padding: 5px 10px 0 9.1%;
  /* border-top-style: solid;
  border-top-width: 1px;
  border-top-color: v-bind(cBorderColor); */
  display: flex;
  align-items: center;
  justify-content: center;
}

.span_div {
  font-size: v-bind(cContentFontSize);
  color: #595959;
  font-weight: 500;
  margin-top: 10px;
  /* word-wrap: break-word; */
  width: 100%;

  /* text-align: center; */
}

.number_span {
  overflow-wrap: anywhere;
  display: inline-block;
}

.over_span {
  width: 100%;
  line-height: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tooltip_span {
  color:#595959;
  /* font-size: 26px; */
}

.company_span {
  /* float: left; */
  display: inline-block;
  margin-left: 5px;
  margin-top: 2%;
  /* font-size: 16px; */
  color: #595959;
}
</style>