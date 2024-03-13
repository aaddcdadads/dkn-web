<template>
  <div class="page card">
    <div class="page-wrapper">
      <div class="ele-wrapper ele-wrapper-crudPageCard">
        <hm-bg-card
          ref="crudPageCard"
          width="100%"
          height=""
          border-radius=""
          padding=""
          box-shadow-v-shadow=""
          box-shadow-blur=""
          box-shadow-color="#00000000"
          class="ele-crudPageCard"
        >
          <div class="ele-wrapper ele-wrapper-crudPagePanel">
            <hm-panel
              ref="crudPagePanel"
              :height="crudPagePanel.height"
              :title="crudPagePanel.title"
              :padding="crudPagePanel.padding"
              :title-block-color="crudPagePanel.titleBlockColor"
              class="ele-crudPagePanel"
            >
              <div class="ele-wrapper ele-wrapper-activityFilter">
                <hm-ant-formily
                  ref="activityFilter"
                  :config="activityFilter.config"
                  v-model:value="activityFilter.value"
                  :col-num="0"
                  :col-min-width="280"
                  :schema="activityFilter.schema"
                  :label-col="7"
                  :wrapper-col="16"
                  class="ele-activityFilter"
                >
                </hm-ant-formily>
              </div>
              <div class="ele-wrapper ele-wrapper-addButton">
                <hm-ant-button
                  ref="addButton"
                  text="新增"
                  :type="'primary'"
                  icon="fa fa-plus"
                  :visible="false"
                  @click="onAddButtonClick"
                  class="ele-addButton"
                >
                </hm-ant-button>
              </div>
              <div class="ele-wrapper ele-wrapper-importButton">
                <hm-ant-upload
                  ref="importButton"
                  title=""
                  text="导入"
                  :button-type="'primary'"
                  v-model:file-list="importButton.fileList"
                  action="/api/restify/activity/importExcel"
                  :headers="importButton.headers"
                  :visible="importButton.visible"
                  class="ele-importButton"
                >
                </hm-ant-upload>
              </div>
              <div class="ele-wrapper ele-wrapper-downloadTemplateButton">
                <hm-ant-button
                  ref="downloadTemplateButton"
                  text="下载模板"
                  :type="'primary'"
                  icon="fa fa-download"
                  :visible="false"
                  @click="onDownloadTemplateButtonClick"
                  class="ele-downloadTemplateButton"
                >
                </hm-ant-button>
              </div>
              <div class="ele-wrapper ele-wrapper-exportButton">
                <hm-ant-button
                  ref="exportButton"
                  :text="exportButton.text"
                  :type="exportButton.type"
                  :icon="exportButton.icon"
                  :visible="exportButton.visible"
                  @click="onExportButtonClick"
                  class="ele-exportButton"
                >
                </hm-ant-button>
              </div>
              <div
                class="ele-wrapper ele-wrapper-d305a01c-2a94-4341-899d-5e2787dbfd8b"
              >
                <hm-panel
                  height=""
                  title=""
                  box-shadow-v-shadow=""
                  box-shadow-blur=""
                  class="ele-d305a01c-2a94-4341-899d-5e2787dbfd8b"
                >
                  <template v-slot:slot-title-icon>
                    <div
                      class="ele-wrapper ele-wrapper-4aad8761-7b58-4d08-b5a2-91fea232f9fe"
                    >
                      <hm-bg-card
                        width="100%"
                        height=""
                        border-radius=""
                        padding=""
                        box-shadow-color="#00000000"
                        class="ele-4aad8761-7b58-4d08-b5a2-91fea232f9fe"
                      >
                        <div class="ele-wrapper ele-wrapper-bathqiyong">
                          <hm-ant-button
                            ref="bathqiyong"
                            :text="bathqiyong.text"
                            :type="bathqiyong.type"
                            :disabled="bathqiyong.disabled"
                            @click="onBathqiyongClick"
                            class="ele-bathqiyong"
                          >
                          </hm-ant-button>
                        </div>
                        <div class="ele-wrapper ele-wrapper-batchBisabled">
                          <hm-ant-button
                            ref="batchBisabled"
                            :text="batchBisabled.text"
                            :type="batchBisabled.type"
                            :disabled="batchBisabled.disabled"
                            @click="onBatchBisabledClick"
                            class="ele-batchBisabled"
                          >
                          </hm-ant-button>
                        </div>
                        <div class="ele-wrapper ele-wrapper-batchDelete">
                          <hm-ant-button
                            ref="batchDelete"
                            :text="batchDelete.text"
                            :type="batchDelete.type"
                            :disabled="batchDelete.disabled"
                            @click="onBatchDeleteClick"
                            class="ele-batchDelete"
                          >
                          </hm-ant-button>
                        </div>
                        <div
                          class="ele-wrapper ele-wrapper-128de5d5-8a3b-40da-abea-0c30f1be5fe1"
                        >
                          <hm-ant-button
                            text="新增"
                            :type="'primary'"
                            icon="fa fa-plus"
                            @click="onEle128De5D58A3B40DaAbea0C30F1Be5Fe1Click"
                          >
                          </hm-ant-button>
                        </div>
                      </hm-bg-card>
                    </div>
                  </template>
                </hm-panel>
              </div>
              <div
                class="ele-wrapper ele-wrapper-invisibleImportSearchLogicBtn"
              >
                <hm-ant-button
                  ref="invisibleImportSearchLogicBtn"
                  @click="onInvisibleImportSearchLogicBtnClick"
                  class="ele-invisibleImportSearchLogicBtn"
                >
                </hm-ant-button>
              </div>
              <div class="ele-wrapper ele-wrapper-activityTable">
                <hm-ant-table
                  ref="activityTable"
                  :columns="activityTable.columns"
                  :data="activityTable.data"
                  :pagination="activityTable.pagination"
                  :url="activityTable.url"
                  :params="activityTable.params"
                  :get-data-map="activityTable.getDataMap"
                  :row-select-flag="activityTable.rowSelectFlag"
                  :actions="activityTable.actions"
                  :is-flat-action="activityTable.isFlatAction"
                  :background-color="activityTable.backgroundColor"
                  :row-class-name="activityTable.rowClassName"
                  @onSelect="onActivityTableOnSelect"
                  @onSelectAll="onActivityTableOnSelectAll"
                  class="ele-activityTable"
                >
                </hm-ant-table>
              </div>
            </hm-panel>
          </div>
          <div class="ele-wrapper ele-wrapper-activityAddModal">
            <hm-modal
              ref="activityAddModal"
              title="新增"
              v-model:visible="activityAddModal.visible"
              width="810px"
              :z-index="1000"
              height="100%"
              :auto-close="false"
              @ok="onActivityAddModalOk"
              @cancel="onActivityAddModalCancel"
            >
              <div class="ele-wrapper ele-wrapper-addUserModalCard">
                <hm-bg-card
                  ref="addUserModalCard"
                  width="100%"
                  height=""
                  border-radius=""
                  padding=""
                  box-shadow-color="#00000000"
                  class="ele-addUserModalCard"
                >
                  <div class="ele-wrapper ele-wrapper-activityAddForm">
                    <hm-ant-formily
                      ref="activityAddForm"
                      :config="activityAddForm.config"
                      v-model:value="activityAddForm.value"
                      :col-num="2"
                      :col-min-width="380"
                      :schema="activityAddForm.schema"
                      :label-col="7"
                      :wrapper-col="14"
                      class="ele-activityAddForm"
                    >
                    </hm-ant-formily>
                  </div>
                </hm-bg-card>
              </div>
            </hm-modal>
          </div>
          <div class="ele-wrapper ele-wrapper-activityEditModal">
            <hm-modal
              ref="activityEditModal"
              title="编辑"
              v-model:visible="activityEditModal.visible"
              width="810px"
              :z-index="1000"
              height="100%"
              :auto-close="false"
              @ok="onActivityEditModalOk"
              @cancel="onActivityEditModalCancel"
            >
              <div class="ele-wrapper ele-wrapper-newUserModalCard">
                <hm-bg-card
                  ref="newUserModalCard"
                  width="100%"
                  height=""
                  border-radius=""
                  padding="0"
                  box-shadow-color="#00000000"
                  class="ele-newUserModalCard"
                >
                  <div class="ele-wrapper ele-wrapper-activityEditForm">
                    <hm-ant-formily
                      ref="activityEditForm"
                      :config="activityEditForm.config"
                      v-model:value="activityEditForm.value"
                      :col-num="2"
                      :col-min-width="380"
                      :schema="activityEditForm.schema"
                      :label-col="7"
                      :wrapper-col="14"
                      class="ele-activityEditForm"
                    >
                    </hm-ant-formily>
                  </div>
                </hm-bg-card>
              </div>
            </hm-modal>
          </div>
          <div class="ele-wrapper ele-wrapper-activityDetailModal">
            <hm-modal
              ref="activityDetailModal"
              title="查看详情"
              v-model:visible="activityDetailModal.visible"
              :ok-button-boole="false"
              cancel-text="关闭"
              width="810px"
              :z-index="1000"
              height="100%"
            >
              <div class="ele-wrapper ele-wrapper-detailsUserModalCard">
                <hm-bg-card
                  ref="detailsUserModalCard"
                  width="100%"
                  height=""
                  border-radius=""
                  padding=""
                  box-shadow-color="#00000000"
                  class="ele-detailsUserModalCard"
                >
                  <div class="ele-wrapper ele-wrapper-activityDetailForm">
                    <hm-ant-formily
                      ref="activityDetailForm"
                      :config="activityDetailForm.config"
                      v-model:value="activityDetailForm.value"
                      :col-num="2"
                      :schema="activityDetailForm.schema"
                      :label-col="7"
                      :wrapper-col="14"
                      class="ele-activityDetailForm"
                    >
                    </hm-ant-formily>
                  </div>
                </hm-bg-card>
              </div>
            </hm-modal>
          </div>
          <div class="ele-wrapper ele-wrapper-activityDeleteModal">
            <hm-modal
              ref="activityDeleteModal"
              title="删除"
              v-model:visible="activityDeleteModal.visible"
              :closable="true"
              ok-text="删除"
              :ok-type="'danger'"
              width="320px"
              :z-index="1000"
              height="80px"
              @ok="onActivityDeleteModalOk"
            >
              <div class="ele-wrapper ele-wrapper-deleteUserInputCard">
                <hm-bg-card
                  ref="deleteUserInputCard"
                  width="100%"
                  height=""
                  border-radius=""
                  padding=""
                  box-shadow-color="#00000000"
                  class="ele-deleteUserInputCard"
                >
                  <div class="ele-wrapper ele-wrapper-deleteUserInputText">
                    <hm-ant-icon-text
                      ref="deleteUserInputText"
                      text="是否要删除?"
                      icon=""
                      width="200px"
                      icon-size="0px"
                      color="#CF2323"
                      color-text="#1F1E1E"
                      :text-align="'left'"
                      padding="0"
                      icon-padding="0"
                      class="ele-deleteUserInputText"
                    >
                    </hm-ant-icon-text>
                  </div>
                </hm-bg-card>
              </div>
            </hm-modal>
          </div>
          <div class="ele-wrapper ele-wrapper-allModal">
            <hm-modal
              ref="allModal"
              :title="allModal.title"
              v-model:visible="allModal.visible"
              :closable="true"
              :ok-type="'danger'"
              width="320px"
              :z-index="1000"
              height="80px"
              @ok="onAllModalOk"
            >
              <div
                class="ele-wrapper ele-wrapper-a51e5f78-be7b-4837-96de-0d69fb368535"
              >
                <hm-bg-card
                  width="100%"
                  height=""
                  border-radius=""
                  padding=""
                  box-shadow-color="#00000000"
                  class="ele-a51e5f78-be7b-4837-96de-0d69fb368535"
                >
                  <div class="ele-wrapper ele-wrapper-allText">
                    <hm-ant-bg-text
                      ref="allText"
                      :text="allText.text"
                      :color="allText.color"
                      :text-align="allText.textAlign"
                      :padding="allText.padding"
                      class="ele-allText"
                    >
                    </hm-ant-bg-text>
                  </div>
                </hm-bg-card>
              </div>
            </hm-modal>
          </div>
          <div class="ele-wrapper ele-wrapper-batchEdit">
            <hm-modal
              ref="batchEdit"
              title="批量操作"
              v-model:visible="batchEdit.visible"
              width="320px"
              :z-index="1000"
              height=""
              @ok="onBatchEditOk"
            >
              <div class="ele-wrapper ele-wrapper-prompt">
                <hm-ant-bg-text
                  ref="prompt"
                  :text="prompt.text"
                  class="ele-prompt"
                >
                </hm-ant-bg-text>
              </div>
            </hm-modal>
          </div>
          <div class="ele-wrapper ele-wrapper-qrcodeModal">
            <hm-modal
              ref="qrcodeModal"
              title="活动地址"
              v-model:visible="qrcodeModal.visible"
              :ok-button-boole="false"
              cancel-text="关闭"
              width="510px"
              :z-index="1000"
              height="100%"
            >
              <div
                class="ele-wrapper ele-wrapper-9e3b4e17-761a-4730-8444-b50b2595cf04"
              >
                <hm-bg-card
                  width="100%"
                  height=""
                  border-radius=""
                  padding=""
                  box-shadow-color="#00000000"
                  class="ele-9e3b4e17-761a-4730-8444-b50b2595cf04"
                >
                  <div class="ele-wrapper ele-wrapper-activityList">
                    <hm-activity-list
                      ref="activityList"
                      :list="activityList.list"
                    >
                    </hm-activity-list>
                  </div>
                </hm-bg-card>
              </div>
              <div
                class="ele-wrapper ele-wrapper-b30d54e9-4e74-4c47-b7d3-81f3d36b7f6a"
              >
                <hm-bg-card
                  width="100%"
                  height=""
                  border-radius=""
                  padding=""
                  box-shadow-color="#00000000"
                  :hidden="true"
                  class="ele-b30d54e9-4e74-4c47-b7d3-81f3d36b7f6a"
                >
                  <div class="ele-wrapper ele-wrapper-urlInput">
                    <hm-ant-input
                      ref="urlInput"
                      v-model:value="urlInput.value"
                      title="URL"
                      :disabled="true"
                      width="100%"
                      :label-width="64"
                      class="ele-urlInput"
                    >
                    </hm-ant-input>
                  </div>
                  <div
                    class="ele-wrapper ele-wrapper-aea44c0c-2420-4f3f-94f8-b0352515ee1c"
                  >
                    <hm-ant-button
                      text="复制链接"
                      :type="'primary'"
                      @click="onEleaea44C0C24204F3F94F8B0352515Ee1CClick"
                      class="ele-aea44c0c-2420-4f3f-94f8-b0352515ee1c"
                    >
                    </hm-ant-button>
                  </div>
                </hm-bg-card>
              </div>
              <div
                class="ele-wrapper ele-wrapper-2ec3a6e9-60d5-49a0-8676-03c8bd1a7eec"
              >
                <hm-bg-card
                  width="100%"
                  height=""
                  border-radius=""
                  padding=""
                  box-shadow-color="#00000000"
                  :hidden="true"
                  class="ele-2ec3a6e9-60d5-49a0-8676-03c8bd1a7eec"
                >
                  <div
                    class="ele-wrapper ele-wrapper-94ca123c-7c72-46ad-8770-3d45ef9f5eb9"
                  >
                    <hm-ant-bg-text
                      text="二维码："
                      font-size="16px"
                      padding="0"
                      class="ele-94ca123c-7c72-46ad-8770-3d45ef9f5eb9"
                    >
                    </hm-ant-bg-text>
                  </div>
                  <div class="ele-wrapper ele-wrapper-qrcode">
                    <hm-bg-card
                      ref="qrcode"
                      width="100%"
                      height=""
                      border-radius=""
                      padding=""
                      box-shadow-color="#00000000"
                      class="ele-qrcode"
                    >
                    </hm-bg-card>
                  </div>
                </hm-bg-card>
              </div>
            </hm-modal>
          </div>
          <div class="ele-wrapper ele-wrapper-StoreConfigurationPopupFrame">
            <hm-modal
              ref="StoreConfigurationPopupFrame"
              title="活动门店配置"
              v-model:visible="StoreConfigurationPopupFrame.visible"
              :closable="true"
              :cancel-button-props="false"
              width="720px"
              :z-index="997"
              height=""
              :style="StoreConfigurationPopupFrame.style"
            >
              <div
                class="ele-wrapper ele-wrapper-d72366d9-57b6-47e7-a63d-641343f2d736"
              >
                <hm-bg-card
                  width="100%"
                  height="100%"
                  border-radius=""
                  box-shadow-v-shadow=""
                  box-shadow-blur=""
                  class="ele-d72366d9-57b6-47e7-a63d-641343f2d736"
                >
                  <div
                    class="ele-wrapper ele-wrapper-5827416b-69cb-4a9c-9f7e-ad94d1b37311"
                  >
                    <hm-ant-button
                      text="新增"
                      :type="'primary'"
                      :ghost="true"
                      @click="onEle5827416B69Cb4A9C9F7EAd94D1B37311Click"
                    >
                    </hm-ant-button>
                  </div>
                  <div
                    class="ele-wrapper ele-wrapper-a6d2b6ac-1576-4e40-916d-93f815a9290b"
                  >
                    <hm-ant-button
                      text="批量导入"
                      :type="'primary'"
                      :ghost="true"
                      @click="onElea6D2B6Ac15764E40916D93F815A9290BClick"
                      class="ele-a6d2b6ac-1576-4e40-916d-93f815a9290b"
                    >
                    </hm-ant-button>
                  </div>
                </hm-bg-card>
              </div>
              <div class="ele-wrapper ele-wrapper-viewActivityStoreTable">
                <hm-ant-table
                  ref="viewActivityStoreTable"
                  :columns="viewActivityStoreTable.columns"
                  :data="viewActivityStoreTable.data"
                  :url="viewActivityStoreTable.url"
                  :params="viewActivityStoreTable.params"
                  :actions="viewActivityStoreTable.actions"
                  :is-flat-action="viewActivityStoreTable.isFlatAction"
                  :row-class-name="viewActivityStoreTable.rowClassName"
                  class="ele-viewActivityStoreTable"
                >
                </hm-ant-table>
              </div>
              <div class="ele-wrapper ele-wrapper-viewActivityStoreModal">
                <hm-modal
                  ref="viewActivityStoreModal"
                  title="删除"
                  v-model:visible="viewActivityStoreModal.visible"
                  :closable="true"
                  :ok-type="'danger'"
                  width="320px"
                  :z-index="1000"
                  height="80px"
                  @ok="onViewActivityStoreModalOk"
                >
                  <div
                    class="ele-wrapper ele-wrapper-e3c72123-dab1-4e7d-947b-9cc498196b55"
                  >
                    <hm-bg-card
                      width="100%"
                      height=""
                      border-radius=""
                      padding=""
                      box-shadow-color="#00000000"
                      class="ele-e3c72123-dab1-4e7d-947b-9cc498196b55"
                    >
                      <div
                        class="ele-wrapper ele-wrapper-20c28b0a-2f8d-4fb4-ae2e-2d5c7ac30af6"
                      >
                        <hm-ant-bg-text
                          text="是否要删除?"
                          color="#CF2323"
                          :text-align="'left'"
                          padding="0"
                          class="ele-20c28b0a-2f8d-4fb4-ae2e-2d5c7ac30af6"
                        >
                        </hm-ant-bg-text>
                      </div>
                    </hm-bg-card>
                  </div>
                </hm-modal>
              </div>
            </hm-modal>
          </div>
          <div class="ele-wrapper ele-wrapper-addStoreScope">
            <hm-modal
              ref="addStoreScope"
              title="添加门店范围"
              v-model:visible="addStoreScope.visible"
              :z-index="1000"
              height=""
              :auto-close="false"
              @ok="onAddStoreScopeOk"
              @cancel="onAddStoreScopeCancel"
            >
              <div class="ele-wrapper ele-wrapper-treeSelect">
                <hm-ant-tree-select
                  ref="treeSelect"
                  v-model:value="treeSelect.value"
                  title=""
                  v-model:tree-data="treeSelect.treeData"
                  :multiple="true"
                  :tree-checkable="true"
                  @change="onTreeSelectChange"
                  class="ele-treeSelect"
                >
                </hm-ant-tree-select>
              </div>
              <div class="ele-wrapper ele-wrapper-activityStoreTag">
                <hm-ant-tag
                  ref="activityStoreTag"
                  :title="activityStoreTag.title"
                  :ctag-list="activityStoreTag.ctagList"
                  @close="onActivityStoreTagClose"
                  class="ele-activityStoreTag"
                >
                </hm-ant-tag>
              </div>
            </hm-modal>
          </div>
          <div class="ele-wrapper ele-wrapper-importantModal">
            <hm-modal
              ref="importantModal"
              title="导入"
              v-model:visible="importantModal.visible"
              :closable="true"
              ok-text="删除"
              :ok-button-boole="false"
              :ok-type="'danger'"
              :z-index="1000"
              height="180px"
            >
              <div
                class="ele-wrapper ele-wrapper-797edf01-b948-4ddc-88c5-2278bde7b928"
              >
                <hm-bg-card
                  width="480px"
                  height="180px"
                  border-radius=""
                  :text-align="'center'"
                  padding=""
                  box-shadow-h-shadow=""
                  box-shadow-v-shadow=""
                  box-shadow-blur=""
                  box-shadow-spread=""
                  box-shadow-color="#00000000"
                >
                  <div class="ele-wrapper ele-wrapper-viewActivityStoreUpload">
                    <hm-ant-upload
                      ref="viewActivityStoreUpload"
                      title=""
                      text="上传文件"
                      v-model:file-list="viewActivityStoreUpload.fileList"
                      action="/api/dkn/viewActivityStore/importExcel "
                      :data="viewActivityStoreUpload.data"
                      :headers="viewActivityStoreUpload.headers"
                      @onUploadDone="onViewActivityStoreUploadOnUploadDone"
                      class="ele-viewActivityStoreUpload"
                    >
                    </hm-ant-upload>
                  </div>
                  <div
                    class="ele-wrapper ele-wrapper-32674f07-f53e-48c8-b937-c9fdc4cde32a"
                  >
                    <hm-bg-card
                      width="100%"
                      height=""
                      border-radius=""
                      :text-align="'center'"
                      padding=""
                      box-shadow-h-shadow=""
                      box-shadow-v-shadow=""
                      box-shadow-blur=""
                      box-shadow-spread=""
                      box-shadow-color="#00000000"
                      class="ele-32674f07-f53e-48c8-b937-c9fdc4cde32a"
                    >
                      <div
                        class="ele-wrapper ele-wrapper-25a0083f-38cb-436f-af9c-cb74443f0024"
                      >
                        <hm-ant-bg-text
                          text="仅支持xls、xlsx格式文件  "
                          font-size="16px"
                        >
                        </hm-ant-bg-text>
                      </div>
                      <div
                        class="ele-wrapper ele-wrapper-476e74cc-7c7d-4b02-b2a5-c7c4317019ee"
                      >
                        <hm-ant-button
                          text="下载模板"
                          :type="'link'"
                          icon="fa fa-paperclip"
                          @click="onEle476E74Cc7C7D4B02B2A5C7C4317019EeClick"
                          class="ele-476e74cc-7c7d-4b02-b2a5-c7c4317019ee"
                        >
                        </hm-ant-button>
                      </div>
                    </hm-bg-card>
                  </div>
                </hm-bg-card>
              </div>
            </hm-modal>
          </div>
          <div class="ele-wrapper ele-wrapper-channelModal">
            <hm-modal
              ref="channelModal"
              title="渠道配置"
              v-model:visible="channelModal.visible"
              :closable="true"
              :cancel-button-props="false"
              width="720px"
              :z-index="997"
              height=""
              :style="channelModal.style"
            >
              <div
                class="ele-wrapper ele-wrapper-85e440ed-e222-47c9-b9b5-b5da932b435f"
              >
                <hm-bg-card
                  width="100%"
                  height="100%"
                  border-radius=""
                  box-shadow-v-shadow=""
                  box-shadow-blur=""
                  class="ele-85e440ed-e222-47c9-b9b5-b5da932b435f"
                >
                  <div
                    class="ele-wrapper ele-wrapper-29cecb17-fabb-4ee5-a5b7-512570c6d4b8"
                  >
                    <hm-ant-button
                      text="新增"
                      :type="'primary'"
                      :ghost="true"
                      @click="onEle29Cecb17Fabb4Ee5A5B7512570C6D4B8Click"
                    >
                    </hm-ant-button>
                  </div>
                  <div
                    class="ele-wrapper ele-wrapper-6c6ecbd6-35bf-43b5-bdad-ab23699ef7df"
                  >
                    <hm-ant-button
                      text="批量导入"
                      :type="'primary'"
                      :ghost="true"
                      @click="onEle6C6Ecbd635Bf43B5BdadAb23699Ef7DfClick"
                      class="ele-6c6ecbd6-35bf-43b5-bdad-ab23699ef7df"
                    >
                    </hm-ant-button>
                  </div>
                </hm-bg-card>
              </div>
              <div class="ele-wrapper ele-wrapper-channelTable">
                <hm-ant-table
                  ref="channelTable"
                  :columns="channelTable.columns"
                  :data="channelTable.data"
                  :url="channelTable.url"
                  :params="channelTable.params"
                  :actions="channelTable.actions"
                  :is-flat-action="channelTable.isFlatAction"
                  :row-class-name="channelTable.rowClassName"
                  class="ele-channelTable"
                >
                </hm-ant-table>
              </div>
              <div class="ele-wrapper ele-wrapper-delChannelModal">
                <hm-modal
                  ref="delChannelModal"
                  title="删除"
                  v-model:visible="delChannelModal.visible"
                  :closable="true"
                  :ok-type="'danger'"
                  width="320px"
                  :z-index="1000"
                  height="80px"
                  @ok="onDelChannelModalOk"
                >
                  <div
                    class="ele-wrapper ele-wrapper-47c9a74e-6fc3-48db-8992-6ce487ba6500"
                  >
                    <hm-bg-card
                      width="100%"
                      height=""
                      border-radius=""
                      padding=""
                      box-shadow-color="#00000000"
                      class="ele-47c9a74e-6fc3-48db-8992-6ce487ba6500"
                    >
                      <div
                        class="ele-wrapper ele-wrapper-bb41f563-3631-4d69-8120-616a9e58816a"
                      >
                        <hm-ant-bg-text
                          text="是否要删除?"
                          color="#CF2323"
                          :text-align="'left'"
                          padding="0"
                          class="ele-bb41f563-3631-4d69-8120-616a9e58816a"
                        >
                        </hm-ant-bg-text>
                      </div>
                    </hm-bg-card>
                  </div>
                </hm-modal>
              </div>
              <div class="ele-wrapper ele-wrapper-addChannelModal">
                <hm-modal
                  ref="addChannelModal"
                  title="添加门店范围"
                  v-model:visible="addChannelModal.visible"
                  :z-index="1000"
                  height=""
                  :auto-close="false"
                  @ok="onAddChannelModalOk"
                  @cancel="onAddChannelModalCancel"
                >
                  <div class="ele-wrapper ele-wrapper-channelSelect">
                    <hm-ant-select
                      ref="channelSelect"
                      v-model:value="channelSelect.value"
                      url="/api/sys/dict/getDictItem"
                      :params="channelSelect.params"
                      :data-map="channelSelect.dataMap"
                      :mode="'multiple'"
                      v-model:options="channelSelect.options"
                    >
                    </hm-ant-select>
                  </div>
                </hm-modal>
              </div>
              <div class="ele-wrapper ele-wrapper-impotChannelModal">
                <hm-modal
                  ref="impotChannelModal"
                  title="导入"
                  v-model:visible="impotChannelModal.visible"
                  :closable="true"
                  ok-text="删除"
                  :ok-button-boole="false"
                  :ok-type="'danger'"
                  :z-index="1000"
                  height="180px"
                >
                  <div
                    class="ele-wrapper ele-wrapper-2f8a2b08-8274-4c92-9dfa-ead59429baa6"
                  >
                    <hm-bg-card
                      width="480px"
                      height="180px"
                      border-radius=""
                      :text-align="'center'"
                      padding=""
                      box-shadow-h-shadow=""
                      box-shadow-v-shadow=""
                      box-shadow-blur=""
                      box-shadow-spread=""
                      box-shadow-color="#00000000"
                    >
                      <div class="ele-wrapper ele-wrapper-channelUpload">
                        <hm-ant-upload
                          ref="channelUpload"
                          title=""
                          text="上传文件"
                          v-model:file-list="channelUpload.fileList"
                          action="/api/dkn/viewActivityDictItem/importExcel "
                          :data="channelUpload.data"
                          :headers="channelUpload.headers"
                          @onUploadDone="onChannelUploadOnUploadDone"
                          class="ele-channelUpload"
                        >
                        </hm-ant-upload>
                      </div>
                      <div
                        class="ele-wrapper ele-wrapper-8241b2f8-302f-4604-a53c-668ed78c4b87"
                      >
                        <hm-bg-card
                          width="100%"
                          height=""
                          border-radius=""
                          :text-align="'center'"
                          padding=""
                          box-shadow-h-shadow=""
                          box-shadow-v-shadow=""
                          box-shadow-blur=""
                          box-shadow-spread=""
                          box-shadow-color="#00000000"
                          class="ele-8241b2f8-302f-4604-a53c-668ed78c4b87"
                        >
                          <div
                            class="ele-wrapper ele-wrapper-4de01ecb-90f3-4fb9-b2b5-14d848156621"
                          >
                            <hm-ant-bg-text
                              text="仅支持xls、xlsx格式文件  "
                              font-size="16px"
                            >
                            </hm-ant-bg-text>
                          </div>
                          <div
                            class="ele-wrapper ele-wrapper-6a2c4b1b-fc1d-4f9f-9baf-3dc513039ea8"
                          >
                            <hm-ant-button
                              text="下载模板"
                              :type="'link'"
                              icon="fa fa-paperclip"
                              @click="
                                onEle6A2C4B1BFc1D4F9F9Baf3Dc513039Ea8Click
                              "
                              class="ele-6a2c4b1b-fc1d-4f9f-9baf-3dc513039ea8"
                            >
                            </hm-ant-button>
                          </div>
                        </hm-bg-card>
                      </div>
                    </hm-bg-card>
                  </div>
                </hm-modal>
              </div>
            </hm-modal>
          </div>
        </hm-bg-card>
      </div>
      <div class="ele-wrapper ele-wrapper-bd8f481b-9f27-4d1b-9a65-3e3566be69e1">
        <hm-ant-switch class="ele-bd8f481b-9f27-4d1b-9a65-3e3566be69e1">
        </hm-ant-switch>
      </div>
    </div>
  </div>
