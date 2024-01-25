<template>
  <div :id="randomId" class="hm-super-map">
  </div>
</template>
<script>
import _ from "lodash";

import L from 'leaflet';
import { tiledMapLayer } from '@supermap/iclient-leaflet';

export default {
  props: {
    /**
     * 自定义地图
     */
    isCustomMap: {
      type: Boolean,
      default: false
    },
    /**
     * 超图url地址
     */
    url: {
      type: String,
      default: 'https://iserver.supermap.io/iserver/services/map-world/rest/maps/World'
    },
    /**
     * 地图名称
     */
    mapName: {
      type: String,
      default: '停车区@TCC#1'
    },
    /**
     * 地图中心坐标
     */
    center: {
      type: Array,
      default: function () {
        return [0, 0];
      },
    },
    /**
     * 地图边界
     */
    bounds: {
      type: Array,
      default: function() {
        return [];
      }
    },
    /**
     * 起始点
     */
    origin: {
      type: Array,
      default: function() {
        return [0, 0];
      }
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
     * 样式id
     */
    styleId: {
      type: String,
      default: "",
    },
    /**
     *  点集合
     * */
    points: {
      type: Array,
      default: function () {
        return [];
      },
    },
    /**
     * 线段集合
     */
    lines: {
      type: Array,
      default: function () {
        return [];
      },
    },
    /**
     * 多边形集合
     */
    polygons: {
      type: Array,
      default: function () {
        return [];
      },
    },
    /**
     * 缩放等级
     */
    zoomLevel: {
      type: Number,
      default: 9,
    },
    /**
     * 最大缩放等级
     */
    maxZoomLevel: {
      type: Number,
      default: 10
    },
    /**
     * 最小缩放等级
     */
    minZoomLevel: {
      type: Number,
      default: 8
    },
    /**
     * 显示绘制控件
     */
    showDrawManager: {
      type: Boolean,
      default: false,
    },
    /**
     * 控件是否渲染
     */
    drawManagerRender: {
      type: Object,
      default: function () {
        return {
          marker: true,
          polyline: true,
          rectangle: true,
          polygon: true,
          circle: true,
        };
      },
    },
    /**
     * 鼠标控件位置
     */
    mouseDrawPosition: {
      type: Object,
      default: function () {
        return {
          marginLeft: "2.5rem",
          bottom: "3.5rem",
        };
      },
    },
    /**
     * 鼠标绘制样式
     */
    drawStyleOptions: {
      type: Object,
      default: function () {
        return {
          strokeColor: "#5E87DB", // 边线颜色
          fillColor: "#5E87DB", // 填充颜色。当参数为空时，圆形没有填充颜色
          strokeWeight: 2, // 边线宽度，以像素为单位
          strokeOpacity: 1, // 边线透明度，取值范围0-1
          fillOpacity: 0.2,
        };
      },
    },
  },
  watch: {
    height(value) {
      this.cHeight = this.$getCssUnit(value);
    },
    width(value) {
      this.cWidth = this.$getCssUnit(value);
    },
    url(value) {
      this.queryService = L.supermap.queryService(value);
    },
    zoomLevel(value) {
      this.cZoomLevel = value;
      this.map.setZoom(value);
    },
    center: {
      handler: function (value, oldValue) {
        this.cCenter = value;
        this.initMap();
      },
      deep: true,
    },
    points: {
      handler: function (value, oldValue) {
        this.initMap().then(() => {
          this.cPoints = value;
          this.addMarker();
        });
      },
      deep: true,
    },
    lines: {
      handler: function (value, oldValue) {
        this.initMap()
        this.cLines = value;
        this.addPolyline();
      },
      deep: true,
    },
    polygons: {
      handler: function (value) {
        this.initMap()
        this.cPolygons = value;
        this.addPolygons();
      },
      deep: true,
    },
    showDrawManager(newVal) {
      this.cShowDrawManager = newVal ? "block" : "none";
      this.addDrawingManager();
    },
    mouseDrawPosition: {
      handler(newVal) {
        this.cMouseDrawPositionMarginLeft = newVal.marginLeft;
        this.cMouseDrawPositionBottom = newVal.bottom;
      },
      deep: true,
    },
  },
  data() {
    return {
      randomId: `${new Date().getTime()}-${parseInt(Math.random() * 1000000)}`,
      map: null,
      L: L,
      supermap: L.supermap,
      queryService: null,

      cZoomLevel: 1,
      cWidth: '256px',
      cHeight: '256px'
    };
  },
  mounted() {
    let self = this;
    console.log('HmSuperMap mounted');
    this.queryService = L.supermap.queryService(this.url);

    this.cZoomLevel = this.zoomLevel;
    this.cWidth = this.$getCssUnit(this.width);
    this.cHeight = this.$getCssUnit(this.height);
    
    this.$nextTick(() => {
      self.initMap();
    })
  },
  methods: {
    //渲染地图
    initMap() {
      let self = this;
      //如果map已被init，销毁map
      this.map && this.map.remove()
      
      let options = {
          crs: L.CRS.EPSG4326,
          center: this.center,
          maxZoom: this.maxZoomLevel,
          minZoom: this.minZoomLevel,
          zoom: this.zoomLevel
      };

      if (this.isCustomMap) {
        options.crs = L.CRS.NonEarthCRS({
          bounds: L.bounds(self.bounds[0], self.bounds[1]),
          origin: L.point(self.origin[0], self.origin[1])
        })
      }

      this.map = L.map(self.randomId, options);
      //map添加点击事件
      this.map.on('click', e => {
        self.mapClick(e)
      })
      tiledMapLayer(this.url).addTo(this.map);
    },

    mapClick(e){
      let self = this
      const latlng = e.latlng 
      if (!latlng) return
      this.queryByDistance({
        isNearest: true,
        expectCount: 1,
        distance: 1,
        geometry: self.L.circle(latlng),
        queryParams: [{
          name: self.mapName
        }]
      }).then(result => {
        console.log(latlng);
        this.$emit('mapClick', result, latlng)
      });
    },
    //添加maker
    addMarker(latLng, iconConfig = {
      iconUrl: null, 
      iconSize: [50, 50]
    }, iconType = "icon") {
      let myIcon = L[iconType](iconConfig)
      L.marker({
          lat: latLng[1],
          lng: latLng[0]
      }, {
        icon: myIcon
      }).addTo(this.map)
    },

    /**
     * 封装L.supermap.queryService.queryBySQL
     */
    queryBySQL(params) {
      let self = this;
      const sqlParam = new SuperMap.QueryBySQLParameters({
        queryParams: params,
      });

      return new Promise((resolve, reject) => {
        self.queryService.queryBySQL(sqlParam, (serviceResult) => {
          resolve(serviceResult);
        });
      });
    },
    queryByDistance(params) {
      let self = this;
      const queryParam = new SuperMap.QueryByDistanceParameters(params);
      return new Promise((resolve, reject) => {
        self.queryService.queryByDistance(queryParam, (serviceResult) => {
          resolve(serviceResult);
        })
      })
    },
    hightlightFeatures(features, style) {
      let layer = L.geoJSON(features).addTo(this.map);
      if (!style) {
        style = {
          color: 'red',
          weight: 3,
          fillOpacity: 0.6
        }
      }
      layer.setStyle(style);
      return layer;
    },
  },
};
</script>

<style lang="less" src="leaflet/dist/leaflet.css"></style>
<style lang="less" src="@supermap/iclient-leaflet/dist/iclient-leaflet.min.css"></style>
<style lang="less" scoped>
.hm-super-map {
  position: relative;
  width: v-bind(cWidth);
  height: v-bind(cHeight);
  min-width: 128px;
  min-height: 128px;
}
</style>
