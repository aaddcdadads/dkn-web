<template>
  <hm-split-panes
  >
    <template #splitpanes-slot-left>
      <button>AAAA</button>
      <button>AAAA</button>
      <button>AAAA</button>
    </template>

  </hm-split-panes>
</template>

<script>
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";
import HmSplitPanes from '/@/components/built-in/layout/HmSplitPanes.vue';
export default {
  name:"test",
  components:{
    Splitpanes, Pane,
    HmSplitPanes
  },

}
</script>

<style>
.split-div{
  /* border: 1px solid; */
}
.splitpanes__pane {
  /* display: flex;
  justify-content: center;
  align-items: center;
  font-family: Helvetica, Arial, sans-serif;
  color: black;
  border: 1px solid;
  font-size: 14px; */
}
</style>