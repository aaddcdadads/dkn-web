<template>
  <div :style="{'width': cWidth,'height': cHeight}" class="pz-container">
    <div ref="panzoomElement" >
      <slot />
    </div>
    <div class="btn-group">
      <a-button
        shape="circle"
        size="small"
        @click="zoom(1.25)"
      >
        <PlusOutlined />
      </a-button>
      <a-button
        shape="circle"
        size="small"
        @click="zoom(0.75)"
      >
        <MinusOutlined />
      </a-button>
    </div>
  </div>
</template>

<script>
import {
  PlusOutlined,
  MinusOutlined
} from "@ant-design/icons-vue";
import Panzoom from 'panzoom'

export default {
  components: {
    PlusOutlined,
    MinusOutlined
  },
  props: {
    /**
     * 宽度
     */
    width: {
      type: String,
      default: "500"
    },
    /**
     * 高度
     */
    height: {
      type: String,
      default: "500"
    },
    /**
     * 初始化配置
     */
    initOptions: {
      type: Object,
      default: function() {
        return {
          maxScale: 5,
        }
      }
    }
  },
  data() {
    return {
      panzoom: null,
      cWidth: '500px',
      cHeight: '500px',
      cInitOptions: {}
    }
  },  
  mounted() {
    this.cWidth = this.getCssUnit(this.width);
    this.cHeight = this.getCssUnit(this.height);
    this.cInitOptions = this.initOptions
    this.$nextTick(() => {
      this.panzoom && this.panzoom.dispose()
      this.panzoom = Panzoom(this.$refs.panzoomElement, this.cInitOptions);
    })
  },
  watch: {
    width(value) {
      this.cWidth = this.getCssUnit(value);
    },
    height(value) {
      this.cHeight = this.getCssUnit(value);
    },
    initOptions: {
      handler: function(value) {
        this.cInitOptions = value
      },
      deep: true
    }
  },
  methods: {
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    },
    zoom(val) {
      const { width, height } = this.$refs.panzoomElement.getBoundingClientRect()
      this.panzoom.smoothZoom(width, height, val)
    }
  }
}
</script>

<style scoped>
.pz-container {
  background-color: #F0F1F7;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.btn-group {
  position: absolute;
  width: 80px;
  display: flex;
  justify-content: space-around;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
</style>