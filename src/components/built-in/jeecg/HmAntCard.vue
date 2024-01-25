<template>
  <a-card
    :headStyle="headStyle"
    :bodyStyle="bodyStyle"
    :bordered="bordered"
    :extra="extra"
    :hoverable="hoverable"
    :loading="loading"
    :size="size"
    :type="type == '默认' ? '' : type"
    :title="title"
    @tabChange="(key) => onTabChange(key, 'key')"
    class="card-class"
  >
    <slot />
    <!-- 卡片操作组 -->
    <!-- <slot name="actions">
    {{title}}
  </slot> -->
    <!-- 卡片封面 -->
    <slot name="cover"></slot>
    <!-- 右上角操作区域 -->
    <!-- <slot name="extra"></slot> -->
    <template #extra>
      <a href="#"></a>
      <!--<a href="#">more</a>-->
    </template>
    <!-- tab bar上额外的元素 -->
    <slot name="tabBarExtraContent"></slot>
    <!-- 卡片标题 -->
    <slot name="title"></slot>
    <!-- 描述内容 -->
    <slot name="description"></slot>
    <!-- 头像/图标 -->
    <slot name="avatar"></slot>
  </a-card>
</template>

<script>
export default {
  name: "HmAntCard",
  props: {
    /**
     * 类型
     * @type Enum
     * @default 默认
     * @options ["默认","inner"]
     */
    type: {
      type: String,
    },
    /**
     * 标题
     */
    title: {
      type: String,
      default: "Default size card",
    },
    /**
     * 操作区域
     */
    extra: {
      type: String, //string|slot
    },
    /**
     * crad尺寸
     * @type Enum
     * @default small
     * @options ["default","small"]
     */
    size: {
      type: String,
    },
    /**
     * 边框开关
     */
    bordered: {
      type: Boolean,
      default: true,
    },
    /**
     * 加载样式开关
     */
    loading: {
      type: Boolean,
    },
    /**
     * 获焦浮动开关
     */
    hoverable: {
      type: Boolean,
    },
    /**
     * 标题样式
     */
    headStyle: {
      type: Object,
    },
    /**
     * 内容样式
     */
    bodyStyle: {
      type: Object,
    },
  },
  methods: {
    onTabChange: function (e) {
      this.$emit("tabChange", e);
    },
  },
};
</script>

<style>
.card-class {
  width: 100%;
}
</style>