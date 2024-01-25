<template>
  <a-popover 
    :content="contentVal" 
    :title="titleVal"
    :placement="placement"
    :mouseEnterDelay="mouseEnterDelay"
    :mouseLeaveDelay="mouseLeaveDelay"
  >
    <slot/>
    <a-button type="primary">
      Hover me
    </a-button>
  </a-popover>
</template>

<script>

export default {
  name: "HmAntPopover",
  props: {
    /**
     * 标题
     */
    title: {
      type: String,
      default:'title'
    },
    /**
     * 内容
     */
    content: {
      type: String,
      default:'content'
    },
    /**
     * 气泡框位置
     * @type Enum
     * @default top
     * @options ["top","left","right","bottom","topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"]
     */
    placement:{
      type:String
    },
    /**
     * 触发事件
     * @type Enum
     * @default 
     * @options ["显示延时","隐藏延时"] 
     */
    event:{
      type:String,
    },
  },
  
  data() {
    return {
      titleVal:'title',
      contentVal:'content',
      event:'',
      mouseEnterDelay:0,
      mouseLeaveDelay:0.1,
    };
  },
  watch:{
    title(val){
      this.titleVal = val
    },
    content(val){
      this.contentVal = val
    },
    event(val){
      this.event = val
      if (val == '显示延时'){
        this.mouseEnterDelay = 0
      } else{
        this.mouseLeaveDelay = 0.1
      }
    }
  },
  mounted(){
    this.titleVal = this.title;
    this.contentVal = this.content;
  }


};
</script>

<style scoped>
</style>