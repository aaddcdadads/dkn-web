<template>
  <div ref="anime" class="hm-animejs">
    <slot>
      <div class="demo-target"></div>
    </slot>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';
import { cloneDeep } from 'lodash';

export default {
  name: "HmAnimejs",
  components: {
  },
  props: {
    /**
     * 动画选项
     */
    option: {
      type: Object,
      default: function() {
        return {
          targets: '.hm-animejs .demo-target',
          translateX: 150
        }
      }
    },
    /**
     * 时间线动画
     * @desc 如果存在时间线动画选项，那么option失效
     */
    timelineOption: {
      type: Object,
      default: function() {
        return null
      }
    },
    /**
     * 时间序列配置
     */
    timelineChildren: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {
      // anime类
      anime: anime,
      // anime动画对象
      animeInst: null
    };
  },
  watch: {
    option: {
      handler: function() {
        this.initAnime();
      },
      deep: true
    },
    timelineOption: {
      handler: function() {
        this.initAnime();
      },
      deep: true
    },
    timelineChildren: {
      handler: function() {
        this.initAnime();
      },
      deep: true
    }
  },
  mounted() {
    this.initAnime();
  },
  methods: {
    initAnime() {
      let self = this;
      if (self.timelineOption) {
        self.animeInst = anime.timeline(self.timelineOption);
        self.timelineChildren.forEach(childOption => {
          self.animeInst.add(childOption);
        })
      } else {
        self.animeInst = anime(self.option);
      }

      self.animeInst && self.animeInst.finished.then(self.onFinish);
    },

    onFinish() {
      this.$emit('finished', this.animeInst)
    }
  },
};
</script>
<style lang="less" scoped>
.demo-target {
  width: 28px;
  height: 28px;
  background-color: #FF4B4B;
}
</style>
