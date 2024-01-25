<template>
  <div>
    <div id='mapContainer' class="hm-geovis"></div>

    <div class="geovis-toolbar">
      <a-button size="small" @click="toggleLineMeasure" :type="lineMeasureBtnType">距离测量</a-button>
      <a-button size="small" @click="togglePolygonMeasure" :type="polygonMeasureBtnType">面积测量</a-button>
      <div style="width: 15px;display: inline-block;">&nbsp;</div>

      <a-tooltip placement="top">
        <template #title>
          <span>添加点</span>
        </template>
        <a-button size="small" @click="toggleAddPoint" :type="drawPointBtnType">
          <template #icon><EnvironmentOutlined /></template>
        </a-button>
      </a-tooltip>
      
      <a-tooltip placement="top">
        <template #title>
          <span>添加线</span>
        </template>
        <a-button size="small" @click="toggleAddLine" :type="drawLineBtnType">
          <template #icon><MinusOutlined /></template>
        </a-button>
      </a-tooltip>
      
      <a-tooltip placement="top">
        <template #title>
          <span>添加多边形</span>
        </template>
        <a-button size="small" @click="toggleAddPolygon" :type="drawPolygonBtnType">
          <template #icon><BorderOutlined /></template>
        </a-button>
      </a-tooltip>
    </div>

    <div class="map-slot">
      <slot></slot>
    </div>
  </div>

</template>

<script>
// 参考：公司内网 http://192.168.1.104:2000/examples/index.html
//      外网：http://geovis.dev.haomo-tech.com:8000/examples/index.html
import _ from "lodash";
import {
  getAction,
} from "/@/request/http";
import { SearchOutlined, EnvironmentOutlined, MinusOutlined, BorderOutlined } from '@ant-design/icons-vue';

