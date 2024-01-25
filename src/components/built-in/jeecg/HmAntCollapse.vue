<template>
  <a-collapse
    v-model:activeKey="cActiveKey"
    :defaultActiveKey="defaultActiveKey"
    :bordered="bordered"
    :accordion="accordion"
    :expandIcon="expandIcon"
    :expandIconPosition="expandIconPosition"
    :destroyInactivePanel="destroyInactivePanel"
    :disabled="disabled"
    :header="header"
    :key="key"
    :showArrow="showArrow"
    @change="onChange"
    class="block-page"
  >
    <!-- 面板头内容 -->
    <!-- <slot name="header"></slot> -->
    <!-- 自定义渲染每个面板右上角的内容 -->
    <!-- <slot name="extra"></slot> -->
    <a-collapse-panel v-for="(item,index) in panels" :key="index" :header="item.value" :forceRender="forceRender">
      <div class="collapse-slot">
        <slot :name="`collapse-slot-${index}`">
          <div class="hm-slot" :data-slot-name="`collapse-slot-${index}`">
            <div class="sortable-list"></div>
          </div>
        </slot>
      </div>
    </a-collapse-panel>
  </a-collapse>
</template>

<script>
// import { Collapse } from "ant-design-vue";

export default {
  name: "HmAntCollapse",
  props: {
    /**
     * 数据
     */
    panels: {
      type: Array,
      default: function() {
        return [
          {
            value: "周星星"
          },
          {
            value: "周星星"
          },
          {
            value: "周星星"
          }
        ];
      }
    },
    /**
     * 边框
     */
    bordered: {
      type: Boolean,
      default: true
    },
    /**
     * 手风琴
     */
    accordion: {
      type: Boolean
    },
    /**
     * 面板头内容
     */
    header: {
      type: String
    },
    /**
     * 图标位置
     */
    expandIconPosition: {
      type: String
    },
    /**
     * 销毁面板
     */
    destroyInactivePanel: {
      type: Boolean
    },
    /**
     * 自定义图标
     */
    expandIcon: {
      type: Function
    },
    /**
     * tab面板的key
     */
    activeKey: {
      type: [String, Array]
    },
    /**
     * 初始化key
     */
    defaultActiveKey: {
      type: String
    },
    /**
     * 对应activeKey
     */
    key: {
      type: String
    },
    /**
     * 展示箭头
     */
    showArrow: {
      type: Boolean,
      default: true
    },
    /**
     * 渲染DOM
     */
    forceRender: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      cPanels: [
        {
          value: "周星星"
        },
        {
          value: "周星星"
        },
        {
          value: "周星星"
        }
      ],
      cActiveKey: "",
    };
  },
  watch: {
    panels(value) {
      this.cPanels = value;
    },
    activeKey(value) {
      this.cActiveKey = value;
    }
  },
  mounted() {
    this.cPanels = this.panels;
    this.cActiveKey = this.activeKey;
  },
  methods: {
    onChange: function(e) {
      this.$emit("change", e);
    }
  }
};
</script>
<style scoped>
.block-page {
  width: 100%;
}
.tab-slot {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  min-height: 150px;
}
.tab-slot > .hm-slot {
  width: 100%;
  height: 100%;
}
</style>
