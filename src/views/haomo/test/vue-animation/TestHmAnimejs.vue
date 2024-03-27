<template>
  <div>
    <a-button @click="replay">重放</a-button>

    <HmAnimejs ref="default"></HmAnimejs>

    <HmAnimejs ref="slot" :option="option">
      <a-button>插槽按钮</a-button>
    </HmAnimejs>

    <HmAnimejs ref="timeline" 
      :timeline-option="timelineOption" 
      :timeline-children="timelineChildren"
      @finished="onTimelineFinished">
      <div class="el square"></div>
      <div class="el circle"></div>
      <div class="el triangle"></div>
    </HmAnimejs>
  </div>
</template>

<script>
import HmAnimejs from '/@/components/built-in/vue-animation/HmAnimejs.vue'
export default {
  components: {
    HmAnimejs
  },
  data(){
    return{
      option: {
        targets: '.hm-animejs .ant-btn',
        translateX: 150
      },
      timelineOption: {
        easing: 'easeOutExpo',
        duration: 750
      },
      timelineChildren: [
        {
          targets: '.el.square',
          translateX: 250,
        }, {
          targets: '.el.circle',
          translateX: 250,
        }, {
          targets: '.el.triangle',
          translateX: 250,
        }
      ]
    }
  },
  methods: {
    replay() {
      this.$refs.default.animeInstance.play();
      this.$refs.slot.animeInstance.play();
      this.$refs.timeline.animeInstance.play();

      let anime = this.$refs.default.anime;
      console.log(`this.$refs.default.anime: `, anime);
      anime({
        targets: '.hm-animejs .ant-btn',
        translateX: 150
      })
    },
    onTimelineFinished(animeInstance) {
      console.log(`onTimelineFinished: `, animeInstance);
    }
  }
}
</script>

<style lang="less" scope>
.square {
  width: 28px;
  height: 28px;
  background-color: #FF4B4B;
}
.circle {
  width: 28px;
  height: 28px;
  background-color: #FF4B4B;
  border-radius: 50%;
}
.triangle {
  width: 28px;
  height: 28px;
  pointer-events: none;
  color: #FF4B4B;
  position: relative;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 14px 24px 14px;
  border-color: transparent transparent currentColor transparent;
}
</style>