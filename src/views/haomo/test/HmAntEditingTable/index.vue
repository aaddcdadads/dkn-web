<template>
  <HmAntEditingTable :columns="columns" :data="data" :actions="actions"
                     :isFlatAction="isFlatAction"/>
</template>

<script>
import HmAntEditingTable from "/@/components/built-in/jeecg/HmAntEditingTable.vue";

export default {
  name: "Test",
  components: {HmAntEditingTable},
  data() {
    return {
      columns: [
        {
          title: "地址",
          dataIndex: "address",
          key: "address",
          editWidget: {type: 'Input'},
          ellipsis: true,
          slots: {
            customRender: "address"
          }
        },
        {
          title: "性别",
          dataIndex: "sexual",
          key: "sexual",
          editWidget: {
            type: 'Select',
            options: [
              {
                value: '男',
                label: '男',
              },
              {
                value: '女',
                label: '女',
              }
            ],
          },
          slots: {
            customRender: "sexual"
          }
        },
        {
          title: "毕业院校",
          dataIndex: "school",
          key: "school",
          ellipsis: true,
        },
        {
          title: "入学时间",
          dataIndex: "startTime",
          key: "startTime",
          editWidget: {type: 'DateTimePicker'},
          ellipsis: true,
          slots: {
            customRender: "startTime"
          }
        },
        {
          title: "毕业时间",
          dataIndex: "schoolTime",
          key: "schoolTime",
          editWidget: {type: 'DatePicker'},
          ellipsis: true,
          slots: {
            customRender: "schoolTime"
          }
        },
        {
          title: "操作",
          dataIndex: "actions",
          key: "actions",
          slots: {
            customRender: "actions",
          },
        },
      ],
      data: [
        {
          editable: ['sexual'],
          key: "1",
          address: "New York No. 1 Lake Park, New York No. 1 Lake Park",
          sexual: "男",
          school: "加里敦大学",
          schoolTime: "2016-10-03",
          startTime: "2016-10-03",
        },
        {
          editable: true,
          key: "2",
          address: "London No. 2 Lake Park, London No. 2 Lake Park",
          sexual: "男",
          school: "加里敦大学",
          schoolTime: "2016-10-03",
          startTime: "2016-10-03",
        },
        {
          key: "3",
          address: "Sidney No. 1 Lake Park, Sidney No. 1 Lake Park",
          sexual: "男",
          school: "加里敦大学",
          schoolTime: "2016-10-03",
          startTime: "2016-10-03",
        },
      ],
      isFlatAction: true,
      actions: [
        {
          name: '查看详情',
          type: 'link',
          callback: function (record, index) {
            console.log('+++', record, index)
          }
        },
        {
          name: '编辑',
          widget: 'edit',
          type: 'link',
          callback: function (record, index) {
            console.log('+++', record, index)
          }
        },
        {
          name: '删除',
          widget: 'delete',
          type: 'link',
          callback: function (record, index) {
            console.log('+++', record, index)
          }
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
