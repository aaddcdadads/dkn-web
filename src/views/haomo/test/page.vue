<template>
  <div class="page card">
    <div class="page-wrapper">
      <div class="ele-wrapper ele-wrapper-bdmap">
        <hm-baidu-map
          ref="bdmap"
          :width="bdmap.width"
          :height="bdmap.height"
          :points="bdmap.points"
          :lines="bdmap.lines"
          :polygons="bdmap.polygons"
          :zoom-level="bdmap.zoomLevel"
          class="ele-bdmap"
        >
          <div class="ele-wrapper ele-wrapper-btn">
            <hm-ant-button ref="btn" class="ele-btn"> </hm-ant-button>
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
  name: 'HmTestImportPage',
  components: {
    HmBaiduMap,
    HmAntButton,
  },
  data() {
    let self = this;
    return {
      bdmap: {
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
                name: "点击多边形",
                callback: function (item) {
                  console.log(item);
                },
              },
            ],
          },
        ],
        zoomLevel: 12,
      },
    };
  },
  methods: {},
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
