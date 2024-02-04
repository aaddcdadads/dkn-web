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
                                  :config="activityExtTwoForm.config"
                                  v-model:value="activityExtTwoForm.value"
                                  :col-num="0"
                                  :col-min-width="380"
                                  :schema="activityExtTwoForm.schema"
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
                              padding="2"
                              font-size="14px"
                              text="活动信息"
                              class="ele-633b539d-81dc-4e94-af68-dfba9182db48"
                            >
                            </hm-ant-bg-text>
                          </div>
                          <div class="ele-wrapper ele-wrapper-activityRulesBox">
                            <hm-bg-card
                              ref="activityRulesBox"
                              box-shadow-blur=""
                              box-shadow-v-shadow=""
                              border-radius=""
                              width="100%"
                              height="100%"
                              class="ele-activityRulesBox"
                            >
                              <div
                                class="ele-wrapper ele-wrapper-e422be72-923b-42ad-bef4-7e886c910422"
                              >
                                <hm-ant-bg-text
                                  padding="2"
                                  font-size="14px"
                                  text="活动规则："
                                  :text-align="'right'"
                                  :enable-html-render="true"
                                  class="ele-e422be72-923b-42ad-bef4-7e886c910422"
                                >
                                </hm-ant-bg-text>
                              </div>
                              <div
                                class="ele-wrapper ele-wrapper-activityRules"
                              >
                                <hm-wang-editor
                                  ref="activityRules"
                                  :mode="'simple'"
                                  v-model:value="activityRules.value"
                                  :toolbar-config="activityRules.toolbarConfig"
                                  :editor-config="activityRules.editorConfig"
                                  :max-content-length="2"
                                  @change="onActivityRulesChange"
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
                              box-shadow-blur=""
                              box-shadow-v-shadow=""
                              border-radius=""
                              width="100%"
                              height="100%"
                              class="ele-agreementCommitmentletterBox"
                            >
                              <div
                                class="ele-wrapper ele-wrapper-04dfcec4-d289-4d3c-a977-7ed5a6ce3822"
                              >
                                <hm-ant-bg-text
                                  padding="2"
                                  font-size="14px"
                                  text="协议与承诺书："
                                  class="ele-04dfcec4-d289-4d3c-a977-7ed5a6ce3822"
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
                                  :editor-config="
                                    agreementCommitmentletter.editorConfig
                                  "
                                  :max-content-length="2"
                                  @change="onAgreementCommitmentletterChange"
                                  class="ele-agreementCommitmentletter"
                                >
                                </hm-wang-editor>
                              </div>
                            </hm-bg-card>
                          </div>
                          <div class="ele-wrapper ele-wrapper-customerService">
                            <hm-ant-input
                              ref="customerService"
                              v-model:value="customerService.value"
                              title="活动咨询客服"
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
                      title="报名页背景图"
                      v-model:visible="addBackground.visible"
                      :z-index="1000"
                      height="300px"
                      :auto-close="false"
                      @ok="onAddBackgroundOk"
                      @cancel="onAddBackgroundCancel"
                      class="ele-addBackground"
                    >
                      <div class="ele-wrapper ele-wrapper-activityImgFormOne">
                        <hm-ant-formily
                          ref="activityImgFormOne"
                          :config="activityImgFormOne.config"
                          v-model:value="activityImgFormOne.value"
                          :col-num="0"
                          :col-min-width="380"
                          :schema="activityImgFormOne.schema"
                          :label-col="7"
                          :wrapper-col="14"
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
                      text="报名页背景颜色设置"
                      font-size="14px"
                      padding="2"
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
                          @changecolorkit="onTextColourKitChangecolorkit"
                        >
                        </hm-color-kit>
                      </div>
                    </hm-bg-card>
                  </div>
                  <div
                    class="ele-wrapper ele-wrapper-cf8baab6-8c0a-4974-95ba-4c9e67749519"
                  >
                    <hm-bg-card
                      box-shadow-blur=""
                      box-shadow-v-shadow=""
                      border-radius=""
                      width="100%"
                      height="100%"
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
import HmWangEditor from "/@/components/built-in/jeecg/haomo/HmWangEditor.vue";
import HmAntInput from "/@/components/built-in/jeecg/HmAntInput.vue";
import HmColorKit from "/@/components/built-in/jeecg/HmColorKit.vue";

