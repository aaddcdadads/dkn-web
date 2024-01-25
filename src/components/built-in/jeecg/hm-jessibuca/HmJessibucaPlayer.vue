<template>
  <div class="container">
    <!--播放器容器-->
    <div :id="containerId"></div>
  </div>
</template>

<script>
import "./assets/libs/jessibuca.js";
export default {
  name: "HmJessibucaPlayer",
  props: {
    /**
     * 视频流地址
     */
    url: {
      type: String,
      default: "ws://121.199.52.240:8060/live/ACE.live.flv"
    }
  },
  watch: {
    url: {
      handler(newVal, oldVal) {
        this.reInitAndPlay();
      }
    }
  },
  data() {
    return {
      jessibucaPlayer: null,
      containerId: "webplayer_" + this.id + Date.now(),
      showOperateBtns: true,
      forceNoOffscreen: true
    };
  },
  mounted() {
    this.reInitAndPlay();
  },
  methods: {
    // 初始化播放器
    initPlayer() {
      this.jessibucaPlayer = new Jessibuca({
        container: document.getElementById(this.containerId),
        videoBuffer: 0.2, // 缓存时长
        isResize: false,
        text: "",
        loadingText: "",
        useMSE: false,
        debug: true,
        showBandwidth: true, // 显示网速
        operateBtns: {
          fullscreen: this.showOperateBtns,
          screenshot: this.showOperateBtns,
          play: this.showOperateBtns,
          audio: false,
          recorder: false
        },
        forceNoOffscreen: this.forceNoOffscreen,
        isNotMute: false
      });
    },
    // 播放
    play() {
      this.jessibucaPlayer.play(this.url);
    },
    //播放器重新初始化播放
    reInitAndPlay() {
      if (this.jessibucaPlayer) {
        this.pauseVideoStreamAndDestoryPlayer();
      }
      this.initPlayer();
      this.play();
    },
    /**
     * 暂停流播发并销毁播放器
     */
    pauseVideoStreamAndDestoryPlayer() {
      this.jessibucaPlayer.pause();
      this.jessibucaPlayer.destroy();
    },
    // 视频截图功能
    videoScreenShot() {
      this.jessibucaPlayer.screenshot();
    },
    // 录屏
    videoRecord() {
      const time = new Date().getTime();
      this.jessibucaPlayer.startRecord(time, this.recordType);
    },
    // 全屏
    videoFullScreen() {
      this.jessibucaPlayer.setFullscreen(true);
    }
  },
  beforeUnmount() {
    this.pauseVideoStreamAndDestoryPlayer();
  }
};
</script>

<style scoped>
.container {
  background: rgba(13, 14, 27, 0.7);
  height: 100vh;
}
.play-url {
  margin-top: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.play-url input {
  width: 100%;
  height: 24px;
  padding: 0 10px;
}

.btn {
  margin-left: 15px;
  padding: 3px 8px;
  border-radius: 4px;
  background-color: #666;
  color: #fff;
  flex-shrink: 0;
}
</style>
