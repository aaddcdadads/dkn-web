<template>
  <iframe class="hm-iframe" ref="iframe" :src="url" allow="microphone;camera;midi;encrypted-media;autoplay"/>
</template>

<script>
/**
 * 背景卡片
 */
export default {
  name: "HmBgCard",
  components: {
  },
  props: {
    /**
     * 宽度
     */
    width: {
      type: String,
      default: '100%'
    },
    /**
     * 高度
     */
    height: {
      type: String,
      default: '100%'
    },
    /**
     * url
     */
    url: {
      type: String,
      default: 'https://blockkit.cn/'
    },
  },
  data() {
    return {
      cWidth: '200px',
      cHeight: '200px',
    }
  },
  watch: {
    width(value) {
      this.cWidth = this.getCssUnit(value);
    },
    height(value) {
      this.cHeight = this.getCssUnit(value);
    },
  },
  computed: {
  },
  mounted() {
    this.cWidth = this.$getCssUnit(this.width);
    this.cHeight = this.$getCssUnit(this.height);
  },
  methods: {
    getIframeDom(){
      return this.$refs.iframe;
    }
  },
};
</script>

<style scoped>
.hm-iframe {
  width: v-bind(cWidth);
  height: v-bind(cHeight);
}
</style>