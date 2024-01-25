<template>
  <div :id="'amap' + randomId" class="hm-amap">
  </div>
</template>

<script>
import _ from "lodash";
import AMapLoader from '@amap/amap-jsapi-loader';

/**
 * 高德地图组件
 * @author 北京毫末科技有限公司
 * @email hxg@haomo-studio.com
 * @mobile 13811148064
 * @wechat 13811148064
 */
export default {
  name: "HmAmap",
  components: {
  },
  props: {
    /**
     * 地图Ak
     */
    mapAk: {
      type: String,
      default: "468519d0f5e638523f1c3131d4a2a3a8",
    },
    /**
     * 地图安全密钥
     */
    jsCode: {
      type: String,
      default: "02b4f559bc74fdb69610cd5d3951fc0f",
    },
    /**
     * 宽度
     */
    width: {
      type: String,
      default: "1200",
    },
    /**
     * 高度
     */
    height: {
      type: String,
      default: "800",
    },
    /**
     * 地图中心坐标
     */
    center: {
      type: Array,
      default: function () {
        return [116.404, 39.915];
      },
    },
    /**
     * 3D模式
     */
    zoomLevel: {
      type: String,
      default: 12,
    },
    /**
     * 显示方式
     */
    viewMode: {
      type: String,
      default: '2D',
    },
    /**
     * 地图控件
     */
    plugins: {
      type: Array,
      default: function() {
        return [
          "AMap.Scale", //工具条，控制地图的缩放、平移等
          "AMap.ToolBar", //比例尺，显示当前地图中心的比例尺
          "AMap.Geolocation", //定位，提供了获取用户当前准确位置、所在城市的方法
          "AMap.HawkEye", //鹰眼，显示缩略图
        ] // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      }
    },
    /**
     * 地图初始选项
     * @desc 其他的prop如果配置了，则以其他的配置为准；其他的prop如果未配置，则以mapOptions为准
     */
    mapOptions: {
      type: Object,
      default: function() {
        return {

        }
      }
    },
    /**
     * 启用Loca
     */
    enableLoca: {
      type: Boolean,
      default: false
    }, 
    /**
     * local选项
     * @desc AMapLoader.load函数的Loca选项内容
     */
    locaOption: {
      type: Object,
      default: function() {
        return {
          version: "2.0.0"
        }
      }
    }
  },
  data() {
    return {
      randomId: `${new Date().getTime()}-${parseInt(Math.random() * 1000000)}`,
      map: null,
      cWidth: 0,
      cHeight: 0,
      cZoomLevel: 12,
      cCenter: [116.404, 39.915],
    }
  },
  watch: {
    height(value) {
      this.cHeight = this.$getCssUnit(value);
    },
    width(value) {
      this.cWidth = this.$getCssUnit(value);
    },
    center: {
      handler: function (value, oldValue) {
        let self = this;
        this.cCenter = value;
        if (!self.map) {
          return;
        }
        // @TODO: 地图切换中心点
      },
      deep: true,
    },
  },
  computed: {
  },
  mounted() {
    this.cWidth = this.$getCssUnit(this.width);
    this.cHeight = this.$getCssUnit(this.height);
    this.cCenter = this.center;

    this.initMap();
  },
  methods: {
    initMap() {
      let self = this;
      let loadOption = {
        key: self.mapAk, // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: self.plugins
      }

      if (self.enableLoca) {
        loadOption.Loca = self.locaOption;
      }

      window._AMapSecurityConfig = {
        securityJsCode: self.jsCode,
      }

      AMapLoader.load(loadOption)
        .then((AMap) => {
          console.log(`HmAmap map loaded`);
          let options = Object.assign({//设置地图容器id
            zoom: self.cZoomLevel, //初始化地图层级
            viewMode: self.viewMode, //是否为3D地图模式
            center: self.cCenter, //初始化地图中心点位置
          }, self.mapOptions);
          self.map = new AMap.Map('amap' + self.randomId, options);
          self.$emit('map-loaded', self.map);
          self.map.setDefaultCursor("pointer"); //使用CSS默认样式定义地图上的鼠标样式（default/pointer/move/crosshair）
          
          // 增加控件配置属性
          self.addControls();
        })
        .catch((e) => {
          console.error('加载高德地图失败：', e);
        });
    },
    addControls() {
      let self = this;
      if (self.plugins.indexOf('Amap.Scale') >= 0) {
        self.map.addControl(new AMap.Scale());
      }

      if (self.plugins.indexOf('AMap.ToolBar') >= 0) {
        self.map.addControl(new AMap.ToolBar());
      }

      if (self.plugins.indexOf('AMap.Geolocation') >= 0) {
        self.map.addControl(new AMap.Geolocation());
      }

      if (self.plugins.indexOf('AMap.HawkEye') >= 0) {
        self.map.addControl(new AMap.HawkEye({
          position: "LT", //控件停靠位置（LT/RT/LB/RB）
        }));
      }
    },
    /**
     * @TODO: 显示信息弹窗
     */
    showInfoWindow() {
      let self = this;
      let infoWindow = new AMap.InfoWindow({
        //创建信息窗体
        isCustom: false, //使用自定义窗体
        anchor: "top-right", //信息窗体的三角所在位置
        content: `<h4>信息窗体</h4>`, //信息窗体的内容可以是任意html片段
        offset: new AMap.Pixel(16, -45),
      });
      infoWindow.open(self.map, [121.939253, 29.905078]); //填写想要窗体信息指示的坐标
    }
  },
};
</script>

<style lang="less" scoped>
.hm-amap {
  position: relative;
  width: v-bind(cWidth);
  height: v-bind(cHeight);
  min-width: 300px;
  min-height: 300px;
}
</style>