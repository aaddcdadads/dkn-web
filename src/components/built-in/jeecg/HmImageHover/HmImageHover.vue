<template>
  <div class="page">
    <figure v-for="(item, index) in cList" :key="index" v-show="item.id != 0" :class="item.bClass"
      @click="itemClick(item, index)">
      <img :src="item.srcHref" :alt="item.alt">
      <figcaption :class="item.content">
        <div :class="item.contentClass">
          <pre v-if="defaultStyle" :style="cStyle ? cStyle : item.style">{{ item.text }}</pre>
          <slot v-else name="contentSlot"></slot>
        </div>
      </figcaption>
    </figure>
  </div>
</template>
<script>
export default {
  props: {
    /**
     * 宽度
     */
    width: {
      type: String,
      default: "400px"
    },
    /**
     * 高度
     */
    height: {
      type: String,
      default: "300px"
    },
    /**
     * 默认样式
     */
    defaultStyle: {
      type: Boolean,
      default: true
    },
    /**
     *  内部文字样式
     */
    style: {
      type: Object,
      default: function () {
        return {
        }
      }
    },
    /**
     * 数据项
     */
    list: {
      type: Array,
      default: function () {
        return [
          {
            id: 0,
            srcHref: "https://ciar4n-izmir.netlify.app/#/customisation", alt: "文档链接 --此组件id不为0(隐藏)",
            class: "样式说明",
            bClass: "c4-izmir 默认样式",
            content: "c4-layout-top-right 边框等样式",
            contentClass: "c4-reveal-up 文字样式",
            text: "如果‘内部文字样式‘无数据就调用数组中style",
            style: {
              color: "red"
            }
          },
          {
            id: 1, srcHref: "https://source.unsplash.com/FaPxZ88yZrw/400x300", alt: "Sample Image1",
            bClass: "c4-izmir",
            content: "c4-layout-top-right",
            contentClass: "c4-reveal-up",
            text: "1234567890\n123\t12",
          },
          { id: 2, srcHref: "https://source.unsplash.com/WLUHO9A_xik/400x300", alt: "Sample Image2", bClass: "c4-izmir c4-border-cc-3 c4-image-zoom-out c4-gradient-bottom-right", content: "", contentClass: "c4-rotate-up-right c4-delay-200" },
          { id: 3, srcHref: "https://source.unsplash.com/1t8go-nyVyE/400x300", alt: "Sample Image3", bClass: "c4-izmir c4-border-center c4-gradient-top-left", content: "c4-layout-bottom-right", contentClass: "c4-rotate-down-left c4-delay-400" },
          { id: 4, srcHref: "https://source.unsplash.com/1t8go-nyVyE/400x300", alt: "Sample Image4", bClass: "c4-izmir c4-border-cc-1 c4-image-zoom-out c4-gradient-bottom-right", content: "c4-layout-bottom-right", contentClass: "c4-reveal-left c4-delay-800" }

        ]
      }
    }
  },
  data() {
    return {
      cWidth: "200px",
      cHeight: "200px",
      cStyle: {},
      cList: []
    }
  },
  watch: {
    width(value) {
      this.cWidth = this.getCssUnit(value);
    },
    height(value) {
      this.cHeight = this.getCssUnit(value);
    },
    style(value) {
      this.cStyle = value;
    },
    list: {
      handler: function (value, oldValue) {
        this.cList = value;
      },
      deep: true,
    },

  },
  mounted() {
    this.cWidth = this.getCssUnit(this.width);
    this.cHeight = this.getCssUnit(this.height);
    this.cStyle = this.style;
    this.cList = this.list;
  },
  methods: {
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    },
    itemClick(e, i) {
      this.$emit("itemClick", e, i)
    }
  }
}
</script>
<style scoped>
@import "assets/izmir.min.css";
.page {
  width: 100%;
}

.c4-izmir {
  width: v-bind(cWidth);
  height: v-bind(cHeight);
  --primary-color: #F6CD14;
  --secondary-color: #D0206E;
  --transition-duration: 500ms;
  --border-width: 6px;
  --overlay-opacity: .9;
}
</style>