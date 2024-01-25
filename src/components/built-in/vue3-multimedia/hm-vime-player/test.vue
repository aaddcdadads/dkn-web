<template>
  <div>
    <Index :src="src"></Index>
    <a-button type="info" @click="onChange">切换视频链接</a-button>
  </div>
</template>
<script>
// 官方文档https://vime-js.com/
import Index from "/@/components/built-in/vue3-multimedia/hm-vime-player/index.vue";
export default {
  components: { Index },
  data() {
    return {
      src: "https://media.vimejs.com/720p.mp4",
      state:true
    };
  },
  methods:{
    onChange(){
        let self = this;
        self.state = !self.state;
        const list = {
            src: "https://media.vimejs.com/720p.mp4",
            newSrc:
                "http://nusep.web.dev.haomo-tech.com/science-video/63b8c57d6c9245f2a69617bb7d0160a7.mp4",
        }
        let index;
        index = self.state ? 'src' : 'newSrc';
        self.src = list[index];
    }
  }
};
</script>