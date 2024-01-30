<template>
  <div class="page card">
    <div class="page-wrapper">
        <div class="ele-wrapper ele-wrapper-e37fdb24-4953-4f7d-af46-b1aa9d4f1737">
      <hm-bg-card box-shadow-blur="" box-shadow-v-shadow="" border-radius="" width="100%" height="100%" class="ele-e37fdb24-4953-4f7d-af46-b1aa9d4f1737"> 
            <div class="ele-wrapper ele-wrapper-titleCard">
      <hm-bg-card ref="titleCard" box-shadow-blur="" box-shadow-v-shadow="" border-radius="" width="100%" height="100%" class="ele-titleCard"> 
            <div class="ele-wrapper ele-wrapper-80d9b125-92bb-46b5-87b7-d8b4b451d860">
      <hm-ant-icon-text icon="fa fa-tasks" font-size="14px" text="创建活动" class="ele-80d9b125-92bb-46b5-87b7-d8b4b451d860"> 
       
    </hm-ant-icon-text>
    </div> 
            <div class="ele-wrapper ele-wrapper-230f0090-9b76-4e5d-9556-f91759f40cf8">
      <hm-ant-bg-text color="#999999" font-size="14px" text="* 为必填项"> 
       
    </hm-ant-bg-text>
    </div> 
    </hm-bg-card>
    </div> 
            <div class="ele-wrapper ele-wrapper-message_1">
      <hm-bg-card ref="message_1" padding="" box-shadow-blur="" box-shadow-v-shadow="" border-radius="" width="100%" height="100%" class="ele-message_1"> 
            <div class="ele-wrapper ele-wrapper-011df7de-b51d-49df-8693-f8313670d460">
      <hm-bg-card box-shadow-blur="" box-shadow-v-shadow="" border-radius="" width="100%" height="100%" class="ele-011df7de-b51d-49df-8693-f8313670d460"> 
            <div class="ele-wrapper ele-wrapper-bf252f1b-c63f-43d8-b3da-2dc087a9f832">
      <hm-ant-bg-text padding="2" font-size="14px" text="基本信息" class="ele-bf252f1b-c63f-43d8-b3da-2dc087a9f832"> 
       
    </hm-ant-bg-text>
    </div> 
            <div class="ele-wrapper ele-wrapper-activityForm">
      <hm-ant-formily ref="activityForm" :schema="activityForm.schema" :wrapper-col="16" :col-num="0" :label-col="5" :col-min-width="380" :config="activityForm.config" v-model:value="activityForm.value" class="ele-activityForm"> 
       
    </hm-ant-formily>
    </div> 
            <div class="ele-wrapper ele-wrapper-824a7f59-7158-4b84-a954-01cbeb3c4180">
      <hm-bg-card box-shadow-blur="" box-shadow-v-shadow="" border-radius="" width="100%" height="100%" class="ele-824a7f59-7158-4b84-a954-01cbeb3c4180"> 
            <div class="ele-wrapper ele-wrapper-42f5eb5a-31b3-4f7a-8ddd-9bb948ae5a17">
      <hm-ant-bg-text padding="2" font-size="14px" text="活动项目设置（至少一个）" class="ele-42f5eb5a-31b3-4f7a-8ddd-9bb948ae5a17"> 
       
    </hm-ant-bg-text>
    </div> 
            <div class="ele-wrapper ele-wrapper-addBtn1">
      <hm-ant-button ref="addBtn1" icon="fa fa-plus" text="添加" :type="'primary'" @click="onAddBtn1Click" class="ele-addBtn1"> 
       
    </hm-ant-button>
    </div> 
            <div class="ele-wrapper ele-wrapper-addproject">
      <hm-modal ref="addproject" :z-index="1000" v-model:visible="addproject.visible" title="添加项目" :auto-close="false" height="" @cancel="onAddprojectCancel" @ok="onAddprojectOk" class="ele-addproject"> 
            <div class="ele-wrapper ele-wrapper-activityProjectForm">
      <hm-ant-formily ref="activityProjectForm" :schema="activityProjectForm.schema" :wrapper-col="16" :col-num="0" :label-col="6" :col-min-width="380" :config="activityProjectForm.config" v-model:value="activityProjectForm.value" class="ele-activityProjectForm"> 
       
    </hm-ant-formily>
    </div> 
    </hm-modal>
    </div> 
            <div class="ele-wrapper ele-wrapper-deleteproject">
      <hm-modal ref="deleteproject" :z-index="1000" v-model:visible="deleteproject.visible" title="删除" width="320px" height="" class="ele-deleteproject"> 
            <div class="ele-wrapper ele-wrapper-delText">
      <hm-ant-icon-text ref="delText" icon="" width="270px" text="确认删除"> 
       
    </hm-ant-icon-text>
    </div> 
    </hm-modal>
    </div> 
            <div class="ele-wrapper ele-wrapper-678d6f52-6548-4f95-b813-d079ff38bb6f">
      <hm-bg-card box-shadow-blur="" box-shadow-v-shadow="" border-radius="" width="100%" height="100%" class="ele-678d6f52-6548-4f95-b813-d079ff38bb6f"> 
            <div class="ele-wrapper ele-wrapper-activityProjectTable">
      <hm-ant-table ref="activityProjectTable" :is-flat-action="activityProjectTable.isFlatAction" :get-data-map="activityProjectTable.getDataMap" :data="activityProjectTable.data" :columns="activityProjectTable.columns" :row-class-name="activityProjectTable.rowClassName" :pagination-hidden="activityProjectTable.paginationHidden" :actions="activityProjectTable.actions"> 
       
    </hm-ant-table>
    </div> 
            <div class="ele-wrapper ele-wrapper-2030f92c-96b3-41e7-8403-353b98f5e6a6">
      <hm-ant-bg-text padding="2" font-size="14px" text="活动奖品设置（可为空）" class="ele-2030f92c-96b3-41e7-8403-353b98f5e6a6"> 
       
    </hm-ant-bg-text>
    </div> 
            <div class="ele-wrapper ele-wrapper-addBtn2">
      <hm-ant-button ref="addBtn2" icon="fa fa-plus" text="添加" :type="'primary'" @click="onAddBtn2Click" class="ele-addBtn2"> 
       
    </hm-ant-button>
    </div> 
            <div class="ele-wrapper ele-wrapper-addprize">
      <hm-modal ref="addprize" :z-index="1000" v-model:visible="addprize.visible" title="奖品图片" :auto-close="false" @cancel="onAddprizeCancel" @ok="onAddprizeOk" class="ele-addprize"> 
            <div class="ele-wrapper ele-wrapper-addActivityImgFormTwo">
      <hm-ant-formily ref="addActivityImgFormTwo" :schema="addActivityImgFormTwo.schema" :wrapper-col="14" :col-num="0" :label-col="7" :col-min-width="380" :config="addActivityImgFormTwo.config" v-model:value="addActivityImgFormTwo.value"> 
       
    </hm-ant-formily>
    </div> 
    </hm-modal>
    </div> 
            <div class="ele-wrapper ele-wrapper-ee49ad6d-dd0f-4f85-8ed8-dd1b1b7af98c">
      <hm-bg-card box-shadow-blur="" box-shadow-v-shadow="" border-radius="" width="100%" height="100%" class="ele-ee49ad6d-dd0f-4f85-8ed8-dd1b1b7af98c"> 
            <div class="ele-wrapper ele-wrapper-activityImgTableTwo">
      <hm-ant-table ref="activityImgTableTwo" :is-flat-action="activityImgTableTwo.isFlatAction" :get-data-map="activityImgTableTwo.getDataMap" :data="activityImgTableTwo.data" :columns="activityImgTableTwo.columns" :row-class-name="activityImgTableTwo.rowClassName" :pagination-hidden="activityImgTableTwo.paginationHidden" :actions="activityImgTableTwo.actions"> 
       
    </hm-ant-table>
    </div> 
    </hm-bg-card>
    </div> 
            <div class="ele-wrapper ele-wrapper-e3996ba6-7678-4de0-abea-832a2097c2c9">
      <hm-bg-card width="100%" height="100%" border-radius="" box-shadow-v-shadow="" box-shadow-blur="" class="ele-e3996ba6-7678-4de0-abea-832a2097c2c9"> 
            <div class="ele-wrapper ele-wrapper-37b100fe-30bf-47b0-9bed-b98bbfebd6f1">
      <hm-ant-bg-text padding="2" font-size="14px" text="活动运动信息" class="ele-37b100fe-30bf-47b0-9bed-b98bbfebd6f1"> 
       
    </hm-ant-bg-text>
    </div> 
            <div class="ele-wrapper ele-wrapper-activityExtTwoForm">
      <hm-ant-formily ref="activityExtTwoForm" :schema="activityExtTwoForm.schema" :wrapper-col="16" :col-num="0" :label-col="5" :col-min-width="380" :config="activityExtTwoForm.config" v-model:value="activityExtTwoForm.value" class="ele-activityExtTwoForm"> 
       
    </hm-ant-formily>
    </div> 
    </hm-bg-card>
    </div> 
            <div class="ele-wrapper ele-wrapper-633b539d-81dc-4e94-af68-dfba9182db48">
      <hm-ant-bg-text padding="2" font-size="14px" text="活动信息" class="ele-633b539d-81dc-4e94-af68-dfba9182db48"> 
       
    </hm-ant-bg-text>
    </div> 
            <div class="ele-wrapper ele-wrapper-81d9459e-4453-4843-b712-3c112a5e0a41">
      <hm-bg-card width="100%" height="100%" border-radius="" box-shadow-v-shadow="" box-shadow-blur="" class="ele-81d9459e-4453-4843-b712-3c112a5e0a41"> 
            <div class="ele-wrapper ele-wrapper-e422be72-923b-42ad-bef4-7e886c910422">
      <hm-ant-bg-text text="活动规则：" font-size="14px" padding="2" class="ele-e422be72-923b-42ad-bef4-7e886c910422"> 
       
    </hm-ant-bg-text>
    </div> 
            <div class="ele-wrapper ele-wrapper-activityRules">
      <hm-wang-editor ref="activityRules" :mode="'simple'" v-model:value="activityRules.value" :toolbar-config="activityRules.toolbarConfig" :editor-config="activityRules.editorConfig" :max-content-length="2" class="ele-activityRules"> 
       
    </hm-wang-editor>
    </div> 
    </hm-bg-card>
    </div> 
            <div class="ele-wrapper ele-wrapper-f97dd639-1f58-44cc-99e6-def3ddf58363">
      <hm-bg-card width="100%" height="100%" border-radius="" box-shadow-v-shadow="" box-shadow-blur="" class="ele-f97dd639-1f58-44cc-99e6-def3ddf58363"> 
            <div class="ele-wrapper ele-wrapper-04dfcec4-d289-4d3c-a977-7ed5a6ce3822">
      <hm-ant-bg-text text="协议与承诺书：" font-size="14px" padding="2" class="ele-04dfcec4-d289-4d3c-a977-7ed5a6ce3822"> 
       
    </hm-ant-bg-text>
    </div> 
            <div class="ele-wrapper ele-wrapper-0303a115-4a17-41e3-b32a-c1d017db3f97">
      <hm-wang-editor value="" :toolbar-config='{"toolbarKeys":["blockquote","bold","underline","italic","color","bgColor","undo","redo","emotion","insertLink","fullScreen",{"key":"group-image","title":"图片","iconSvg":"<svg viewBox=\"0 0 1024 1024\"><path d=\"M959.877 128l0.123 0.123v767.775l-0.123 0.122H64.102l-0.122-0.122V128.123l0.122-0.123h895.775zM960 64H64C28.795 64 0 92.795 0 128v768c0 35.205 28.795 64 64 64h896c35.205 0 64-28.795 64-64V128c0-35.205-28.795-64-64-64zM832 288.01c0 53.023-42.988 96.01-96.01 96.01s-96.01-42.987-96.01-96.01S682.967 192 735.99 192 832 234.988 832 288.01zM896 832H128V704l224.01-384 256 320h64l224.01-192z\"></path></svg>","menuKeys":["insertImage","uploadImage"]},"fontSize","fontFamily","lineHeight",{"key":"group-more-style","title":"更多","menuKeys":["through","code","sup","sub","clearStyle"]},"bulletedList","numberedList","headerSelect",{"key":"group-justify","title":"对齐","menuKeys":["justifyLeft","justifyRight","justifyCenter","justifyJustify"]},{"key":"group-indent","title":"缩进","menuKeys":["indent","delIndent"]},"todo","divider","codeBlock","insertTable"],"excludeKeys":[]}' :max-content-length="2" class="ele-0303a115-4a17-41e3-b32a-c1d017db3f97"> 
       
    </hm-wang-editor>
    </div> 
    </hm-bg-card>
    </div> 
            <div class="ele-wrapper ele-wrapper-848e318a-9213-4805-a8d8-7f9b336b01d5">
      <hm-ant-input value="" title="活动咨询客服" width="480" class="ele-848e318a-9213-4805-a8d8-7f9b336b01d5"> 
       
    </hm-ant-input>
    </div> 
    </hm-bg-card>
    </div> 
    </hm-bg-card>
    </div> 
    </hm-bg-card>
    </div> 
            <div class="ele-wrapper ele-wrapper-message_2">
      <hm-bg-card ref="message_2" box-shadow-blur="" box-shadow-v-shadow="" border-radius="" width="100%" height="100%" class="ele-message_2"> 
            <div class="ele-wrapper ele-wrapper-fa713d7b-511f-4b6c-9f7a-37b66d33842e">
      <hm-ant-bg-text padding="2" font-size="14px" text="报名页背景设置" class="ele-fa713d7b-511f-4b6c-9f7a-37b66d33842e"> 
       
    </hm-ant-bg-text>
    </div> 
            <div class="ele-wrapper ele-wrapper-addBtn3">
      <hm-ant-button ref="addBtn3" icon="fa fa-plus" text="添加" :type="'primary'" @click="onAddBtn3Click" class="ele-addBtn3"> 
       
    </hm-ant-button>
    </div> 
            <div class="ele-wrapper ele-wrapper-addBackground">
      <hm-modal ref="addBackground" :z-index="1000" v-model:visible="addBackground.visible" title="报名页背景图" height="300px" class="ele-addBackground"> 
            <div class="ele-wrapper ele-wrapper-c55fbae6-544d-46d6-a83a-73b92291b38d">
      <hm-ant-formily :schema='{"type":"object","properties":{"form":{"x-component":"Form","x-component-props":{"wrapper-col":{"span":14},"label-col":{"span":7},"style":{"flexWrap":"wrap","display":"flex"}},"type":"void","properties":{}}}}' :wrapper-col="14" :col-num="0" :label-col="7" :col-min-width="380" :config='{"sortNo":{"style":{"width":"100%"},"type":"InputNumber","title":"排序","required":true,"props":{"placeholder":"图片序号"}},"size":{"style":{"width":"100%"},"type":"Input","title":"参考尺寸","required":true,"props":{"placeholder":"请输入"}}," name":{"style":{"width":"100%"},"type":"UploadImage","title":"背景图片","maxCount":1,"listType":"picture-card","required":true,"props":{}}}' :value='{}'> 
       
    </hm-ant-formily>
    </div> 
    </hm-modal>
    </div> 
            <div class="ele-wrapper ele-wrapper-89ea97da-357c-4295-9803-b1d0b63db0a2">
      <hm-bg-card box-shadow-blur="" box-shadow-v-shadow="" border-radius="" width="100%" height="100%" class="ele-89ea97da-357c-4295-9803-b1d0b63db0a2"> 
            <div class="ele-wrapper ele-wrapper-activityImgTableOne">
      <hm-ant-table ref="activityImgTableOne" :is-flat-action="activityImgTableOne.isFlatAction" :get-data-map="activityImgTableOne.getDataMap" :data="activityImgTableOne.data" :columns="activityImgTableOne.columns" :row-class-name="activityImgTableOne.rowClassName" :pagination-hidden="activityImgTableOne.paginationHidden" :actions="activityImgTableOne.actions"> 
       
    </hm-ant-table>
    </div> 
    </hm-bg-card>
    </div> 
            <div class="ele-wrapper ele-wrapper-56aec4a5-4b22-4f3e-9572-bd54033fe687">
      <hm-ant-bg-text padding="2" font-size="14px" text="报名页信息框颜色设置" class="ele-56aec4a5-4b22-4f3e-9572-bd54033fe687"> 
       
    </hm-ant-bg-text>
    </div> 
            <div class="ele-wrapper ele-wrapper-3fb31f2b-4a48-499a-ba2a-8181388283b9">
      <hm-bg-card box-shadow-blur="" box-shadow-v-shadow="" border-radius="" width="100%" height="100%" class="ele-3fb31f2b-4a48-499a-ba2a-8181388283b9"> 
            <div class="ele-wrapper ele-wrapper-79de068d-0a6b-4f11-8574-d654a6df22b7">
      <hm-color-kit> 
       
    </hm-color-kit>
    </div> 
    </hm-bg-card>
    </div> 
            <div class="ele-wrapper ele-wrapper-c9bf9691-385d-414d-864e-a07073520b33">
      <hm-ant-bg-text padding="2" font-size="14px" text="报名页信息框字体颜色设置" class="ele-c9bf9691-385d-414d-864e-a07073520b33"> 
       
    </hm-ant-bg-text>
    </div> 
            <div class="ele-wrapper ele-wrapper-8e197d87-c68a-402f-90a7-400dc9c35edc">
      <hm-bg-card box-shadow-blur="" box-shadow-v-shadow="" border-radius="" width="100%" height="100%" class="ele-8e197d87-c68a-402f-90a7-400dc9c35edc"> 
            <div class="ele-wrapper ele-wrapper-b661ec59-8ff2-4a70-ba98-06e70d33bc68">
      <hm-color-kit> 
       
    </hm-color-kit>
    </div> 
    </hm-bg-card>
    </div> 
            <div class="ele-wrapper ele-wrapper-cf8baab6-8c0a-4974-95ba-4c9e67749519">
      <hm-bg-card box-shadow-blur="" box-shadow-v-shadow="" border-radius="" width="100%" height="100%" class="ele-cf8baab6-8c0a-4974-95ba-4c9e67749519"> 
            <div class="ele-wrapper ele-wrapper-428bc034-6551-4c0e-b7c0-36c4e903ac9e">
      <hm-ant-bg-text padding="2" font-size="14px" text="报名分享图片设置" class="ele-428bc034-6551-4c0e-b7c0-36c4e903ac9e"> 
       
    </hm-ant-bg-text>
    </div> 
            <div class="ele-wrapper ele-wrapper-sharingImageSettings">
      <hm-modal ref="sharingImageSettings" :z-index="1000" v-model:visible="sharingImageSettings.visible" title="分享图片" height="" class="ele-sharingImageSettings"> 
            <div class="ele-wrapper ele-wrapper-89787e21-f9a9-487d-b055-c327bec09efd">
      <hm-ant-formily :schema='{"type":"object","properties":{"form":{"x-component":"Form","x-component-props":{"wrapper-col":{"span":14},"label-col":{"span":7},"style":{"flexWrap":"wrap","display":"flex"}},"type":"void","properties":{}}}}' :wrapper-col="14" :col-num="0" :label-col="7" :col-min-width="380" :config='{"size":{"style":{"width":"100%"},"type":"Input","title":"参考尺寸","required":true,"props":{}},"imgPath":{"style":{"width":"100%"},"type":"UploadImage","title":"图片","required":true,"props":{"action":"/api/sys/common/upload","accept":".jpg,.png"}}}' :value='{}'> 
       
    </hm-ant-formily>
    </div> 
    </hm-modal>
    </div> 
            <div class="ele-wrapper ele-wrapper-sharingImageTable">
      <hm-ant-table ref="sharingImageTable" :is-flat-action="sharingImageTable.isFlatAction" :get-data-map="sharingImageTable.getDataMap" :data="sharingImageTable.data" :columns="sharingImageTable.columns" :row-class-name="sharingImageTable.rowClassName" :pagination-hidden="sharingImageTable.paginationHidden" :actions="sharingImageTable.actions"> 
       
    </hm-ant-table>
    </div> 
    </hm-bg-card>
    </div> 
    </hm-bg-card>
    </div> 
    </hm-bg-card>
    </div> 
            <div class="ele-wrapper ele-wrapper-cc8ed92e-79cc-488a-9d3f-77d0a2fddce6">
      <hm-bg-card border-radius="" width="100%" height="100%" :text-align="'center'" class="ele-cc8ed92e-79cc-488a-9d3f-77d0a2fddce6"> 
            <div class="ele-wrapper ele-wrapper-78fb2568-9250-4a78-987d-c766b916f771">
      <hm-ant-button :size="'large'" icon="fa fa-check-circle" text="创建活动" :type="'primary'" @click="onEle78Fb256892504A78987DC766B916F771Click" class="ele-78fb2568-9250-4a78-987d-c766b916f771"> 
       
    </hm-ant-button>
    </div> 
            <div class="ele-wrapper ele-wrapper-b0a42962-4301-4b4d-9525-05bfef232b34">
      <hm-ant-button :ghost="true" :size="'large'" icon="fa fa-repeat" text="重置" :type="'primary'" class="ele-b0a42962-4301-4b4d-9525-05bfef232b34"> 
       
    </hm-ant-button>
    </div> 
    </hm-bg-card>
    </div> 
    </hm-bg-card>
    </div>
    </div>
  </div>
