<template>
  <div class="split-panes-div">
    <splitpanes
      class="default-theme"
      :horizontal="option.horizontal"
      :push-other-panes="option.pushOtherPanes"
      :dbl-click-splitter="option.dblClickSplitter"
      :rtl="option.rtl"
      :first-splitter="option.firstSplitter"
      @resize="getMethod(option.events.resize)"
      @resized="getMethod(option.events.resized)"
      @pane-maximize="getMethod(option.events.paneMaximize)"
      @pane-click="getMethod(option.events.paneClick)"
      @ready="getMethod(option.events.ready)"
      @splitter-click="getMethod(option.events.splitterClick)"
      @pane-add="getMethod(option.events.paneAdd)"
      @pane-remove="getMethod(option.events.paneRemove)"
    >
      <pane
        v-for="(pane, index) in option.panes"
        :key="index"
        :style="pane.style"
        :max-size="pane.maxSize"
        :min-size="pane.minSize"
        :size="pane.size"
      >
        <div class="splitpanes-slot" v-if="!pane.children">
          <slot :name="`splitpanes-slot-${pane.name}`">
            <div
              class="hm-slot"
              :data-slot-name="`splitpanes-slot-${pane.name}`"
            >
              <div class="sortable-list"></div>
            </div>
          </slot>
        </div>
      </pane>
    </splitpanes>
  </div>
</template>

<script>
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";

export default {
  name: "HmSimpleSplitPanes",
  components: { Splitpanes, Pane },
  props: {
    /**
     * 高度
     */
     height: {
      type: String,
      default: "200",
    },
    /**
     * 宽度
     */
    width: {
      type: String,
      default: "200",
    },
    /**
     * option数据
     */
    option: {
      type: Object,
      default: function () {
        return {
          horizontal: false,
          pushOtherPanes: false,
          dblClickSplitter: true,
          rtl: false,
          firstSplitter: false,
          events: {
            resize: function (e) {},
            resized: function (e) {},
            paneMaximize: function (e) {},
            paneClick: function (e) {},
            ready: function (e) {},
            splitterClick: function (e) {},
            paneAdd: function (e) {},
            paneRemove: function (e) {},
          },
          panes: [
            {
              size: 20,
              minSize: 20,
              maxSize: 100,
              name: "left",
              style: {
                borderTop: "1px solid #D1D1D1",
                borderBottom: "1px solid #D1D1D1",
                borderLeft: "1px solid #D1D1D1",
                borderRight: 'none',
                backgroundColor: "#F7F7F8",
                marginRight: '-1px'
              }
            },
            {
              size: 20,
              minSize: 10,
              maxSize: 100,
              name: "middle",
              style: {
                borderTop: "1px solid #D1D1D1",
                borderBottom: "1px solid #D1D1D1",
                borderLeft: "none",
                borderRight: 'none',
                backgroundColor: "#FFFFFF",
                marginRight: '-1px'
              }
            },
            {
              size: 20,
              minSize: 10,
              maxSize: 100,
              name: "right",
              style: {
                borderTop: "1px solid #D1D1D1",
                borderBottom: "1px solid #D1D1D1",
                borderLeft: "none",
                borderRight: '1px solid #D1D1D1',
                backgroundColor: "#F7F7F8",
                marginRight: '-1px'
              }
            },
          ],
        };
      },
    }
  },
  data() {
    return {
      cHeight: "",
      cWidth: "",
    };
  },
  mounted() {
    this.cHeight = this.$getCssUnit(this.height);
    this.cWidth = this.$getCssUnit(this.width);
  },
  watch: {
    height(value) {
      this.cHeight = this.$getCssUnit(value);
    },
    width(value) {
      this.cWidth = this.$getCssUnit(value);
    },
  },
  methods: {
    getMethod(method) {
      if (typeof method == "function") {
        return method;
      }
      if (
        typeof method === "string" &&
        method.trim().indexOf("function") === 0
      ) {
        return eval(`(${method})`);
      }
      return function () {};
    },
  },
};
</script>

<style scoped>
.split-panes-div {
  height: v-bind(cHeight);
  width: v-bind(cWidth);
  min-height: 200px;
  min-width: 200px;
  /* border: 1px solid #d1d1d1; */
}
.splitpanes-slot{
  display: block !important;
}

.splitpanes__pane {
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* font-family: Helvetica, Arial, sans-serif; */
  /* color: rgba(255, 255, 255, 0.6); */
  /* font-size: 5em; */
}
.split-panes-div :deep(.splitpanes__splitter) {
  background-color: rgba(101,109,119,0.16);
  position: relative;
  width: 2px;
}
.split-panes-div :deep(.splitpanes__splitter:before) {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  z-index: 1;
}
.split-panes-div :deep(.splitpanes--vertical > .splitpanes__splitter:before) {
  left: -8px;
  right: -8px;
  height: 100%;
}
.split-panes-div :deep(.splitpanes--horizontal > .splitpanes__splitter:before) {
  top: -8px;
  bottom: -8px;
  width: 100%;
}
</style>
