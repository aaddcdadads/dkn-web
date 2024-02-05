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
              <div class="ele-wrapper ele-wrapper-storeFilter">
                <hm-ant-formily
                  ref="storeFilter"
                  :config="storeFilter.config"
                  v-model:value="storeFilter.value"
                  :col-num="0"
                  :col-min-width="380"
                  :schema="storeFilter.schema"
                  :label-col="5"
                  :wrapper-col="14"
                  class="ele-storeFilter"
                >
                </hm-ant-formily>
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
              <div class="ele-wrapper ele-wrapper-areaButton">
                <hm-ant-button
                  ref="areaButton"
                  @click="onAreaButtonClick"
                  class="ele-areaButton"
                >
                </hm-ant-button>
              </div>
              <div class="ele-wrapper ele-wrapper-cityButton">
                <hm-ant-button
                  ref="cityButton"
                  @click="onCityButtonClick"
                  class="ele-cityButton"
                >
                </hm-ant-button>
              </div>
              <div
                class="ele-wrapper ele-wrapper-68ec1e3a-e7db-413b-a7cc-7a386f743f83"
              >
                <hm-panel
                  height=""
                  title="门店列表"
                  class="ele-68ec1e3a-e7db-413b-a7cc-7a386f743f83"
                >
                  <template v-slot:slot-title-icon>
                    <div
                      class="ele-wrapper ele-wrapper-b26f83d8-788d-4911-b39c-d6db12ade907"
                    >
                      <hm-bg-card
                        width="100%"
                        height=""
                        border-radius=""
                        :text-align="'right'"
                        padding=""
                        box-shadow-color="#00000000"
                        class="ele-b26f83d8-788d-4911-b39c-d6db12ade907"
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
                          class="ele-wrapper ele-wrapper-f087f9b5-c006-41c6-aea1-a22f650dcce6"
                        >
                          <hm-ant-button
                            text="新增门店"
                            :type="'primary'"
                            icon="fa fa-plus"
                            @click="onElef087F9B5C00641C6Aea1A22F650Dcce6Click"
                            class="ele-f087f9b5-c006-41c6-aea1-a22f650dcce6"
                          >
                          </hm-ant-button>
                        </div>
                        <div
                          class="ele-wrapper ele-wrapper-6ce972a2-d6e6-41d8-907a-2d0ebe5ef0a5"
                        >
                          <hm-ant-upload
                            title=""
                            text="导入门店"
                            :button-type="'primary'"
                            :file-list="[]"
                            action="/api/restify/store/importExcel"
                            class="ele-6ce972a2-d6e6-41d8-907a-2d0ebe5ef0a5"
                          >
                          </hm-ant-upload>
                        </div>
                        <div
                          class="ele-wrapper ele-wrapper-6f9a0599-82dc-4e11-880c-d7f38d3f8892"
                        >
                          <hm-ant-button
                            text="导出核销码"
                            :type="'primary'"
                            icon="fa fa-download"
                            class="ele-6f9a0599-82dc-4e11-880c-d7f38d3f8892"
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
              <div class="ele-wrapper ele-wrapper-storeTable">
                <hm-ant-table
                  ref="storeTable"
                  :columns="storeTable.columns"
                  :data="storeTable.data"
                  :pagination="storeTable.pagination"
                  :url="storeTable.url"
                  :params="storeTable.params"
                  :get-data-map="storeTable.getDataMap"
                  :row-select-flag="storeTable.rowSelectFlag"
                  :actions="storeTable.actions"
                  :is-flat-action="storeTable.isFlatAction"
                  :background-color="storeTable.backgroundColor"
                  :row-class-name="storeTable.rowClassName"
                  @onSelect="onStoreTableOnSelect"
                  @onSelectAll="onStoreTableOnSelectAll"
                  class="ele-storeTable"
                >
                </hm-ant-table>
              </div>
            </hm-panel>
          </div>
          <div class="ele-wrapper ele-wrapper-storeAddModal">
            <hm-modal
              ref="storeAddModal"
              title="新增"
              v-model:visible="storeAddModal.visible"
              width="810px"
              :z-index="1000"
              height="100%"
              :auto-close="false"
              @ok="onStoreAddModalOk"
              @cancel="onStoreAddModalCancel"
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
                  <div class="ele-wrapper ele-wrapper-storeAddForm">
                    <hm-ant-formily
                      ref="storeAddForm"
                      :config="storeAddForm.config"
                      v-model:value="storeAddForm.value"
                      :col-num="2"
                      :col-min-width="380"
                      :schema="storeAddForm.schema"
                      :label-col="7"
                      :wrapper-col="14"
                      class="ele-storeAddForm"
                    >
                    </hm-ant-formily>
                  </div>
                </hm-bg-card>
              </div>
            </hm-modal>
          </div>
          <div class="ele-wrapper ele-wrapper-storeEditModal">
            <hm-modal
              ref="storeEditModal"
              title="编辑"
              v-model:visible="storeEditModal.visible"
              width="810px"
              :z-index="1000"
              height="100%"
              :auto-close="false"
              @ok="onStoreEditModalOk"
              @cancel="onStoreEditModalCancel"
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
                  <div class="ele-wrapper ele-wrapper-storeEditForm">
                    <hm-ant-formily
                      ref="storeEditForm"
                      :config="storeEditForm.config"
                      v-model:value="storeEditForm.value"
                      :col-num="2"
                      :col-min-width="380"
                      :schema="storeEditForm.schema"
                      :label-col="7"
                      :wrapper-col="14"
                      class="ele-storeEditForm"
                    >
                    </hm-ant-formily>
                  </div>
                </hm-bg-card>
              </div>
            </hm-modal>
          </div>
          <div class="ele-wrapper ele-wrapper-storeDetailModal">
            <hm-modal
              ref="storeDetailModal"
              title="门店核销码"
              v-model:visible="storeDetailModal.visible"
              :ok-button-boole="false"
              cancel-text="导出门店二维码"
              :cancel-button-props="false"
              width="600px"
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
                  <div
                    class="ele-wrapper ele-wrapper-6a427e0a-e088-4f10-8f90-062dff49940b"
                  >
                    <hm-ant-bg-text
                      text="二维码： "
                      font-size="14px"
                      class="ele-6a427e0a-e088-4f10-8f90-062dff49940b"
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
                  <div
                    class="ele-wrapper ele-wrapper-484bf8ce-7d76-4bf5-bd8b-b64d3ed4b395"
                  >
                    <hm-bg-card
                      width="100%"
                      height=""
                      border-radius=""
                      padding=""
                      box-shadow-h-shadow=""
                      box-shadow-v-shadow=""
                      box-shadow-blur=""
                      box-shadow-spread=""
                      class="ele-484bf8ce-7d76-4bf5-bd8b-b64d3ed4b395"
                    >
                      <div
                        class="ele-wrapper ele-wrapper-9fa6ebb7-26cf-471e-af62-d8b5679ca587"
                      >
                        <hm-ant-bg-text text="门店名称：" font-size="14px">
                        </hm-ant-bg-text>
                      </div>
                      <div class="ele-wrapper ele-wrapper-storeNameText">
                        <hm-ant-bg-text
                          ref="storeNameText"
                          :text="storeNameText.text"
                          :font-size="storeNameText.fontSize"
                        >
                        </hm-ant-bg-text>
                      </div>
                    </hm-bg-card>
                  </div>
                </hm-bg-card>
              </div>
              <div class="ele-wrapper ele-wrapper-bottomBg">
                <hm-bg-card
                  ref="bottomBg"
                  width="100%"
                  height=""
                  border-radius=""
                  :text-align="'right'"
                  padding="12"
                  box-shadow-color="#00000000"
                  class="ele-bottomBg"
                >
                  <div class="ele-wrapper ele-wrapper-daochuButton">
                    <hm-ant-button
                      ref="daochuButton"
                      text="导出门店二维码"
                      :type="'primary'"
                      :size="'large'"
                      @click="onDaochuButtonClick"
                      class="ele-daochuButton"
                    >
                    </hm-ant-button>
                  </div>
                  <div class="ele-wrapper ele-wrapper-sureButton">
                    <hm-ant-button
                      ref="sureButton"
                      text="确定"
                      :type="'primary'"
                      :size="'large'"
                      @click="onSureButtonClick"
                      class="ele-sureButton"
                    >
                    </hm-ant-button>
                  </div>
                </hm-bg-card>
              </div>
            </hm-modal>
          </div>
          <div class="ele-wrapper ele-wrapper-storeDeleteModal">
            <hm-modal
              ref="storeDeleteModal"
              title="删除"
              v-model:visible="storeDeleteModal.visible"
              :closable="true"
              ok-text="删除"
              :ok-type="'danger'"
              width="320px"
              :z-index="1000"
              height="80px"
              @ok="onStoreDeleteModalOk"
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
          <div class="ele-wrapper ele-wrapper-batchEdit">
            <hm-modal
              ref="batchEdit"
              title="批量操作"
              v-model:visible="batchEdit.visible"
              width="320px"
              :z-index="1000"
              height=""
              @ok="onBatchEditOk"
              @cancel="onBatchEditCancel"
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
        </hm-bg-card>
      </div>
      <div class="ele-wrapper ele-wrapper-ca97e822-f663-4433-9bc3-763a5a8b2fd1">
        <hm-ant-switch class="ele-ca97e822-f663-4433-9bc3-763a5a8b2fd1">
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
import HmAntBgText from "/@/components/built-in/jeecg/HmAntBgText.vue";
import HmAntIconText from "/@/components/built-in/jeecg/HmAntIconText.vue";
import HmAntSwitch from "/@/components/built-in/jeecg/HmAntSwitch.vue";

