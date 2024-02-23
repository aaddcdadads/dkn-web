<template>
  <div class="container">
    <!--播放器容器-->
    <div id="SkeyeWebPlayer"></div>
  </div>
</template>

<script>

export default {
  props: {
   /**
     * 视频流地址
     */
    url: {
      type: String,
      default: () => {
        return "ws://192.168.202.164:18080/live/192.168.1.18.live.flv";
      }
    }
  },
  data() {
    return {
      player: null
    };
  },
  mounted() {
    this.initPlayer();
    this.play() 
  },
  methods: {
    // 初始化播放器
    initPlayer() {
      // new WebMediaPlayer（url,domId,callback,options）
      this.player = new WebMediaPlayer("", `SkeyeWebPlayer`, this.callbackFunc, {
        cbUserPtr: this,
        decodeType: "soft"
      });
      //自动播放
    },
    // 播放
    play() {
      if (this.player) {
        this.player.destroy();
      }

      this.initPlayer();
      this.player.play(this.url, 1, 0);
    },
    // 回调
    callbackFunc(cbType, cbParams) {
      console.log(cbType, cbParams);
    }
  }
};
</script>

<style scoped>
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
