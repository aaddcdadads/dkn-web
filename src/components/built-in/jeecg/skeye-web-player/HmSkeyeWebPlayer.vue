<template>
  <div class="container">
    <!--播放器容器-->
    <div :id="containerId"></div>
  </div>
</template>

<script>
import "./assets/libs/skeyeWebPlayer.js";
export default {
  name: "HmSkeyeWebPlayer",
  props: {
    /**
     * 视频流地址
     */
    url: {
      type: String,
      default: "http://zlm.dev.haomo-tech.com:8000/record/1577004472436.mp4"
    },
    /**
     * 视频流解码类型 会影响cpu的使用率 auto soft
     * @type Enum
     * @options ["auto", "soft"]
     */
    decodeType: {
      type: String,
      default: "auto"
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
      player: null,
      containerId:
        "webplayer_" +
        Date.now() +
        "_" +
        Math.random()
          .toString(16)
          .slice(2)
    };
  },
  mounted() {
    this.reInitAndPlay();
  },
  methods: {
    // 初始化播放器
    initPlayer() {
      // new WebMediaPlayer（url,domId,callback,options）
      this.player = new WebMediaPlayer(
        "",
        this.containerId,
        this.callbackFunc,
        {
          cbUserPtr: this,
          decodeType: this.decodeType,
          showMode: true
        }
      );
      //自动播放
    },
    // 播放
    play() {
      this.player.play(this.url, 1, 0);
    },
    //播放器重新初始化播放
    reInitAndPlay() {
      if (this.player) {
        this.pauseVideoStreamAndDestoryPlayer();
      }
      this.initPlayer();
      this.play();
    },
    // 回调
    callbackFunc(cbType, cbParams) {
      console.log(cbType, cbParams);
    },
    // 视频截图功能
    videoScreenShot() {
      const ratio = window.devicePixelRatio || 1;
      // 获取canvas画布
      const canvas = this.player.screenCanvas.canvas;
      // 获取canvas画布上下文内容
      const ctx = canvas.getContext("2d");
      ctx.scale(ratio, ratio);
      canvas.height = this.player.h5Video.offsetHeight * ratio;
      canvas.width = this.player.h5Video.offsetWidth * ratio;
      ctx.drawImage(this.player.h5Video, 0, 0, canvas.width, canvas.height);
      this.downloadImgByaLink(canvas);
    },
    /**
     * canvas 画布
     * 通过点击a标签下载图片流
     */
    downloadImgByaLink(canvas) {
      const a = document.createElement("a");
      const event = new MouseEvent("click");
      a.download = "screen_shot";
      a.href = canvas.toDataURL("image/jpg");
      a.dispatchEvent(event);
    },
    /**
     * 暂停流播发并销毁播放器
     */
    pauseVideoStreamAndDestoryPlayer() {
      this.player.pause();
      this.player.destroy();
    }
  },
  beforeUnmount() {
    this.pauseVideoStreamAndDestoryPlayer();
  }
};
</script>

<style scoped>
.contaner {
  width: 100vw;
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
