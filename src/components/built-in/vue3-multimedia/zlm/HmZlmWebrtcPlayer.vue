<template>
  <div class="container">
    <!--播放器容器-->
    <video id="video" controls 
      :autoplay="autoplay"
      :muted="muted" style="text-align: left">
      你的浏览器太旧，不支持HTML5视频播放
    </video>
  </div>
</template>

<script>
import ZLMRTCClient from "./assets/ZLMRTCClient.js";
export default {
  name: "HmZlmWebrtcPlayer",
  props: {
    /**
     * 宽度
     */
    width: {
      type: String,
      default: "600",
    },
    /**
     * 高度
     */
    height: {
      type: String,
      default: "400",
    },
    /**
     * 分辨率
     * @type Enum
     * @options ["1920x1080", "3840x2160", "1280x720", "800x600", "640x480", "320x240"]
     */
    resolution: {
      type: String,
      default: "1920x1080",
    },
    /**
     * 视频流地址
     */
    url: {
      type: String,
      default:
        "https://192.168.202.164:18443/index/api/webrtc?app=live&stream=192.168.1.18&type=play",
    },
    /**
     * ZLM配置
     */
    zlmOption: {
      type: Object,
      default: () => {
        return {
          debug: true,
        };
      },
    },
    /**
     * 是否自动播放
     */
    autoplay: {
      type: Boolean,
      default: true
    },
    /**
     * 是否静音
     */
    muted: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      cWidth: "200px",
      cHeight: "200px",
      cUrl: "https://192.168.202.164:18443/index/api/webrtc?app=live&stream=192.168.1.18&type=play",
      player: null,
      containerId: "webplayer_" + this.id + Date.now(),
    };
  },
  watch: {
    width(value) {
      this.cWidth = this.$getCssUnit(value);
    },
    height(value) {
      this.cHeight = this.$getCssUnit(value);
    },
    url(value) {
      // @TODO: 停止原来的视频
      this.cUrl = value;
      // @TODO: 开启新视频的播放
    },
  },
  mounted() {
    this.cWidth = this.$getCssUnit(this.width);
    this.cHeight = this.$getCssUnit(this.height);
    this.play();
  },
  methods: {
    /**
     * 获取分辨率宽度
     */
    getResolutionW() {
      return parseInt(this.resolution.split("x")[0]);
    },
    /**
     * 获取分辨率高度
     */
    getResolutionH() {
      return parseInt(this.resolution.split("x")[1]);
    },
    // 播放
    play() {
      let self = this;
      if (this.player) {
        this.player.destroy();
      }

      this.player = new ZLMRTCClient.Endpoint(
        Object.assign(
          {
            element: document.getElementById("video"), // video 标签
            debug: true, // 是否打印日志
            zlmsdpUrl: this.url, //流地址
            simulcast: false,
            useCamera: false,
            audioEnable: true,
            videoEnable: true,
            recvOnly: true,
            resolution: { w: this.getResolutionW(), h: this.getResolutionH() },
            usedatachannel: false,
          },
          this.zlmOption
        )
      );
      console.log(`this.player: `, this.player);

      this.player.on(
        ZLMRTCClient.Events.WEBRTC_ICE_CANDIDATE_ERROR,
        function (event) {
          // ICE 协商出错
          console.log("ICE 协商出错");
          self.$emit('webrtc-ice-candidate-error', {event, url});
        }
      );

      this.player.on(
        ZLMRTCClient.Events.WEBRTC_ON_REMOTE_STREAMS,
        function (event) {
          //获取到了远端流，可以播放
          console.log("播放成功", event.streams);
          self.$emit('webrtc-on-remote-streams', {event, url});
        }
      );

      this.player.on(
        ZLMRTCClient.Events.WEBRTC_OFFER_ANWSER_EXCHANGE_FAILED,
        function (event) {
          // offer anwser 交换失败
          console.log("offer anwser 交换失败", event);
          self.$emit('webrtc-offer-answer-exchange-failed', {event, url});
          stop();
        }
      );

      this.player.on(ZLMRTCClient.Events.CAPTURE_STREAM_FAILED, function (stream) {
        // 获取本地流失败

        console.log("获取本地流失败");
        self.$emit('capture-stream-failed', {stream, url});
      });

      this.player.on(
        ZLMRTCClient.Events.WEBRTC_ON_CONNECTION_STATE_CHANGE,
        function (state) {
          // RTC 状态变化 ,详情参考 https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/connectionState
          console.log("当前状态==>", state);
          self.$emit('webrtc-on-connection-state-change', {state, url});
        }
      );

      this.player.on(
        ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_OPEN,
        function (event) {
          console.log("rtc datachannel 打开 :", event);
          self.$emit('webrtc-on-data-channel-open', {event, url});
        }
      );

      this.player.on(
        ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_ERR,
        function (event) {
          console.log("rtc datachannel 错误 :", event);
          self.$emit('webrtc-on-data-channel-err', {event, url});
        }
      );

      this.player.on(
        ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_CLOSE,
        function (event) {
          console.log("rtc datachannel 关闭 :", event);
          self.$emit('webrtc-on-data-channel-close', {event, url});
        }
      );
    },
    stop() {
      if (this.player) {
        this.player.close();
        this.player = null;
        var remote = document.getElementById("video");
        if (remote) {
          remote.srcObject = null;
          remote.load();
        }
      }
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
  },
  beforeUnmount() {
    this.player.destroy();
  },
};
</script>

<style scoped>
.contaner {
  width: v-bind(cWidth);
  height: v-bind(cHeight);
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
