<template>
<!-- 待修改,多级菜单 -->
  <a-dropdown
    :placement="placement"
    :trigger="trigger"
    v-model:visible="cVisible"
    @visibleChange="visibleChange"
  >
    <a class="ant-dropdown-link" @click.prevent>
      <i
        v-if="!!icon && ['left', 'top'].indexOf(iconPosition) >= 0"
        :class="icon"
        class="text-icon"
        :style="cIconStyle"
      ></i>
      {{ text }}
      <i
        v-if="!!icon && ['right', 'bottom'].indexOf(iconPosition) >= 0"
        :class="icon"
        class="text-icon"
        :style="cIconStyle"
      ></i>
    </a>
    <template #overlay>
      <a-menu>
        <a-menu-item v-for="(item, index) in cTitleList" :key="index" @click="onClick(item, index)">
          <a
            href="javascript:;"
            class="hrefText"
            >{{ item.value }}</a
          >
        </a-menu-item>
      </a-menu>
    </template>
    <slot />
  </a-dropdown>
</template>

<script>
export default {
  name: "HmAntDropdownMenu",
  props: {
    /**
     * 占位文字
     */
    text: {
      type: String,
      default: "",
    },
    /**
     * 是否展开菜单
     */
    visible: {
      type: Boolean,
      default: false,
    },
    /**
     * 数据
     * @model
     */
    titleList: {
      type: Array,
      default: function() {
        return [
          {
            key: 1,
            value: "1st menu item",
          },
          {
            key: 2,
            value: "2nd menu item",
          },
          {
            key: 3,
            value: "3nd menu item",
          },
        ];
      },
    },
    /**
     * 弹出位置
     * @type Enum
     * @default bottomLeft
     * @options ["bottomLeft","bottomCenter","bottomRight","topLeft","topCenter","topRight"]
     */
    placement: {
      type: String,
    },
    /**
     * 下拉的行为
     */
    trigger: {
      type: Array,
      default: function() {
        return ["click"];
      },
    },
    /**
     * 菜单文字大小
     */
    menuTextSize: {
      type: String,
      default: "14px",
    },
    /**
     * 图标位置
     * @type Enum
     * @options ["left", "right", "top", "bottom"]
     */
    iconPosition: {
      type: String,
      default: "left",
    },
    /**
     * 图标
     * @type Icon
     */
    icon: {
      type: String,
      default: "fa fa-bath",
    },
    /**
     * 图标图片大小
     */
    iconSize: {
      type: String,
      default: "20px",
    },
    /**
     * 图标颜色
     * @type Color
     */
    iconcolor: {
      type: String,
      default: "#000000",
    },
    /**
     * 内边距
     */
    padding: {
      type: String,
      default: "5",
    },
    /**
     * 链接文字颜色
     * @type Color
     */
    color: {
      type: String,
      default: "#000",
    },
  },
  data() {
    return {
      cVisible: false,
      hrefColor: "#000",
      iconColor: "#000",
      cTitleList: [
        {
          key: 1,
          value: "1st menu item",
        },
        {
          key: 2,
          value: "2nd menu item",
        },
        {
          key: 3,
          value: "3nd menu item",
        },
      ],
      cPadding: "5px",
      cMenuTextSize: "14px",
      cIconSize: "18px",
      cIconStyle: "display: inline-block",
    };
  },
  watch: {
    visible(value) {
      this.cVisible = value;
    },
    titleList(value) {
      this.cTitleList = value;
    },
    color(value) {
      this.hrefColor = value;
    },
    iconcolor(value) {
      this.iconColor = value;
    },
    padding(value) {
      this.cPadding = this.getCssUnit(value);
    },
    menuTextSize(value) {
      this.cMenuTextSize = this.getCssUnit(value);
    },
    iconSize(value) {
      this.cIconSize = this.getCssUnit(value);
    },
    iconPosition(value) {
      this.calcIconStyle(value);
    },
  },
  mounted() {
    this.cTitleList = this.titleList;
    this.cVisible = this.visible;
    this.hrefColor = this.color;
    this.iconColor = this.iconcolor;
    this.cMenuTextSize = this.getCssUnit(this.menuTextSize);
    this.cIconSize = this.getCssUnit(this.iconSize);
    this.cPadding = this.getCssUnit(this.padding);
    this.calcIconStyle(this.iconPosition);
  },
  methods: {
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    },
    calcIconStyle(iconPosition) {
      if (iconPosition === "left") {
        this.cIconStyle = "display: inline-block";
      } else if (iconPosition === "top") {
        this.cIconStyle = "display: block";
      } else if (iconPosition === "right") {
        this.cIconStyle = "display: inline-block";
      } else if (iconPosition === "bottom") {
        this.cIconStyle = "display: block";
      }
    },
    visibleChange: function(e) {
      this.$emit("visibleChange", e);
    },
    onClick: function(e, index) {
      console.log("onClick", e, index);
      this.$emit("onClick", e, index);
    },
  },
};
</script>

<style scoped>
.hrefText {
  color: v-bind(hrefColor);
  font-size: v-bind(cMenuTextSize);
}
.text-icon {
  color: v-bind(iconColor);
  font-size: v-bind(cIconSize);
  padding: v-bind(cIconPadding);
}
</style>