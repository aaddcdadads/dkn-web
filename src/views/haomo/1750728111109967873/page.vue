<template>
  <div class="page card">
    <div class="page-wrapper">
        <div class="ele-wrapper ele-wrapper-crudPageCard">
      <hm-bg-card ref="crudPageCard" padding="" box-shadow-color="#00000000" border-radius="" width="100%" height="" class="ele-crudPageCard"> 
            <div class="ele-wrapper ele-wrapper-crudPagePanel">
      <hm-panel ref="crudPagePanel" :padding="crudPagePanel.padding" :title-block-color="crudPagePanel.titleBlockColor" :title="crudPagePanel.title" :height="crudPagePanel.height" class="ele-crudPagePanel"> 
            <div class="ele-wrapper ele-wrapper-registrationOrdersFilter">
      <hm-ant-formily ref="registrationOrdersFilter" :config="registrationOrdersFilter.config" v-model:value="registrationOrdersFilter.value" :col-num="3" :col-min-width="380" :schema="registrationOrdersFilter.schema" :label-col="7" :wrapper-col="14" class="ele-registrationOrdersFilter"> 
       
    </hm-ant-formily>
    </div> 
            <div class="ele-wrapper ele-wrapper-addButton">
      <hm-ant-button ref="addButton" :visible="false" icon="fa fa-plus" text="新增" :type="'primary'" @click="onAddButtonClick" class="ele-addButton"> 
       
    </hm-ant-button>
    </div> 
            <div class="ele-wrapper ele-wrapper-importButton">
      <hm-ant-upload ref="importButton" :headers="importButton.headers" :visible="importButton.visible" v-model:file-list="importButton.fileList" title="" :button-type="'primary'" action="/api/restify/registrationOrders/importExcel" text="导入" class="ele-importButton"> 
       
    </hm-ant-upload>
    </div> 
            <div class="ele-wrapper ele-wrapper-downloadTemplateButton">
      <hm-ant-button ref="downloadTemplateButton" :visible="false" icon="fa fa-download" text="下载模板" :type="'primary'" @click="onDownloadTemplateButtonClick" class="ele-downloadTemplateButton"> 
       
    </hm-ant-button>
    </div> 
            <div class="ele-wrapper ele-wrapper-exportButton">
      <hm-ant-button ref="exportButton" :visible="exportButton.visible" :icon="exportButton.icon" :text="exportButton.text" :type="exportButton.type" @click="onExportButtonClick" class="ele-exportButton"> 
       
    </hm-ant-button>
    </div> 
            <div class="ele-wrapper ele-wrapper-acb9ca38-a2dc-4615-8ff9-d19194092922">
      <hm-panel title="报名列表" height="" class="ele-acb9ca38-a2dc-4615-8ff9-d19194092922"> 
          <template v-slot:slot-title-icon>
        <div class="ele-wrapper ele-wrapper-numberUsers">
      <hm-bg-card ref="numberUsers" padding="" box-shadow-color="#00000000" border-radius="" width="100%" height="30px" class="ele-numberUsers"> 
            <div class="ele-wrapper ele-wrapper-userTotalText">
      <hm-ant-bg-text ref="userTotalText" :text="userTotalText.text" class="ele-userTotalText"> 
       
    </hm-ant-bg-text>
    </div> 
            <div class="ele-wrapper ele-wrapper-bacthHeImportButton">
      <hm-ant-button ref="bacthHeImportButton" :disabled="bacthHeImportButton.disabled" :text="bacthHeImportButton.text" :type="bacthHeImportButton.type" @click="onBacthHeImportButtonClick" class="ele-bacthHeImportButton"> 
       
    </hm-ant-button>
    </div> 
            <div class="ele-wrapper ele-wrapper-activitySelect">
      <hm-ant-select ref="activitySelect" :data-map="activitySelect.dataMap" :params="activitySelect.params" title="  " url="/api/dkn/activity/list" v-model:options="activitySelect.options" placeholder="选择活动" v-model:value="activitySelect.value" @change="onActivitySelectChange" class="ele-activitySelect"> 
       
    </hm-ant-select>
    </div> 
            <div class="ele-wrapper ele-wrapper-baoMingImportButton">
      <hm-ant-button ref="baoMingImportButton" icon="fa fa-download" text="导出" :type="'primary'" @click="onBaoMingImportButtonClick" class="ele-baoMingImportButton"> 
       
    </hm-ant-button>
    </div> 
    </hm-bg-card>
    </div> 
    </template> 
    </hm-panel>
    </div> 
            <div class="ele-wrapper ele-wrapper-invisibleImportSearchLogicBtn">
      <hm-ant-button ref="invisibleImportSearchLogicBtn" @click="onInvisibleImportSearchLogicBtnClick" class="ele-invisibleImportSearchLogicBtn"> 
       
    </hm-ant-button>
    </div> 
            <div class="ele-wrapper ele-wrapper-registrationOrdersTable">
      <hm-ant-table ref="registrationOrdersTable" :columns="registrationOrdersTable.columns" :data="registrationOrdersTable.data" :pagination="registrationOrdersTable.pagination" :url="registrationOrdersTable.url" :params="registrationOrdersTable.params" :get-data-map="registrationOrdersTable.getDataMap" :row-select-flag="registrationOrdersTable.rowSelectFlag" :row-selection="registrationOrdersTable.rowSelection" :actions="registrationOrdersTable.actions" :is-flat-action="registrationOrdersTable.isFlatAction" :background-color="registrationOrdersTable.backgroundColor" :row-class-name="registrationOrdersTable.rowClassName" @onSelectChange="onRegistrationOrdersTableOnSelectChange" class="ele-registrationOrdersTable"> 
       
    </hm-ant-table>
    </div> 
            <div class="ele-wrapper ele-wrapper-0a6fba8b-c43b-4691-ad02-a62dba586095">
      <hm-bg-card width="100%" height="" class="ele-0a6fba8b-c43b-4691-ad02-a62dba586095"> 
            <div class="ele-wrapper ele-wrapper-quanXuanBox">
      <hm-ant-checkbox ref="quanXuanBox" v-model:ccheckbox-list="quanXuanBox.ccheckboxList" title="" @onChange="onQuanXuanBoxOnChange" class="ele-quanXuanBox"> 
       
    </hm-ant-checkbox>
    </div> 
            <div class="ele-wrapper ele-wrapper-actionSelect">
      <hm-ant-select ref="actionSelect" title="   " v-model:options="actionSelect.options" placeholder="批量操作" v-model:value="actionSelect.value" @change="onActionSelectChange" class="ele-actionSelect"> 
       
    </hm-ant-select>
    </div> 
            <div class="ele-wrapper ele-wrapper-actionQueRenBuntton">
      <hm-ant-button ref="actionQueRenBuntton" text="确认" @click="onActionQueRenBunttonClick" class="ele-actionQueRenBuntton"> 
       
    </hm-ant-button>
    </div> 
    </hm-bg-card>
    </div> 
    </hm-panel>
    </div> 
            <div class="ele-wrapper ele-wrapper-registrationOrdersAddModal">
      <hm-modal ref="registrationOrdersAddModal" :z-index="1000" v-model:visible="registrationOrdersAddModal.visible" title="新增" width="810px" :auto-close="false" height="100%" @cancel="onRegistrationOrdersAddModalCancel" @ok="onRegistrationOrdersAddModalOk"> 
            <div class="ele-wrapper ele-wrapper-addUserModalCard">
      <hm-bg-card ref="addUserModalCard" padding="" box-shadow-color="#00000000" border-radius="" width="100%" height="" class="ele-addUserModalCard"> 
            <div class="ele-wrapper ele-wrapper-registrationOrdersAddForm">
      <hm-ant-formily ref="registrationOrdersAddForm" :schema="registrationOrdersAddForm.schema" :wrapper-col="14" :col-num="2" :label-col="7" :config="registrationOrdersAddForm.config" v-model:value="registrationOrdersAddForm.value" class="ele-registrationOrdersAddForm"> 
       
    </hm-ant-formily>
    </div> 
    </hm-bg-card>
    </div> 
    </hm-modal>
    </div> 
            <div class="ele-wrapper ele-wrapper-registrationOrdersEditModal">
      <hm-modal ref="registrationOrdersEditModal" :z-index="1000" v-model:visible="registrationOrdersEditModal.visible" title="编辑" width="810px" :auto-close="false" height="100%" @cancel="onRegistrationOrdersEditModalCancel" @ok="onRegistrationOrdersEditModalOk"> 
            <div class="ele-wrapper ele-wrapper-newUserModalCard">
      <hm-bg-card ref="newUserModalCard" padding="0" box-shadow-color="#00000000" border-radius="" width="100%" height="" class="ele-newUserModalCard"> 
            <div class="ele-wrapper ele-wrapper-registrationOrdersEditForm">
      <hm-ant-formily ref="registrationOrdersEditForm" :schema="registrationOrdersEditForm.schema" :wrapper-col="14" :col-num="2" :label-col="7" :config="registrationOrdersEditForm.config" v-model:value="registrationOrdersEditForm.value" class="ele-registrationOrdersEditForm"> 
       
    </hm-ant-formily>
    </div> 
    </hm-bg-card>
    </div> 
    </hm-modal>
    </div> 
            <div class="ele-wrapper ele-wrapper-registrationOrdersDetailModal">
      <hm-modal ref="registrationOrdersDetailModal" :z-index="1000" v-model:visible="registrationOrdersDetailModal.visible" title="查看详情" cancel-text="关闭" :ok-button-boole="false" width="810px" height="100%"> 
            <div class="ele-wrapper ele-wrapper-detailsUserModalCard">
      <hm-bg-card ref="detailsUserModalCard" padding="" box-shadow-color="#00000000" border-radius="" width="100%" height="" class="ele-detailsUserModalCard"> 
            <div class="ele-wrapper ele-wrapper-registrationOrdersDetailForm">
      <hm-ant-formily ref="registrationOrdersDetailForm" :schema="registrationOrdersDetailForm.schema" :wrapper-col="14" :col-num="2" :label-col="7" :config="registrationOrdersDetailForm.config" v-model:value="registrationOrdersDetailForm.value" class="ele-registrationOrdersDetailForm"> 
       
    </hm-ant-formily>
    </div> 
    </hm-bg-card>
    </div> 
    </hm-modal>
    </div> 
            <div class="ele-wrapper ele-wrapper-registrationOrdersDeleteModal">
      <hm-modal ref="registrationOrdersDeleteModal" :z-index="1000" v-model:visible="registrationOrdersDeleteModal.visible" ok-text="确认" :closable="true" title="核销" :ok-type="'danger'" width="320px" :auto-close="false" height="80px" @cancel="onRegistrationOrdersDeleteModalCancel" @ok="onRegistrationOrdersDeleteModalOk"> 
            <div class="ele-wrapper ele-wrapper-deleteUserInputCard">
      <hm-bg-card ref="deleteUserInputCard" padding="" box-shadow-color="#00000000" border-radius="" width="100%" height="" class="ele-deleteUserInputCard"> 
            <div class="ele-wrapper ele-wrapper-deleteUserInputText">
      <hm-ant-icon-text ref="deleteUserInputText" padding="0" color="#CF2323" icon="" color-text="#1F1E1E" icon-size="0px" icon-padding="0" width="200px" text="是否确认核销?" :text-align="'left'" class="ele-deleteUserInputText"> 
       
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
import HmAntBgText from "/@/components/built-in/jeecg/HmAntBgText.vue";
import HmAntSelect from "/@/components/built-in/jeecg/HmAntSelect.vue";
import HmAntTable from "/@/components/built-in/jeecg/HmAntTable.vue";
import HmAntCheckbox from "/@/components/built-in/jeecg/HmAntCheckbox.vue";
import HmModal from "/@/components/built-in/layout/HmModal.vue";
import HmAntIconText from "/@/components/built-in/jeecg/HmAntIconText.vue";

