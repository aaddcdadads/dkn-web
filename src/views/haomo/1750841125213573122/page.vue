<template>
  <div class="page card">
    <div class="page-wrapper">
        <div class="ele-wrapper ele-wrapper-crudPageCard">
      <hm-bg-card ref="crudPageCard" width="100%" height="" border-radius="" padding="" box-shadow-color="#00000000" class="ele-crudPageCard"> 
            <div class="ele-wrapper ele-wrapper-crudPagePanel">
      <hm-panel ref="crudPagePanel" :height="crudPagePanel.height" :title="crudPagePanel.title" :padding="crudPagePanel.padding" :title-block-color="crudPagePanel.titleBlockColor" class="ele-crudPagePanel"> 
            <div class="ele-wrapper ele-wrapper-viewRegistrationOrdersFilter">
      <hm-ant-formily ref="viewRegistrationOrdersFilter" :config="viewRegistrationOrdersFilter.config" v-model:value="viewRegistrationOrdersFilter.value" :col-num="3" :col-min-width="380" :schema="viewRegistrationOrdersFilter.schema" :label-col="7" :wrapper-col="14" class="ele-viewRegistrationOrdersFilter"> 
       
    </hm-ant-formily>
    </div> 
            <div class="ele-wrapper ele-wrapper-addButton">
      <hm-ant-button ref="addButton" text="添加" :type="'primary'" icon="fa fa-plus" :visible="false" @click="onAddButtonClick" class="ele-addButton"> 
       
    </hm-ant-button>
    </div> 
            <div class="ele-wrapper ele-wrapper-importButton">
      <hm-ant-upload ref="importButton" title="" text="导入" :button-type="'primary'" v-model:file-list="importButton.fileList" action="/api/restify/viewRegistrationOrders/importExcel" :headers="importButton.headers" :visible="importButton.visible" class="ele-importButton"> 
       
    </hm-ant-upload>
    </div> 
            <div class="ele-wrapper ele-wrapper-downloadTemplateButton">
      <hm-ant-button ref="downloadTemplateButton" text="下载模板" :type="'primary'" icon="fa fa-download" :visible="false" @click="onDownloadTemplateButtonClick" class="ele-downloadTemplateButton"> 
       
    </hm-ant-button>
    </div> 
            <div class="ele-wrapper ele-wrapper-exportButton">
      <hm-ant-button ref="exportButton" :text="exportButton.text" :type="exportButton.type" :visible="exportButton.visible" @click="onExportButtonClick" class="ele-exportButton"> 
       
    </hm-ant-button>
    </div> 
            <div class="ele-wrapper ele-wrapper-26c123e0-0165-4f7e-b933-872da959c7a3">
      <hm-ant-button text="批量退款" :type="'primary'" class="ele-26c123e0-0165-4f7e-b933-872da959c7a3"> 
       
    </hm-ant-button>
    </div> 
            <div class="ele-wrapper ele-wrapper-aa116123-614b-40e3-8592-157582614f2d">
      <hm-ant-button text="导出" :type="'primary'" icon="fa fa-download" :visible="false" class="ele-aa116123-614b-40e3-8592-157582614f2d"> 
       
    </hm-ant-button>
    </div> 
            <div class="ele-wrapper ele-wrapper-invisibleImportSearchLogicBtn">
      <hm-ant-button ref="invisibleImportSearchLogicBtn" @click="onInvisibleImportSearchLogicBtnClick" class="ele-invisibleImportSearchLogicBtn"> 
       
    </hm-ant-button>
    </div> 
            <div class="ele-wrapper ele-wrapper-viewRegistrationOrdersTable">
      <hm-ant-table ref="viewRegistrationOrdersTable" :columns="viewRegistrationOrdersTable.columns" :data="viewRegistrationOrdersTable.data" :pagination="viewRegistrationOrdersTable.pagination" :url="viewRegistrationOrdersTable.url" :params="viewRegistrationOrdersTable.params" :get-data-map="viewRegistrationOrdersTable.getDataMap" :row-select-flag="viewRegistrationOrdersTable.rowSelectFlag" :actions="viewRegistrationOrdersTable.actions" :is-flat-action="viewRegistrationOrdersTable.isFlatAction" :background-color="viewRegistrationOrdersTable.backgroundColor" :row-class-name="viewRegistrationOrdersTable.rowClassName" class="ele-viewRegistrationOrdersTable"> 
       
    </hm-ant-table>
    </div> 
    </hm-panel>
    </div> 
            <div class="ele-wrapper ele-wrapper-viewRegistrationOrdersAddModal">
      <hm-modal ref="viewRegistrationOrdersAddModal" title="新增" v-model:visible="viewRegistrationOrdersAddModal.visible" width="810px" :z-index="1000" height="100%" :auto-close="false" @ok="onViewRegistrationOrdersAddModalOk" @cancel="onViewRegistrationOrdersAddModalCancel"> 
            <div class="ele-wrapper ele-wrapper-addUserModalCard">
      <hm-bg-card ref="addUserModalCard" width="100%" height="" border-radius="" padding="" box-shadow-color="#00000000" class="ele-addUserModalCard"> 
            <div class="ele-wrapper ele-wrapper-viewRegistrationOrdersAddForm">
      <hm-ant-formily ref="viewRegistrationOrdersAddForm" :config="viewRegistrationOrdersAddForm.config" v-model:value="viewRegistrationOrdersAddForm.value" :col-num="2" :schema="viewRegistrationOrdersAddForm.schema" :label-col="7" :wrapper-col="14" class="ele-viewRegistrationOrdersAddForm"> 
       
    </hm-ant-formily>
    </div> 
    </hm-bg-card>
    </div> 
    </hm-modal>
    </div> 
            <div class="ele-wrapper ele-wrapper-viewRegistrationOrdersEditModal">
      <hm-modal ref="viewRegistrationOrdersEditModal" title="编辑" v-model:visible="viewRegistrationOrdersEditModal.visible" width="810px" :z-index="1000" height="100%" :auto-close="false" @ok="onViewRegistrationOrdersEditModalOk" @cancel="onViewRegistrationOrdersEditModalCancel"> 
            <div class="ele-wrapper ele-wrapper-newUserModalCard">
      <hm-bg-card ref="newUserModalCard" width="100%" height="" border-radius="" padding="0" box-shadow-color="#00000000" class="ele-newUserModalCard"> 
            <div class="ele-wrapper ele-wrapper-viewRegistrationOrdersEditForm">
      <hm-ant-formily ref="viewRegistrationOrdersEditForm" :config="viewRegistrationOrdersEditForm.config" v-model:value="viewRegistrationOrdersEditForm.value" :col-num="2" :schema="viewRegistrationOrdersEditForm.schema" :label-col="7" :wrapper-col="14" class="ele-viewRegistrationOrdersEditForm"> 
       
    </hm-ant-formily>
    </div> 
    </hm-bg-card>
    </div> 
    </hm-modal>
    </div> 
            <div class="ele-wrapper ele-wrapper-viewRegistrationOrdersDetailModal">
      <hm-modal ref="viewRegistrationOrdersDetailModal" title="查看详情" v-model:visible="viewRegistrationOrdersDetailModal.visible" :ok-button-boole="false" cancel-text="关闭" width="810px" :z-index="1000" height="100%"> 
            <div class="ele-wrapper ele-wrapper-detailsUserModalCard">
      <hm-bg-card ref="detailsUserModalCard" width="100%" height="" border-radius="" padding="" box-shadow-color="#00000000" class="ele-detailsUserModalCard"> 
            <div class="ele-wrapper ele-wrapper-viewRegistrationOrdersDetailForm">
      <hm-ant-formily ref="viewRegistrationOrdersDetailForm" :config="viewRegistrationOrdersDetailForm.config" v-model:value="viewRegistrationOrdersDetailForm.value" :col-num="2" :schema="viewRegistrationOrdersDetailForm.schema" :label-col="7" :wrapper-col="14" class="ele-viewRegistrationOrdersDetailForm"> 
       
    </hm-ant-formily>
    </div> 
    </hm-bg-card>
    </div> 
    </hm-modal>
    </div> 
            <div class="ele-wrapper ele-wrapper-viewRegistrationOrdersDeleteModal">
      <hm-modal ref="viewRegistrationOrdersDeleteModal" title="删除" v-model:visible="viewRegistrationOrdersDeleteModal.visible" :closable="true" ok-text="删除" :ok-type="'danger'" width="320px" :z-index="1000" height="80px" @ok="onViewRegistrationOrdersDeleteModalOk"> 
            <div class="ele-wrapper ele-wrapper-deleteUserInputCard">
      <hm-bg-card ref="deleteUserInputCard" width="100%" height="" border-radius="" padding="" box-shadow-color="#00000000" class="ele-deleteUserInputCard"> 
            <div class="ele-wrapper ele-wrapper-deleteUserInputText">
      <hm-ant-icon-text ref="deleteUserInputText" text="是否要删除?" icon="" width="200px" icon-size="0px" color="#CF2323" color-text="#1F1E1E" :text-align="'left'" padding="0" icon-padding="0" class="ele-deleteUserInputText"> 
       
    </hm-ant-icon-text>
    </div> 
    </hm-bg-card>
    </div> 
    </hm-modal>
    </div> 
    </hm-bg-card>
    </div>
    </div>
  </div>
