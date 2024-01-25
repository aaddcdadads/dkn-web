<template>
  <div class="hm-baidu-map">
    <div class="spin-container" v-show="loadingStatus">
      <a-spin size="large" :spinning="loadingStatus" />
    </div>
    <div class="map-search" v-if="showSearch">
      <p class="map-search-input"><input v-model="searchKey" @change="searchChange()" placeholder="请输入关键字" /></p>
      <ul v-if="searchKey && searchList.length">
        <li @click="searchItemclick(item)" v-for="(item, index) in searchList" :key="index">{{ item.title }}
        </li>
      </ul>
    </div>
    <ul class="drawing-panel" v-if="
    drawManagerRender.marker ||
    drawManagerRender.polyline ||
    drawManagerRender.rectangle ||
    drawManagerRender.polygon ||
    drawManagerRender.circle
  ">
      <li class="bmap-btn bmap-marker" id="marker" @click="draw($event, 'marker')" v-if="drawManagerRender.marker"
        :style="{
      'background-image': `url('//api.map.baidu.com/library/DrawingManager/1.4/src/bg_drawing_tool.png')`,
      'background-position-y': activeNav === 'marker' ? '-52px' : '0',
    }"></li>
      <li class="bmap-btn bmap-polyline" id="polyline" @click="draw($event, 'polyline')"
        v-if="drawManagerRender.polyline" :style="{
        'background-image': `url('//api.map.baidu.com/library/DrawingManager/1.4/src/bg_drawing_tool.png')`,
        'background-position-y': activeNav === 'polyline' ? '-52px' : '0',
      }"></li>
      <li class="bmap-btn bmap-rectangle" id="rectangle" @click="draw($event, 'rectangle')"
        v-if="drawManagerRender.rectangle" :style="{
        'background-image': `url('//api.map.baidu.com/library/DrawingManager/1.4/src/bg_drawing_tool.png')`,
        'background-position-y': activeNav === 'rectangle' ? '-52px' : '0',
      }"></li>
      <li class="bmap-btn bmap-polygon" id="polygon" @click="draw($event, 'polygon')" v-if="drawManagerRender.polygon"
        :style="{
        'background-image': `url('//api.map.baidu.com/library/DrawingManager/1.4/src/bg_drawing_tool.png')`,
        'background-position-y': activeNav === 'polygon' ? '-52px' : '0',
      }"></li>
      <li class="bmap-btn bmap-circle" id="circle" @click="draw($event, 'circle')" v-if="drawManagerRender.circle"
        :style="{
      'background-image': `url('//api.map.baidu.com/library/DrawingManager/1.4/src/bg_drawing_tool.png')`,
      'background-position-y': activeNav === 'circle' ? '-52px' : '0',
    }"></li>
    </ul>
    <div class="baidumap" :id="'baidumap' + randomId" ref="wrapRef"></div>
    <div class="baidumap-slot-div">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import _ from "lodash";
  import * as turf from '@turf/turf';

  export default {
    props: {
      /**
       * 百度地图Ak
       */
      baiduMapAk: {
        type: String,
        default: "cxtWZ9zGiLlLdQwBSuGGwpanwqfaLvEc",
      },
      /**
       * 地图类型
       * @type Enum
       * @options ["标准地图", "地球模式", "普通卫星地图"]
       */
      mapType: {
        type: String,
        default: '标准地图'
      },
      /**
       * 地图类型
       * @type Enum
       * @options ["bd09", "wgs84"]
       */
      coordType: {
        type: String,
        default: 'bd09'
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
       * 绘制图形是否编辑
       */
      updateConfirmStatus: {
        type: Boolean,
        default: true,
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
        default: false,
      },
      /**
       * 显示搜索控件
       */
      showSearch: {
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
    watch: {
      baiduMapAk(value) {
        this.cBaiduMapAk = value;
      },
      height(value) {
        this.cHeight = this.$getCssUnit(value);
      },
      width(value) {
        this.cWidth = this.$getCssUnit(value);
      },
      zoomLevel(value) {
        this.cZoomLevel = value;
        this.map.setZoom(value);
      },
      center: {
        handler: function (value, oldValue) {
          let self = this;
          this.cCenter = value;
          if (!self.map) {
            return;
          }
          const point = new window.BMapGL.Point(self.cCenter[0], self.cCenter[1]);
          self.map.setCenter(point);
        },
        deep: true,
      },
      points: {
        handler: function (value, oldValue) {
          let self = this;
          this.cPoints = value;
          if (!self.map) {
            return;
          }

          // 删除原来的markers
          self.removeOverlays(self.overlay.points);
          this.addMarker();
        },
        deep: true,
      },
      lines: {
        handler: function (value, oldValue) {
          let self = this;
          this.cLines = value;
          if (!self.map) {
            return;
          }
          self.removeOverlays(self.overlay.lines);
          this.addPolyline();
        },
        deep: true,
      },
      polygons: {
        handler: function (value) {
          let self = this;
          this.cPolygons = value;
          if (!self.map) {
            return;
          }

          self.removeOverlays(self.overlay.polygons);
          this.addPolygons();
        },
        deep: true,
      },
      path: {
        handler: function (value) {
          this.cPath = value;
          if (!self.map) {
            return;
          }

          this.playPathMv();
        },
        deep: true,
      },
      showDrawManager(newVal) {
        this.cShowDrawManager = newVal ? "block" : "none";
        if (!self.map) {
          return;
        }

        this.addDrawingManager();
      },
      mouseDrawPosition: {
        handler(newVal) {
          this.cMouseDrawPositionMarginLeft = newVal.marginLeft;
          this.cMouseDrawPositionBottom = newVal.bottom;
        },
        deep: true,
      },
      lushuData: {
        handler(newVal) {
          this.cLushuData = newVal;
          if (!self.map) {
            return;
          }

          this.playLushu();
        },
        deep: true,
      },
      mapType: {
        handler(newVal) {
          if (newVal) {
            this.cMapType = newVal;
            this.map.setMapType(this.getMapType());
          }
        },
      },
    },
    data() {
      return {
        loadingStatus: false,
        randomId: `${new Date().getTime()}-${parseInt(Math.random() * 1000000)}`,
        cBaiduMapAk: "",
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
        cMapType: null,
        slotMarginTop: 0,
        mapLoadFlag: false,
        map: null,
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
          components: [], // 组件覆盖物，例如覆盖echarts图例
        },
        // 地图搜索
        searchKey: '',
        searchList: '',
        searchCurrent: {}, // 当前选中项
      };
    },
    mounted() {
      console.log(`HmBaiduMap mounted`);
      let self = this;
      this.$turf = turf;
      this.cWidth = this.$getCssUnit(this.width);
      this.cHeight = this.$getCssUnit(this.height);
      this.cPoints = this.points;
      this.cBaiduMapAk = this.baiduMapAk;
      this.cZoomLevel = this.zoomLevel;
      this.cCenter = this.center;
      this.cLines = this.lines;
      this.cPolygons = this.polygons;
      this.cShowDrawManager = this.showDrawManager ? "block" : "none";
      this.slotMarginTop = `-${this.cHeight}`;
      this.cMouseDrawPositionMarginLeft = this.mouseDrawPosition.marginLeft;
      this.cMouseDrawPositionBottom = this.mouseDrawPosition.bottom;
      this.cMapType = this.mapType
      self.initMap();
    },
    methods: {
      //鼠标绘制
      draw(e, type) {
        this.closeEditButton() // 关闭其他进行中的图
        this.drawingManager.close();

        this.activeNav = type;
        if (
          this.drawingManager._isOpen &&
          this.drawingManager.getDrawingMode() === type
        ) {
          this.drawingManager.close();
        } else {
          this.drawingManager.setDrawingMode(type);
          this.drawingManager.open();
        }
        // if (this.activeNav === type) {
        //   this.drawingManager.close();
        //   const dom = document.getElementById(`${type}`);
        //   dom.style["background-position-y"] = "0";
        //   this.activeNav = "";
        // } else {
        //   this.activeNav = type;
        //   if (
        //     this.drawingManager._isOpen &&
        //     this.drawingManager.getDrawingMode() === type
        //   ) {
        //     this.drawingManager.close();
        //   } else {
        //     this.drawingManager.setDrawingMode(type);
        //     this.drawingManager.open();
        //   }
        // }
      },
      //绘制确认事件
      confirmOperate(e, status, updateStatus) {
        if (!status) {
          this.draw(this.drawe, this.drawType);
        }
        this.$emit("drawFinish", e);
        // if (this.updateConfirmStatus && !updateStatus) {
        //   this.updateConfirm(e, this.updateConfirmStatus, this.map)
        // }
      },

      //重新绘制
      updateConfirm(event, status, map) {
        let self = this
        console.log("授权范围s：", event);
        let coordinates = [];
        let length = event.length - 1
        if (event[length]) {
          event[length].getPath().forEach((e) => {
            let point = [
              parseFloat(e.lng.toFixed(7)),
              parseFloat(e.lat.toFixed(7)),
            ];
            coordinates.push(point);
          });
        } else {
          event.overlay.points.forEach((e) => {
            let point = [
              parseFloat(e.latLng.lng.toFixed(7)),
              parseFloat(e.latLng.lat.toFixed(7)),
            ];
            coordinates.push(point);
          });
          event.overlay.hide();
        }
        let polygons = this.overlay.polygons[0];
        map.removeOverlay(polygons);
        polygons = this.addPolygon({
          points: coordinates,
          style: {
            strokeColor: this.drawStyleOptions.strokeColor,
            fillColor: this.drawStyleOptions.fillColor,
            strokeWeight: 2,
            fillOpacity: 0.2,
          },
          actions: [
            {
              name: 'click',
              callback: function () {
                console.log('编辑区域', self.updateConfirmStatus)
                if (status) {
                  polygons[0].enableEditing();
                  polygons[0].vertexMarkers.forEach((vertexMarker) => {
                    vertexMarker.addEventListener("dragend", (dragend) => {
                      polygons[0].disableEditing();
                      self.$emit("drawFinish", map.getOverlays(), true);
                      // this.confirmOperate(self.map.getOverlays(), true);
                    });
                  });
                }
              },
            },
          ]
        });
        this.removePolygons = polygons[0]
      },
      //删除重新编辑的polygon
      removeOverlaypolygons() {
        this.map.removeOverlay(this.removePolygons);
      },
      // 根据图形计算面积
      calcLengthAndArea(overlay) {
        let polygon = overlay
        var turfPolygon = {
          "type": "Feature",
          "geometry": {
            "type": "Polygon",
            "coordinates": [polygon.getPath().map(function (point) {
              return [point.lng, point.lat];
            })]
          }
        };
        var length = turf.length(turf.lineString(polygon.getPath().map(function (point) {
          return [point.lng, point.lat];
        })), { units: 'meters' });  // 计算周长，单位为米
        var area = (turf.area(turfPolygon));  // 计算面积，单位为平方米

        console.log("周长：" + length + "米");
        console.log("面积：" + area + "平方米");

        return {
          length: length,
          area: area
        }
      },

      //绘制编辑事件
      updateConfirmOperate(e) {
        let self = this;
        console.log("e", e);
        e.enableEditing();
        this.polygonDragend(e);
      },
      //拖拽停止事件
      polygonDragend(e) {
        let self = this;
        e.vertexMarkers.forEach((vertexMarker) => {
          vertexMarker.addEventListener("dragend", (dragend) => {
            e.disableEditing();
            // self.$emit("drawFinish", self.map.getOverlays(), true);
            this.confirmOperate(self.map.getOverlays(), true, false);
          });
        });
      },
      //加载baidumap script
      loadScript() {
        let self = this;
        return new Promise((resolve, reject) => {

          // if () {
          //   console.log(`百度地图脚本已加载`);
          //   return new Promise((resolve, reject) => {
          //     window.init = () => resolve("BMapGL");
          //     resolve();
          //   });
          // }
          if (self.isBaiduMapScriptLoaded('https://api.map.baidu.com/api')) {
            resolve("");
            return
          }
          // window.init = () => resolve("BMapGL");
          //引入BMapGL
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
          script.src = `https://api.map.baidu.com/api?type=webgl&v=1.0&ak=${this.baiduMapAk}&callback=init`;

          document.body.appendChild(script);
          console.log(`HmBaiduMap 加载百度地图script完毕`);
        });
      },
      isBaiduMapScriptLoaded(srcString) {
        let scripts = document.getElementsByTagName("script");
        console.log(`HmBaiduMap scripts: `, scripts);
        for (let i = 0; i < scripts.length; i++) {
          if (scripts[i].src.indexOf(srcString) >= 0) {
            return true;
          }
        }
        return false;
      },
      //加载动画script
      loadTrackAnimation() {
        let self = this
        return new Promise((resolve, reject) => {
          if (self.isBaiduMapScriptLoaded('https://mapopen.bj.bcebos.com/github/BMapGLLib/TrackAnimation')) {
            resolve("");
            return
          }
          const script = document.createElement("script");
          script.type = "text/javascript";
          script.onload = () => resolve("");
          script.onerror = (err) => reject(err);
          script.src =
            "https://mapopen.bj.bcebos.com/github/BMapGLLib/TrackAnimation/src/TrackAnimation.min.js";
          document.body.appendChild(script);
        });
      },
      //加载路书script
      loadLuShu() {
        let self = this
        return new Promise((resolve, reject) => {
          if (self.isBaiduMapScriptLoaded('https://bj.bcebos.com/v1/mapopen/github/BMapGLLib/Lushu')) {
            resolve("");
            return
          }
          const script = document.createElement("script");
          script.type = "text/javascript";
          script.onload = () => resolve("");
          script.onerror = (err) => reject(err);
          script.src =
            "https://bj.bcebos.com/v1/mapopen/github/BMapGLLib/Lushu/src/Lushu.min.js";
          document.body.appendChild(script);
        });
      },
      //加载鼠标控件script
      loadDrawingManager() {
        let self = this
        return new Promise((resolve, reject) => {
          if (self.isBaiduMapScriptLoaded('https://mapopen.cdn.bcebos.com/github/BMapGLLib/DrawingManager')) {
            resolve("");
            return
          }
          const link = document.createElement("link");
          link.rel = "stylesheet";
          link.href =
            "https://mapopen.cdn.bcebos.com/github/BMapGLLib/DrawingManager/src/DrawingManager.min.css";
          document.body.appendChild(link);
          const script = document.createElement("script");
          script.type = "text/javascript";
          script.onload = () => resolve("");
          script.onerror = (err) => reject(err);
          script.src =
            "https://mapopen.cdn.bcebos.com/github/BMapGLLib/DrawingManager/src/DrawingManager.min.js";
          document.body.appendChild(script);
        });
      },

      /**
       * 注册点、线、多边形的事件
       */
      registerTargetEvents(marker, actions) {
        if (!actions) {
          return;
        }
        if (actions.length == 0) {
          return;
        }
        actions.forEach((action) => {
          marker.addEventListener(action.name, action.callback);
        });
      },

      //添加marker
      addMarker() {
        let self = this;
        if (!self.map) {
          return;
        }
        let markerList = [];
        this.cPoints.forEach((item, index) => {
          let pt = new window.BMapGL.Point(item.point[0], item.point[1]);
          // url为空的话等于默认的红点
          if (item.iconUrl === "" || item.iconUrl === undefined) {
            let marker = new window.BMapGL.Marker(pt);
            self.registerTargetEvents(marker, item.actions);
            markerList.push(marker);
          } else if (item.show === false) {
            markerList = [];
          } else {
            let icon = new window.BMapGL.Icon(
              item.iconUrl,
              new window.BMapGL.Size(item.width, item.height)
            );
            let marker = new window.BMapGL.Marker(pt, {
              icon: icon,
            });
            self.registerTargetEvents(marker, item.actions);
            markerList.push(marker);
          }
        });
        const labelList = this.addLabel();
        markerList.forEach((marker, index) => {
          self.map.addOverlay(marker);
          self.map.addOverlay(labelList[index]);
        });
        self.overlay.points = markerList;
      },
      /**
       * 添加GeoJSON格式的点。properties中可以填充icon相关属性
       * @param {*} geojsonPoint 
       */
      addGeojsonMarker(geojsonPoint) {
        let self = this;
        if (this.coordType === 'bd09') {
          const marker = self.addGeojsonMarkerFun([geojsonPoint.geometry.coordinates], geojsonPoint)
          return marker
        } else {
          return new Promise(resolve => {
            self.translateCoordinateBatch([geojsonPoint.geometry.coordinates]).then(pointTranslation => {
              const marker = self.addGeojsonMarkerFun(pointTranslation, geojsonPoint)
              resolve(marker)
            })
          })

        }
      },

      /**
       * 批量添加GeoJSON格式的点
       */
      addBatchGeojsonMarker(geojsonPoints, noTranslate) {
        let self = this;
        let markers = []
        if (this.coordType === 'bd09' || noTranslate) {
          geojsonPoints.forEach(item => {
            const marker = self.addGeojsonMarkerFun([item.geometry.coordinates], item)
            markers.push(marker)
          })
          return markers
        } else {
          return new Promise(resolve => {
            const geoPoints = geojsonPoints.map(item => {
              return item.geometry.coordinates
            })

            self.translateCoordinateBatch(geoPoints).then(pointTranslations => {
              pointTranslations.forEach((item, index) => {
                const marker = self.addGeojsonMarkerFun([item], geojsonPoints[index])
                markers.push(marker)
              })
              resolve(markers)
            })
          })
        }
      },

      // 添加点位实现
      addGeojsonMarkerFun(pointTranslation, geojsonPoint) {
        let self = this;
        let pt = new window.BMapGL.Point(pointTranslation[0][0], pointTranslation[0][1]);
        // url为空的话等于默认的红点
        let marker = null;
        if (geojsonPoint.properties.iconUrl === "" || geojsonPoint.properties.iconUrl === undefined) {
          marker = new window.BMapGL.Marker(pt, geojsonPoint.properties);
        } else {
          let icon = new window.BMapGL.Icon(
            geojsonPoint.properties.iconUrl,
            new window.BMapGL.Size(geojsonPoint.properties.width || 50, geojsonPoint.properties.height || 50)
          );
          marker = new window.BMapGL.Marker(pt, Object.assign({
            icon: icon,
          }, geojsonPoint.properties));
        }
        if (geojsonPoint.properties.actions) {
          self.registerTargetEvents(marker, geojsonPoint.properties.actions);
        }
        marker.data = geojsonPoint;
        self.map.addOverlay(marker);
        self.overlay.points.push(marker);
        return marker;
      },
      /**
       * 删除标记点
       */
      removeMarkers(filter) {
        let self = this;
        if (!filter) {
          self.removeOverlays(self.overlay.points);
          return;
        }
        self.removeOverlays(_.filter(self.overlay.points, filter));
      },
      //添加label
      addLabel() {
        let self = this;
        let labelList = [];
        this.cPoints.forEach((item, index) => {
          if (!item.point) {
            return;
          }

          if (item.point.length !== 2) {
            return;
          }

          if (!item.label.text) {
            return;
          }

          let itemLabel = item.label || {
            text: "",
          };

          let pt = new window.BMapGL.Point(item.point[0], item.point[1]);
          let opts = {
            position: pt,
            offset: new window.BMapGL.Size(self.getLabelOffset(item)),
          };

          let label = new window.BMapGL.Label(itemLabel.text, opts);
          label.setStyle(itemLabel.Style);
          labelList.push(label);
        });
        return labelList;
      },
      getLabelOffset(point) {
        if (!point.label || !point.label.offset) {
          return [0, 0];
        }
        return point.label.offset;
      },
      //添加polyline
      async addPolyline() {
        let self = this;
        let lineList = [];

        for (let line of this.cLines) {
          if (!line.points) {
            return;
          }

          let pointList = [];
          const linesTmp = JSON.parse(JSON.stringify(line))
          // 转换 
          if (self.coordType !== 'bd09') {
            const tPoints = await self.translateCoordinateBatch(linesTmp.points)
            linesTmp.points = tPoints
          }
          linesTmp.points.forEach((point) => {
            pointList.push(new window.BMapGL.Point(point[0], point[1]));
          });
          let polygon = new window.BMapGL.Polyline(pointList, linesTmp.style);
          self.registerTargetEvents(polygon, linesTmp.actions);
          lineList.push(polygon);
        }

        lineList.forEach((line) => {
          this.map.addOverlay(line);
        });
        self.overlay.lines = lineList;
      },

      // 添加一条polyline
      async addOnePolyline(line) {
        let self = this;
        if (!line.points) {
          return;
        }
        let pointList = [];
        const linesTmp = JSON.parse(JSON.stringify(line))
        // 转换 
        if (self.coordType !== 'bd09') {
          const tPoints = await self.translateCoordinateBatch(linesTmp.points)
          linesTmp.points = tPoints
        }
        linesTmp.points.forEach((point) => {
          pointList.push(new window.BMapGL.Point(point[0], point[1]));
        });
        let polygon = new window.BMapGL.Polyline(pointList, linesTmp.style);
        self.registerTargetEvents(polygon, linesTmp.actions);
        this.map.addOverlay(polygon);
        self.overlay.lines.push(polygon);
        return polygon
      },

      // 编辑一条polyline
      async editOnePolyline(line, addPoints = [], index) {
        let self = this;
        let points = _.cloneDeep(line.getPath())
        // 如果有index，则为删除index处的点位
        if (index || index === 0) {
          points.splice(index, 1)
        }
        // 如果有点位，则为新增
        if (addPoints.length) {
          // 坐标转换
          if (self.coordType !== 'bd09') {
            addPoints = await self.translateCoordinateBatch(addPoints)
          }
          addPoints.forEach(point => {
            const newPoint = new BMapGL.Point(point[0], point[1]);
            points.push(newPoint)
          })
        }
        line.setPath(points);
      },

      //添加polygons
      addPolygons() {
        let self = this;
        this.cPolygons.forEach((polygon, index) => {
          self.addPolygon(polygon);
        });
      },
      addPolygon(polygon) {
        let self = this;
        if (!self.map) {
          return;
        }
        let mapPolygons = [];
        if (!polygon.points) {
          return mapPolygons;
        }

        //没有region默认有point
        if (polygon.region === "" || polygon.region === undefined) {
          let pointList = [];
          polygon.points.forEach((item) => {
            pointList.push(new window.BMapGL.Point(item[0], item[1]));
          });
          let hole = new window.BMapGL.Polygon(pointList, polygon.style);
          self.registerTargetEvents(hole, polygon.actions);
          this.map.addOverlay(hole);
          mapPolygons.push(hole);
          //增加了对proxy对象的判断
        } else if (
          polygon.points === [] ||
          polygon.points === undefined ||
          polygon.points.value === undefined
        ) {
          let bd = new window.BMapGL.Boundary();
          bd.get(polygon.region, (rs) => {
            let count = rs.boundaries.length;
            for (let i = 0; i < count; i++) {
              let hole = new window.BMapGL.Polygon(rs.boundaries[i], polygon.style);
              self.registerTargetEvents(hole, polygon.actions);
              this.map.addOverlay(hole);
              mapPolygons.push(hole);
            }
          });
        }
        self.overlay.polygons = _.concat(self.overlay.polygons, mapPolygons);

        return mapPolygons;
      },
      /**
       * 在地图上绘制geojson的多边形 
       * @param {*} geojsonPolygon GEOJSON里的polygon
       * @param {*} style 多边形的样式
       * @param {*} actions 多边形的事件
       */
      addGeojsonPolygon(geojsonPolygon, style, actions) {
        let self = this;
        let polygons = self.addPolygon({
          points: geojsonPolygon.geometry.coordinates[0],
          style: Object.assign({
            strokeColor: '#FDA403',
            strokeWeight: 2,
            fillColor: '#FDA40340',
            fillOpacity: 0.2,
          }, style || {}),
          actions: actions || [],
        });
        return polygons[polygons.length - 1];
      },
      /**
       * 将地图聚焦到多个图层进行最佳显示
       */
      focusOnLayers(layers) {
        let points = [];
        _.each(layers, layer => {
          if (layer.points) {
            points = _.concat(points, _.map(layer.points, point => [point.latLng.lng, point.latLng.lat]))
            return;
          }
          if (layer.point) {
            points.push([layer.latLng.lng, layer.latLng.lat])
          }
        });
        let center = turf.center(turf.points(points));
        console.log(`focusOnLayers: `, center);

        // @TODO: 计算最佳的zoom

        this.map.setCenter(new window.BMapGL.Point(
          center.geometry.coordinates[0], center.geometry.coordinates[1]
        ));
      },
      // 设置最佳zoom
      setSuitableZoom(layers, maxZoom, minZoom) {
        let zoom = this.calcZoom(layers); // 计算最佳zoom
        zoom > maxZoom ? zoom = maxZoom : ''
        zoom < minZoom ? zoom = minZoom : ''
        this.map.setZoom(zoom); // 设置zoom
      },
      // 计算最佳zoom
      calcZoom(layers) {
        const points = this.getPointsFromLayers(layers); // 获取所有点位
        // 获取最大、最小经纬度
        let maxLng = points[0][0];
        let minLng = points[0][0];
        let maxLat = points[0][1];
        let minLat = points[0][1];
        points.forEach((item) => {
          item[0] > maxLng ? (maxLng = item[0]) : '';
          item[0] < minLng ? (minLng = item[0]) : '';

          item[1] > maxLat ? (maxLat = item[1]) : '';
          item[1] < minLat ? (minLat = item[1]) : '';
        });
        // 计算zoom
        let zoom = null; // zoom值
        const zoomList = ['50', '100', '200', '500', '1000', '2000', '5000', '10000', '20000', '25000', '50000', '100000', '200000', '500000', '1000000', '2000000'];
        const pointA = new window.BMapGL.Point(maxLng, maxLat); // 创建点坐标A
        const pointB = new window.BMapGL.Point(minLng, minLat); // 创建点坐标B
        const distance = this.map.getDistance(pointA, pointB).toFixed(1); //获取两点距离,保留小数点后两位
        zoomList.forEach((item, index) => {
          (Number(item) > Number(distance) && !zoom) ? (zoom = 18 - index + 3) : '';
        });
        return zoom || 12;
      },
      // 获取layers下所有点位
      getPointsFromLayers(layers) {
        let points = [];
        // 获取所有点位
        _.each(layers, (layer) => {
          if (layer.points) {
            points = _.concat(
              points,
              _.map(layer.points, (point) => [point.latLng.lng, point.latLng.lat])
            );
            return;
          }
          if (layer.point) {
            points.push([layer.latLng.lng, layer.latLng.lat]);
          }
        });
        return points;
      },
      //添加鼠标绘制功能
      addDrawingManager() {
        let self = this;
        let styleOptions = this.drawStyleOptions;
        let labelOptions = {
          borderRadius: "2px",
          background: "#FFFBCC",
          border: "1px solid #E1E1E1",
          color: "#703A04",
          fontSize: "12px",
          letterSpacing: "0",
          padding: "5px",
        };
        this.drawingManager = new window.BMapGLLib.DrawingManager(this.map, {
          //isOpen: this.cDrawing,        // 是否开启绘制模式
          enableCalculate: false, // 绘制是否进行测距测面
          enableSorption: true, // 是否开启边界吸附功能
          sorptiondistance: 20, // 边界吸附距离
          circleOptions: styleOptions, // 圆的样式
          polylineOptions: styleOptions, // 线的样式
          polygonOptions: styleOptions, // 多边形的样式
          rectangleOptions: styleOptions, // 矩形的样式
          labelOptions: labelOptions, // label样式
        });
        //监听绘制完成事件
        this.drawingManager.addEventListener("overlaycomplete", (e) => {
          console.log("HmBaiduMap 绘制完成:", e, self.drawingManager);

          this.confirmOperate(e);
        });

        document.getElementById("marker") ? document.getElementById("marker").addEventListener("click", (e) => {
          self.onClickDrawingMarker(e);
        }) : '';
        document.getElementById("polyline") ? document.getElementById("polyline").addEventListener("click", (e) => {
          self.onClickDrawingPolyline(e);
        }) : '';
        document.getElementById("rectangle") ? document.getElementById("rectangle").addEventListener("click", (e) => {
          self.onClickDrawingRectangle(e);
        }) : '';
        document.getElementById("polygon") ? document.getElementById("polygon").addEventListener("click", (e) => {
          self.onClickDrawingPolygon(e);
        }) : '';
        document.getElementById("circle") ? document.getElementById("circle").addEventListener("click", (e) => {
          self.onClickDrawingCircle(e);
        }) : '';
      },

      /**
       * 添加鼠绘编辑和删除按钮及事件
       * @param {*} confirmComponent 确认按钮组件 如{ component: HmAntIconText, props, offset }
       * @param {*} deleteBtnComponent 删除按钮组件 如{ component: HmAntIconText, props, offset }
       * @param {*} event 绑定事件传参  如addEventListener.("click", (event) => {}) 内的event
       * @param {*} overlay 被添加的地图对象
       * @param {*} ignoreCoordinateTransformation 是否忽略坐标转换
       */
      addDrawingEditingAndDelete(confirmComponent, deleteBtnComponent, overlay, ignoreCoordinateTransformation = false) {
        if (overlay._config.enableEditing) return
        if (overlay.deleteBtn && overlay.deleteBtn.domElement) return

        const isMarker = overlay instanceof BMapGL.Marker
        // 写入编辑按钮
        let points = []
        if (!isMarker) {
          points = [
            overlay.getPath().map(function (point) {
              return [point.lng, point.lat];
            }),
          ]
        } else {
          points = [[[overlay.latLng.lng, overlay.latLng.lat]]]
        }
        let confirmBtn, deleteBtn
        deleteBtnComponent ? deleteBtn = this.addComponentOverlay(deleteBtnComponent.component, { props: { ...deleteBtnComponent.props, 'type': 'delete', hashCode: overlay.hashCode, 'ismarker': isMarker } }, { point: points[0][0], offset: { x: 5, y: 5 } }, ignoreCoordinateTransformation) : ''
        !isMarker && confirmComponent ? confirmBtn = this.addComponentOverlay(confirmComponent.component, { props: { ...confirmComponent.props, 'type': 'confirm', hashCode: overlay.hashCode } }, { point: points[0][0], offset: { x: 55, y: 5 } }, ignoreCoordinateTransformation) : ''
        overlay.deleteBtn = deleteBtn

        // 所有元素取消编辑
        this.closeEditButton(confirmBtn, deleteBtn)

        // 启用编辑状态
        !isMarker ? overlay.enableEditing() : ''

        // 注册确认按钮单击事件
        confirmBtn ? confirmBtn.domElement.addEventListener("click", () => {
          // 保存编辑结果
          this.map.removeOverlay(confirmBtn);
          this.map.removeOverlay(deleteBtn);
          this.$emit('drawFinish', { overlay: overlay })
          setTimeout(() => {
            overlay.disableEditing(); // 结束编辑状态
          }, 100)
        }) : '';

        // 注册删除按钮单击事件
        deleteBtn ? deleteBtn.domElement.addEventListener("click", () => {
          // 删除图形
          this.map.removeOverlay(overlay);
          this.map.removeOverlay(confirmBtn);
          this.map.removeOverlay(deleteBtn);

          // 标记删除
          overlay.isRemove = true
          this.$emit('drawFinish', { overlay: overlay })
        }) : ''
      },

      // 关闭所有的编辑及新建状态下的按钮
      closeEditButton(editConfirmBtn, editDeleteBtn) {
        // 关闭新建的
        {
          const createConfirmBtn = document.getElementById('confirmOperate')
          createConfirmBtn ? createConfirmBtn.click() : ''
        }

        // 关闭编辑状态下的
        {
          this.overlay.components.forEach(item => {
            if (item.domElement
              && item.domElement._vnode.props.type === "confirm"
              && (!editConfirmBtn || editConfirmBtn.domElement._vnode.props.hashCode !== item.domElement._vnode.props.hashCode)
            ) {
              item.domElement.click()
            }

            if (item.domElement
              && item.domElement._vnode.props.type === "delete"
              && item.domElement._vnode.props.ismarker
              && (!editDeleteBtn || editDeleteBtn.domElement._vnode.props.hashCode !== item.domElement._vnode.props.hashCode)
            ) {
              this.map.removeOverlay(item);
            }
          })
        }
      },

      onClickDrawingMarker(event) {
        console.log(`HmBaiduMap click drawing marker: `, event);
        this.$emit("clickDrawingMarker", event);
      },
      onClickDrawingPolyline(event) {
        console.log(`HmBaiduMap click drawing polyline: `, event);
        this.$emit("clickDrawingPolyline", event);
      },
      onClickDrawingRectangle(event) {
        console.log(`HmBaiduMap click drawing rectangle: `, event);
        this.$emit("clickDrawingRectangle", event);
      },
      onClickDrawingPolygon(event) {
        console.log(`HmBaiduMap click drawing polygon: `, event);
        this.$emit("clickDrawingPolygon", event);
      },
      onClickDrawingCircle(event) {
        console.log(`HmBaiduMap click drawing circle: `, event);
        this.$emit("clickDrawingCircle", event);
      },
      //播放路书动画
      playLushu() {
        let lushu;
        let drv = new window.BMapGL.DrivingRoute(this.cLushuData.city, {
          onSearchComplete: (res) => {
            if (drv.getStatus() === BMAP_STATUS_SUCCESS) {
              let plan = res.getPlan(0);
              let arrPois = [];
              for (let j = 0; j < plan.getNumRoutes(); j++) {
                let route = plan.getRoute(j);
                arrPois = arrPois.concat(route.getPath());
              }
              this.map.addOverlay(
                new window.BMapGL.Polyline(arrPois, {
                  strokeColor: this.cLushuData.strokeColor,
                })
              );
              this.map.setViewport(arrPois);
              const option = {
                defaultContentL: this.cLushuData.defaultContent,
                autoView: this.cLushuData.autoView,
                speed: this.cLushuData.speed,
                icon: new window.BMapGL.Icon(
                  this.cLushuData.icon,
                  new window.BMapGL.Size(
                    this.cLushuData.iconSize,
                    this.cLushuData.iconSize
                  ),
                  {
                    anchor: new window.BMapGL.Size(
                      this.cLushuData.iconAnchorSize,
                      this.cLushuData.iconAnchorSize
                    ),
                  }
                ),
                enableRotation: this.cLushuData.enableRotation,
              };
              lushu = new window.BMapGLLib.LuShu(this.map, this.cLushuData.points, option);
            }
          },
        });
        let start = new window.BMapGL.Point(
          this.cLushuData.startPoint[0],
          this.cLushuData.startPoint[1]
        );
        let end = new window.BMapGL.Point(
          this.cLushuData.endPoint[0],
          this.cLushuData.endPoint[1]
        );
        drv.search(start, end);
        if (this.cLushuData.playAnimation && lushu) {
          lushu.start();
        }
      },
      //播放轨迹动画
      playPathMv() {
        if (this.cPath !== {} && this.cPath.points !== undefined) {
          let pointList = [];
          this.cPath.points.forEach((item) => {
            pointList.push(new window.BMapGL.Point(item[0], item[1]));
          });
          let pl = new window.BMapGL.Polyline(pointList);
          const start = () => {
            let trackAni = new window.BMapGLLib.TrackAnimation(
              this.map,
              pl,
              this.cPath.option
            );
            trackAni.start();
          };
          setTimeout(start());
        }
      },
      //渲染地图
      async initMap() {
        console.log(`HmBaiduMap initMap`);
        await this.loadScript();
        await this.loadTrackAnimation();
        await this.loadLuShu();
        await this.loadDrawingManager();
        this.map && this.map.destroy()
        await this.initMapData();
      },

      async initMapData() {
        let self = this;
        const BMapGL = window.BMapGL;
        if (!BMapGL || !BMapGL.Map) {
          setTimeout(async function () {
            await self.initMapData();
          }, 50);
          return;
        }
        console.log(`HmBaiduMap BMapGL: `, BMapGL, window.BMapGL, window.BMapGL.Map);
        const map = new BMapGL.Map("baidumap" + self.randomId);
        console.log(`HmBaiduMap 初始化百度地图，id=baidumap${self.randomId}`, map);
        self.map = map;
        self.map.addEventListener("click", e => {
          self.clickMap(e)
        })
        // 添加地图缩放监听事件
        self.map.addEventListener("zoomend", e => {
          self.zoomendMap(e)
        })
        // 添加地图加载完成时间
        self.map.addEventListener("tilesloaded", e => {
          self.tilesloaded(e)
        })
        self.mapLoadFlag = true;
        //设置中心点
        const point = new window.BMapGL.Point(self.cCenter[0], self.cCenter[1]);
        //初始化地图，并设置缩放级别
        map.setMapType(self.getMapType());
        map.centerAndZoom(point, self.cZoomLevel);
        map.enableScrollWheelZoom(true);
        self.styleId ? map.setMapStyleV2({ styleId: self.styleId }) : ''

        try {
          self.addMarker();
          self.addPolyline();
          self.addPolygons();
          self.addDrawingManager();
        } catch (e) {
          console.log(`地图加载元素报错：`, e);
        }
      },

      /**
       * 映射得到百度地图是别的地图类型编码
       */
      getMapType() {
        let typeMap = {
          '标准地图': 'BMAP_NORMAL_MAP',
          '地球模式': 'BMAP_EARTH_MAP',
          '普通卫星地图': 'BMAP_SATELLITE_MAP'
        }
        return window[typeMap[this.cMapType] || 'BMAP_NORMAL_MAP'];
      },

      removeOverlays(overlays) {
        let self = this;
        _.each(overlays, (overlay) => {

          // 删除 self.overlay
          for (let key in self.overlay) {
            overlay.hashCode = overlay.hashCode || overlay._map.hashCode
            self.overlay[key] = _.reject(self.overlay[key], item => {
              item.hashCode = item.hashCode || item._map.hashCode
              return item.hashCode === overlay.hashCode
            })
          }

          self.map.removeOverlay(overlay);
        });
      },

      clickMap(e) {
        this.$emit("clickMap", e)
      },

      // 地图缩放监听事件
      zoomendMap(e) {
        this.$emit("zoomendMap", e)
      },

      // 地图加载完成监听事件
      tilesloaded(e) {
        this.$emit("tilesloaded", e)
        // 解决每次改变地图都要执行一次的问题
        this.map.removeEventListener("tilesloaded", this.tilesloaded);
      },

      /**
       * 添加组件覆盖物
       * @param {*} component 
       * @param {*} props
       * @param {*} children
       * @param {*} option 形如{ point: [116.391621, 39.92224], offset: { x: 0, y: 0} }
       * @param {*} ignoreCoordinateTransformation  是否忽略转换
       */
      addComponentOverlay(component, { props, children }, option, ignoreCoordinateTransformation = false) {
        let self = this;
        if (self.coordType === 'bd09' || ignoreCoordinateTransformation) {
          return self.addComponentOverlayFun(component, { props, children }, option)
        } else {
          return new Promise(resolve => {
            self.translateCoordinateBatch([option.point]).then(pointTranslation => {
              option.point = pointTranslation[0]
              const componentOverlay = self.addComponentOverlayFun(component, { props, children }, option)
              resolve(componentOverlay)
            })
          })
        }
      },

      /**
       * 批量添加组件覆盖物
       */
      addBatchComponentOverlay(components) {
        let self = this;
        let componentOverlays = []
        if (self.coordType === 'bd09') {
          components.forEach(item => {
            const componentOverlay = self.addComponentOverlayFun(item.component, { props: item.props, children: item.children }, item.option)
            componentOverlays.push(componentOverlay)
          })
          return componentOverlays
        } else {
          return new Promise(resolve => {
            const geoPoints = components.map(item => {
              return item.option.point
            })

            self.translateCoordinateBatch(geoPoints).then(pointTranslations => {
              console.log('Component pointTranslations: ', pointTranslations)
              pointTranslations.forEach((item, index) => {
                components[index].option.point = item
                const componentOverlay = self.addComponentOverlayFun(components[index].component, { props: components[index].props, children: components[index].children }, components[index].option)
                componentOverlays.push(componentOverlay)
              })
              resolve(componentOverlays)
            })
          })
        }
      },

      // 添加覆盖物实现
      addComponentOverlayFun(component, { props, children }, option) {
        let self = this;

        if (!option || !option.point || !option.point.length == 2) {
          console.warn(`请传options，结构形如：{ point: [116.391621, 39.92224], offset: { x: 0, y: 0} }`)
          return;
        }

        option.offset = option.offset || {};
        const { vNode, destroy, el } = this.$createDomElement(component, {
          props: props,
          children: children,
          app: self.$app
        });

        // console.log(`vNode, destroy, el: `, vNode, destroy, el);

        let componentElement = el;
        function ComplexCustomOverlay(point, componentElement) {
          this._point = point;
          this._componentElement = componentElement;
        }
        ComplexCustomOverlay.prototype = new BMapGL.Overlay();
        ComplexCustomOverlay.prototype.initialize = function (bmap) {
          this._map = bmap;
          //这里必须是绝对定位，不然会影响经纬度定位，然中偏离原来位置
          componentElement.style.position = "absolute";
          //将该覆盖物添加到标签覆盖物列表
          bmap.getPanes().labelPane.appendChild(componentElement);
          return componentElement;
        };
        ComplexCustomOverlay.prototype.draw = function () {
          var map = this._map;
          //饼图的位置设置,需要获取该地图点的像素位置x,y
          var pixel = map.pointToOverlayPixel(this._point);
          this._componentElement.style.left = pixel.x + (option.offset.x || 0) + "px";
          this._componentElement.style.top = pixel.y + (option.offset.y || 0) + "px";
        };

        let componentOverlay = new ComplexCustomOverlay(
          new BMapGL.Point(option.point[0], option.point[1]),
          el
        )
        self.map.addOverlay(componentOverlay);
        !componentOverlay.hashCode ? componentOverlay.hashCode = new Date().getTime() : ''
        self.overlay.components.push(componentOverlay);
        return componentOverlay;
      },


      // 计算距离目标点，固定距离与角度的经纬度
      getTargetPoint(point, distance, degree) {
        var pt = turf.point(point, { "marker-color": "F00" });
        // 使用 Turf.js 计算目标点的经纬度
        const target = turf.destination(pt, distance, degree);
        console.log('target: ', target, pt, point)

        // 返回目标点
        return target.geometry.coordinates;
      },

      // 获取像素
      getPixel(point) {
        return this.map.pointToPixel(new window.BMapGL.Point(point[0], point[1]))
      },

      // 地图位置检索
      async searchChange() {
        this.searchList = await this.searchAreas(this.searchKey)
      },

      // 根据关键字返回地址列表
      searchAreas(key) {
        return new Promise(resolve => {
          let local = new BMapGL.LocalSearch(this.map, {
            onSearchComplete: (results) => {
              let searchList = []
              for (let i = 0; i < results.getCurrentNumPois(); i++) {
                let poi = results.getPoi(i);
                searchList.push(poi);
              }
              console.log('searchChange result: ', results, searchList)
              resolve(searchList)
            }
          });
          local.search(key);
        })
      },

      // 检索地点点击
      searchItemclick(item) {
        // 删除所有标注地点
        this.removeMarkers(function (marker) {
          if (!marker.data) {
            return false;
          }
          return marker.data.properties.type === 'searchItem';
        })
        // // 新增地点
        let point = {
          type: "Feature",
          properties: {
            type: 'searchItem',
            data: item,
          },
          geometry: {
            coordinates: [item.point.lng, item.point.lat],
            type: "Point",
          },
        };
        const mapPoint = this.addGeojsonMarker(point); // 添加点
        this.map.centerAndZoom(item.point, 14)
        this.searchCurrent = item

        // 添加监听事件
        this.searchChoose(item)

        // 清空数据
        this.searchList = []
        this.searchKey = ''
      },

      // 搜索选择监听事件
      searchChoose(e) {
        this.$emit("searchChoose", e)
      },

      // 折线添加中间箭头
      async addArrowToPolylines(polyline, iconUrl) {
        const points = polyline.getPath()
        const tPoints = []
        points.forEach((point, index) => {
          // 计算斜度
          const afterPoint = points[index + 1]
          if (!afterPoint) return
          // 计算中间点位
          const middlePoint = turf.midpoint([point.lng, point.lat], [afterPoint.lng, afterPoint.lat]);
          const bearing = turf.bearing(turf.point([point.lng, point.lat]), turf.point([afterPoint.lng, afterPoint.lat]));

          middlePoint.properties.iconUrl = iconUrl || `https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/xingzhan/up.svg`
          middlePoint.properties.type = "arrow"
          middlePoint.properties.width = 15
          middlePoint.properties.height = 15

          tPoints.push(middlePoint)
          point.bearing = bearing
        })
        const res = this.addBatchGeojsonMarker(tPoints, true)
        res.forEach((marker, index) => {
          marker.setRotation(points[index].bearing)
        })
      },

      // 创建Lable
      createLabel(content = '', style = {}, offset = { x: 0, y: 0 }) {
        let label = new BMapGL.Label(content, { offset: new BMapGL.Size(offset.x, offset.y) });  // 创建标注，并设置文本内容为序号
        label.setStyle(style);
        return label
      },

      // 创建圆
      async addCircle(point = [100, 31], radius = 0, style = {}) {
        if (this.coordType !== 'bd09') {
          const pointTranslation = await this.translateCoordinateBatch([point])
          point = pointTranslation[0]
        }
        const pointMark = new BMapGL.Point(point[0], point[1]);
        const circle = new BMapGL.Circle(pointMark, radius, style);
        this.map.addOverlay(circle);
        this.overlay.polygons.push(circle)
      },

      /**
       * 批量坐标转换
       *  @param {*} points 
       */
      translateCoordinateBatch(points = [[116.32715863448607, 39.990912172420714], [116.32715863448607, 39.110912172420714]]) {
        return new Promise(resolve => {
          if (this.coordType === 'bd09') {
            resolve(points)
          } else {
            let q = []
            let pointsTmp = []
            points.forEach((item, index) => {
              if (pointsTmp.length === 10) {
                q.push(this.translateCoordinate(JSON.parse(JSON.stringify(pointsTmp))))
                pointsTmp = []
              }
              pointsTmp.push(item)
            })
            q.push(this.translateCoordinate(JSON.parse(JSON.stringify(pointsTmp))))

            Promise.all(q).then(res => {
              let resPoints = []
              res.forEach(item => {
                if (!item) return
                resPoints = resPoints.concat(item)
              })
              resolve(resPoints)
            })

          }
        })
      },

      /**
       *  坐标转换
       *  @param {*} points 
       */
      translateCoordinate(points) {
        return new Promise(resove => {
          const convertor = new BMapGL.Convertor();
          convertor.translate(points.map(item => {
            return new BMapGL.Point(Number(item[0]), Number(item[1]))
          }), 1, 5, (res) => {
            if (res.status === 0) {
              resove(res.points.map(item => {
                return [item.lng, item.lat]
              }))
            } else {
              resove(false)
            }
          })
        })
      },

      // 计算斜率
      getBearing(point, beforePoint) {
        return turf.bearing(turf.point([point.lng, point.lat]), turf.point([beforePoint.lng, beforePoint.lat]));
      },
    },

    beforeUnmount() {
      this.map && this.map.destroy()
      console.log('HmBaiduMap lifeCicyle销毁地图实例');
    },
  };
</script>

<style lang="less" scoped>
  .hm-baidu-map {
    position: relative;
    width: v-bind(cWidth);
    height: v-bind(cHeight);
    min-width: 300px;
    min-height: 300px;
  }

  .spin-container {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 99999;
    width: 100%;
    height: 100%;
    background: white;
    opacity: 0.8;
    display: flex;
    align-items: center;
    justify-content: center;

    :deep(.ant-spin-dot) {
      font-size: 76px;
    }

    :deep(.ant-spin-dot-item) {
      width: 28px;
      height: 28px;
    }
  }

  .baidumap-slot-div {
    pointer-events: none;
    position: absolute;
    z-index: 20;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
  }

  .baidumap {
    width: 100%;
    height: 100%;
  }

  .drawing-panel {
    z-index: 999;
    position: fixed;
    bottom: v-bind(cMouseDrawPositionBottom);
    margin-top: 15px;
    margin-left: v-bind(cMouseDrawPositionMarginLeft);
    padding-left: 0;
    border-radius: 0.25rem;
    height: 47px;
    box-shadow: 0 2px 6px 0 rgba(27, 142, 236, 0.5);
    display: v-bind(cShowDrawManager);
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

  .baidumap /deep/ .anchorBL {
    display: none !important;
  }

  .baidumap /deep/ .BMap_cpyCtrl {
    display: none !important;
  }

  /* 百度地图组件插槽样式 */
  .baidumap-slot-div /deep/ .ele-wrapper {
    pointer-events: auto;
  }

  .baidumap-slot-div /deep/ .hm-block {
    pointer-events: auto;
  }

  .baidumap-slot-div>.ele-wrapper {
    pointer-events: auto;
    position: absolute;
  }

  /* 搜索 */
  .map-search {
    position: absolute;
    z-index: 999;
    top: 20px;
    left: 20px;
    background-color: #fff;
    border: 0;
  }

  .map-search-input {
    padding: 5px 10px;
    margin: 0;
  }

  .map-search input {
    border: 0;
  }

  .map-search input:focus {
    outline: 0;
  }

  .map-search ul {
    border: 0;
    padding: 0;
    border-top: 1px solid #edecec;
  }

  .map-search li {
    border: 0;
    line-height: 28px;
    padding: 5px 10px;
    cursor: pointer;
  }

  .map-search li:hover {
    background-color: aliceblue;
  }
</style>