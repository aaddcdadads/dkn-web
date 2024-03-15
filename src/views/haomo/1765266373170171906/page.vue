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
              <div class="ele-wrapper ele-wrapper-title">
                <hm-ant-icon-text
                  ref="title"
                  :text="title.text"
                  :icon="title.icon"
                  :font-size="title.fontSize"
                  class="ele-title"
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
                          padding="2"
                          font-size="14px"
                          text="活动项目设置（至少一个）"
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
                      <div class="ele-wrapper ele-wrapper-addproject">
                        <hm-modal
                          ref="addproject"
                          title="活动项目"
                          v-model:visible="addproject.visible"
                          :z-index="1000"
                          height=""
                          :auto-close="false"
                          @ok="onAddprojectOk"
                          @cancel="onAddprojectCancel"
                          class="ele-addproject"
                        >
                          <div
                            class="ele-wrapper ele-wrapper-activityProjectForm"
                          >
                            <hm-ant-formily
                              ref="activityProjectForm"
                              :config="activityProjectForm.config"
                              v-model:value="activityProjectForm.value"
                              :col-num="0"
                              :col-min-width="380"
                              :schema="activityProjectForm.schema"
                              :label-col="6"
                              :wrapper-col="16"
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
                          @ok="onDeleteprojectOk"
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
                              class="ele-activityProjectTable"
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
                              :auto-close="false"
                              @ok="onAddprizeOk"
                              @cancel="onAddprizeCancel"
                              class="ele-addprize"
                            >
                              <div
                                class="ele-wrapper ele-wrapper-addActivityImgFormTwo"
                              >
                                <hm-ant-formily
                                  ref="addActivityImgFormTwo"
                                  :config="addActivityImgFormTwo.config"
                                  v-model:value="addActivityImgFormTwo.value"
                                  :col-num="0"
                                  :col-min-width="380"
                                  :schema="addActivityImgFormTwo.schema"
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
                                  class="ele-activityImgTableTwo"
                                >
                                </hm-ant-table>
                              </div>
                            </hm-bg-card>
                          </div>
                          <div
                            class="ele-wrapper ele-wrapper-e3996ba6-7678-4de0-abea-832a2097c2c9"
                          >
                            <hm-bg-card
                              box-shadow-blur=""
                              box-shadow-v-shadow=""
                              border-radius=""
                              width="100%"
                              height="100%"
                              class="ele-e3996ba6-7678-4de0-abea-832a2097c2c9"
                            >
                              <div
                                class="ele-wrapper ele-wrapper-37b100fe-30bf-47b0-9bed-b98bbfebd6f1"
                              >
                                <hm-ant-bg-text
                                  padding="2"
                                  font-size="14px"
                                  text="活动运动信息"
                                  class="ele-37b100fe-30bf-47b0-9bed-b98bbfebd6f1"
                                >
                                </hm-ant-bg-text>
                              </div>
                              <div
                                class="ele-wrapper ele-wrapper-activityExtTwoForm"
                              >
                                <hm-ant-formily
                                  ref="activityExtTwoForm"
                                  :schema="activityExtTwoForm.schema"
                                  :wrapper-col="16"
                                  :col-num="0"
                                  :label-col="5"
                                  :col-min-width="380"
                                  :config="activityExtTwoForm.config"
                                  v-model:value="activityExtTwoForm.value"
                                  class="ele-activityExtTwoForm"
                                >
                                </hm-ant-formily>
                              </div>
                            </hm-bg-card>
                          </div>
                          <div
                            class="ele-wrapper ele-wrapper-aaba946a-d941-4abc-85fe-15bc805b4457"
                          >
                            <hm-bg-card
                              width="100%"
                              height="100%"
                              border-radius=""
                              box-shadow-v-shadow=""
                              box-shadow-blur=""
                              class="ele-aaba946a-d941-4abc-85fe-15bc805b4457"
                            >
                              <div
                                class="ele-wrapper ele-wrapper-cb320e37-bd6b-4901-9a10-6de43f0b51c9"
                              >
                                <hm-ant-bg-text
                                  padding="2"
                                  font-size="14px"
                                  text="活动地址"
                                  class="ele-cb320e37-bd6b-4901-9a10-6de43f0b51c9"
                                >
                                </hm-ant-bg-text>
                              </div>
                              <div
                                class="ele-wrapper ele-wrapper-d873ccb8-7e59-4395-bcfc-8e2f4e73088a"
                              >
                                <hm-bg-card
                                  width="100%"
                                  height="100%"
                                  border-radius=""
                                  box-shadow-v-shadow=""
                                  box-shadow-blur=""
                                  class="ele-d873ccb8-7e59-4395-bcfc-8e2f4e73088a"
                                >
                                  <div class="ele-wrapper ele-wrapper-address">
                                    <hm-ant-input
                                      ref="address"
                                      v-model:value="address.value"
                                      title="活动地址"
                                      placeholder="例子：上海市徐汇区"
                                      width="480"
                                      class="ele-address"
                                    >
                                    </hm-ant-input>
                                  </div>
                                </hm-bg-card>
                              </div>
                              <div
                                class="ele-wrapper ele-wrapper-2b650687-b88f-4fe2-a2a3-f29ff7bf53b3"
                              >
                                <hm-ant-bg-text
                                  text="活动核销轮次设置（最多可设置3轮，至少1轮每轮时间段不允许出现重叠）"
                                  font-size="14px"
                                  padding="2"
                                  class="ele-2b650687-b88f-4fe2-a2a3-f29ff7bf53b3"
                                >
                                </hm-ant-bg-text>
                              </div>
                              <div
                                class="ele-wrapper ele-wrapper-activityPickUpButton"
                              >
                                <hm-ant-button
                                  ref="activityPickUpButton"
                                  :text="activityPickUpButton.text"
                                  :type="activityPickUpButton.type"
                                  :icon="activityPickUpButton.icon"
                                  :visible="activityPickUpButton.visible"
                                  @click="onActivityPickUpButtonClick"
                                  class="ele-activityPickUpButton"
                                >
                                </hm-ant-button>
                              </div>
                              <div
                                class="ele-wrapper ele-wrapper-activityPickUpModal"
                              >
                                <hm-modal
                                  ref="activityPickUpModal"
                                  title="核销轮次"
                                  v-model:visible="activityPickUpModal.visible"
                                  :z-index="1000"
                                  :auto-close="false"
                                  @ok="onActivityPickUpModalOk"
                                  @cancel="onActivityPickUpModalCancel"
                                  class="ele-activityPickUpModal"
                                >
                                  <div
                                    class="ele-wrapper ele-wrapper-activityPickUpForm"
                                  >
                                    <hm-ant-formily
                                      ref="activityPickUpForm"
                                      :config="activityPickUpForm.config"
                                      v-model:value="activityPickUpForm.value"
                                      :col-num="0"
                                      :col-min-width="380"
                                      :schema="activityPickUpForm.schema"
                                      :label-col="7"
                                      :wrapper-col="14"
                                    >
                                    </hm-ant-formily>
                                  </div>
                                </hm-modal>
                              </div>
                              <div
                                class="ele-wrapper ele-wrapper-activityPickUpTable"
                              >
                                <hm-ant-table
                                  ref="activityPickUpTable"
                                  :columns="activityPickUpTable.columns"
                                  :data="activityPickUpTable.data"
                                  :get-data-map="activityPickUpTable.getDataMap"
                                  :actions="activityPickUpTable.actions"
                                  :is-flat-action="
                                    activityPickUpTable.isFlatAction
                                  "
                                  :row-class-name="
                                    activityPickUpTable.rowClassName
                                  "
                                >
                                </hm-ant-table>
                              </div>
                              <div
                                class="ele-wrapper ele-wrapper-71104b33-c64b-4cf7-9044-51db79ed2874"
                              >
                                <hm-ant-bg-text
                                  text="参与人信息配置（必填）"
                                  font-size="14px"
                                  padding="2"
                                  class="ele-71104b33-c64b-4cf7-9044-51db79ed2874"
                                >
                                </hm-ant-bg-text>
                              </div>
                              <div
                                class="ele-wrapper ele-wrapper-activityDictItemButton"
                              >
                                <hm-ant-button
                                  ref="activityDictItemButton"
                                  :text="activityDictItemButton.text"
                                  :type="activityDictItemButton.type"
                                  :icon="activityDictItemButton.icon"
                                  :visible="activityDictItemButton.visible"
                                  @click="onActivityDictItemButtonClick"
                                  class="ele-activityDictItemButton"
                                >
                                </hm-ant-button>
                              </div>
                              <div
                                class="ele-wrapper ele-wrapper-activityDictItemModal"
                              >
                                <hm-modal
                                  ref="activityDictItemModal"
                                  title="参与人信息配置"
                                  v-model:visible="
                                    activityDictItemModal.visible
                                  "
                                  :z-index="1000"
                                  :auto-close="false"
                                  @ok="onActivityDictItemModalOk"
                                  @cancel="onActivityDictItemModalCancel"
                                  class="ele-activityDictItemModal"
                                >
                                  <div
                                    class="ele-wrapper ele-wrapper-activityDictItemForm"
                                  >
                                    <hm-ant-formily
                                      ref="activityDictItemForm"
                                      :config="activityDictItemForm.config"
                                      v-model:value="activityDictItemForm.value"
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
                                class="ele-wrapper ele-wrapper-activityDictItemTable"
                              >
                                <hm-ant-table
                                  ref="activityDictItemTable"
                                  :columns="activityDictItemTable.columns"
                                  :data="activityDictItemTable.data"
                                  :actions="activityDictItemTable.actions"
                                  :is-flat-action="
                                    activityDictItemTable.isFlatAction
                                  "
                                  :row-class-name="
                                    activityDictItemTable.rowClassName
                                  "
                                >
                                </hm-ant-table>
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
                  <div class="ele-wrapper ele-wrapper-addBackground">
                    <hm-modal
                      ref="addBackground"
                      :z-index="1000"
                      v-model:visible="addBackground.visible"
                      title="报名页背景图"
                      width="600"
                      :style="addBackground.style"
                      :auto-close="false"
                      height=""
                      @cancel="onAddBackgroundCancel"
                      @ok="onAddBackgroundOk"
                      class="ele-addBackground"
                    >
                      <div class="ele-wrapper ele-wrapper-activityImgFormOne">
                        <hm-ant-formily
                          ref="activityImgFormOne"
                          :schema="activityImgFormOne.schema"
                          :wrapper-col="14"
                          :col-num="0"
                          :label-col="7"
                          :col-min-width="380"
                          :config="activityImgFormOne.config"
                          v-model:value="activityImgFormOne.value"
                          class="ele-activityImgFormOne"
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
                          :get-data-map="activityImgTableOne.getDataMap"
                          :actions="activityImgTableOne.actions"
                          :is-flat-action="activityImgTableOne.isFlatAction"
                          :row-class-name="activityImgTableOne.rowClassName"
                          class="ele-activityImgTableOne"
                        >
                        </hm-ant-table>
                      </div>
                    </hm-bg-card>
                  </div>
                  <div
                    class="ele-wrapper ele-wrapper-d785c5c4-1020-487d-9d7c-c7a32ae8a48b"
                  >
                    <hm-ant-bg-text
                      padding="2"
                      font-size="14px"
                      text="报名页背景颜色设置"
                      class="ele-d785c5c4-1020-487d-9d7c-c7a32ae8a48b"
                    >
                    </hm-ant-bg-text>
                  </div>
                  <div
                    class="ele-wrapper ele-wrapper-6cde1a8d-1302-438c-b680-233060f55136"
                  >
                    <hm-bg-card
                      box-shadow-blur=""
                      box-shadow-v-shadow=""
                      border-radius=""
                      width="100%"
                      height="100%"
                      class="ele-6cde1a8d-1302-438c-b680-233060f55136"
                    >
                      <div class="ele-wrapper ele-wrapper-bgColourKit">
                        <hm-color-kit
                          ref="bgColourKit"
                          :color="bgColourKit.color"
                          @changecolorkit="onBgColourKitChangecolorkit"
                        >
                        </hm-color-kit>
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
                      <div class="ele-wrapper ele-wrapper-colourkit">
                        <hm-color-kit
                          ref="colourkit"
                          @changecolorkit="onColourkitChangecolorkit"
                        >
                        </hm-color-kit>
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
                      width="100%"
                      height="100%"
                      border-radius=""
                      box-shadow-v-shadow=""
                      box-shadow-blur=""
                      class="ele-8e197d87-c68a-402f-90a7-400dc9c35edc"
                    >
                      <div class="ele-wrapper ele-wrapper-textColourKit">
                        <hm-color-kit
                          ref="textColourKit"
                          :color="textColourKit.color"
                          @changecolorkit="onTextColourKitChangecolorkit"
                        >
                        </hm-color-kit>
                      </div>
                    </hm-bg-card>
                  </div>
                  <div
                    class="ele-wrapper ele-wrapper-cb6694c4-1a06-4212-a50f-7d72ce02ce68"
                  >
                    <hm-ant-bg-text
                      text="活动参与人数信息修改（虚拟人数，实际显示人数为实际报名+虚拟人数）"
                      font-size="14px"
                      padding="2"
                      class="ele-cb6694c4-1a06-4212-a50f-7d72ce02ce68"
                    >
                    </hm-ant-bg-text>
                  </div>
                  <div class="ele-wrapper ele-wrapper-messageRenedit">
                    <hm-bg-card
                      ref="messageRenedit"
                      box-shadow-blur=""
                      box-shadow-v-shadow=""
                      border-radius=""
                      width="100%"
                      height="100%"
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
                    class="ele-wrapper ele-wrapper-cf8baab6-8c0a-4974-95ba-4c9e67749519"
                  >
                    <hm-bg-card
                      width="100%"
                      height="100%"
                      border-radius=""
                      box-shadow-v-shadow=""
                      box-shadow-blur=""
                      class="ele-cf8baab6-8c0a-4974-95ba-4c9e67749519"
                    >
                      <div
                        class="ele-wrapper ele-wrapper-428bc034-6551-4c0e-b7c0-36c4e903ac9e"
                      >
                        <hm-ant-bg-text
                          padding="2"
                          font-size="14px"
                          text="报名分享图片设置"
                          class="ele-428bc034-6551-4c0e-b7c0-36c4e903ac9e"
                        >
                        </hm-ant-bg-text>
                      </div>
                      <div class="ele-wrapper ele-wrapper-sharingImageSettings">
                        <hm-modal
                          ref="sharingImageSettings"
                          title="分享图片"
                          v-model:visible="sharingImageSettings.visible"
                          :z-index="1000"
                          height=""
                          :auto-close="false"
                          @ok="onSharingImageSettingsOk"
                          @cancel="onSharingImageSettingsCancel"
                          class="ele-sharingImageSettings"
                        >
                          <div
                            class="ele-wrapper ele-wrapper-activityImgFormTre"
                          >
                            <hm-ant-formily
                              ref="activityImgFormTre"
                              :config="activityImgFormTre.config"
                              v-model:value="activityImgFormTre.value"
                              :col-num="0"
                              :col-min-width="380"
                              :schema="activityImgFormTre.schema"
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
                          :get-data-map="sharingImageTable.getDataMap"
                          :actions="sharingImageTable.actions"
                          :is-flat-action="sharingImageTable.isFlatAction"
                          :row-class-name="sharingImageTable.rowClassName"
                        >
                        </hm-ant-table>
                      </div>
                      <div
                        class="ele-wrapper ele-wrapper-68ad2c49-1e8e-4aaa-8c65-7bb1268ad2c1"
                      >
                        <hm-ant-bg-text
                          text="活动信息"
                          font-size="14px"
                          padding="2"
                          class="ele-68ad2c49-1e8e-4aaa-8c65-7bb1268ad2c1"
                        >
                        </hm-ant-bg-text>
                      </div>
                    </hm-bg-card>
                  </div>
                  <div
                    class="ele-wrapper ele-wrapper-d5a8bc0c-0036-4449-8519-430c556ce236"
                  >
                    <hm-bg-card
                      width="100%"
                      height="100%"
                      border-radius=""
                      box-shadow-v-shadow=""
                      box-shadow-blur=""
                      class="ele-d5a8bc0c-0036-4449-8519-430c556ce236"
                    >
                      <div
                        class="ele-wrapper ele-wrapper-7bd3d144-f35d-4dac-aff1-06db6231e523"
                      >
                        <hm-ant-bg-text
                          text="活动规则："
                          font-size="14px"
                          padding="2"
                          class="ele-7bd3d144-f35d-4dac-aff1-06db6231e523"
                        >
                        </hm-ant-bg-text>
                      </div>
                      <div class="ele-wrapper ele-wrapper-activityRules">
                        <hm-wang-editor
                          ref="activityRules"
                          v-model:value="activityRules.value"
                          :toolbar-config="activityRules.toolbarConfig"
                          :max-content-length="2"
                          @change="onActivityRulesChange"
                          class="ele-activityRules"
                        >
                        </hm-wang-editor>
                      </div>
                    </hm-bg-card>
                  </div>
                  <div
                    class="ele-wrapper ele-wrapper-848c7ef3-6177-40c5-8b2a-e78bddf99054"
                  >
                    <hm-bg-card
                      width="100%"
                      height="100%"
                      border-radius=""
                      box-shadow-v-shadow=""
                      box-shadow-blur=""
                      class="ele-848c7ef3-6177-40c5-8b2a-e78bddf99054"
                    >
                      <div
                        class="ele-wrapper ele-wrapper-8aaf6c3d-4395-402a-a7f3-7c5b3e0dd16a"
                      >
                        <hm-ant-bg-text
                          text="协议与承诺书："
                          font-size="14px"
                          padding="2"
                          class="ele-8aaf6c3d-4395-402a-a7f3-7c5b3e0dd16a"
                        >
                        </hm-ant-bg-text>
                      </div>
                      <div
                        class="ele-wrapper ele-wrapper-agreementCommitmentletter"
                      >
                        <hm-wang-editor
                          ref="agreementCommitmentletter"
                          v-model:value="agreementCommitmentletter.value"
                          :toolbar-config="
                            agreementCommitmentletter.toolbarConfig
                          "
                          :max-content-length="2"
                          @change="onAgreementCommitmentletterChange"
                          class="ele-agreementCommitmentletter"
                        >
                        </hm-wang-editor>
                      </div>
                    </hm-bg-card>
                  </div>
                  <div
                    class="ele-wrapper ele-wrapper-56d1d904-8eec-4ac8-a483-a0f3cd3a2d06"
                  >
                    <hm-bg-card
                      width="100%"
                      height="100%"
                      border-radius=""
                      box-shadow-v-shadow=""
                      box-shadow-blur=""
                      class="ele-56d1d904-8eec-4ac8-a483-a0f3cd3a2d06"
                    >
                      <div class="ele-wrapper ele-wrapper-customerService">
                        <hm-ant-input
                          ref="customerService"
                          v-model:value="customerService.value"
                          title="活动咨询客服"
                          :disabled="customerService.disabled"
                          width="480"
                          class="ele-customerService"
                        >
                        </hm-ant-input>
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
              :width="isSaveOrUpdate.width"
              :height="isSaveOrUpdate.height"
              :border-radius="isSaveOrUpdate.borderRadius"
              :text-align="isSaveOrUpdate.textAlign"
              :hidden="isSaveOrUpdate.hidden"
              class="ele-isSaveOrUpdate"
            >
              <div
                class="ele-wrapper ele-wrapper-78fb2568-9250-4a78-987d-c766b916f771"
              >
                <hm-ant-button
                  text="保存"
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
                  text="返回"
                  :type="'primary'"
                  :size="'large'"
                  :ghost="true"
                  icon="fa fa-repeat"
                  @click="onEleb0A4296243014B4D952505Bfef232B34Click"
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
import HmAntInput from "/@/components/built-in/jeecg/HmAntInput.vue";
import HmColorKit from "/@/components/built-in/jeecg/HmColorKit.vue";
import HmWangEditor from "/@/components/built-in/jeecg/haomo/HmWangEditor.vue";

