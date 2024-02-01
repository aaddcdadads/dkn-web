<template>
  <div class="page card">
    <div class="page-wrapper">
      <a-button @click="changeCenter">切换中心点</a-button>

      <div class="ele-wrapper ele-wrapper-bdmap">
        <hm-baidu-map
          ref="bdmap"
          :show-draw-manager="true"
          :width="bdmap.width"
          :height="bdmap.height"
          :points="bdmap.points"
          :lines="bdmap.lines"
          :polygons="bdmap.polygons"
          :center="bdmap.center"
          :zoom-level="bdmap.zoomLevel"
          :update-confirm-status="bdmap.updateConfirmStatus"
          @drawFinish="onMapDrawFinish"
          class="ele-bdmap"
        >
          <div class="ele-wrapper ele-wrapper-btn">
            <hm-ant-button ref="btn" class="ele-btn" text="添加组件图层" @click="addComponentOverlay"> </hm-ant-button>

            <hm-ant-button ref="btn" class="ele-btn" text="删除组件图层" @click="removeComponentOverlays"> </hm-ant-button>
          </div>
        </hm-baidu-map>
      </div>
    </div>
  </div>
</template>

<script>
import { h } from "vue";
import { onMounted, onUpdated, reactive, ref, toRefs } from "vue";
import HmBaiduMap from "/@/components/built-in/jeecg/HmBaiduMap.vue";
import HmAntButton from "/@/components/built-in/jeecg/HmAntButton.vue";

export default {
  name: 'HmBaiduMapTest',
  components: {
    HmBaiduMap,
    HmAntButton,
  },
  data() {
    let self = this;
    return {
      bdmap: {
        updateConfirmStatus:true,
        width: "100%",
        height: "100%",
        points: [
          {
            id: 0,
            point: [116.404, 39.915],
            iconUrl: "",
            show: true,
            height: 52,
            width: 52,
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
                name: "单击",
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
                name: "单击",
                callback: function (item) {
                  console.log(item, "marker click");
                },
              },
            ],
          },
        ],
        lines: [
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
                name: "单击",
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
                name: "单击",
                callback: function (item) {
                  console.log(item, "lines click");
                },
              },
            ],
          },
        ],
        polygons: [
          {
            points: [
              [116.345052, 39.949238],
              [116.468084, 39.954326],
              [116.467222, 39.877957],
              [116.340741, 39.879729],
              [116.345052, 39.949238],
            ],
          },
        ],
        zoomLevel: 12,
      },
    };
  },
  methods: {
    changeCenter() {
      this.bdmap.center = [115.404, 38.915];
      console.log(`切换中心点`)
    },
    addComponentOverlay() {
      this.$refs.bdmap.addComponentOverlay(HmAntButton, {
        props: {text: '组件图层'},
      }, {
        point: [116.391621, 39.92224]
      });
    },
    removeComponentOverlays() {
      this.$refs.bdmap.removeOverlays(this.$refs.bdmap.overlay.components);
    },
    onMapDrawFinish(event){
        console.log("授权范围：", event);
        let polygon = [];
        let coordinates = [
          []
        ];
        let length = event.length - 1
        //绘制后编辑
        if (event[length]) {
          event[length].getPath().forEach((e) => {
            let point = [
              parseFloat(e.lng.toFixed(7)),
              parseFloat(e.lat.toFixed(7)),
            ];
            coordinates[0].push(point);
          });
        } else {
          //直接绘制
          event.overlay.points.forEach((e) => {
            let point = [
              parseFloat(e.latLng.lng.toFixed(7)),
              parseFloat(e.latLng.lat.toFixed(7)),
            ];
            coordinates[0].push(point);
          });
          event.overlay.hide();
        }
        let polygons = this.$refs.bdmap.overlay.polygons[0];
        console.log(`清除授权区域：`, polygons);
        this.$refs.bdmap.map.removeOverlay(polygons);
        if (this.getMapPolygonArea) {
          console.log(`清除授权区域：`, this.drawPolygon);
          this.$refs.bdmap.map.removeOverlay(this.drawPolygon);
          this.bdmap.polygons = [];
        }
        polygon = {
          type: "Feature",
          properties: {},
          geometry: {
            type: "Polygon",
            coordinates: coordinates,
          },
        };
        this.getMapPolygonArea = polygon;
        this.$nextTick(() => {
         this.$refs.bdmap.removeOverlaypolygons();
          this.drawPolygon = this.$mapUtil.drawTurfPolygon(this.$refs.bdmap, polygon,true);
        })
    }
  },
};
</script>

<style lang="less" scoped>
.page {
}

.ele-wrapper-bdmap {
  width: 100%;
  height: 1080px;
}

.ele-wrapper-btn {
  left: 200px;
  top: 200px;
}
</style>
