<template>
    <div :id="generateId" class="container"></div>
</template>
  
<script>
window.CESIUM_BASE_URL = "/";
import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
export default {
    components: {},
    name: "HmCesium",
    props: {
        /**
         * 模型地址
         */
        modelUrl: {
            type: String,
            default: "https://hm-public-static.oss-cn-shenzhen.aliyuncs.com/map/SampleData/models/CesiumAir/Cesium_Air.glb",
        },
        /**
         * 模型高度
         */
        modelHeight: {
            type: Number,
            default: 5000.0,
        },
        /**
         * 模型坐标
         */
        modelCenter: {
            type: Array,
            default: function () {
                return [116.404, 39.915];
            },
        },
        /**
         * 模型前后倾斜角度
         */
        modelPitch: {
            type: Number,
            default: 0,
        },
        /**
         * 模型左右倾斜角度
         */
        modelRoll: {
            type: Number,
            default: 0,
        },
        /**
         * 最小像素大小
         */
        minimumPixelSize: {
            type: Number,
            default: 128,
        },
        /**
         * 最大刻度
         */
        maximumScale: {
            type: Number,
            default: 20000000,
        },
        /**
         * 地图源地址
         */
        mapUrl: {
            type: String,
            default: "https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",
        },
        /**
         * 地图配置
         */
        mapSetUp: {
            type: Object,
            default: function () {
                return {
                    baseLayerPicker: true, // 如果设置为false，将不会创建右上角图层按钮。
                    fullscreenButton: true, // 如果设置为false，将不会创建右下角全屏按钮。
                    vrButton: true, // 如果设置为false，将不会创建VR应用场景
                    geocoder: true, // 如果设置为false，将不会创建右上角查询(放大镜)按钮。
                    homeButton: true, // 如果设置为false，将不会创建右上角主页(房子)按钮。
                    infoBox: false, // 是否显示点击要素之后显示的信息,cesium中的沙盒开关
                    selectionIndicator: true, // 获取当选定实体更改时引发的事件。
                    navigationHelpButton: true, // 如果设置为false，则不会创建右上角帮助(问号)按钮。
                    navigationInstructionsInitiallyVisible: true, // 如果帮助说明最初应该是可见的，则为true；如果直到用户明确单击该按钮，则不显示该说明，否则为false。
                    timeline: true, // 如果设置为false，则不会创建正下方时间轴小部件。
                    scene3DOnly: true, // 为 true 时，每个几何实例将仅以3D渲染以节省GPU内存。
                    animation: true, // 如果设置为false，将不会创建左下角动画小部件。
                    shouldAnimate: true, // 默认true ，否则为 false 。是用于控制当前时间的时钟视图模型,此选项优先于设置 Viewer＃clockViewModel 。
                    sceneMode: 3, // 初始场景模式 1 2D模式 2 2D循环模式 3 3D模式  Cesium.SceneMode
                    requestRenderMode: false, // 启用请求渲染模式，不需要渲染，节约资源
                    shadows: true //阴影
                }
            }
        },
        data() {
            return {
                viewer: null,
                cModelUrl: "",
                cModelType: "",
                cModelHeight: "",
                cModelCenter: "",
                cModelPitch: "",
                cModelRoll: "",
                cMapSetUp: {}
            }
        }
    },
    computed: {
        generateId() {
            return `container${new Date().getTime()}${Math.floor(Math.random() * 10)}`;
        },
    },
    watch: {
        modelUrl(val) {
            this.cModelUrl = val
            this.createModel()
        },
        modelHeight(val) {
            this.cModelHeight = val
            this.createModel()
        },
        modelCenter(val) {
            this.cModelCenter = val
            this.createModel()
        },
        modelPitch(val) {
            this.cModelPitch = val
            this.createModel()
        },
        modelRoll(val) {
            this.cModelRoll = val
            this.createModel()
        },
        mapSetUp(val) {
            this.cMapSetUp = val
            this.newCesiumContainer()
            this.createModel();
        },
    },
    mounted() {
        console.log('generateId', this.generateId)
        this.cModelUrl = this.modelUrl
        this.cModelHeight = this.modelHeight
        this.cModelCenter = this.modelCenter
        this.cModelPitch = this.modelPitch
        this.cModelRoll = this.modelRoll
        this.cMapSetUp=this.mapSetUp
        this.newCesiumContainer()
        this.createModel();
    },
    methods: {
        /**
         * 创建地图
         * @return void
         */
        newCesiumContainer() {
            if (this.viewer != null) {
                this.viewer.destroy()
                this.viewer = null
            }
            this.viewer = new Cesium.Viewer(this.generateId, {
                ...this.cMapSetUp,
                imageryProvider: new Cesium.createWorldImagery({
                    url: this.mapUrl,
                }),
            });
            this.viewer._cesiumWidget._creditContainer.style.display = "none";
            // sceneModePicker: false, 
            // 如果设置为false，将不会创建右上角投影方式控件(显示二三维切换按钮)。
            // ps:有bug设为true会报错
        },
        /**
         * 创建模型
         * @return void
         */
        createModel() {
            const url = this.cModelUrl
            if (!url) {
                return
            }
            this.viewer.entities.removeAll();
            const position = Cesium.Cartesian3.fromDegrees(
                ...this.cModelCenter,
                this.cModelHeight
            );
            const heading = Cesium.Math.toRadians(135);
            const hpr = new Cesium.HeadingPitchRoll(heading, this.cModelPitch, this.cModelRoll);
            const orientation = Cesium.Transforms.headingPitchRollQuaternion(
                position,
                hpr
            );
            const entity = this.viewer.entities.add({
                name: url,
                position: position,
                orientation: orientation,
                model: {
                    uri: url,
                    minimumPixelSize: this.minimumPixelSize,
                    maximumScale: this.maximumScale,
                },
            });
            this.viewer.trackedEntity = entity;
        }
    },
};
</script>
  
<style scoped lang="less">
.container {
    position: relative;
    width: 100%;
    height: 100%;
}
</style>