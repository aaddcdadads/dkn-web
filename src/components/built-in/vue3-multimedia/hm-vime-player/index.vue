<template>
  <div class="HmVimeVideo" :style="{width:width,height:height,aspectRatio:aspectRatio}">
    <vm-player ref="player" autoplay playsinline controls>
      <vm-video
        :autoPiP="cOptions['autoPiP']"
        :controlsList="cOptions['controlsList']"
        :cross-origin="cOptions['crossOrigin']"
        :disablePiP="cOptions['disablePiP']"
        :disableRemotePlayback="cOptions['disableRemotePlayback']"
        :media-title="cOptions['mediaTitle']"
        :poster="cOptions['poster']">
        <source :data-src="cSrc" type="video/mp4" />
        <track
          v-for="(track, index) in cTrackList"
          :key="index"
          :default="index == 0"
          :kind="track.kind"
          :src="track.src"
          :srclang="track.srclang"
          :label="track.label"
        />
      </vm-video>
    </vm-player>
  </div>
</template>
<script>
export default {
    name:"HmVimePlayer",
  props: {
    /**
     * 视频网址
     */
    src: {
      type: String,
      default:
        "https://media.vimejs.com/720p.mp4",
    },
    /**
     * 视频配置
     */
    options: {
      type: Object,
      default: function () {
        return {
          autoPiP: true, //自动切换画中画
          controlsList: "",
          crossOrigin: "anonymous", // 是否使用CORS来获取相关图像 ["","anonymous","use-credentials"]
          poster: "https://media.vimejs.com/poster.png", // 封面图
          disablePiP: false, // 禁用画中画
          disableRemotePlayback: false, // 是否禁用使用有线和无线技术连接的设备中的远程播放功能
          mediaTitle: "标题",
        };
      },
    },
    /**
     * 字幕列表
     */
    trackList: {
      type: Array,
      default: function () {
        return [
          {
            kind: "subtitles",
            src: "https://media.vimejs.com/subs/english.vtt",
            srclang: "en",
            label: "English",
          },
          {
            kind: "subtitles",
            src: "https://media.vimejs.com/subs/spanish.vtt",
            srclang: "es",
            label: "Spanish",
          },
        ];
      },
    },
    /**
     * 宽度
     */
    width:{
        type:String,
        default:"640px"
    },
    /**
     * 高度
     */
    height:{
        type:String,
        default:""
    },
    /**
     * 宽高比
     */
    aspectRatio:{
        type:String,
        default:"16 / 9"
    }
  },
  data() {
    return {
      player:null,
      cSrc: "",
      cOptions: {
        autoPiP: undefined, //自动切换画中画
        controlsList: undefined,
        crossOrigin: undefined, // 是否使用CORS来获取相关图像 ["","anonymous","use-credentials"]
        poster: undefined,
        disablePiP: undefined, // 禁用画中画
        disableRemotePlayback: undefined, // 是否禁用使用有线和无线技术连接的设备中的远程播放功能
        mediaTitle: undefined,
        preload: "metadata",
      },
      cTrackList: [],
    };
  },
  async created() {
    const vimeModule = await import(
      "https://cdn.jsdelivr.net/npm/@vime/core@^5/dist/vime/vime.esm.js"
    );
  },
  watch:{
    src(value){
       this.initPlay(); 
    },
    options:{
        handler:function(value,oldValue){
            this.cOptions = value;
        },
        deep:true
    },
    trackList:{
        handler:function(value,oldValue){
            this.cTrackList = value;
        },
        deep:true
    }
  },
  mounted() {
    this.initPlay();
  },
  methods:{
    initPlay(){
        this.cSrc = this.src;
        this.cOptions = this.options;
        this.cTrackList = this.trackList;
        this.player = this.$refs.player;
    }
  }
};
</script>
<style>
.HmVimeVideo {
  width: 100%;
  height:100%;
}
</style>