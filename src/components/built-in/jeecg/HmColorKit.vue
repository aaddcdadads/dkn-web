<template>
  <div class="show-color-div">
    <div class="show-color-content">
      <div>
        <span>颜色:</span>
      </div>
      <div class="show-color-picker" :style="{ background: cColor }"></div>
    </div>
    <div class="color-picker-div">
      <ColorPicker :theme="cTheme" :color="color" @changeColor="changeColor" />
    </div>
  </div>
</template>

<script>
import { ColorPicker } from "vue-color-kit";
import "vue-color-kit/dist/vue-color-kit.css";

export default {
  name: "HmColorKit",
  components: {
    ColorPicker,
  },
  props: {
    /**
     * 宽度
     * */
    width: {
      type: String,
      default: "300",
    },
    /**
     * 高度
     * */
    height: {
      type: String,
      default: "350",
    },
    /**
     * 颜色
     * @type Color
     * */
    color: {
      type: String,
      default: "#59c7f9",
    },
    /**
     * 主题选择
     * @type Enum
     * @default light
     * @options ['light', 'dark']
     */
    theme: {
      type: String,
    },
  },
  data() {
    return {
      cColor: "",
      cHeight: 0,
      cWidth: 0,
      suckerCanvas: null,
      suckerArea: [],
      isSucking: false,
      cTheme: "light",
    };
  },
  mounted() {
    this.cColor = this.color;
    this.cHeight = this.$getCssUnit(this.height);
    this.cWidth = this.$getCssUnit(this.width);
    this.cTheme = this.theme;
  },
  watch: {
    height(value) {
      this.cHeight = this.$getCssUnit(value);
    },
    width(value) {
      this.cWidth = this.$getCssUnit(value);
    },
    color(value) {
      this.cColor = value;
    },
    theme(value) {
      this.cTheme = value;
    },
  },
  methods: {
    changeColor(color) {
      const { r, g, b, a } = color.rgba;
      this.cColor = `rgba(${r}, ${g}, ${b}, ${a})`;
      console.log("changeColor to:", this.cColor);
      this.$emit("changecolorkit", this.cColor);
    },
  },
};
</script>

<style scoped>
.show-color-div {
  display: flex;
  flex-direction: column;
  padding: 5px;
  min-width: 268px;
  min-height: 340px;
  height: v-bind(cHeight);
  width: v-bind(cWidth);
}

.show-color-content {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.show-color-content > div {
  margin-right: 10px;
}

.show-color-picker {
  height: 26px;
  width: 47px;
  border-radius: 6px;
}

.color-picker-div {
  display: flex;
  justify-content: center;
}

.hu-color-picker {
  min-width: 218px;
  margin-top: 20px;
}

.hu-color-picker >>> .color-show {
  display: none;
}
</style>