</template>

<script>
import { h } from 'vue';
import HmBgCard from "/@/components/built-in/layout/HmBgCard.vue";
import HmPanel from "/@/components/built-in/layout/HmPanel.vue";
import HmAntFormily from "/@/components/built-in/jeecg/HmAntFormily.vue";
import HmAntButton from "/@/components/built-in/jeecg/HmAntButton.vue";
import HmAntUpload from "/@/components/built-in/jeecg/HmAntUpload.vue";
import HmAntTable from "/@/components/built-in/jeecg/HmAntTable.vue";
import HmModal from "/@/components/built-in/layout/HmModal.vue";
import HmAntIconText from "/@/components/built-in/jeecg/HmAntIconText.vue";

import {
  downloadTemplate,
  exportViewRegistrationOrders,
  searchViewRegistrationOrders,
  addViewRegistrationOrders,
  editViewRegistrationOrders,
  deleteViewRegistrationOrders
} from '/@/logics/OrderListGroup';

export default {
  name: "OrderList",
  components: {
    HmBgCard,
    HmPanel,
    HmAntFormily,
    HmAntButton,
    HmAntUpload,
    HmAntTable,
    HmModal,
    HmAntIconText,
  },
  data() {
    let self = this;
    return {
  "crudPagePanel": {
    "height": "",
    "title": "",
    "padding": "0",
    "titleBlockColor": "#1890FF00"
  },
  "viewRegistrationOrdersDetailModal": {
    "visible": false
  },
  "viewRegistrationOrdersDetailForm": {
    "config": {
      "code": {
        "type": "Span",
        "title": "编码",
        "style": {
          "width": "50%"
        },
        "props": {},
        "validator": function(value) {},
        "required": false,
        "disabled": false
      },
      "activityId": {
        "type": "Span",
        "title": "报名活动",
        "style": {
          "width": "50%"
        },
        "props": {},
        "validator": function(value) {}
      }
    },
    "value": {
      "span": "文字内容"
    },
    "schema": {}
  },
  "viewRegistrationOrdersAddModal": {
    "visible": false
  },
  "viewRegistrationOrdersEditModal": {
    "visible": false
  },
  "importButton": {
    "visible": false,
    "headers": null,
    "fileList": []
  },
  "exportButton": {
    "visible": true,
    "text": "导出数据",
    "type": "primary",
    "icon": ""
  },
  "viewRegistrationOrdersAddForm": {
    "config": {
      "code": {
        "type": "Input",
        "title": "编码",
        "style": {
          "width": "50%"
        },
        "props": {},
        "validator": function(value) {},
        "required": false,
        "disabled": false
      },
      "activityId": {
        "type": "Input",
        "title": "报名活动",
        "style": {
          "width": "50%"
        },
        "props": {},
        "validator": function(value) {}
      }
    },
    "value": {
      "span": "文字内容"
    },
    "schema": {}
  },
  "viewRegistrationOrdersEditForm": {
    "config": {
      "code": {
        "type": "Input",
        "title": "编码",
        "style": {
          "width": "50%"
        },
        "props": {},
        "validator": function(value) {},
        "required": false,
        "disabled": false
      },
      "activityId": {
        "type": "Input",
        "title": "报名活动",
        "style": {
          "width": "50%"
        },
        "props": {},
        "validator": function(value) {}
      }
    },
    "value": {
      "span": "文字内容"
    },
    "schema": {}
  },
  "viewRegistrationOrdersDeleteModal": {
    "visible": false
  },
  "viewRegistrationOrdersFilter": {
    "config": {
      "userId": {
        "type": "Input",
        "title": "用户id",
        "style": {
          "width": "50%"
        },
        "props": {},
        "validator": function(value) {}
      },
      "channel": {
        "type": "HmAntSelect",
        "title": "渠道",
        "style": {
          "width": "50%"
        },
        "props": {
          "title": ""
        },
        "validator": function(value) {}
      },
      "paymentStatus": {
        "type": "Input",
        "title": "支付状态",
        "style": {
          "width": "50%"
        },
        "props": {},
        "validator": function(value) {}
      },
      "pickUpStatus": {
        "title": "核销状态",
        "style": {
          "width": "50%"
        },
        "props": {},
        "validator": function(value) {}
      },
      "pickUpStatus2": {
        "title": "原核销门店",
        "style": {
          "width": "50%"
        },
        "props": {},
        "validator": function(value) {}
      },
      "pickUpStatus3": {
        "title": "实际核销门店",
        "style": {
          "width": "50%"
        },
        "props": {},
        "validator": function(value) {}
      },
      "search": {
        "type": "HmAntButton",
        "title": "",
        "style": {
          "width": "80px",
          "marginLeft": "10px"
        },
        "props": {
          "text": "查询",
          "type": "primary",
          "icon": "fa fa-search"
        },
        "events": {
          "@click": function(e) {searchViewRegistrationOrders(self, null);}
        },
        "validator": function(value) {}
      },
      "reset": {
        "type": "HmAntButton",
        "title": "",
        "style": {
          "width": "80px",
          "marginLeft": "20px"
        },
        "props": {
          "text": "重置",
          "icon": "fa fa-refresh"
        },
        "events": {
          "@click": function(e) {self.$refs.viewRegistrationOrdersFilter.reset();searchViewRegistrationOrders(self, null);}
        },
        "validator": function(value) {}
      }
    },
    "value": {
      "span": "文字内容"
    },
    "schema": {}
  },
  "viewRegistrationOrdersTable": {
    "columns": [
      {
        "title": "订单编号",
        "dataIndex": "id",
        "key": "id"
      },
      {
        "title": "电话",
        "dataIndex": "phone",
        "key": "phone"
      },
      {
        "title": "报名项目",
        "dataIndex": "activityId",
        "key": "activityId"
      },
      {
        "title": "报名渠道",
        "dataIndex": "channel",
        "key": "channel"
      },
      {
        "title": "支付状态",
        "dataIndex": "paymentStatus",
        "key": "paymentStatus"
      },
      {
        "title": "创建时间",
        "dataIndex": "createTime",
        "key": "createTime"
      },
      {
        "title": "核销状态",
        "dataIndex": "pickUpStatusText",
        "key": "pickUpStatusText"
      },
      {
        "title": "核销时间",
        "dataIndex": "pickUpTime",
        "key": "pickUpTime"
      },
      {
        "title": "原核销门店",
        "dataIndex": "originalPickUpName",
        "key": "originalPickUpName"
      },
      {
        "title": "实际核销门店",
        "dataIndex": "nowPickUpName",
        "key": "nowPickUpName"
      },
      {
        "slots": {
          "customRender": "action"
        },
        "width": "260",
        "title": "操作",
        "key": "action"
      }
    ],
    "data": [
      {}
    ],
    "pagination": {
      "current": 1,
      "pageSizeOptions": [
        "10",
        "20",
        "30",
        "40"
      ],
      "pageSize": 10,
      "showSizeChanger": true
    },
    "url": "/api/dkn/viewRegistrationOrders/list",
    "params": {
      "databaseId": "",
      "column": "createTime",
      "order": "desc"
    },
    "getDataMap": {
      "total": "",
      "list": ""
    },
    "rowSelectFlag": true,
    "actions": [
      {
        "name": "退款",
        "callback": function (item) {
      self.viewRegistrationOrdersDetailModal.visible=true;
      self.$nextTick(function() {
        self.viewRegistrationOrdersDetailForm.value = item;
      });
    },
        "type": "link"
      }
    ],
    "isFlatAction": true,
    "backgroundColor": "#FFFFFF",
    "rowClassName": {}
  }
};
  },
  watch: {
  },
    mounted(e) {
      this.onMounted(e);
    },
  methods:{
    onMounted() {
  console.log("this.importButton.visible")
  console.log("this.exportButton.visible")
  console.log("this.crudPagePanel.title")
  console.log("this.viewRegistrationOrdersAddForm.config")
  console.log("this.viewRegistrationOrdersEditForm.config")
  console.log("this.viewRegistrationOrdersDetailForm.config")

  //设置上传请求头
  this.$nextTick(() => {
    let token = localStorage.getItem('pro__Access-Token')
    if (token) {
      this.importButton.headers = {
        'X-Access-Token': token
      }
    }
  })
},

    onAddButtonClick () {
    this.viewRegistrationOrdersAddModal.visible = true;
},
    onDownloadTemplateButtonClick() {
        downloadTemplate(this, arguments);
      },
    onExportButtonClick() {
        exportViewRegistrationOrders(this, arguments);
      },
    onInvisibleImportSearchLogicBtnClick() {
        searchViewRegistrationOrders(this, arguments);
      },
    onViewRegistrationOrdersAddModalOk() {
        addViewRegistrationOrders(this, arguments);
      },
    onViewRegistrationOrdersAddModalCancel (){
	this.viewRegistrationOrdersAddModal.visible = false;
},
    onViewRegistrationOrdersEditModalOk() {
        editViewRegistrationOrders(this, arguments);
      },
    onViewRegistrationOrdersEditModalCancel (){
	this.viewRegistrationOrdersEditModal.visible = false;
},
    onViewRegistrationOrdersDeleteModalOk() {
        deleteViewRegistrationOrders(this, arguments);
      }
  }
};
</script>

