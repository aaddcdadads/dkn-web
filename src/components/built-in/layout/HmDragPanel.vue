<template>
  <div class="hm-panel" v-show="!hidden">
    <div class="header">
      <div class="panel_title_icon"></div>
      <h3 class="title">{{title}}</h3>
      
      <div class="slot_div">
        <DragOutlined class="iconStyle" v-if="iconVisible.drag" @click="onDrag()"/>
        <ArrowsAltOutlined class="iconStyle" v-if="iconVisible.enlarge" @click="onEnlarge()"/>
        <MoreOutlined class="iconStyle" v-if="iconVisible.more" @click="onMore()"/>
        <slot name="slot-title-icon">
          <div class="hm-slot" data-slot-name="slot-title-icon">
            <div class="sortable-list"></div>
          </div>
        </slot>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import {
  DragOutlined,
  ArrowsAltOutlined,
  MoreOutlined
} from '@ant-design/icons-vue';
export default {
  name: "HmDragPanel",
  components: {
    DragOutlined,
    ArrowsAltOutlined,
    MoreOutlined
  },
  props: {
    /**
    * 面板宽度
    */
    width: {
      type: String,
      default: '100%'
    },
    /**
     * 面板高度
     */
    height: {
      type: String,
      default: '200'
    },

    /**
     * 标题
     */
    title: {
      type: String,
      default: "面板标题"
    },

    /**
     * 标题大小
     */
    titleSize: {
      type: String,
      default: "14"
    },

    /**
     * 标题高度
     */
    titleHeight: {
      type: String,
      default: '45'
    },

    /**
     * 圆角
     */
    borderRadius: {
      type: String,
      default: '8'
    },
    /**
     * 对齐
     */
    textAlign: {
      type: String,
      default: 'left'
    },
    /**
     * 内边距
     */
    padding: {
      type: String,
      default: '5'
    },
    /**
     * 水平阴影
     */
    boxShadowHShadow: {
      type: String,
      default: '0'
    },
    /**
     * 垂直阴影
     */
    boxShadowVShadow: {
      type: String,
      default: '2'
    },
    /**
     * 模糊距离
     */
    boxShadowBlur: {
      type: String,
      default: '12'
    },
    /**
     * 阴影大小
     */
    boxShadowSpread: {
      type: String,
      default: '0'
    },
    /**
     * 阴影颜色
     * @type Color
     */
    boxShadowColor: {
      type: String,
      default: 'rgba(0,0,0,0.04)'
    },
    /**
     * 背景色
     * @type Color
     */
    backgroundColor: {
      type: String,
      default: '#fff'
    },
    /**
     * 是否隐藏
     */
    hidden: {
      type: Boolean,
      default: false
    },

    /**
     * 标题块宽
     */
    titleBlockWidth: {
      type: String,
      default: '4'
    },
    /**
     * 标题块高
     */
    titleBlockHeight: {
      type: String,
      default: '16'
    },
    /**
     * 标题块颜色
     * @type Color
     */
    titleBlockColor: {
      type: String,
      default: '#1890ff'
    },

    /**
     * 标题颜色
     * @type Color
     */
    titleColor: {
      type: String,
      default: '#000000'
    },

    /**
     * 插槽右边距
     */
    slotMarginRight: {
      type: String,
      default: '10'
    },

    /**
     * 插槽宽度
     */
    slotWidth: {
      type: String,
      default: '60'
    },
    /**
     * 插槽高度
     */
    slotHeight: {
      type: String,
      default: '45'
    },
    /**
     * 图标间距
     */
     iconSpacing: {
      type: String,
      default: '10'
    },
    /**
     * 图标大小
     */
     iconSize: {
      type: String,
      default: '20'
    },
    /**
     * 图标颜色
     * @type Color
     */
     iconColor: {
      type: String,
      default: '#000000'
    },
    /**
     * 图标显示配置
     */
    iconVisible: {
      type: Object,
      default: function() {
        return {
          drag:true,
          enlarge:true,
          more:true
        }
      }   
    }
  },
  data() {
    return {
      cWidth: '200px',
      cHeight: '200px',
      cPadding: '5px',
      cTextAlign: 'left',
      cTitleSize: '16px',
      cTitleHeight: '45px',
      cBackgroundColor: 'white',
      cBorderRadius: '8px',
      cBoxShadowHShadow: '0px',
      cBoxShadowVShadow: '2px',
      cBoxShadowBlur: '12px',
      cBoxShadowSpread: '0px',
      cTitleBlockWidth: '4px',
      cTitleBlockHeight: '16px',
      cTitleBlockColor: '#1890ff',
      cTitleColor: '#000000',
      cTitleIconColor: '#0000FF',
      cBoxShadowColor: 'rgba(0,0,0,0.04)',
      cSlotMarginRight: '10px',
      cIconSpacing:'10px',
      cIconSize:'10px',
      cIconColor:'#000000',
      // cSlotWidth: '100px',
      // cSlotHeight: '100px',
    }
  },
  watch: {
    width(value) {
      this.cWidth = this.getCssUnit(value);
    },
    height(value) {
      this.cHeight = this.getCssUnit(value);
    },
    titleSize(value) {
      this.cTitleSize = this.getCssUnit(value)
    },
    titleHeight(value) {
      this.cTitleHeight = this.this.getCssUnit(value);
    },
    padding(value) {
      this.cPadding = this.getCssUnit(value);
    },
    textAlign(value) {
      this.cTextAlign = value;
    },
    backgroundColor(value) {
      this.cBackgroundColor = value;
    },
    borderRadius(value) {
      this.cBorderRadius = this.getCssUnit(value);
    },
    boxShadowHShadow(value) {
      this.cBoxShadowHShadow = this.getCssUnit(value);
    },
    boxShadowVShadow(value) {
      this.cBoxShadowVShadow = this.getCssUnit(value);
    },
    boxShadowBlur(value) {
      this.cBoxShadowBlur = this.getCssUnit(value);
    },
    boxShadowSpread(value) {
      this.cBoxShadowSpread = this.getCssUnit(value);
    },
    titleBlockWidth(value) {
      this.cTitleBlockWidth = this.getCssUnit(value);
    },
    titleBlockHeight(value) {
      this.cTitleBlockHeight = this.getCssUnit(value);
    },
    titleBlockColor(value) {
      this.cTitleBlockColor = value
    },
    titleColor(value) {
      this.cTitleColor = value;
    },
    boxShadowColor(value) {
      this.cBoxShadowColor = value;
    },
    slotMarginRight(value) {
      this.cSlotMarginRight = this.getCssUnit(value)
    },
    iconSpacing(value) {
      this.cIconSpacing = this.getCssUnit(value)
    },
    iconSize(value) {
      this.cIconSize = this.getCssUnit(value)
    },
    iconColor(value) {
      this.cIconColor = this.getCssUnit(value)
    }
    // slotWidth(value) {
    //   this.cSlotWidth = value
    // },
    // slotHeight(value) {
    //   this.cSlotHeight = value
    // }
  },
  computed: {
  },
  mounted() {
    this.cWidth = this.getCssUnit(this.width);
    this.cHeight = this.getCssUnit(this.height);
    this.cPadding = this.getCssUnit(this.padding);
    this.cTextAlign = this.textAlign;
    this.cTitleSize = this.getCssUnit(this.titleSize)
    this.cTitleHeight = this.getCssUnit(this.titleHeight);
    this.cBackgroundColor = this.backgroundColor;
    this.cBorderRadius = this.getCssUnit(this.borderRadius);
    this.cBoxShadowHShadow = this.getCssUnit(this.boxShadowHShadow);
    this.cBoxShadowVShadow = this.getCssUnit(this.boxShadowVShadow);
    this.cBoxShadowBlur = this.getCssUnit(this.boxShadowBlur);
    this.cBoxShadowSpread = this.getCssUnit(this.boxShadowSpread);
    this.cTitleBlockWidth = this.getCssUnit(this.titleBlockWidth);
    this.cTitleBlockHeight = this.getCssUnit(this.titleBlockHeight);
    this.cTitleBlockColor = this.titleBlockColor
    this.cTitleColor = this.titleColor
    this.cBoxShadowColor = this.boxShadowColor
    this.cSlotMarginRight = this.getCssUnit(this.slotMarginRight)
    this.cIconSpacing = this.getCssUnit(this.iconSpacing)
    this.cIconSize = this.getCssUnit(this.iconSize)
    this.cIconColor = this.iconColor

    // this.cSlotWidth = this.getCssUnit(this.slotWidth);
    // this.cSlotHeight = this.getCssUnit(this.slotHeight);
  },
  methods: {
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    },
    onDrag(){
      this.$emit("drag");
    },
    onEnlarge(){
      this.$emit("enlarge");
    },
    onMore(){
      this.$emit("more");
    }
    
  },
};
</script>

