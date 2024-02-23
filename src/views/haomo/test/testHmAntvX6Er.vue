<template>
  <div>
    <HmAntvX6Er ref="X6Er" />
    <!-- <div class="addtable">
      <a-button type="primary" @click="addTest">新增表</a-button>
      <a-button type="primary" @click="addTestBatch">在指定表中新增字段</a-button>
      <a-button type="primary" @click="deltest">删除</a-button>
    </div> -->
  </div>
</template>

<script>
import HmAntvX6Er from "/@/components/built-in/jeecg/HmAntvX6Er.vue";
const addTestData = {
  id: "1",
  shape: "er-rect",
  label: "学生",
  width: 150,
  height: 24,
  ports: [
    {
      id: "1-1",
      group: "list",
      attrs: {
        portNameLabel: {
          text: "ID",
        },
        portTypeLabel: {
          text: "STRING",
        },
      },
    },
    {
      id: "1-2",
      group: "list",
      attrs: {
        portNameLabel: {
          text: "Name",
        },
        portTypeLabel: {
          text: "STRING",
        },
      },
    },
    {
      id: "1-3",
      group: "list",
      attrs: {
        portNameLabel: {
          text: "Class",
        },
        portTypeLabel: {
          text: "NUMBER",
        },
      },
    },
    {
      id: "1-4",
      group: "list",
      attrs: {
        portNameLabel: {
          text: "Gender",
        },
        portTypeLabel: {
          text: "BOOLEAN",
        },
      },
    },
  ],
}

const testTableData = 
  {
    code: '4444',
    name: 'yi',
    columns: [
      {
        code: '1-1',
        name: 'yiyi1',
        type: 'STRING'
      },{
        code: '1-2',
        name: 'yiyi2',
        type: 'STRING'
      },{
        code: '1-3',
        name: 'yiyi3',
        type: 'STRING'
      }
    ]
  }
const testTableData1 = [
  {
    code: 'student',
    name: '学生',
    columns: [
      {
        code: '1-1',
        name: 'ID',
        type: 'STRING'
      },{
        code: '1-2',
        name: 'Name',
        type: 'STRING'
      },{
        code: '1-3',
        name: 'Class',
        type: 'NUMBER'
      },{
        code: '1-4',
        name: 'Gender',
        type: 'BOOLEAN'
      }
    ]
  },{
    code: 'lesson',
    name: '课程',
    columns: [
      {
        code: '2-1',
        name: 'ID',
        type: 'STRING'
      },{
        code: '2-2',
        name: 'Name',
        type: 'STRING'
      },{
        code: '2-3',
        name: 'StudentID',
        type: 'STRING'
      },{
        code: '2-4',
        name: 'TeacherID',
        type: 'STRING'
      },{
        code: '2-5',
        name: 'Description',
        type: 'STRING'
      }
    ]
  },{
    code: 'teacher',
    name: '老师',
    columns: [
      {
        code: '3-1',
        name: 'ID',
        type: 'STRING'
      },{
        code: '3-2',
        name: 'Name',
        type: 'STRING'
      },{
        code: '3-3',
        name: 'Age',
        type: 'NUMBER'
      }
    ]
  },
]

const relationList = [
  {
    from: {
      tableCode: '1',
      column: '1-1'
    },
    to: {
      tableCode: '2',
      column: '2-3'
    }
  },{
    from: {
      tableCode: '3',
      column: '3-1'
    },
    to: {
      tableCode: '2',
      column: '2-4'
    }
  },
]

// [
//           {
//             shape: "edge",
//             source: {
//               cell: "1",
//               port: "1-1",
//             },
//             target: {
//               cell: "2",
//               port: "2-3",
//             },
//             attrs: {
//               line: {
//                 stroke: "#A2B1C3",
//                 strokeWidth: 2,
//               },
//             },
//             zIndex: 0,
//           },
//           {
//             shape: "edge",
//             source: {
//               cell: "3",
//               port: "3-1",
//             },
//             target: {
//               cell: "2",
//               port: "2-4",
//             },
//             attrs: {
//               line: {
//                 stroke: "#A2B1C3",
//                 strokeWidth: 2,
//               },
//             },
//             zIndex: 0,
//           },
//         ]

