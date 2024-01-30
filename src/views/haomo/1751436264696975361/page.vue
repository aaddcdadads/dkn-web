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
              width="100%"
              height="100%"
              border-radius=""
              box-shadow-v-shadow=""
              box-shadow-blur=""
              class="ele-titleCard"
            >
              <div class="ele-wrapper ele-wrapper-title">
                <hm-ant-icon-text
                  ref="title"
                  :icon="title.icon"
                  :font-size="title.fontSize"
                  :text="title.text"
                  class="ele-title"
                >
                </hm-ant-icon-text>
              </div>
              <div class="ele-wrapper ele-wrapper-isTitle">
                <hm-ant-bg-text
                  ref="isTitle"
                  :text="isTitle.text"
                  :font-size="isTitle.fontSize"
                  :color="isTitle.color"
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
                      :schema="activityForm.schema"
                      :label-col="5"
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
                          text="活动费用设置(至少一个)"
                          font-size="14px"
                          padding="2"
                          class="ele-42f5eb5a-31b3-4f7a-8ddd-9bb948ae5a17"
                        >
                        </hm-ant-bg-text>
                      </div>
                      <div class="ele-wrapper ele-wrapper-addActivityProject">
                        <hm-ant-button
                          ref="addActivityProject"
                          :text="addActivityProject.text"
                          :type="addActivityProject.type"
                          :icon="addActivityProject.icon"
                          :visible="addActivityProject.visible"
                          @click="onAddActivityProjectClick"
                          class="ele-addActivityProject"
                        >
                        </hm-ant-button>
                      </div>
                      <div class="ele-wrapper ele-wrapper-addprice">
                        <hm-modal
                          ref="addprice"
                          title="活动费用"
                          v-model:visible="addprice.visible"
                          :z-index="1000"
                          height=""
                          class="ele-addprice"
                        >
                          <div
                            class="ele-wrapper ele-wrapper-8529c1db-0480-471c-8c06-e2f336b223f2"
                          >
                            <hm-ant-formily
                              :config="{
                                sortNo: {
                                  style: { width: '100%' },
                                  type: 'InputNumber',
                                  title: '排序',
                                  required: true,
                                  props: { placeholder: '请输入排序' },
                                },
                                multipleOrder: {
                                  style: { width: '100%' },
                                  type: 'RadioGroup',
                                  title: '是否多人报名',
                                  required: true,
                                  props: {
                                    options: [
                                      { label: '是', value: 0 },
                                      { label: '否', value: 1 },
                                    ],
                                  },
                                },
                                imgPath: {
                                  style: { width: '100%' },
                                  type: 'UploadImage',
                                  title: '活动图片',
                                  required: true,
                                  props: {
                                    action: '/api/sys/common/upload',
                                    accept: '.jpg,.png',
                                  },
                                },
                                name: {
                                  style: { width: '100%' },
                                  type: 'Input',
                                  title: '活动项目名称',
                                  required: true,
                                  props: {},
                                },
                                synopsis: {
                                  style: { width: '100%' },
                                  type: 'Textarea',
                                  title: '项目简介',
                                  required: true,
                                  props: {},
                                },
                                expense: {
                                  style: { width: '100%' },
                                  type: 'Input',
                                  title: '项目费用',
                                  required: true,
                                  props: {},
                                },
                                free: {
                                  style: { width: '100%' },
                                  type: 'RadioGroup',
                                  title: '是否免费',
                                  required: true,
                                  props: {
                                    options: [
                                      { label: '是', value: 0 },
                                      { label: '否', value: 1 },
                                    ],
                                  },
                                },
                              }"
                              :value="{}"
                              :col-num="0"
                              :col-min-width="380"
                              :label-col="7"
                              :wrapper-col="14"
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
                          <div class="ele-wrapper ele-wrapper-deleteText">
                            <hm-ant-icon-text
                              ref="deleteText"
                              text="确认删除"
                              icon=""
                              width="272px"
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
                              text="活动奖品设置(可为空)"
                              font-size="14px"
                              padding="2"
                              class="ele-2030f92c-96b3-41e7-8403-353b98f5e6a6"
                            >
                            </hm-ant-bg-text>
                          </div>
                          <div
                            class="ele-wrapper ele-wrapper-addActivityImgTableTwo"
                          >
                            <hm-ant-button
                              ref="addActivityImgTableTwo"
                              :text="addActivityImgTableTwo.text"
                              :type="addActivityImgTableTwo.type"
                              :icon="addActivityImgTableTwo.icon"
                              :visible="addActivityImgTableTwo.visible"
                              @click="onAddActivityImgTableTwoClick"
                              class="ele-addActivityImgTableTwo"
                            >
                            </hm-ant-button>
                          </div>
                          <div class="ele-wrapper ele-wrapper-addprize">
                            <hm-modal
                              ref="addprize"
                              title="奖品图片"
                              v-model:visible="addprize.visible"
                              :z-index="1000"
                              height="300px"
                              class="ele-addprize"
                            >
                              <div
                                class="ele-wrapper ele-wrapper-d6c85f5d-e546-49ce-802d-fe0a03aa2546"
                              >
                                <hm-ant-formily
                                  :config="{
                                    sortNo: {
                                      style: { width: '100%' },
                                      type: 'InputNumber',
                                      title: '奖品排序',
                                      required: true,
                                      props: { placeholder: '奖品序号' },
                                    },
                                    cycle: {
                                      type: 'Input',
                                      title: '奖品名称',
                                      style: { width: '100%' },
                                      required: true,
                                      props: {},
                                    },
                                    ' name': {
                                      type: 'UploadImage',
                                      title: '奖品图片',
                                      style: { width: '100%' },
                                      required: true,
                                      props: {},
                                    },
                                  }"
                                  :value="{}"
                                  :col-num="0"
                                  :col-min-width="380"
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
                                  :get-data-map="activityImgTableTwo.getDataMap"
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
                            class="ele-wrapper ele-wrapper-b20c5e06-5a57-4774-a563-47501fbdd9f4"
                          >
                            <hm-bg-card
                              width="100%"
                              height="100%"
                              border-radius=""
                              box-shadow-v-shadow=""
                              box-shadow-blur=""
                              class="ele-b20c5e06-5a57-4774-a563-47501fbdd9f4"
                            >
                              <div
                                class="ele-wrapper ele-wrapper-1be11cc1-938f-4e91-ba2e-bf92a3fbf648"
                              >
                                <hm-ant-bg-text
                                  text="活动运动信息"
                                  font-size="14px"
                                  padding="2"
                                  class="ele-1be11cc1-938f-4e91-ba2e-bf92a3fbf648"
                                >
                                </hm-ant-bg-text>
                              </div>
                              <div
                                class="ele-wrapper ele-wrapper-activityExtTwoForm"
                              >
                                <hm-ant-formily
                                  ref="activityExtTwoForm"
                                  :config="activityExtTwoForm.config"
                                  v-model:value="activityExtTwoForm.value"
                                  :col-num="0"
                                  :col-min-width="380"
                                  :label-col="5"
                                  :wrapper-col="16"
                                  class="ele-activityExtTwoForm"
                                >
                                </hm-ant-formily>
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
                          <div class="ele-wrapper ele-wrapper-activityRulesBox">
                            <hm-bg-card
                              ref="activityRulesBox"
                              width="100%"
                              height="100%"
                              border-radius=""
                              box-shadow-v-shadow=""
                              box-shadow-blur=""
                              class="ele-activityRulesBox"
                            >
                              <div
                                class="ele-wrapper ele-wrapper-676eaac4-2113-4104-a0d1-6c2704cf0cdb"
                              >
                                <hm-ant-bg-text
                                  text="活动规则："
                                  font-size="14px"
                                  padding="2"
                                  class="ele-676eaac4-2113-4104-a0d1-6c2704cf0cdb"
                                >
                                </hm-ant-bg-text>
                              </div>
                              <div
                                class="ele-wrapper ele-wrapper-activityRules"
                              >
                                <hm-wang-editor
                                  ref="activityRules"
                                  v-model:value="activityRules.value"
                                  :toolbar-config="activityRules.toolbarConfig"
                                  :max-content-length="2"
                                  class="ele-activityRules"
                                >
                                </hm-wang-editor>
                              </div>
                            </hm-bg-card>
                          </div>
                          <div
                            class="ele-wrapper ele-wrapper-agreementCommitmentletterBox"
                          >
                            <hm-bg-card
                              ref="agreementCommitmentletterBox"
                              width="100%"
                              height="100%"
                              border-radius=""
                              box-shadow-v-shadow=""
                              box-shadow-blur=""
                              class="ele-agreementCommitmentletterBox"
                            >
                              <div
                                class="ele-wrapper ele-wrapper-3e907204-ffc2-4af7-9c91-d488f3bbe726"
                              >
                                <hm-ant-bg-text
                                  text="协议与承诺书："
                                  font-size="14px"
                                  padding="2"
                                  class="ele-3e907204-ffc2-4af7-9c91-d488f3bbe726"
                                >
                                </hm-ant-bg-text>
                              </div>
                              <div
                                class="ele-wrapper ele-wrapper-agreementCommitmentletter"
                              >
                                <hm-wang-editor
                                  ref="agreementCommitmentletter"
                                  v-model:value="
                                    agreementCommitmentletter.value
                                  "
                                  :toolbar-config="
                                    agreementCommitmentletter.toolbarConfig
                                  "
                                  :max-content-length="2"
                                  class="ele-agreementCommitmentletter"
                                >
                                </hm-wang-editor>
                              </div>
                            </hm-bg-card>
                          </div>
                          <div
                            class="ele-wrapper ele-wrapper-66d95dfc-4437-4ea7-86eb-26498a2706e5"
                          >
                            <hm-ant-input
                              value=""
                              title="活动咨询客服"
                              placeholder=""
                              width="480"
                              class="ele-66d95dfc-4437-4ea7-86eb-26498a2706e5"
                            >
                            </hm-ant-input>
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
                  <div class="ele-wrapper ele-wrapper-addActivityImgTableOne">
                    <hm-ant-button
                      ref="addActivityImgTableOne"
                      :text="addActivityImgTableOne.text"
                      :type="addActivityImgTableOne.type"
                      :icon="addActivityImgTableOne.icon"
                      :visible="addActivityImgTableOne.visible"
                      @click="onAddActivityImgTableOneClick"
                      class="ele-addActivityImgTableOne"
                    >
                    </hm-ant-button>
                  </div>
                  <div class="ele-wrapper ele-wrapper-addimage">
                    <hm-modal
                      ref="addimage"
                      title="背景图片"
                      v-model:visible="addimage.visible"
                      :z-index="1000"
                      height="300px"
                      class="ele-addimage"
                    >
                      <div
                        class="ele-wrapper ele-wrapper-04ce007d-e1c2-4f4d-ac07-44b7718beacf"
                      >
                        <hm-ant-formily
                          :config="{
                            sortNo: {
                              style: { width: '100%' },
                              type: 'InputNumber',
                              title: '图片排序',
                              required: true,
                              props: { placeholder: '图片序号' },
                            },
                            cycle: {
                              type: 'Input',
                              title: '参考尺寸',
                              style: { width: '100%' },
                              required: true,
                              props: {},
                            },
                            ' name': {
                              type: 'UploadImage',
                              title: '背景图片图片',
                              style: { width: '100%' },
                              required: true,
                              props: {},
                            },
                          }"
                          :value="{}"
                          :col-num="0"
                          :col-min-width="380"
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
                          :columns="activityImgTableOne.columns"
                          :data="activityImgTableOne.data"
                          :pagination-hidden="
                            activityImgTableOne.paginationHidden
                          "
                          :get-data-map="activityImgTableOne.getDataMap"
                          :actions="activityImgTableOne.actions"
                          :is-flat-action="activityImgTableOne.isFlatAction"
                          :row-class-name="activityImgTableOne.rowClassName"
                        >
                        </hm-ant-table>
                      </div>
                    </hm-bg-card>
                  </div>
                  <div
                    class="ele-wrapper ele-wrapper-c4dd580f-87df-48fe-8cd9-1eff76bb10e3"
                  >
                    <hm-ant-bg-text
                      text="报名页背景颜色设置"
                      font-size="14px"
                      padding="2"
                      class="ele-c4dd580f-87df-48fe-8cd9-1eff76bb10e3"
                    >
                    </hm-ant-bg-text>
                  </div>
                  <div
                    class="ele-wrapper ele-wrapper-6e5e70a6-798c-41bd-8624-38eb4618518a"
                  >
                    <hm-bg-card
                      width="100%"
                      height="100%"
                      border-radius=""
                      box-shadow-v-shadow=""
                      box-shadow-blur=""
                      class="ele-6e5e70a6-798c-41bd-8624-38eb4618518a"
                    >
                      <div
                        class="ele-wrapper ele-wrapper-2aca7b0a-b272-44c7-aa21-7c421b4d3492"
                      >
                        <hm-color-kit> </hm-color-kit>
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
                  <div
                    class="ele-wrapper ele-wrapper-610ad32f-244d-4af7-aad8-a7d343ac7d36"
                  >
                    <hm-ant-bg-text
                      text="活动参与人数信息修改"
                      font-size="14px"
                      padding="2"
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
                      <div class="ele-wrapper ele-wrapper-activityTwoForm">
                        <hm-ant-formily
                          ref="activityTwoForm"
                          :config="activityTwoForm.config"
                          v-model:value="activityTwoForm.value"
                          :col-num="0"
                          :col-min-width="380"
                          :schema="activityTwoForm.schema"
                          :label-col="4"
                          :wrapper-col="16"
                          class="ele-activityTwoForm"
                        >
                        </hm-ant-formily>
                      </div>
                    </hm-bg-card>
                  </div>
                  <div
                    class="ele-wrapper ele-wrapper-3e78690d-ccdb-4866-aeb3-c45a66de14fd"
                  >
                    <hm-bg-card
                      width="100%"
                      height="100%"
                      border-radius=""
                      box-shadow-v-shadow=""
                      box-shadow-blur=""
                      class="ele-3e78690d-ccdb-4866-aeb3-c45a66de14fd"
                    >
                      <div
                        class="ele-wrapper ele-wrapper-acb7b7e7-e364-4d1b-b80c-c68eb0426c4a"
                      >
                        <hm-ant-bg-text
                          text="报名分享图片设置"
                          font-size="14px"
                          padding="2"
                          class="ele-acb7b7e7-e364-4d1b-b80c-c68eb0426c4a"
                        >
                        </hm-ant-bg-text>
                      </div>
                      <div class="ele-wrapper ele-wrapper-sharingImageSettings">
                        <hm-modal
                          ref="sharingImageSettings"
                          title="分享图片"
                          v-model:visible="sharingImageSettings.visible"
                          :z-index="1000"
                          class="ele-sharingImageSettings"
                        >
                          <div
                            class="ele-wrapper ele-wrapper-8ef1d3f1-249d-4427-b301-382265c07670"
                          >
                            <hm-ant-formily
                              :config="{
                                size: {
                                  style: { width: '100%' },
                                  type: 'Input',
                                  title: '参考尺寸',
                                  required: true,
                                  props: {},
                                },
                                imgPath: {
                                  style: { width: '100%' },
                                  type: 'UploadImage',
                                  title: '图片',
                                  required: true,
                                  props: { action: '', accept: '.jpg,.png' },
                                },
                              }"
                              :value="{}"
                              :col-num="0"
                              :col-min-width="380"
                              :label-col="7"
                              :wrapper-col="14"
                            >
                            </hm-ant-formily>
                          </div>
                        </hm-modal>
                      </div>
                      <div class="ele-wrapper ele-wrapper-sharingImageTable">
                        <hm-ant-table
                          ref="sharingImageTable"
                          :columns="sharingImageTable.columns"
                          :data="sharingImageTable.data"
                          :pagination-hidden="
                            sharingImageTable.paginationHidden
                          "
                          :actions="sharingImageTable.actions"
                          :is-flat-action="sharingImageTable.isFlatAction"
                          :row-class-name="sharingImageTable.rowClassName"
                        >
                        </hm-ant-table>
                      </div>
                    </hm-bg-card>
                  </div>
                </hm-bg-card>
              </div>
            </hm-bg-card>
          </div>
          <div class="ele-wrapper ele-wrapper-isSaveOrUpdate">
            <hm-bg-card
              ref="isSaveOrUpdate"
              :box-shadow-blur="isSaveOrUpdate.boxShadowBlur"
              :hidden="isSaveOrUpdate.hidden"
              :box-shadow-v-shadow="isSaveOrUpdate.boxShadowVShadow"
              :border-radius="isSaveOrUpdate.borderRadius"
              :width="isSaveOrUpdate.width"
              :height="isSaveOrUpdate.height"
              :text-align="isSaveOrUpdate.textAlign"
              class="ele-isSaveOrUpdate"
            >
              <div
                class="ele-wrapper ele-wrapper-be6a0959-060d-4277-9590-2d5ddd2ab12e"
              >
                <hm-ant-button
                  :size="'large'"
                  icon="fa fa-check-circle"
                  text="创建活动"
                  :type="'primary'"
                  class="ele-be6a0959-060d-4277-9590-2d5ddd2ab12e"
                >
                </hm-ant-button>
              </div>
              <div
                class="ele-wrapper ele-wrapper-902e40e8-285f-4e3c-943d-eeafce2cbf7b"
              >
                <hm-ant-button
                  :ghost="true"
                  :size="'large'"
                  icon="fa fa-repeat"
                  text="重置"
                  :type="'primary'"
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
import HmModal from "/@/components/built-in/layout/HmModal.vue";
import HmAntTable from "/@/components/built-in/jeecg/HmAntTable.vue";
import HmWangEditor from "/@/components/built-in/jeecg/haomo/HmWangEditor.vue";
import HmAntInput from "/@/components/built-in/jeecg/HmAntInput.vue";
import HmColorKit from "/@/components/built-in/jeecg/HmColorKit.vue";