<style lang="less" scoped>
.page {
  
}

.ele-wrapper-crudPageCard {
  width:100%;
}

.ele-wrapper-crudPagePanel {
  width:100%;
/deep/ .panel_title_icon {
	display: none;
}
}

.ele-wrapper-viewRegistrationOrdersFilter {
  width:98%;
margin:1%;
margin-bottom: 0;
}

.ele-wrapper-addButton {
  margin:0 3% 0 1%;
}

.ele-wrapper-importButton {
  margin:0 3% 0 1%;
transform: translateY(-1px);
/deep/ .upload-class {
	min-width: 0;
}
}

.ele-wrapper-downloadTemplateButton {
  margin:0 3% 0 1%;
}

.ele-wrapper-exportButton {
  margin:0 0 0 1%;
}

.ele-wrapper-26c123e0-0165-4f7e-b933-872da959c7a3 {
  margin:0 0 0 1%;
}

.ele-wrapper-aa116123-614b-40e3-8592-157582614f2d {
  margin:0 0 0 1%;
}

.ele-wrapper-invisibleImportSearchLogicBtn {
  display: none;
}

.ele-wrapper-viewRegistrationOrdersTable {
  .table-div /deep/ .ant-table-thead > tr > th {
background:#FAFAFA;
}
width:98%;
margin-left:1%;
}

.ele-wrapper-addUserModalCard {
  width:100%;
}

.ele-wrapper-viewRegistrationOrdersAddForm {
  width:100%;
}

.ele-wrapper-newUserModalCard {
  width:100%;
}

.ele-wrapper-viewRegistrationOrdersEditForm {
  width:100%;
}

.ele-wrapper-detailsUserModalCard {
  width:100%;
}

.ele-wrapper-viewRegistrationOrdersDetailForm {
  width:100%;
}

.ele-wrapper-deleteUserInputCard {
  width:100%;
}

.ele-wrapper-deleteUserInputText {
  width:60%;
}

</style>
