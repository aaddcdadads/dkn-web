<template>
    <div></div>
</template>

<script>
import * as rrweb from "rrweb";

export default {
    name: "HmRrwebRecord",
    props: {
        /**
         * 保存接口
         */
        url: {
            type: String,
            default: "",
        },
        /**
         * 额外保存参数
         */
        params: {
            type: Object,
            default: function () {
                return {}
            }
        },
        /**
         * 最大操作次数
         */
        maxCount: {
            type: Number,
            default: -1,
        },
        /**
         * 保存频率(秒)
         */
        cycle: {
            type: Number,
            default: 10,
        },
        /**
         * 是否增量保存
         */
        incremental: {
            type: Boolean,
            default: true
        },
        /**
         * 页面切换是否停止
         */
         routeStop: {
            type: Boolean,
            default: true
        },
    },
    data() {
        return {
            cUrl: "",
            cMaxCount: -1,
            cCycle: 10,
            cParams: {},
            events: [],
            cRouteStop:true,
        };
    },
    watch: {
        url(value) {
            this.cUrl = value;
        },
        maxCount(value) {
            this.cMaxCount = value;
        },
        cycle(value) {
            this.cCycle = value;
        },
        params(value) {
            this.cParams = value;
        },
        routeStop(value) {
            this.cRouteStop = value;
        },
    },
    mounted() {
        this.cUrl = this.url;
        this.cMaxCount = this.maxCount;
        this.cCycle = this.cycle;
        this.cParams = this.params;
        this.cRouteStop = this.routeStop;
        //开始录制
        //this.start();
        this.currentRoute = this.$route.path;
    },
    methods: {
        start: function (e) {
            let self = this;
            self.stopFn = rrweb.record({
                emit(event) {
                    if (self.cMaxCount && self.cMaxCount != -1 && self.events.length > self.cMaxCount) {
                        // 当事件数量大于 maxCount 时停止录制
                        self.stopFn();
                    }
                    // 将 event 存入 events 数组中
                    self.events.push(event);
                },
                packFn: rrweb.pack,//数据压缩
            });

            // 每 cycle 秒调用一次 save 方法
            if (self.cCycle && self.cCycle != -1) {
                //开启定时器存储
                self.startSaveInterval();
            }

            /**
             * 开始录制
             * @params e
             * @event start
             */
            this.$emit("start", self.events);
        },
        stop: function (e) {
            //停止录制
            if (typeof this.stopFn === 'function') {
                this.stopFn();
            }
            // 停止循环定时
            clearInterval(this.recordInterval);

            /**
             * 停止录制
             * @params e
             * @event stop
             */
            this.$emit("stop", this.events);
        },
        startSaveInterval: function(e){
            let self = this;
            //定时保存录屏数据
            let time = self.cCycle * 1000;
            self.recordInterval = setInterval(() => {
                self.save();
            }, time);
        },
        save: function (e) {
            let self = this;
            //console.log(self.currentRoute+" <---> "+self.$route.path);
            //路由变化自动停止录屏，可防止其他页面也被录进去
            if(self.cRouteStop && self.currentRoute != self.$route.path){
                self.stop();
                return;
            }

            if (!self.cUrl || self.cUrl == '' || self.events.length == 0) {
                return;
            }
            let eventData = self.events;
            //是否增量更新
            if (self.incremental) {
                self.events = [];
            }

            let params = { ...self.cParams, events: JSON.stringify(eventData) };
            self.$postAction(self.cUrl, params).then((resp) => {
                /**
                 * 保存录制数据
                 * @params e
                 * @event save
                 */
                self.$emit("save", self.events, resp);
                //未授权时停止录屏
                if(resp.code && resp.code == 401){
                    self.stop();
                }
            });
        },
    },
    destroyed(e) {
        // 停止循环定时
        clearInterval(this.recordInterval);
    },
};
</script>
<style scoped></style>
