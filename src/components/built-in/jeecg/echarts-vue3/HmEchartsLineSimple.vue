<template>
  <!-- 基础折线图 -->
  <div class="container" v-if="echartShow">
    <ECharts :id="[rId]" ref="chart" :initOpts="cInitOpts" :option="cOption" :style="{ width: cWidth, height: cHeight }"/>
    <a-dropdown v-if="dropMenu" class="DropMenu">
      <a class="ant-dropdown-link" @click.prevent>
        {{ dropMenuOption.title }}
        <DownOutlined />
      </a>
      <template #overlay>
        <a-menu>
          <a-menu-item v-for="(action, index) in dropMenuOption.children" :key="index"
            @click="onMenuClick({ action, index }, cOption)">
            {{ action }}
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { h } from "vue";
import jspdf from "jspdf/dist/jspdf.es.min.js";
import { getAction } from "/@/request/http";
import { createComponent } from "echarts-for-vue";
import { DownOutlined } from '@ant-design/icons-vue';
export default {
  name: "HmEchartsLineSimple",
  components: {
    DownOutlined,
    ECharts: createComponent({ echarts, h }), // 作为组件使用
  },
  props: {
    /**
     * 配置项
     */
    option: {
      type: Object,
      default: function () {
        return {
          title: {
            text: "ECharts 基础折线图",
          },
          tooltip: {},
          dataset: {
            dimensions: ["product", "sales"],
          },
          xAxis: {
            type: "category",
          },
          yAxis: {},
          series: [
            {
              type: "line",
            },
          ],
        };
      },
    },
    /**
     * 数据项
     */
    data: {
      type: Array,
      default: function () {
        return [
          { product: "衬衫", sales: 5 },
          { product: "羊毛衫", sales: 20 },
          { product: "雪纺衫", sales: 36 },
          { product: "裤子", sales: 10 },
          { product: "高跟鞋", sales: 10 },
          { product: "袜子", sales: 20 },
        ];
      },
    },
    /**
     * GET URL
     */
    url: {
      type: String,
    },
    /**
     * GET Params
     */
    params: {
      type: Object,
    },
    /**
     * 宽度
     */
    width: {
      type: String,
      default: "300",
    },
    /**
    * 高度
    */
    height: {
      type: String,
      default: "300",
    },
    /**
     * 显示下拉菜单
     */
    dropMenu: {
      type: Boolean,
      default: false
    },
    /**
     * 下拉菜单
     */
    dropMenuOption: {
      type: Object,
      default: function () {
        return {
          title: "下载",
          children: ["PNG图片", "SVG图片", "导出PDF"]
        }
      }
    }
  },
  data() {
    return {
      cOption: {},
      cWidth: "300px",
      cHeight: "300px",
      echartShow: true,
      cInitOpts: {
        renderer: 'canvas',
      },
      rId: this.randomRangeId(16),
    };
  },
  watch: {
    option(value) {
      let dataset = JSON.parse(JSON.stringify(this.cOption.dataset));
      this.cOption = value;
      this.cOption.dataset = dataset;
    },
    data: {
      handler: function (value, oldValue) {
        this.cOption.dataset.source = value;
        this.$refs.chart.setOption(this.cOption, true);
        console.log(`setOption:`, this.cOption);
      },
      deep: true,
    },
    url(value) {
      this.getData(value);
    },
    params: {
      handler: function (value, oldValue) {
        this.getData(this.url, value);
      },
      deep: true,
    },
    width(value) {
      this.cWidth = this.$getCssUnit(value);
    },
    height(value) {
      this.cHeight = this.$getCssUnit(value);
    },
    cInitOpts: {
      handler: function (value, oldValue) {
        let self = this;
        self.echartShow = false;
        setTimeout(() => {
          self.echartShow = true;
        }, 15);
      },
      deep: true
    },
  },
  mounted() {
    this.cWidth = this.$getCssUnit(this.width);
    this.cHeight = this.$getCssUnit(this.height);

    this.cOption = this.option;
    if (typeof this.cOption.dataset === "undefined") {
      this.cOption.dataset = {};
    }
    this.cOption.dataset.source = this.data;
    this.getData();
    let self = this;
    this.$refs.chart.inst.on("click", function (params) {
      self.onClick(params);
    });
  },
  methods: {
    onClick(params) {
      this.$emit("onClick", params);
    },
    getData(url, params) {
      url = url || this.url;
      params = params || this.params;
      if (!url) return;
      getAction(url, params).then((resp) => {
        this.cOption.dataset.source = resp.result.records
          ? resp.result.records
          : resp.result;
        this.$refs.chart.setOption(this.cOption, {
          notMerge: true,
          lazyUpdate: true,
          silent: false,
        });
      });
    },
    onMenuClick(e, obj) {
      this.$emit("onMenuClick", e, obj);
    },
    downloadImagePNG(str) {
      this.cInitOpts.renderer = 'canvas';
      setTimeout(() => {
        var chartDom = document.getElementById(this.rId);
        const hmEcharts = echarts.getInstanceByDom(chartDom);
        var opts = {
          type: "png",
          pixelRatio: 1,
          backgroundColor: '#fff',
          excludeComponents: ['toolbox']
        }
        var resBase64 = hmEcharts.getDataURL(opts);
        let a = document.createElement('a');
        a.href = resBase64;
        a.download = str || "图表";
        a.click();
      }, 1000);
    },
    downloadImageSVG(str) {
      this.cInitOpts.renderer = "svg";
      setTimeout(() => {
        var chartDom = document.getElementById(this.rId);
        const hmEcharts = echarts.getInstanceByDom(chartDom);
        const content = document.querySelector('svg').outerHTML;
        const blob = new Blob([content], { type: 'xml/svg' })
        let a = document.createElement('a');
        a.href = URL.createObjectURL(blob)
        a.download = (str || '图表') + '.svg';
        a.click()
      }, 1000);
    },
    async downloadImagePDF(str) {
      this.cInitOpts.renderer = 'canvas';
      setTimeout(() => {
        var chartDom = document.getElementById(this.rId);
        const hmEcharts = echarts.getInstanceByDom(chartDom);
        downloadPDF(hmEcharts)
      }, 1000);
      async function downloadPDF(hmEcharts) {
        try {
          const img = await getChartImage(hmEcharts);
          const dpr1 = hmEcharts.getDevicePixelRatio();
          const doc = new jspdf("l", "px", "a4");
          doc.addImage(img.src, "PNG", 0, 0, img.width / dpr1, img.height / dpr1);
          await doc.save(
            (str || "图表") + '.pdf', {
            returnPromise: true
          });
        } catch (e) {
          console.error("failed to export", e);
        }
      }
      function loadImage(src) {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = src;
        });
      }
      function getChartImage(chart) {
        return loadImage(chart.getDataURL());
      }
    },
    /* 随机生成数字,组成id */
    randomRangeId(num) {
      var returnStr = "",
        charStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for (var i = 0; i < num; i++) {
        var index = Math.round(Math.random() * (charStr.length - 1));
        returnStr += charStr.substring(index, index + 1);
      }
      return returnStr;
    }
  },
};
</script>

<style scoped>
.container {
  width: v-bind(cWidth);
  height: v-bind(cHeight);
  position: relative;
}

.DropMenu {
  position: absolute;
  top: 0px;
  right: 0px;
}
</style>