// [
//           {
//             id: "1",
//             shape: "er-rect",
//             label: "学生",
//             width: 150,
//             height: 24,
//             ports: [
//               {
//                 id: "1-1",
//                 group: "list",
//                 attrs: {
//                   portNameLabel: {
//                     text: "ID",
//                   },
//                   portTypeLabel: {
//                     text: "STRING",
//                   },
//                 },
//               },
//               {
//                 id: "1-2",
//                 group: "list",
//                 attrs: {
//                   portNameLabel: {
//                     text: "Name",
//                   },
//                   portTypeLabel: {
//                     text: "STRING",
//                   },
//                 },
//               },
//               {
//                 id: "1-3",
//                 group: "list",
//                 attrs: {
//                   portNameLabel: {
//                     text: "Class",
//                   },
//                   portTypeLabel: {
//                     text: "NUMBER",
//                   },
//                 },
//               },
//               {
//                 id: "1-4",
//                 group: "list",
//                 attrs: {
//                   portNameLabel: {
//                     text: "Gender",
//                   },
//                   portTypeLabel: {
//                     text: "BOOLEAN",
//                   },
//                 },
//               },
//             ],
//           },
//           {
//             id: "2",
//             shape: "er-rect",
//             label: "课程",
//             width: 150,
//             height: 24,
//             ports: [
//               {
//                 id: "2-1",
//                 group: "list",
//                 attrs: {
//                   portNameLabel: {
//                     text: "ID",
//                   },
//                   portTypeLabel: {
//                     text: "STRING",
//                   },
//                 },
//               },
//               {
//                 id: "2-2",
//                 group: "list",
//                 attrs: {
//                   portNameLabel: {
//                     text: "Name",
//                   },
//                   portTypeLabel: {
//                     text: "STRING",
//                   },
//                 },
//               },
//               {
//                 id: "2-3",
//                 group: "list",
//                 attrs: {
//                   portNameLabel: {
//                     text: "StudentID",
//                   },
//                   portTypeLabel: {
//                     text: "STRING",
//                   },
//                 },
//               },
//               {
//                 id: "2-4",
//                 group: "list",
//                 attrs: {
//                   portNameLabel: {
//                     text: "TeacherID",
//                   },
//                   portTypeLabel: {
//                     text: "STRING",
//                   },
//                 },
//               },
//               {
//                 id: "2-5",
//                 group: "list",
//                 attrs: {
//                   portNameLabel: {
//                     text: "Description",
//                   },
//                   portTypeLabel: {
//                     text: "STRING",
//                   },
//                 },
//               },
//             ],
//           },
//           {
//             id: "3",
//             shape: "er-rect",
//             label: "老师",
//             width: 150,
//             height: 24,
//             ports: [
//               {
//                 id: "3-1",
//                 group: "list",
//                 attrs: {
//                   portNameLabel: {
//                     text: "ID",
//                   },
//                   portTypeLabel: {
//                     text: "STRING",
//                   },
//                 },
//               },
//               {
//                 id: "3-2",
//                 group: "list",
//                 attrs: {
//                   portNameLabel: {
//                     text: "Name",
//                   },
//                   portTypeLabel: {
//                     text: "STRING",
//                   },
//                 },
//               },
//               {
//                 id: "3-3",
//                 group: "list",
//                 attrs: {
//                   portNameLabel: {
//                     text: "Age",
//                   },
//                   portTypeLabel: {
//                     text: "NUMBER",
//                   },
//                 },
//               },
//             ],
//           },
//         ]
  
const testColumns = [
    {
      code: '1-111',
      name: 'yiyi1',
      type: 'STRING'
    },{
      code: '1-222',
      name: 'yiyi2',
      type: 'STRING'
    },{
      code: '1-333',
      name: 'yiyi3',
      type: 'STRING'
    }
  ]
const testColumn = {
    code: '1-1-1-1-1',
    name: 'yiyi1',
    type: 'STRING'
  }
export default {
  components: {
    HmAntvX6Er
  },
  data() {
    return {
      addTestData,
      testTableData,
      testTableData1,
      testColumn,
      testColumns
    }
  },
  methods: {
    addTest() {
      // this.$refs.X6Er.addTable(testTableData)
      this.$refs.X6Er.batchAddTable(testTableData1)
    },
    addTestBatch() {
      // this.$refs.X6Er.addTableColumn('1',testColumn)
      this.$refs.X6Er.batchAddTableColumns('1',testColumns)
    },
    deltest() {
      this.$refs.X6Er.deleteTable('1')
    }
  }
}
</script>

<style>
.addtable {
  width: 80px;
  height: 30px;
  position: absolute;
  left: 10px;
  top: 10px;
  z-index: 999;
}
</style>