import { detail, saveOrUpdate } from "/@/logics/ActivityForm";

export default {
  name: "NewActivityEditingandModificationPage",
  components: {
    HmBgCard,
    HmAntIconText,
    HmAntBgText,
    HmAntFormily,
    HmAntButton,
    HmModal,
    HmAntTable,
    HmAntInput,
    HmColorKit,
    HmWangEditor,
  },
  data() {
    let self = this;
    return {
      isSaveOrUpdate: {
        width: "100%",
        height: "100%",
        borderRadius: "",
        textAlign: "center",
        hidden: false,
      },
      addproject: {
        visible: false,
      },
      activityProjectForm: {
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
            type: "InputNumber",
            title: "项目费用",
            required: true,
            props: {
              min: 0,
              precision: 2,
            },
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
          orderNumber: {
            style: {
              width: "100%",
            },
            type: "InputNumber",
            title: "可报名人数",
            required: true,
            props: {
              min: 1,
              precision: 0,
            },
          },
          alias: {
            style: {
              width: "100%",
            },
            type: "Input",
            title: "组别名",
            required: true,
            props: {},
          },
        },
        value: {},
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
      deleteproject: {
        visible: false,
      },
      addprize: {
        visible: false,
      },
      addActivityImgFormTwo: {
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
          imgPath: {
            style: {
              width: "100%",
              height: "126px",
            },
            type: "UploadImage",
            title: "奖品图片",
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
            title: "奖品名称",
            required: true,
            props: {
              placeholder: "请输入奖品名称",
            },
          },
        },
        value: {},
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
      activityPickUpModal: {
        visible: false,
      },
      addBackground: {
        visible: false,
        style: {
          overflow: "auto",
          top: "100px",
          width: "600px",
          height: "600px",
        },
      },
      activityImgFormOne: {
        config: {
          sortNo: {
            style: {
              width: "100%",
            },
            type: "InputNumber",
            title: "排序",
            required: true,
            props: {
              placeholder: "图片序号",
            },
          },
          imgPath: {
            style: {
              width: "100%",
            },
            type: "UploadImage",
            title: "奖品图片",
            required: true,
            props: {
              action: "/api/sys/common/upload",
              accept: ".jpg,.png",
            },
          },
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
        value: {},
      },
      sharingImageSettings: {
        visible: false,
      },
      activityImgFormTre: {
        config: {
          imgPath: {
            style: {
              width: "100%",
            },
            type: "UploadImage",
            title: "图片",
            required: true,
            props: {
              action: "/api/sys/common/upload",
              accept: ".jpg,.png",
            },
          },
        },
        value: {},
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
      activityProjectItem: {},
      deleteItem: {},
      delActivityProjectList: {},
      delActivityImgList: {},
      delActivityPickUpList: {},
      delActivityDictItemList: {},
      activityImgTableTwoItem: {},
      activityPickUpTableItem: {},
      activityDictItemModal: {
        visible: false,
      },
      dictItem: {},
      activityImgTableOneItem: {},
      imgItem: {},
      activityRules: {
        value: "",
        toolbarConfig: {
          excludeKeys: [],
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
              iconSvg:
                '<svg viewBox="0 0 1024 1024"><path d="M959.877 128l0.123 0.123v767.775l-0.123 0.122H64.102l-0.122-0.122V128.123l0.122-0.123h895.775zM960 64H64C28.795 64 0 92.795 0 128v768c0 35.205 28.795 64 64 64h896c35.205 0 64-28.795 64-64V128c0-35.205-28.795-64-64-64zM832 288.01c0 53.023-42.988 96.01-96.01 96.01s-96.01-42.987-96.01-96.01S682.967 192 735.99 192 832 234.988 832 288.01zM896 832H128V704l224.01-384 256 320h64l224.01-192z"></path></svg>',
              title: "图片",
              menuKeys: ["insertImage", "uploadImage"],
              key: "group-image",
            },
            "fontSize",
            "fontFamily",
            "lineHeight",
            {
              title: "更多",
              menuKeys: ["through", "code", "sup", "sub", "clearStyle"],
              key: "group-more-style",
            },
            "bulletedList",
            "numberedList",
            "headerSelect",
            {
              title: "对齐",
              menuKeys: [
                "justifyLeft",
                "justifyRight",
                "justifyCenter",
                "justifyJustify",
              ],
              key: "group-justify",
            },
            {
              title: "缩进",
              menuKeys: ["indent", "delIndent"],
              key: "group-indent",
            },
            "todo",
            "divider",
            "codeBlock",
            "insertTable",
          ],
        },
      },
      agreementCommitmentletter: {
        value: "",
        toolbarConfig: {
          excludeKeys: [],
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
              iconSvg:
                '<svg viewBox="0 0 1024 1024"><path d="M959.877 128l0.123 0.123v767.775l-0.123 0.122H64.102l-0.122-0.122V128.123l0.122-0.123h895.775zM960 64H64C28.795 64 0 92.795 0 128v768c0 35.205 28.795 64 64 64h896c35.205 0 64-28.795 64-64V128c0-35.205-28.795-64-64-64zM832 288.01c0 53.023-42.988 96.01-96.01 96.01s-96.01-42.987-96.01-96.01S682.967 192 735.99 192 832 234.988 832 288.01zM896 832H128V704l224.01-384 256 320h64l224.01-192z"></path></svg>',
              title: "图片",
              menuKeys: ["insertImage", "uploadImage"],
              key: "group-image",
            },
            "fontSize",
            "fontFamily",
            "lineHeight",
            {
              title: "更多",
              menuKeys: ["through", "code", "sup", "sub", "clearStyle"],
              key: "group-more-style",
            },
            "bulletedList",
            "numberedList",
            "headerSelect",
            {
              title: "对齐",
              menuKeys: [
                "justifyLeft",
                "justifyRight",
                "justifyCenter",
                "justifyJustify",
              ],
              key: "group-justify",
            },
            {
              title: "缩进",
              menuKeys: ["indent", "delIndent"],
              key: "group-indent",
            },
            "todo",
            "divider",
            "codeBlock",
            "insertTable",
          ],
        },
      },
      title: {
        text: "创建活动",
        icon: "fa fa-tasks",
        fontSize: "14px",
      },
      isTitle: {},
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
      activityPickUpButton: {
        visible: true,
        text: "添加",
        type: "primary",
        icon: "fa fa-plus",
      },
      activityDictItemButton: {
        visible: true,
        text: "添加",
        type: "primary",
        icon: "fa fa-plus",
      },
      customerService: {
        disabled: false,
        value: "",
      },
      bgColourKit: {
        color: "#59c7f9",
      },
      colourKit: {},
      textColourKit: {
        color: "#59c7f9",
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
          alias: {
            style: {
              width: "100%",
            },
            type: "Input",
            title: "活动别称",
            required: false,
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
      activityProjectTable: {
        columns: [
          {
            dataIndex: "sortNo",
            title: "排序",
            key: "sortNo",
          },
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
            dataIndex: "orderNumber",
            title: "可报名人数",
            key: "orderNumber",
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
            dataIndex: "alias",
            title: "组别名",
            key: "alias",
            ellipsis: true,
          },
          {
            slots: {
              customRender: "action",
            },
            width: 100,
            title: "操作",
            align: "center",
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
              self.activityProjectItem = item;
              self.activityProjectTableStatus = 2;
              self.addproject.visible = true;
              self.activityProjectForm.config.imgPath.props.imageUrl = self.getImg(
                item.imgPath
              );
              setTimeout(() => {
                self.$refs.activityProjectForm.setFormValues(item);
              });
            },
            type: "link",
          },
          {
            name: "删除",
            icon: "fa fa-trash",
            callback: function (item) {
              console.log("点击删除: ", item);
              self.deleteItem = item;
              self.deleteStatus = 1;
              self.deleteproject.visible = true;
            },
            type: "link",
          },
        ],
        isFlatAction: true,
        rowClassName: {},
      },
      activityImgTableTwo: {
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
            dataIndex: "path",
            title: "奖品图片",
            key: "path",
          },
          {
            dataIndex: "name",
            title: "奖品名称",
            key: "name",
          },
          {
            dataIndex: "sortNo",
            width: 120,
            title: "奖品排序",
            key: "sortNo",
            ellipsis: true,
          },
          {
            slots: {
              customRender: "action",
            },
            width: 80,
            title: "操作",
            align: "center",
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
              self.addprize.visible = true;
              self.activityImgTableTwoItem = item;
              self.activityImgTableTwoStatus = 2;
              self.addActivityImgFormTwo.config.imgPath.props.imageUrl = self.getImg(
                item.path
              );
              item.imgPath = item.path;
              setTimeout(() => {
                self.$refs.addActivityImgFormTwo.setFormValues(item);
              });
            },
            type: "link",
          },
          {
            name: "删除",
            icon: "fa fa-trash",
            callback: function (item) {
              console.log("点击删除: ", item);
              self.deleteItem = item;
              self.deleteStatus = 3;
              self.deleteproject.visible = true;
            },
            type: "link",
          },
        ],
        isFlatAction: true,
        rowClassName: {},
      },
      activityExtTwoForm: {
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
          requirements: {
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
      activityPickUpTable: {
        columns: [
          {
            dataIndex: "number",
            title: "核销轮次",
            key: "number",
          },
          {
            dataIndex: "name",
            title: "轮次名称",
            key: "name",
          },
          {
            dataIndex: "verifiabletime",
            title: "可核销时间段",
            key: "verifiabletime",
            customRender: function (data) {
              return `${data.record.startTime}--${data.record.endTime}`;
            },
          },
          {
            slots: {
              customRender: "action",
            },
            dataIndex: "",
            title: "操作",
            key: "action",
          },
        ],
        data: [],
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
              self.activityPickUpModal.visible = true;
              self.activityPickUpTableItem = item;
              self.activityPickUpTableStatus = 2;
              item.pickUpTime = [item.startTime, item.endTime];
              setTimeout(() => {
                self.$refs.activityPickUpForm.setFormValues(item);
              });
            },
            type: "link",
          },
          {
            name: "删除",
            icon: "fa fa-trash",
            callback: function (item) {
              console.log("点击删除: ", item);
              self.deleteItem = item;
              self.deleteStatus = 4;
              self.deleteproject.visible = true;
            },
            type: "link",
          },
        ],
        isFlatAction: true,
        rowClassName: {},
      },
      activityDictItemTable: {
        columns: [
          {
            title: "字段名",
            dataIndex: "sysDictItemId_dictText",
            key: "sysDictItemId_dictText",
            ellipsis: true,
          },
          {
            title: "操作",
            dataIndex: "",
            key: "action",
            slots: {
              customRender: "action",
            },
          },
        ],
        data: [],
        actions: [
          {
            name: "删除",
            callback: function (item) {
              self.deleteItem = item;
              self.deleteStatus = 5;
              self.deleteproject.visible = true;
            },
            type: "link",
            icon: "fa fa-trash",
          },
        ],
        isFlatAction: true,
        rowClassName: {},
      },
      address: {
        value: "",
      },
      activityPickUpForm: {
        config: {
          name: {
            style: {
              width: "100%",
            },
            type: "Input",
            title: "轮次名称",
            required: true,
            props: {
              placeholder: "轮次名称",
            },
          },
          pickUpTime: {
            style: {
              width: "100%",
            },
            type: "RangePicker",
            title: "核销时间段",
            required: true,
            props: {
              disabledDate: function (current) {
                return current && current < self.$moment().endOf("day");
              },
            },
          },
        },
        value: {},
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
      activityDictItemForm: {
        config: {
          sysDictItemId: {
            type: "HmAntSelect",
            title: "参与人配置项",
            style: {
              width: "100%",
            },
            props: {
              title: "",
              url: "/api/sys/dict/getDictItem",
              params: {
                code: "member_detail",
              },
              mode: "multiple",
              dataMap: {
                label: "itemText",
                value: "id",
              },
            },
            events: {
              "@change": function (e, i) {
                self.dictItem = JSON.parse(JSON.stringify(i));
              },
            },
          },
        },
        value: {},
      },
      activityImgTableOne: {
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
            dataIndex: "path",
            title: "活动图片",
            key: "path",
          },
          {
            dataIndex: "imgSize",
            title: "参考尺寸（或使用二倍图）",
            key: "imgSize",
          },
          {
            dataIndex: "sortNo",
            width: 120,
            title: "图片排序",
            key: "sortNo",
            ellipsis: true,
          },
          {
            slots: {
              customRender: "action",
            },
            width: 80,
            title: "操作",
            align: "center",
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
              self.addBackground.visible = true;
              self.activityImgTableOneStatus = 2;
              self.activityImgTableOneItem = item;
              self.activityImgFormOne.config.imgPath.props.imageUrl = self.getImg(
                item.path
              );
              item.imgPath = item.path;
              setTimeout(() => {
                self.$refs.activityImgFormOne.setFormValues(item);
              });
            },
            type: "link",
          },
          {
            name: "删除",
            icon: "fa fa-trash",
            callback: function (item) {
              console.log("点击删除: ", item);
              self.deleteItem = item;
              self.deleteStatus = 2;
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
            events: {
              "@change": function (e) {
                let item = self.$refs.activityTwoForm.getFormValues();
                self.$refs.activityTwoForm.config.unrealCount.required =
                  e.target.value == 0 ? true : false;
                setTimeout(() => {
                  self.$refs.activityTwoForm.setFormValues(item);
                });
              },
            },
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
            type: "InputNumber",
            title: "活动人数",
            required: false,
            props: {},
          },
        },
        value: {
          unrealStatus: 1,
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
            dataIndex: "path",
            title: "分享图片",
            key: "path",
          },
          {
            dataIndex: "imgSize",
            title: "参考尺寸",
            key: "imgSize",
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
            customRender: "",
            imgSize: "375 * 607",
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
              self.imgItem = item;
              self.sharingImageSettings.visible = true;
              self.activityImgFormTre.config.imgPath.props.imageUrl = self.getImg(
                item.path
              );
              item.imgPath = item.path;
              setTimeout(() => {
                self.$refs.activityImgFormTre.setFormValues(item);
              });
            },
            type: "link",
          },
        ],
        isFlatAction: true,
        rowClassName: {},
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
      self.activityPickUpButton.visible = true;
      self.activityDictItemButton.visible = true;
      self.customerService.disabled = false;
      self.bgColourKit.color = "#59c7f9";
      self.colourKit.color = "#59c7f9";
      self.textColourKit.color = "#59c7f9";
      self.delActivityProjectList = [];
      self.delActivityImgList = [];
      self.delActivityPickUpList = [];
      self.delActivityDictItemList = [];
      self.getImg = function (url) {
        if (!url) {
          return "";
        }
        if (url.substring(0, 4) === "http") {
          return url;
        }
        return `/api/sys/common/static/${url}`;
      };
      self.reset = function () {
        self.$refs.activityForm.reset();
        self.$refs.activityExtTwoForm.reset();
        self.$refs.activityTwoForm.reset();
        self.$refs.activityProjectTable.cData = [];
        self.$refs.activityImgTableTwo.cData = [];
        self.$refs.activityImgTableOne.cData = [];
        self.$refs.sharingImageTable.cData = [{}];
        self.activityRules.value = "";
        self.agreementCommitmentletter.value = "";
        self.customerService.value = "";
      };
      self.checkPickUpTime = function () {
        const items = self.$refs.activityPickUpTable.cData;
        if (items.length === 0) {
          return true;
        }
        if (items.length === 3 && self.activityPickUpTableStatus === 1) {
          self.$message.error("最多设置3轮核销");
          return false;
        }
        let item = self.$refs.activityPickUpForm.getFormValues();
        let startTime = new Date(
          self.$moment(item.pickUpTime[0]).format("YYYY-MM-DD") + " 00:00:00"
        ).getTime();
        let endTime = new Date(
          self.$moment(item.pickUpTime[1]).format("YYYY-MM-DD") + " 23:59:59"
        ).getTime();
        let status = true;
        items.forEach((e) => {
          let start = new Date(self.$moment(e.startTime)).getTime();
          let end = new Date(self.$moment(e.endTime)).getTime();
          try {
            if (startTime >= start && startTime <= end) {
              throw new Error();
            }
            if (endTime >= start && endTime <= end) {
              throw new Error();
            }
          } catch {
            status = false;
          }
        });
        if (!status) {
          self.$message.error("轮次时间冲突请重新选择");
        }
        return status;
      };
    },

    onAddActivityProjectClick() {
      this.addproject.visible = true;
      this.activityProjectTableStatus = 1;
      this.activityProjectForm.config.imgPath.props.imageUrl = null;
    },
    async onAddprojectOk() {
      let self = this;
      await self.$refs.activityProjectForm.validate();
      let item = self.$refs.activityProjectForm.getFormValues();
      //处理图片
      if (item.imgPath?.file?.response?.message) {
        item.imgPath = item.imgPath?.file?.response?.message;
      } else {
        item.imgPath = self.activityProjectItem.imgPath;
      }
      if (self.activityProjectTableStatus === 1) {
        item.index = Math.floor(Math.random() * 10000);
        self.$refs.activityProjectTable.cData.push(item);
      } else if (self.activityProjectTableStatus === 2) {
        if (
          self.activityProjectItem.index ||
          self.activityProjectItem.index == 0
        ) {
          self.$refs.activityProjectTable.cData.forEach((e, index) => {
            if (e.index == self.activityProjectItem.index) {
              self.$refs.activityProjectTable.cData[index] = {
                index: self.activityProjectItem.index,
                ...item,
              };
            }
          });
        } else {
          self.$refs.activityProjectTable.cData.forEach((e, index) => {
            if (e.id == self.activityProjectItem.id) {
              self.$refs.activityProjectTable.cData[index] = {
                index: self.activityProjectItem.index,
                ...e,
                ...item,
              };
            }
          });
        }
      }
      self.addproject.visible = false;
      self.$refs.activityProjectForm.reset();
    },
    onAddprojectCancel() {
      this.addproject.visible = false;
      this.$refs.activityProjectForm.reset();
    },
    onDeleteprojectOk() {
      let self = this;
      if (self.deleteItem.index || self.deleteItem.index == 0) {
        switch (self.deleteStatus) {
          case 1:
            self.$refs.activityProjectTable.cData.forEach((e, index) => {
              if (e.index == self.deleteItem.index) {
                self.$refs.activityProjectTable.cData.splice(index, 1);
              }
            });

            break;
          case 2:
            self.$refs.activityImgTableOne.cData.forEach((e, index) => {
              if (e.index == self.deleteItem.index) {
                self.$refs.activityImgTableOne.cData.splice(index, 1);
              }
            });
            break;
          case 3:
            self.$refs.activityImgTableTwo.cData.forEach((e, index) => {
              if (e.index == self.deleteItem.index) {
                self.$refs.activityImgTableTwo.cData.splice(index, 1);
              }
            });
            break;
          case 4:
            self.$refs.activityPickUpTable.cData.forEach((e, index) => {
              if (e.index == self.deleteItem.index) {
                self.$refs.activityPickUpTable.cData.splice(index, 1);
              }
            });
            break;
          case 5:
            self.$refs.activityDictItemTable.cData.forEach((e, index) => {
              if (e.index == self.deleteItem.index) {
                self.$refs.activityDictItemTable.cData.splice(index, 1);
              }
            });
            break;
        }
      } else {
        switch (self.deleteStatus) {
          case 1:
            self.$refs.activityProjectTable.cData.forEach((e, index) => {
              if (e.id == self.deleteItem.id) {
                self.$refs.activityProjectTable.cData.splice(index, 1);
                self.delActivityProjectList.push(e.id);
              }
            });

            break;
          case 2:
            self.$refs.activityImgTableOne.cData.forEach((e, index) => {
              if (e.id == self.deleteItem.id) {
                self.$refs.activityImgTableOne.cData.splice(index, 1);
                self.delActivityImgList.push(e.id);
              }
            });
            break;
          case 3:
            self.$refs.activityImgTableTwo.cData.forEach((e, index) => {
              if (e.id == self.deleteItem.id) {
                self.$refs.activityImgTableTwo.cData.splice(index, 1);
                self.delActivityImgList.push(e.id);
              }
            });
            break;
          case 4:
            self.$refs.activityPickUpTable.cData.forEach((e, index) => {
              if (e.id == self.deleteItem.id) {
                self.$refs.activityPickUpTable.cData.splice(index, 1);
                self.delActivityPickUpList.push(e.id);
              }
            });
            break;
          case 5:
            self.$refs.activityDictItemTable.cData.forEach((e, index) => {
              if (e.id == self.deleteItem.id) {
                self.$refs.activityDictItemTable.cData.splice(index, 1);
                self.delActivityDictItemList.push(e.id);
              }
            });
            break;
        }
      }
    },
    onAddActivityImgTableTwoClick() {
      this.addprize.visible = true;
      this.activityImgTableTwoStatus = 1;
      this.addActivityImgFormTwo.config.imgPath.props.imageUrl = null;
    },
    async onAddprizeOk() {
      let self = this;
      await self.$refs.addActivityImgFormTwo.validate();
      let item = self.$refs.addActivityImgFormTwo.getFormValues();
      if (item.imgPath?.file?.response?.message) {
        item.path = item.imgPath?.file?.response?.message;
      } else {
        item.path = self.activityImgTableTwoItem.path;
      }
      delete item.imgPath;
      if (self.activityImgTableTwoStatus === 1) {
        item.index = Math.floor(Math.random() * 10000);
        //处理图片
        self.$refs.activityImgTableTwo.cData.push(item);
      } else if (self.activityImgTableTwoStatus === 2) {
        if (
          self.activityImgTableTwoItem.index ||
          self.activityImgTableTwoItem.index == 0
        ) {
          self.$refs.activityImgTableTwo.cData.forEach((e, index) => {
            if (e.index == self.activityImgTableTwoItem.index) {
              self.$refs.activityImgTableTwo.cData[index] = {
                index: self.activityImgTableTwoItem.index,
                ...item,
              };
            }
          });
        } else {
          self.$refs.activityImgTableTwo.cData.forEach((e, index) => {
            if (e.id == self.activityImgTableTwoItem.id) {
              self.$refs.activityImgTableTwo.cData[index] = {
                index: self.activityImgTableTwoItem.index,
                ...e,
                ...item,
              };
            }
          });
        }
      }
      self.addprize.visible = false;
      self.$refs.addActivityImgFormTwo.reset();
    },
    onAddprizeCancel() {
      this.addprize.visible = false;
      this.$refs.addActivityImgFormTwo.reset();
    },
    onActivityPickUpButtonClick() {
      this.activityPickUpModal.visible = true;
      this.activityPickUpTableStatus = 1;
    },
    async onActivityPickUpModalOk() {
      let self = this;
      await self.$refs.activityPickUpForm.validate();
      if (!self.checkPickUpTime()) {
        return;
      }
      let item = self.$refs.activityPickUpForm.getFormValues();
      item.startTime =
        self.$moment(item.pickUpTime[0]).format("YYYY-MM-DD") + " 00:00:00";
      item.endTime =
        self.$moment(item.pickUpTime[1]).format("YYYY-MM-DD") + " 23:59:59";
      delete item.pickUpTime;
      if (self.activityPickUpTableStatus === 1) {
        item.index = Math.floor(Math.random() * 10000);
        self.$refs.activityPickUpTable.cData.push(item);
      } else if (self.activityPickUpTableStatus === 2) {
        if (
          self.activityPickUpTableItem.index ||
          self.activityPickUpTableItem.index == 0
        ) {
          self.$refs.activityPickUpTable.cData.forEach((e, index) => {
            if (e.index == self.activityPickUpTableItem.index) {
              self.$refs.activityPickUpTable.cData[index] = {
                index: self.activityPickUpTableItem.index,
                ...item,
              };
            }
          });
        } else {
          self.$refs.activityPickUpTable.cData.forEach((e, index) => {
            if (e.id == self.activityPickUpTableItem.id) {
              self.$refs.activityPickUpTable.cData[index] = {
                index: self.activityPickUpTableItem.index,
                ...e,
                ...item,
              };
            }
          });
        }
      }
      self.$refs.activityPickUpTable.cData.sort(
        (a, b) =>
          new Date(self.$moment(a.endTime)).getTime() -
          new Date(self.$moment(b.endTime)).getTime()
      );
      self.$refs.activityPickUpTable.cData.forEach((e, index) => {
        e.number = index + 1;
      });
      self.activityPickUpModal.visible = false;
      self.$refs.activityPickUpForm.reset();
    },
    onActivityPickUpModalCancel() {
      this.activityPickUpModal.visible = false;
      this.$refs.activityPickUpForm.reset();
    },
    onActivityDictItemButtonClick() {
      this.activityDictItemModal.visible = true;
      this.activityDictItemStatus = 1;
    },
    async onActivityDictItemModalOk() {
      let self = this;
      await self.$refs.activityDictItemForm.validate();
      let item = self.$refs.activityDictItemForm.getFormValues();
      let list = [];
      for (var i = 0; i < item.sysDictItemId.length; i++) {
        const id = item.sysDictItemId[i];
        const s = self.dictItem.findIndex((a) => a.id === id);
        const it = self.dictItem[s];

        const is = self.$refs.activityDictItemTable.cData.findIndex(
          (e) => e.sysDictItemId === id
        );
        console.log(is);
        if (is != -1) {
          self.$message.error(`配置项${it.itemText}已存在`);
          throw new Error(`配置项${it.itemText}已存在`);
        }
        let par = {
          type: 1,
          sysDictItemId_dictText: it.itemText,
          sysDictItemId: id,
          index: Math.floor(Math.random() * 10000),
        };
        list.push(par);
      }
      self.$refs.activityDictItemTable.cData = [
        ...self.$refs.activityDictItemTable.cData,
        ...list,
      ];
      self.activityDictItemModal.visible = false;
      self.$refs.activityDictItemForm.reset();
    },
    onActivityDictItemModalCancel() {
      this.activityDictItemModal.visible = false;
      this.$refs.activityDictItemForm.reset();
    },
    onAddActivityImgTableOneClick() {
      this.addBackground.visible = true;
      this.activityImgTableOneStatus = 1;
      this.activityImgFormOne.config.imgPath.props.imageUrl = null;
    },
    onAddBackgroundCancel() {
      this.addBackground.visible = false;
      this.$refs.activityImgFormOne.reset();
    },
    async onAddBackgroundOk() {
      let self = this;
      await self.$refs.activityImgFormOne.validate();
      let item = self.$refs.activityImgFormOne.getFormValues();

      //处理图片
      if (item.imgPath?.file?.response?.message) {
        item.path = item.imgPath?.file?.response?.message;
      } else {
        item.path = self.activityImgTableOneItem.path;
      }
      delete item.imgPath;
      item.imgSize = "375 * 667";
      if (self.activityImgTableOneStatus === 1) {
        item.index = Math.floor(Math.random() * 10000);

        self.$refs.activityImgTableOne.cData.push(item);
      } else {
        self.$refs.activityImgTableOne.cData.forEach((e, index) => {
          if (e.index == self.activityImgTableOneItem.index) {
            self.$refs.activityImgTableOne.cData[index] = {
              index: self.activityImgTableOneItem.index,
              ...item,
            };
          }
        });
      }
      self.$refs.activityImgTableOne.cData.sort((a, b) => a.sortNo - b.sortNo);
      self.$refs.activityImgTableOne.cData.forEach((e, index) => {
        e.imgSize = "375 * 667";
        if (index === 0) {
          e.imgSize = "375 * 455";
        }
      });
      self.addBackground.visible = false;
      self.$refs.activityImgFormOne.reset();
    },
    onBgColourKitChangecolorkit(e) {
      this.bgColour = e;
    },
    onColourkitChangecolorkit(e) {
      this.colour = e;
    },
    onTextColourKitChangecolorkit(e) {
      this.textColour = e;
    },
    async onSharingImageSettingsOk() {
      let self = this;
      await self.$refs.activityImgFormTre.validate();
      let item = self.$refs.activityImgFormTre.getFormValues();
      item.index = Math.floor(Math.random() * 10000);

      //处理图片
      if (item.imgPath?.file?.response?.message) {
        item.path = item.imgPath?.file?.response?.message;
      } else {
        item.path = self.imgItem.path;
      }
      delete item.imgPath;
      item.imgSize = "375 * 607";
      self.$refs.sharingImageTable.cData = [item];
      //self.$refs.sharingImageTable.cData.push(item)
      if (self.imgItem && self.imgItem.id) {
        item.id = self.imgItem.id;
      }
      self.sharingImageSettings.visible = false;
      self.$refs.activityImgFormTre.reset();
    },
    onSharingImageSettingsCancel() {
      this.sharingImageSettings.visible = false;
    },
    onActivityRulesChange(e) {
      this.activityRules.value = e;
    },
    onAgreementCommitmentletterChange(e) {
      this.agreementCommitmentletter.value = e;
    },
    onEle78Fb256892504A78987DC766B916F771Click() {
      saveOrUpdate(this, arguments);
    },
    onEleb0A4296243014B4D952505Bfef232B34Click() {
      this.reset();
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
    width: 100% !important;
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

.ele-wrapper-activityProjectTable {
  /deep/ th:nth-child(8) > span {
    padding-left: 0px !important;
  }
  /deep/.ant-table-tbody > tr > td:nth-child(8) {
    padding-left: 0px !important;
  }
  /deep/.ant-table-thead > tr > th > span {
    padding-left: 0px !important;
  }
  /deep/.ant-table-thead > tr > th {
    text-align: center !important;
  }
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

.ele-wrapper-activityImgTableTwo {
  /deep/ th:nth-child(4) > span {
    padding-left: 0px !important;
  }
  /deep/.ant-table-tbody > tr > td:nth-child(4) {
    padding-left: 0px !important;
  }
  /deep/.ant-table-body {
    overflow: hidden !important;
  }
}

.ele-wrapper-e3996ba6-7678-4de0-abea-832a2097c2c9 {
  width: 100%;
}

.ele-wrapper-37b100fe-30bf-47b0-9bed-b98bbfebd6f1 {
  border-left: 4px solid #0079fe;
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

.ele-wrapper-aaba946a-d941-4abc-85fe-15bc805b4457 {
  width: 100%;
}

.ele-wrapper-cb320e37-bd6b-4901-9a10-6de43f0b51c9 {
  border-left: 4px solid #0079fe;
  margin-top: 15px;
  padding-left: 5px;
  .hm-bg-text {
    font-weight: 700;
  }
}

.ele-wrapper-d873ccb8-7e59-4395-bcfc-8e2f4e73088a {
  width: 100%;
}

.ele-wrapper-address {
  width: 100%;
  margin-top: 20px;
  /deep/.input-title {
    width: 19%;
    text-align: right;
  }
  /deep/.ant-input-class {
    width: 67.5%;
  }
}

.ele-wrapper-2b650687-b88f-4fe2-a2a3-f29ff7bf53b3 {
  border-left: 4px solid #0079fe;
  margin-top: 20px;
  padding-left: 5px;
  .hm-bg-text {
    font-weight: 700;
  }
}

.ele-wrapper-activityPickUpButton {
  margin-left: 5px;
  margin-top: 15px;
}

.ele-wrapper-activityPickUpModal {
  /deep/.hm-modal {
    min-height: 0px;
  }
}

.ele-wrapper-71104b33-c64b-4cf7-9044-51db79ed2874 {
  border-left: 4px solid #0079fe;
  margin-top: 20px;
  padding-left: 5px;
  .hm-bg-text {
    font-weight: 700;
  }
}

.ele-wrapper-activityDictItemButton {
  margin-left: 5px;
  margin-top: 15px;
}

.ele-wrapper-activityDictItemModal {
  /deep/.hm-modal {
    min-height: 0px;
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
}

.ele-wrapper-addBackground {
  /deep/.hm-modal {
    min-height: 0px;
  }
  /deep/.dialog-class {
    overflow: auto !important;
  }

  /deep/.ant-modal-body {
    height: 200px;
  }
}

.ele-wrapper-activityImgFormOne {
  width: 100%;
  /deep/.ant-form-item-control-input {
    overflow: auto;
  }
}

.ele-wrapper-89ea97da-357c-4295-9803-b1d0b63db0a2 {
  width: 100%;
}

.ele-wrapper-activityImgTableOne {
  /deep/ th:nth-child(4) > span {
    padding-left: 0px !important;
  }
  /deep/.ant-table-tbody > tr > td:nth-child(4) {
    padding-left: 0px !important;
  }
  /deep/.ant-table-body {
    overflow: hidden !important;
  }
}

.ele-wrapper-d785c5c4-1020-487d-9d7c-c7a32ae8a48b {
  border-left: 4px solid #0079fe;
  margin-top: 15px;
  margin-left: 8px;
  padding-left: 5px;
  .hm-bg-text {
    font-weight: 700;
  }
}

.ele-wrapper-6cde1a8d-1302-438c-b680-233060f55136 {
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

.ele-wrapper-cb6694c4-1a06-4212-a50f-7d72ce02ce68 {
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

.ele-wrapper-cf8baab6-8c0a-4974-95ba-4c9e67749519 {
  width: 100%;
}

.ele-wrapper-428bc034-6551-4c0e-b7c0-36c4e903ac9e {
  border-left: 4px solid #0079fe;
  margin-top: 15px;
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

.ele-wrapper-68ad2c49-1e8e-4aaa-8c65-7bb1268ad2c1 {
  border-left: 4px solid #0079fe;
  margin-top: 20px;
  padding-left: 5px;
  .hm-bg-text {
    font-weight: 700;
  }
}

.ele-wrapper-d5a8bc0c-0036-4449-8519-430c556ce236 {
  width: 100%;
}

.ele-wrapper-7bd3d144-f35d-4dac-aff1-06db6231e523 {
  width: 20.8%;
  text-align: right;
}

.ele-wrapper-activityRules {
  width: 72%;
  /deep/.w-e-scroll {
    height: 120px;
  }
}

.ele-wrapper-848c7ef3-6177-40c5-8b2a-e78bddf99054 {
  width: 100%;
}

.ele-wrapper-8aaf6c3d-4395-402a-a7f3-7c5b3e0dd16a {
  width: 20.8%;
  text-align: right;
}

.ele-wrapper-agreementCommitmentletter {
  width: 72%;
  /deep/.w-e-scroll {
    height: 120px;
  }
}

.ele-wrapper-56d1d904-8eec-4ac8-a483-a0f3cd3a2d06 {
  width: 100%;
}

.ele-wrapper-customerService {
  width: 100%;
  margin-top: 20px;
  /deep/.input-title {
    width: 19.8%;
    text-align: right;
  }
  /deep/.ant-input-class {
    width: 71%;
  }
}

.ele-wrapper-isSaveOrUpdate {
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
