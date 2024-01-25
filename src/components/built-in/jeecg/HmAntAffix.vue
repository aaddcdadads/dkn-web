<template>
  <a-affix
    :class="affixclass"
    @change="onChange"
  >
    <a-button type="primary" @click="top += 10">
      {{ text }}
      <template #icon>
        <i :class="icon"></i>
      </template>
    </a-button>
  </a-affix>
</template>

<script>
export default {
  name: "HmAntAffix",
  props: {
    /**
     * 文字
     */
    text: {
      type: String,
      default: "Affix top",
    },
    /**
     * 位置
     * @type Enum
     * @default topleft
     * @options ["topleft","topright","bottomleft","bottomright"]
     */
    affixclass: {
      type:String,
    },
    /**
     * icon图标
     * @type Icon
     */
    icon: {
      type: String,
    },
  },
  methods: {
    onChange: function (e) {
      this.$emit("change", e);
    },
  },
};
</script>

<style scoped>
  .topleft{
    position: fixed;
    top: 20px;
    left: 20px;
  }
  .topright{
    position: fixed;
    top: 20px;
    right: 20px;
  }
  .bottomleft{
    position: fixed;
    bottom: 20px;
    left: 20px;
  }
  .bottomright{
    position: fixed;
    bottom: 20px;
    right: 20px;
  }
</style>