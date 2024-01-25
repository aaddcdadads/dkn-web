<template>
  <ol-map ref="map" :loadTilesWhileAnimating="loadTilesWhileAnimating"
    :loadTilesWhileInteracting="loadTilesWhileInteracting" :style="mapStyle">
    <ol-view ref="view" :center="cCenter" :rotation="rotation" :zoom="zoom" :projection="projection" />

    <ol-swipe-control ref="swipeControl" v-if="swipeControlStatus && layerList.length > 0" :layerList="layerList" />

    <ol-layerswitcherimage-control />
    <ol-zone-control :zones="zones" :projection="projection" :layer="jawgLayer.tileLayer" v-if="jawgLayer != null">
    </ol-zone-control>

    <ol-tile-layer ref="osmLayer" title="OSM">
      <ol-source-osm />
    </ol-tile-layer>

    <ol-tile-layer v-if="swipeControlStatus" ref="jawgLayer" title="JAWG">
      <ol-source-xyz crossOrigin="anonymous" :url="jawgLayerUrl" />
    </ol-tile-layer>
    <!-- 绘制按钮 -->
    <div v-if="toggleControlStatus">
      <ol-toggle-control html="<i class='fas fa-map-marker'></i>" className="editPoint" title="Point" :active="true"
        :autoActive="true" :onToggle="(active) => changeDrawType(active, 'Point')" />
      <ol-toggle-control html="<i class='fas fa-draw-polygon'></i>" className="editPolygon" title="Polygon"
        :onToggle="(active) => changeDrawType(active, 'Polygon')" />
      <ol-toggle-control html="<i class='fas fa-circle'></i>" className="editCircle" title="Circle"
        :onToggle="(active) => changeDrawType(active, 'Circle')" />
      <ol-toggle-control html="<i class='fas fa-grip-lines'></i>" className="editLineString" title="LineString"
        :onToggle="(active) => changeDrawType(active, 'LineString')" />
    </div>

    <!-- <ol-videorecorder-control @click="videoStart" @stop="videoStopped">
    </ol-videorecorder-control> -->
    <ol-printdialog-control v-if="printdialogControlStatus" />
    <!-- 鼠标位置 -->
    <ol-mouseposition-control v-if="mousepositionControlStatus" />
    <!-- 全屏按钮 -->
    <ol-fullscreen-control v-if="fullscreenControlShow" />
    <!-- 鹰眼 /-->
    <ol-overviewmap-control v-if="overviewmapControlShow">
      <ol-tile-layer>
        <ol-source-osm />
      </ol-tile-layer>
    </ol-overviewmap-control>
    <!-- 比例尺 -->
    <ol-scaleline-control v-if="scalelineControlShow" />
    <!-- 置顶箭头 / -->
    <ol-rotate-control v-if="rotateControlShow" />
    <!-- 缩放控件 -->
    <ol-zoom-control v-if="zoomControlShow" />
    <!-- 缩放滑块控件 -->
    <ol-zoomslider-control v-if="zoomsliderControlShow" />
    <!-- 缩放到范围控件 -->
    <ol-zoomtoextent-control v-if="zoomtoextentControlShow" :extent="[23.906, 42.812, 46.934, 34.597]"
      tipLabel="Fit to Turkey" />
    <!-- 右击菜单 -->
    <ol-context-menu-control v-if="contextMenuControlShow" :items="contextMenuItems" />

    <!-- 向量聚类特征的交互 -->
    <ol-interaction-clusterselect @select="featureSelected" :pointRadius="20">
      <ol-style>
        <ol-style-stroke color="green" :width="5"></ol-style-stroke>
        <ol-style-fill color="rgba(255,255,255,0.5)"></ol-style-fill>
        <ol-style-icon :src="markerIcon" :scale="0.05"></ol-style-icon>
      </ol-style>
    </ol-interaction-clusterselect>
    <!-- 选择矢量特征的交互 -->
    <ol-interaction-select @select="featureSelected" :condition="selectCondition" :filter="selectInteactionFilter"
      v-if="!drawEnable">
      <ol-style>
        <ol-style-stroke color="green" :width="10"></ol-style-stroke>
        <ol-style-fill color="rgba(255,255,255,0.5)"></ol-style-fill>
        <ol-style-icon :src="markerIcon" :scale="0.05"></ol-style-icon>
      </ol-style>
    </ol-interaction-select>
    <!-- 向量层 -->
    <ol-vector-layer>

      <ol-source-vector ref="cities" :url="sourceVectorUrl" :format="geoJson" :projection="projection">
        <ol-interaction-modify v-if="drawEnable" @modifyend="modifyend" @modifystart="modifystart">
        </ol-interaction-modify>

        <ol-interaction-draw v-if="drawEnable" :type="drawType" @drawend="drawend" @drawstart="drawstart">
        </ol-interaction-draw>

        <ol-interaction-snap v-if="drawEnable" />
      </ol-source-vector>

      <ol-style>
        <ol-style-stroke :color="overlayStyle.strokeColor" :width="overlayStyle.strokeWidth"></ol-style-stroke>
        <ol-style-fill :color="overlayStyle.fillColor"></ol-style-fill>
        <ol-style-circle :radius="overlayStyle.circleRadius">
          <ol-style-fill :color="overlayStyle.circleColor"></ol-style-fill>
        </ol-style-circle>
      </ol-style>
    </ol-vector-layer>

    <ol-vector-layer :updateWhileAnimating="true" :updateWhileInteracting="true" title="STAR"
      preview="https://raw.githubusercontent.com/MelihAltintas/vue3-openlayers/main/src/assets/star.png">
      <ol-source-vector ref="vectorsource">
        <!-- 动画图形 -->
        <ol-animation-shake v-for="item in shakeTrue" :key="item" :duration="2000" :repeat="5">
          <ol-feature v-if="item.type === 'point'">
            <ol-geom-point :coordinates="item.point"></ol-geom-point>
            <ol-style>
              <ol-style-icon :src="item.icon" :scale="item.scale"></ol-style-icon>
            </ol-style>
          </ol-feature>
          <ol-feature v-if="item.type === 'circle'">
            <ol-geom-circle :center="item.center" :radius="item.radius"></ol-geom-circle>
            <ol-style>
              <ol-style-stroke :color="item.strokeColor" :width="item.strokeWidth"></ol-style-stroke>
              <ol-style-fill :color="item.fillColor"></ol-style-fill>
            </ol-style>
          </ol-feature>
          <ol-feature v-if="item.type === 'line'">
            <ol-geom-line-string :coordinates="item.coordinates"></ol-geom-line-string>
            <ol-style>
              <ol-style-stroke :color="item.strokeColor" :width="item.strokeWidth"></ol-style-stroke>
            </ol-style>
            <ol-style-flowline v-if="item.flowlineStatus" :color="item.flowlineStyle.color"
              :color2="item.flowlineStyle.color2" :width="item.flowlineStyle.width" :width2="item.flowlineStyle.width2"
              :arrow="item.flowlineStyle.arrow" />
          </ol-feature>

          <ol-feature v-if="item.type === 'polygon'">
            <ol-geom-polygon :coordinates="item.coordinates"></ol-geom-polygon>
            <ol-style>
              <ol-style-stroke :color="item.strokeColor" :width="item.strokeWidth"></ol-style-stroke>
              <ol-style-fill :color="item.fillColor"></ol-style-fill>
            </ol-style>
          </ol-feature>
        </ol-animation-shake>
        <!-- 静止图形 -->
        <ol-feature v-for="item in shakeFalse" :key="item">
          <ol-feature v-if="item.type === 'point'">
            <ol-geom-point :coordinates="item.point"></ol-geom-point>
            <ol-style>
              <!-- <ol-style-icon :src="item.icon" :scale="item.scale"></ol-style-icon> -->
            </ol-style>
          </ol-feature>
          <ol-feature v-if="item.type === 'circle'">
            <ol-geom-circle :center="item.center" :radius="item.radius"></ol-geom-circle>
            <ol-style>
              <ol-style-stroke :color="item.strokeColor" :width="item.strokeWidth"></ol-style-stroke>
              <ol-style-fill :color="item.fillColor"></ol-style-fill>
            </ol-style>
          </ol-feature>

          <ol-feature v-if="item.type === 'line'">
            <ol-geom-line-string :coordinates="item.coordinates"></ol-geom-line-string>
            <ol-style>
              <ol-style-stroke :color="item.strokeColor" :width="item.strokeWidth"></ol-style-stroke>
            </ol-style>
            <ol-style-flowline v-if="item.flowlineStatus" :color="item.flowlineStyle.color"
              :color2="item.flowlineStyle.color2" :width="item.flowlineStyle.width" :width2="item.flowlineStyle.width2"
              :arrow="item.flowlineStyle.arrow" />
          </ol-feature>

          <ol-feature v-if="item.type === 'polygon'">
            <ol-geom-polygon :coordinates="item.coordinates"></ol-geom-polygon>
            <ol-style>
              <ol-style-stroke :color="item.strokeColor" :width="item.strokeWidth"></ol-style-stroke>
              <ol-style-fill :color="item.fillColor"></ol-style-fill>
            </ol-style>
          </ol-feature>

        </ol-feature>
      </ol-source-vector>
    </ol-vector-layer>
    <!-- 缩放集群 -->
    <ol-animated-clusterlayer :animationDuration="cClusterlayerStyle.animationDuration"
      :distance="cClusterlayerStyle.distance" :preview="cClusterlayerStyle.preview">
      <ol-source-vector ref="vectorsource">
        <ol-feature v-for="index in cClusterlayerStyle.data" :key="index">
          <ol-geom-point :coordinates="index"></ol-geom-point>
        </ol-feature>
      </ol-source-vector>

      <ol-style :overrideStyleFunction="overrideStyleFunction">
        <ol-style-stroke :color="cClusterlayerStyle.strokeColor" :width="2"></ol-style-stroke>
        <ol-style-fill :color="cClusterlayerStyle.fillColor"></ol-style-fill>

        <ol-style-circle :radius="cClusterlayerStyle.radius">
          <ol-style-stroke color="black" :width="15" :lineDash="[]" lineCap="butt"></ol-style-stroke>
          <ol-style-fill color="black"></ol-style-fill>
        </ol-style-circle>

        <ol-style-text>
          <ol-style-fill color="white"></ol-style-fill>
        </ol-style-text>
      </ol-style>
    </ol-animated-clusterlayer>

    <ol-overlay :position="selectedCityPosition" v-if="selectedCityName != '' && !drawEnable">
      <template v-slot="slotProps">
        <div :style="overlayContentStyle">
          {{ selectedCityName }} {{ slotProps }}
        </div>
      </template>
    </ol-overlay>


    <!-- 点层 -->
    <ol-webgl-points-layer :styles="webglPointsStyle">
      <ol-source-webglpoints :format="geoJson" :url="webglPointsLayerUrl" />
    </ol-webgl-points-layer>
  </ol-map>
