<template>
  <div class="page card">
    <div class="page-wrapper">
      <div class="ele-wrapper ele-wrapper-e37fdb24-4953-4f7d-af46-b1aa9d4f1737">
        <hm-bg-card
          width="100%"
          height="100%"
          border-radius=""
          box-shadow-v-shadow=""
          box-shadow-blur=""
          class="ele-e37fdb24-4953-4f7d-af46-b1aa9d4f1737"
        >
          <div class="ele-wrapper ele-wrapper-titleCard">
            <hm-bg-card
              ref="titleCard"
              width="100%"
              height="100%"
              border-radius=""
              box-shadow-v-shadow=""
              box-shadow-blur=""
              class="ele-titleCard"
            >
              <div
                class="ele-wrapper ele-wrapper-80d9b125-92bb-46b5-87b7-d8b4b451d860"
              >
                <hm-ant-icon-text
                  text="创建活动"
                  icon="fa fa-tasks"
                  font-size="14px"
                  class="ele-80d9b125-92bb-46b5-87b7-d8b4b451d860"
                >
                </hm-ant-icon-text>
              </div>
              <div
                class="ele-wrapper ele-wrapper-230f0090-9b76-4e5d-9556-f91759f40cf8"
              >
                <hm-ant-bg-text
                  text="* 为必填项"
                  font-size="14px"
                  color="#999999"
                >
                </hm-ant-bg-text>
              </div>
            </hm-bg-card>
          </div>
          <div class="ele-wrapper ele-wrapper-message_1">
            <hm-bg-card
              ref="message_1"
              width="100%"
              height="100%"
              border-radius=""
              padding=""
              box-shadow-v-shadow=""
              box-shadow-blur=""
              class="ele-message_1"
            >
              <div
                class="ele-wrapper ele-wrapper-011df7de-b51d-49df-8693-f8313670d460"
              >
                <hm-bg-card
                  width="100%"
                  height="100%"
                  border-radius=""
                  box-shadow-v-shadow=""
                  box-shadow-blur=""
                  class="ele-011df7de-b51d-49df-8693-f8313670d460"
                >
                  <div
                    class="ele-wrapper ele-wrapper-bf252f1b-c63f-43d8-b3da-2dc087a9f832"
                  >
                    <hm-ant-bg-text
                      text="基本信息"
                      font-size="14px"
                      padding="2"
                      class="ele-bf252f1b-c63f-43d8-b3da-2dc087a9f832"
                    >
                    </hm-ant-bg-text>
                  </div>
                  <div class="ele-wrapper ele-wrapper-activityForm">
                    <hm-ant-formily
                      ref="activityForm"
                      :config="activityForm.config"
                      v-model:value="activityForm.value"
                      :col-num="0"
                      :col-min-width="380"
                      :label-col="3"
                      :wrapper-col="16"
                      class="ele-activityForm"
                    >
                    </hm-ant-formily>
                  </div>
                  <div
                    class="ele-wrapper ele-wrapper-824a7f59-7158-4b84-a954-01cbeb3c4180"
                  >
                    <hm-bg-card
                      width="100%"
                      height="100%"
                      border-radius=""
                      box-shadow-v-shadow=""
                      box-shadow-blur=""
                      class="ele-824a7f59-7158-4b84-a954-01cbeb3c4180"
                    >
                      <div
                        class="ele-wrapper ele-wrapper-42f5eb5a-31b3-4f7a-8ddd-9bb948ae5a17"
                      >
                        <hm-ant-bg-text
                          text="活动项目设置（至少一个）"
                          font-size="14px"
                          padding="2"
                          class="ele-42f5eb5a-31b3-4f7a-8ddd-9bb948ae5a17"
                        >
                        </hm-ant-bg-text>
                      </div>
                      <div class="ele-wrapper ele-wrapper-addBtn1">
                        <hm-ant-button
                          ref="addBtn1"
                          text="添加"
                          :type="'primary'"
                          icon="fa fa-plus"
                          @click="onAddBtn1Click"
                          class="ele-addBtn1"
                        >
                        </hm-ant-button>
                      </div>
                      <div class="ele-wrapper ele-wrapper-addproject">
                        <hm-modal
                          ref="addproject"
                          title="添加项目"
                          v-model:visible="addproject.visible"
                          :z-index="1000"
                          height="240px"
                          :style="addproject.style"
                          class="ele-addproject"
                        >
                          <div
                            class="ele-wrapper ele-wrapper-7c1be11a-b36f-498c-ba73-bcabfe46ade4"
                          >
                            <hm-ant-formily
                              :config="{
                                ' name': {
                                  type: 'Input',
                                  title: '项目费用',
                                  style: { width: '100%' },
                                  required: true,
                                  props: {},
                                },
                                cycle: {
                                  type: 'Input',
                                  title: '活动项目名称',
                                  style: { width: '100%' },
                                  required: true,
                                  props: {},
                                },
                                EntryClose: {
                                  type: 'Textarea',
                                  title: '项目简介',
                                  style: { width: '100%' },
                                  required: true,
                                  props: {},
                                },
                              }"
                              :value="{}"
                              :col-num="0"
                              :col-min-width="380"
                              :schema="{
                                type: 'object',
                                properties: {
                                  form: {
                                    type: 'void',
                                    'x-component': 'Form',
                                    'x-component-props': {
                                      style: {
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                      },
                                      'label-col': { span: 7 },
                                      'wrapper-col': { span: 14 },
                                    },
                                    properties: {},
                                  },
                                },
                              }"
                              :label-col="6"
                              :wrapper-col="16"
                              class="ele-7c1be11a-b36f-498c-ba73-bcabfe46ade4"
                            >
                            </hm-ant-formily>
                          </div>
                        </hm-modal>
                      </div>
                      <div class="ele-wrapper ele-wrapper-deleteproject">
                        <hm-modal
                          ref="deleteproject"
                          title="删除"
                          v-model:visible="deleteproject.visible"
                          width="320px"
                          :z-index="1000"
                          height=""
                          :style="deleteproject.style"
                          class="ele-deleteproject"
                        >
                          <div class="ele-wrapper ele-wrapper-delText">
                            <hm-ant-icon-text
                              ref="delText"
                              text="确认删除"
                              icon=""
                              width="270px"
                            >
                            </hm-ant-icon-text>
                          </div>
                        </hm-modal>
                      </div>
                      <div
                        class="ele-wrapper ele-wrapper-678d6f52-6548-4f95-b813-d079ff38bb6f"
                      >
                        <hm-bg-card
                          width="100%"
                          height="100%"
                          border-radius=""
                          box-shadow-v-shadow=""
                          box-shadow-blur=""
                          class="ele-678d6f52-6548-4f95-b813-d079ff38bb6f"
                        >
                          <div
                            class="ele-wrapper ele-wrapper-activityProjectTable"
                          >
                            <hm-ant-table
                              ref="activityProjectTable"
                              :columns="activityProjectTable.columns"
                              :data="activityProjectTable.data"
                              :pagination-hidden="
                                activityProjectTable.paginationHidden
                              "
                              :actions="activityProjectTable.actions"
                              :is-flat-action="
                                activityProjectTable.isFlatAction
                              "
                              :row-class-name="
                                activityProjectTable.rowClassName
                              "
                            >
                            </hm-ant-table>
                          </div>
                          <div
                            class="ele-wrapper ele-wrapper-2030f92c-96b3-41e7-8403-353b98f5e6a6"
                          >
                            <hm-ant-bg-text
                              text="活动奖品设置（可为空）"
                              font-size="14px"
                              padding="2"
                              class="ele-2030f92c-96b3-41e7-8403-353b98f5e6a6"
                            >
                            </hm-ant-bg-text>
                          </div>
                          <div class="ele-wrapper ele-wrapper-addBtn2">
                            <hm-ant-button
                              ref="addBtn2"
                              text="添加"
                              :type="'primary'"
                              icon="fa fa-plus"
                              @click="onAddBtn2Click"
                              class="ele-addBtn2"
                            >
                            </hm-ant-button>
                          </div>
                          <div class="ele-wrapper ele-wrapper-addprize">
                            <hm-modal
                              ref="addprize"
                              v-model:visible="addprize.visible"
                              :z-index="1000"
                              height="250px"
                              :style="addprize.style"
                              class="ele-addprize"
                            >
                              <div
                                class="ele-wrapper ele-wrapper-ce088f7d-9e0e-4dd9-9a1a-ad56ec58b79b"
                              >
                                <hm-ant-formily
                                  :config="{
                                    cycle: {
                                      type: 'Input',
                                      title: '活动项目名称',
                                      style: { width: '100%' },
                                      required: true,
                                      props: { placeholder: '请输入活动名称' },
                                    },
                                    ' name': {
                                      type: 'UploadImage',
                                      title: '项目费用',
                                      style: { width: '100%' },
                                      required: true,
                                      maxCount: 1,
                                      listType: 'picture-card',
                                      props: {},
                                    },
                                  }"
                                  :value="{}"
                                  :col-num="0"
                                  :col-min-width="380"
                                  :schema="{
                                    type: 'object',
                                    properties: {
                                      form: {
                                        type: 'void',
                                        'x-component': 'Form',
                                        'x-component-props': {
                                          style: {
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                          },
                                          'label-col': { span: 7 },
                                          'wrapper-col': { span: 14 },
                                        },
                                        properties: {},
                                      },
                                    },
                                  }"
                                  :label-col="7"
                                  :wrapper-col="14"
                                >
                                </hm-ant-formily>
                              </div>
                            </hm-modal>
                          </div>
                          <div
                            class="ele-wrapper ele-wrapper-ee49ad6d-dd0f-4f85-8ed8-dd1b1b7af98c"
                          >
                            <hm-bg-card
                              width="100%"
                              height="100%"
                              border-radius=""
                              box-shadow-v-shadow=""
                              box-shadow-blur=""
                              class="ele-ee49ad6d-dd0f-4f85-8ed8-dd1b1b7af98c"
                            >
                              <div
                                class="ele-wrapper ele-wrapper-activityImgTableTwo"
                              >
                                <hm-ant-table
                                  ref="activityImgTableTwo"
                                  :columns="activityImgTableTwo.columns"
                                  :data="activityImgTableTwo.data"
                                  :pagination-hidden="
                                    activityImgTableTwo.paginationHidden
                                  "
                                  :actions="activityImgTableTwo.actions"
                                  :is-flat-action="
                                    activityImgTableTwo.isFlatAction
                                  "
                                  :row-class-name="
                                    activityImgTableTwo.rowClassName
                                  "
                                >
                                </hm-ant-table>
                              </div>
                            </hm-bg-card>
                          </div>
                          <div
                            class="ele-wrapper ele-wrapper-633b539d-81dc-4e94-af68-dfba9182db48"
                          >
                            <hm-ant-bg-text
                              text="活动信息"
                              font-size="14px"
                              padding="2"
                              class="ele-633b539d-81dc-4e94-af68-dfba9182db48"
                            >
                            </hm-ant-bg-text>
                          </div>
                          <div
                            class="ele-wrapper ele-wrapper-81d9459e-4453-4843-b712-3c112a5e0a41"
                          >
                            <hm-bg-card
                              width="100%"
                              height="100%"
                              border-radius=""
                              box-shadow-v-shadow=""
                              box-shadow-blur=""
                              class="ele-81d9459e-4453-4843-b712-3c112a5e0a41"
                            >
                              <div
                                class="ele-wrapper ele-wrapper-activityExtForm"
                              >
                                <hm-ant-formily
                                  ref="activityExtForm"
                                  :config="activityExtForm.config"
                                  v-model:value="activityExtForm.value"
                                  :col-num="0"
                                  :col-min-width="380"
                                  :label-col="5"
                                  :wrapper-col="18"
                                  class="ele-activityExtForm"
                                >
                                </hm-ant-formily>
                              </div>
                            </hm-bg-card>
                          </div>
                        </hm-bg-card>
                      </div>
                    </hm-bg-card>
                  </div>
                </hm-bg-card>
              </div>
              <div class="ele-wrapper ele-wrapper-message_2">
                <hm-bg-card
                  ref="message_2"
                  width="100%"
                  height="100%"
                  border-radius=""
                  box-shadow-v-shadow=""
                  box-shadow-blur=""
                  class="ele-message_2"
                >
                  <div
                    class="ele-wrapper ele-wrapper-fa713d7b-511f-4b6c-9f7a-37b66d33842e"
                  >
                    <hm-ant-bg-text
                      text="报名页背景设置"
                      font-size="14px"
                      padding="2"
                      class="ele-fa713d7b-511f-4b6c-9f7a-37b66d33842e"
                    >
                    </hm-ant-bg-text>
                  </div>
                  <div class="ele-wrapper ele-wrapper-addBtn3">
                    <hm-ant-button
                      ref="addBtn3"
                      text="添加"
                      :type="'primary'"
                      icon="fa fa-plus"
                      @click="onAddBtn3Click"
                      class="ele-addBtn3"
                    >
                    </hm-ant-button>
                  </div>
                  <div class="ele-wrapper ele-wrapper-addBackground">
                    <hm-modal
                      ref="addBackground"
                      v-model:visible="addBackground.visible"
                      :z-index="1000"
                      height="250px"
                      :style="addBackground.style"
                      class="ele-addBackground"
                    >
                      <div
                        class="ele-wrapper ele-wrapper-c55fbae6-544d-46d6-a83a-73b92291b38d"
                      >
                        <hm-ant-formily
                          :config="{
                            cycle: {
                              type: 'Input',
                              title: '参考尺寸',
                              style: { width: '100%' },
                              required: true,
                              props: { placeholder: '请输入' },
                            },
                            ' name': {
                              type: 'UploadImage',
                              title: '背景图片',
                              style: { width: '100%' },
                              required: true,
                              maxCount: 1,
                              listType: 'picture-card',
                              props: {},
                            },
                          }"
                          :value="{}"
                          :col-num="0"
                          :col-min-width="380"
                          :schema="{
                            type: 'object',
                            properties: {
                              form: {
                                type: 'void',
                                'x-component': 'Form',
                                'x-component-props': {
                                  style: { display: 'flex', flexWrap: 'wrap' },
                                  'label-col': { span: 7 },
                                  'wrapper-col': { span: 14 },
                                },
                                properties: {},
                              },
                            },
                          }"
                          :label-col="7"
                          :wrapper-col="14"
                        >
                        </hm-ant-formily>
                      </div>
                    </hm-modal>
                  </div>
                  <div
                    class="ele-wrapper ele-wrapper-89ea97da-357c-4295-9803-b1d0b63db0a2"
                  >
                    <hm-bg-card
                      width="100%"
                      height="100%"
                      border-radius=""
                      box-shadow-v-shadow=""
                      box-shadow-blur=""
                      class="ele-89ea97da-357c-4295-9803-b1d0b63db0a2"
                    >
                      <div class="ele-wrapper ele-wrapper-activityImgTableOne">
                        <hm-ant-table
                          ref="activityImgTableOne"
                          :columns="activityImgTableOne.columns"
                          :data="activityImgTableOne.data"
                          :pagination-hidden="
                            activityImgTableOne.paginationHidden
                          "
                          :actions="activityImgTableOne.actions"
                          :is-flat-action="activityImgTableOne.isFlatAction"
                          :row-class-name="activityImgTableOne.rowClassName"
                        >
                        </hm-ant-table>
                      </div>
                    </hm-bg-card>
                  </div>
                  <div
                    class="ele-wrapper ele-wrapper-56aec4a5-4b22-4f3e-9572-bd54033fe687"
                  >
                    <hm-ant-bg-text
                      text="报名页信息框颜色设置"
                      font-size="14px"
                      padding="2"
                      class="ele-56aec4a5-4b22-4f3e-9572-bd54033fe687"
                    >
                    </hm-ant-bg-text>
                  </div>
                  <div
                    class="ele-wrapper ele-wrapper-3fb31f2b-4a48-499a-ba2a-8181388283b9"
                  >
                    <hm-bg-card
                      width="100%"
                      height="100%"
                      border-radius=""
                      box-shadow-v-shadow=""
                      box-shadow-blur=""
                      class="ele-3fb31f2b-4a48-499a-ba2a-8181388283b9"
                    >
                      <div
                        class="ele-wrapper ele-wrapper-79de068d-0a6b-4f11-8574-d654a6df22b7"
                      >
                        <hm-color-kit> </hm-color-kit>
                      </div>
                    </hm-bg-card>
                  </div>
                  <div
                    class="ele-wrapper ele-wrapper-c9bf9691-385d-414d-864e-a07073520b33"
                  >
                    <hm-ant-bg-text
                      text="报名页信息框字体颜色设置"
                      font-size="14px"
                      padding="2"
                      class="ele-c9bf9691-385d-414d-864e-a07073520b33"
                    >
                    </hm-ant-bg-text>
                  </div>
                  <div
                    class="ele-wrapper ele-wrapper-8e197d87-c68a-402f-90a7-400dc9c35edc"
                  >
                    <hm-bg-card
                      width="100%"
                      height="100%"
                      border-radius=""
                      box-shadow-v-shadow=""
                      box-shadow-blur=""
                      class="ele-8e197d87-c68a-402f-90a7-400dc9c35edc"
                    >
                      <div
                        class="ele-wrapper ele-wrapper-b661ec59-8ff2-4a70-ba98-06e70d33bc68"
                      >
                        <hm-color-kit> </hm-color-kit>
                      </div>
                    </hm-bg-card>
                  </div>
                </hm-bg-card>
              </div>
            </hm-bg-card>
          </div>
          <div
            class="ele-wrapper ele-wrapper-cc8ed92e-79cc-488a-9d3f-77d0a2fddce6"
          >
            <hm-bg-card
              width="100%"
              height="100%"
              border-radius=""
              :text-align="'center'"
              class="ele-cc8ed92e-79cc-488a-9d3f-77d0a2fddce6"
            >
              <div
                class="ele-wrapper ele-wrapper-78fb2568-9250-4a78-987d-c766b916f771"
              >
                <hm-ant-button
                  text="创建活动"
                  :type="'primary'"
                  :size="'large'"
                  icon="fa fa-check-circle"
                  @click="onEle78Fb256892504A78987DC766B916F771Click"
                  class="ele-78fb2568-9250-4a78-987d-c766b916f771"
                >
                </hm-ant-button>
              </div>
              <div
                class="ele-wrapper ele-wrapper-b0a42962-4301-4b4d-9525-05bfef232b34"
              >
                <hm-ant-button
                  text="重置"
                  :type="'primary'"
                  :size="'large'"
                  :ghost="true"
                  icon="fa fa-repeat"
                  class="ele-b0a42962-4301-4b4d-9525-05bfef232b34"
                >
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
import { h } from "vue";
import HmBgCard from "/@/components/built-in/layout/HmBgCard.vue";
import HmAntIconText from "/@/components/built-in/jeecg/HmAntIconText.vue";
import HmAntBgText from "/@/components/built-in/jeecg/HmAntBgText.vue";
import HmAntFormily from "/@/components/built-in/jeecg/HmAntFormily.vue";
import HmAntButton from "/@/components/built-in/jeecg/HmAntButton.vue";
import HmModal from "/@/components/built-in/layout/HmModal.vue";
import HmAntTable from "/@/components/built-in/jeecg/HmAntTable.vue";
import HmColorKit from "/@/components/built-in/jeecg/HmColorKit.vue";

