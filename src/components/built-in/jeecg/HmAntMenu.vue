<template>
  <a-menu
    :mode="mode"
    :openKeys="openKeys"
    selectable
    :selectedKeys="selectedKeys"
    :subMenuCloseDelay="subMenuCloseDelay"
    :subMenuOpenDelay="subMenuOpenDelay"
    :theme="theme"
    @click="click"
    @deselect="deselect"
    @openChange="openChange"
    @select="select"
  >
    <a-sub-menu v-for="(item, index) in menuList" :key="index">
      <template #title>
        <span class="submenu-title-wrapper">
          <!-- <setting-outlined /> -->
          <i :class="`fa ${item.icon}`"></i>
          {{ item.title }}
        </span>
      </template>
      <a-menu-item-group
        :title="submenuTitleList.submenuTitle"
        v-for="submenuTitleList in item.child"
        :key="submenuTitleList.submenuTitle"
      >
        <a-menu-item
          v-for="submenuList in submenuTitleList.submenuValue"
          :key="submenuList.key"
          >{{ submenuList.submenu }}</a-menu-item
        >
      </a-menu-item-group>
    </a-sub-menu>
  </a-menu>
</template>

<script>
export default {
  name: "HmAntMenu",
  data() {
    return {};
  },
  props: {
    /**
     * 菜单类型
     * @type Enum
     * @default horizontal
     * @options ["horizontal","inline"]
     */
    mode: {
      type: String,
    },
    /**
     * 菜单结构
     */
    menuList: {
      type: Array,
      default: function () {
        return [
          {
            title: "Navigation Three - Submenu",
            icon: "fa-address-book-o",
            child: [
              {
                submenuTitle: "title1",
                submenuValue: [
                  {
                    key: "setting:1",
                    submenu: "Option 1",
                  },
                  {
                    key: "setting:2",
                    submenu: "Option 2",
                  },
                ],
              },
              {
                submenuTitle: "title2",
                submenuValue: [
                  {
                    key: "setting:4",
                    submenu: "Option 4",
                  },
                  {
                    key: "setting:3",
                    submenu: "Option 3",
                  },
                ],
              },
            ],
          },
          {
            title: "Navigation Three - Submenu2",
            icon: "fa-envelope-open",
            child: [
              {
                submenuTitle: "title3",
                submenuValue: [
                  {
                    key: "setting:3",
                    submenu: "Option 3",
                  },
                  {
                    key: "setting:4",
                    submenu: "Option 4",
                  },
                ],
              },
              {
                submenuTitle: "title3",
                submenuValue: [
                  {
                    key: "setting:5",
                    submenu: "Option 5",
                  },
                  {
                    key: "setting:6",
                    submenu: "Option 6",
                  },
                ],
              },
            ],
          },
        ];
      },
    },
    /**
     * 主题颜色
     * @type Enum
     * @default light
     * @options ["light","dark"]
     */
    theme: {
      type: String,
    },
    /**
     * 开启延时
     */
    subMenuOpenDelay: {
      type: Number,
      default: 0,
    },
    /**
     * 关闭延时
     */
    subMenuCloseDelay: {
      type: Number,
      default: 0.1,
    },
  },
  methods: {
    click: function (e) {
      this.$emit("click", e);
    },
    deselect: function (e) {
      this.$emit("deselect", e);
    },
    openChange: function (e) {
      this.$emit("openChange", e);
    },
    select: function (e) {
      this.$emit("select", e);
    },
  },
};
</script>

<style scoped>
</style>