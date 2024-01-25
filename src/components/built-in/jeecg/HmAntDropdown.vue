<template>
  <a-dropdown
    :placement="placement"
    :trigger="trigger"
    v-model:visible="cVisible"
    @visibleChange="visibleChange"
    :disabled="disabled"
  >
    <a class="ant-dropdown-link" @click.prevent>
      {{ text }} <DownOutlined />
    </a>
    <template #overlay>
      <a-menu>
        <a-menu-item v-for="item in cTitleList" :key="item.key">
          <a href="javascript:;">{{ item.value }}</a>
        </a-menu-item>
      </a-menu>
    </template>
    <slot />
  </a-dropdown>
</template>

<script>
import { DownOutlined } from "@ant-design/icons-vue";
export default {
  name: "HmAntDropdown",
  components: {
    DownOutlined,
  },
  props: {
    /**
     * 占位文字
     */
    text: {
      type: String,
      default: "Hover me",
    },
    /**
     * 数据
     * @model
     */
    titleList: {
      type: Array,
      default: function () {
        return [
          {
            key: 1,
            value: "1st menu item",
          },
          {
            key: 2,
            value: "2nd menu item",
          },
          {
            key: 3,
            value: "3nd menu item",
          },
        ];
      },
    },
    /**
     * 弹出位置
     * @type Enum
     * @default bottomLeft
     * @options ["bottomLeft","bottomCenter","bottomRight","topLeft","topCenter","topRight"]
     */
    placement: {
      type: String,
    },
    /**
     * 下拉的行为
     */
    trigger: {
      type: Array,
      default: function () {
        return ["click"];
      },
    },
    /**
     * 禁用
     */
     disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      cVisible: false,
      cTitleList: [
        {
          key: 1,
          value: "1st menu item",
        },
        {
          key: 2,
          value: "2nd menu item",
        },
        {
          key: 3,
          value: "3nd menu item",
        },
      ],
    };
  },
  watch: {
    visible(value) {
      this.cVisible = value;
    },
    titleList(value) {
      this.cTitleList = value;
    },
  },
  mounted() {
    this.cTitleList = this.titleList;
  },
  methods: {
    visibleChange: function (e) {
      this.$emit("visibleChange", e);
    },
  },
};
</script>

<style scoped></style>