import {
  downloadTemplate,
  exportRegistrationOrders,
  searchRegistrationOrders,
  addRegistrationOrders,
  editRegistrationOrders,
  startOrdersHeXiao
} from '/@/logics/RegistrationOrdersPageGroup';

export default {
  name: "RegistrationOrdersPage",
  components: {
    HmBgCard,
    HmPanel,
    HmAntFormily,
    HmAntButton,
    HmAntUpload,
    HmAntBgText,
    HmAntSelect,
    HmAntTable,
    HmAntCheckbox,
    HmModal,
    HmAntIconText,
  },
  data() {
    let self = this;
    return {
  "crudPagePanel": {
    "padding": "0",
    "titleBlockColor": "#1890FF00",
    "title": "",
    "height": ""
  },
  "registrationOrdersDeleteModal": {
    "visible": false
  },
  "registrationOrdersAddModal": {
    "visible": false
  },
  "registrationOrdersTable": {
    "params": {
      "pageNo": 1,
      "column": "createTime",
      "pageSize": 10,
      "databaseId": "",
      "order": "desc"
    },
    "rowSelection": {},
    "columns": [
      {
        "dataIndex": "code",
        "width": 100,
        "fixed": "left",
        "title": "用户ID",
        "key": "code"
      },
      {
        "dataIndex": "phone",
        "width": 120,
        "fixed": "left",
        "title": "手机号",
        "key": "phone"
      },
      {
        "dataIndex": "name",
        "width": 120,
        "fixed": "left",
        "title": "姓名/昵称",
        "key": "name"
      },
      {
        "dataIndex": "channel_dictText",
        "width": 120,
        "title": "报名渠道",
        "key": "channel_dictText"
      },
      {
        "customRender": function(data){
        let replacedString = data.text?.replace(/,/g, '\n');
          return h('pre',{
              title:replacedString,
              style:{
                textAlign:"left"
                }
              },
              replacedString);
      },
        "dataIndex": "activityName",
        "width": 280,
        "title": "报名项目名称",
        "key": "activityName"
      },
      {
        "customRender": function(data){
         let replacedString = data.text?.replace(/,/g, '\n');
          return h('pre',{
              title:replacedString,
              style:{
                textAlign:"left"
                }
              },
              replacedString);
      },
        "dataIndex": "activityAlias",
        "width": 220,
        "title": "组别(参与次)",
        "key": "activityAlias"
      },
      {
        "dataIndex": "paymentStatusText",
        "width": 100,
        "title": "报名状态",
        "key": "paymentStatusText"
      },
      {
        "dataIndex": "paymentTimeText",
        "width": 140,
        "title": "报名付款时间",
        "key": "paymentTimeText"
      },
      {
        "customRender": function(data){
             let replacedString = data.text?.replace(/,/g, '\n');
              return h('pre',{
                  title:replacedString,
                  style:{
                    textAlign:"left"
                    }
                  },
                  replacedString);
      },
        "dataIndex": "pickUpStatusText",
        "width": 100,
        "title": "核销状态",
        "key": "pickUpStatusText"
      },
      {
        "slots": {
          "customRender": "action"
        },
        "customRender": function (item) {
        return self.processingData(
                item.record.pickUpStatusAction,
                item.record.id,
                item.record.activityId,
                item.record.storeId,
                item.record.paymentStatus
              );
     },
        "width": 90,
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
    "url": "/api/dkn/viewRegistrationOrders/listEntry",
    "getDataMap": {
      "total": "",
      "list": ""
    },
    "rowSelectFlag": true,
    "actions": [
      {
        "name": "核销",
        "callback": function (item) {
      // if(item.paymentStatus===0){
       	//	self.registrationOrdersDeleteModal.visible=true;
         // self.hexiaotype=true;
          //self.hexiaoItem ={
            //  orderId:item.id,
            //  activityId:item.activityId,
             // storeId:item.storeId,
             // pickUpStatus:0,
           //   pickUpTime:self.$moment().format('YYYY-MM-DD HH:mm:ss')
         // };
       //}else{
        // self.$message.error("已退款、待支付状态下不可核销");
      // }
      
    },
        "type": "link"
      }
    ],
    "isFlatAction": true,
    "backgroundColor": "#FFFFFF",
    "rowClassName": {}
  },
  "selectTempArr": {},
  "bacthHeImportButton": {
    "disabled": true,
    "text": "批量核销",
    "type": "primary"
  },
  "registrationOrdersEditModal": {
    "visible": false
  },
  "importButton": {
    "visible": false,
    "headers": null,
    "fileList": []
  },
  "exportButton": {
    "visible": false,
    "icon": "fa fa-download",
    "text": "导出",
    "type": "primary"
  },
  "registrationOrdersAddForm": {
    "config": {
      "code": {
        "validator": function(value) {},
        "style": {
          "width": "50%"
        },
        "disabled": false,
        "type": "HmAntSelect",
        "title": "编码",
        "required": false,
        "props": {
          "title": ""
        }
      }
    },
    "schema": {},
    "value": {
      "span": "文字内容"
    }
  },
  "registrationOrdersEditForm": {
    "config": {
      "code": {
        "validator": function(value) {},
        "style": {
          "width": "50%"
        },
        "disabled": false,
        "type": "HmAntSelect",
        "title": "编码",
        "required": false,
        "props": {
          "title": ""
        }
      }
    },
    "schema": {},
    "value": {
      "span": "文字内容"
    }
  },
  "registrationOrdersDetailForm": {
    "config": {
      "code": {
        "validator": function(value) {},
        "style": {
          "width": "50%"
        },
        "disabled": false,
        "type": "Span",
        "title": "编码",
        "required": false,
        "props": {}
      }
    },
    "schema": {},
    "value": {
      "span": "文字内容"
    }
  },
  "userTotalText": {
    "text": "(用户总数:0)"
  },
  "registrationOrdersFilter": {
    "value": {
      "span": "文字内容"
    },
    "config": {
      "code": {
        "validator": function(value) {},
        "style": {
          "width": "50%"
        },
        "type": "Input",
        "title": "搜索用户",
        "props": {
          "placeholder": "手机号/姓名/昵称"
        }
      },
      "pickUpStatusText": {
        "validator": function(value) {},
        "style": {
          "width": "50%"
        },
        "type": "HmAntSelect",
        "title": "核销状态",
        "props": {
          "width": "242px",
          "options": [
            {
              "label": "已核销",
              "value": 0
            },
            {
              "label": "待核销",
              "value": 1
            },
            {
              "label": "混合核销",
              "value": 2
            }
          ],
          "title": ""
        }
      },
      "channel": {
        "validator": function(value) {},
        "style": {
          "width": "50%"
        },
        "type": "HmAntSelect",
        "title": "报名渠道",
        "props": {
          "showSearch": true,
          "width": "242px",
          "title": "",
          "url": "/api/sys/dict/getDictItems/channel"
        }
      },
      "paymentStatus": {
        "validator": function(value) {},
        "style": {
          "width": "50%"
        },
        "type": "HmAntSelect",
        "title": "报名状态",
        "props": {
          "width": "242px",
          "options": [
            {
              "label": "已报名",
              "value": 0
            },
            {
              "label": "未支付",
              "value": 1
            },
            {
              "label": "已退款",
              "value": 2
            }
          ],
          "title": ""
        }
      },
      "search": {
        "validator": function(value) {},
        "style": {
          "width": "80px",
          "marginLeft": "10px"
        },
        "type": "HmAntButton",
        "title": "",
        "events": {
          "@click": function(e) {searchRegistrationOrders(self, null);}
        },
        "props": {
          "icon": "fa fa-search",
          "text": "查询",
          "type": "primary"
        }
      },
      "reset": {
        "validator": function(value) {},
        "style": {
          "width": "80px",
          "marginLeft": "20px"
        },
        "type": "HmAntButton",
        "title": "",
        "events": {
          "@click": function(e) {self.$refs.registrationOrdersFilter.reset();searchRegistrationOrders(self, null);}
        },
        "props": {
          "icon": "fa fa-refresh",
          "text": "重置"
        }
      }
    },
    "schema": {}
  },
  "registrationOrdersDetailModal": {
    "visible": false
  },
  "activitySelect": {
    "dataMap": {
      "label": "name",
      "value": "id"
    },
    "params": {
      "pageNo": 1,
      "pageSize": -1
    },
    "options": [],
    "value": null
  },
  "quanXuanBox": {
    "ccheckboxList": [
      {
        "checked": false,
        "value": "全选",
        "key": "1"
      }
    ]
  },
  "actionSelect": {
    "options": [
      {
        "label": "导出",
        "value": 0
      },
      {
        "label": "核销",
        "value": 1
      }
    ],
    "value": null
  }
};
  },
  watch: {
  },
    created(e) {
      this.onCreated(e);
    },
    mounted(e) {
      this.onMounted(e);
    },
  methods:{
    onCreated() {
  if (this.$route.query.activityId) {
    this.registrationOrdersTable.params.activityId = this.$route.query.activityId
  }
  
},
    onMounted() {

  console.log("this.importButton.visible")
  console.log("this.exportButton.visible")
  console.log("this.crudPagePanel.title")
  console.log("this.registrationOrdersAddForm.config")
  console.log("this.registrationOrdersEditForm.config", "this.registrationOrdersDeleteModal.visible")
  console.log("this.registrationOrdersDetailForm.config", "this.userTotalText.text", "this.registrationOrdersTable.rowSelection");
  let self = this;
  //设置上传请求头
  this.$nextTick(() => {
    let token = localStorage.getItem('pro__Access-Token')
    if (token) {
      this.importButton.headers = {
        'X-Access-Token': token
      }
    }
  })
  if (self.$route.query.activityId) {
    self.registrationOrdersFilter.value.activityId = self.$route.query.activityId
  }
  self.processingData = function(data, orderId, activityId, storeId, paymentStatus) {
    if (!data) {
      return "";
    }
    let splData = data.split(",");
    let resultButton = [];
    let currentTimepick = self.$moment();


    for (let i = 0; i < splData.length; i++) {
      let splText = splData[i].split("#");
      let startTimepick = self.$moment(splText[3], "YYYY-MM-DD HH:mm:ss");
      let endTimepick = self.$moment(splText[4], "YYYY-MM-DD HH:mm:ss");
      var statusFlag = paymentStatus === 0 && splText[1] != '0' &&
        currentTimepick.isBetween(startTimepick, endTimepick) ?
        0 :
        1;
      resultButton.push(
        h(HmAntButton, {
          disabled: statusFlag === 0 ? false : true,
          text: splText[0] + "轮:核销",
          fontSize: 14,
          style: {
            width: "100%",
            display: "block",
          },
          type: "link",
          icon: "",
          onClick: function() {
            self.hexiaotype = true;
            
            self.hxAddOrEdit={};
             if (splText[2] == '999') {
              //添加
              self.hxAddOrEdit= {
                orderId: orderId,
                activityId: activityId,
                activityPickUpId: splText[5],
                storeId: storeId,
                pickUpStatus: 0,
                pickUpTime: self.$moment().format("YYYY-MM-DD HH:mm:ss"),
              }
              
             // self.$postAction("/api/dkn/orderPickUp/addHx", params);
              //self.$refs.registrationOrdersTable.getData();
            } else {
              //修改
              self.hxAddOrEdit= {
                id: splText[2],
                pickUpStatus: 0
              }
             // self.$putAction("/api/dkn/orderPickUp/edit", params);
             // self.$refs.registrationOrdersTable.getData();
   					 }
            self.registrationOrdersDeleteModal.visible = true;
          },
        })
      );
    }
    return h(
      "div", {
        style: {
          width: 200,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "left",
          alignItems: "left",
        },
      },
      resultButton
    );
  };

},

    onAddButtonClick () {
    this.registrationOrdersAddModal.visible = true;
},
    onDownloadTemplateButtonClick() {
        downloadTemplate(this, arguments);
      },
    onExportButtonClick() {
        exportRegistrationOrders(this, arguments);
      },
    onBacthHeImportButtonClick () {
    //批量核销核销
    this.hexiaotype = false;
    this.registrationOrdersDeleteModal.visible = true;
},
    onActivitySelectChange (item) {
  this.activityId=item;
  this.registrationOrdersTable.params = {
    activityId: item
  }
},
    onBaoMingImportButtonClick() {
        exportRegistrationOrders(this, arguments);
      },
    onInvisibleImportSearchLogicBtnClick() {
        searchRegistrationOrders(this, arguments);
      },
    onRegistrationOrdersTableOnSelectChange (item) {
  console.log("onSelectChange----", item);
  //this.selectTempArr = item.selectedRowKeys.length > 0 ? item.selectedRowKeys.toString() : null;
  this.selectTempArr = item.selectedRows;

  if (this.selectTempArr.length > 0) {

    var currentTimepick = this.$moment();
    var flag = false;
    for (let i = 0; i < this.selectTempArr.length; i++) {

      if (this.selectTempArr[i].paymentStatus !== 0) {
        this.$message.error("数据中存在已退款、待支付状态下不可核销");
        this.bacthHeImportButton.disabled = true;
        flag = true;
        return;
      }

      let splData = this.selectTempArr[i].pickUpStatusAction.split(",");
      for (let i = 0; i < splData.length; i++) {
        let splText = splData[i].split("#");
        debugger
        if (splText[1] == "0") {

          this.$message.error("数据已核销");
          this.bacthHeImportButton.disabled = true;
          flag = true;
          return;
        }
        var startTimepick = this.$moment(splText[3], "YYYY-MM-DD HH:mm:ss");
        var endTimepick = this.$moment(splText[4], "YYYY-MM-DD HH:mm:ss");
        if (!currentTimepick.isBetween(startTimepick, endTimepick)) {
          this.$message.error("超过核销截止时间了不可核销");
          this.bacthHeImportButton.disabled = true;
          flag = true;
          return;
        }
      }
      if (flag) {
        return;
      }
    }



    if (!flag) {
      this.bacthHeImportButton.disabled = false;
    }
    //let selectPropertyArr = this.selectTempArr.filter(item => item.paymentStatus === 1 || item.paymentStatus === 2)
    // if (selectPropertyArr.length == 0) {
    //  this.bacthHeImportButton.disabled = false
    // } else {
    //   this.$message.error("数据中存在已退款、待支付状态下不可核销");
    //   this.bacthHeImportButton.disabled = true
    // }
  } else {
    this.bacthHeImportButton.disabled = true
  }


},
    onQuanXuanBoxOnChange (item) {
  console.log("quanxuan123", item)
  //钩上 为 true ;
  this.quanxuan=item.checked;
},
    onActionSelectChange (item) {
  this.actionType=item;
},
    onActionQueRenBunttonClick () {
  //钩上 为 true ;
  if (this.quanxuan) {
    if (this.actionType === 0) {
      //导出
      this.$downloadFile("报名用户列表.xlsx", "/api/dkn/viewRegistrationOrders/exportExcel", {});
    }
    if (this.actionType === 1) {
      //批量核销核销
      this.hexiaotype = false;
      this.registrationOrdersDeleteModal.visible=true;
    }
  } else {
    this.$message.success("请勾选全选");
  }
},
    onRegistrationOrdersAddModalCancel (){
	this.registrationOrdersAddModal.visible = false;
},
    onRegistrationOrdersAddModalOk() {
        addRegistrationOrders(this, arguments);
      },
    onRegistrationOrdersEditModalCancel (){
	this.registrationOrdersEditModal.visible = false;
},
    onRegistrationOrdersEditModalOk() {
        editRegistrationOrders(this, arguments);
      },
    onRegistrationOrdersDeleteModalCancel () {
 this.registrationOrdersDeleteModal.visible=false;
},
    onRegistrationOrdersDeleteModalOk() {
        startOrdersHeXiao(this, arguments);
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

.ele-wrapper-registrationOrdersFilter {
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

.ele-wrapper-acb9ca38-a2dc-4615-8ff9-d19194092922 {
  width:100%;
}

.ele-wrapper-numberUsers {
  width:100%;
.ele-numberUsers{
margin-bottom:15px;
}
}

.ele-wrapper-userTotalText {
  margin-right: 20px;
}

.ele-wrapper-bacthHeImportButton {
  margin-right: 20px;
}

.ele-wrapper-activitySelect {
  margin-right: 20px;
display:none;
}

.ele-wrapper-baoMingImportButton {
  margin-right: 20px;
}

.ele-wrapper-invisibleImportSearchLogicBtn {
  display:none;
}

.ele-wrapper-registrationOrdersTable {
  .table-div /deep/ .ant-table-thead > tr > th {
background:#FAFAFA;
}
/deep/.ant-table-header-column > div{
  background-color: transparent !important;
}
/deep/.ant-table-row-cell-break-word > div {
     background-color: transparent;
}
width:98%;
margin-left:1%;
}

.ele-wrapper-0a6fba8b-c43b-4691-ad02-a62dba586095 {
  width:100%;
display:none;
}

.ele-wrapper-quanXuanBox {
  margin-left: 10px;
}

.ele-wrapper-actionSelect {
  margin-left: 20px;
}

.ele-wrapper-actionQueRenBuntton {
  margin-left: 20px;
}

.ele-wrapper-addUserModalCard {
  width:100%;
}

.ele-wrapper-registrationOrdersAddForm {
  width:100%;
}

.ele-wrapper-newUserModalCard {
  width:100%;
}

.ele-wrapper-registrationOrdersEditForm {
  width:100%;
}

.ele-wrapper-detailsUserModalCard {
  width:100%;
}

.ele-wrapper-registrationOrdersDetailForm {
  width:100%;
}

.ele-wrapper-deleteUserInputCard {
  width:100%;
}

.ele-wrapper-deleteUserInputText {
  width:60%;
}

</style>