</template>

<script>
import { h } from 'vue';
import HmBgCard from "/@/components/built-in/layout/HmBgCard.vue";
import HmAntIconText from "/@/components/built-in/jeecg/HmAntIconText.vue";
import HmAntBgText from "/@/components/built-in/jeecg/HmAntBgText.vue";
import HmAntFormily from "/@/components/built-in/jeecg/HmAntFormily.vue";
import HmAntButton from "/@/components/built-in/jeecg/HmAntButton.vue";
import HmModal from "/@/components/built-in/layout/HmModal.vue";
import HmAntTable from "/@/components/built-in/jeecg/HmAntTable.vue";
import HmWangEditor from "/@/components/built-in/jeecg/haomo/HmWangEditor.vue";
import HmAntInput from "/@/components/built-in/jeecg/HmAntInput.vue";
import HmColorKit from "/@/components/built-in/jeecg/HmColorKit.vue";

import {
  addActivityProject,
  addActivty
} from '/@/logics/AddActivityForm';

export default {
  name: "NewActivity",
  components: {
    HmBgCard,
    HmAntIconText,
    HmAntBgText,
    HmAntFormily,
    HmAntButton,
    HmModal,
    HmAntTable,
    HmWangEditor,
    HmAntInput,
    HmColorKit,
  },
  data() {
    let self = this;
    return {
  "activityForm": {
    "schema": {
      "type": "object",
      "properties": {
        "form": {
          "x-component": "Form",
          "x-component-props": {
            "wrapper-col": {
              "span": 14
            },
            "label-col": {
              "span": 7
            },
            "style": {
              "flexWrap": "wrap",
              "display": "flex"
            }
          },
          "type": "void",
          "properties": {}
        }
      }
    },
    "config": {
      "name": {
        "style": {
          "width": "100%"
        },
        "type": "Input",
        "title": "活动名称",
        "required": true,
        "props": {}
      },
      "closeTime": {
        "style": {
          "width": "100%"
        },
        "type": "DatePicker",
        "title": "报名截止",
        "required": true,
        "props": {
          "showTime": true
        }
      },
      "pickUpTime": {
        "style": {
          "width": "100%"
        },
        "type": "DatePicker",
        "title": "核销截止",
        "required": true,
        "props": {
          "showTime": true
        }
      },
      "cycle": {
        "style": {
          "width": "100%"
        },
        "type": "RangePicker",
        "title": "活动周期",
        "required": true,
        "props": {}
      },
      "status": {
        "default": 0,
        "style": {
          "width": "100%"
        },
        "type": "RadioGroup",
        "title": "活动状态",
        "required": true,
        "props": {
          "options": [
            {
              "label": "启用",
              "value": 0
            },
            {
              "label": "禁用",
              "value": 1
            }
          ]
        }
      }
    },
    "value": {
      "status": 0
    }
  },
  "addproject": {
    "visible": false
  },
  "deleteproject": {
    "visible": false
  },
  "addprize": {
    "visible": false
  },
  "addBackground": {
    "visible": false
  },
  "sharingImageSettings": {
    "visible": false
  },
  "activityProjectForm": {
    "schema": {
      "type": "object",
      "properties": {
        "form": {
          "x-component": "Form",
          "x-component-props": {
            "wrapper-col": {
              "span": 14
            },
            "label-col": {
              "span": 7
            },
            "style": {
              "flexWrap": "wrap",
              "display": "flex"
            }
          },
          "type": "void",
          "properties": {}
        }
      }
    },
    "config": {
      "sortNo": {
        "style": {
          "width": "100%"
        },
        "type": "InputNumber",
        "title": "排序",
        "required": true,
        "props": {
          "placeholder": "请输入排序"
        }
      },
      "multipleOrder": {
        "style": {
          "width": "100%"
        },
        "type": "RadioGroup",
        "title": "是否多人报名",
        "required": true,
        "props": {
          "options": [
            {
              "label": "是",
              "value": 0
            },
            {
              "label": "否",
              "value": 1
            }
          ]
        }
      },
      "imgPath": {
        "style": {
          "width": "100%"
        },
        "type": "UploadImage",
        "title": "活动图片",
        "required": true,
        "props": {
          "action": "/api/sys/common/upload",
          "accept": ".jpg,.png"
        }
      },
      "name": {
        "style": {
          "width": "100%"
        },
        "type": "Input",
        "title": "活动项目名称",
        "required": true,
        "props": {}
      },
      "synopsis": {
        "style": {
          "width": "100%"
        },
        "type": "Textarea",
        "title": "项目简介",
        "required": true,
        "props": {}
      },
      "expense": {
        "style": {
          "width": "100%"
        },
        "type": "Input",
        "title": "项目费用",
        "required": true,
        "props": {}
      },
      "free": {
        "style": {
          "width": "100%"
        },
        "type": "RadioGroup",
        "title": "是否免费",
        "required": true,
        "props": {
          "options": [
            {
              "label": "是",
              "value": 0
            },
            {
              "label": "否",
              "value": 1
            }
          ]
        }
      }
    },
    "value": {}
  },
  "activityProjectTable": {
    "isFlatAction": true,
    "getDataMap": {
      "total": "",
      "list": ""
    },
    "data": [],
    "columns": [
      {
        "customRender": function (data) {
              return h(HmAntIconText, {
                fontSize: "14px",
                iconSize: "16px",
                bgColorText: "transparent",
                width: "100%",
                display: "flex",
                alignItems: "center",
                text: "",
                placement: "top",
                img: self.getImg(data.record.imgPath),
                color: "black",
                imgStyle: {
                  height: "32px",
                  marginRight: "4px",
                  marginTop: "-4px",
                },
                onClick: function () {},
              });
            },
        "dataIndex": "imgPath",
        "title": "项目图片",
        "key": "imgPath"
      },
      {
        "dataIndex": "expense",
        "title": "项目费用",
        "key": "expense"
      },
      {
        "dataIndex": "free",
        "title": "是否免费",
        "key": "free"
      },
      {
        "dataIndex": "multipleOrder",
        "width": 60,
        "title": "可多人报名",
        "key": "multipleOrder"
      },
      {
        "dataIndex": "name",
        "width": 130,
        "title": "活动项目名称",
        "key": "name",
        "ellipsis": true
      },
      {
        "dataIndex": "synopsis",
        "title": "项目简介",
        "key": "synopsis",
        "ellipsis": true
      },
      {
        "dataIndex": "sortNo",
        "title": "排序",
        "key": "sortNo"
      },
      {
        "slots": {
          "customRender": "action"
        },
        "width": 100,
        "title": "操作",
        "key": "action"
      }
    ],
    "rowClassName": {},
    "paginationHidden": true,
    "actions": [
      {
        "name": "编辑",
        "icon": "fa fa-pencil",
        "callback": function(item) {        
        console.log("点击编辑: ", item);
          self.addproject.visible = true;                
      },
        "type": "link"
      },
      {
        "name": "删除",
        "icon": "fa fa-trash",
        "callback": function (item) {
                            console.log("点击删除: ", item);
      self.deleteproject.visible = true;
                        },
        "type": "link"
      }
    ]
  },
  "848e318a-9213-4805-a8d8-7f9b336b01d5": {
    "value": ""
  },
  "addActivityImgFormTwo": {
    "schema": {
      "type": "object",
      "properties": {
        "form": {
          "x-component": "Form",
          "x-component-props": {
            "wrapper-col": {
              "span": 14
            },
            "label-col": {
              "span": 7
            },
            "style": {
              "flexWrap": "wrap",
              "display": "flex"
            }
          },
          "type": "void",
          "properties": {}
        }
      }
    },
    "config": {
      "sortNo": {
        "style": {
          "width": "100%"
        },
        "type": "InputNumber",
        "title": "奖品排序",
        "required": true,
        "props": {
          "placeholder": "奖品序号"
        }
      },
      "imgPath": {
        "style": {
          "width": "100%"
        },
        "type": "UploadImage",
        "title": "奖品图片",
        "required": true,
        "props": {
          "action": "/api/sys/common/upload",
          "accept": ".jpg,.png"
        }
      },
      "name": {
        "style": {
          "width": "100%"
        },
        "type": "Input",
        "title": "奖品名称",
        "required": true,
        "props": {
          "placeholder": "请输入奖品名称"
        }
      }
    },
    "value": {}
  },
  "activityImgTableTwo": {
    "isFlatAction": true,
    "getDataMap": {
      "total": "",
      "list": ""
    },
    "data": [],
    "columns": [
      {
        "customRender": function (data) {
              return h(HmAntIconText, {
                fontSize: "14px",
                iconSize: "16px",
                bgColorText: "transparent",
                width: "100%",
                display: "flex",
                alignItems: "center",
                text: "",
                placement: "top",
                img: self.getImg(data.record.path),
                color: "black",
                imgStyle: {
                  height: "32px",
                  marginRight: "4px",
                  marginTop: "-4px",
                },
                onClick: function () {},
              });
            },
        "dataIndex": "path",
        "title": "奖品图片",
        "key": "path"
      },
      {
        "dataIndex": "name",
        "title": "奖品名称",
        "key": "name"
      },
      {
        "dataIndex": "sortNo",
        "title": "奖品排序",
        "key": "sortNo",
        "ellipsis": true
      },
      {
        "slots": {
          "customRender": "action"
        },
        "width": 80,
        "title": "操作",
        "key": "action"
      }
    ],
    "rowClassName": {},
    "paginationHidden": true,
    "actions": [
      {
        "name": "编辑",
        "icon": "fa fa-pencil",
        "callback": function(item) {        
        console.log("点击编辑: ", item);
       self.addprize.visible = true;                
      },
        "type": "link"
      },
      {
        "name": "删除",
        "icon": "fa fa-trash",
        "callback": function (item) {
                            console.log("点击删除: ", item);
      self.deleteproject.visible = true;
                        },
        "type": "link"
      }
    ]
  },
  "activityExtTwoForm": {
    "schema": {
      "type": "object",
      "properties": {
        "form": {
          "x-component": "Form",
          "x-component-props": {
            "wrapper-col": {
              "span": 14
            },
            "label-col": {
              "span": 7
            },
            "style": {
              "flexWrap": "wrap",
              "display": "flex"
            }
          },
          "type": "void",
          "properties": {}
        }
      }
    },
    "config": {
      "ActivityRequirements": {
        "style": {
          "width": "100%"
        },
        "type": "Input",
        "title": "活动需求",
        "required": false,
        "props": {
          "placeholder": "例子：2km/5km/10km"
        }
      },
      "activityType": {
        "style": {
          "width": "100%"
        },
        "type": "Input",
        "title": "活动类型",
        "required": false,
        "props": {
          "placeholder": "例子：跑步"
        }
      }
    },
    "value": {}
  },
  "activityRules": {
    "value": "",
    "toolbarConfig": {
      "toolbarKeys": [
        "blockquote",
        "bold",
        "underline",
        "italic",
        "color",
        "bgColor",
        "undo",
        "redo",
        "emotion",
        "insertLink",
        "fullScreen",
        {
          "key": "group-image",
          "title": "图片",
          "iconSvg": "<svg viewBox=\"0 0 1024 1024\"><path d=\"M959.877 128l0.123 0.123v767.775l-0.123 0.122H64.102l-0.122-0.122V128.123l0.122-0.123h895.775zM960 64H64C28.795 64 0 92.795 0 128v768c0 35.205 28.795 64 64 64h896c35.205 0 64-28.795 64-64V128c0-35.205-28.795-64-64-64zM832 288.01c0 53.023-42.988 96.01-96.01 96.01s-96.01-42.987-96.01-96.01S682.967 192 735.99 192 832 234.988 832 288.01zM896 832H128V704l224.01-384 256 320h64l224.01-192z\"></path></svg>",
          "menuKeys": [
            "insertImage",
            "uploadImage"
          ]
        },
        "fontSize",
        "fontFamily",
        "lineHeight",
        {
          "key": "group-more-style",
          "title": "更多",
          "menuKeys": [
            "through",
            "code",
            "sup",
            "sub",
            "clearStyle"
          ]
        },
        "bulletedList",
        "numberedList",
        "headerSelect",
        {
          "key": "group-justify",
          "title": "对齐",
          "menuKeys": [
            "justifyLeft",
            "justifyRight",
            "justifyCenter",
            "justifyJustify"
          ]
        },
        {
          "key": "group-indent",
          "title": "缩进",
          "menuKeys": [
            "indent",
            "delIndent"
          ]
        },
        "todo",
        "divider",
        "codeBlock",
        "insertTable"
      ],
      "excludeKeys": []
    },
    "editorConfig": {
      "placeholder": "请输入...",
      "readOnly": false,
      "autoFocus": true,
      "scroll": true,
      "height": "300px",
      "MENU_CONF": {
        "uploadImage": {
          "server": "/api/upload",
          "fieldName": "file",
          "headers": {}
        },
        "uploadVideo": {
          "server": "/api/upload",
          "fieldName": "file",
          "headers": {}
        }
      }
    }
  },
  "0303a115-4a17-41e3-b32a-c1d017db3f97": {
    "value": "",
    "toolbarConfig": {
      "toolbarKeys": [
        "blockquote",
        "bold",
        "underline",
        "italic",
        "color",
        "bgColor",
        "undo",
        "redo",
        "emotion",
        "insertLink",
        "fullScreen",
        {
          "key": "group-image",
          "title": "图片",
          "iconSvg": "<svg viewBox=\"0 0 1024 1024\"><path d=\"M959.877 128l0.123 0.123v767.775l-0.123 0.122H64.102l-0.122-0.122V128.123l0.122-0.123h895.775zM960 64H64C28.795 64 0 92.795 0 128v768c0 35.205 28.795 64 64 64h896c35.205 0 64-28.795 64-64V128c0-35.205-28.795-64-64-64zM832 288.01c0 53.023-42.988 96.01-96.01 96.01s-96.01-42.987-96.01-96.01S682.967 192 735.99 192 832 234.988 832 288.01zM896 832H128V704l224.01-384 256 320h64l224.01-192z\"></path></svg>",
          "menuKeys": [
            "insertImage",
            "uploadImage"
          ]
        },
        "fontSize",
        "fontFamily",
        "lineHeight",
        {
          "key": "group-more-style",
          "title": "更多",
          "menuKeys": [
            "through",
            "code",
            "sup",
            "sub",
            "clearStyle"
          ]
        },
        "bulletedList",
        "numberedList",
        "headerSelect",
        {
          "key": "group-justify",
          "title": "对齐",
          "menuKeys": [
            "justifyLeft",
            "justifyRight",
            "justifyCenter",
            "justifyJustify"
          ]
        },
        {
          "key": "group-indent",
          "title": "缩进",
          "menuKeys": [
            "indent",
            "delIndent"
          ]
        },
        "todo",
        "divider",
        "codeBlock",
        "insertTable"
      ],
      "excludeKeys": []
    }
  },
  "c55fbae6-544d-46d6-a83a-73b92291b38d": {
    "schema": {
      "type": "object",
      "properties": {
        "form": {
          "x-component": "Form",
          "x-component-props": {
            "wrapper-col": {
              "span": 14
            },
            "label-col": {
              "span": 7
            },
            "style": {
              "flexWrap": "wrap",
              "display": "flex"
            }
          },
          "type": "void",
          "properties": {}
        }
      }
    },
    "config": {
      "sortNo": {
        "style": {
          "width": "100%"
        },
        "type": "InputNumber",
        "title": "排序",
        "required": true,
        "props": {
          "placeholder": "图片序号"
        }
      },
      "size": {
        "style": {
          "width": "100%"
        },
        "type": "Input",
        "title": "参考尺寸",
        "required": true,
        "props": {
          "placeholder": "请输入"
        }
      },
      " name": {
        "style": {
          "width": "100%"
        },
        "type": "UploadImage",
        "title": "背景图片",
        "maxCount": 1,
        "listType": "picture-card",
        "required": true,
        "props": {}
      }
    },
    "value": {}
  },
  "activityImgTableOne": {
    "isFlatAction": true,
    "getDataMap": {
      "total": "",
      "list": ""
    },
    "data": [
      {
        "address": "",
        "school": "",
        "name": "¥0",
        "key": "1",
        "age": "",
        "sexual": ""
      },
      {
        "address": "",
        "school": "",
        "name": "¥ 29.9",
        "key": "2",
        "age": "",
        "sexual": ""
      }
    ],
    "columns": [
      {
        "dataIndex": "name",
        "width": 50,
        "title": "图片",
        "key": "name"
      },
      {
        "dataIndex": "age",
        "width": 90,
        "title": "参考尺寸（或使用二倍图）",
        "key": "age"
      },
      {
        "dataIndex": "address",
        "width": 40,
        "title": "图片排序",
        "key": "address",
        "ellipsis": true
      },
      {
        "slots": {
          "customRender": "action"
        },
        "width": 80,
        "title": "操作",
        "key": "action"
      }
    ],
    "rowClassName": {},
    "paginationHidden": true,
    "actions": [
      {
        "name": "编辑",
        "icon": "fa fa-pencil",
        "callback": function(item) {        
        console.log("点击编辑: ", item);
       self.addBackground.visible = true;                
      },
        "type": "link"
      },
      {
        "name": "删除",
        "icon": "fa fa-trash",
        "callback": function (item) {
                            console.log("点击删除: ", item);
      self.deleteproject.visible = true;
                        },
        "type": "link"
      }
    ]
  },
  "sharingImageTable": {
    "isFlatAction": true,
    "getDataMap": {
      "total": "",
      "list": ""
    },
    "data": [
      {
        "image": "",
        "size": "375 * 667"
      },
      {
        "image": "",
        "size": "375 * 667"
      }
    ],
    "columns": [
      {
        "dataIndex": "image",
        "width": 180,
        "title": "图片",
        "key": "image"
      },
      {
        "dataIndex": "size",
        "title": "参考尺寸",
        "key": "size"
      },
      {
        "slots": {
          "customRender": "action"
        },
        "width": 180,
        "title": "操作",
        "key": "action"
      }
    ],
    "rowClassName": {},
    "paginationHidden": true,
    "actions": [
      {
        "name": "编辑",
        "icon": "fa fa-pencil",
        "callback": function(item) {        
        console.log("点击编辑: ", item);
             self.sharingImageSettings.visible = true;
      },
        "type": "link"
      }
    ]
  },
  "89787e21-f9a9-487d-b055-c327bec09efd": {
    "schema": {
      "type": "object",
      "properties": {
        "form": {
          "x-component": "Form",
          "x-component-props": {
            "wrapper-col": {
              "span": 14
            },
            "label-col": {
              "span": 7
            },
            "style": {
              "flexWrap": "wrap",
              "display": "flex"
            }
          },
          "type": "void",
          "properties": {}
        }
      }
    },
    "config": {
      "size": {
        "style": {
          "width": "100%"
        },
        "type": "Input",
        "title": "参考尺寸",
        "required": true,
        "props": {}
      },
      "imgPath": {
        "style": {
          "width": "100%"
        },
        "type": "UploadImage",
        "title": "图片",
        "required": true,
        "props": {
          "action": "/api/sys/common/upload",
          "accept": ".jpg,.png"
        }
      }
    },
    "value": {}
  }
};
  },
  watch: {
  },
    async mounted(e) {
      this.onMounted(e);
    },
  methods:{
    onMounted() {
  let self = this
  self.type = parseInt(self.$route.query.type)
  self.addActivityProject = async function() {
    await self.$refs.activityProjectForm.validate()
  }
  self.getImg = function(url) {
    if (!url) {
      return self.$logImage || ""
    }
    if (url.substring(0, 4) === 'http') {
      return url
    }
    return `/api/sys/common/static/${url}`;
  }
},

    onAddBtn1Click () {
  this.addproject.visible = true;
},
    onAddprojectCancel () {
    this.addproject.visible=false
},
    onAddprojectOk() {
        addActivityProject(this, arguments);
      },
    onAddBtn2Click () {
  this.addprize.visible = true;
},
    onAddprizeCancel () {
  this.addprize.visible=false
},
    async onAddprizeOk () {
  let self = this
  await self.$refs.addActivityImgFormTwo.validate()
  let item = self.$refs.addActivityImgFormTwo.getFormValues()
  item.index = Math.floor(Math.random() * 10000)

  //处理图片
  if (item.imgPath?.file?.response?.message) {
    item.imgPath = item.imgPath?.file?.response?.message
  }
  self.$refs.activityImgTableTwo.cData.push(item)

  self.addprize.visible = false
  self.$refs.addActivityImgFormTwo.reset()
},
    onAddBtn3Click () {
  this.addBackground.visible = true;
},
    onEle78Fb256892504A78987DC766B916F771Click() {
        addActivty(this, arguments);
      }
  }
};
</script>

