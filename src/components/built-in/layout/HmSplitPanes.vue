<template>
  <div class="split-panes-div">
    <splitpanes
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
        :style="{
          borderTop:
            borderStyleOption[`paneLayer${index + 1}`][`borderStyle`][0],
          borderBottom:
            borderStyleOption[`paneLayer${index + 1}`][`borderStyle`][1],
          borderLeft:
            borderStyleOption[`paneLayer${index + 1}`][`borderStyle`][2],
          borderRight:
            borderStyleOption[`paneLayer${index + 1}`][`borderStyle`][3],
          backgroundColor: backgroundOption[`paneLayer${index + 1}`]['bgc'],
          marginRight:'-1px'
        }"
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
        <splitpanes
          v-if="pane.children"
          :horizontal="pane.children.horizontal"
          :push-other-panes="pane.children.pushOtherPanes"
          :dbl-click-splitter="pane.children.dblClickSplitter"
          :rtl="pane.children.rtl"
          :first-splitter="pane.children.firstSplitter"
          @resize="getMethod(pane.children.events.resize)"
          @resized="getMethod(pane.children.events.resized)"
          @pane-maximize="getMethod(pane.children.events.paneMaximize)"
          @pane-click="getMethod(pane.children.events.paneClick)"
          @ready="getMethod(pane.children.events.ready)"
          @splitter-click="getMethod(pane.children.events.splitterClick)"
          @pane-add="getMethod(pane.children.events.paneAdd)"
          @pane-remove="getMethod(pane.children.events.paneRemove)"
        >
          <pane
            v-for="(paneChild, indexChild) in pane.children.panes"
            :key="indexChild"
            :style="{
              borderTop:
                borderStyleOption[`paneLayer${indexChild + 1}`]['children'][
                  indexChild
                ][0],
              borderBottom:
                borderStyleOption[`paneLayer${indexChild + 1}`]['children'][
                  indexChild
                ][1],
              borderLeft:
                borderStyleOption[`paneLayer${indexChild + 1}`]['children'][
                  indexChild
                ][2],
              borderRight:
                borderStyleOption[`paneLayer${indexChild + 1}`]['children'][
                  indexChild
                ][3],
              backgroundColor:
                backgroundOption[`paneLayer${indexChild + 1}`]['children'][indexChild],
            }"
            :max-size="paneChild.maxSize"
            :min-size="paneChild.minSize"
            :size="paneChild.size"
          >
            <div class="splitpanes-children-slot">
              <slot :name="`splitpanes-slot-${pane.name}-${paneChild.name}`">
                <div
                  class="hm-slot"
                  :data-slot-name="`splitpanes-slot-${pane.name}-${paneChild.name}`"
                >
                  <div class="sortable-list"></div>
                </div>
              </slot>
            </div>
          </pane>
        </splitpanes>
      </pane>
    </splitpanes>
  </div>
</template>

<script>
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";

export default {
  name: "HmSplitPanes",
  components: { Splitpanes, Pane },
  props: {
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
            },
            {
              size: 20,
              minSize: 10,
              maxSize: 100,
              name: "middle",
            },
            {
              size: 20,
              minSize: 10,
              maxSize: 100,
            },
          ],
        };
      },
    },
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
     * 背景样式
     */
    backgroundOption: {
      type: Object,
      default: function () {
        return {
          paneLayer1: {
            bgc: "#F7F7F8",
            children: ["", "", ""],
          },
          paneLayer2: {
            bgc: "#FFFFFF",
            children: ["", "", ""],
          },
          paneLayer3: {
            bgc: "#F7F7F8",
            children: ["", "", ""],
          },
        };
      },
    },
    /**
     * 边框样式
     * */
    borderStyleOption: {
      type: Object,
      default: function () {
        return {
          paneLayer1: {
            borderStyle: [
              "1px solid #D1D1D1",
              "1px solid #D1D1D1",
              "1px solid #D1D1D1",
              "none",
            ],
            children: [
              //border-top bottom left right
              ["none", "none", "none", "none"],
              ["none", "none", "none", "none"],
              ["none", "none", "none", "none"],
            ],
          },
          paneLayer2: {
            borderStyle: [
              "1px solid #D1D1D1",
              "1px solid #D1D1D1",
              "none",
              "none",
            ],
            children: [
              ["none", "none", "none", "none"],
              ["none", "none", "none", "none"],
              ["none", "none", "none", "none"],
            ],
          },
          paneLayer3: {
            borderStyle: [
              "1px solid #D1D1D1",
              "1px solid #D1D1D1",
              "none",
              "1px solid #D1D1D1",
            ],
            children: [
              ["none", "none", "none", "none"],
              ["none", "none", "none", "none"],
              ["none", "none", "none", "none"],
            ],
          },
        };
      },
    },
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
