<template>
  <l-map class="map" :zoom="cZoom" :center="cCenter">
    <!-- 地图 -->
    <l-tile-layer :url="url"/>
    <div v-for="(item, index) in cList" :key="index">
      <!-- 定位图标 -->
      <l-marker v-if="item.type == 'marker'" :lat-lng="item.latLng">
        <l-tooltip>
          {{ item.tooltip }}
        </l-tooltip>
      </l-marker>
      <!-- 可拖动图标 -->
      <l-layer-group v-if="item.type == 'markerGrag'">
        <l-marker :lat-lng="item.latLng" draggable>
          <l-tooltip>
            {{ item.tooltip }}
          </l-tooltip>
        </l-marker>
      </l-layer-group>
      <!-- 线 -->
      <l-polyline
        v-if="item.type == 'polyline'"
        :lat-lngs="item.latLng"
        :color="item.color"
      >
        <l-tooltip>
          {{ item.tooltip }}
        </l-tooltip>
      </l-polyline>
      <!-- 三角形 -->
      <l-polygon
        v-if="item.type == 'polygon'"
        :lat-lngs="item.latLng"
        :color="item.color"
        :fill="item.fill"
        :fillOpacity="item.fillOpacity"
        :fillColor="item.fillColor"
      >
        <l-tooltip>
          {{ item.tooltip }}
        </l-tooltip>
      </l-polygon>
      <!-- 矩形 -->
      <l-rectangle
        v-if="item.type == 'rectangle'"
        :lat-lngs="item.latLng"
        :fill="item.fill"
        :color="item.color"
      >
        <l-tooltip>
          {{ item.tooltip }}
        </l-tooltip>
      </l-rectangle>
      <!-- 圆 -->
      <l-circle
        v-if="item.type == 'circle'"
        :lat-lng="item.latLng"
        :radius="item.radius"
        :color="item.color"
      >
        <l-tooltip>
          {{ item.tooltip }}
        </l-tooltip>
      </l-circle>
      <!-- 圆 -->
      <l-circle-marker
        v-if="item.type == 'circleMarker'"
        :lat-lng="item.latLng"
        :radius="item.radius"
      >
        <l-tooltip>
          {{ item.tooltip }}
        </l-tooltip>
      </l-circle-marker>
    </div>
  </l-map>
</template>
<script>
import {
  LCircle,
  LLayerGroup,
  LCircleMarker,
  LMap,
  LIcon,
  LTileLayer,
  LMarker,
  LControlLayers,
  LTooltip,
  LPopup,
  LPolyline,
  LPolygon,
  LRectangle,
} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
export default {
  name: "HmLeaflet",
  components: {
    LCircle,
    LLayerGroup,
    LCircleMarker,
    LMap,
    LIcon,
    LTileLayer,
    LMarker,
    LControlLayers,
    LTooltip,
    LPopup,
    LPolyline,
    LPolygon,
    LRectangle,
  },
  props: {
    /**
     * 缩放等级
     * @model
     */
    zoom: {
      type: Number,
      default: 2,
    },
    /**
     * 地图中心坐标
     */
    center: {
      type: Array,
      default: function () {
        return [41.8329, -87.7327];
      },
    },
    /**
     * 地图
     */
    url: {
      type: String,
      default: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    },
    list: {
      type: Array,
      default: function () {
        return [
          {
            id: 1,
            type: "marker",
            latLng: [41.8329, -87.7327],
            tooltip: "Hi! I'm staying here on this location!",
          },
          {
            id: 2,
            type: "markerGrag",
            latLng: [41.75, -87.65],
            tooltip: "Hi! You can drag me around!",
          },
          {
            id: 3,
            type: "polygon",
            latLng: [
              [41.6329, -87.5327],
              [41.5329, -87.2327],
              [41.3329, -87.3327],
              [41.6329, -87.5327],
            ],
            color: "#41b782",
            fill: true,
            fillOpacity: 0.5,
            fillColor: "#41b782",
            tooltip: "Hi! I'm a polygon, nice to meet you!",
          },
          {
            id: 4,
            type: "polyline",
            latLng: [
              [41.9329, -87.9327],
              [41.8329, -87.8327],
            ],
            color: "green",
            tooltip: "Hey! Polyline here, at your service!",
          },
          {
            id: 5,
            type: "rectangle",
            latLng: [
              [41.734852, -86.809485],
              [41.742596, -86.628731],
              [41.641487, -86.590568],
              [41.634787, -86.658337],
            ],
            colro: "#35495d",
            fill: true,
            tooltip: "Good day! Rectangle is my name!",
          },
          {
            id: 6,
            type: "circle",
            latLng: [41.4329, -87.7327],
            color: "green",
            radius: 10000,
            tooltip: " Hi! I'm a green Circle!",
          },
          {
            id: 7,
            type: "circleMarker",
            latLng: [41.4329, -87.95],
            radius: 20,
            tooltip: "Hi! You can call me Circle Marker!",
          },
        ];
      },
    },
  },
  data() {
    return {
      cZoom: null,
      cCenter: null,
      cList: null,
    };
  },
  watch: {
    zoom(val) {
      this.cZoom = val;
    },
    center(val) {
      this.cCenter = val;
    },
    list(val) {
      this.cList = val;
    },
  },
  created() {
    this.cZoom = this.zoom;
    this.cCenter = this.center;
    this.cList = this.list;
  },
};
</script>

<style scoped>
.map{
  width: 100%;
  height: 100%;
}
</style>
