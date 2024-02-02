<template>
  <div>
    <p>水平分割</p>
    <HmSimpleSplitPanes></HmSimpleSplitPanes>
    <br/>
    <p>垂直分割</p>
    <HmSimpleSplitPanes :option="horizonData"></HmSimpleSplitPanes>
  </div>
</template>

<script>
import HmSimpleSplitPanes from '/@/components/built-in/layout/HmSimpleSplitPanes.vue'
export default {
  components: {
    HmSimpleSplitPanes
  },
  data() {
    return {
      horizonData: {
        horizontal: true,
        pushOtherPanes: false,
        dblClickSplitter: true,
        rtl: true,
        firstSplitter: true,
        events: {
          resize: function (e) { },
          resized: function (e) { },
          paneMaximize: function (e) { },
          paneClick: function (e) { },
          ready: function (e) { },
          splitterClick: function (e) { },
          paneAdd: function (e) { },
          paneRemove: function (e) { },
        },
        panes: [
          {
            size: 50,
            minSize: 10,
            name: "top",
            style: {
              borderTop: "1px solid #D1D1D1",
              borderBottom: "1px solid #D1D1D1",
              borderLeft: "1px solid #D1D1D1",
              borderRight: "1px solid #D1D1D1",
              backgroundColor: "#F7F7F8",
            }
          },
          {
            size: 50,
            minSize: 10,
            name: "bottom",
            style: {
              borderTop: "1px solid #D1D1D1",
              borderBottom: "1px solid #D1D1D1",
              borderLeft: "1px solid #D1D1D1",
              borderRight: '1px solid #D1D1D1',
              backgroundColor: "#F7F7F8",
            }
          },
        ],
      }
    }
  },
  methods: {

  }
}
</script>

<style></style>