</template>
<script >
import { ref, inject, onMounted } from "vue";
import _ from "lodash";
export default {
  components: {
  },
  name: "HmOpenLayers",
  props: {

    /**
     * 点覆盖物
     */
    point: {
      type: Object,
      default: function () {
        return [{
          icon: "https://hm-public-static.oss-cn-shenzhen.aliyuncs.com/map/OpenLayersIcon/star.png",
          point: [39.15, 38.51],
          scale: 0.1,
          shakeStatus: true//摇动动画
        },
        {
          icon: "https://hm-public-static.oss-cn-shenzhen.aliyuncs.com/map/OpenLayersIcon/star.png",
          point: [38.15, 38.51],
          scale: 0.1,
          shakeStatus: false
        },]
      }
    },
    /**
     * 线覆盖物
     */
    line: {
      type: Object,
      default: function () {
        return [
          {
            coordinates: [
              [39.15, 34.51],
              [38.15, 35.51],
              [37.15, 36.51],
            ],
            strokeColor: 'red',
            strokeWidth: 20,
            shakeStatus: true//摇动动画
          },
          {
            coordinates: [
              [34.15, 31.51],
              [42.15, 36.51],
              [35.15, 37.51],
            ],
            strokeColor: 'blue',
            strokeWidth: 8,
            shakeStatus: false//摇动动画
          },
          {
            coordinates: [
              [25.6064453125, 44.73302734375001],
              [27.759765625, 44.75500000000001],
              [28.287109375, 43.32677734375001],
              [30.55029296875, 46.40294921875001],
              [31.69287109375, 43.04113281250001],
            ],
            strokeColor: 'blue',
            strokeWidth: 10,
            flowlineStatus: true,//开启渐变
            //渐变配置
            flowlineStyle: {
              color: 'red',
              color2: 'yellow',
              width: 10,
              width2: 10,
              arrow: 1
            },

            shakeStatus: false//摇动动画 ps:渐变加载不出动画
          }
        ]

      }
    },
    /**
     * 区域覆盖物
     */
    polygon: {
      type: Object,
      default: function () {
        return [{
          coordinates: [
            [
              [36.844959, 29.691586],
              [36.842749, 29.69098],
              [36.84217, 29.693122],
              [36.844358, 29.693667],
              [36.844959, 29.691586],
            ],
            //内圈
            [
              [36.84573034297229, 29.691206743587088],
              [36.84236332851385, 29.69026183008994],
              [36.84133866368556, 29.69351739026062],
              [36.8447693829186, 29.694312532467134],
              [36.84573034297229, 29.691206743587088],
            ],
          ],
          strokeColor: 'red',
          strokeWidth: 20,
          fillColor: "rgba(255,0,0,0.2)",
          shakeStatus: true//摇动动画
        },
        {
          coordinates: [
            [
              [38.84573034297229, 29.691206743587088],
              [38.84236332851385, 29.69026183008994],
              [38.84133866368556, 29.69351739026062],
              [38.8447693829186, 29.694312532467134],
              [38.84573034297229, 29.691206743587088],
            ],
          ],
          strokeColor: 'blue',
          strokeWidth: 20,
          fillColor: "rgba(255,0,0,0.2)",
          // shakeStatus:false//摇动动画
        },]
      }
    },
    /**
     * 圆型覆盖物
     */
    circle: {
      type: Object,
      default: function () {
        return [{
          radius: 2,
          center: [39.15, 38.51],
          strokeColor: "blue",
          strokeWidth: 2,
          fillColor: "rgba(255,200,0,0.2)",
          shakeStatus: true//摇动动画
        },
        {
          radius: 2,
          center: [38.15, 38.51],
          strokeColor: "blue",
          fillColor: "rgba(255,200,0,0.2)",
          strokeWidth: 2,
          shakeStatus: false//摇动动画
        }]
      }
    },
    /**
     * 缩放集群
     */
    clusterlayerStyle: {
      type: Object,
      default: function () {
        return {
          data: [
            [38.14, 31.15],
            [37.14, 32.15],
            [36.14, 33.15],
            [35.14, 34.15],
            [34.14, 35.15],
            [33.14, 36.15]],
          animationDuration: 500,
          distance: 40,
          strokeColor: "red",
          fillColor: "rgba(255,255,255,0.1)",
          strokeWidth: 2,
          radius: 20,
          preview: "https://hm-public-static.oss-cn-shenzhen.aliyuncs.com/map/OpenLayersIcon/marker.png"
        }
      }
    },
    /**
     * 矢量数据地址
     */
    sourceVectorUrl: {
      type: String,
      default: "https://raw.githubusercontent.com/alpers/Turkey-Maps-GeoJSON/master/tr-cities-airports.json"
    },
    /**
     * 矢量点击图片
     */
    markerIcon: {
      type: String,
      default: "https://hm-public-static.oss-cn-shenzhen.aliyuncs.com/map/OpenLayersIcon/marker.png"
    },
    /**
     * 覆盖资源地址
     */
    jawgLayerUrl: {
      type: String,
      default: "https://c.tile.jawg.io/jawg-dark/{z}/{x}/{y}.png?access-token=87PWIbRaZAGNmYDjlYsLkeTVJpQeCfl2Y61mcHopxXqSdxXExoTLEv7dwqBwSWuJ"
    },
    /**
     * 资源点位地址
     */
    webglPointsLayerUrl: {
      type: String,
      default: "https://openlayers.org/en/latest/examples/data/geojson/world-cities.geojson"
    },
    /**
     * 覆盖物样式
     */
    overlayStyle: {
      type: Object,
      default: function () {
        return {
          strokeColor: 'red',//笔划的颜色
          fillColor: "rgba(255,255,255,0.1)",//填充着色
          strokeWidth: 2,//绘制线大小

          circleColor: "blue",//圆圈着色
          circleRadius: 7,//绘制圆半径
        }
      }
    },
    /**
     * 地图样式
     */
    mapStyle: {
      type: Object,
      default: function () {
        return {
          height: '800px'
        }
      }
    },
    /**
     * 弹出覆盖物样式
     */
    overlayContentStyle: {
      type: Object,
      default: function () {
        return {
          background: 'blue',
          color: 'white',
          boxShadow: '05px 10px rgb(2 2 2 / 20%)',
          padding: '10px 20px',
          fontSize: '16px',
        }
      }
    },/**
       * 右击菜单配置
       */
    contextMenuItems: {
      type: Object,
      default: function () {
        return [
          {
            text: "Center map here",
            classname: "some-style-class", // add some CSS rules
            callback: (val) => {
              view.value.setCenter(val.coordinate);
            }, // `center` is your callback function
          },
          {
            text: "Add a Marker",
            classname: "some-style-class", // you can add this icon with a CSS class
            // instead of `icon` property (see next line)
            icon: 'https://hm-public-static.oss-cn-shenzhen.aliyuncs.com/map/OpenLayersIcon/marker.png', // this can be relative or absolute
            callback: (val) => {
              console.log(val);
              const feature = new Feature({
                geometry: new Geom.Point(val.coordinate),
              });
              vectorsource.value.source.addFeature(feature);
            },
          },
          "-", // this is a separator
        ]

      }
    },
    /**
     * 地图点层样式
     */
    webglPointsStyle: {
      type: Object,
      default: function () {
        return {
          "circle-radius": 6,
          "circle-fill-color": "yellow",
          "circle-stroke-width": 2,
          "circle-stroke-color": "darkblue",
          "circle-opacity": [
            "interpolate",
            ["linear"],
            ["get", "population"],
            40000,
            0.6,
            2000000,
            0.92,
          ],
        }
      }
    },
    /**
     * 区块配置
     */
    zones: {
      type: Object,
      default: function () {
        return [
          {
            title: "Turkey",
            extent: [17.952, 46.241, 52.449, 31.222],
          },
          {
            title: "Cyprus",
            extent: [31.2836, 36.1623, 35.5957, 34.1823],
          },
          {
            title: "Brazil",
            extent: [-120.32, 22.76, 17.67, -47.52],
          },
        ]
      }
    },
    /**
     * 中心点
     */
    center: {
      type: Object,
      default: function () {
        return [40, 40]
      }
    },
    /**
     * 开启绘制按钮
     */
    toggleControlStatus: {
      type: Boolean,
      default: true
    },
    /**
    * 开启滑动控制
    */
    swipeControlStatus: {
      type: Boolean,
      default: true
    },
    /**
     * 动画加载平铺
     */
    loadTilesWhileAnimating: {
      type: Boolean,
      default: true
    },
    /**
     * 交互加载平铺
     */
    loadTilesWhileInteracting: {
      type: Boolean,
      default: true
    },

    /**
     * 视图初始旋转
     */
    rotation: {
      type: Number,
      default: 0
    },
    /**
     * 缩放级别
     */
    zoom: {
      type: Number,
      default: 8
    },
    /**
     * 视图内部投影
     */
    projection: {
      type: String,
      default: "EPSG:4326"
    },
    /**
     * 显示全屏按钮
     */
    fullscreenControlShow: {
      type: Boolean,
      default: true
    },
    /**
     * 开启鹰眼
     */
    overviewmapControlShow: {
      type: Boolean,
      default: true
    },
    /**
     * 显示比例尺
     */
    scalelineControlShow: {
      type: Boolean,
      default: true
    },
    /**
     * 显示置顶箭头
     */
    rotateControlShow: {
      type: Boolean,
      default: true
    },
    /**
     * 显示鼠标位置
     */
    mousepositionControlStatus: {
      type: Boolean,
      default: true
    },
    /**
     * 显示缩放控件
     */
    zoomControlShow: {
      type: Boolean,
      default: true
    },
    /**
     * 显示缩略图
     */
    printdialogControlStatus: {
      type: Boolean,
      default: true
    },
    /**
     * 显示缩放滑块
     */
    zoomsliderControlShow: {
      type: Boolean,
      default: true
    },
    /**
     * 显示缩放范围
     */
    zoomtoextentControlShow: {
      type: Boolean,
      default: true
    },
    /**
     * 开启右击菜单
     */
    contextMenuControlShow: {
      type: Boolean,
      default: true
    },

  },
  data() {
    return {
      cCenter: [40, 40],
      layerList: [],
      path: [],
      height: 800,
      geoJson: null,
      selectCondition: null,
      selectedCityPosition: [],
      extent: null,
      selectedCityName: "",
      drawEnable: false,
      drawType: "Point",
      cCoordinates: [],
      cPoint: [],
      cCircle: [],
      cLine: [],
      cPolygon: [],
      cClusterlayerStyle: [],
      shakeTrue: [],
      shakeFalse: [],
      animationPath: null,
      jawgLayer: null,
      osmLayer: null,
    }
  },
  watch: {
    center: {
      handler: function (value) {
          this.cCenter = value;
        },
        deep: true,
    },
    point: {
        handler: function (value) {
        this.cPoint = value;
        this.getCoordinates()
        },
        deep: true,
    },
    circle: {
      handler: function (value) {
          console.log('value',value)
        this.cCircle = value;
        this.getCoordinates()
        },
        deep: true,
    },
    line: {
        handler: function (value) {
        this.cLine = value;
        this.getCoordinates()
        },
        deep: true,
    },
    polygon: {
        handler: function (value) {
        this.cPolygon = value;
        this.getCoordinates()
        },
        deep: true,
    },
  },
  created() {
    const format = inject("ol-format");
    this.geoJson = new format.GeoJSON();
    const selectConditions = inject("ol-selectconditions");
    const selectCondition = selectConditions.pointerMove;
    this.extent = inject("ol-extent");
  },
  mounted() {
    this.cCenter = this.center
    this.cPoint = this.point
    this.cCircle = this.circle
    this.cLine = this.line
    this.cPolygon = this.polygon
    this.cClusterlayerStyle = this.clusterlayerStyle
    const jawgLayer = this.$refs.jawgLayer;
    const osmLayer = this.$refs.osmLayer;
    this.layerList.push(jawgLayer.tileLayer);
    this.layerList.push(osmLayer.tileLayer);
    this.getCoordinates()
  },
  methods: {
    /**
     * 覆盖物处理
     * @return void
     */
    getCoordinates() {
      this.shakeTrue = []  
      this.shakeFalse = []
      let list = []
      let point = this.cPoint.map((e) => {
        return { ...e, type: "point", shakeStatus: e.shakeStatus ? e.shakeStatus : false }
      })
      list = list.concat(point)
      let circle = this.cCircle.map((e) => { return { ...e, type: "circle", shakeStatus: e.shakeStatus ? e.shakeStatus : false } })
      list = list.concat(circle)
      let line = this.cLine.map((e) => { return { ...e, type: "line", shakeStatus: e.shakeStatus ? e.shakeStatus : false } })
      list = list.concat(line)
      let polygon = this.cPolygon.map((e) => { return { ...e, type: "polygon", shakeStatus: e.shakeStatus ? e.shakeStatus : false } })
      list = list.concat(polygon)
      list = _(list)
        .groupBy("shakeStatus")
        .map((val, key) => {
          if (key == 'true') {
            this.shakeTrue = val
          } else {
            this.shakeFalse = val
          }
          return { shakeStatus: key, val: val }
        }).value()
      console.log('maplist', list)
    },
    /**
     * 更改绘制事件
     * @param {*} active 
     * @param {*} draw 
     * @return void
     */
    changeDrawType(active, draw) {
      this.drawEnable = active;
      this.drawType = draw;
    },
    /**
     * 修改插入覆盖物提示
     * @param {Object} event 
     * @return void
     */
    featureSelected(event) {
      if (event.selected.length == 1) {
        this.selectedCityPosition = this.extent.getCenter(
          event.selected[0].getGeometry().extent_
        );
        this.selectedCityName = event.selected[0].values_.name;
      } else {
        this.selectedCityName = "";
      }
    },
    /**
     * 集群缩放
     * @param {Object} feature 
     * @param {Object} style 
     * @return void
     */
    overrideStyleFunction(feature, style) {
      const clusteredFeatures = feature.get("features");
      const size = clusteredFeatures.length;

      const color = size > 20 ? "192,0,0" : size > 8 ? "255,128,0" : "0,128,0";
      const radius = Math.max(8, Math.min(size, 20));
      const dash = (2 * Math.PI * radius) / 6;
      const calculatedDash = [0, dash, dash, dash, dash, dash, dash];

      style.getImage().getStroke().setLineDash(dash);
      style
        .getImage()
        .getStroke()
        .setColor("rgba(" + color + ",0.5)");
      style.getImage().getStroke().setLineDash(calculatedDash);
      style
        .getImage()
        .getFill()
        .setColor("rgba(" + color + ",1)");

      style.getImage().setRadius(radius);

      style.getText().setText(size.toString());
    },
    /**
     * 矢量图形点击事件
     * @param {Object} feature 
     */
    selectInteactionFilter(feature) {
      return feature.values_.name != undefined;
    },
    /**
     * 开始图形绘制
     * @param {Object} event 
     */
    drawstart(event) {
      console.log('drawstart', event);
      this.$emit('drawstart', event)
    },
    /**
     * 结束图形绘制
     * @param {Object} event 
     */
    drawend(event) {
      console.log('drawend', event);
      this.$emit('drawend', event)
    },
    /**
     * 开始修改图形绘制
     * @param {Object} event 
     */
    modifystart(event) {
      console.log('modifystart', event);
      this.$emit('modifystart', event)
    },
    /**
     * 结束修改图形绘制
     * @param {Object} event 
     */
    modifyend(event) {
      console.log('modifyend', event);
      this.$emit('modifyend', event)
    },
    //    /**
    //    * 录制
    //    * @param {Object} event 
    //    */
    //   videoStopped(event) {
    //       console.log('videoStopped', event);
    //       this.$emit('videoStopped', event)
    // }

  }
}

</script>

<style lang="less" scoped>
/deep/.overlay-content {
  background: red !important;
  color: white;
  box-shadow: 0 5px 10px rgb(2 2 2 / 20%);
  padding: 10px 20px;
  font-size: 16px;
}

/deep/.editPoint {
  right: 200px
}

/deep/.editPolygon {
  right: 225px
}

/deep/.editCircle {
  right: 250px
}

/deep/.editLineString {
  right: 275px
}
</style>