<style lang="less" scoped>
.page {
  
}

.ele-wrapper-e37fdb24-4953-4f7d-af46-b1aa9d4f1737 {
  width:100%;
}

.ele-wrapper-titleCard {
  width:100%;
border-bottom:1px solid #f2f2f2;
.ele-titleCard{
display: flex;
    align-items: center;
    justify-content: space-between;
}
}

.ele-wrapper-80d9b125-92bb-46b5-87b7-d8b4b451d860 {
  .hm-bg-text{
    display: flex;
    align-items: center;
}
}

.ele-wrapper-message_1 {
  width:100%;
.ele-message_1{
display: flex;
}
}

.ele-wrapper-011df7de-b51d-49df-8693-f8313670d460 {
  width:50%;
border-right:1px solid #f2f2f2;
}

.ele-wrapper-bf252f1b-c63f-43d8-b3da-2dc087a9f832 {
  border-left:4px solid #0079fe;
padding-left: 5px;
.hm-bg-text{
    font-weight: 700;
}
}

.ele-wrapper-activityForm {
  margin-top:15px;
/deep/.ant-calendar-picker{
width:100%;
}
}

.ele-wrapper-824a7f59-7158-4b84-a954-01cbeb3c4180 {
  width:100%;
margin-top:5px;
}

