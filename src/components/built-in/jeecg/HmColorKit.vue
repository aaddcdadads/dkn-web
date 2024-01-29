<template>
  <div class="show-color-div">
    <div class="show-color-content">
      <div>
        <span>{{ title }}:</span>
      </div>
      <div class="color-picker-box">
        <div class="show-color-picker" :style="{ background: cColor }"></div>
        <img src="https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/jiantouxia.png"
          @click="onClick" class="color-picker-icon" />
      </div>
    </div>
    <div class="color-picker-div" v-if="cShow">
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
      default: "0",
    },
    /**
     * 标题
     */
    title: {
      type: String,
      default: "颜色设置"
    },
    /**
     * 展示
     */
    show: {
      type: Boolean,
      default: false
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
  watch: {
    show: {
      handler: function (val) {
        this.cShow = val;
      }
    }
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
      cShow: true,
    };
  },
  mounted() {
    this.cColor = this.color;
    this.cHeight = this.$getCssUnit(this.height);
    this.cWidth = this.$getCssUnit(this.width);
    this.cTheme = this.theme;
    this.cShow = this.show;
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
    onClick() {
      this.cShow = !this.cShow;
    }
  },
};
</script>

<style scoped>
.show-color-div {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 5px;
  min-width: 268px;

  height: v-bind(cHeight);
  width: v-bind(cWidth);
}

.show-color-content {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.show-color-content>div {
  margin-right: 10px;
}

.show-color-picker {
  height: 35px;
  width: 35px;
  border-radius: 6px;
}

.color-picker-div {
  display: flex;
  justify-content: center;
  position: absolute;
  top: 35px;
  left: 75px;
}

.hu-color-picker {
  min-width: 218px;
  margin-top: 20px;
}

.hu-color-picker>>>.color-show {
  display: none;
}

.color-picker-box {
  border: 1px solid #e4e4e4;
  padding: 5px;
  display: flex;
  border-radius: 6px;
  align-items: center;
}

.color-picker-box:hover {
  border: 1px solid #409eff;
}

.color-picker-icon {
  height: 26px;
  margin-left: 15px;
}</style>