</template>

<script>
import { h } from "vue";
import HmBgCard from "/@/components/built-in/layout/HmBgCard.vue";
import HmPanel from "/@/components/built-in/layout/HmPanel.vue";
import HmAntFormily from "/@/components/built-in/jeecg/HmAntFormily.vue";
import HmAntButton from "/@/components/built-in/jeecg/HmAntButton.vue";
import HmAntUpload from "/@/components/built-in/jeecg/HmAntUpload.vue";
import HmAntTable from "/@/components/built-in/jeecg/HmAntTable.vue";
import HmModal from "/@/components/built-in/layout/HmModal.vue";
import HmAntIconText from "/@/components/built-in/jeecg/HmAntIconText.vue";
import HmAntBgText from "/@/components/built-in/jeecg/HmAntBgText.vue";
import HmActivityList from "/@/components/decathlon-spring-festivalactivities-web/hm-activity-list/index.vue";
import HmAntInput from "/@/components/built-in/jeecg/HmAntInput.vue";
import HmAntTreeSelect from "/@/components/built-in/jeecg/HmAntTreeSelect.vue";
import HmAntTag from "/@/components/built-in/jeecg/HmAntTag.vue";
import HmAntSelect from "/@/components/built-in/jeecg/HmAntSelect.vue";
import HmAntSwitch from "/@/components/built-in/jeecg/HmAntSwitch.vue";

