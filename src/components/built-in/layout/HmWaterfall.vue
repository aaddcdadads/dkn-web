<template>
  <div class="waterFall">
    <div class="waterFallItem" v-for="(item, index) in cList" :key="index">
      <div class="waterfall-slot-div">
        <!-- 
          @prop item - 数组条目数据
        -->
        <slot :item="item">
          <a-image :src="item.imageUrl || item"></a-image>
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
import { getAction, postAction } from "/@/request/http";
export default {
  name: "HmWaterfall",
  props: {
    /**
     * 数据项
     */
    list: {
      type: Array,
      default: function () {
        return [
          "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
          "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random",
          "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random",
          "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random"
        ];
      },
    },
    /**
     * url
     */
    url: {
      type: String,
      default:"",
    },
    /**
     * params
     */
    params: {
      type: Object,
      default: function () {
        return {};
      },
    },
    /**
     * 瀑布流配置
     */
    waterfallOption: {
      type: Object,
      default: function () {
        return {
          column: 4,
          lineSpace: 10,
          rowSpace: 20,
        };
      },
    },
  },
  data() {
    return {
      cWaterfallOption: {},
      cList: [],
      screenWidth: document.body.clientWidth,
      timer: null,
    };
  },
  watch: {
    list: {
      handler: function (value, oldValue) {
        this.cList = value;
      },
      deep: true,
    },
    waterfallOption: {
      handler: function (value, oldValue) {
        this.cWaterfallOption = value;
        setTimeout(() => {
          this.initPage();
        }, 300);
      },
      deep: true,
    },
    screenWidth() {
      if (!this.timer) {
        this.timer = true;
        let _this = this;
        setTimeout(function () {
          _this.initPage();
          _this.timer = false;
        }, 600);
      }
    },
  },
  mounted() {
    var _this = this;
    window.onresize = () => {
      return (() => {
        _this.screenWidth = document.body.clientWidth;
      })();
    };
    _this.cWaterfallOption = _this.waterfallOption;
    _this.cList = _this.list;
    _this.getData();
    setTimeout(() => {
      _this.initPage();
    }, 300);
  },
  methods: {
    initPage() {
      waterFall(
        ".waterFall",
        ".waterFallItem",
        this.cWaterfallOption.column,
        this.cWaterfallOption.lineSpace,
        this.cWaterfallOption.rowSpace
      );
      function waterFall(waterfall, pic, column = 2, lineSpace = 10, rowSpace = 20) {
        var waterfallWidth = document.querySelector(waterfall).offsetWidth;
        var line = (column - 1) * lineSpace;
        var picWidth = parseInt((waterfallWidth - line) / column);
        var picNode = document.querySelectorAll(pic);
        var picArr = [];
        for (var i = 0; i < picNode.length; i++) {
          /* 设置每一个pic的宽度 */
          picNode[i].style.width = picWidth + "px";
          /* 获取每一个pic的高 */
          var picHeigth = picNode[i].clientHeight;
          if (i < column) {
            /* 给第一行的进行定位 */
            picNode[i].style.top = 0;
            picNode[i].style.left = (picWidth + lineSpace) * i + "px";
            /* 将获取的pic的高push到一个数组记录下来 */
            picArr.push(picHeigth);
          } else {
            var picArrMin = Math.min(...picArr);
            /* 获取最小值的索引 */
            var mixIndex = picArr.indexOf(picArrMin);
            /* 对非第一行的pic进行定位，top为最小值的高，left为pic宽加行间距乘以最小值的索引 */
            picNode[i].style.top = picArrMin + rowSpace + "px";
            picNode[i].style.left = (picWidth + lineSpace) * mixIndex + "px";
            /* 对数组中的最小值进行修改 */
            picArr[mixIndex] += picHeigth + rowSpace;
          }
        }
      }
    },
    getData(url, params) {
      let self = this;
      url = url || self.url;
      if (!url) return;
      params = params || (this.params ? JSON.parse(JSON.stringify(this.params)) : {});
      let request = getAction;
      request(url, params)
        .then((resp) => {
          let data = [];
          if (resp.data) {
            if (resp.data.list) {
              data = resp.data.list;
            }
            if (resp.data.records) {
              data = resp.data.records;
            }
          }
          if (resp.result) {
            data = resp.result.records || resp.result;
          }
          if (resp.list) {
            data = resp.list;
          }
          if (Array.isArray(resp)) {
            data = resp;
          }
          self.cList = data;
        })
        .catch((e) => {
          console.log("get list error:", e);
        });
    },
  },
};
</script>
<style lang="less" scoped>
@media (max-width: 960px) {
  ::-webkit-scrollbar {
    width: 0px;
  }
}
.waterFall {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
}
.waterFallItem {
  position: absolute;
  font-size: 16px;
}
.waterfall-slot-div {
  width: 100%;
  height: 100%;
  word-wrap: break-word;
  box-sizing: border-box;
}
</style>