<style scoped>
.hm-panel {
  width: v-bind(cWidth);
  height: v-bind(cHeight);
  min-width: 200px;
  padding: v-bind(cPadding);
  text-align: v-bind(cTextAlign);
  background-color: v-bind(cBackgroundColor);
  border-radius: v-bind(cBorderRadius);
  box-shadow: v-bind(cBoxShadowHShadow) v-bind(cBoxShadowVShadow)
    v-bind(cBoxShadowBlur) v-bind(cBoxShadowSpread) v-bind(cBoxShadowColor);
}

.hm-panel > .header {
  position: relative;
  padding: 10px;
  width: 100%;
  height: v-bind(cTitleHeight);
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  align-items: center;
}
.title {
  color: v-bind(cTitleColor);
  font-size: v-bind(cTitleSize);
  margin-top: 0.3%;
  margin-bottom: 0;
}

.panel_title_icon {
  width: v-bind(cTitleBlockWidth);
  height: v-bind(cTitleBlockHeight);
  background: v-bind(cTitleBlockColor);
  margin: 4px 8px 0 14px;
}

.slot_div {
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
  position: absolute;
  right: v-bind(cSlotMarginRight);
}
.slot_div > .hm-slot {
  width: 100%;
  height: 100%;
}

.slot_div > .hm-slot:hover {
  /* background: rgba(253, 71, 52, 0.1) !important; */
}
.iconStyle {
  margin-left:v-bind(cIconSpacing);
  font-size:v-bind(cIconSize);
  color:v-bind(cIconColor);
}

</style>