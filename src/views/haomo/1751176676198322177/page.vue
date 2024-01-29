<template>
  <div class="page card">
    <div class="page-wrapper">
      <div class="ele-wrapper ele-wrapper-e37fdb24-4953-4f7d-af46-b1aa9d4f1737">
        <hm-bg-card
          box-shadow-blur=""
          box-shadow-v-shadow=""
          border-radius=""
          width="100%"
          height="100%"
          class="ele-e37fdb24-4953-4f7d-af46-b1aa9d4f1737"
        >
          <div class="ele-wrapper ele-wrapper-titleCard">
            <hm-bg-card
              ref="titleCard"
              box-shadow-blur=""
              box-shadow-v-shadow=""
              border-radius=""
              width="100%"
              height="100%"
              class="ele-titleCard"
            >
              <div
                class="ele-wrapper ele-wrapper-80d9b125-92bb-46b5-87b7-d8b4b451d860"
              >
                <hm-ant-icon-text
                  icon="fa fa-tasks"
                  font-size="14px"
                  text="创建活动"
                  class="ele-80d9b125-92bb-46b5-87b7-d8b4b451d860"
                >
                </hm-ant-icon-text>
              </div>
              <div
                class="ele-wrapper ele-wrapper-230f0090-9b76-4e5d-9556-f91759f40cf8"
              >
                <hm-ant-bg-text
                  color="#999999"
                  font-size="14px"
                  text="* 为必填项"
                >
                </hm-ant-bg-text>
              </div>
            </hm-bg-card>
          </div>
          <div class="ele-wrapper ele-wrapper-message_1">
            <hm-bg-card
              ref="message_1"
              padding=""
              box-shadow-blur=""
              box-shadow-v-shadow=""
              border-radius=""
              width="100%"
              height="100%"
              class="ele-message_1"
            >
              <div
                class="ele-wrapper ele-wrapper-011df7de-b51d-49df-8693-f8313670d460"
              >
                <hm-bg-card
                  box-shadow-blur=""
                  box-shadow-v-shadow=""
                  border-radius=""
                  width="100%"
                  height="100%"
                  class="ele-011df7de-b51d-49df-8693-f8313670d460"
                >
                  <div
                    class="ele-wrapper ele-wrapper-bf252f1b-c63f-43d8-b3da-2dc087a9f832"
                  >
                    <hm-ant-bg-text
                      padding="2"
                      font-size="14px"
                      text="基本信息"
                      class="ele-bf252f1b-c63f-43d8-b3da-2dc087a9f832"
                    >
                    </hm-ant-bg-text>
                  </div>
                  <div class="ele-wrapper ele-wrapper-activityForm">
                    <hm-ant-formily
                      ref="activityForm"
                      :schema="activityForm.schema"
                      :wrapper-col="16"
                      :col-num="0"
                      :label-col="3"
                      :col-min-width="380"
                      :config="activityForm.config"
                      v-model:value="activityForm.value"
                      class="ele-activityForm"
                    >
                    </hm-ant-formily>
                  </div>
                  <div
                    class="ele-wrapper ele-wrapper-824a7f59-7158-4b84-a954-01cbeb3c4180"
                  >
                    <hm-bg-card
                      box-shadow-blur=""
                      box-shadow-v-shadow=""
                      border-radius=""
                      width="100%"
                      height="100%"
                      class="ele-824a7f59-7158-4b84-a954-01cbeb3c4180"
                    >
                      <div
                        class="ele-wrapper ele-wrapper-42f5eb5a-31b3-4f7a-8ddd-9bb948ae5a17"
                      >
                        <hm-ant-bg-text
                          padding="2"
                          font-size="14px"
                          text="活动项目设置（至少一个）"
                          class="ele-42f5eb5a-31b3-4f7a-8ddd-9bb948ae5a17"
                        >
                        </hm-ant-bg-text>
                      </div>
                      <div class="ele-wrapper ele-wrapper-addBtn1">
                        <hm-ant-button
                          ref="addBtn1"
                          icon="fa fa-plus"
                          text="添加"
                          :type="'primary'"
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
                          height=""
                          @ok="onAddprojectOk"
                          class="ele-addproject"
                        >
                          <div
                            class="ele-wrapper ele-wrapper-activityProjectForm"
                          >
                            <hm-ant-formily
                              ref="activityProjectForm"
                              :schema="activityProjectForm.schema"
                              :wrapper-col="16"
                              :col-num="0"
                              :label-col="6"
                              :col-min-width="380"
                              :config="activityProjectForm.config"
                              v-model:value="activityProjectForm.value"
                              class="ele-activityProjectForm"
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
                          class="ele-deleteproject"
                        >
                          <div class="ele-wrapper ele-wrapper-delText">
                            <hm-ant-icon-text
                              ref="delText"
                              icon=""
                              width="270px"
                              text="确认删除"
                            >
                            </hm-ant-icon-text>
                          </div>
                        </hm-modal>
                      </div>
                      <div
                        class="ele-wrapper ele-wrapper-678d6f52-6548-4f95-b813-d079ff38bb6f"
                      >
                        <hm-bg-card
                          box-shadow-blur=""
                          box-shadow-v-shadow=""
                          border-radius=""
                          width="100%"
                          height="100%"
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
                              :get-data-map="activityProjectTable.getDataMap"
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
                              padding="2"
                              font-size="14px"
                              text="活动奖品设置（可为空）"
                              class="ele-2030f92c-96b3-41e7-8403-353b98f5e6a6"
                            >
                            </hm-ant-bg-text>
                          </div>
                          <div class="ele-wrapper ele-wrapper-addBtn2">
                            <hm-ant-button
                              ref="addBtn2"
                              icon="fa fa-plus"
                              text="添加"
                              :type="'primary'"
                              @click="onAddBtn2Click"
                              class="ele-addBtn2"
                            >
                            </hm-ant-button>
                          </div>
                          <div class="ele-wrapper ele-wrapper-addprize">
                            <hm-modal
                              ref="addprize"
                              title="奖品图片"
                              v-model:visible="addprize.visible"
                              :z-index="1000"
                              height="250px"
                              class="ele-addprize"
                            >
                              <div
                                class="ele-wrapper ele-wrapper-ce088f7d-9e0e-4dd9-9a1a-ad56ec58b79b"
                              >
                                <hm-ant-formily
                                  :schema="{
                                    type: 'object',
                                    properties: {
                                      form: {
                                        'x-component': 'Form',
                                        'x-component-props': {
                                          'wrapper-col': { span: 14 },
                                          'label-col': { span: 7 },
                                          style: {
                                            flexWrap: 'wrap',
                                            display: 'flex',
                                          },
                                        },
                                        type: 'void',
                                        properties: {},
                                      },
                                    },
                                  }"
                                  :wrapper-col="14"
                                  :col-num="0"
                                  :label-col="7"
                                  :col-min-width="380"
                                  :config="{
                                    cycle: {
                                      style: { width: '100%' },
                                      type: 'Input',
                                      title: '活动项目名称',
                                      required: true,
                                      props: { placeholder: '请输入活动名称' },
                                    },
                                    ' name': {
                                      style: { width: '100%' },
                                      type: 'UploadImage',
                                      title: '项目费用',
                                      maxCount: 1,
                                      listType: 'picture-card',
                                      required: true,
                                      props: {},
                                    },
                                  }"
                                  :value="{}"
                                >
                                </hm-ant-formily>
                              </div>
                            </hm-modal>
                          </div>
                          <div
                            class="ele-wrapper ele-wrapper-ee49ad6d-dd0f-4f85-8ed8-dd1b1b7af98c"
                          >
                            <hm-bg-card
                              box-shadow-blur=""
                              box-shadow-v-shadow=""
                              border-radius=""
                              width="100%"
                              height="100%"
                              class="ele-ee49ad6d-dd0f-4f85-8ed8-dd1b1b7af98c"
                            >
                              <div
                                class="ele-wrapper ele-wrapper-activityImgTableTwo"
                              >
                                <hm-ant-table
                                  ref="activityImgTableTwo"
                                  :is-flat-action="
                                    activityImgTableTwo.isFlatAction
                                  "
                                  :get-data-map="activityImgTableTwo.getDataMap"
                                  :data="activityImgTableTwo.data"
                                  :columns="activityImgTableTwo.columns"
                                  :row-class-name="
                                    activityImgTableTwo.rowClassName
                                  "
                                  :pagination-hidden="
                                    activityImgTableTwo.paginationHidden
                                  "
                                  :actions="activityImgTableTwo.actions"
                                >
                                </hm-ant-table>
                              </div>
                            </hm-bg-card>
                          </div>
                          <div
                            class="ele-wrapper ele-wrapper-633b539d-81dc-4e94-af68-dfba9182db48"
                          >
                            <hm-ant-bg-text
                              padding="2"
                              font-size="14px"
                              text="活动信息"
                              class="ele-633b539d-81dc-4e94-af68-dfba9182db48"
                            >
                            </hm-ant-bg-text>
                          </div>
                          <div
                            class="ele-wrapper ele-wrapper-81d9459e-4453-4843-b712-3c112a5e0a41"
                          >
                            <hm-bg-card
                              box-shadow-blur=""
                              box-shadow-v-shadow=""
                              border-radius=""
                              width="100%"
                              height="100%"
                              class="ele-81d9459e-4453-4843-b712-3c112a5e0a41"
                            >
                              <div
                                class="ele-wrapper ele-wrapper-activityExtForm"
                              >
                                <hm-ant-formily
                                  ref="activityExtForm"
                                  :schema="activityExtForm.schema"
                                  :wrapper-col="18"
                                  :col-num="0"
                                  :label-col="5"
                                  :col-min-width="380"
                                  :config="activityExtForm.config"
                                  v-model:value="activityExtForm.value"
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
                  box-shadow-blur=""
                  box-shadow-v-shadow=""
                  border-radius=""
                  width="100%"
                  height="100%"
                  class="ele-message_2"
                >
                  <div
                    class="ele-wrapper ele-wrapper-fa713d7b-511f-4b6c-9f7a-37b66d33842e"
                  >
                    <hm-ant-bg-text
                      padding="2"
                      font-size="14px"
                      text="报名页背景设置"
                      class="ele-fa713d7b-511f-4b6c-9f7a-37b66d33842e"
                    >
                    </hm-ant-bg-text>
                  </div>
                  <div class="ele-wrapper ele-wrapper-addBtn3">
                    <hm-ant-button
                      ref="addBtn3"
                      icon="fa fa-plus"
                      text="添加"
                      :type="'primary'"
                      @click="onAddBtn3Click"
                      class="ele-addBtn3"
                    >
                    </hm-ant-button>
                  </div>
                  <div class="ele-wrapper ele-wrapper-addBackground">
                    <hm-modal
                      ref="addBackground"
                      title="报名页背景图"
                      v-model:visible="addBackground.visible"
                      :z-index="1000"
                      height="250px"
                      class="ele-addBackground"
                    >
                      <div
                        class="ele-wrapper ele-wrapper-c55fbae6-544d-46d6-a83a-73b92291b38d"
                      >
                        <hm-ant-formily
                          :schema="{
                            type: 'object',
                            properties: {
                              form: {
                                'x-component': 'Form',
                                'x-component-props': {
                                  'wrapper-col': { span: 14 },
                                  'label-col': { span: 7 },
                                  style: { flexWrap: 'wrap', display: 'flex' },
                                },
                                type: 'void',
                                properties: {},
                              },
                            },
                          }"
                          :wrapper-col="14"
                          :col-num="0"
                          :label-col="7"
                          :col-min-width="380"
                          :config="{
                            cycle: {
                              style: { width: '100%' },
                              type: 'Input',
                              title: '参考尺寸',
                              required: true,
                              props: { placeholder: '请输入' },
                            },
                            ' name': {
                              style: { width: '100%' },
                              type: 'UploadImage',
                              title: '背景图片',
                              maxCount: 1,
                              listType: 'picture-card',
                              required: true,
                              props: {},
                            },
                          }"
                          :value="{}"
                        >
                        </hm-ant-formily>
                      </div>
                    </hm-modal>
                  </div>
                  <div
                    class="ele-wrapper ele-wrapper-89ea97da-357c-4295-9803-b1d0b63db0a2"
                  >
                    <hm-bg-card
                      box-shadow-blur=""
                      box-shadow-v-shadow=""
                      border-radius=""
                      width="100%"
                      height="100%"
                      class="ele-89ea97da-357c-4295-9803-b1d0b63db0a2"
                    >
                      <div class="ele-wrapper ele-wrapper-activityImgTableOne">
                        <hm-ant-table
                          ref="activityImgTableOne"
                          :is-flat-action="activityImgTableOne.isFlatAction"
                          :get-data-map="activityImgTableOne.getDataMap"
                          :data="activityImgTableOne.data"
                          :columns="activityImgTableOne.columns"
                          :row-class-name="activityImgTableOne.rowClassName"
                          :pagination-hidden="
                            activityImgTableOne.paginationHidden
                          "
                          :actions="activityImgTableOne.actions"
                        >
                        </hm-ant-table>
                      </div>
                    </hm-bg-card>
                  </div>
                  <div
                    class="ele-wrapper ele-wrapper-56aec4a5-4b22-4f3e-9572-bd54033fe687"
                  >
                    <hm-ant-bg-text
                      padding="2"
                      font-size="14px"
                      text="报名页信息框颜色设置"
                      class="ele-56aec4a5-4b22-4f3e-9572-bd54033fe687"
                    >
                    </hm-ant-bg-text>
                  </div>
                  <div
                    class="ele-wrapper ele-wrapper-3fb31f2b-4a48-499a-ba2a-8181388283b9"
                  >
                    <hm-bg-card
                      box-shadow-blur=""
                      box-shadow-v-shadow=""
                      border-radius=""
                      width="100%"
                      height="100%"
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
                      padding="2"
                      font-size="14px"
                      text="报名页信息框字体颜色设置"
                      class="ele-c9bf9691-385d-414d-864e-a07073520b33"
                    >
                    </hm-ant-bg-text>
                  </div>
                  <div
                    class="ele-wrapper ele-wrapper-8e197d87-c68a-402f-90a7-400dc9c35edc"
                  >
                    <hm-bg-card
                      box-shadow-blur=""
                      box-shadow-v-shadow=""
                      border-radius=""
                      width="100%"
                      height="100%"
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
              border-radius=""
              width="100%"
              height="100%"
              :text-align="'center'"
              class="ele-cc8ed92e-79cc-488a-9d3f-77d0a2fddce6"
            >
              <div
                class="ele-wrapper ele-wrapper-78fb2568-9250-4a78-987d-c766b916f771"
              >
                <hm-ant-button
                  :size="'large'"
                  icon="fa fa-check-circle"
                  text="创建活动"
                  :type="'primary'"
                  class="ele-78fb2568-9250-4a78-987d-c766b916f771"
                >
                </hm-ant-button>
              </div>
              <div
                class="ele-wrapper ele-wrapper-b0a42962-4301-4b4d-9525-05bfef232b34"
              >
                <hm-ant-button
                  :ghost="true"
                  :size="'large'"
                  icon="fa fa-repeat"
                  text="重置"
                  :type="'primary'"
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
        schema: {
          type: "object",
          properties: {
            form: {
              "x-component": "Form",
              "x-component-props": {
                "wrapper-col": {
                  span: 14,
                },
                "label-col": {
                  span: 7,
                },
                style: {
                  flexWrap: "wrap",
                  display: "flex",
                },
              },
              type: "void",
              properties: {},
            },
          },
        },
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
          cycle: {
            style: {
              width: "100%",
            },
            type: "RangePicker",
            title: "活动周期",
            required: true,
            props: {},
          },
          status: {
            default: 0,
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
            },
          },
        },
        value: {
          status: 0,
        },
      },
      addproject: {
        visible: false,
      },
      deleteproject: {
        visible: false,
      },
      addprize: {
        visible: false,
      },
      addBackground: {
        visible: false,
      },
      activityProjectForm: {
        schema: {
          type: "object",
          properties: {
            form: {
              "x-component": "Form",
              "x-component-props": {
                "wrapper-col": {
                  span: 14,
                },
                "label-col": {
                  span: 7,
                },
                style: {
                  flexWrap: "wrap",
                  display: "flex",
                },
              },
              type: "void",
              properties: {},
            },
          },
        },
        config: {
          multipleOrder: {
            style: {
              width: "100%",
            },
            type: "RadioGroup",
            title: "是否多人报名",
            required: true,
            props: {
              options: [
                {
                  label: "是",
                  value: 0,
                },
                {
                  label: "否",
                  value: 1,
                },
              ],
            },
          },
          imgPath: {
            style: {
              width: "100%",
            },
            type: "UploadImage",
            title: "活动图片",
            required: true,
            props: {},
          },
          name: {
            style: {
              width: "100%",
            },
            type: "Input",
            title: "活动项目名称",
            required: true,
            props: {},
          },
          synopsis: {
            style: {
              width: "100%",
            },
            type: "Textarea",
            title: "项目简介",
            required: true,
            props: {},
          },
          expense: {
            style: {
              width: "100%",
            },
            type: "Input",
            title: "项目费用",
            required: true,
            props: {},
          },
          free: {
            style: {
              width: "100%",
            },
            type: "RadioGroup",
            title: "是否免费",
            required: true,
            props: {
              options: [
                {
                  label: "是",
                  value: 0,
                },
                {
                  label: "否",
                  value: 1,
                },
              ],
            },
          },
        },
        value: {},
      },
      activityProjectTable: {
        columns: [
          {
            dataIndex: "name",
            width: 50,
            title: "项目费用",
            key: "name",
          },
          {
            dataIndex: "age",
            width: 90,
            title: "活动项目名称",
            key: "age",
          },
          {
            dataIndex: "address",
            width: 70,
            title: "项目简历",
            key: "address",
            ellipsis: true,
          },
          {
            dataIndex: "sexual",
            width: 30,
            title: "排序",
            key: "sexual",
            ellipsis: true,
          },
          {
            slots: {
              customRender: "action",
            },
            width: 100,
            title: "操作",
            key: "action",
          },
        ],
        data: [
          {
            address: "",
            school: "",
            name: "¥0",
            key: "1",
            age: "",
            sexual: "",
          },
          {
            address: "",
            school: "",
            name: "¥ 29.9",
            key: "2",
            age: "",
            sexual: "",
          },
        ],
        paginationHidden: true,
        getDataMap: {
          total: "",
          list: "",
        },
        actions: [
          {
            name: "编辑",
            icon: "fa fa-pencil",
            callback: function (item) {
              console.log("点击编辑: ", item);
              self.addproject.visible = true;
            },
            type: "link",
          },
          {
            name: "删除",
            icon: "fa fa-trash",
            callback: function (item) {
              console.log("点击删除: ", item);
              self.deleteproject.visible = true;
            },
            type: "link",
          },
        ],
        isFlatAction: true,
        rowClassName: {},
      },
      "ce088f7d-9e0e-4dd9-9a1a-ad56ec58b79b": {
        schema: {
          type: "object",
          properties: {
            form: {
              "x-component": "Form",
              "x-component-props": {
                "wrapper-col": {
                  span: 14,
                },
                "label-col": {
                  span: 7,
                },
                style: {
                  flexWrap: "wrap",
                  display: "flex",
                },
              },
              type: "void",
              properties: {},
            },
          },
        },
        config: {
          cycle: {
            style: {
              width: "100%",
            },
            type: "Input",
            title: "活动项目名称",
            required: true,
            props: {
              placeholder: "请输入活动名称",
            },
          },
          " name": {
            style: {
              width: "100%",
            },
            type: "UploadImage",
            title: "项目费用",
            maxCount: 1,
            listType: "picture-card",
            required: true,
            props: {},
          },
        },
        value: {},
      },
      activityImgTableTwo: {
        isFlatAction: true,
        getDataMap: {
          total: "",
          list: "",
        },
        data: [
          {
            address: "1",
            school: "",
            name: "",
            key: "1",
            age: "",
            sexual: "",
          },
          {
            address: "2",
            school: "",
            name: "",
            key: "2",
            age: "",
            sexual: "",
          },
          {
            address: "3",
            school: "",
            name: "",
            key: "3",
            age: "",
            sexual: "",
          },
        ],
        columns: [
          {
            dataIndex: "name",
            width: 50,
            title: "奖品图片",
            key: "name",
          },
          {
            dataIndex: "age",
            width: 90,
            title: "奖品名称",
            key: "age",
          },
          {
            dataIndex: "address",
            width: 30,
            title: "奖品排序",
            key: "address",
            ellipsis: true,
          },
          {
            slots: {
              customRender: "action",
            },
            width: 80,
            title: "操作",
            key: "action",
          },
        ],
        rowClassName: {},
        paginationHidden: true,
        actions: [
          {
            name: "编辑",
            icon: "fa fa-pencil",
            callback: function (item) {
              console.log("点击编辑: ", item);
              self.addprize.visible = true;
            },
            type: "link",
          },
          {
            name: "删除",
            icon: "fa fa-trash",
            callback: function (item) {
              console.log("点击删除: ", item);
              self.deleteproject.visible = true;
            },
            type: "link",
          },
        ],
      },
      activityExtForm: {
        schema: {
          type: "object",
          properties: {
            form: {
              "x-component": "Form",
              "x-component-props": {
                "wrapper-col": {
                  span: 14,
                },
                "label-col": {
                  span: 7,
                },
                style: {
                  flexWrap: "wrap",
                  display: "flex",
                },
              },
              type: "void",
              properties: {},
            },
          },
        },
        config: {
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
        },
        value: {},
      },
      "c55fbae6-544d-46d6-a83a-73b92291b38d": {
        schema: {
          type: "object",
          properties: {
            form: {
              "x-component": "Form",
              "x-component-props": {
                "wrapper-col": {
                  span: 14,
                },
                "label-col": {
                  span: 7,
                },
                style: {
                  flexWrap: "wrap",
                  display: "flex",
                },
              },
              type: "void",
              properties: {},
            },
          },
        },
        config: {
          cycle: {
            style: {
              width: "100%",
            },
            type: "Input",
            title: "参考尺寸",
            required: true,
            props: {
              placeholder: "请输入",
            },
          },
          " name": {
            style: {
              width: "100%",
            },
            type: "UploadImage",
            title: "背景图片",
            maxCount: 1,
            listType: "picture-card",
            required: true,
            props: {},
          },
        },
        value: {},
      },
      activityImgTableOne: {
        isFlatAction: true,
        getDataMap: {
          total: "",
          list: "",
        },
        data: [
          {
            address: "",
            school: "",
            name: "¥0",
            key: "1",
            age: "",
            sexual: "",
          },
          {
            address: "",
            school: "",
            name: "¥ 29.9",
            key: "2",
            age: "",
            sexual: "",
          },
        ],
        columns: [
          {
            dataIndex: "name",
            width: 50,
            title: "图片",
            key: "name",
          },
          {
            dataIndex: "age",
            width: 90,
            title: "参考尺寸（或使用二倍图）",
            key: "age",
          },
          {
            dataIndex: "address",
            width: 40,
            title: "图片排序",
            key: "address",
            ellipsis: true,
          },
          {
            slots: {
              customRender: "action",
            },
            width: 80,
            title: "操作",
            key: "action",
          },
        ],
        rowClassName: {},
        paginationHidden: true,
        actions: [
          {
            name: "编辑",
            icon: "fa fa-pencil",
            callback: function (item) {
              console.log("点击编辑: ", item);
              self.addBackground.visible = true;
            },
            type: "link",
          },
          {
            name: "删除",
            icon: "fa fa-trash",
            callback: function (item) {
              console.log("点击删除: ", item);
              self.deleteproject.visible = true;
            },
            type: "link",
          },
        ],
      },
    };
  },
  watch: {},
  async mounted(e) {
    this.onMounted(e);
  },
  methods: {
    onMounted() {
      let self = this;
      self.type = parseInt(self.$route.query.type);
      self.addActivityProject = async function () {
        await self.$refs.activityProjectForm.validate();
      };
    },

    onAddBtn1Click() {
      this.addproject.visible = true;
    },
    async onAddprojectOk() {
      await this.addActivityProject();
    },
    onAddBtn2Click() {
      this.addprize.visible = true;
    },
    onAddBtn3Click() {
      this.addBackground.visible = true;
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

.ele-wrapper-activityProjectForm {
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