.ele-wrapper-42f5eb5a-31b3-4f7a-8ddd-9bb948ae5a17 {
  border-left:4px solid #0079fe;
padding-left: 5px;
.hm-bg-text{
    font-weight: 700;
}
}

.ele-wrapper-addBtn1 {
  margin-left:5px;
}

.ele-wrapper-addproject {
  /deep/.hm-modal{
min-height: 0px; 
}
}

.ele-wrapper-activityProjectForm {
  height:100%;
}

.ele-wrapper-deleteproject {
  /deep/.hm-modal{
min-height: 0px; 
}
}

.ele-wrapper-678d6f52-6548-4f95-b813-d079ff38bb6f {
  width:100%;
}

.ele-wrapper-2030f92c-96b3-41e7-8403-353b98f5e6a6 {
  border-left:4px solid #0079fe;
margin-top:15px;
padding-left: 5px;
.hm-bg-text{
    font-weight: 700;
}
}

.ele-wrapper-addBtn2 {
  margin-left:5px;
margin-top:15px;
}

.ele-wrapper-addprize {
  /deep/.hm-modal{
min-height: 0px; 
}
}

.ele-wrapper-ee49ad6d-dd0f-4f85-8ed8-dd1b1b7af98c {
  width:100%;
}

.ele-wrapper-e3996ba6-7678-4de0-abea-832a2097c2c9 {
  width:100%;
}

