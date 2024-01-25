<template>
  <div class="outBox">
    <div class="contentBox">
      <div class="listBox" v-show="index<cSize" v-for="(item, index) in cVideoList" :key="index"
        @click="onClick(item, index)">
        <video :id="item.id" :ref="item.id" class="video" controls :autoplay="autoplay" @play="onPlay(item,index)"
          @pause="onPause(item,index)">
          <source v-if="isVideoType(item.videoSrc, 'mp4')" :src="item.videoSrc" type="video/mp4" />
          <source v-if="isVideoType(item.videoSrc, 'ogg')" :src="item.videoSrc" type="video/ogg" />
          <source v-if="isVideoType(item.videoSrc, 'webm')" :src="item.videoSrc" type="video/webm" />
          <source v-if="isVideoType(item.videoSrc, 'm3u8')" :src="item.videoSrc" type="application/x-mpegURL" />
        </video>
        <text class="textRemark">{{ item.videoText }}</text>
      </div>
    </div>
  </div>
</template>

<script>
import videojs from 'video.js';
import "video.js/dist/video-js.css"

export default {
  name:"HmAntVideo",
  props: {
    /**
     * 自动播放
     */
    autoplay: {
      type: Boolean,
      default: false
    },
    /**
    * 数据项
    */
    videoList: {
      type: Array,
      default: function () {
        return [
          {
            id: 1,
            videoSrc: "https://en-zo.dev/vue3-player-video.mp4",
            videoText: "通道一",
            videoIp: "192.168.3.101",
          },
          {
            id: 2,
            videoSrc:
              "https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4",
            videoText: "通道二",
            videoIp: "192.168.3.102",
          },
          {
            id: 3,
            videoSrc: "https://en-zo.dev/vue3-player-video.mp4",
            videoText: "通道三",
            videoIp: "192.168.3.101",
          },
          {
            id: 4,
            videoSrc: "https://en-zo.dev/vue3-player-video.mp4",
            videoText: "通道四",
            videoIp: "192.168.3.101",
          },
          {
            id: 5,
            videoSrc: "https://en-zo.dev/vue3-player-video.mp4",
            videoText: "通道五",
            videoIp: "192.168.3.101",
          },
        ];
      },
    },
    /**
     * 每页条数
     */
    size: {
      type: Number,
      default: 9
    }
  },
  watch: {
    videoList: {
      handler: function (value, oldValue) {
        this.cVideoList = value;
      },
      deep: true,
    },
    size(value) {
      this.cSize = value;
    }
  },
  mounted() {
    this.cVideoList = this.videoList;
    this.cSize = this.size;
    for (var fre = 1; this.cVideoList.length < this.cSize; fre++) {
      let errorList = {
        id: 'error',
        videoSrc: null,
        videoText: "无信号",
        videoIp: null
      }
      this.cVideoList.push(errorList);
    }
    this.getSize(this.cSize);
  },
  data() {
    return {
      cVideoList: [],
      cSize: 1,
      cWidth: "100%",
      cHeight: "100%"
    }
  },
  methods: {
    isVideoType(src, type) {
      return this.getSuffix(src) == type;
    },
    getSuffix(src) {
      src = src || '.';
      let split = src.split('.')
      return split[split.length - 1];
    },
    getSize(e) {
      var sqrt = Math.sqrt(e);
      var result = (100 / sqrt).toFixed(1);
      this.cWidth = "calc(" + result + "%)";
      this.cHeight = "calc(" + result + "%)";
    },
    onClick: function (item, index) {
      this.$emit("onClick", item, index);
    },
    onPlay(e, index) {
      this.$emit("onPlay", e, index);
    },
    onPause(e, index) {
      this.$emit("onPause", e, index);
    },
  }
}
</script>
<style scoped>
.outBox {
  width: 100%;
  height: 100%;
}

.contentBox {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

}

.listBox {
  width: v-bind(cWidth);
  height: v-bind(cHeight);
  box-sizing: border-box;
  border: 5px solid rgb(0, 0, 0, 0.5);
  display: inline-block;
  background-color: rgb(46, 45, 45);
  position: relative;
}

.video {
  width: 100%;
  height: 100%;
}

.textRemark {
  position: absolute;
  left: 0px;
  top: 0px;
  line-height: 18px;
  padding-left: 12px;
  color: antiquewhite;
}
</style>