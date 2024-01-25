<template>
    <div :id="generateId" class="container"></div>
</template>
  

<script>
export default {
    components: {
    },
    name: "HmEarthSdk",
    props: {
        /**
         * 在线地址
         */
        labServer: {
            type: String,
            default: "http://localhost/"
        },
        /**
         * 图层
         */
        layer: {
            type: Object,
            default: function () {
                return {
                    "children": [
                        {
                            "title": "新建场景",
                            "children": [
                                {
                                    // "czmObject": {
                                    //     "xbsjType": "Imagery",
                                    //     "name": "离线影像",
                                    //     "show": true,
                                    //     "xbsjImageryProvider": {
                                    //         "createTileMapServiceImageryProvider": {
                                    //             "url": XE.HTML.cesiumDir + 'Assets/Textures/NaturalEarthII',
                                    //             "fileExtension": 'jpg',
                                    //         },
                                    //         "type": 'createTileMapServiceImageryProvider',
                                    //     },
                                    // }
                                    "czmObject": {
                                        "name": "全球影像",
                                        "xbsjType": "Imagery",
                                        "xbsjImageryProvider": {
                                            "XbsjImageryProvider": {
                                                "url": "/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
                                                "srcCoordType": "GCJ02",
                                                "dstCoordType": "WGS84",
                                                "maximumLevel": 17
                                            },
                                        }
                                    }
                                }
                            ]
                        },
                    ]
                }
            }
        },

    },
    data() {
        return {
            cLayer: {},
            cLabServer: "",
            earthUI: null
        }
    },
    computed: {
        generateId() {
            return `container${new Date().getTime()}${Math.floor(Math.random() * 10)}`;
        },
    },
    watch: {
        layer(val) {
            this.cLayer = val
            this.createScene(this.earthUI)
        },
        labServer(val) {
            this.cLabServer = val
            if (this.earthUI) {
                this.earthUI._labServer = val
            } else {
                this.newCesiumContainer()
            }
        },
    },
    async mounted() {
        this.cLayer = this.layer
        this.cLabServer = this.labServer
        await this.loadScript()
        await this.newCesiumContainer()
    },
    methods: {
        /**
         * 加载XbsjEarthUI
         * @return void
         */
        loadScript() {
            let self = this;
            return new Promise((resolve, reject) => {
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
                script.src = `https://hm-public-static.oss-cn-shenzhen.aliyuncs.com/map/hm-earth-sdk/XbsjEarthUI/xbsj.js`;

                document.body.appendChild(script);
            });
        },
        /**
         * 创建场景
         * @return void
         */
        newCesiumContainer() {
            // var xbsjEarthUI = undefined;
            setTimeout(() => {
                console.log('xbsjEarthUI', XbsjEarthUI)
            },2000)
            XbsjEarthUI.create(this.generateId).then((earthUI) => {
                this.earthUI = earthUI
                window.uia = earthUI;

                //如果有url参数，那么只添加url参数数据
                var urlOptions = Cesium.queryToObject(window.location.search.substring(1));
                const tilesetUrl = urlOptions.tilesetUrl;
                const tilesetTitle = urlOptions.tilesetTitle || '未命名三维瓦片';
                this.resettingUrl(earthUI)
                if (urlOptions.labserver) {
                    if (!urlOptions.labserver.endsWith('/')) {
                        urlOptions.labserver += '/';
                    }
                    earthUI.labServer.server = this.cLabServer ? this.cLabServer : urlOptions.labserver;
                }
                //获取url参数，如果有场景地址，那么先获取场景信息 
                if (urlOptions.scene) {
                    earthUI.labScene.loadScene(urlOptions.scene);
                } else if (tilesetUrl) {
                    this.initEarthWithTilesetUrl(earthUI.earth, tilesetUrl, tilesetTitle);
                }
                //否则按照示例代码方法创建
                else {
                    this.createScene(earthUI)
                }
                if (urlOptions.lang) {
                    earthUI.language = (urlOptions.lang == 'en-US' ? 'en' : 'zh');
                }
                this.saveScene(earthUI)
                console.log('earthUI', earthUI)
            });
        },
        /**
         * 创建影像
         * @param {Object} earth 
         * @param {String} tilesetUrl 
         * @param {String} tilesetTitle 
         * @return void
         */
        initEarthWithTilesetUrl(earth, tilesetUrl, tilesetTitle) {
            tilesetTitle = tilesetTitle ? tilesetTitle : "预览场景"
            var earthJsonObject = {
                "sceneTree": {
                    "root": {
                        "children": [
                            {
                                "title": tilesetTitle,
                                "children": [
                                    {
                                        "czmObject": {
                                            "xbsjType": "Tileset",
                                            "name": tilesetTitle,
                                            "url": tilesetUrl,
                                            "xbsjClippingPlanes": {},
                                            "xbsjCustomShader": {}
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                },
            };
            earth.xbsjFromJSON(earthJsonObject);
        },
        /**
         * 重置URL
         * @param {Object} earthUI
         * @return void
         */
        resettingUrl(earthUI) {
            XE.MVVM.watch(() => ({
                labserver: earthUI.labServer.server,
                sceneID: earthUI.labScene.sceneID,
            }), params => {
                let searchObj = {};
                if (params.sceneID) {
                    searchObj.scene = params.sceneID;
                }
                if (params.labserver && params.labserver !== '//localhost:2000/') {
                    searchObj.labserver = params.labserver;
                }

                const searchStr = Cesium.objectToQuery(searchObj);
                (searchStr.length > 0) && window.history.replaceState(null, null, '?' + searchStr);
            });
        },
        /**
         * 创建图层
         * @param {Object} earthUI
         * @return void
         */
        createScene(earthUI) {
            // earthUI.on("addScene", ({ t, e })=> {
            //     console.log(t, e)
            // })
            earthUI.earth.sceneTree.root = this.cLayer
        },
        /**
         * 重写场景保存事件
         * @param {Object} earthUI 
         */
        saveScene(earthUI) {
            let self = this
            earthUI.labScene.saveScene = function () {
                // if (!this.sceneID) {
                var e = this._root.earth.toJSON();
                self.$emit("saveScene", e)
                // console.log('e', this.sceneID, JSON.stringify(e))
                // }
            }
        },
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