.ele-wrapper-37b100fe-30bf-47b0-9bed-b98bbfebd6f1 {
  border-left:4px solid #0079fe;
margin-top:15px;
padding-left: 5px;
.hm-bg-text{
    font-weight: 700;
}
}

.ele-wrapper-activityExtTwoForm {
  width:100%;
margin-top:20px;
}

.ele-wrapper-633b539d-81dc-4e94-af68-dfba9182db48 {
  border-left:4px solid #0079fe;
margin-top:15px;
padding-left: 5px;
.hm-bg-text{
    font-weight: 700;
}
}

.ele-wrapper-81d9459e-4453-4843-b712-3c112a5e0a41 {
  width:100%;
}

.ele-wrapper-e422be72-923b-42ad-bef4-7e886c910422 {
  margin-left:48px;
}

.ele-wrapper-activityRules {
  width:72%;
/deep/.w-e-scroll{
height:120px;
}
}

.ele-wrapper-f97dd639-1f58-44cc-99e6-def3ddf58363 {
  width:100%;
}

.ele-wrapper-04dfcec4-d289-4d3c-a977-7ed5a6ce3822 {
  margin-left:34px;
}

.ele-wrapper-0303a115-4a17-41e3-b32a-c1d017db3f97 {
  width:72%;
/deep/.w-e-scroll{
height:120px;
}
}

