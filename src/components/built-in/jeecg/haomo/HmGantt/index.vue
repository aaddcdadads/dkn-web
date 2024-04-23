<template>
    <div :id="generateId">
    </div>
</template>
<script>
import GSTC from "gantt-schedule-timeline-calendar/dist/gstc.wasm.esm.min.js";
import "gantt-schedule-timeline-calendar/dist/style.css"
export default {
    name: "HmWangEditor",
    components: {},
    props: {
        /**
         * 密钥
         */
        key: {
            type: String,
            default: "====BEGIN LICENSE KEY====\nQHUkhBs6VNSSMP2aeX9nJwL1EEkPmqncMlD+n1CHwMLZX6wt3RZ0kwYdGz7TvUEiO9RE0ThP6/31MfefzqAEi3irX1wH1QvhC3d1AdSj3xOzwIrsSkHpo3uIL7/InNBtK5zHNdL32I3WzBEhy2FsZp9nyJXawKyB5pVRyTTdW3LRI35t14SQoWEdfil3BMyP2GWV7zUtYU/1DY6LsYSUpChoEHDKcAzAPgkT+w+SIiQXR+IwWPoGY+mhPvoI80eQNrHPERTb+XXvlYohVakvHQTCkYC/0G9DyGgv4RE9NKqOEN71UCKPnF04dHWwPqTaX1A6qegad+J+Prmqenv6UA==||U2FsdGVkX1/PSuoq+KDhsZZhuAXSB8OqtHii4jw8Yyb+Py95jKpzlvyFNCAnA6f38p1JOwI15Gb92O4Nf79GCXluVlrYPNg+t9/dcMdD/4k=\nTnisVz+E/20g/RKci/LuKtD6iysgn8bOGdjCT3hwQ33PVNWob9w2jygkDvtDGTW+ORSXdtOSzU+oxr4Wr8cVrm+Gl3GlyMy3GXIpH+8nVa4toJX1dha82nfBkc1L5dzh1/8Cq346ujz5HBNEEwLMjqwgEa37FVomY18NEdssPkC3f/6p1r4uVK98MaU4g3+r+L9FEwzpEvHYBrh5fMWBSWyaa6N6NLUY7HMJwF+0pIZEAtIiT35wT4ly7np1lgi7692x8lsiYC9h8iFEkLsvNuO/b+UPOlC6jHBr565YKABS3c4UFE+FSZRZR8+0w6vTfEfFXmkSpqx+i5CuLAfq6w==\n====END LICENSE KEY===="
        },
        /**
         * 列定义
         */
        columns: {
            type: Array,
            default: function () {
                return [
                    {
                        id: "id",
                        label: "ID",
                        width: 80,
                        header: {
                            content: "ID",
                        },
                    },
                    {
                        id: "label",
                        data: "label",
                        sortable: "label",
                        isHTML: false,
                        width: 230,
                        header: {
                            content: "Label",
                        },
                    },
                ]
            }
        },
        /**
        * 数据
        */
        data: {
            type: Array,
            default: function () {
                return [
                    {
                        id: "1",
                        label: "Row 1",
                    },
                    {
                        id: "2",
                        label: "Row 2",
                    },
                    {
                        id: "3",
                        label: "Row 4",
                    },
                ]
            }
        },
        /**
        * 项目
        */
        items: {
            type: Array,
            default: function () {
                return [
                    {
                        id: "1",
                        label: "Item 1",
                        rowId: "1",
                        time: {
                            start: "2020-01-01",
                            end: "2020-01-02",
                        },
                    },
                    {
                        id: "2",
                        label: "Item 2",
                        rowId: "1",
                        time: {
                            start: "2020-02-01",
                            end: "2020-02-02",
                        },
                    },
                    {
                        id: "3",
                        label: "Item 3",
                        rowId: "3",
                        time: {
                            start: "2020-01-15",
                            end: "2020-01-20",
                        },
                    },
                ]
            }
        },
        /**
        * 图表高度
        */
        innerHeight: {
            type: Number,
            default: 400
        },
        /**
        * 标题和日历的高度
        */
        headerHeight: {
            type: Number,
            default: 100
        },
        /**
        * 自动计算图表高度
        */
        autoInnerHeight: {
            type: Boolean,
            default: true
        },
        /**
        * 插槽
        */
        slots: {
            type: Object,
            default: function () {
                return {}
            }
        },
        /**
        * 自定义事件监听器
        */
        actions: {
            type: Object,
            default: function () {
                return {
                }
            }
        }
    },
    data() {
        return {
            cColumns: [],
            cData: [],
            cItems: [],
            cActions: []
        };
    },
    computed: {
        generateId() {
            return `gstc${new Date().getTime()}`;
        }
    },
    watch: {
        columns: {
            handler: function (value) {
                this.cColumns = this.getColumns(value)
                this.initialization()
            },
            deep: true,
        },
        data: {
            handler: function (value) {
                this.cData = value
                this.initialization()
            },
            deep: true,
        },
        items: {
            handler: function (value) {
                this.cItems = this.getItemsData(value)
                this.initialization()
            },
            deep: true,
        },
        actions: {
            handler: function (value) {
                this.cActions = value
                this.initialization()
            },
            deep: true,
        }
    },
    mounted() {
        this.cData = this.data
        this.cActions = this.actions
        this.cColumns = this.getColumns(this.columns)
        this.cItems = this.getItemsData(this.items)
        this.initialization()
    },
    methods: {
        /**
         * 初始化
         * @return void
         */
        initialization() {
            console.log(this.actions)
            let config = {
                licenseKey: this.key,
                list: {
                    columns: {
                        data: GSTC.api.fromArray(this.cColumns),
                    },
                    rows: GSTC.api.fromArray(this.cData),
                },
                chart: {
                    items: GSTC.api.fromArray(this.cItems),
                },
                autoInnerHeight: this.autoInnerHeight,
                slots: this.slots,
                actions: this.cActions
            };
            if (this.innerHeight) {
                config.innerHeight = this.innerHeight
            }
            if (this.headerHeight) {
                config.headerHeight = this.headerHeight
            }
            const state = GSTC.api.stateFromConfig(config);

            const app = GSTC({
                element: document.getElementById(this.generateId),
                state,
            });
        },
        /**
         * item数据处理
         * @param {*} list 
         */
        getItemsData(list) {
            return list.map(e => {
                if (e?.time?.start && e?.time?.end) {
                    e.time.start = GSTC.api.date(e.time.start).startOf("day").valueOf()
                    e.time.end = GSTC.api.date(e.time.end).endOf("day").valueOf()
                }
                return e
            })
        },
        /**
         * 表头处理
         * @param {*} list 
         */
        getColumns(list) {
            return list.map(e => {
                if (e.id === "id") {
                    e.data = ({ row }) => GSTC.api.sourceID(row.id)
                    e.sortable = ({ row }) => Number(GSTC.api.sourceID(row.id))
                }
                return e
            })
        }
    }

}
</script>
<style lang="less" scoped></style>