import { addActivty } from "/@/logics/ActivityForm";

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
    HmColorKit,
  },
  data() {
    let self = this;
    return {
      activityForm: {
        config: {
          name: {
            style: {
              width: "100%",
            },
            type: "Input",
            title: "活动名称",
            required: true,
            props: {},
          },
          cycle: {
            style: {
              width: "100%",
            },
            type: "RangePicker",
            title: "活动周期",
            required: true,
            props: {},
          },
          closeTime: {
            style: {
              width: "100%",
            },
            type: "DatePicker",
            title: "报名截止",
            required: true,
            props: {
              showTime: true,
            },
          },
          pickUpTime: {
            style: {
              width: "100%",
            },
            type: "DatePicker",
            title: "核销截止",
            required: true,
            props: {
              showTime: true,
            },
          },
          status: {
            style: {
              width: "100%",
            },
            type: "RadioGroup",
            title: "活动状态",
            required: true,
            props: {
              options: [
                {
                  label: "启用",
                  value: 0,
                },
                {
                  label: "禁用",
                  value: 1,
                },
              ],
              "": 0,
            },
          },
        },
        value: {},
      },
      addproject: {
        visible: false,
        style: {
          top: "100px",
        },
      },
      addprize: {
        visible: false,
        style: {
          top: "100px",
        },
      },
      addBackground: {
        visible: false,
        style: {
          top: "100px",
        },
      },
      deleteproject: {
        visible: false,
        style: {
          top: "100px",
        },
      },
      "7c1be11a-b36f-498c-ba73-bcabfe46ade4": {
        config: {
          " name": {
            type: "Input",
            title: "项目费用",
            style: {
              width: "100%",
            },
            required: true,
            props: {},
          },
          cycle: {
            type: "Input",
            title: "活动项目名称",
            style: {
              width: "100%",
            },
            required: true,
            props: {},
          },
          EntryClose: {
            type: "Textarea",
            title: "项目简介",
            style: {
              width: "100%",
            },
            required: true,
            props: {},
          },
        },
        value: {},
        schema: {
          type: "object",
          properties: {
            form: {
              type: "void",
              "x-component": "Form",
              "x-component-props": {
                style: {
                  display: "flex",
                  flexWrap: "wrap",
                },
                "label-col": {
                  span: 7,
                },
                "wrapper-col": {
                  span: 14,
                },
              },
              properties: {},
            },
          },
        },
      },
      activityProjectTable: {
        columns: [
          {
            title: "项目费用",
            dataIndex: "name",
            key: "name",
            width: 50,
          },
          {
            title: "活动项目名称",
            dataIndex: "age",
            key: "age",
            width: 90,
          },
          {
            title: "项目简历",
            dataIndex: "address",
            key: "address",
            ellipsis: true,
            width: 70,
          },
          {
            title: "排序",
            dataIndex: "sexual",
            key: "sexual",
            ellipsis: true,
            width: 30,
          },
          {
            title: "操作",
            key: "action",
            slots: {
              customRender: "action",
            },
            width: 100,
          },
        ],
        data: [
          {
            key: "1",
            name: "¥0",
            age: "",
            address: "",
            sexual: "",
            school: "",
          },
          {
            key: "2",
            name: "¥ 29.9",
            age: "",
            address: "",
            sexual: "",
            school: "",
          },
        ],
        paginationHidden: true,
        actions: [
          {
            name: "编辑",
            type: "link",
            icon: "fa fa-pencil",
          },
          {
            name: "删除",
            type: "link",
            icon: "fa fa-trash",
          },
        ],
        isFlatAction: true,
        rowClassName: {},
      },
      "ce088f7d-9e0e-4dd9-9a1a-ad56ec58b79b": {
        config: {
          cycle: {
            type: "Input",
            title: "活动项目名称",
            style: {
              width: "100%",
            },
            required: true,
            props: {
              placeholder: "请输入活动名称",
            },
          },
          " name": {
            type: "UploadImage",
            title: "项目费用",
            style: {
              width: "100%",
            },
            required: true,
            maxCount: 1,
            listType: "picture-card",
            props: {},
          },
        },
        value: {},
        schema: {
          type: "object",
          properties: {
            form: {
              type: "void",
              "x-component": "Form",
              "x-component-props": {
                style: {
                  display: "flex",
                  flexWrap: "wrap",
                },
                "label-col": {
                  span: 7,
                },
                "wrapper-col": {
                  span: 14,
                },
              },
              properties: {},
            },
          },
        },
      },
      activityImgTableTwo: {
        columns: [
          {
            title: "奖品图片",
            dataIndex: "name",
            key: "name",
            width: 50,
          },
          {
            title: "奖品名称",
            dataIndex: "age",
            key: "age",
            width: 90,
          },
          {
            title: "奖品排序",
            dataIndex: "address",
            key: "address",
            ellipsis: true,
            width: 30,
          },
          {
            title: "操作",
            key: "action",
            slots: {
              customRender: "action",
            },
            width: 80,
          },
        ],
        data: [
          {
            key: "1",
            name: "",
            age: "",
            address: "1",
            sexual: "",
            school: "",
          },
          {
            key: "2",
            name: "",
            age: "",
            address: "2",
            sexual: "",
            school: "",
          },
          {
            key: "3",
            name: "",
            age: "",
            address: "3",
            sexual: "",
            school: "",
          },
        ],
        paginationHidden: true,
        actions: [
          {
            name: "编辑",
            type: "link",
            icon: "fa fa-pencil",
          },
          {
            name: "删除",
            type: "link",
            icon: "fa fa-trash",
          },
        ],
        isFlatAction: true,
        rowClassName: {},
      },
      activityExtForm: {
        config: {
          activityRules: {
            style: {
              width: "100%",
            },
            type: "Textarea",
            title: "活动规则",
            props: {
              showCount: true,
              placeholder: "请输入活动规则",
            },
          },
          protocol: {
            style: {
              width: "100%",
            },
            type: "Textarea",
            title: "协议与承诺书",
            props: {
              showCount: true,
              placeholder: "请输入《活动报名用户协议及承诺书》",
            },
          },
          customerService: {
            style: {
              width: "100%",
            },
            type: "Input",
            title: "活动咨询与客服",
            props: {},
          },
        },
        value: {},
      },
      "c55fbae6-544d-46d6-a83a-73b92291b38d": {
        config: {
          cycle: {
            type: "Input",
            title: "参考尺寸",
            style: {
              width: "100%",
            },
            required: true,
            props: {
              placeholder: "请输入",
            },
          },
          " name": {
            type: "UploadImage",
            title: "背景图片",
            style: {
              width: "100%",
            },
            required: true,
            maxCount: 1,
            listType: "picture-card",
            props: {},
          },
        },
        value: {},
        schema: {
          type: "object",
          properties: {
            form: {
              type: "void",
              "x-component": "Form",
              "x-component-props": {
                style: {
                  display: "flex",
                  flexWrap: "wrap",
                },
                "label-col": {
                  span: 7,
                },
                "wrapper-col": {
                  span: 14,
                },
              },
              properties: {},
            },
          },
        },
      },
      activityImgTableOne: {
        columns: [
          {
            title: "图片",
            dataIndex: "name",
            key: "name",
            width: 50,
          },
          {
            title: "参考尺寸（或使用二倍图）",
            dataIndex: "age",
            key: "age",
            width: 90,
          },
          {
            title: "图片排序",
            dataIndex: "address",
            key: "address",
            ellipsis: true,
            width: 40,
          },
          {
            title: "操作",
            key: "action",
            slots: {
              customRender: "action",
            },
            width: 80,
          },
        ],
        data: [
          {
            key: "1",
            name: "¥0",
            age: "",
            address: "",
            sexual: "",
            school: "",
          },
          {
            key: "2",
            name: "¥ 29.9",
            age: "",
            address: "",
            sexual: "",
            school: "",
          },
        ],
        paginationHidden: true,
        actions: [
          {
            name: "编辑",
            type: "link",
            icon: "fa fa-pencil",
          },
          {
            name: "删除",
            type: "link",
            icon: "fa fa-trash",
          },
        ],
        isFlatAction: true,
        rowClassName: {},
      },
    };
  },
  watch: {},
  mounted(e) {
    this.onMounted(e);
  },
  methods: {
    onMounted() {
      let self = this;
      self.type = parseInt(self.$route.query.type);
    },

    onAddBtn1Click() {
      this.addproject.visible = true;
    },
    onAddBtn2Click() {
      this.addprize.visible = true;
    },
    onAddBtn3Click() {
      this.addBackground.visible = true;
    },
    onEle78Fb256892504A78987DC766B916F771Click() {
      addActivty(this, arguments);
    },
  },
};
</script>