export default {
  name: "HmGeovis",
  components: {
    SearchOutlined,
    EnvironmentOutlined,
    MinusOutlined,
    BorderOutlined
  },
  props: {
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
        return [
          {
            id: 0,
            point: [116.404, 39.915],
            //url为空或者删除这项默认是红点
            iconUrl: "",
            show: true,
            height: 52,
            width: 52,
            //默认label的point和icon的point一样
            label: {
              text: "test1",
              offset: [-20, -40],
            },
            labelStyle: {
              color: "blue",
              borderRadius: "5px",
              borderColor: "#ccc",
              padding: "10px",
              fontSize: "16px",
              height: "30px",
              lineHeight: "30px",
              fontFamily: "微软雅黑",
            },
            actions: [
              {
                name: "click",
                callback: function (item) {
                  console.log(item, "marker click");
                },
              },
            ],
          },
          {
            id: 1,
            point: [116.408, 39.917],
            show: true,
            height: 52,
            width: 52,
            //默认label的point和icon的point一样
            label: {
              text: "test2",
              offset: [-20, -40],
            },
            labelStyle: {
              color: "blue",
              borderRadius: "5px",
              borderColor: "#ccc",
              padding: "10px",
              fontSize: "16px",
              height: "30px",
              lineHeight: "30px",
              fontFamily: "微软雅黑",
            },
            actions: [
              {
                name: "click",
                callback: function (item) {
                  console.log(item, "marker click");
                },
              },
            ],
          },
        ];
      },
    },
    /**
     * 线段集合
     */
    lines: {
      type: Array,
      default: function () {
        return [
          {
            id: 0,
            points: [
              [116.404, 39.915],
              [116.414, 39.915],
            ],
            style: {
              strokeColor: "red",
              strokeWidth: 50,
              strokeOpacity: 0,
              strokeStyle: "solid",
            },
            actions: [
              {
                name: "click",
                callback: function (item) {
                  console.log(item, "lines click");
                },
              },
            ],
          },
          {
            id: 1,
            points: [
              [116.405, 39.916],
              [116.415, 39.916],
            ],
            style: {
              strokeColor: "blue",
              strokeWidth: 50,
              strokeOpacity: 0,
              strokeStyle: "solid",
            },
            actions: [
              {
                name: "click",
                callback: function (item) {
                  console.log(item, "lines click");
                },
              },
            ],
          },
        ];
      },
    },
    /**
     * 多边形集合
     */
    polygons: {
      type: Array,
      default: function () {
        return [
          {
            region: "顺义区",
            point: [],
            style: {
              fillColor: "blue",
              fillOpacity: 0.2,
            },
            actions: [
              {
                name: "点击多边形",
                callback: function (item) {
                  console.log(item);
                },
              },
            ],
          },
          {
            region: "",
            points: [
              [116.405, 39.916],
              [116.416, 39.926],
              [116.417, 39.936],
              [116.418, 39.946],
              [116.419, 39.956],
              [116.42, 39.966],
              [116.421, 39.976],
              [116.422, 39.986],
              [116.423, 39.996],
              [116.424, 39.925],
            ],
            style: {
              fillColor: "red",
              fillOpacity: 0.2,
            },
            actions: [
              {
                name: "click",
                callback: function (item) {
                  console.log(item);
                },
              },
            ],
          },
        ];
      },
    },
    /**
     * 缩放等级
     */
    zoomLevel: {
      type: Number,
      default: 12,
    },
    /**
     * 显示绘制控件
     */
    showDrawManager: {
      type: Boolean,
      default: true,
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
    /**
     * 路书数据
     * */
    lushuData: {
      type: Object,
      default: function () {
        return {
          points: [],
          city: "北京",
          startPoint: [116.404844, 40],
          endPoint: [116.308102, 40.056057],
          defaultContent: "",
          speed: 500,
          autoView: true,
          icon: "",
          iconSize: 48,
          iconAnchorSize: 24,
          enableRotation: true,
          strokeColor: "#111",
          playAnimation: true,
        };
      },
    },
    /**
     * 运动轨迹
     */
    path: {
      type: Object,
      default: function () {
        return {
          points: [
            [116.297611, 40.047363],
            [116.302839, 40.048219],
            [116.308301, 40.050566],
            [116.305732, 40.054957],
            [116.304754, 40.057953],
            [116.306487, 40.058312],
            [116.307223, 40.056379],
          ],
          option: {
            overallView: true,
            tilt: 30,
            duration: 20000,
            delay: 3000,
          },
        };
      },
    },
  },
  data() {
    return {
      loadingStatus: false,
      randomId: `${new Date().getTime()}-${parseInt(Math.random() * 1000000)}`,
      cPoints: null,
      cZoomLevel: 0,
      cCenter: null,
      cLines: null,
      cPolygons: null,
      cWidth: 0,
      cHeight: 0,
      cPath: null,
      cLushuData: null,
      cShowDrawManager: "block",
      slotMarginTop: 0,
      mapLoadFlag: false,
      activeNav: "",
      cMouseDrawPositionBottom: "",
      cMouseDrawPositionMarginLeft: "",
      drawingManager: null,
      //点击的经纬度
      clickPointX: 0,
      clickPointY: 0,

      toolImgSrc:
        window.location.protocol +
        "//api.map.baidu.com/library/DrawingManager/1.4/src/bg_drawing_tool.png",

      overlay: {
        points: [],
        lines: [],
        polygons: [],
      },

      mapLayer: null,
      map: null,

      // 测量控件相关
      draw: null,
      sketch: null,
      lineMeasureBtnType: '',
      polygonMeasureBtnType: '',
      helpTooltipElement: null,
      measureTooltipElement: null,
      helpTooltip: null,
      measureTooltip: null,

      // 绘制控件相关
      drawPointBtnType: '',
      drawLineBtnType: '',
      drawPolygonBtnType: ''
    };
  },
  watch: {
    mouseDrawPosition: {
      handler(newVal) {
        this.cMouseDrawPositionMarginLeft = newVal.marginLeft;
        this.cMouseDrawPositionBottom = newVal.bottom;
      },
      deep: true,
    },
  },
  computed: {
  },
  created() {
    console.log(`HmGeovis created`)
    this.initMap();
  },
  mounted() {
    console.log(`HmGeovis mounted`)
    this.cMouseDrawPositionMarginLeft = this.mouseDrawPosition.marginLeft;
    this.cMouseDrawPositionBottom = this.mouseDrawPosition.bottom;
  },
  methods: {
    async initMap() {
      let self = this;
      await this.loadScript();

      //初始化地图
      this.mapLayer = this.getMapLayer();
      this.map = this._initMap(this.mapLayer);
      this.map.on('pointermove', this.pointerMoveHandler);
      this.map.on('click', this.mapClick);
      this.map.on('contextmenu', function(evt) {
        evt.preventDefault();
        self.stopMeasure();
      });
    },
    //加载geovis script
    loadScript() {
      let self = this;
      return new Promise((resolve, reject) => {
        self.loadScriptThirdParty().then(() => {
          self.loadScriptGEOVIS().then(() => {
            resolve("");
          });
        })
      });
    },

    loadScriptGEOVIS() {
      let self = this;
      return new Promise((resolve, reject) => {
        if (self.isScriptLoaded('GEOVIS.js')) {
          resolve("");
          return
        }
        //引入
        let script = document.createElement("script");
        script.type = "text/javascript";
        // 设置loading
        self.loadingStatus = true
        script.onload = function () {
          self.loadingStatus = false
          // 关闭loading
          resolve("");
        }
        script.onerror = (err) => reject(err);
        script.src = `@/components/built-in/vue3map/geovis/assets/GEOVIS.js`;

        document.body.appendChild(script);
        console.log(`HmGeovis 加载GEOVIS.js script完毕`);
      });
    },

    loadScriptThirdParty() {
      let self = this;
      return Promise.all([
        self._loadScript('ol.js', '@/components/built-in/vue3map/geovis/assets/thirdParty/OL6.4.3/ol.js'),
        self._loadScript('ol-mozilla.js', '@/components/built-in/vue3map/geovis/assets/thirdParty/OL6.4.3/ol-mozilla.js'),
        self._loadScript('masm.js', '@/components/built-in/vue3map/geovis/assets/resources/millib/masm/masm.js')
      ]);
    },

    _loadScript(scriptName, scriptSrc) {
      let self = this;
      return new Promise((resolve, reject) => {
        if (self.isScriptLoaded(scriptName)) {
          resolve("");
          return
        }
        //引入
        let script = document.createElement("script");
        script.type = "text/javascript";
        // 设置loading
        self.loadingStatus = true
        script.onload = function () {
          self.loadingStatus = false
          // 关闭loading
          resolve("");
        }
        script.onerror = (err) => reject(err);
        script.src = scriptSrc;

        document.body.appendChild(script);
        console.log(`HmGeovis 加载${scriptName} script完毕`);
      });
    },

    getMapLayer() {
      return new ol.layer.Tile({
        source: new ol.source.XYZ({
          //url: 'https://webst0{1-4}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',//影像
          url: 'http://webrd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',//地图
          wrapX: false
        })
      });
    },
    _initMap(mapLayer) {
      return new GV.iMap({
        target: 'mapContainer',
        layers: [mapLayer || this.mapLayer],
        controls: ol.control.defaults({ attribution: false }).extend([new ol.control.MousePosition(), new ol.control.ScaleLine()]),
        view: new ol.View({
          center: [11800000, 4360000],
          maxZoom: 18,
          minZoom: 3,
          zoom: 3,
          multiWorld: true
        })
      });
    },
    isScriptLoaded(srcString) {
      let scripts = document.getElementsByTagName("script");
      // console.log(`map scripts: `, scripts);
      for (let i = 0; i < scripts.length; i++) {
        if (scripts[i].src.indexOf(srcString) >= 0) {
          return true;
        }
      }
      return false;
    },
    initMeasureDraw(drawType) {
      let self = this;
      this.draw = new ol.interaction.Draw({
        source: new GV.source.Vector(),
        type: drawType,
        style: new ol.style.Style({
          fill: new ol.style.Fill({
            color: 'rgba(255, 0, 0, 0.2)',
          }),
          stroke: new ol.style.Stroke({
            color: 'rgba(0, 0, 255, 0.5)',
            lineDash: [10, 10],
            width: 2,
          }),
          image: new ol.style.Circle({
            radius: 5,
            stroke: new ol.style.Stroke({
              color: 'rgba(0, 0, 0, 0.7)',
            }),
            fill: new ol.style.Fill({
              color: 'rgba(255, 255, 255, 0.2)',
            }),
          }),
        }),
      });
      this.createMeasureTooltip();
      this.createHelpTooltip();
      this.draw.on('drawstart', function (evt) {
        // set sketch
        self.sketch = evt.feature;
        let tooltipCoord = evt.coordinate;

        let listener = self.sketch.getGeometry().on('change', function (evt) {
          let geom = evt.target;
          let output;
          if (geom instanceof ol.geom.Polygon) {
            output = self.formatArea(geom);
            tooltipCoord = geom.getInteriorPoint().getCoordinates();
          } else if (geom instanceof ol.geom.LineString) {
            output = self.formatLength(geom);
            tooltipCoord = geom.getLastCoordinate();
          }
          self.measureTooltipElement.innerHTML = output;
          self.measureTooltip.setPosition(tooltipCoord);
        });
      });

      this.draw.on('drawend', function () {
        self.measureTooltipElement.className = 'ol-tooltip ol-tooltip-static';
        self.measureTooltip.setOffset([0, -7]);
        // unset sketch
        self.sketch = null;
        // unset tooltip so that a new one can be created
        self.measureTooltipElement = null;
        self.createMeasureTooltip();
        // unByKey(listener);
      });

      return this.draw;
    },
    /**
     * 启用禁用距离测量
     */
    toggleLineMeasure(evt) {
      console.log(`toggleLineMeasure evt: `, evt);
      this.lineMeasureBtnType = this.lineMeasureBtnType == 'primary' ? '' : 'primary';
      if (this.lineMeasureBtnType == 'primary') {
        this.polygonMeasureBtnType = '';
        this.map.removeInteraction(this.draw);
        this.map.addInteraction(this.initMeasureDraw('LineString'));
      } else {
        this.stopMeasure();
      }
    },
    /**
     * 启用禁用面积测量
     * @param {*} evt 
     */
    togglePolygonMeasure(evt) {
      console.log(`togglePolygonMeasure evt: `, evt);
      this.polygonMeasureBtnType = this.polygonMeasureBtnType == 'primary' ? '' : 'primary';
      if (this.polygonMeasureBtnType == 'primary') {
        this.lineMeasureBtnType = '';
        this.map.removeInteraction(this.draw);
        this.map.addInteraction(this.initMeasureDraw('Polygon'));
      } else {
        this.stopMeasure();
      }
    },
    stopMeasure() {
      this.map.removeInteraction(this.draw);
      // 清除所有的测量tooltip
      this.map.removeOverlay(this.helpTooltip);
      this.map.removeOverlay(this.measureTooltip);
      this.draw = null;
    },
    createHelpTooltip() {
      if (this.helpTooltipElement) {
        this.helpTooltipElement.parentNode.removeChild(this.helpTooltipElement);
      }
      this.helpTooltipElement = document.createElement('div');
      this.helpTooltipElement.className = 'ol-tooltip hidden';
      this.helpTooltip = new ol.Overlay({
        element: this.helpTooltipElement,
        offset: [15, 0],
        positioning: 'center-left',
      });
      this.map.addOverlay(this.helpTooltip);
    },
    createMeasureTooltip() {
      if (this.measureTooltipElement) {
        this.measureTooltipElement.parentNode.removeChild(this.measureTooltipElement);
      }
      this.measureTooltipElement = document.createElement('div');
      this.measureTooltipElement.className = 'ol-tooltip ol-tooltip-measure';
      this.measureTooltip = new ol.Overlay({
        element: this.measureTooltipElement,
        offset: [0, -15],
        positioning: 'bottom-center',
      });
      this.map.addOverlay(this.measureTooltip);
    },
    pointerMoveHandler(evt) {
      if (evt.dragging) {
        return;
      }
      let helpMsg = '点击开始绘制';

      if (this.sketch) {
        let geom = this.sketch.getGeometry();
        if (geom instanceof ol.geom.Polygon) {
          helpMsg = '左键点击绘制多边形';
        } else if (geom instanceof ol.geom.LineString) {
          helpMsg = '左键点击绘制线';
        }
      }
      if (!this.helpTooltipElement) {
        return;
      }

      this.helpTooltipElement.innerHTML = helpMsg;
      this.helpTooltip.setPosition(evt.coordinate);

      this.helpTooltipElement.classList.remove('hidden');
    },
    formatLength(line) {
      var length = ol.sphere.getLength(line);
      var output;
      if (length > 100) {
        output = Math.round((length / 1000) * 100) / 100 + ' ' + 'km';
      } else {
        output = Math.round(length * 100) / 100 + ' ' + 'm';
      }
      return output;
    },
    formatArea(polygon) {
      var area = ol.sphere.getArea(polygon);
      var output;
      if (area > 10000) {
        output = Math.round((area / 1000000) * 100) / 100 + ' ' + 'km<sup>2</sup>';
      } else {
        output = Math.round(area * 100) / 100 + ' ' + 'm<sup>2</sup>';
      }
      return output;
    },

    /**
     * 启用点绘制
     * @param {*} evt 
     */
    toggleAddPoint(evt) {
      console.log(`toggleAddPoint evt: `, evt);
      this.drawPointBtnType = this.drawPointBtnType == 'primary' ? '' : 'primary';
      if (this.drawPointBtnType == 'primary') {
        this.drawLineBtnType = '';
        this.drawPolygonBtnType = '';
        // this.createHelpTooltip();
        this.map.graphicLayer.create({
          type: 'PointGraphic',
          size: 0.2, //大小,
          color: '#ffff00'
        }, undefined, item => {
          console.log(`点添加完成: `, item);
          this.drawPointBtnType = '';
        });
      } else {
        this.map.removeOverlay(this.helpTooltip);
      }
    },
    /**
     * 启用线绘制
     * @param {*} evt 
     */
    toggleAddLine(evt) {
      console.log(`toggleAddLine evt: `, evt);
      this.drawLineBtnType = this.drawLineBtnType == 'primary' ? '' : 'primary';
      if (this.drawLineBtnType == 'primary') {
        this.drawPointBtnType = '';
        this.drawPolygonBtnType = '';
        this.map.graphicLayer.create({
          type: 'PolylineGraphic',
          width: 2, //大小,
        }, undefined, item => {
          console.log(`线添加完成: `, item);
          this.drawLineBtnType = '';
        });
      } else {
        this.map.removeOverlay(this.helpTooltip);
      }
    },
    /**
     * 启用面绘制
     * @param {*} evt 
     */
    toggleAddPolygon(evt) {
      console.log(`toggleAddPolygon evt: `, evt);
      this.drawPolygonBtnType = this.drawPolygonBtnType == 'primary' ? '' : 'primary';
      if (this.drawPolygonBtnType == 'primary') {
        this.drawPointBtnType = '';
        this.drawLineBtnType = '';
        this.map.graphicLayer.create({
          type: 'PolygonGraphic',
          clampToGround: true,
          color: 'rgba(255, 0, 0, 0.5)'
        }, undefined, item => {
          console.log(`多边形添加完成: `, item);
          this.drawLineBtnType = '';
        });
      } else {
        this.map.removeOverlay(this.helpTooltip);
      }
    },
    disableDrawControls() {
      this.drawPointBtnType = '';
      this.drawLineBtnType = '';
      this.drawPolygonBtnType = '';
    },
    /**
     * 点击地图
     * @param {*} evt 
     */
    mapClick(evt) {
      // @TODO: 绘制点
      if (this.drawPointBtnType == 'primary') {
        console.log(`添加点: `, evt);
      }
    },
    /**
     * 添加点
     * 参考：http://192.168.1.104:2000/examples/gallery/editor.html#plotCreate
     * @param {*} lon 经度
     * @param {*} lat 纬度
     * @param {*} options GV.BillboardGraphic的其他选项
     */
    addPoint(lon, lat, options) {
      // let point = new GV.BillboardGraphic(Object.assign({
      //   type: 'billboard',
      //   position: new GV.GeoPoint(lon, lat)
      // }, options))
      
    },
    /**
     * 添加线
     * 参考：http://192.168.1.104:2000/examples/gallery/editor.html#plotCreate
     * @param {*} lineOption 
     */
    addLine(lineOption) {
      let line = new GV.PolylineGraphic({
        positions: _.map(lineOption.points, point => new GV.GeoPoint(point[0], point[1])),
        lineStyle: new GV.ColorStyle(lineOption.style || {
          color: '#0000ff', width: 2
        })
      });
      this.map.graphicLayer.add(line);
    },
    /**
     * 添加多边形
     * 参考：http://192.168.1.104:2000/examples/gallery/editor.html#plotCreate
     * @param {*} polygonOption 
     */
    addPolygon(polygonOption) {

    }
  },
};
</script>