import {
  downloadTemplate,
  exportActivity,
  searchActivity,
  addActivity,
  editActivity,
  deleteActivity,
} from "/@/logics/ActivitypageGroup";

export default {
  name: "Activitypage",
  components: {
    HmBgCard,
    HmPanel,
    HmAntFormily,
    HmAntButton,
    HmAntUpload,
    HmAntTable,
    HmModal,
    HmAntIconText,
    HmAntBgText,
    HmActivityList,
    HmAntInput,
    HmAntTreeSelect,
    HmAntTag,
    HmAntSelect,
    HmAntSwitch,
  },
  data() {
    let self = this;
    return {
      crudPagePanel: {
        height: "",
        title: "",
        padding: "0",
        titleBlockColor: "#1890FF00",
      },
      qrcodeModal: {
        visible: false,
      },
      viewActivityStoreUpload: {
        data: {},
        fileList: [],
        headers: {},
      },
      viewActivityStoreTable: {
        params: {
          id: "-1",
        },
        columns: [
          {
            title: "门店名称",
            dataIndex: "name",
            key: "name",
          },
          {
            title: "所属区域",
            dataIndex: "urbanArea",
            key: "urbanArea",
            width: 80,
          },
          {
            title: "门店地址",
            dataIndex: "address",
            key: "address",
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
        url: "/api/dkn/viewActivityStore/list",
        actions: [
          {
            name: "删除",
            callback: function (item) {
              self.delViewActivityStoreModal = item;
              self.viewActivityStoreModal.visible = true;
            },
            type: "link",
          },
        ],
        isFlatAction: true,
        rowClassName: {},
      },
      StoreConfigurationPopupFrame: {
        visible: false,
        style: {
          top: "100px",
          padding: "10px 15px",
        },
      },
      channelUpload: {
        data: {},
        fileList: [],
        headers: {},
      },
      channelTable: {
        params: {
          id: "-1",
        },
        columns: [
          {
            title: "渠道名称",
            dataIndex: "itemText",
            key: "itemText",
          },
          {
            title: "数据值",
            dataIndex: "itemValue",
            key: "itemValue",
            width: 80,
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
        url: "/api/dkn/viewActivityDictItem/list",
        actions: [
          {
            name: "删除",
            callback: function (item) {
              self.delViewActivityDictItem = item;
              self.delChannelModal.visible = true;
            },
            type: "link",
          },
        ],
        isFlatAction: true,
        rowClassName: {},
      },
      channelModal: {
        visible: false,
        style: {
          top: "100px",
          padding: "10px 15px",
        },
      },
      activityEditModal: {
        visible: false,
      },
      activityEditForm: {
        config: {
          name: {
            type: "Input",
            title: "活动名称",
            style: {
              width: "50%",
            },
            props: {},
            validator: function (value) {},
            required: false,
            disabled: false,
          },
          expense: {
            type: "InputNumber",
            title: "活动费用",
            style: {
              width: "50%",
            },
            props: {},
            validator: function (value) {},
            required: false,
            disabled: false,
          },
          startTime: {
            type: "DatePicker",
            title: "活动开始时间",
            style: {
              width: "50%",
            },
            props: {},
            validator: function (value) {},
            required: false,
            disabled: false,
          },
          endTime: {
            type: "DatePicker",
            title: "活动结束时间",
            style: {
              width: "50%",
            },
            props: {},
            validator: function (value) {},
            required: false,
            disabled: false,
          },
          closeTime: {
            type: "DatePicker",
            title: "活动报名截止时间",
            style: {
              width: "50%",
            },
            props: {},
            validator: function (value) {},
            required: false,
            disabled: false,
          },
          pickUpTime: {
            type: "DatePicker",
            title: "活动核销截止时间",
            style: {
              width: "50%",
            },
            props: {},
            validator: function (value) {},
            required: false,
            disabled: false,
          },
        },
        value: {
          span: "文字内容",
        },
        schema: {},
      },
      activityDeleteModal: {
        visible: false,
      },
      viewActivityStoreModal: {
        visible: false,
      },
      delChannelModal: {
        visible: false,
      },
      activityAddModal: {
        visible: false,
      },
      selectedRows: {},
      batchEdit: {
        visible: false,
      },
      prompt: {
        text: "文字",
      },
      allStatus: {},
      bathqiyong: {
        disabled: false,
        text: "批量启用",
        type: "primary",
      },
      batchBisabled: {
        disabled: false,
        text: "批量禁用",
        type: "primary",
      },
      batchDelete: {
        disabled: false,
        text: "批量删除",
        type: "primary",
      },
      addStoreScope: {
        visible: false,
      },
      treeSelect: {
        treeData: [],
        value: null,
      },
      activityStoreTag: {
        ctagList: [
          {
            value: "周星星1",
            id: 1,
            title: "sadda",
          },
          {
            value: "周星星2",
          },
          {
            value: "周星星3",
          },
          {
            value: "周星星4",
          },
          {
            value: "周星星5",
          },
        ],
        title: "",
      },
      importantModal: {
        visible: false,
      },
      delViewActivityStoreModal: {},
      activityStoreTagList: {},
      addChannelModal: {
        visible: false,
      },
      channelSelect: {
        value: null,
        params: {
          code: "channel",
        },
        dataMap: {
          label: "itemText",
          value: "id",
        },
        options: [],
      },
      impotChannelModal: {
        visible: false,
      },
      delViewActivityDictItem: {},
      importButton: {
        visible: false,
        headers: null,
        fileList: [],
      },
      exportButton: {
        visible: false,
        text: "导出",
        type: "primary",
        icon: "fa fa-download",
      },
      activityAddForm: {
        config: {
          name: {
            type: "Input",
            title: "活动名称",
            style: {
              width: "50%",
            },
            props: {},
            validator: function (value) {},
            required: false,
            disabled: false,
          },
          expense: {
            type: "InputNumber",
            title: "活动费用",
            style: {
              width: "50%",
            },
            props: {},
            validator: function (value) {},
            required: false,
            disabled: false,
          },
          startTime: {
            type: "DatePicker",
            title: "活动开始时间",
            style: {
              width: "50%",
            },
            props: {},
            validator: function (value) {},
            required: false,
            disabled: false,
          },
          endTime: {
            type: "DatePicker",
            title: "活动结束时间",
            style: {
              width: "50%",
            },
            props: {},
            validator: function (value) {},
            required: false,
            disabled: false,
          },
          closeTime: {
            type: "DatePicker",
            title: "活动报名截止时间",
            style: {
              width: "50%",
            },
            props: {},
            validator: function (value) {},
            required: false,
            disabled: false,
          },
          pickUpTime: {
            type: "DatePicker",
            title: "活动核销截止时间",
            style: {
              width: "50%",
            },
            props: {},
            validator: function (value) {},
            required: false,
            disabled: false,
          },
        },
        value: {
          span: "文字内容",
        },
        schema: {},
      },
      activityDetailForm: {
        config: {
          name: {
            type: "Span",
            title: "活动名称",
            style: {
              width: "50%",
            },
            props: {},
            validator: function (value) {},
            required: false,
            disabled: false,
          },
        },
        value: {
          span: "文字内容",
        },
        schema: {},
      },
      allModal: {
        title: "删除",
        visible: false,
      },
      allText: {
        text: "是否要删除?",
        color: "#CF2323",
        textAlign: "left",
        padding: "0",
      },
      urlInput: {
        value: "",
      },
      activityList: {
        list: [
          {
            id: 1,
            url: "http://baidu.com",
          },
          {
            id: 2,
            url: "http://baidu.com",
          },
        ],
      },
      storeList: {},
      activityDetailModal: {
        visible: false,
      },
      activityFilter: {
        config: {
          kyes: {
            type: "Input",
            title: "搜索活动",
            style: {
              width: "25%",
            },
            props: {
              placeholder: "活动ID/活动名称",
            },
            validator: function (value) {},
          },
          status: {
            type: "HmAntSelect",
            title: "活动状态",
            style: {
              width: "25%",
            },
            props: {
              title: "",
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
            validator: function (value) {},
          },
          search: {
            type: "HmAntButton",
            title: "",
            style: {
              width: "80px",
              marginLeft: "10px",
            },
            props: {
              text: "查询",
              type: "primary",
              icon: "fa fa-search",
            },
            events: {
              "@click": function (e) {
                searchActivity(self, null);
              },
            },
            validator: function (value) {},
          },
          reset: {
            type: "HmAntButton",
            title: "",
            style: {
              width: "80px",
              marginLeft: "20px",
            },
            props: {
              text: "重置",
              icon: "fa fa-refresh",
            },
            events: {
              "@click": function (e) {
                self.$refs.activityFilter.reset();
                searchActivity(self, null);
              },
            },
            validator: function (value) {},
          },
        },
        value: {
          span: "文字内容",
        },
        schema: {},
      },
      activityTable: {
        columns: [
          {
            title: "活动ID",
            dataIndex: "code",
            key: "code",
            fixed: "left",
            width: 100,
          },
          {
            title: "活动名称",
            dataIndex: "name",
            key: "name",
            fixed: "left",
            width: 250,
          },
          {
            title: "活动别称",
            dataIndex: "alias",
            key: "alias",
            fixed: "left",
            width: 250,
          },
          {
            title: "活动周期",
            dataIndex: "startTime",
            key: "startTime",
            width: 220,
            customRender: function (data) {
              let startTime = self
                .$moment(data.record.startTime)
                .format("YYYY.MM.DD");
              let endTime = self
                .$moment(data.record.endTime)
                .format("YYYY.MM.DD");
              return `${startTime}--${endTime}`;
            },
          },
          {
            title: "活动报名截止时间",
            dataIndex: "closeTime",
            key: "closeTime",
            width: 220,
          },
          {
            title: "报名人数",
            dataIndex: "orders",
            key: "orders",
            width: 100,
          },
          {
            title: "总参与人次",
            dataIndex: "ordersTotal",
            key: "ordersTotal",
            width: 100,
          },
          {
            title: "核销人数",
            dataIndex: "pickUps",
            key: "pickUps",
            width: 100,
          },
          {
            title: "启用状态",
            dataIndex: "status",
            key: "status",
            width: 150,
            customRender: function (data) {
              return h(HmAntSwitch, {
                checked: data.record.status === 0,
                title: "",
                onChange: function (e) {
                  self.updateStatus(data.record.id, e);
                },
              });
            },
          },
          {
            slots: {
              customRender: "action",
            },
            width: 450,
            title: "操作",
            key: "action",
          },
        ],
        data: [{}],
        pagination: {
          current: 1,
          pageSizeOptions: ["10", "20", "30", "40"],
          pageSize: 10,
          showSizeChanger: true,
        },
        url: "/api/dkn/activity/list",
        params: {
          databaseId: "",
          column: "createTime",
          order: "desc",
        },
        getDataMap: {
          total: "",
          list: "",
        },
        rowSelectFlag: true,
        actions: [
          {
            name: "活动url",
            callback: function (item) {
              if (item.status != 0) {
                self.$message.error("当前活动禁用中");
                return;
              }
              self.qrcodeModal.visible = true;
              self.getQrCode(item.id);
            },
            type: "link",
          },
          {
            name: "门店配置",
            callback: function (item) {
              console.log("门店配置");
              self.activityId = item.id;
              self.viewActivityStoreUpload.data = {
                activityId: self.activityId,
              };
              self.viewActivityStoreTable.params = {
                activityId: item.id,
              };
              self.StoreConfigurationPopupFrame.visible = true;
            },
            type: "link",
          },
          {
            name: "渠道配置",
            callback: function (item) {
              self.activityId = item.id;
              self.channelUpload.data = { activityId: self.activityId };
              self.channelTable.params = {
                activityId: item.id,
                type: 0,
              };
              self.channelModal.visible = true;

              console.log("渠道配置");
            },
            type: "link",
          },
          {
            name: "报名列表",
            callback: function (item) {
              self.$router.push({
                path: `/haomo/1767760231825149953/page`,
                query: { activityId: item.id },
              });
            },
            type: "link",
          },
          {
            name: "查看详情",
            callback: function (item) {
              self.$router.push({
                path: `/haomo/1765266373170171906/page`,
                query: { type: 3, id: item.id },
              });
            },
            type: "link",
          },
          {
            name: "编辑",
            callback: function (item) {
              self.$router.push({
                path: `/haomo/1765266373170171906/page`,
                query: { type: 2, id: item.id },
              });
              //self.activityEditModal.visible=true;
              //self.currentActivityId = item.id;
              //self.$nextTick(function() {
              //  self.activityEditForm.value = item;;
              //});
            },
            type: "link",
          },
          {
            name: "参与列表",
            callback: function (item) {
              console.log("参与列表");
            },
            type: "link",
          },
          {
            name: "删除",
            callback: function (item) {
              self.activityDeleteModal.visible = true;
              self.currentActivityId = item.id;
            },
            type: "link",
          },
        ],
        isFlatAction: true,
        backgroundColor: "#FFFFFF",
        rowClassName: {},
      },
    };
  },
  watch: {},
  async mounted(e) {
    this.onMounted(e);
  },
  methods: {
    onMounted() {
      console.log("this.importButton.visible");
      console.log("this.exportButton.visible");
      console.log("this.crudPagePanel.title");
      console.log("this.activityAddForm.config");
      console.log("this.activityEditForm.config");
      console.log("this.activityDetailForm.config");

      //设置上传请求头
      this.$nextTick(() => {
        let token = localStorage.getItem("pro__Access-Token");
        if (token) {
          this.importButton.headers = {
            "X-Access-Token": token,
          };
        }
      });
      let self = this;
      self.allStatus.value = null;
      self.allModal.title = null;
      self.allText.text = null;
      self.selectedRows = [];
      self.bathqiyong.disabled = true;
      self.batchBisabled.disabled = true;
      self.batchDelete.disabled = true;
      self.copyUrl = function (url) {
        if (!navigator.clipboard) {
          var ele = document.createElement("input");
          ele.value = url;
          document.body.appendChild(ele);
          ele.select();
          document.execCommand("copy");
          document.body.removeChild(ele);
          if (document.execCommand("copy")) {
            self.$message.success("复制成功！");
          } else {
            self.$message.error("复制失败！");
          }
        } else {
          navigator.clipboard
            .writeText(url)
            .then(function () {
              self.$message.success("复制成功！");
            })
            .catch(function () {
              self.$message.error("复制失败！");
            });
        }
      };

      self.updateStatus = async function (id, status) {
        let url = "/api/dkn/activity/edit";
        let params = {
          id,
          status: status ? 0 : 1,
        };
        const res = await self.$putAction(url, params);
        if (!res.success) {
          self.$message.error(res.message);
          return;
        }
        self.$message.success("操作成功");
        self.$refs.activityTable.getData();
      };

      self.getQrCode = async function (id) {
        let url = `${self.$accessAddress}?activityId=${id}`;
        setTimeout(() => {
          const container = document.querySelector(".ele-wrapper-qrcode");
          console.log("container", container);
          new self.$QrCode(container, {
            text: url,
            width: 128,
            height: 128,
            colorDark: "#000000",
            colorLight: "#ffffff",
          });
          self.urlInput.value = url;
        });
        self.activityList.list = await self.getCode(id);
      };
      self.isDisabled = function () {
        if (this.selectedRows.length > 0) {
          self.bathqiyong.disabled = false;
          self.batchBisabled.disabled = false;
          self.batchDelete.disabled = false;
        } else {
          self.bathqiyong.disabled = true;
          self.batchBisabled.disabled = true;
          self.batchDelete.disabled = true;
        }
        let qd = [],
          jy = [];
        this.selectedRows.forEach((e) => {
          if (e.status === 0) {
            qd.push(e);
          } else {
            jy.push(e);
          }
        });
        if (qd.length !== 0) {
          self.bathqiyong.disabled = true;
        }
        if (jy.length !== 0) {
          self.batchBisabled.disabled = true;
        }
      };
      self.getCode = async function (id) {
        const item = await self.getViewActivityDictItemList(id);
        if (item && item.length > 0) {
          return item;
        }
        let url = "/api/sys/dict/getDictItems/channel";
        const res = await self.$getAction(url);
        let u = `${self.$accessAddress}?activityId=${id}`;
        const list = res.result.map((e) => {
          return {
            ...e,
            id: e.value,
            url: `${u}&channel=${e.value}`,
          };
        });
        return list;
      };
      self.getViewActivityDictItemList = async function (id) {
        let url = "/api/dkn/viewActivityDictItem/list";
        let params = {
          activityId: id,
          type: 0,
        };
        const res = await self.$getAction(url, params);
        let u = `${self.$accessAddress}?activityId=${id}`;
        const list = res.result.records.map((e) => {
          return {
            ...e,
            label: e.itemText,
            id: e.itemValue,
            url: `${u}&channel=${e.itemValue}`,
          };
        });
        return list;
      };
      self.getTreeSelect = async function () {
        let url = "/api/dkn/store/listOrder";
        const res = await self.$getAction(url, {
          status: 0,
        });
        let l = [];
        const list = res.result.map((e) => {
          let children = e.store.map((s) => {
            return {
              title: s.name,
              value: s.id,
              ...s,
            };
          });
          l = [...l, ...children];
          return {
            ...e,
            title: e.key,
            value: e.key,
            children,
          };
        });
        self.treeSelect.treeData = list;
        self.storeList = l;
      };
      self.getTreeSelect();
      self.activityStoreTagList = [];
      self.setTag = async function (e) {
        if (e.length === 1) {
          return;
        }
        let key = e[1];
        const i = self.storeList.findIndex((a) => a.id == key);
        if (i === -1) {
          return;
        }
        const item = self.storeList[i];
        const listKey = self.activityStoreTagList.findIndex((a) => a.id == key);
        if (listKey !== -1) {
          return;
        }
        self.activityStoreTagList.push(item);
        self.activityStoreTag.ctagList = self.activityStoreTagList.map((e) => {
          return {
            ...e,
            value: e.name,
          };
        });
      };
      self.addActivityStore = async function () {
        //if (self.activityStoreTagList.length == 0) {
        //  self.$message.error("请选择门店")
        //  return
        //}
        const params = self.treeSelect.value.map((e) => {
          return {
            activityId: self.activityId,
            storeId: e,
          };
        });
        let url = "/api/dkn/activityStore/addBatch";
        const res = await self.$postAction(url, params);
        if (res.success) {
          self.$message.success("保存成功");
          self.addStoreScope.visible = false;
        } else {
          self.$message.error(res.message);
        }
        self.$refs.viewActivityStoreTable.getData();
      };

      self.addActivityDictItem = async function () {
        const params = self.channelSelect.value.map((e) => {
          return {
            activityId: self.activityId,
            sysDictItemId: e,
            type: 0,
          };
        });
        let url = "/api/dkn/activityDictItem/addBatch";
        const res = await self.$postAction(url, params);
        if (res.success) {
          self.$message.success("保存成功");
          self.addChannelModal.visible = false;
        } else {
          self.$message.error(res.message);
        }
        self.$refs.channelTable.getData();
      };
    },

    onAddButtonClick() {
      this.activityAddModal.visible = true;
    },
    onDownloadTemplateButtonClick() {
      downloadTemplate(this, arguments);
    },
    onExportButtonClick() {
      exportActivity(this, arguments);
    },
    onBathqiyongClick() {
      if (!this.selectedRows || this.selectedRows.length === 0) {
        this.$message.error("请选择活动");
        return;
      }
      this.$nextTick(() => {
        this.batchEdit.visible = true;
        this.allStatus = 1;
        this.prompt.text = "确认批量启用";
      });
    },
    onBatchBisabledClick() {
      if (!this.selectedRows || this.selectedRows.length === 0) {
        this.$message.error("请选择活动");
        return;
      }
      this.$nextTick(() => {
        this.batchEdit.visible = true;
        this.allStatus = 2;
        this.prompt.text = "确认批量禁用";
      });
    },
    onBatchDeleteClick() {
      if (!this.selectedRows || this.selectedRows.length === 0) {
        this.$message.error("请选择活动");
        return;
      }
      this.$nextTick(() => {
        this.batchEdit.visible = true;
        this.allStatus = 3;
        this.prompt.text = "确认批量删除";
      });
    },
    onEle128De5D58A3B40DaAbea0C30F1Be5Fe1Click() {
      //this.activityAddModal.visible = true;
      this.$router.push({
        path: `/haomo/1751176676198322177/page`,
        query: {
          type: 1,
        },
      });
    },
    onInvisibleImportSearchLogicBtnClick() {
      searchActivity(this, arguments);
    },
    onActivityTableOnSelect(e) {
      this.selectedRows = e.selectedRows;
      this.isDisabled();
    },
    onActivityTableOnSelectAll(e) {
      this.selectedRows = e.selectedRows;
      this.isDisabled();
    },
    onActivityAddModalOk() {
      addActivity(this, arguments);
    },
    onActivityAddModalCancel() {
      this.activityAddModal.visible = false;
    },
    onActivityEditModalOk() {
      editActivity(this, arguments);
    },
    onActivityEditModalCancel() {
      this.activityEditModal.visible = false;
    },
    onActivityDeleteModalOk() {
      deleteActivity(this, arguments);
    },
    async onAllModalOk() {
      let self = this;
      if (self.allStatus.value === 1 || self.allStatus.value === 2) {
        let url = "/api/dkn/activity/editBatch";
        let params = self.selectedRows.map((e) => {
          return {
            id: e.id,
            status: self.allStatus.value === 1 ? 0 : 1,
          };
        });
        const res = await self.$putAction(url, params);
        if (!res.success) {
          self.$message.error(res.message);
          return;
        }
        self.$message.success("操作成功");
      } else if (self.allStatus.value === 3) {
        let url = "/api/dkn/activity/deleteBatch";
        let params = self.selectedRows.map((e) => {
          return e.id;
        });
        const res = await self.$deleteAction(url, {
          ids: params.join(","),
        });
        if (!res.success) {
          self.$message.error(res.message);
          return;
        }
        self.selectedRows = [];
        self.$message.success("操作成功");
      }
      self.$refs.activityTable.getData();
    },
    async onBatchEditOk() {
      let self = this;
      if (self.allStatus === 1 || self.allStatus === 2) {
        let url = "/api/dkn/activity/editBatch";
        let params = self.selectedRows.map((e) => {
          return {
            id: e.id,
            status: self.allStatus === 1 ? 0 : 1,
          };
        });
        const res = await self.$putAction(url, params);
        if (!res.success) {
          self.$message.error(res.message);
          return;
        }
        self.$message.success("操作成功");
      } else if (self.allStatus === 3) {
        let url = "/api/dkn/activity/deleteBatch";
        let params = self.selectedRows.map((e) => {
          return e.id;
        });
        const res = await self.$deleteAction(url, {
          ids: params.join(","),
        });
        if (!res.success) {
          self.$message.error(res.message);
          return;
        }
        self.selectedRows = [];
        self.bathqiyong.disabled = true;
        self.batchBisabled.disabled = true;
        self.batchDelete.disabled = true;
        self.$message.success("操作成功");
      }
      self.$refs.activityTable.getData();
      //location.reload();
    },
    onEleaea44C0C24204F3F94F8B0352515Ee1CClick() {
      this.copyUrl();
    },
    onEle5827416B69Cb4A9C9F7EAd94D1B37311Click() {
      this.addStoreScope.visible = true;
      this.treeSelect.value = [];
      this.activityStoreTag.ctagList = [];
      this.activityStoreTagList = [];
      this.getTreeSelect();
    },
    onElea6D2B6Ac15764E40916D93F815A9290BClick() {
      this.importantModal.visible = true;
    },
    async onViewActivityStoreModalOk() {
      let self = this;
      let url = "/api/dkn/activityStore/delete";
      let params = {
        id: self.delViewActivityStoreModal.activityStoreId,
      };
      const res = await self.$deleteAction(url, params);
      if (res.success) {
        self.$message.success("删除成功");
      } else {
        self.$message.error(res.message);
      }
      self.$refs.viewActivityStoreTable.getData();
    },
    onAddStoreScopeOk() {
      this.addActivityStore();
    },
    onAddStoreScopeCancel() {
      this.addStoreScope.visible = false;
    },
    onTreeSelectChange(e) {
      console.log("e", e);
    },
    onActivityStoreTagClose(e) {
      console.log("e", e);
      const i = this.activityStoreTagList.findIndex((a) => a.id == e.id);
      if (i === -1) {
        return;
      }
      this.activityStoreTagList.splice(i, 1);
    },
    onViewActivityStoreUploadOnUploadDone(e) {
      console.log("打印", e);
      if (e.file.status == "done") {
        this.importantModal.visible = false;
        this.$message.success(e.file.response.message);
        this.$refs.viewActivityStoreTable.getData();
      }
      if (e.file.status == "error") {
        this.$message.error(e.file.response.message);
        this.$refs.viewActivityStoreTable.getData();
      }
    },
    onEle476E74Cc7C7D4B02B2A5C7C4317019EeClick() {
      this.$downloadFile(
        "活动门店列表模板.xlsx",
        "/api/dkn/viewActivityStore/downExcelTemplate",
        {}
      );
    },
    onEle29Cecb17Fabb4Ee5A5B7512570C6D4B8Click() {
      this.addChannelModal.visible = true;
      this.channelSelect.value = [];
    },
    onEle6C6Ecbd635Bf43B5BdadAb23699Ef7DfClick() {
      this.impotChannelModal.visible = true;
    },
    async onDelChannelModalOk() {
      let self = this;
      let url = "/api/dkn/activityDictItem/delete";
      let params = {
        id: self.delViewActivityDictItem.id,
      };
      const res = await self.$deleteAction(url, params);
      if (res.success) {
        self.$message.success("删除成功");
      } else {
        self.$message.error(res.message);
      }
      self.$refs.channelTable.getData();
    },
    onAddChannelModalOk() {
      this.addActivityDictItem();
    },
    onAddChannelModalCancel() {
      this.addChannelModal.visible = false;
    },
    onChannelUploadOnUploadDone(e) {
      console.log("打印", e);
      if (e.file.status == "done") {
        this.impotChannelModal.visible = false;
        this.$message.success(e.file.response.message);
        this.$refs.channelTable.getData();
      }
      if (e.file.status == "error") {
        this.$message.error(e.file.response.message);
        this.$refs.channelTable.getData();
      }
    },
    onEle6A2C4B1BFc1D4F9F9Baf3Dc513039Ea8Click() {
      this.$downloadFile(
        "活动渠道列表模板.xlsx",
        "/api/dkn/viewActivityDictItem/downExcelTemplate",
        {}
      );
    },
  },
};
</script>

<style lang="less" scoped>
.page {
}

.ele-wrapper-crudPageCard {
  width: 100%;
}

.ele-wrapper-crudPagePanel {
  width: 100%;
  /deep/ .panel_title_icon {
    display: none;
  }
}

.ele-wrapper-activityFilter {
  width: 98%;
  margin: 1%;
  margin-bottom: 0;
}

.ele-wrapper-addButton {
  margin: 0 3% 0 1%;
}

.ele-wrapper-importButton {
  margin: 0 3% 0 1%;
  transform: translateY(-1px);
  /deep/ .upload-class {
    min-width: 0;
  }
}

.ele-wrapper-downloadTemplateButton {
  margin: 0 3% 0 1%;
}

.ele-wrapper-exportButton {
  margin: 0 0 0 1%;
}

.ele-wrapper-d305a01c-2a94-4341-899d-5e2787dbfd8b {
  width: 100%;
}

.ele-wrapper-4aad8761-7b58-4d08-b5a2-91fea232f9fe {
  width: 100%;
  .hm-bg-card {
    display: flex;
  }
}

.ele-wrapper-bathqiyong {
  margin-right: 8px;
}

.ele-wrapper-batchBisabled {
  margin-right: 8px;
}

.ele-wrapper-batchDelete {
  margin-right: 8px;
}

.ele-wrapper-invisibleImportSearchLogicBtn {
  display: none;
}

.ele-wrapper-activityTable {
  .table-div /deep/ .ant-table-thead > tr > th {
    background: #fafafa;
  }
  /deep/.ant-table-header-column > div {
    background-color: transparent !important;
  }
  /deep/.switch-div,
  /deep/.switch-class {
    background-color: transparent !important;
  }
  width: 98%;
  margin-left: 1%;
}

.ele-wrapper-addUserModalCard {
  width: 100%;
}

.ele-wrapper-activityAddForm {
  width: 100%;
}

.ele-wrapper-newUserModalCard {
  width: 100%;
}

.ele-wrapper-activityEditForm {
  width: 100%;
}

.ele-wrapper-detailsUserModalCard {
  width: 100%;
}

.ele-wrapper-activityDetailForm {
  width: 100%;
}

.ele-wrapper-deleteUserInputCard {
  width: 100%;
}

.ele-wrapper-deleteUserInputText {
  width: 60%;
}

.ele-wrapper-a51e5f78-be7b-4837-96de-0d69fb368535 {
  width: 100%;
}

.ele-wrapper-allText {
  width: 60%;
}

.ele-wrapper-prompt {
  width: 272px;
  display: flex;
  justify-content: center;
}

.ele-wrapper-9e3b4e17-761a-4730-8444-b50b2595cf04 {
  width: 100%;
  padding-bottom: 12px;
}

.ele-wrapper-b30d54e9-4e74-4c47-b7d3-81f3d36b7f6a {
  width: 100%;
  padding-bottom: 12px;
}

.ele-wrapper-urlInput {
  width: 70%;
  float: left;
  /deep/.input-title {
    font-size: 16px !important;
    text-align: right !important;
    color: #000000 !important;
  }
}

.ele-wrapper-aea44c0c-2420-4f3f-94f8-b0352515ee1c {
  margin-left: 8px;
}

.ele-wrapper-2ec3a6e9-60d5-49a0-8676-03c8bd1a7eec {
  width: 100%;
}

.ele-wrapper-94ca123c-7c72-46ad-8770-3d45ef9f5eb9 {
  float: left;
}

.ele-wrapper-qrcode {
  width: 70%;
}

.ele-wrapper-d72366d9-57b6-47e7-a63d-641343f2d736 {
  width: 100%;
}

.ele-wrapper-a6d2b6ac-1576-4e40-916d-93f815a9290b {
  margin-left: 10px;
}

.ele-wrapper-viewActivityStoreTable {
  width: 100%;
  /deep/.ant-btn-link {
    color: #000;
  }
}

.ele-wrapper-e3c72123-dab1-4e7d-947b-9cc498196b55 {
  width: 100%;
}

.ele-wrapper-20c28b0a-2f8d-4fb4-ae2e-2d5c7ac30af6 {
  width: 60%;
}

.ele-wrapper-treeSelect {
  width: 100%;
}

.ele-wrapper-activityStoreTag {
  margin: 10px;
}

.ele-wrapper-viewActivityStoreUpload {
  margin-left: 2%;
}

.ele-wrapper-32674f07-f53e-48c8-b937-c9fdc4cde32a {
  width: 100%;
}

.ele-wrapper-476e74cc-7c7d-4b02-b2a5-c7c4317019ee {
  /deep/.ant-btn-icon-only {
    color: "blue";
  }
}

.ele-wrapper-85e440ed-e222-47c9-b9b5-b5da932b435f {
  width: 100%;
}

.ele-wrapper-6c6ecbd6-35bf-43b5-bdad-ab23699ef7df {
  margin-left: 10px;
}

.ele-wrapper-channelTable {
  width: 100%;
  /deep/.ant-btn-link {
    color: #000;
  }
}

.ele-wrapper-47c9a74e-6fc3-48db-8992-6ce487ba6500 {
  width: 100%;
}

.ele-wrapper-bb41f563-3631-4d69-8120-616a9e58816a {
  width: 60%;
}

.ele-wrapper-channelUpload {
  margin-left: 2%;
}

.ele-wrapper-8241b2f8-302f-4604-a53c-668ed78c4b87 {
  width: 100%;
}

.ele-wrapper-6a2c4b1b-fc1d-4f9f-9baf-3dc513039ea8 {
  /deep/.ant-btn-icon-only {
    color: "blue";
  }
}

.ele-wrapper-bd8f481b-9f27-4d1b-9a65-3e3566be69e1 {
  display: none;
}
</style>