.ele-wrapper-848e318a-9213-4805-a8d8-7f9b336b01d5 {
  width:95%;
margin-left:43px;
margin-top:20px;
}

.ele-wrapper-message_2 {
  width:50%;
}

.ele-wrapper-fa713d7b-511f-4b6c-9f7a-37b66d33842e {
  border-left:4px solid #0079fe;
margin-left:8px;
padding-left: 5px;
.hm-bg-text{
    font-weight: 700;
}
}

.ele-wrapper-addBtn3 {
  margin-left:5px;
}

.ele-wrapper-addBackground {
  /deep/.hm-modal{
min-height: 0px; 
}
}

.ele-wrapper-89ea97da-357c-4295-9803-b1d0b63db0a2 {
  width:100%;
}

.ele-wrapper-56aec4a5-4b22-4f3e-9572-bd54033fe687 {
  border-left:4px solid #0079fe;
margin-top:15px;
margin-left:8px;
padding-left: 5px;
.hm-bg-text{
    font-weight: 700;
}
}

.ele-wrapper-3fb31f2b-4a48-499a-ba2a-8181388283b9 {
  width:100%;
}

.ele-wrapper-c9bf9691-385d-414d-864e-a07073520b33 {
  border-left:4px solid #0079fe;
margin-top:15px;
margin-left:8px;
padding-left: 5px;
.hm-bg-text{
    font-weight: 700;
}
}

.ele-wrapper-8e197d87-c68a-402f-90a7-400dc9c35edc {
  width:100%;
}

.ele-wrapper-cf8baab6-8c0a-4974-95ba-4c9e67749519 {
  width:100%;
}

.ele-wrapper-428bc034-6551-4c0e-b7c0-36c4e903ac9e {
  border-left:4px solid #0079fe;
margin-top:15px;
margin-left:8px;
padding-left: 5px;
.hm-bg-text{
    font-weight: 700;
}
}

.ele-wrapper-sharingImageSettings {
  /deep/.hm-modal{
min-height: 0px; 
}
}

.ele-wrapper-cc8ed92e-79cc-488a-9d3f-77d0a2fddce6 {
  width:100%;
border-top:1px solid #f2f2f2;
}

.ele-wrapper-78fb2568-9250-4a78-987d-c766b916f771 {
  margin-right:5px;
margin-top:10px;
.ant-btn-lg{
width:140px;
}
}

.ele-wrapper-b0a42962-4301-4b4d-9525-05bfef232b34 {
  margin-left:5px;
margin-top:10px;
.ant-btn-lg{
width:140px;
}
}

</style>
