<template>
  <hm-loop :value="data">
    <template #default="{ item }">
      <hm-ant-button
        :size="item.size"
        :plain="item.plain"
        :type="item.type"
        :disabled="item.disabled"
      >
        {{ item.text }}
      </hm-ant-button>
    </template>
  </hm-loop>
</template>

<script>
import HmAntButton from "@/components/built-in/jeecg/HmAntButton.vue";
import HmLoop from "@/components/built-in/layout/HmLoop.vue";

export default {
  components: { 
    HmAntButton,
    HmLoop 
  },
  data() {
    return {
      data: [{
        size: 'mini',
        plain: false,
        type: 'primary',
        disabled: false,
        shape: 'square',
        text: '按钮'
      }, {
        size: 'default',
        plain: false,
        type: 'warn',
        disabled: false,
        shape: 'square',
        text: '按钮'
      }, {
        size: 'mini',
        plain: true,
        type: 'default',
        disabled: true,
        shape: 'square',
        text: '按钮'
      }],
    };
  },
  methods: {
  },
};
</script>

<style lang="less">
</style>