import { detail } from "/@/logics/ActivityForm";

export default {
  name: "ActivityEditingAndModification",
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
      isSaveOrUpdate: {
        boxShadowBlur: "",
        boxShadowVShadow: "",
        borderRadius: "",
        width: "100%",
        height: "100%",
        textAlign: "center",
        hidden: false,
      },
      addprice: {
        visible: false,
      },
      deleteproject: {
        visible: false,
      },
      addprize: {
        visible: false,
      },
      addimage: {
        visible: false,
      },
      sharingImageSettings: {
        visible: false,
      },
      title: {
        text: "创建活动",
        icon: "fa fa-tasks",
        fontSize: "14px",
      },
      isTitle: {
        text: "* 为必填项",
        fontSize: "14px",
        color: "#999999",
      },
      addActivityProject: {
        visible: true,
        text: "添加",
        type: "primary",
        icon: "fa fa-plus",
      },
      addActivityImgTableOne: {
        visible: true,
        text: "添加",
        type: "primary",
        icon: "fa fa-plus",
      },
      addActivityImgTableTwo: {
        visible: true,
        text: "添加",
        type: "primary",
        icon: "fa fa-plus",
      },
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
            },
          },
        },
        value: {
          status: 0,
        },
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
      },
      "8529c1db-0480-471c-8c06-e2f336b223f2": {
        config: {
          sortNo: {
            style: {
              width: "100%",
            },
            type: "InputNumber",
            title: "排序",
            required: true,
            props: {
              placeholder: "请输入排序",
            },
          },
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
            props: {
              action: "/api/sys/common/upload",
              accept: ".jpg,.png",
            },
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
            customRender: function (data) {
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
            dataIndex: "imgPath",
            title: "项目图片",
            key: "imgPath",
          },
          {
            dataIndex: "expense",
            title: "项目费用",
            key: "expense",
          },
          {
            dataIndex: "free",
            title: "是否免费",
            key: "free",
          },
          {
            dataIndex: "multipleOrder",
            width: 60,
            title: "可多人报名",
            key: "multipleOrder",
          },
          {
            dataIndex: "name",
            width: 130,
            title: "活动项目名称",
            key: "name",
            ellipsis: true,
          },
          {
            dataIndex: "synopsis",
            title: "项目简介",
            key: "synopsis",
            ellipsis: true,
          },
          {
            dataIndex: "sortNo",
            title: "排序",
            key: "sortNo",
          },
          {
            slots: {
              customRender: "action",
            },
            title: "操作",
            key: "action",
          },
        ],
        data: [],
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
              self.addprice.visible = true;
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
      "66d95dfc-4437-4ea7-86eb-26498a2706e5": {
        value: "",
      },
      "d6c85f5d-e546-49ce-802d-fe0a03aa2546": {
        config: {
          sortNo: {
            style: {
              width: "100%",
            },
            type: "InputNumber",
            title: "奖品排序",
            required: true,
            props: {
              placeholder: "奖品序号",
            },
          },
          cycle: {
            type: "Input",
            title: "奖品名称",
            style: {
              width: "100%",
            },
            required: true,
            props: {},
          },
          " name": {
            type: "UploadImage",
            title: "奖品图片",
            style: {
              width: "100%",
            },
            required: true,
            props: {},
          },
        },
        value: {},
      },
      activityImgTableTwo: {
        columns: [
          {
            dataIndex: "name",
            width: 50,
            title: "奖品图片",
            key: "name",
          },
          {
            dataIndex: "age",
            width: 80,
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
        isFlatAction: true,
        rowClassName: {},
      },
      activityExtTwoForm: {
        config: {
          ActivityRequirements: {
            style: {
              width: "100%",
            },
            type: "Input",
            title: "活动需求",
            required: false,
            props: {
              placeholder: "例子：2km/5km/10km",
            },
          },
          activityType: {
            style: {
              width: "100%",
            },
            type: "Input",
            title: "活动类型",
            required: false,
            props: {
              placeholder: "例子：跑步",
            },
          },
        },
        value: {},
      },
      activityRules: {
        value: "",
        toolbarConfig: {
          toolbarKeys: [
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
              key: "group-image",
              title: "图片",
              iconSvg:
                '<svg viewBox="0 0 1024 1024"><path d="M959.877 128l0.123 0.123v767.775l-0.123 0.122H64.102l-0.122-0.122V128.123l0.122-0.123h895.775zM960 64H64C28.795 64 0 92.795 0 128v768c0 35.205 28.795 64 64 64h896c35.205 0 64-28.795 64-64V128c0-35.205-28.795-64-64-64zM832 288.01c0 53.023-42.988 96.01-96.01 96.01s-96.01-42.987-96.01-96.01S682.967 192 735.99 192 832 234.988 832 288.01zM896 832H128V704l224.01-384 256 320h64l224.01-192z"></path></svg>',
              menuKeys: ["insertImage", "uploadImage"],
            },
            "fontSize",
            "fontFamily",
            "lineHeight",
            {
              key: "group-more-style",
              title: "更多",
              menuKeys: ["through", "code", "sup", "sub", "clearStyle"],
            },
            "bulletedList",
            "numberedList",
            "headerSelect",
            {
              key: "group-justify",
              title: "对齐",
              menuKeys: [
                "justifyLeft",
                "justifyRight",
                "justifyCenter",
                "justifyJustify",
              ],
            },
            {
              key: "group-indent",
              title: "缩进",
              menuKeys: ["indent", "delIndent"],
            },
            "todo",
            "divider",
            "codeBlock",
            "insertTable",
          ],
          excludeKeys: [],
        },
      },
      agreementCommitmentletter: {
        value: "",
        toolbarConfig: {
          toolbarKeys: [
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
              key: "group-image",
              title: "图片",
              iconSvg:
                '<svg viewBox="0 0 1024 1024"><path d="M959.877 128l0.123 0.123v767.775l-0.123 0.122H64.102l-0.122-0.122V128.123l0.122-0.123h895.775zM960 64H64C28.795 64 0 92.795 0 128v768c0 35.205 28.795 64 64 64h896c35.205 0 64-28.795 64-64V128c0-35.205-28.795-64-64-64zM832 288.01c0 53.023-42.988 96.01-96.01 96.01s-96.01-42.987-96.01-96.01S682.967 192 735.99 192 832 234.988 832 288.01zM896 832H128V704l224.01-384 256 320h64l224.01-192z"></path></svg>',
              menuKeys: ["insertImage", "uploadImage"],
            },
            "fontSize",
            "fontFamily",
            "lineHeight",
            {
              key: "group-more-style",
              title: "更多",
              menuKeys: ["through", "code", "sup", "sub", "clearStyle"],
            },
            "bulletedList",
            "numberedList",
            "headerSelect",
            {
              key: "group-justify",
              title: "对齐",
              menuKeys: [
                "justifyLeft",
                "justifyRight",
                "justifyCenter",
                "justifyJustify",
              ],
            },
            {
              key: "group-indent",
              title: "缩进",
              menuKeys: ["indent", "delIndent"],
            },
            "todo",
            "divider",
            "codeBlock",
            "insertTable",
          ],
          excludeKeys: [],
        },
      },
      "04ce007d-e1c2-4f4d-ac07-44b7718beacf": {
        config: {
          sortNo: {
            style: {
              width: "100%",
            },
            type: "InputNumber",
            title: "图片排序",
            required: true,
            props: {
              placeholder: "图片序号",
            },
          },
          cycle: {
            type: "Input",
            title: "参考尺寸",
            style: {
              width: "100%",
            },
            required: true,
            props: {},
          },
          " name": {
            type: "UploadImage",
            title: "背景图片图片",
            style: {
              width: "100%",
            },
            required: true,
            props: {},
          },
        },
        value: {},
      },
      activityImgTableOne: {
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
            width: 30,
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
              self.addimage.visible = true;
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
      activityTwoForm: {
        config: {
          unrealStatus: {
            style: {
              width: "100%",
            },
            type: "RadioGroup",
            title: "虚拟人数",
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
          unrealCount: {
            style: {
              width: "100%",
            },
            type: "Input",
            title: "活动人数",
            required: true,
            props: {},
          },
        },
        value: {
          unrealStatus: 0,
        },
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
      },
      sharingImageTable: {
        columns: [
          {
            dataIndex: "image",
            title: "图片",
            width: 180,
            key: "image",
          },
          {
            dataIndex: "size",
            title: "参考尺寸",
            key: "size",
          },
          {
            slots: {
              customRender: "action",
            },
            width: 180,
            title: "操作",
            key: "action",
          },
        ],
        data: [
          {
            image: "",
            size: "375 * 667",
          },
          {
            image: "",
            size: "375 * 667",
          },
        ],
        paginationHidden: true,
        actions: [
          {
            name: "编辑",
            icon: "fa fa-pencil",
            callback: function (item) {
              console.log("点击编辑: ", item);
              self.sharingImageSettings.visible = true;
            },
            type: "link",
          },
        ],
        isFlatAction: true,
        rowClassName: {},
      },
      "8ef1d3f1-249d-4427-b301-382265c07670": {
        config: {
          size: {
            style: {
              width: "100%",
            },
            type: "Input",
            title: "参考尺寸",
            required: true,
            props: {},
          },
          imgPath: {
            style: {
              width: "100%",
            },
            type: "UploadImage",
            title: "图片",
            required: true,
            props: {
              action: "",
              accept: ".jpg,.png",
            },
          },
        },
        value: {},
      },
    };
  },
  watch: {},
  created(e) {
    this.onCreated(e);
  },
  mounted(e) {
    detail(this, arguments);
  },
  methods: {
    onCreated() {
      let self = this;
      self.title.text = "创建活动";
      self.isSaveOrUpdate.hidden = false;
      self.isTitle.text = "* 为必填项";
      self.addActivityProject.visible = true;
      self.addActivityImgTableOne.visible = true;
      self.addActivityImgTableTwo.visible = true;
    },

    onAddActivityProjectClick() {
      this.addprice.visible = true;
    },
    onAddActivityImgTableTwoClick() {
      this.addprize.visible = true;
    },
    onAddActivityImgTableOneClick() {
      this.addimage.visible = true;
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

.ele-wrapper-title {
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

.ele-wrapper-addActivityProject {
  margin-left: 5px;
}

.ele-wrapper-addprice {
  /deep/.hm-modal {
    min-height: 0px;
  }
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

.ele-wrapper-addActivityImgTableTwo {
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

.ele-wrapper-b20c5e06-5a57-4774-a563-47501fbdd9f4 {
  width: 100%;
}

.ele-wrapper-1be11cc1-938f-4e91-ba2e-bf92a3fbf648 {
  border-left: 5px solid #0079fe;
  margin-top: 15px;
  padding-left: 5px;
  .hm-bg-text {
    font-weight: 700;
  }
}

.ele-wrapper-activityExtTwoForm {
  width: 100%;
  margin-top: 20px;
}

.ele-wrapper-633b539d-81dc-4e94-af68-dfba9182db48 {
  border-left: 5px solid #0079fe;
  margin-top: 15px;
  padding-left: 5px;
  .hm-bg-text {
    font-weight: 700;
  }
}

.ele-wrapper-activityRulesBox {
  width: 100%;
  .ele-activityRulesBox {
    display: flex;
    flex-wrap: nowrap;
  }
}

.ele-wrapper-676eaac4-2113-4104-a0d1-6c2704cf0cdb {
  width: 20.8%;
  text-align: right;
}

.ele-wrapper-activityRules {
  width: 72%;
  /deep/.w-e-scroll {
    height: 120px;
  }
}

.ele-wrapper-agreementCommitmentletterBox {
  width: 100%;
  .ele-agreementCommitmentletterBox {
    display: flex;
    flex-wrap: nowrap;
  }
}

.ele-wrapper-3e907204-ffc2-4af7-9c91-d488f3bbe726 {
  width: 20.8%;
  text-align: right;
}

.ele-wrapper-agreementCommitmentletter {
  width: 72%;
  /deep/.w-e-scroll {
    height: 120px;
  }
}

.ele-wrapper-66d95dfc-4437-4ea7-86eb-26498a2706e5 {
  margin-top: 20px;
  /deep/.input-title {
    width: 19.8%;
    text-align: right;
  }
  /deep/.ant-input-class {
    width: 71%;
  }
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

.ele-wrapper-addActivityImgTableOne {
  margin-left: 5px;
  margin-top: 15px;
}

.ele-wrapper-addimage {
  /deep/.hm-modal {
    min-height: 0px;
  }
}

.ele-wrapper-89ea97da-357c-4295-9803-b1d0b63db0a2 {
  width: 100%;
}

.ele-wrapper-c4dd580f-87df-48fe-8cd9-1eff76bb10e3 {
  border-left: 4px solid #0079fe;
  margin-top: 15px;
  margin-left: 8px;
  padding-left: 5px;
  .hm-bg-text {
    font-weight: 700;
  }
}

.ele-wrapper-6e5e70a6-798c-41bd-8624-38eb4618518a {
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

.ele-wrapper-610ad32f-244d-4af7-aad8-a7d343ac7d36 {
  border-left: 4px solid #0079fe;
  margin-top: 15px;
  margin-left: 8px;
  padding-left: 5px;
  .hm-bg-text {
    font-weight: 700;
  }
}

.ele-wrapper-messageRenedit {
  width: 100%;
  .ele-messageRenedit {
    display: flex;
    flex-direction: column;
  }
}

.ele-wrapper-activityTwoForm {
  width: 100%;
}

.ele-wrapper-3e78690d-ccdb-4866-aeb3-c45a66de14fd {
  width: 100%;
}

.ele-wrapper-acb7b7e7-e364-4d1b-b80c-c68eb0426c4a {
  border-left: 4px solid #0079fe;
  margin-left: 8px;
  padding-left: 5px;
  .hm-bg-text {
    font-weight: 700;
  }
}

.ele-wrapper-sharingImageSettings {
  /deep/.hm-modal {
    min-height: 0px;
  }
}

.ele-wrapper-isSaveOrUpdate {
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
