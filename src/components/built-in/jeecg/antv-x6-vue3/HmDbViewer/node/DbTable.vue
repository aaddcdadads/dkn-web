<template>
  <div id="table-name">
    <span >{{name}}({{code}})</span>
  </div>
  <div id="color-toolbar"></div>
  <div id="table-container">
    <div id="table-header">
      <span>orderName</span>
      <span>dataType</span>
      <span>NULL</span>
      <span>PK/FK</span>
    </div>

    <div v-for="column in sourceData" class="table-content">
      <div class="column-code">
        <span>{{column.code}}</span>
      </div>
      <div class="column-dataType">
        <span>{{column.dataType}}</span>
      </div>
      <div class="column-mandatory">
        <span>{{column.mandatory}}</span>
      </div>
      <div class="column-pk">
        <span>{{column.pk}}</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "DbTable",
  components: {
  },
  props: {
    /**
     * 表格名字
     * */
    name: {
      type: String,
      default: 'table1'
    },
    /**
     * 表格code
     * */
    code: {
      type: String,
      default: 'table1'
    },
    /**
     * 边栏颜色
     * */
    sidebarColor: {
      type: String,
      default: 'blue'
    },
    /**
     * 表格数据
     * */
    sourceData: {
      type: Array,
      default: function () {
        return [
          {
            key: 0,
            code: 'id',
            dataType: 'varchar(32)',
            mandatory: "Null",
            pk:'PK'
          },
          {
            key: 1,
            code: 'name',
            dataType: 'varchar(32)',
            mandatory: false,
            pk:''
          }
        ]
      }
    }
  },
  watch: {
    sourceData: {
      handler(newVal) {
        this.cSourceData = newVal
      },
      deep: true
    }
  },
  data() {
    return {
      columns:[
        {title:'orderName',dataIndex:'code'},
        {title:'dataType', dataIndex:'dataType'},
        {title:'', dataIndex: 'mandatory'},
        {title:'PK/FK', dataIndex: 'pk'}
      ],
      cSourceData: []
    }
  },
  mounted() {
    // this.cSourceData = this.sourceData
    this.cSourceData = [
      {
        code:'123',
        dataType: "sss",
        mandatory: 'null',
        pk:"fp"
      }
    ]

  },
}
</script>

<style scoped>

#color-toolbar {
  border-left: 5px red solid;
  position: absolute;
  height: 161px;
  margin-left: -3px;
  margin-top: -1px;
}

#table-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

#table-name {
  position: absolute;
  margin-top: -19px;
  font-family: PingFangSC-Medium;
  font-size: 14px;
  color: #262626;
}

#table-header {
  font-family: PingFangSC-Medium;
  font-size: 12px;
  line-height: 17px;
  color:#262626;
  /*font-kerning: none;*/
  display: flex;
  justify-content: space-evenly;
  height: 29px;
  width: 282px;
  align-items: center;
  border-bottom: 1px solid #979797;
}

.table-content {
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #262626;
  /*font-kerning: none;*/
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 29px;
  width: 282px;
  line-height: 17px;
}

.column-code {
  width: 50px;
  margin-left: 20px;
}

.column-dataType {
  width: 70px;
  margin-left: 30px;
}

.column-mandatory {
  width: 40px;
  margin-left: 15px;
}

.column-pk {
  width: 30px;
  margin-left: 15px;
}

</style>
