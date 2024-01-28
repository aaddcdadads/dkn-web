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
                  <div
                    class="ele-wrapper ele-wrapper-a5a25330-2967-46c6-912c-e469e87e6474"
                  >
                    <hm-ant-formily
                      :config="{
                        ' name': {
                          type: 'Input',
                          title: '活动规则',
                          style: { width: '100%' },
                          required: true,
                          props: {},
                        },
                        cycle: {
                          type: 'RangePicker',
                          title: '活动周期',
                          style: { width: '100%' },
                          required: true,
                          props: {},
                        },
                        EntryClose: {
                          type: 'DatePicker',
                          title: '报名截止',
                          style: { width: '100%' },
                          required: true,
                          props: { showTime: true },
                        },
                        VerificationDeadline: {
                          type: 'DatePicker',
                          title: '核销截止',
                          style: { width: '100%' },
                          required: true,
                          props: { showTime: true },
                        },
                        ActivityStatus: {
                          type: 'RadioGroup',
                          title: '核销截止',
                          style: { width: '100%' },
                          required: true,
                          props: {
                            options: [
                              { label: '启用', value: 0 },
                              { label: '禁用', value: 1 },
                            ],
                          },
                        },
                      }"
                      :value="{}"
                      :col-num="0"
                      :col-min-width="380"
                      :label-col="3"
                      :wrapper-col="16"
                      class="ele-a5a25330-2967-46c6-912c-e469e87e6474"
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
                      <div
                        class="ele-wrapper ele-wrapper-192a1e25-4895-4501-971d-69ddf1ae5a12"
                      >
                        <hm-ant-button
                          text="添加"
                          :type="'primary'"
                          icon="fa fa-plus"
                          class="ele-192a1e25-4895-4501-971d-69ddf1ae5a12"
                        >
                        </hm-ant-button>
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
                            class="ele-wrapper ele-wrapper-25b5309c-c34c-4da3-a7c0-afa25d079608"
                          >
                            <hm-ant-table
                              :columns="[
                                {
                                  title: '项目费用',
                                  dataIndex: 'name',
                                  key: 'name',
                                  width: 50,
                                },
                                {
                                  title: '活动项目名称',
                                  dataIndex: 'age',
                                  key: 'age',
                                  ellipsis: true,
                                  width: 90,
                                },
                                {
                                  title: '项目简历',
                                  dataIndex: 'address',
                                  key: 'address',
                                  ellipsis: true,
                                  width: 80,
                                },
                                {
                                  title: '排序',
                                  dataIndex: 'sexual',
                                  key: 'sexual',
                                  ellipsis: true,
                                  width: 50,
                                },
                                {
                                  title: '操作',
                                  key: 'action',
                                  slots: { customRender: 'action' },
                                  width: 100,
                                },
                              ]"
                              :data="[
                                {
                                  key: '1',
                                  name: '¥0',
                                  age: '',
                                  address: '',
                                  sexual: '',
                                  school: '',
                                },
                                {
                                  key: '2',
                                  name: '¥ 29.9',
                                  age: '',
                                  address: '',
                                  sexual: '',
                                  school: '',
                                },
                              ]"
                              :pagination-hidden="true"
                              :actions="[
                                {
                                  name: '编辑',
                                  callback:
                                    'function (item) {\n                            console.log(&quot;点击编辑: &quot;, item);\n                        }',
                                  type: 'link',
                                  icon: 'fa fa-pencil',
                                },
                                {
                                  name: '删除',
                                  callback:
                                    'function (item) {\n                            console.log(&quot;点击删除: &quot;, item);\n                        }',
                                  type: 'link',
                                  icon: 'fa fa-trash',
                                },
                              ]"
                              :is-flat-action="true"
                              :row-class-name="{}"
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
                          <div
                            class="ele-wrapper ele-wrapper-5e707249-6d32-4c85-ac9b-b51a1a4e56c8"
                          >
                            <hm-ant-button
                              text="添加"
                              :type="'primary'"
                              icon="fa fa-plus"
                              class="ele-5e707249-6d32-4c85-ac9b-b51a1a4e56c8"
                            >
                            </hm-ant-button>
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
                                class="ele-wrapper ele-wrapper-1359321a-c729-4bf8-b227-caa6f12e788f"
                              >
                                <hm-ant-table
                                  :columns="[
                                    {
                                      title: '奖品图片',
                                      dataIndex: 'name',
                                      key: 'name',
                                      width: 50,
                                    },
                                    {
                                      title: '奖品名称',
                                      dataIndex: 'age',
                                      key: 'age',
                                      width: 80,
                                    },
                                    {
                                      title: '奖品排序',
                                      dataIndex: 'address',
                                      key: 'address',
                                      ellipsis: true,
                                      width: 50,
                                    },
                                    {
                                      title: '操作',
                                      key: 'action',
                                      slots: { customRender: 'action' },
                                      width: 80,
                                    },
                                  ]"
                                  :data="[
                                    {
                                      key: '1',
                                      name: '¥0',
                                      age: '',
                                      address: '',
                                      sexual: '',
                                      school: '',
                                    },
                                    {
                                      key: '2',
                                      name: '¥ 29.9',
                                      age: '',
                                      address: '',
                                      sexual: '',
                                      school: '',
                                    },
                                  ]"
                                  :pagination-hidden="true"
                                  :actions="[
                                    {
                                      name: '编辑',
                                      callback:
                                        'function (item) {\n                            console.log(&quot;点击编辑: &quot;, item);\n                        }',
                                      type: 'link',
                                      icon: 'fa fa-pencil',
                                    },
                                    {
                                      name: '删除',
                                      callback:
                                        'function (item) {\n                            console.log(&quot;点击删除: &quot;, item);\n                        }',
                                      type: 'link',
                                      icon: 'fa fa-trash',
                                    },
                                  ]"
                                  :is-flat-action="true"
                                  :row-class-name="{}"
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
                                class="ele-wrapper ele-wrapper-51f6df44-dc34-48ee-9fb2-44caba78bf6f"
                              >
                                <hm-ant-formily
                                  :config="{
                                    ' rule': {
                                      type: 'Textarea',
                                      title: '活动规则',
                                      style: { width: '100%' },
                                      props: {
                                        showCount: true,
                                        placeholder: '请输入活动规则',
                                      },
                                    },
                                    agreement: {
                                      type: 'Textarea',
                                      title: '协议与承诺书',
                                      style: { width: '100%' },
                                      props: {
                                        showCount: true,
                                        placeholder:
                                          '请输入《活动报名用户协议及承诺书》',
                                      },
                                    },
                                    customerService: {
                                      type: 'Input',
                                      title: '活动咨询与客服',
                                      style: { width: '100%' },
                                    },
                                  }"
                                  :value="{}"
                                  :col-num="0"
                                  :col-min-width="380"
                                  :label-col="4"
                                  :wrapper-col="18"
                                  class="ele-51f6df44-dc34-48ee-9fb2-44caba78bf6f"
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
                      <div
                        class="ele-wrapper ele-wrapper-811f6987-6418-493f-8668-8d1795fc22e0"
                      >
                        <hm-ant-table
                          :columns="[
                            {
                              title: '奖品图片',
                              dataIndex: 'name',
                              key: 'name',
                              width: 50,
                            },
                            {
                              title: '奖品名称',
                              dataIndex: 'age',
                              key: 'age',
                              width: 90,
                            },
                            {
                              title: '奖品排序',
                              dataIndex: 'address',
                              key: 'address',
                              ellipsis: true,
                              width: 50,
                            },
                            {
                              title: '操作',
                              key: 'action',
                              slots: { customRender: 'action' },
                              width: 80,
                            },
                          ]"
                          :data="[
                            {
                              key: '1',
                              name: '¥0',
                              age: '',
                              address: '',
                              sexual: '',
                              school: '',
                            },
                            {
                              key: '2',
                              name: '¥ 29.9',
                              age: '',
                              address: '',
                              sexual: '',
                              school: '',
                            },
                          ]"
                          :pagination-hidden="true"
                          :actions="[
                            {
                              name: '编辑',
                              callback:
                                'function (item) {\n                            console.log(&quot;点击编辑: &quot;, item);\n                        }',
                              type: 'link',
                              icon: 'fa fa-pencil',
                            },
                            {
                              name: '删除',
                              callback:
                                'function (item) {\n                            console.log(&quot;点击删除: &quot;, item);\n                        }',
                              type: 'link',
                              icon: 'fa fa-trash',
                            },
                          ]"
                          :is-flat-action="true"
                          :row-class-name="{}"
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
                  <div
                    class="ele-wrapper ele-wrapper-610ad32f-244d-4af7-aad8-a7d343ac7d36"
                  >
                    <hm-ant-bg-text
                      text="活动参与人数信息修改"
                      font-size="14px"
                      padding="3"
                      class="ele-610ad32f-244d-4af7-aad8-a7d343ac7d36"
                    >
                    </hm-ant-bg-text>
                  </div>
                  <div class="ele-wrapper ele-wrapper-messageRenedit">
                    <hm-bg-card
                      ref="messageRenedit"
                      width="100%"
                      height="100%"
                      border-radius=""
                      box-shadow-v-shadow=""
                      box-shadow-blur=""
                      class="ele-messageRenedit"
                    >
                      <div
                        class="ele-wrapper ele-wrapper-5f05a8f7-ad2e-4f53-a4a7-fa48d9846d76"
                      >
                        <hm-ant-formily
                          :config="{
                            'VirtualNumberPeople:': {
                              type: 'RadioGroup',
                              title: '核销截止',
                              style: { width: '100%' },
                              required: true,
                              props: {
                                options: [
                                  { label: '启用', value: 0 },
                                  { label: '禁用', value: 1 },
                                ],
                              },
                            },
                            ' name': {
                              type: 'Input',
                              title: '活动人数',
                              style: { width: '100%' },
                              required: true,
                              props: {},
                            },
                          }"
                          :value="{}"
                          :col-num="0"
                          :col-min-width="380"
                          :label-col="3"
                          :wrapper-col="16"
                          class="ele-5f05a8f7-ad2e-4f53-a4a7-fa48d9846d76"
                        >
                        </hm-ant-formily>
                      </div>
                    </hm-bg-card>
                  </div>
                </hm-bg-card>
              </div>
            </hm-bg-card>
          </div>
          <div
            class="ele-wrapper ele-wrapper-31135d90-70d1-42a3-b004-f8a7878760f4"
          >
            <hm-bg-card
              width="100%"
              height="100%"
              border-radius=""
              :text-align="'center'"
              box-shadow-v-shadow=""
              box-shadow-blur=""
              class="ele-31135d90-70d1-42a3-b004-f8a7878760f4"
            >
              <div
                class="ele-wrapper ele-wrapper-be6a0959-060d-4277-9590-2d5ddd2ab12e"
              >
                <hm-ant-button
                  text="创建活动"
                  :type="'primary'"
                  :size="'large'"
                  icon="fa fa-check-circle"
                  class="ele-be6a0959-060d-4277-9590-2d5ddd2ab12e"
                >
                </hm-ant-button>
              </div>
              <div
                class="ele-wrapper ele-wrapper-902e40e8-285f-4e3c-943d-eeafce2cbf7b"
              >
                <hm-ant-button
                  text="重置"
                  :type="'primary'"
                  :size="'large'"
                  :ghost="true"
                  icon="fa fa-repeat"
                  class="ele-902e40e8-285f-4e3c-943d-eeafce2cbf7b"
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
import HmAntTable from "/@/components/built-in/jeecg/HmAntTable.vue";
import HmColorKit from "/@/components/built-in/jeecg/HmColorKit.vue";

