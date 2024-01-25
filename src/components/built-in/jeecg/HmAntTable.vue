<template>
    <div class="table-div">
        <a-table ref="table" :columns="cColumns" row-key="id" :scroll="scroll" :data-source="cData" :bordered="bordered"
            :row-class-name="
                rowClassName.class ||
                function () {
                    return null;
                }
            " :row-selection="rowSelectFlag ? cRowSelection : null" :pagination="paginationHidden ? false : cPagination"
            @change="onChange" :customRow="customRow">
            <template #filterDropdownInput="{
                setSelectedKeys,
                selectedKeys,
                confirm,
                clearFilters,
                column,
            }">
                <div style="padding: 8px">
                    <a-input ref="searchInput" :placeholder="`请输入${column.title}`" :value="selectedKeys[0]"
                        style="width: 188px; margin-bottom: 8px; display: block" @change="
                            (e) => setSelectedKeys(e.target.value ? [e.target.value] : [])
                        " @pressEnter="handleFilterInput(selectedKeys, confirm, column)" />
                    <a-button type="primary" size="small" style="width: 90px; margin-right: 8px"
                        @click="handleFilterInput(selectedKeys, confirm, column)">确定</a-button>
                    <a-button size="small" style="width: 90px" @click="handleReset(clearFilters, column)">重置</a-button>
                </div>
            </template>

            <template #filterDropdownSelect="{
                setSelectedKeys,
                selectedKeys,
                confirm,
                clearFilters,
                column,
            }">
                <div style="padding: 8px">
                    <a-select style="width: 188px; margin-bottom: 8px; display: block" v-model:value="selectedKeys[0]"
                        :placeholder="'请选择' + column.title" :options="column.filterOptions">
                    </a-select>
                    <a-button type="primary" size="small" style="width: 90px; margin-right: 8px"
                        @click="handleFilterSelect(selectedKeys, confirm, column)">确定</a-button>
                    <a-button size="small" style="width: 90px" @click="handleReset(clearFilters, column)">重置</a-button>
                </div>
            </template>

            <template #filterDropdownAutoComplete="{
                setSelectedKeys,
                selectedKeys,
                confirm,
                clearFilters,
                column,
            }">
                <div style="padding: 8px">
                    <a-auto-complete style="width: 188px; margin-bottom: 8px; display: block"
                        v-model:value="selectedKeys[0]" :options="filterSearchResult[column.dataIndex] || []"
                        :placeholder="'请输入' + column.title"
                        @search="handleFilterSearch(column.filterSearchUrl + '*' + selectedKeys[0] + '*', column)">
                    </a-auto-complete>
                    <a-button type="primary" size="small" style="width: 90px; margin-right: 8px"
                        @click="handleFilterAutoComplete(selectedKeys, confirm, column)">确定</a-button>
                    <a-button size="small" style="width: 90px" @click="handleReset(clearFilters, column)">重置</a-button>
                </div>
            </template>

            <template #filterDropdownDate="{
                setSelectedKeys,
                selectedKeys,
                confirm,
                clearFilters,
                column,
            }">
                <div style="padding: 8px" class="filter-dropdown-date">
                    <div style="margin-bottom: 8px">
                        <a-date-picker :placeholder="`开始日期`" v-model:value="selectedKeys[0]" />
                    </div>
                    <div style="margin-bottom: 8px">
                        <a-date-picker :placeholder="`结束日期`" v-model:value="selectedKeys[1]" />
                    </div>
                    <a-button type="primary" size="small" style="width: 90px; margin-right: 8px"
                        @click="handleFilterDate(selectedKeys, confirm, column)">确定</a-button>
                    <a-button size="small" style="width: 90px" @click="handleReset(clearFilters, column)">重置</a-button>
                </div>
            </template>

            <template #filterDropdownDateTime="{
                setSelectedKeys,
                selectedKeys,
                confirm,
                clearFilters,
                column,
            }">
                <div style="padding: 8px" class="filter-dropdown-datetime">
                    <div style="margin-bottom: 8px">
                        <a-date-picker :placeholder="`选择开始日期`" v-model:value="selectedKeys[0]" />
                        <a-time-picker :placeholder="`选择开始时间`" v-model:value="selectedKeys[1]" />
                    </div>
                    <div style="margin-bottom: 8px">
                        <a-date-picker :placeholder="`选择结束日期`" v-model:value="selectedKeys[1]" />
                        <a-time-picker :placeholder="`选择结束时间`" v-model:value="selectedKeys[1]" />
                    </div>
                    <a-button type="primary" size="small" style="width: 90px; margin-right: 8px"
                        @click="handleFilterDateTime(selectedKeys, confirm, column)">确定</a-button>
                    <a-button size="small" style="width: 90px" @click="handleReset(clearFilters, column)">重置</a-button>
                </div>
            </template>

            <template #action="{ record, index, column }">
                <template v-if="isFlatAction">
                    <span v-for="action in actions" :key="action.name">
                        <i v-if="action.name.indexOf('fa-') === 0" :class="'action-icon fa ' + action.name" :style="`font-size: ${action.size}px; color: ${action.color || null
                        }`" @click="action.callback(record, index, column)"></i>
                        <a-button v-if="action.name.indexOf('fa-') !== 0 && hasPermission(action.auth)" class="action-btn"
                            :type="action.type || 'primary'" :size="action.size || 'default'" :shape="action.shape"
                            @click="action.callback(record, index, column)">
                            <template v-if="action.icon" #icon>
                                <i :class="'fa ' + action.icon" />
                            </template>
                            {{ action.name }}
                        </a-button>
                    </span>
                </template>

                <a-dropdown v-if="!isFlatAction">
                    <template #overlay>
                        <a-menu>
                            <div v-for="action in cActions" :key="action.name">
                                <a-menu-item v-if="hasPermission(action.auth)"
                                @click="action.callback(record, index, column)">{{ action.name }}</a-menu-item>
                            </div>
                        </a-menu>
                    </template>
                    <a-button>
                        操作
                        <i class="fa fa-angle-down" />
                    </a-button>
                </a-dropdown>
            </template>
        </a-table>
    </div>
</template>
<script>
import _ from "lodash";
import jp from "jsonpath";
import JSONfn from "/@/utils/jsonfn";
import { hasPermission } from '/@/utils/util';
import {
    getAction,
    postAction,
    deleteAction,
    putAction,
} from "/@/request/http";

class HmTable {
    constructor(columns, data, combined) {
        this.columns = columns;
        this.data = data;
        this.combined = combined || [];
    }

    /**
     * 自动计算合并单元格
     */
    getCombinedColumns() {
        let self = this;
        if (!self.combined || !self.combined.length) {
            return _.cloneDeep(self.columns);
        }

        // 计算要进行数据合并的范围
        let ranges = self.getCombinedRanges();
        // 对this.columns进行处理，完成合并操作
        _.each(ranges, (range) => {
            self.combineRangeOnColumns(range);
        });
        return _.cloneDeep(self.columns);
    }

    /**
     * 计算要合并的数据范围。可以是多个联通区域。
     * ["r1c1:r10c1", "r2c2:r10c2", "r1:r2", "c4"] ；用户输入的类似的数据，转换成如下格式的数据
     * [
     *   {
     *     cols: [1, 2],
     *     rows: [1, 100]
     *   }
     * ]
     */
    getCombinedRanges() {
        let self = this;
        let ranges = [];
        if (!this.combined || !this.combined.length) {
            return [];
        }

        let rowNum = this.data.length;
        let colNum = this.getColNum();

        _.each(this.combined, (item) => {
            // 计算行范围
            let rows = [];
            let rowRegex = /r\d+/g;
            let rowMatch = item.match(rowRegex);
            if (!rowMatch) {
                rows = [1, rowNum];
            } else if (rowMatch.length === 1) {
                let row = parseInt(rowMatch[0].replace("r", ""));
                rows = [row, row];
            } else if (rowMatch.length === 2) {
                let rowStart = parseInt(rowMatch[0].replace("r", ""));
                let rowEnd = parseInt(rowMatch[1].replace("r", ""));
                rows = [rowStart, rowEnd];
            } else {
                console.warn(`非法表达式：${item}`);
            }

            let cols = [];
            let colRegex = /c\d+/g;
            let colMatch = item.match(colRegex);
            if (!colMatch) {
                cols = [1, colNum];
            } else if (colMatch.length === 1) {
                let col = parseInt(colMatch[0].replace("c", ""));
                cols = [col, col];
            } else if (colMatch.length === 2) {
                let colStart = parseInt(colMatch[0].replace("c", ""));
                let colEnd = parseInt(colMatch[1].replace("c", ""));
                cols = [colStart, colEnd];
            } else {
                console.warn(`非法表达式：${item}`);
            }

            let subRanges = self.getSameValueSubMatrix({ rows: rows, cols: cols });
            ranges = _.concat(ranges, subRanges);
        });

        return ranges;
    }

    getColNum() {
        return this.getFlattenedColumns().length;
    }

    getFlattenedColumns(columns) {
        let self = this;
        if (typeof columns === "undefined") {
            columns = this.columns;
        }
        let flattenedColumns = [];

        _.each(columns, (column) => {
            if (typeof column.dataIndex !== "undefined") {
                flattenedColumns.push(column);
                return;
            }
            if (column.children && column.children.length > 0) {
                flattenedColumns = _.concat(
                    flattenedColumns,
                    self.getFlattenedColumns(column.children)
                );
            }
        });
        return flattenedColumns;
    }

    /**
     * 计算矩阵内值相同的子矩阵
     */
    getSameValueSubMatrix(range) {
        let self = this;
        let subRanges = [];
        let values = self.getDistinctValues(range);
        _.each(values, (value) => {
            subRanges = _.concat(subRanges, self.getSubRangesOfValue(range, value));
        });
        return subRanges;
    }

    /**
     * 计算一个子矩阵内的所有可能值
     */
    getDistinctValues(range) {
        let values = [];

        for (let r = range.rows[0]; r <= range.rows[1]; r++) {
            for (let c = range.cols[0]; c <= range.cols[1]; c++) {
                let value = this.getValueByIndex(r, c);
                if (values.indexOf(value) < 0) {
                    values.push(value);
                }
            }
        }
        return values;
    }

    /**
     * 计算子矩阵中值为value的所有最大子矩阵
     */
    getSubRangesOfValue(range, value) {
        let self = this;
        let subRanges = [];
        for (let r_s = range.rows[0]; r_s <= range.rows[1]; r_s++) {
            for (let c_s = range.cols[0]; c_s <= range.cols[1]; c_s++) {
                // 如果左上点的值不等于value则跳过
                if (self.getValueByIndex(r_s, c_s) !== value) {
                    continue;
                }

                let maxCount = 1;
                let endPoint = [];
                for (let r_e = r_s; r_e <= range.rows[1]; r_e++) {
                    for (let c_e = c_s; c_e <= range.cols[1]; c_e++) {
                        // 如果右下点的值不等于value则跳过
                        if (self.getValueByIndex(r_e, c_e) !== value) {
                            continue;
                        }

                        // 如果当前区域跟subRanges有交集，那么跳过
                        if (
                            self.hasIntersectionWithRanges(
                                { rows: [r_s, r_e], cols: [c_s, c_e] },
                                subRanges
                            )
                        ) {
                            continue;
                        }

                        // 计算左上和右下点之间的所有为value的值的点数
                        let sum = self.countMatchedValue(
                            {
                                rows: [r_s, r_e],
                                cols: [c_s, c_e],
                            },
                            value
                        );

                        let shouldBeSum = (r_e - r_s + 1) * (c_e - c_s + 1);
                        if (shouldBeSum === sum && sum > maxCount) {
                            maxCount = sum;
                            endPoint = [r_e, c_e];
                        }
                    }
                }

                if (endPoint.length) {
                    subRanges.push({
                        rows: [r_s, endPoint[0]],
                        cols: [c_s, endPoint[1]],
                    });
                }
            }
        }
        return subRanges;
    }

    hasIntersection(range1, range2) {
        return (
            Math.max(range1.rows[0], range2.rows[0]) <=
            Math.min(range1.rows[1], range2.rows[1]) &&
            Math.max(range1.cols[0], range2.cols[0]) <=
            Math.min(range1.cols[1], range2.cols[1])
        );
    }

    countMatchedValue(range, value) {
        let count = 0;
        for (let r = range.rows[0]; r <= range.rows[1]; r++) {
            for (let c = range.cols[0]; c <= range.cols[1]; c++) {
                if (this.getValueByIndex(r, c) === value) {
                    count++;
                }
            }
        }
        return count;
    }

    /**
     * 计算range和ranges是否有交集
     * @param {*} range
     * @param {*} ranges
     */
    hasIntersectionWithRanges(range, ranges) {
        let self = this;
        return _.reduce(
            ranges,
            (result, value, key) => {
                return result || self.hasIntersection(range, value);
            },
            false
        );
    }

    /**
     * 根据行列标号，取到对应单元格的值
     */
    getValueByIndex(row, col) {
        let flattenedColumns = this.getFlattenedColumns();
        let colIndex = flattenedColumns[col - 1].dataIndex;
        return this.data[row - 1][colIndex];
    }

    getColumnByIndex(col) {
        let flattenedColumns = this.getFlattenedColumns();
        return flattenedColumns[col - 1];
    }

    getColumnsByColRange(colRange) {
        let columns = [];
        for (let c = colRange[0]; c <= colRange[1]; c++) {
            columns.push(this.getColumnByIndex(c));
        }
        return columns;
    }

    /**
     * 合并联通的区域
     */
    combineRangeOnColumns(range) {
        if (
            !range ||
            !range.rows ||
            range.rows.length !== 2 ||
            !range.cols ||
            range.cols.length !== 2
        ) {
            return this.columns;
        }

        let relatedColumns = this.getColumnsByColRange(range.cols);

        for (let i = 0; i < relatedColumns.length; i++) {
            if (i === 0) {
                relatedColumns[i].customRender = ({ text, index }) => {
                    const obj = {
                        children: text,
                        props: {},
                    };

                    if (index === range.rows[0] - 1) {
                        obj.props.rowSpan = range.rows[1] - range.rows[0] + 1;
                        obj.props.colSpan = range.cols[1] - range.cols[0] + 1;
                    } else if (index > range.rows[0] - 1 && index < range.rows[1]) {
                        obj.props.rowSpan = 0;
                        obj.props.colSpan = 0;
                    }

                    return obj;
                };
            } else {
                relatedColumns[i].customRender = ({ text, index }) => {
                    const obj = {
                        children: text,
                        props: {},
                    };

                    if (index >= range.rows[0] - 1 && index < range.rows[1]) {
                        obj.props.rowSpan = 0;
                        obj.props.colSpan = 0;
                    }

                    return obj;
                };
            }
        }

        return this.columns;
    }
}

export default {
    name: "HmAntTable",
    components: {},
    props: {
        /**
         * 列定义
         */
        columns: {
            type: Array,
            default: function () {
                return [
                    {
                        title: "姓名",
                        dataIndex: "name",
                        key: "name",
                    },
                    {
                        title: "年龄",
                        dataIndex: "age",
                        key: "age",
                        width: 80,
                    },
                    {
                        title: "地址",
                        dataIndex: "address",
                        key: "address",
                        ellipsis: true,
                    },
                    {
                        title: "性别",
                        dataIndex: "sexual",
                        key: "sexual",
                        ellipsis: true,
                    },
                    {
                        title: "毕业院校",
                        dataIndex: "school",
                        key: "school",
                        ellipsis: true,
                    },
                    {
                        title: "操作",
                        dataIndex: "",
                        key: "action",
                        slots: { customRender: "action" },
                    },
                ];
            },
        },
        /**
         * 数据
         */
        data: {
            type: Array,
            default: function () {
                return [
                    {
                        key: "1",
                        name: "John Brown",
                        age: 32,
                        address: "New York No. 1 Lake Park, New York No. 1 Lake Park",
                        sexual: "男",
                        school: "加里敦大学",
                    },
                    {
                        key: "2",
                        name: "Jim Green",
                        age: 42,
                        address: "London No. 2 Lake Park, London No. 2 Lake Park",
                        sexual: "男",
                        school: "加里敦大学",
                    },
                    {
                        key: "3",
                        name: "Joe Black",
                        age: 32,
                        address: "Sidney No. 1 Lake Park, Sidney No. 1 Lake Park",
                        sexual: "男",
                        school: "加里敦大学",
                    },
                ];
            },
        },
        /**
         * 隐藏翻页控件
         */
        paginationHidden: {
            type: Boolean,
            default: false,
        },
        /**
         * 翻页参数
         */
        pagination: {
            type: Object,
            default: function () {
                return {
                    current: 1,
                    pageSize: 10,
                };
            },
        },
        /**
         * 显示序号列
         */
        showColumnNo: {
            type: Boolean,
            default: false,
        },
        /**
         * 请求方法
         * @type Enum
         * @options ["get", "post"]
         */
        httpMethod: {
          type: String,
          default: "get"
        },
        /**
         * 请求URL
         */
        url: {
            type: String,
        },
        /**
         * Params或Body
         * @desc 当 httpMethod = "get"时，为 url参数；为"post"时，为body内容
         */
        params: {
            type: Object,
            default: function () {
                return {}
            }
        },
        /**
         * 请求结果映射
         * @desc list为列表数据路径；total为总数路径。路径采用JSONPath格式（去掉前面的 $.）
         */
        getDataMap: {
            type: Object,
            default: function () {
                return {
                    list: '',
                    total: ''
                }
            }
        },
        /**
         * 分页参数映射
         */
        paginationMap: {
            type: Object,
            default: function () {
                return {
                    pageNo: 'pageNo',
                    pageSize: 'pageSize'
                }
            }
        },
        /**
         * 可选择行
         */
        rowSelectFlag: {
            type: Boolean,
            default: false,
        },
        /**
         * 行选择配置
         */
        rowSelection: {
          type: Object,
          default: function() {
            return {};
          }
        },
        /**
         * 带边框
         */
        bordered: {
            type: Boolean,
            default: true,
        },
        /**
         * 操作按钮
         */
        actions: {
            type: Array,
            default: function () {
                return [
                    {
                        name: "编辑",
                        callback: function (item) {
                            console.log("点击编辑: ", item);
                        },
                    },
                    {
                        name: "删除",
                        callback: function (item) {
                            console.log("点击删除: ", item);
                        },
                    },
                ];
            },
        },
        /**
         * 操作按钮展开
         */
        isFlatAction: {
            type: Boolean,
            default: false,
        },
        /**
         * 固定行列
         */
        scroll: {
            type: Object,
            default: function () {
                return {
                    x: "100%",
                };
            },
        },
        /**
         * 自动合并单元
         * @description 数据相同的内容自动合并. 形如 ["r1c1:r10c1", "r2c2:r10c2", "r1:r2", "c4"]，这里的r1c1表示的是第1行（row 1），第1列（column 1）。第1列不包含表格，指的是数据行。
         */
        combined: {
            type: Array,
            default: function() {
                return [];
            },
        },
        /**
         * 清空过滤排序
         */
        clearFiltersAndSortersFlag: {
            type: Boolean,
            default: false,
        },
        /**
         * 行高
         */
        rowHeight: {
            type: String,
            default: "42",
        },
        /**
         * 表格背景颜色
         * @type Color
         * */
        backgroundColor: {
            type: String,
            default: "",
        },
        /**
         * 行类名
         */
        rowClassName: {
            type: Object,
            default: function () {
                return {
                    class: null,
                };
            },
        },
    },
    data() {
        return {
            hasPermission,
            hmTable: new HmTable(),
            cData: [],
            cColumns: [],
            cActions: [],
            cRowHeight: "42px",
            cRowSelection: {},
            cPagination: {
                current: 1,
                pageSize: 10,
            },
            sorter: {},
            filters: {},
            // 保存AutoComplete类型的过滤搜索结果，key为column.dataIndex
            filterSearchResult: {},
            cBackgroundColor: "",
        };
    },
    watch: {
        combined: {
            handler: function (value, oldValue) {
                console.log("watch combined");
                this.hmTable.combined = value;
                this.cColumns = this.hmTable.getCombinedColumns();
                if (this.showColumnNo) {
                    this.cColumns.unshift({
                        title: "序号",
                        dataIndex: "hmNo",
                        key: "hmNo",
                        width: 60,
                    });
                }
            },
            deep: true,
        },
        clearFiltersAndSortersFlag(value, oldValue) {
            console.log(`清除过滤和排序：`, value, oldValue);
            if (!oldValue && value) {
                this.filters = {};
                this.sorter = {};
                this.getData();
            }
        },
        columns: {
            handler: function (value, oldValue) {
                console.log("watch columns");
                this.hmTable.columns = value;
                this.cColumns = this.hmTable.getCombinedColumns();
                if (this.showColumnNo) {
                    this.cColumns.unshift({
                        title: "序号",
                        dataIndex: "hmNo",
                        key: "hmNo",
                        width: 60,
                    });
                }
            },
            deep: true,
        },
        data: {
            handler: function (value, oldValue) {
                console.log("watch data");
                this.cData = JSONfn.parse(JSONfn.stringify(value));

                if (this.showColumnNo) {
                    _.each(this.cData, (item, index) => {
                        item.hmNo = index + 1;
                    });
                }

                this.hmTable.data = this.cData;
                // this.cColumns = this.hmTable.getCombinedColumns();
                // if (this.showColumnNo) {
                //   this.cColumns.unshift({
                //     title: "序号",
                //     dataIndex: "hmNo",
                //     key: "hmNo",
                //   })
                // }
            },
            deep: true,
        },
        actions: {
            handler: function (value, oldValue) {
                console.log("watch actions");
                this.cActions = this.convertActions(value);
            },
            deep: true,
        },
        url(value) {
            this.getData(value);
        },
        params: {
            handler: function (value, oldValue) {
                if (JSON.stringify(value) == JSON.stringify(oldValue)) {
                    // 修复相等的情况下也调用watch的bug
                    return;
                }
                console.log("watch params");
                if (value.pageNo) {
                    this.cPagination.current = value.pageNo;
                }
                this.getData(null, value);
            },
            deep: true,
        },
        pagination: {
            handler(value) {
                if (Object.keys(value).length === 0) {
                    this.cPagination = false;
                } else {
                    this.cPagination = Object.assign(this.cPagination, this.pagination);
                }
                console.log(
                    `table watch pagination: `,
                    this.cPagination,
                    this.pagination
                );
                // this.getData();
            },
            deep: true,
        },
        rowHeight(value) {
            this.cRowHeight = this.getCssUnit(value);
        },
        backgroundColor(value) {
            this.cBackgroundColor = value;
        },
        rowSelection: {
            handler: function (value, oldValue) {
              this.cRowSelection = Object.assign({
                onChange: this.onSelectChange,
                onSelect: this.onSelect,
                onSelectAll: this.onSelectAll,
              }, value);
            },
            deep: true,
        },
    },
    computed: {},
    mounted() {
        this.cBackgroundColor = this.backgroundColor;
        this.cRowHeight = this.getCssUnit(this.rowHeight);
        this.hmTable = new HmTable(this.columns, this.data, this.combined);
        this.cColumns = this.hmTable.getCombinedColumns();

        this.cActions = this.convertActions(this.actions);
        this.cData = JSONfn.parse(JSONfn.stringify(this.data));

        if (this.showColumnNo) {
            this.cColumns.unshift({
                title: "序号",
                dataIndex: "hmNo",
                key: "hmNo",
                width: 60,
            });
            _.each(this.cData, (item, index) => {
                item.hmNo = index + 1;
            });
        }

        if (Object.keys(this.pagination).length === 0) {
            this.cPagination = false;
        } else {
            this.cPagination = Object.assign(this.cPagination, this.pagination);
        }

        console.log(`table mounted: `, this.cPagination, this.pagination);
        this.getData();

        this.cRowSelection = Object.assign({
            onChange: this.onSelectChange,
            onSelect: this.onSelect,
            onSelectAll: this.onSelectAll,
        }, this.rowSelection);
    },
    methods: {
        getData(url, params) {
            let self = this;
            self._getData(url, params);
        },
        _getData(url, params) {
            let self = this;
            url = url || this.url;

            if (!url) {
                return;
            }

            params =
                params || (this.params ? JSON.parse(JSON.stringify(this.params)) : {});

            // 跟表格自带的翻页过滤排序功能结合
            // 翻页
            if (typeof this.cPagination !== "boolean") {
                params = Object.assign(params, {
                    [this.paginationMap.pageNo]: this.cPagination.current,
                    [this.paginationMap.pageSize]: this.cPagination.pageSize,
                });
            }

            // 排序
            if (this.sorter && this.sorter.field) {
                params.column = this.sorter.field;
                params.order = this.sorter.order === "descend" ? "desc" : "asc";
            }

            // 过滤
            if (this.filters) {
                params = Object.assign(params, this.filters);
                Object.entries(this.filters).forEach(e=>{
                    if(typeof e[1]==='object'){
                        params[e[0]]=e[1].join(",")
                    }
                })
            }

            // 加载全部，默认为最多加载100万条
            if (Number.isNaN(params.pageSize)) {
                params.pageNo = 1;
                params.pageSize = 1000000;
                self.cPagination.current = 1;
                self.cPagination.pageSize = params.pageSize;
            }

            if (Number.isNaN(params.pageNo)) {
                params.pageNo = 1;
            }

            let request = getAction;
            if (this.httpMethod && this.httpMethod.toLowerCase() == 'post') {
              request = postAction;
            }
            request(url, params).then((resp) => {
                console.log(`get table data: `, resp);
                self.cData = [];
                setTimeout(() => {
                    self.cData = self.getDataList(resp);
                    if (typeof self.cPagination !== "boolean") {
                        self.cPagination.total = self.getDataTotal(resp);
                    }
                    _.each(self.cData, (item, index) => {
                        item.hmNo = index + 1;
                    });
                    self.hmTable.data = self.cData;

                    self.afterGetData(self.cData)

                    // 处理翻页为全部的情况
                    if (self.cPagination.pageSize === 1000000) {
                        self.cPagination.pageSize = '全部';
                    }
                    self.$nextTick(function () {
                        let eleTable = self.$refs.table.$el;
                        let eleUl = eleTable.querySelector('.ant-table-pagination');
                        if (!eleUl) return;

                        let display = self.cPagination.pageSize === '全部' ? 'none' : 'inline-block';

                        for (let i = 1; i < eleUl.children.length; i++) {
                            let eleLi = eleUl.children[i];
                            let text = eleLi["innerText" in eleLi ? "innerText" : "textContent"];
                            if (text.indexOf('NaN') >= 0) {
                                eleLi.style.display = display;
                            }
                        }

                        if (eleUl.children.length < 8) {
                            return;
                        }

                        for (let i = 3; i < 8; i++) {
                            eleUl.children[i].style.display = display;
                        }
                        let quickJumper = eleTable.querySelector('.ant-pagination-options-quick-jumper')
                        if (!quickJumper) return;

                        quickJumper.style.display = display;
                    });
                }, 0);
                // self.cColumns = self.hmTable.getCombinedColumns();
            }).catch(e => {
                console.log("get tabledata error:", e)
            });
        },
        /**
         * 接口请求后事件
         */
        afterGetData(data) {
            this.$emit("afterGetData", data)
        },
        /**
         * 从接口返回结果里取到数组
         */
        getDataList(resp) {
            if (this.getDataMap.list) {
                let listPath = this.getDataMap.list;
                listPath = listPath.indexOf('$') === 0 ? listPath : `$.${listPath}`;
                return jp.query(resp, listPath)[0];
            }

            if (resp.result) {
                return resp.result.records || resp.result;
            }

            if (resp.data) {
                return resp.data;
            }
        },
        /**
         *  从接口返回结果里取到总数
         */
        getDataTotal(resp) {
            if (this.getDataMap.total) {
                let totalPath = this.getDataMap.total;
                totalPath = totalPath.indexOf('$') === 0 ? totalPath : `$.${totalPath}`;
                return jp.query(resp, totalPath)[0];
            }
            if (resp.result) {
                return resp.result.total || this.cPagination.pageSize;
            }
            if (resp.data) {
                return resp.total || this.cPagination.pageSize;
            }
            return this.cPagination.pageSize;
        },
        convertActions(actions) {
            let ret = [];
            _.each(actions, (action) => {
                if (
                    action.callback &&
                    typeof action.callback === "string" &&
                    action.callback.indexOf("function") === 0
                ) {
                    try {
                        action.callback = eval(`(${action.callback})`);
                    } catch (error) {
                        console.error("action.callback error: ", action);
                    }
                }
                ret.push(action);
            });
            return ret;
        },
        onSelectChange(selectedRowKeys, selectedRows) {
            console.log(
                `onSelectChange: selectedRowKeys: ${selectedRowKeys}`,
                "selectedRows: ",
                selectedRows
            );
            this.rowSelection.selectedRowKeys = selectedRowKeys;
            this.$emit("onSelectChange", { selectedRowKeys, selectedRows });
        },
        onSelect(record, selected, selectedRows) {
            console.log(
                `onSelect: record: ${record}, selected: ${selected}, selectedRows: ${selectedRows}`
            );
            this.$emit("onSelect", { record, selected, selectedRows });
        },
        onSelectAll(selected, selectedRows, changeRows) {
            console.log(
                `onSelectAll: selected: ${selected}, selectedRows: ${selectedRows}, changeRows: ${changeRows}`
            );
            this.$emit("onSelectAll", { selected, selectedRows, changeRows });
        },
        onChange(pagination, filters, sorter, { currentDataSource }) {
            console.log(
                `pagination: `,
                pagination,
                "filters: ",
                filters,
                "sorter: ",
                sorter,
                "currentDataSource: ",
                currentDataSource,
                new Date().getTime()
            );
            if (Object.keys(this.pagination).length === 0) {
                this.cPagination = false;
            } else {
                this.cPagination = Object.assign(this.cPagination, pagination);
            }
            this.sorter = sorter;
            this.filters = filters;
            this.getData();
            this.$emit("change", pagination, filters, sorter, { currentDataSource });
        },

        /**
         * 字段过滤项, input类型
         */
        handleFilterInput(selectedKeys, confirm, column) {
            console.log(`handleFilterInput: `, selectedKeys, confirm, column);
            if (!selectedKeys || !selectedKeys.length || selectedKeys[0] === null) {
                this.getData();
                return;
            }
            this.filters[column.dataIndex] = `*${selectedKeys[0]}*`;
            this.getData();
        },

        /**
         * 字段过滤项, select类型
         */
        handleFilterSelect(selectedKeys, confirm, column) {
            console.log(`handleFilterSelect: `, selectedKeys, confirm, column);
            this.filters[column.dataIndex] = selectedKeys[0];
            this.getData();
        },

        /**
         * 字段过滤项, AutoComplete类型
         */
        handleFilterAutoComplete(selectedKeys, confirm, column) {
            console.log(`handleFilterAutoComplete: `, selectedKeys, confirm, column);
            if (!selectedKeys || !selectedKeys.length || selectedKeys[0] === null) {
                this.getData();
                return;
            }
            this.filters[column.dataIndex] = selectedKeys[0];
            this.getData();
        },

        /**
         * 过滤条件为AutoComplete时的查询
         */
        handleFilterSearch(url, column) {
            let self = this;
            console.log(`handleFilterSearch url: ${url}`)
            getAction(url).then(resp => {
                let searchResult = self.getDataList(resp);
                if (column.filterSearchResultMap.label && column.filterSearchResultMap.value) {
                    self.filterSearchResult[column.dataIndex] = _.map(searchResult, item => {
                        item.label = item[column.filterSearchResultMap.label];
                        item.value = item[column.filterSearchResultMap.value];
                        return item;
                    });
                } else {
                    self.filterSearchResult[column.dataIndex] = searchResult;
                }
            });
        },

        /**
         * 字段过滤项, Date类型
         */
        handleFilterDate(selectedKeys, confirm, column) {
            console.log(`handleFilterDate: `, selectedKeys, confirm, column);
            if (
                !selectedKeys ||
                !selectedKeys.length ||
                (!selectedKeys[0] && !selectedKeys[1])
            ) {
                this.getData();
                return;
            }

            // 时间范围
            let format = "YYYY-MM-DD";
            if (selectedKeys[0]) {
                this.filters[`${column.dataIndex}_begin`] =
                    selectedKeys[0].format(format);
            } else {
                delete this.filters[`${column.dataIndex}_begin`];
            }

            if (selectedKeys[1]) {
                this.filters[`${column.dataIndex}_end`] =
                    selectedKeys[1].format(format);
            } else {
                delete this.filters[`${column.dataIndex}_end`];
            }

            this.getData();
        },

        /**
         * 字段过滤项, DateTime类型
         */
        handleFilterDateTime(selectedKeys, confirm, column) {
            console.log(`handleFilterDateTime: `, selectedKeys, confirm, column);
            if (!selectedKeys.length || (!selectedKeys[0] && !selectedKeys[2])) {
                this.getData();
                return;
            }

            // 时间范围
            let dateFormat = "YYYY-MM-DD";
            let timeFormat = "HH:mm:ss";
            if (selectedKeys[0]) {
                this.filters[`${column.dataIndex}_begin`] = `${selectedKeys[0].format(
                    dateFormat
                )} ${selectedKeys[1] ? selectedKeys[1].format(timeFormat) : "00:00:00"
                    }`;
            } else {
                delete this.filters[`${column.dataIndex}_begin`];
            }

            if (selectedKeys[2]) {
                this.filters[`${column.dataIndex}_end`] = `${selectedKeys[2].format(
                    dateFormat
                )} ${selectedKeys[3] ? selectedKeys[3].format(timeFormat) : "23:59:59"
                    }`;
            } else {
                delete this.filters[`${column.dataIndex}_end`];
            }

            this.getData();
        },

        /**
         * 重置过滤项
         */
        handleReset(clearFilters, column) {
            console.log(`handleReset: `, clearFilters, column);
            clearFilters();
            delete this.filters[column.dataIndex];
            this.getData();
        },
        getCssUnit(value) {
            if (isNaN(Number(value))) {
                return value;
            }
            return `${value}px`;
        },
        onClickRow(data) {
            this.$emit('clickRow', data);
        },
        customRow(record, index) {
            let self = this;
            return {
                onClick: (event) => {
                    self.onClickRow({ event, record, index })
                }
            };
        }
    },
};
</script>
<style scoped>
.table-div {
    position: relative;
    display: flex;
    align-items: center;
    min-width: 300px;
    width: 100%;
}

.table-div /deep/ .ant-table-wrapper {
    width: 100% !important;
}

.table-div /deep/ .filter-dropdown-date .ant-calendar-picker {
    width: 188px;
}

.table-div /deep/ .filter-dropdown-datetime .ant-calendar-picker {
    width: 130px;
}

.table-div /deep/ .filter-dropdown-datetime .ant-time-picker {
    width: 130px;
}

.fa.fa-angle-down {
    margin-left: 5px;
    font-size: 16px;
}

.action-btn,
.action-icon {
    margin: 5px;
}

.action-icon:hover {
    cursor: pointer;
}

.table-div /deep/ .ant-table-thead>tr>th,
.table-div /deep/ .ant-table-tbody>tr>td {
    height: v-bind(cRowHeight);
    padding: 0;
}

.table-div /deep/ .ant-table-thead>tr>th>span,
.table-div /deep/ .ant-table-tbody>tr>td {
    padding-left: 16px;
}

.table-div>>>div {
    background-color: v-bind(cBackgroundColor);
}

/* .table-div >>> .ant-table-thead > tr > th {
  background-color: v-bind(cBackgroundColor);
} */
.table-div>>>.ant-pagination-prev>a {
    background-color: v-bind(cBackgroundColor);
}

.table-div>>>.ant-pagination-item {
    background-color: v-bind(cBackgroundColor);
}

.table-div>>>.ant-pagination-next>a {
    background-color: v-bind(cBackgroundColor);
}
</style>
