<template>
  <div class="hm-amap-loca">
    <hm-amap-loca ref="amapLoca" :map-ak="mapAk" 
      :center="center" 
      :zoom-level="zoomLevel" 
      :view-mode="viewMode"
      :plugins="plugins"
      :map-options="mapOptions"
      :width="cWidth" 
      :height="cHeight"
      :layers="locaLayers"
      @mapLoaded="onMapLoaded">
    </hm-amap-loca>
  </div>
</template>

<script>
import _ from "lodash";
import HmAmapLoca from './HmAmapLoca.vue'

/**
 * 高德地图数据可视化组件-散点图
 * @author 北京毫末科技有限公司
 * @email hxg@haomo-studio.com
 * @mobile 13811148064
 * @wechat 13811148064
 */
export default {
  name: "HmAmapLocaScatter",
  components: {
    HmAmapLoca
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
          pitch: 40, mapStyle: 'amap://styles/b688c625f9fa4d1d3b2788385d346611'
        }
      }
    },
    /**
     * 散点图层
     * @desc 参考文档：https://lbs.amap.com/api/loca-v2/api#scatterlayer
     */
    layers: {
      type: Array, 
      default: function () {
        return [{
          options: {},
          style: {}, 
          source: {}
        }]
      }
    }
  },
  data() {
    return {
      loca: null,
      cWidth: 0,
      cHeight: 0,
      locaLayers: []
    }
  },
  watch: {
    height(value) {
      this.cHeight = this.$getCssUnit(value);
    },
    width(value) {
      this.cWidth = this.$getCssUnit(value);
    },
    layers: {
      handler: function (value, oldValue) {
        console.log(`HmAmapLocalScatter watch layers`)
        let self = this;
        self.loadLayers();
      },
      deep: true
    }
  },
  computed: {
  },
  mounted() {
    this.cWidth = this.$getCssUnit(this.width);
    this.cHeight = this.$getCssUnit(this.height);
  },
  methods: {
    onMapLoaded(map) {
      let self = this;
      console.log(`HmAmapLocaScatter mapLoaded: `, map);
      self.loadLayers();
    },
    loadLayers() {
      let self = this;
      console.log(`self.$refs.amapLoca.loca: `, self.$refs.amapLoca);
      self.locaLayers = [];
      let dat = new Loca.Dat();
      let locaLayers = [];
      let layers =  _.cloneDeep(self.layers);
      layers.forEach((layer, index) => {
        let geo = new Loca.GeoJSONSource(layer.source);
        if (layer.options.loca) {
          layer.options.loca = self.$refs.amapLoca.loca;
        }
        let scatter = new Loca.ScatterLayer(layer.options);
        scatter.setSource(geo);
        scatter.setStyle(layer.style);
        console.log(`scatter: `, scatter)
        locaLayers.push(scatter);
        dat.addLayer(scatter, layer.name || `图层${index+1}`);
      });
      // 启动渲染动画
      self.$refs.amapLoca.loca.animate.start();
    }
  },
};
</script>

<style lang="less" scoped>
.hm-amap-loca {
  position: relative;
  width: v-bind(cWidth);
  height: v-bind(cHeight);
  min-width: 300px;
  min-height: 300px;
}
</style>