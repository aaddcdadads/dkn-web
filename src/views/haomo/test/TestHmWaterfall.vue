<template>
  <div class="contain">
    <hm-waterfall></hm-waterfall>
    <hm-waterfall
      ref="test"
      :list="test.list"
      :url="test.url"
      :params="test.params"
      :waterfallOption="test.waterfallOption"
    >
      <template #default="{ item }">
        <div class="text-div">
          <a-image :src="item"></a-image>
        </div>
      </template>
    </hm-waterfall>
  </div>
</template>
<script>
import HmWaterfall from "/@/components/built-in/layout/HmWaterfall.vue";
export default {
  name: "TestHmWaterfall",
  data() {
    return {
      test: {
        list: [
          "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
          "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random",
          "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random",
          "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random",
        ],
        url: "",
        params: {},
        waterfallOption: {
          column: 2,
          lineSpace: 10,
          rowSpace: 20,
        },
      },
    };
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.contain{
  width: 100%;
  height: 100%;
}
.text-div {
  border: 1px solid purple;
}
</style>