<style lang="less" scoped>
.page {
}

.ele-wrapper-e37fdb24-4953-4f7d-af46-b1aa9d4f1737 {
  width: 100%;
}

.ele-wrapper-titleCard {
  width: 100%;
  border-bottom: 1px solid #f2f2f2;
  .ele-titleCard {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.ele-wrapper-80d9b125-92bb-46b5-87b7-d8b4b451d860 {
  .hm-bg-text {
    display: flex;
    align-items: center;
  }
}

.ele-wrapper-message_1 {
  width: 100%;
  .ele-message_1 {
    display: flex;
  }
}

.ele-wrapper-011df7de-b51d-49df-8693-f8313670d460 {
  width: 50%;
  border-right: 1px solid #f2f2f2;
}

.ele-wrapper-bf252f1b-c63f-43d8-b3da-2dc087a9f832 {
  border-left: 4px solid #0079fe;
  padding-left: 5px;
  .hm-bg-text {
    font-weight: 700;
  }
}

.ele-wrapper-activityForm {
  margin-top: 15px;
  /deep/.ant-calendar-picker {
    width: 100%;
  }
}

.ele-wrapper-824a7f59-7158-4b84-a954-01cbeb3c4180 {
  width: 100%;
  margin-top: 5px;
}

.ele-wrapper-42f5eb5a-31b3-4f7a-8ddd-9bb948ae5a17 {
  border-left: 4px solid #0079fe;
  padding-left: 5px;
  .hm-bg-text {
    font-weight: 700;
  }
}

.ele-wrapper-addBtn1 {
  margin-left: 5px;
}

.ele-wrapper-addproject {
  /deep/.hm-modal {
    min-height: 0px;
  }
}

.ele-wrapper-7c1be11a-b36f-498c-ba73-bcabfe46ade4 {
  height: 100%;
}

.ele-wrapper-deleteproject {
  /deep/.hm-modal {
    min-height: 0px;
  }
}

.ele-wrapper-678d6f52-6548-4f95-b813-d079ff38bb6f {
  width: 100%;
}

.ele-wrapper-2030f92c-96b3-41e7-8403-353b98f5e6a6 {
  border-left: 4px solid #0079fe;
  margin-top: 15px;
  padding-left: 5px;
  .hm-bg-text {
    font-weight: 700;
  }
}

.ele-wrapper-addBtn2 {
  margin-left: 5px;
  margin-top: 15px;
}

.ele-wrapper-addprize {
  /deep/.hm-modal {
    min-height: 0px;
  }
}

.ele-wrapper-ee49ad6d-dd0f-4f85-8ed8-dd1b1b7af98c {
  width: 100%;
}

.ele-wrapper-633b539d-81dc-4e94-af68-dfba9182db48 {
  border-left: 5px solid #0079fe;
  margin-top: 15px;
  padding-left: 5px;
  .hm-bg-text {
    font-weight: 700;
  }
}

.ele-wrapper-81d9459e-4453-4843-b712-3c112a5e0a41 {
  width: 100%;
}

.ele-wrapper-activityExtForm {
  width: 100%;
  margin-top: 20px;
}

.ele-wrapper-message_2 {
  width: 50%;
}

.ele-wrapper-fa713d7b-511f-4b6c-9f7a-37b66d33842e {
  border-left: 4px solid #0079fe;
  margin-left: 8px;
  padding-left: 5px;
  .hm-bg-text {
    font-weight: 700;
  }
}

.ele-wrapper-addBtn3 {
  margin-left: 5px;
}

.ele-wrapper-addBackground {
  /deep/.hm-modal {
    min-height: 0px;
  }
}

.ele-wrapper-89ea97da-357c-4295-9803-b1d0b63db0a2 {
  width: 100%;
}

.ele-wrapper-56aec4a5-4b22-4f3e-9572-bd54033fe687 {
  border-left: 4px solid #0079fe;
  margin-top: 15px;
  margin-left: 8px;
  padding-left: 5px;
  .hm-bg-text {
    font-weight: 700;
  }
}

.ele-wrapper-3fb31f2b-4a48-499a-ba2a-8181388283b9 {
  width: 100%;
}

.ele-wrapper-c9bf9691-385d-414d-864e-a07073520b33 {
  border-left: 4px solid #0079fe;
  margin-top: 15px;
  margin-left: 8px;
  padding-left: 5px;
  .hm-bg-text {
    font-weight: 700;
  }
}

.ele-wrapper-8e197d87-c68a-402f-90a7-400dc9c35edc {
  width: 100%;
}

.ele-wrapper-cc8ed92e-79cc-488a-9d3f-77d0a2fddce6 {
  width: 100%;
  border-top: 1px solid #f2f2f2;
}

.ele-wrapper-78fb2568-9250-4a78-987d-c766b916f771 {
  margin-right: 5px;
  margin-top: 10px;
  .ant-btn-lg {
    width: 140px;
  }
}

.ele-wrapper-b0a42962-4301-4b4d-9525-05bfef232b34 {
  margin-left: 5px;
  margin-top: 10px;
  .ant-btn-lg {
    width: 140px;
  }
}
</style>
