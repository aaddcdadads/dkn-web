<template>
    <div>
        <HmRrwebRecord ref="hmRrwebRecord"></HmRrwebRecord>
        <HmRrwebPlayer ref="hmRrwebPlayer"></HmRrwebPlayer>
        <div>
            <button type="primary" @click="count">点击计数器</button>
        </div>
        <div>计数：{{ sum }}</div>
        <div>
            <button type="primary" @click="start">开始录屏</button>
            <button type="primary" @click="stop">停止录屏</button>
            <button type="primary" @click="play">查看回放</button>
        </div>
    </div>
</template>
  
<script>
import HmRrwebRecord from '/@/components/built-in/jeecg/haomo/rrweb/HmRrwebRecord.vue'
import HmRrwebPlayer from '/@/components/built-in/jeecg/haomo/rrweb/HmRrwebPlayer.vue'
export default {
    components: {
        HmRrwebRecord,
        HmRrwebPlayer
    },
    data() {
        return {
            sum: 0,
        }
    },
    mounted() {
        
    },
    methods: {
        count: function (e) {
            this.sum++;
            console.log(this.$refs.hmRrwebRecord.events)
        },
        start(){
            this.$refs.hmRrwebRecord.start();
        },
        stop(){
            this.$refs.hmRrwebRecord.stop();
        },
        play: function (e) {
            this.$refs.hmRrwebPlayer.cConfig.events = this.$refs.hmRrwebRecord.events;
            this.$refs.hmRrwebPlayer.play();
        }
    }
}
</script>
  
<style></style>