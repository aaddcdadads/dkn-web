<template>
  <hm-split-panes class="hmsplitpanestest"></hm-split-panes>

  <hm-split-panes class="hmsplitpanestest" :option="option"
    height="600" width="800"
  ></hm-split-panes>
</template>

<script>
  import HmSplitPanes from '/@/components/built-in/layout/HmSplitPanes.vue'
  import {defineComponent} from 'vue'
  export default defineComponent({
    name: "HmSplitPanesTest",
    components:{
      HmSplitPanes
    },
    data() {
      return {
        option: {
          horizontal: false,
          pushOtherPanes: true,
          dblClickSplitter: false,
          rtl: false,
          firstSplitter: false,
          events: {
            resize: function (e) { console.log("resize", e); },
            resized: function (e) { console.log("resize", e); },
            paneMaximize: function (e) { console.log("paneMaximize", e); },
            paneClick: function (e) { console.log("paneClick", e); },
            ready: function (e) { console.log("ready", e); },
            splitterClick: function (e) { console.log("splitterClick", e); },
            paneAdd: function (e) { console.log("paneAdd", e); },
            paneRemove: function (e) { console.log("paneRemove", e); },
          },
          panes: [
            {
              size: 20,
              minSize: 10,
              maxSize: 100,
              name: "left",
              children: {
                horizontal: false,
                pushOtherPanes: true,
                dblClickSplitter: true,
                rtl: false,
                firstSplitter: false,
                events: {
                  resize: function (e) { console.log("resize", e); },
                  resized: function (e) { console.log("resize", e); },
                  paneMaximize: function (e) { console.log("paneMaximize", e); },
                  paneClick: function (e) { console.log("paneClick", e); },
                  ready: function (e) { console.log("ready", e); },
                  splitterClick: function (e) { console.log("splitterClick", e); },
                  paneAdd: function (e) { console.log("paneAdd", e); },
                  paneRemove: function (e) { console.log("paneRemove", e); },
                },
                panes: [
                  {
                    size: 20,
                    minSize: 10,
                    maxSize: 1000,
                    name: "left",
                  },
                  {
                    size: 20,
                    minSize: 10,
                    maxSize: 1000,
                    name: "middle",
                  },
                  {
                    size: 20,
                    minSize: 10,
                    maxSize: 1000,
                    name: "right",
                  },
                ],
              },
            },
            {
              size: 20,
              minSize: 10,
              maxSize: 100,
              name: "middle",
              children: {
                horizontal: true,
                pushOtherPanes: true,
                dblClickSplitter: true,
                rtl: false,
                firstSplitter: false,
                events: {
                  resize: function (e) { console.log("resize", e); },
                  resized: function (e) { console.log("resize", e); },
                  paneMaximize: function (e) { console.log("paneMaximize", e); },
                  paneClick: function (e) { console.log("paneClick", e); },
                  ready: function (e) { console.log("ready", e); },
                  splitterClick: function (e) { console.log("splitterClick", e); },
                  paneAdd: function (e) { console.log("paneAdd", e); },
                  paneRemove: function (e) { console.log("paneRemove", e); },
                },
                panes: [
                  {
                    size: 20,
                    minSize: 10,
                    maxSize: 100,
                    height: "100%",
                    width: "50%",
                    name: "left",
                  },
                  {
                    size: 20,
                    minSize: 10,
                    maxSize: 100,
                    height: "100%",
                    width: "50%",
                    name: "middle",
                  },
                  {
                    size: 20,
                    minSize: 10,
                    maxSize: 100,
                    height: "100%",
                    width: "50%",
                    name: "right",
                  },
                ],
              },
            },
            {
              size: 20,
              minSize: 10,
              maxSize: 100,
              name: "right",
              children: {
                horizontal: false,
                pushOtherPanes: true,
                dblClickSplitter: false,
                rtl: false,
                firstSplitter: false,
                events: {
                  resize: function (e) { console.log("resize", e); },
                  resized: function (e) { console.log("resize", e); },
                  paneMaximize: function (e) { console.log("paneMaximize", e); },
                  paneClick: function (e) { console.log("paneClick", e); },
                  ready: function (e) { console.log("ready", e); },
                  splitterClick: function (e) { console.log("splitterClick", e); },
                  paneAdd: function (e) { console.log("paneAdd", e); },
                  paneRemove: function (e) { console.log("paneRemove", e); },
                },
                panes: [
                  {
                    size: 20,
                    minSize: 10,
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
                    name: "right",
                  },
                ],
              },
            },
          ],
        }
      }
    },
    mounted() {

    },
    updated(){
    }
  });
</script>

<style scoped>
/* .hmsplitpanestest {
  margin-bottom: 20px;
}
.hmsplitpanestest :deep(.splitpanes){
  background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
}
.hmsplitpanestest :deep(.splitpanes__pane) {
  box-shadow: 0 0 5px rgba(0, 0, 0, .2) inset;
  justify-content: center;
  align-items: center;
  display: flex;
}
.hmsplitpanestest :deep(.splitpanes--vertical > .splitpanes__splitter){
  min-width: 6px;
  background: linear-gradient(90deg, #ccc, #111);
}

.hmsplitpanestest :deep(.splitpanes--vertical > .splitpanes__splitter){
  min-height: 6px;
  background: linear-gradient(0deg, #ccc, #111);
} */
</style>