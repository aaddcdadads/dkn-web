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
                class="ele-wrapper ele-wrapper-b30d54e9-4e74-4c47-b7d3-81f3d36b7f6a"
              >
                <hm-bg-card
                  width="100%"
                  height=""
                  border-radius=""
                  padding=""
                  box-shadow-color="#00000000"
                  class="ele-b30d54e9-4e74-4c47-b7d3-81f3d36b7f6a"
                >
                  <div class="ele-wrapper ele-wrapper-urlInput">
                    <hm-ant-input
                      ref="urlInput"
                      v-model:value="urlInput.value"
                      title="URL"
                      :disabled="true"
                      width="100%"
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
                  class="ele-2ec3a6e9-60d5-49a0-8676-03c8bd1a7eec"
                >
                  <div
                    class="ele-wrapper ele-wrapper-94ca123c-7c72-46ad-8770-3d45ef9f5eb9"
                  >
                    <hm-ant-bg-text text="二维码：" font-size="16px">
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
import HmAntInput from "/@/components/built-in/jeecg/HmAntInput.vue";
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
    HmAntInput,
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
      urlInput: {
        value: "",
      },
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
            title: "活动周期",
            dataIndex: "startTime",
            key: "startTime",
            width: 220,
          },
          {
            title: "活动报名截止时间",
            dataIndex: "closeTime",
            key: "closeTime",
            width: 220,
          },
          {
            title: "活动核销截止时间",
            dataIndex: "pickUpTime",
            key: "pickUpTime",
            width: 220,
          },
          {
            title: "报名人数",
            dataIndex: "orders",
            key: "orders",
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
            name: "报名列表",
            callback: function (item) {
              self.$router.push({
                path: `/haomo/1750728111109967873/page`,
                query: { activityId: item.id },
              });
            },
            type: "link",
          },
          {
            name: "查看详情",
            callback: function (item) {
              self.$router.push({
                path: `/haomo/1751436264696975361/page`,
                query: { type: 3, id: item.id },
              });
            },
            type: "link",
          },
          {
            name: "编辑",
            callback: function (item) {
              self.$router.push({
                path: `/haomo/1751436264696975361/page`,
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
      self.bathqiyong.disabled = false;
      self.batchBisabled.disabled = false;
      self.batchDelete.disabled = false;
      self.copyUrl = function () {
        let url = self.urlInput.value;
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
    },
    onActivityTableOnSelectAll(e) {
      this.selectedRows = e.selectedRows;
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
        self.$message.success("操作成功");
      }
      self.$refs.activityTable.getData();
    },
    onEleaea44C0C24204F3F94F8B0352515Ee1CClick() {
      this.copyUrl();
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

.ele-wrapper-b30d54e9-4e74-4c47-b7d3-81f3d36b7f6a {
  width: 100%;
}

.ele-wrapper-urlInput {
  width: 70%;
}

.ele-wrapper-aea44c0c-2420-4f3f-94f8-b0352515ee1c {
  margin-left: 8px;
  margin-top: 10px;
}

.ele-wrapper-2ec3a6e9-60d5-49a0-8676-03c8bd1a7eec {
  width: 100%;
}

.ele-wrapper-qrcode {
  width: 70%;
}

.ele-wrapper-bd8f481b-9f27-4d1b-9a65-3e3566be69e1 {
  display: none;
}
</style>