import {
  downloadTemplate,
  exportStore,
  loadAreaDataRegion,
  loadAreaData,
  searchStore,
  addStore,
  editStore,
  deleteStore,
} from "/@/logics/StorePageGroup";

export default {
  name: "StorePage",
  components: {
    HmBgCard,
    HmPanel,
    HmAntFormily,
    HmAntButton,
    HmAntUpload,
    HmAntTable,
    HmModal,
    HmAntBgText,
    HmAntIconText,
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
      storeDetailModal: {
        visible: true,
      },
      storeEditModal: {
        visible: false,
      },
      currentEditItem: {},
      storeEditForm: {
        config: {},
        value: {
          span: "文字内容",
        },
        schema: {
          type: "object",
          properties: {
            form: {
              type: "void",
              "x-component": "Form",
              "x-component-props": {
                "wrapper-col": {
                  span: 14,
                },
                style: {
                  flexWrap: "wrap",
                  display: "flex",
                },
                "label-col": {
                  span: 8,
                },
              },
              properties: {
                name: {
                  type: "string",
                  required: true,
                  default: "",
                  "x-decorator": "FormItem",
                  "x-decorator-props": {
                    label: "门店名称",
                    name: "name",
                    style: {
                      width: "50%",
                    },
                    class: ["required"],
                  },
                  "x-component-props": {
                    title: "",
                  },
                  "x-component": "HmAntInput",
                },
                address: {
                  type: "string",
                  required: true,
                  default: "",
                  "x-decorator": "FormItem",
                  "x-decorator-props": {
                    label: "门店地址",
                    name: "address",
                    style: {
                      width: "50%",
                    },
                    class: ["required"],
                  },
                  "x-component-props": {
                    title: "",
                  },
                  "x-component": "HmAntInput",
                },
                urbanArea: {
                  type: "string",
                  required: true,
                  default: "",
                  "x-decorator": "FormItem",
                  "x-decorator-props": {
                    label: "门店所属区域",
                    name: "urbanArea",
                    style: {
                      width: "50%",
                    },
                    class: ["required"],
                  },
                  "x-component-props": {
                    "change-on-select": true,
                    placeholder: "请选择地区",
                    options: [],
                  },
                  "x-component": "Cascader",
                },
              },
            },
          },
        },
      },
      storeDeleteModal: {
        visible: false,
      },
      selectedRows: {},
      batchEdit: {
        visible: false,
      },
      prompt: {
        text: "文字",
      },
      storeAddModal: {
        visible: false,
      },
      qrcodeModal: {},
      bathqiyong: {
        disabled: false,
        text: "批量启用",
        type: "primary",
        icon: "",
      },
      batchBisabled: {
        disabled: false,
        text: "批量禁用",
        type: "primary",
        icon: "",
      },
      batchDelete: {
        disabled: false,
        text: "批量删除",
        type: "primary",
        icon: "",
      },
      importButton: {},
      exportButton: {
        visible: false,
        text: "导出",
        type: "primary",
        icon: "fa fa-download",
      },
      storeAddForm: {
        config: {
          name: {
            type: "Input",
            title: "门店名称",
            style: {
              width: "50%",
            },
            props: {},
            validator: function (value) {},
            required: true,
            disabled: false,
          },
          address: {
            type: "Input",
            title: "门店地址",
            style: {
              width: "50%",
            },
            props: {},
            required: true,
            validator: function (value) {},
          },
        },
        value: {
          span: "文字内容",
        },
        schema: {
          type: "object",
          properties: {
            form: {
              type: "void",
              "x-component": "Form",
              "x-component-props": {
                "wrapper-col": {
                  span: 14,
                },
                style: {
                  flexWrap: "wrap",
                  display: "flex",
                },
                "label-col": {
                  span: 8,
                },
              },
              properties: {
                urbanArea: {
                  type: "string",
                  required: true,
                  "x-decorator": "FormItem",
                  "x-decorator-props": {
                    label: "门店所属区域",
                    name: "urbanArea",
                    style: {
                      width: "50%",
                    },
                    class: ["required"],
                  },
                  "x-component-props": {
                    "change-on-select": true,
                    placeholder: "请选择地区",
                    options: [],
                  },
                  "x-component": "Cascader",
                },
              },
            },
          },
        },
      },
      storeDetailForm: {},
      storeNameText: {
        text: "",
        fontSize: "14px",
      },
      storeFilter: {
        config: {
          name: {
            type: "Input",
            title: "搜索门店",
            style: {
              width: "25%",
            },
            props: {
              placeholder: "门店名称",
            },
            validator: function (value) {},
          },
          status: {
            type: "HmAntSelect",
            title: "启用状态",
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
                searchStore(self, null);
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
                self.$refs.storeFilter.reset();
                searchStore(self, null);
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
      storeTable: {
        columns: [
          {
            title: "门店名称",
            dataIndex: "name",
            key: "name",
          },
          {
            title: "门店所属区域",
            dataIndex: "mergerName",
            key: "mergerName",
          },
          {
            title: "门店地址",
            dataIndex: "address",
            key: "address",
          },
          {
            title: "启用状态",
            dataIndex: "status",
            key: "status",
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
            width: "260",
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
        url: "/api/dkn/viewStoreArea/list",
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
            name: "门店核销码",
            callback: function (item) {
              self.storeDetailModal.visible = true;
              self.getQrCode(item.id, item.name);
              console.log("打印二维码url", self.baseUrl);
            },
            type: "link",
          },
          {
            name: "编辑",
            callback: function (item) {
              self.storeEditModal.visible = true;
              self.currentStoreId = item.id;
              self.currentEditItem = item;
              console.log("地区", self.currentEditItem.urbanArea);
              self.$nextTick(function () {
                //self.storeEditForm.value = item;
                self.onAreaButtonClick();
              });
            },
            type: "link",
          },
          {
            name: "删除",
            callback: function (item) {
              self.storeDeleteModal.visible = true;
              self.currentStoreId = item.id;
            },
            type: "link",
          },
        ],
        isFlatAction: true,
        backgroundColor: "#FFFFFF",
        rowClassName: {},
      },
      "6ce972a2-d6e6-41d8-907a-2d0ebe5ef0a5": {
        fileList: [],
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
      console.log("this.importButton.visible");
      console.log("this.exportButton.visible");
      console.log("this.crudPagePanel.title");
      console.log("this.storeAddForm.config");
      console.log("this.storeEditForm.config");
      console.log("this.storeDetailForm.config");
      //初始批量按钮禁用状态
      self.selectedRows = [];
      self.bathqiyong.disabled = true;
      self.batchBisabled.disabled = true;
      self.batchDelete.disabled = true;

      //加载地区下拉框数据
      loadAreaData(this, arguments);
      //设置上传请求头
      this.$nextTick(() => {
        let token = localStorage.getItem("pro__Access-Token");
        if (token) {
          this.importButton.headers = {
            "X-Access-Token": token,
          };
        }
      });

      //表格开关操作
      // 更新活动状态的函数
      self.updateStatus = async function (id, status) {
        // 定义请求的 API 地址
        let url = "/api/dkn/store/edit";
        // 准备请求参数，包括活动ID和要设置的状态（0 表示启用，1 表示禁用）
        let params = {
          id,
          status: status ? 0 : 1,
        };
        // 发送 PUT 请求，并等待响应
        const res = await self.$putAction(url, params);
        // 检查响应是否成功
        if (!res.success) {
          // 如果响应不成功，显示错误消息并退出函数
          self.$message.error(res.message);
          return;
        }
        // 如果响应成功，显示操作成功的消息
        self.$message.success("操作成功");
      };
      //生成二维码
      self.getQrCode = async function (id, name) {
        let variableToEncode = `${id}`;
        let titele = `${name}`;
        console.log("打印id", variableToEncode, "打印店名", titele);
        setTimeout(() => {
          const container = document.querySelector(".ele-wrapper-qrcode");
          console.log("container", container);
          new self.$QrCode(container, {
            text: variableToEncode,
            width: 128,
            height: 128,
            colorDark: "#000000",
            colorLight: "#ffffff",
          });
          //门店名称
          self.storeNameText.text = titele;
          self.storeNameTitle = titele;
          // 获取生成的二维码的 base64 编码
          const canvas = container.querySelector("canvas");
          const qrCodeBase64 = canvas.toDataURL("image/png");
          self.baseUrl = qrCodeBase64;
          // 打印二维码的 base64 编码
          console.log("QR Code Base64:", qrCodeBase64);
        });
      };
      // 判断是否禁用方法
      self.isDisabled = function () {
        // 如果选中的行数大于0
        if (this.selectedRows.length > 0) {
          // 启用"批量启用"按钮
          self.bathqiyong.disabled = false;
          // 启用"批量禁用"按钮
          self.batchBisabled.disabled = false;
          // 启用"批量删除"按钮
          self.batchDelete.disabled = false;
        } else {
          // 如果未选择任何行，则禁用上述三个按钮
          self.bathqiyong.disabled = true;
          self.batchBisabled.disabled = true;
          self.batchDelete.disabled = true;
        }
        // 定义两个空数组，用于存放状态为0和状态不为0的行数据
        let qd = [],
          jy = [];
        // 遍历选中的行
        this.selectedRows.forEach((e) => {
          // 如果行的状态为0，则将其加入qd数组
          if (e.status === 0) {
            qd.push(e);
          } else {
            jy.push(e);
          }
        });
        // 如果qd数组中有数据（即有状态为0的行）
        if (qd.length !== 0) {
          // 禁用"批量启用"按钮
          self.bathqiyong.disabled = true;
        }
        // 如果jy数组中有数据（即有状态不为0的行）
        if (jy.length !== 0) {
          // 禁用"批量禁用"按钮
          self.batchBisabled.disabled = true;
        }
      };
    },

    onDownloadTemplateButtonClick() {
      downloadTemplate(this, arguments);
    },
    onExportButtonClick() {
      exportStore(this, arguments);
    },
    onAreaButtonClick() {
      loadAreaDataRegion(this, arguments);
    },
    onCityButtonClick() {
      loadAreaData(this, arguments);
    },
    onBathqiyongClick() {
      // 检查是否有选中的行
      if (!this.selectedRows || this.selectedRows.length === 0) {
        // 如果没有选中的行，显示错误消息并退出函数
        this.$message.error("请先勾选");
        return;
      }
      // 使用 $nextTick 确保在DOM更新后执行
      this.$nextTick(() => {
        // 设置批量编辑对话框的可见性为true
        this.batchEdit.visible = true;
        //1:启用，2:禁用，3:删除
        this.allStatus = 1;
        // 设置提示文本
        this.prompt.text = "确认批量启用";
      });
    },
    onBatchBisabledClick() {
      // 检查是否有选中的行
      if (!this.selectedRows || this.selectedRows.length === 0) {
        // 如果没有选中的行，显示错误消息并退出函数
        this.$message.error("请选择活动");
        return;
      }
      // 使用 $nextTick 确保在 DOM 更新后执行
      this.$nextTick(() => {
        // 设置批量编辑对话框的可见性为true
        this.batchEdit.visible = true;
        //1:启用，2:禁用，3:删除
        this.allStatus = 2;
        // 设置提示文本
        this.prompt.text = "确认批量禁用";
      });
    },
    onBatchDeleteClick() {
      // 检查是否有选中的行
      if (!this.selectedRows || this.selectedRows.length === 0) {
        // 如果没有选中的行，显示错误消息并退出函数
        this.$message.error("请选择活动");
        return;
      }
      // 使用 $nextTick 确保在 DOM 更新后执行
      this.$nextTick(() => {
        // 设置批量编辑对话框的可见性为true
        this.batchEdit.visible = true;
        //1:启用，2:禁用，3:删除
        this.allStatus = 3;
        // 设置提示文本
        this.prompt.text = "确认批量删除";
      });
    },
    onElef087F9B5C00641C6Aea1A22F650Dcce6Click() {
      this.storeAddModal.visible = true;
    },
    onInvisibleImportSearchLogicBtnClick() {
      searchStore(this, arguments);
    },
    onStoreTableOnSelect(e) {
      this.selectedRows = e.selectedRows;
      //调用启用禁用方法
      this.isDisabled();
    },
    onStoreTableOnSelectAll(e) {
      this.selectedRows = e.selectedRows;
      //调用启用禁用方法
      this.isDisabled();
    },
    onStoreAddModalOk() {
      addStore(this, arguments);
    },
    onStoreAddModalCancel() {
      this.storeAddModal.visible = false;
    },
    onStoreEditModalOk() {
      editStore(this, arguments);
    },
    onStoreEditModalCancel() {
      this.storeEditModal.visible = false;
    },
    async onDaochuButtonClick() {
      //使用a标签下载二维码
      const downloadLink = document.createElement("a");
      downloadLink.href = this.baseUrl;
      downloadLink.download = this.storeNameTitle + "-二维码.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      this.qrcodeModal.visible = false;
    },
    onSureButtonClick() {
      //关闭弹窗
      this.storeDetailModal.visible = false;
    },
    onStoreDeleteModalOk() {
      deleteStore(this, arguments);
    },
    async onBatchEditOk() {
      // 获取当前组件实例
      let self = this;
      // 根据不同的状态执行不同的操作
      if (self.allStatus === 1 || self.allStatus === 2) {
        // 批量编辑操作
        let url = "/api/dkn/store/editBatch";
        let params = self.selectedRows.map((e) => {
          return {
            id: e.id,
            status: self.allStatus === 1 ? 0 : 1,
          };
        });
        // 发送 PUT 请求，等待响应
        const res = await self.$putAction(url, params);
        if (!res.success) {
          // 如果请求不成功，显示错误消息并退出函数
          self.$message.error(res.message);
          return;
        }
        // 操作成功的提示
        self.$message.success("操作成功");
      } else if (self.allStatus === 3) {
        // 批量删除操作
        let url = "/api/dkn/store/deleteBatch";
        let params = self.selectedRows.map((e) => {
          return e.id;
        });
        // 发送 DELETE 请求，等待响应
        const res = await self.$deleteAction(url, {
          ids: params.join(","),
        });
        if (!res.success) {
          // 如果请求不成功，显示错误消息并退出函数
          self.$message.error(res.message);
          return;
        }
        // 操作成功后的处理
        self.selectedRows = [];
        self.bathqiyong.disabled = true;
        self.batchBisabled.disabled = true;
        self.batchDelete.disabled = true;
        self.$message.success("操作成功");
      }
      // 刷新表格数据
      self.$refs.storeTable.getData();
    },
    onBatchEditCancel() {
      this.batchEdit.visible = false;
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

.ele-wrapper-storeFilter {
  width: 98%;
  margin: 1%;
  margin-bottom: 0;
}

.ele-wrapper-downloadTemplateButton {
  margin: 0 3% 0 1%;
}

.ele-wrapper-exportButton {
  margin: 0 0 0 1%;
}

.ele-wrapper-areaButton {
  display: none;
}

.ele-wrapper-cityButton {
  display: none;
}

.ele-wrapper-68ec1e3a-e7db-413b-a7cc-7a386f743f83 {
  width: 100%;
}

.ele-wrapper-b26f83d8-788d-4911-b39c-d6db12ade907 {
  width: 800px;
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

.ele-wrapper-f087f9b5-c006-41c6-aea1-a22f650dcce6 {
  margin-right: 8px;
}

.ele-wrapper-6ce972a2-d6e6-41d8-907a-2d0ebe5ef0a5 {
  margin-right: 8px;
  transform: translateY(-1px);
  /deep/ .upload-class {
    min-width: 0;
  }
}

.ele-wrapper-6f9a0599-82dc-4e11-880c-d7f38d3f8892 {
  margin-right: 8px;
}

.ele-wrapper-invisibleImportSearchLogicBtn {
  display: none;
}

.ele-wrapper-storeTable {
  .table-div /deep/ .ant-table-thead > tr > th {
    background: #fafafa;
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

.ele-wrapper-storeAddForm {
  width: 100%;
}

.ele-wrapper-newUserModalCard {
  width: 100%;
}

.ele-wrapper-storeEditForm {
  width: 100%;
}

.ele-wrapper-detailsUserModalCard {
  width: 100%;
}

.ele-wrapper-6a427e0a-e088-4f10-8f90-062dff49940b {
  float: left;
}

.ele-wrapper-qrcode {
  width: 70%;
}

.ele-wrapper-484bf8ce-7d76-4bf5-bd8b-b64d3ed4b395 {
  width: 100%;
}

.ele-wrapper-bottomBg {
  width: 100%;
  /deep/.ele-bottomBg {
    border-top: 1px solid #f0f0f0;
  }
}

.ele-wrapper-daochuButton {
  margin: 0 12px;
  /deep/.ele-daochuButton {
    border-radius: 4px;
  }
}

.ele-wrapper-sureButton {
  margin: 0 12px;
  /deep/.ele-sureButton {
    border-radius: 4px;
  }
}

.ele-wrapper-deleteUserInputCard {
  width: 100%;
}

.ele-wrapper-deleteUserInputText {
  width: 60%;
}

.ele-wrapper-prompt {
  width: 272px;
  display: flex;
  justify-content: center;
}

.ele-wrapper-ca97e822-f663-4433-9bc3-763a5a8b2fd1 {
  display: none;
}
</style>
