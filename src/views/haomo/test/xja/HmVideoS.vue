<template>
  <div class="outBox">
    <div class="contentBox">
      <div class="listBox" v-for="(item, index) in cList" :key="index" @click="onClick(item, index)">
        <!-- 谷歌浏览器必须静音,才自动播放---muted:静音,controls:控件,autoplay:自动播放-->
        <video class="video" :muted="muted" :controls="controls" :autoplay="autoplay" :poster="poster"
          @play="onPlay(item,index)" @pause="onPause(item,index)">
          <source v-if="isVideoType(item.videoSrc, 'mp4')" :src="item.videoSrc" type="video/mp4" />
          <source v-if="isVideoType(item.videoSrc, 'ogg')" :src="item.videoSrc" type="video/ogg" />
          <source v-if="isVideoType(item.videoSrc, 'webm')" :src="item.videoSrc" type="video/webm" />
          <source v-if="isVideoType(item.videoSrc, 'm3u8')" :src="item.videoSrc" type="application/x-mpegURL" />
        </video>
        <text class="textRemark">{{ item.videoText }}</text>
      </div>
    </div>
    <a-pagination v-model:current="current" :hideOnSinglePage="hideOnSinglePage" v-model:pageSize="cPageSize"
      :pageSizeOptions="pageSizeOptions" :size="size" :total="cTotal" :show-total="showTotal" :simple="simple"
      :show-size-changer="showSizeChanger" :show-quick-jumper="showQuickJumper" @change="onChange"
      @showSizeChange="showSizeChange" class="pagination-class">
      <template #itemRender="{ type, originalElement }">
        <a v-if="type === 'prev' && customText.length>0">{{customText[0]}}</a>
        <a v-else-if="type === 'next' && customText.length>1">{{customText[1]}}</a>
        <component :is="originalElement" v-else></component>
      </template>
      <template #buildOptionText="props">
        <span>{{ props.value }}条/页</span>
      </template>
    </a-pagination>
  </div>
</template>
<script>
export default {
  props: {
    /**
     * 静音
     */
    muted: {
      type: Boolean,
      default: true
    },
    /**
     * 控件
     */
    controls: {
      type: Boolean,
      default: false
    },
    /**
     * 自动播放
     */
    autoplay: {
      type: Boolean,
      default: true
    },
    /**
     * 封面图
     */
    poster: {
      type: String,
      default: ""
    },
    /**
     * 每页条数
     */
    pageSize: {
      type: Number,
      default: 9,
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
            videoSrc: "http://shipin.dev.haomo-tech.com:8000/shipin/2236_1664421752.mp4",
            videoText: "通道一",
            videoIp: "192.168.3.101",
          },
          {
            id: 2,
            videoSrc: "http://shipin.dev.haomo-tech.com:8000/shipin/2236_1664421752.mp4",
            videoText: "通道二",
            videoIp: "192.168.3.102",
          },
          {
            id: 3,
            videoSrc: "http://shipin.dev.haomo-tech.com:8000/shipin/2236_1664421752.mp4",
            videoText: "通道三",
            videoIp: "192.168.3.101",
          },
          {
            id: 4,
            videoSrc: "http://shipin.dev.haomo-tech.com:8000/shipin/2236_1664421752.mp4",
            videoText: "通道四",
            videoIp: "192.168.3.101",
          },
          {
            id: 5,
            videoSrc: "http://ruiju.dev.haomo-tech.com:8000/hls/192.168.1.20.m3u8",
            videoText: "通道五",
            videoIp: "192.168.3.101",
          }
        ];
      },
    },
    /**
     * 当前页数
     */
    current: {
      type: Number,
      default: 1,
    },
    /**
     *简单分页
     */
    simple: {
      type: Boolean,
      default: false
    },
    /**
     * 一页是否隐藏
     */
    hideOnSinglePage: {
      type: Boolean,
      default: false
    },
    /**
     * 快速跳转页数
     */
    showQuickJumper: {
      type: Boolean,
      default: false
    },
    /**
     * 下拉选择页数
     */
    showSizeChanger: {
      type: Boolean,
      default: true
    },
    /**
     * 显示多少条
     */
    pageSizeOptions: {
      type: Array,
      default: function () {
        return ['1', '4', '9', '16'];
      }
    },
    /**
     * 分页大小
     */
    size: {
      type: String,
      default: ""
    },
    /**
     * 自定义文字
     */
    customText: {
      type: Array,
      default: function () {
        return ["上一页", "下一页"]
      }
    },
    /**
     * 展示数据
     */
    showTotal: {
      type: Function,
      default: function (total, range) {
        let rangeText = range[0] == range[1] ? range[1] : range[0] + ' - ' + range[1];
        return "第 " + rangeText + " 条,共 " + total + " 条";
      }
    },
    /**
     * 对齐方式
     * @options ["flex-start","center","flex-end"]
     */
    align: {
      type: String,
      default: "flex-end"
    }
  },
  watch: {
    pageSize(value) {
      this.cPageSize = value;
      this.getSize(this.cPageSize);
    },
    align(value) {
      this.cAlign = value;
    },
    videoList: {
      handler: function (value, oldValue) {
        this.cVideoList = value;
        this.cTotal = value.length;
        this.range(this.current, this.cPageSize);//保持在pageSize之后
      },
      deep: true,
    },
  },
  mounted() {
    this.cVideoList = this.videoList;
    this.cAlign = this.align;
    this.cPageSize = this.pageSize;
    this.cTotal = this.videoList.length;
    this.getSize(this.cPageSize);
    this.range(this.current, this.cPageSize);
  },
  data() {
    return {
      cList: [],
      cPageSize: 9,
      cVideoList: [],
      cWidth: "100%",
      cHeight: "100%",
      cTotal: 0,
      cAlign: ""
    }
  },
  methods: {
    isVideoType(src, type) {
      return this.getSuffix(src) == type;
    },
    getSuffix(src) {
      src = src || '.';
      let split = src.split('.');
      return split[split.length - 1];
    },
    getSize(e) {
      var sqrt = Math.sqrt(e);
      var result = (100 / sqrt).toFixed(2);
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
    onChange(page, pageSize) {
      this.cPageSize = pageSize;
      this.range(page, pageSize);
      this.$emit("onChange", page, pageSize);
    },
    showSizeChange: function (current, size) {
      this.getSize(size);
      this.range(current, size)
      this.$emit("showSizeChange", current, size);
    },
    range(a, b) {
      let start = (a - 1) * b;
      let end = a * b;
      let self = this;
      let arr = self.cVideoList;
      self.cList = [];
      arr.map(function (item, index) {
        // [start,end)
        if (index >= start && index < end) { self.cList.push(item); }
      });
    },
  },
}
</script>
<style scoped>
.outBox {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.contentBox {
  width: 100%;
  height: calc(100% - 32px);
  overflow: hidden;
}

.listBox {
  width: v-bind(cWidth);
  height: v-bind(cHeight);
  box-sizing: border-box;
  border: 2px solid rgb(0, 0, 0, 0.5);
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

.pagination-class {
  height: 36px;
  width: 100%;
  display: flex;
  justify-content: v-bind(cAlign);
  align-items: center;
}
</style>