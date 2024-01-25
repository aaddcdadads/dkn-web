<template>
  <div id="container">

  </div>
  <div class="minimapDiv">
    <div id="minimapContainer"></div>
  </div>
</template>

<script>
import initGraph from './graph'
import DbTable from './node/DbTable.vue'
import '@antv/x6-vue-shape'

export default {
  name: "HmDbViewer",
  props:{
    /**
     * 高度
     * */
    height: {
      type: String,
      default: "500",
    },
    /**
     * 宽度
     * */
    width: {
      type: String,
      default: "800"
    },
    /**
     * 表格内容
     * */
    properties: {
      type: Array,
      default: function () {
        return [
          {
            id: 'table1',
            columns:[
              {
                name: 'id',
                code: 'id',
                dataType: 'varchar(32)',
                mandatory: 'Null',
                isPk: true,
                isFk: false,
              },
              {
                name: 'name',
                code: 'name',
                dataType: 'varchar(32)',
                mandatory: false,
                isPk: false,
                isFk: false,
              }
            ]
          },
          {
            id: 'table2',
            columns:[
              {
                name: 'id',
                code: 'id',
                dataType: 'varchar(32)',
                mandatory: false,
                isPk: true,
                isFk: false,
              },
              {
                name: 'name',
                code: 'name',
                dataType: 'varchar(32)',
                mandatory: false,
                isPk: false,
                isFk: false,
              }
            ]
          },
          {
            id: 'table3',
            columns:[
              {
                name: 'id',
                code: 'id',
                dataType: 'varchar(32)',
                mandatory: false,
                isPk: true,
                isFk: false,
              },
              {
                name: 'name',
                code: 'name',
                dataType: 'varchar(32)',
                mandatory: false,
                isPk: false,
                isFk: false,
              }
            ]
          },
        ]
      }
    },
    /**
     * 表格实体数据
     * */
    entityData: {
      type: Array,
      default: function () {
        return [
          {
            id: 'table1',
            name: 'Customer',
            code: 'customer',
            x: 100,
            y: 100,
            width: 214,
            height: 248,
            sidebarColor:''
          },
          {
            id: 'table2',
            name: 'Customer',
            code: 'customer',
            x: 100,
            y: 100,
            width: 214,
            height: 248,
            sidebarColor:''
          },
          {
            id: 'table3',
            name: 'Customer',
            code: 'customer',
            x: 100,
            y: 100,
            width: 214,
            height: 248,
            sidebarColor:''
          }
        ]
      }
    },
    /**
     * 表格关系线
     * */
    relationData: {
      type: Array,
      default: function () {
        return [
          {
            relationId: 'relation1',
            sourceEntityId: 'table1',
            targetEntityId: 'table3',
          },
          {
            relationId: 'relation2',
            sourceEntityId: 'table2',
            targetEntityId: 'table3',
          }
        ]
      }
    }
  },
  watch:{
    height(newVal) {
      this.cHeight = this.$getCssUnit(newVal)
    },
    width(newVal) {
      this.cWidth = this.$getCssUnit(newVal)
    }
  },
  data() {
    return {
      cHeight: 0,
      cWidth: 0,
      minimapWidth: 0,

    }
  },
  mounted() {
    if (isNaN(Number(this.height))) {
      this.cHeight = Number(this.height.slice(0, -2))
    } else {
      this.cHeight = Number(this.height)
    }
    if (isNaN(Number(this.width))) {
      this.cWidth = Number(this.width.slice(0, -2))
    } else {
      this.cWidth = Number(this.width)
    }
    let graph = initGraph('container', this.cWidth, this.cHeight);
    this.minimapWidth = this.$getCssUnit(this.width)

    const columns = this.turnSourceData(this.properties[0].columns)



    graph.addNode({
      shape: 'vue-shape',
      width: 297,
      height: 159,
      x: 100,
      y: 100,
      attrs: {
        body: {
          width: 297,
          height: 159,
          fill: "#F5F5F5",
          border: "1px solid #979797",
          stroke: '#979797',
        }
      },
      component: {
        template: `<db-table
            code="weaa"
            name="Wee"
            :sourceData="columns"
          ></db-table>`,
        data(){
          return {
            columns:columns
          }
        },
        components: {DbTable}
      }
    })

  },
  methods: {
    //转化columns
    turnSourceData(columns){
      let cSourceData = [];
      columns.forEach((data,index) => {
        let tmp = {};
        tmp.key = index
        tmp.code = data.code;
        tmp.dataType = data.dataType;
        if (data.mandatory) {
          tmp.mandatory = '/'
        } else {
          tmp.mandatory = 'Null'
        }
        if (data.isPk && data.isFk) {
          tmp.pk = 'PK/FK'
        } else if (data.isPk && !data.isFk) {
          tmp.pk = 'PK'
        } else if (!data.isPk && data.isFk) {
          tmp.pk = 'FK'
        } else if (!data.isPk && !data.isFk) {
          tmp.pk = '/'
        }
        cSourceData.push(tmp)
      })
      return cSourceData
    }
  }
}
</script>

<style scoped>
#container {
  border-left: 1px solid #D1D1D1;
  border-right: 1px solid #D1D1D1;
  border-top: 1px solid #D1D1D1;
}

.minimapDiv {
  width: v-bind(minimapWidth);
  border-bottom:1px solid #D1D1D1;
  border-left: 1px solid #D1D1D1;
  border-right: 1px solid #D1D1D1;
  display: flex;
  justify-content: flex-end;
}

</style>
