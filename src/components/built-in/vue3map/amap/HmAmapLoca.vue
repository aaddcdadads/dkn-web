<template>
  <div class="hm-amap-loca">
    <hm-amap ref="amap" :map-ak="mapAk" 
      :enable-loca="true"
      :center="center" 
      :zoom-level="zoomLevel" 
      :view-mode="viewMode"
      :plugins="plugins"
      :map-options="mapOptions"
      :width="cWidth" 
      :height="cHeight"
      @mapLoaded="onMapLoaded">
    </hm-amap>
  </div>
</template>

<script>
import _ from "lodash";
import HmAmap from './HmAmap.vue'

/**
 * 高德地图Loca数据可视化组件
 * @author 北京毫末科技有限公司
 * @email hxg@haomo-studio.com
 * @mobile 13811148064
 * @wechat 13811148064
 */
export default {
  name: "HmAmapLoca",
  components: {
    HmAmap
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
        ]
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
     * 可视化图层
     * @desc 参考文档：https://lbs.amap.com/api/loca-v2/api#%e5%9f%ba%e7%a1%80%e5%9b%be%e5%b1%82
     */
    layers: {
      type: Array, 
      default: function () {
        return []
      }
    }
  },
  data() {
    return {
      loca: null,
      cWidth: 0,
      cHeight: 0,
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
        console.log('HmAmapLocal watch layers')
        let self = this;
        // 清空已有的图层
        oldValue.forEach(layer => {
          self.loca.remove(layer);
        })

        // 添加新的图层
        value.forEach(layer => {
          self.loca.add(layer);
        })
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
      console.log(`HmAmapLoca mapLoaded: `, map, Loca);
      self.loca = window.loca = new Loca.Container({
        map,
      });

      console.log(`layers: `, self.layers);
      self.layers.forEach(layer => {
        self.loca.add(layer);
      });
      self.$emit('map-loaded', map);
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