<style lang="less" scoped>
.hm-geovis {
  position: relative;
  width: v-bind(cWidth);
  height: v-bind(cHeight);
  min-width: 500px;
  min-height: 500px;
}

.map-slot {
  pointer-events: none;
  position: absolute;
  z-index: 20;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
}

.geovis-toolbar {
  z-index: 30;
  position: absolute;
  left: 200px;
  top: 0px;
  margin-top: 5px;
  margin-right: 15px;
}

.drawing-panel {
  height: 47px;
  padding-left: 0px;
}

.bmap-btn {
  border-right: 1px solid #d2d2d2;
  float: left;
  width: 64px;
  height: 100%;
  // background-image: url(//api.map.baidu.com/library/DrawingManager/1.4/src/bg_drawing_tool.png);
  cursor: pointer;
}

.drawing-panel .bmap-marker {
  background-position: -65px 0;
}

.drawing-panel .bmap-polyline {
  background-position: -195px 0;
}

.drawing-panel .bmap-rectangle {
  background-position: -325px 0;
}

.drawing-panel .bmap-polygon {
  background-position: -260px 0;
}

.drawing-panel .bmap-circle {
  background-position: -130px 0;
}

ul li {
  list-style: none;
}

/deep/ .ol-rotate-reset {
  display: none !important;
}
</style>
