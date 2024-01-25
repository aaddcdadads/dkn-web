<template>
    <div id="playback" class="player-body">
        <div :class="cLoading?'spin-active':'spin-hide'">
            <a-spin tip="Loading..." size="large" :spinning="cLoading" />
        </div>
    </div>
</template>

<script>
import * as rrweb from "rrweb";
import rrwebPlayer from 'rrweb-player';
import 'rrweb-player/dist/style.css';

export default {
    name: "HmRrwebPlayer",
    props: {
        /**
         * 播放器配置
         */
        config: {
            type: Object,
            default: function () {
                return {
                    events: [],//包含回放所需的数据
                    width:1024,//播放器宽度
                    height:576,//播放器高度
                    autoPlay:true,//是否自动播放
                    mouseTail:false,//是否在回放时增加鼠标轨迹
                    speedOption: [1, 2, 5, 10],//倍速播放可选值
                    showController:true,//是否显示播放器控制 UI
                }
            }
        },
        /**
         * loading
         */
         loading: {
            type: Boolean,
            default: true
        },
    },
    data() {
        return {
            replayer:null,
            cConfig: [],
            cLoading:true,
        };
    },
    watch: {
        config(value) {
            this.cConfig = value;
        },
        loading(value) {
            this.cLoading = value;
        },
    },
    mounted() {
        this.cConfig = this.config;
        this.cLoading = this.loading;
    },
    methods: {
        play: function (e) {
            let self = this;
            self.destroyPlayer();
            //至少包含2个以上事件时为正常录屏数据
            if(self.cConfig.events.length>2){
                self.cLoading = false;
            }
            self.replayer = new rrwebPlayer({
                target: document.getElementById("playback"),
                    // 配置项
                    props: {
                        ...self.cConfig,
                        unpackFn: rrweb.unpack,//数据解压
                    },
                });

            /**
             * 播放
             * @params e
             * @event play
             */
            this.$emit("play", this.cEvents);
        },
        destroyPlayer: function (e) {
            let self = this;
            if(self.replayer){
                // 假设rrwebPlayer元素的类名为"rr-player"
                let rrwebPlayers = document.getElementsByClassName("rr-player");

                // 从DOM中移除所有具有"rr-player"类名的rrwebPlayer元素
                while (rrwebPlayers.length > 0) {
                    rrwebPlayers[0].parentNode.removeChild(rrwebPlayers[0]);
                }
                self.replayer =null;
            }
        }
    },
};
</script>
<style scoped>
.player-body{
    display: flex;
    justify-content: center;
    align-items: center;
}
.spin-active {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 99999;
}
.spin-hide {
    display: none;
}
</style>
