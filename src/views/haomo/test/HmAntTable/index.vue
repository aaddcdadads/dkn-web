<template>
	<div id="hm-ant-table-test">
		<hm-ant-table :show-column-no="true" @click-row="clickRowHandler"></hm-ant-table>
    <hm-ant-table isFlatAction :columns="columns" :actions="actions"></hm-ant-table>
		<hm-ant-table :columns="columns" 
      :data="data" 
      :opacity="0.4"
      :row-class-name="rowClassName"
      :pagination="{}"></hm-ant-table>

    <!-- <hm-ant-table :columns="columns" :data="dataCombineC1" :combined="['r1c1:r4c1']"></hm-ant-table>
    <hm-ant-table :columns="columns" :data="dataCombineR1" :combined="['r1']"></hm-ant-table>
    <hm-ant-table :columns="columns" :data="dataCombineC1C2" :combined="['c1', 'c2']"></hm-ant-table>
    <hm-ant-table :columns="columns" :data="dataCombineR2R3" :combined="['r2r3']"></hm-ant-table>

    <hm-ant-table :columns="columns" :data="dataLarge"></hm-ant-table> -->
	</div>
</template>

<script>
import _ from 'lodash';
import HmAntTable from '/@/components/built-in/jeecg/HmAntTable.vue'
import moment from 'moment'

export default {
  components: {
    HmAntTable
  },
  data() {
    let dataLarge = [];
    for(let i=0; i < 100; i++) {
      dataLarge.push({ key: `${i+1}`, c1: `r${i+1}c1`, c2: `r${i+1}c2`, c3: `r${i+1}c3`, c4: `r${i+1}c4`})
    }
    return {
      rowClassName: {
        class: function(record, index) {
          console.log(`record, index`)
          if (index % 2) {
            return 'red-row';
          } else {
            return 'blue-row';
          }
        }
      },
      defaultPickerValue:moment().format(),
      actions: [
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
      ],
      columns: [
        {
          title: "c1",
          dataIndex: "c1",
          key: "c1",
          defaultSortOrder: 'descend',
          sorter: (a, b) => a.c1.length - b.c1.length,
          sortDirections: ['descend', 'ascend'],
          slots: {
            filterDropdown: 'filterDropdownInput' // input | dropdown | dateRange | timeRange | dateTimeRange
          },
        },
        {
          title: "c2",
          dataIndex: "c2",
          key: "c2",
          filterOptions: [{
            label: '选项1',
            value: 1
          }, {
            label: '选项2',
            value: 2
          }],
          slots: {
            filterDropdown: 'filterDropdownSelect' // input | dropdown | dateRange | timeRange | dateTimeRange
          },
        },
        {
          title: "c3",
          dataIndex: "c3",
          key: "c3",
          filterSearchUrl: '/query?name=',
          filterSearchResultMap: {
            label: 'label',
            value: 'value'
          },
          slots: {
            filterDropdown: 'filterDropdownAutoComplete' // input | dropdown | dateRange | timeRange | dateTimeRange
          },
        },
        {
          title: "c4",
          dataIndex: "c4",
          key: "c4",
          slots: {
            filterDropdown: 'filterDropdownDateTime' // input | dropdown | dateRange | timeRange | dateTimeRange
          },
        },
        {
          "slots": {
            "customRender": "action",
          },
          customHeaderCell: function(){
            return {
              style: {minWidth: "260px"}
            }; 
          },
          "title": "操作",
          "key": "action"
        }
      ],

      columnsC1: [
        { title: "c1", dataIndex: "c1", key: "c1", customRender: ({ text, index }) => {
          const obj = {
            children: text,
            props: {},
          };

          if (index === 0) {
            obj.props.rowSpan = 4;
          } else {
            obj.props.rowSpan = 0;
          }
          return obj;
        } },
        { title: "c2", dataIndex: "c2", key: "c2" },
        { title: "c3", dataIndex: "c3", key: "c3" },
        { title: "c4", dataIndex: "c4", key: "c4" }
      ],

      combineColumns: [
        { title: "c1", dataIndex: "c1", key: "c1" },
        { title: "c2", children: [
          { title: "c21", children: [
            { title: "c211", dataIndex: "c211", key: "c211" },
            { title: "c212", dataIndex: "c212", key: "c212" }
          ] },
          { title: "c22", dataIndex: "c22", key: "c22" }
        ] },
        { title: "c3", dataIndex: "c3", key: "c3" },
        { title: "c4", dataIndex: "c4", key: "c4" }
      ],

      data: [
        { key: "1", c1: "r1c1", c2: "r1c2", c3: "r1c3", c4: "r1c4"},
        { key: "2", c1: "r2c1", c2: "r2c2", c3: "r2c3", c4: "r2c4"},
        { key: "3", c1: "r3c1", c2: "r3c2", c3: "r3c3", c4: "r3c4"},
        { key: "4", c1: "r4c1", c2: "r4c2", c3: "r4c3", c4: "r4c4"},
      ],

      dataCombineC1: [
        { key: "1", c1: "c1", c2: "r1c2", c3: "r1c3", c4: "r1c4"},
        { key: "2", c1: "c1", c2: "r2c2", c3: "r2c3", c4: "r2c4"},
        { key: "3", c1: "c1", c2: "r3c2", c3: "r3c3", c4: "r3c4"},
        { key: "4", c1: "r4c1", c2: "r4c2", c3: "r4c3", c4: "r4c4"},
      ],

      dataCombineR1: [
        { key: "1", c1: "r1", c2: "r1", c3: "r1", c4: "r1"},
        { key: "2", c1: "r2c1", c2: "r2c2", c3: "r2c3", c4: "r2c4"},
        { key: "3", c1: "r3c1", c2: "r3c2", c3: "r3c3", c4: "r3c4"},
        { key: "4", c1: "r4c1", c2: "r4c2", c3: "r4c3", c4: "r4c4"},
      ],

      dataCombineC1C2: [
        { key: "1", c1: "c1c2", c2: "c1c2", c3: "r1c3", c4: "r1c4"},
        { key: "2", c1: "c1c2", c2: "c1c2", c3: "r2c3", c4: "r2c4"},
        { key: "3", c1: "c1c2", c2: "c1c2", c3: "r3c3", c4: "r3c4"},
        { key: "4", c1: "c1c2", c2: "r4c2", c3: "r4c3", c4: "r4c4"},
      ],

      dataCombineR2R3: [
        { key: "1", c1: "r1c1", c2: "r1c2", c3: "r1c3", c4: "r1c4"},
        { key: "2", c1: "r2r3", c2: "r2r3", c3: "r2r3", c4: "r2r3"},
        { key: "3", c1: "r2r3", c2: "r2r3", c3: "r2r3", c4: "r2r3"},
        { key: "4", c1: "r4c1", c2: "r4c2", c3: "r4c3", c4: "r4c4"},
      ],

      dataLarge: dataLarge
    }
  },
  methods: {
    clickRowHandler(data) {
      console.log(`onClickRow data: `, data);
    }
  }
}
</script>

<style scoped>
#hm-ant-table-test /deep/ .red-row {
  background-color: red;
}

#hm-ant-table-test /deep/ .blue-row {
  background-color: blue;
}
</style>