import { addActivty } from "/@/logics/AddActivityForm";

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
      addBackground: {
        visible: true,
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
      sharingImageSettings: {
        visible: false,
      },
      activityProjectItem: {},
      deleteItem: {},
      activityImgTableTwoItem: {},
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
        editorConfig: {
          MENU_CONF: {
            uploadImage: {
              server: "/api/upload",
              headers: {},
              fieldName: "file",
            },
            uploadVideo: {
              server: "/api/upload",
              headers: {},
              fieldName: "file",
            },
          },
          scroll: true,
          readOnly: false,
          placeholder: "请输入...",
          autoFocus: true,
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
        editorConfig: {
          MENU_CONF: {
            uploadImage: {
              server: "/api/upload",
              headers: {},
              fieldName: "file",
            },
            uploadVideo: {
              server: "/api/upload",
              headers: {},
              fieldName: "file",
            },
          },
          scroll: true,
          readOnly: false,
          placeholder: "请输入...",
          autoFocus: true,
        },
      },
      activityImgTableOneItem: {},
      imgItem: {},
      customerService: {
        value: "",
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
            customRender: function (data) {
              let free = data.record.free;
              return free === 0 ? "是" : "否";
            },
          },
          {
            dataIndex: "multipleOrder",
            width: 60,
            title: "可多人报名",
            key: "multipleOrder",
            customRender: function (data) {
              let multipleOrder = data.record.multipleOrder;
              return multipleOrder === 0 ? "是" : "否";
            },
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
            width: 100,
            title: "操作",
            key: "action",
            align: "center",
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
            title: "奖品排序",
            key: "sortNo",
            width: 120,
            ellipsis: true,
          },
          {
            slots: {
              customRender: "action",
            },
            width: 80,
            title: "操作",
            key: "action",
            align: "center",
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
        config: {
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
            title: "图片排序",
            key: "sortNo",
            width: 120,
            ellipsis: true,
          },
          {
            slots: {
              customRender: "action",
            },
            width: 80,
            title: "操作",
            key: "action",
            align: "center",
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
            imgSize: "375 * 667",
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
              self.sharingImageSettings.visible = true;
            },
            type: "link",
          },
        ],
        isFlatAction: true,
        rowClassName: {},
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
      self.activityRules.value = "";
      self.agreementCommitmentletter.value = "";
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
        self.$refs.activityProjectTable.cData = [];
        self.$refs.activityImgTableTwo.cData = [];
        self.$refs.activityImgTableOne.cData = [];
        self.$refs.sharingImageTable.cData = [{}];
        self.activityRules.value = "";
        self.agreementCommitmentletter.value = "";
        self.customerService.value = "";
      };
    },

    onAddBtn1Click() {
      this.addproject.visible = true;
      this.activityProjectTableStatus = 1;
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
        self.$refs.activityProjectTable.cData.forEach((e, index) => {
          if (e.index == self.activityProjectItem.index) {
            self.$refs.activityProjectTable.cData[index] = {
              index: self.activityProjectItem.index,
              ...item,
            };
          }
        });
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
      }
    },
    onAddBtn2Click() {
      this.addprize.visible = true;
      this.activityImgTableTwoStatus = 1;
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
        self.$refs.activityImgTableTwo.cData.forEach((e, index) => {
          if (e.index == self.activityImgTableTwoItem.index) {
            self.$refs.activityImgTableTwo.cData[index] = {
              index: self.activityImgTableTwoItem.index,
              ...item,
            };
          }
        });
      }
      self.addprize.visible = false;
      self.$refs.addActivityImgFormTwo.reset();
    },
    onAddprizeCancel() {
      this.addprize.visible = false;
      this.$refs.addActivityImgFormTwo.reset();
    },
    onActivityRulesChange(e) {
      this.activityRules.value = e;
    },
    onAgreementCommitmentletterChange(e) {
      this.agreementCommitmentletter.value = e;
    },
    onAddBtn3Click() {
      this.addBackground.visible = true;
      this.activityImgTableOneStatus = 1;
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
      self.addBackground.visible = false;
      self.$refs.activityImgFormOne.reset();
    },
    onAddBackgroundCancel() {
      this.addBackground.visible = false;
      this.$refs.activityImgFormOne.reset();
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
      item.imgSize = "375 * 667";
      self.$refs.sharingImageTable.cData = [item];
      //self.$refs.sharingImageTable.cData.push(item)

      self.sharingImageSettings.visible = false;
      self.$refs.activityImgFormTre.reset();
    },
    onSharingImageSettingsCancel() {
      this.sharingImageSettings.visible = false;
    },
    onEle78Fb256892504A78987DC766B916F771Click() {
      addActivty(this, arguments);
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

.ele-wrapper-activityProjectTable {
  /deep/ th:nth-child(8) > span {
    padding-left: 0px !important;
  }
  /deep/.ant-table-tbody > tr > td:nth-child(8) {
    padding-left: 0px !important;
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

.ele-wrapper-633b539d-81dc-4e94-af68-dfba9182db48 {
  border-left: 4px solid #0079fe;
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

.ele-wrapper-e422be72-923b-42ad-bef4-7e886c910422 {
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

.ele-wrapper-04dfcec4-d289-4d3c-a977-7ed5a6ce3822 {
  width: 20.8%;
  text-align: right;
}

.ele-wrapper-agreementCommitmentletter {
  width: 72%;
  /deep/.w-e-scroll {
    height: 120px;
  }
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
  /deep/.ant-modal-content {
    > .ant-modal-body {
      overflow-y: scroll;
    }
  }
}

.ele-wrapper-activityImgFormOne {
  height: 800px;
  background-color: red;
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
