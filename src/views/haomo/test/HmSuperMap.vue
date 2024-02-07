<template>
  <div class="page card">
    <div class="page-wrapper">
      <div class="ele-wrapper ele-wrapper-bdmap">
        <!-- <hm-super-map width="600"
          height="600"></hm-super-map> -->
        <hm-super-map 
          ref="superMap"
          :isCustomMap="true" 
          :url="url" 
          width="600"
          height="600"
          :center="center"
          :bounds="bounds"
          :origin="origin"
          :zoomLevel="zoom"
          :maxZoomLevel="21"
          @mapClick="mapClick"
          ></hm-super-map>
      </div>
    </div>
  </div>
</template>

<script>
import { h } from "vue";
import { onMounted, onUpdated, reactive, ref, toRefs } from "vue";
import HmSuperMap from "/@/components/built-in/jeecg/HmSuperMap.vue";
import HmAntButton from "/@/components/built-in/jeecg/HmAntButton.vue";

/**
 * 
 * 参考文档：
 *  1. https://leafletjs.cn/
 *  2. https://iclient.supermap.io/web/introduction/leafletDevelop.html
 */
export default {
  name: 'HmSuperMapTest',
  components: {
    HmSuperMap,
    HmAntButton,
  },
  data() {
    let self = this;
    return {
      url: 'http://220.160.52.49:7892/iserver/services/map-TCC/rest/maps/HY',
      center: [-9135074.057414774, -5497954.862484067],
      zoom: 10,
      bounds: [[-16723674.47 , -9388540.42], [-5420498.91 , -6701427.55]],
      origin: [-16723674.467844158, -6701427.550607592]
    };
  },
  mounted() {
    let superMap = this.$refs.superMap;
    // superMap.queryByDistance({
    //   isNearest: true,
    //   expectCount: 1,
    //   distance: 1,
    //   geometry: superMap.L.circle(),
    //   queryParams: [{
    //     name: '停车区@TCC.1@@HY'
    //   }]
    // }).then(result => {
    //   console.log(`queryByDistance 停车位地理信息：`, result);
    // });
    
    setTimeout(() => {
      superMap.queryBySQL({
        name: '停车区@TCC#1',
        attributeFilter: `CWH= '560'`
      }).then(serviceResult => {
        console.log(`queryBySQL 停车位地理信息：`, serviceResult);
        superMap.hightlightFeatures(serviceResult.result.recordsets[0].features);
      });
    }, 2000)
    
    // superMap.queryBySQL({
    //   name: [{
    //     name: "停车区@TCC#1",
    //     attributeFilter: "CWH = '001'"
    //   },{
    //     name: "停车区@TCC#2",
    //     attributeFilter: "CWH = '001'"
    //   },{
    //     name: "停车区@TCC#3",
    //     attributeFilter: "CWH = '001'"
    //   }],
    // }).then(result => {
    //   console.log(`queryBySQL 停车位地理信息：`, result);
    // });
  },
  methods: {
    mapClick(e) {
      console.log('点击map点位查询的结果：',e);
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
