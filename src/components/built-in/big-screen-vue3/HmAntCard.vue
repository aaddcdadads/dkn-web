<template>
  <div class="hm-ant-card">
    <a-card hoverable style="width: 300px">
      <img
        slot="cover"
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
      <template slot="actions" class="ant-card-actions">
        <a-icon key="setting" type="setting" />
        <a-icon key="edit" type="edit" />
        <a-icon key="ellipsis" type="ellipsis" />
      </template>
      <a-card-meta title="Card title" description="This is the description">
        <a-avatar
          slot="avatar"
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
      </a-card-meta>
    </a-card>
  </div>
</template>

<script>
export default {
  name: "HmAntCard",
  components: {},
  props: {
    /**
     * 卡片标题
     */
    title: {
      type: String,
      default: "卡片标题",
    },
    /**
     * 尺寸
     */
    size: {
      type: String,
      default: "default",
    }
  },
  data() {
    return {
    };
  },
  watch: {
    width(value) {
      this.cWidth = this.getCssUnit(value);
    }
  },
  computed: {},
  mounted() {
    this.cWidth = this.getCssUnit(this.width);
  },
  methods: {
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    },
  },
};
</script>

<style scoped>
.hm-ant-card {
  display: inline-block;
}
</style>