export default {
  name: "ActivityEditingAndModification",
  components: {
    HmBgCard,
    HmAntIconText,
    HmAntBgText,
    HmAntFormily,
    HmAntButton,
    HmAntTable,
    HmColorKit,
  },
  data() {
    let self = this;
    return {
      "a5a25330-2967-46c6-912c-e469e87e6474": {
        config: {
          " name": {
            type: "Input",
            title: "活动规则",
            style: {
              width: "100%",
            },
            required: true,
            props: {},
          },
          cycle: {
            type: "RangePicker",
            title: "活动周期",
            style: {
              width: "100%",
            },
            required: true,
            props: {},
          },
          EntryClose: {
            type: "DatePicker",
            title: "报名截止",
            style: {
              width: "100%",
            },
            required: true,
            props: {
              showTime: true,
            },
          },
          VerificationDeadline: {
            type: "DatePicker",
            title: "核销截止",
            style: {
              width: "100%",
            },
            required: true,
            props: {
              showTime: true,
            },
          },
          ActivityStatus: {
            type: "RadioGroup",
            title: "核销截止",
            style: {
              width: "100%",
            },
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
        value: {},
      },
      "51f6df44-dc34-48ee-9fb2-44caba78bf6f": {
        config: {
          " rule": {
            type: "Textarea",
            title: "活动规则",
            style: {
              width: "100%",
            },
            props: {
              showCount: true,
              placeholder: "请输入活动规则",
            },
          },
          agreement: {
            type: "Textarea",
            title: "协议与承诺书",
            style: {
              width: "100%",
            },
            props: {
              showCount: true,
              placeholder: "请输入《活动报名用户协议及承诺书》",
            },
          },
          customerService: {
            type: "Input",
            title: "活动咨询与客服",
            style: {
              width: "100%",
            },
          },
        },
        value: {},
      },
      "5f05a8f7-ad2e-4f53-a4a7-fa48d9846d76": {
        config: {
          "VirtualNumberPeople:": {
            type: "RadioGroup",
            title: "核销截止",
            style: {
              width: "100%",
            },
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
          " name": {
            type: "Input",
            title: "活动人数",
            style: {
              width: "100%",
            },
            required: true,
            props: {},
          },
        },
        value: {},
      },
    };
  },
  watch: {},
  methods: {},
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
}

.ele-wrapper-a5a25330-2967-46c6-912c-e469e87e6474 {
  margin-top: 15px;
}

.ele-wrapper-824a7f59-7158-4b84-a954-01cbeb3c4180 {
  width: 100%;
  margin-top: 10px;
}

.ele-wrapper-42f5eb5a-31b3-4f7a-8ddd-9bb948ae5a17 {
  border-left: 4px solid #0079fe;
  padding-left: 5px;
}

.ele-wrapper-192a1e25-4895-4501-971d-69ddf1ae5a12 {
  margin-left: 5px;
}

.ele-wrapper-678d6f52-6548-4f95-b813-d079ff38bb6f {
  width: 100%;
}

.ele-wrapper-2030f92c-96b3-41e7-8403-353b98f5e6a6 {
  border-left: 4px solid #0079fe;
  margin-top: 15px;
  padding-left: 5px;
}

.ele-wrapper-5e707249-6d32-4c85-ac9b-b51a1a4e56c8 {
  margin-left: 5px;
  margin-top: 15px;
}

.ele-wrapper-ee49ad6d-dd0f-4f85-8ed8-dd1b1b7af98c {
  width: 100%;
}

.ele-wrapper-633b539d-81dc-4e94-af68-dfba9182db48 {
  border-left: 5px solid #0079fe;
  margin-top: 15px;
  padding-left: 5px;
}

.ele-wrapper-81d9459e-4453-4843-b712-3c112a5e0a41 {
  width: 100%;
}

.ele-wrapper-51f6df44-dc34-48ee-9fb2-44caba78bf6f {
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
}

.ele-wrapper-89ea97da-357c-4295-9803-b1d0b63db0a2 {
  width: 100%;
}

.ele-wrapper-56aec4a5-4b22-4f3e-9572-bd54033fe687 {
  border-left: 4px solid #0079fe;
  margin-top: 15px;
  margin-left: 8px;
  padding-left: 5px;
}

.ele-wrapper-3fb31f2b-4a48-499a-ba2a-8181388283b9 {
  width: 100%;
}

.ele-wrapper-c9bf9691-385d-414d-864e-a07073520b33 {
  border-left: 4px solid #0079fe;
  margin-top: 15px;
  margin-left: 8px;
  padding-left: 5px;
}

.ele-wrapper-8e197d87-c68a-402f-90a7-400dc9c35edc {
  width: 100%;
}

.ele-wrapper-610ad32f-244d-4af7-aad8-a7d343ac7d36 {
  border-left: 4px solid #0079fe;
  margin-top: 15px;
  margin-left: 8px;
  padding-left: 5px;
}

.ele-wrapper-messageRenedit {
  width: 100%;
  .ele-messageRenedit {
    display: flex;
    flex-direction: column;
  }
}

.ele-wrapper-5f05a8f7-ad2e-4f53-a4a7-fa48d9846d76 {
  width: 100%;
}

.ele-wrapper-31135d90-70d1-42a3-b004-f8a7878760f4 {
  width: 100%;
  border-top: 1px solid #f2f2f2;
}

.ele-wrapper-be6a0959-060d-4277-9590-2d5ddd2ab12e {
  margin-right: 5px;
  margin-top: 10px;
  .ant-btn-lg {
    width: 140px;
  }
}

.ele-wrapper-902e40e8-285f-4e3c-943d-eeafce2cbf7b {
  margin-left: 5px;
  margin-top: 10px;
  .ant-btn-lg {
    width: 140px;
  }
}
</style>
