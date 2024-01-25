<template>
  <div class="hm-amap-loca">
    <hm-amap-loca ref="amapLoca" :map-ak="mapAk" :center="center" :zoom-level="zoomLevel" :view-mode="viewMode"
      :plugins="plugins" :map-options="mapOptions" :width="cWidth" :height="cHeight" :layers="locaLayers"
      @mapLoaded="onMapLoaded">
    </hm-amap-loca>
  </div>
</template>

<script>
import _ from "lodash";
import HmAmapLoca from './HmAmapLoca.vue'

/**
 * 高德地图数据可视化组件-路径规划
 * @author 北京毫末科技有限公司
 * @email hxg@haomo-studio.com
 * @mobile 13811148064
 * @wechat 13811148064
 */
export default {
  name: "HmAmapLocaNav",
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
      default: function () {
        return [
          "AMap.Scale", //工具条，控制地图的缩放、平移等
          "AMap.ToolBar", //比例尺，显示当前地图中心的比例尺
          "AMap.Geolocation", //定位，提供了获取用户当前准确位置、所在城市的方法
          "AMap.HawkEye", //鹰眼，显示缩略图
          "AMap.Driving"
        ] // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      }
    },
    /**
     * 地图初始选项
     * @desc 其他的prop如果配置了，则以其他的配置为准；其他的prop如果未配置，则以mapOptions为准
     */
    mapOptions: {
      type: Object,
      default: function () {
        return {
          pitch: 40, mapStyle: 'amap://styles/b688c625f9fa4d1d3b2788385d346611'
        }
      }
    },
    /**
     * 交通工具
     * @type Enum 
     * @options ["驾车", "步行", "骑行", "公交"]
     */
    vehicle: {
      type: String,
      default: '驾车',
    },
    /**
     * 交通工具配置
     */
    vehicleOption: {
      type: Object,
      default: function () {
        return {}
      }
    },
    /**
     * 路径搜索类型
     * @type Enum 
     * @options ["经纬度", "地点关键字"]
     */
    search: {
      type: String,
      default: '经纬度',
    },
    /**
     * 搜索数据
     */
    searchData: {
      type: Object,
      default: function () {
        return {
          start: [116.379028, 39.865042],
          end: [116.427281, 39.903719]
        }
      }
    },
    /**
     * 路径样式
     */
    routeStyle: {
      type: Object,
      default: function () {
        return {
          isOutline: false,
          outlineColor: '#000000',
          borderWeight: 2,
          strokeWeight: 5,
          strokeColor: '#0044ff',
          lineJoin: 'round'
        }
      }
    }
  },
  data() {
    return {
      map: null,
      loca: null,
      cWidth: 0,
      cHeight: 0
    }
  },
  watch: {
    height(value) {
      this.cHeight = this.$getCssUnit(value);
    },
    width(value) {
      this.cWidth = this.$getCssUnit(value);
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
      self.map = map;
      console.log(`HmAmapLocaNav mapLoaded: `, map);
      let vehicleClass = self.getVehicleClass();
      console.log(`vehicleClass: `, vehicleClass);
      let vehicleObj = new vehicleClass(self.vehicleOption);
      if (self.search === '经纬度') {
        vehicleObj.search(
          new AMap.LngLat(self.searchData.start[0], self.searchData.start[1]),
          new AMap.LngLat(self.searchData.end[0], self.searchData.end[1]),
          function (status, result) {
            console.log(`search end: `, status, result);
            self.$emit('search-end', { status, result });

            if (status === 'complete') {
              if (result.routes && result.routes.length) {
                self.drawRoute(result.routes[0])
              }
            } else {
              console.error('步行路线数据查询失败' + result)
            }
          });
      } else {
        vehicleObj.search(
          self.searchData.points,
          function (status, result) {
            self.$emit('search-end', { status, result });
          });
      }
    },
    getVehicleClass() {
      console.log(`AMap.Driving: `, AMap.Driving);
      let vehicleClass = AMap.Driving;
      switch (this.vehicle) {
        case '步行':
          vehicleClass = AMap.Walking;
          break;
        case '骑行':
          vehicleClass = AMap.Riding;
          break;
        case '公交':
          vehicleClass = AMap.Transfer;
          break;
        default:
          break;
      }
      return vehicleClass;
    },
    drawRoute(route) {
      let self = this;
      let path = self.parseRouteToPath(route)

      let startMarker = new AMap.Marker({
        position: path[0],
        icon: 'https://webapi.amap.com/theme/v1.3/markers/n/start.png',
        map: self.map
      })

      let endMarker = new AMap.Marker({
        position: path[path.length - 1],
        icon: 'https://webapi.amap.com/theme/v1.3/markers/n/end.png',
        map: self.map
      })

      let routeLine = new AMap.Polyline(Object.assign({ path: path }, self.routeStyle))

      routeLine.setMap(self.map)

      // 调整视野达到最佳显示区域
      self.map.setFitView([startMarker, endMarker, routeLine])
    },
    parseRouteToPath(route) {
      var path = []

      for (var i = 0, l = route.steps.length; i < l; i++) {
        var step = route.steps[i]

        for (var j = 0, n = step.path.length; j < n; j++) {
          path.push(step.path[j])
        }
      }

      return path
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