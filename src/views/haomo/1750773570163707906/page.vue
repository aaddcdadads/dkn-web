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
                  :col-num="2"
                  :col-min-width="380"
                  :schema="storeFilter.schema"
                  :label-col="7"
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
                        padding=""
                        box-shadow-color="#00000000"
                        class="ele-b26f83d8-788d-4911-b39c-d6db12ade907"
                      >
                        <div
                          class="ele-wrapper ele-wrapper-f087f9b5-c006-41c6-aea1-a22f650dcce6"
                        >
                          <hm-ant-button
                            text="新增门店"
                            :type="'primary'"
                            icon="fa fa-plus"
                            @click="onElef087F9B5C00641C6Aea1A22F650Dcce6Click"
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
                  :actions="storeTable.actions"
                  :is-flat-action="storeTable.isFlatAction"
                  :background-color="storeTable.backgroundColor"
                  :row-class-name="storeTable.rowClassName"
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
              title="查看详情"
              v-model:visible="storeDetailModal.visible"
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
                  <div class="ele-wrapper ele-wrapper-storeDetailForm">
                    <hm-ant-formily
                      ref="storeDetailForm"
                      :config="storeDetailForm.config"
                      v-model:value="storeDetailForm.value"
                      :col-num="2"
                      :schema="storeDetailForm.schema"
                      :label-col="7"
                      :wrapper-col="14"
                      class="ele-storeDetailForm"
                    >
                    </hm-ant-formily>
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
import HmAntIconText from "/@/components/built-in/jeecg/HmAntIconText.vue";
import HmAntSwitch from "/@/components/built-in/jeecg/HmAntSwitch.vue";

import {
  downloadTemplate,
  exportStore,
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
        visible: false,
      },
      storeDetailForm: {
        config: {
          name: {
            type: "Span",
            title: "门店名称",
            style: {
              width: "50%",
            },
            props: {},
            validator: function (value) {},
            required: false,
            disabled: false,
          },
          urbanArea: {
            type: "Span",
            title: "门店所属区域",
            style: {
              width: "50%",
            },
            props: {},
            validator: function (value) {},
          },
          address: {
            type: "Span",
            title: "门店地址",
            style: {
              width: "50%",
            },
            props: {},
            validator: function (value) {},
          },
        },
        value: {
          span: "文字内容",
        },
        schema: {},
      },
      storeEditModal: {
        visible: false,
      },
      storeEditForm: {
        config: {
          name: {
            type: "Input",
            title: "门店名称",
            style: {
              width: "50%",
            },
            props: {},
            validator: function (value) {},
            required: false,
            disabled: false,
          },
          urbanArea: {
            type: "Input",
            title: "门店所属区域",
            style: {
              width: "50%",
            },
            props: {},
            validator: function (value) {},
          },
          address: {
            type: "Input",
            title: "门店地址",
            style: {
              width: "50%",
            },
            props: {},
            validator: function (value) {},
          },
        },
        value: {
          span: "文字内容",
        },
        schema: {},
      },
      storeDeleteModal: {
        visible: false,
      },
      storeAddModal: {
        visible: false,
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
            required: false,
            disabled: false,
          },
          urbanArea: {
            type: "Input",
            title: "门店所属区域",
            style: {
              width: "50%",
            },
            props: {},
            validator: function (value) {},
          },
          address: {
            type: "Input",
            title: "门店地址",
            style: {
              width: "50%",
            },
            props: {},
            validator: function (value) {},
          },
        },
        value: {
          span: "文字内容",
        },
        schema: {},
      },
      storeFilter: {
        config: {
          name: {
            type: "Input",
            title: "门店名称",
            style: {
              width: "25%",
            },
            props: {},
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
            dataIndex: "urbanArea",
            key: "urbanArea",
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
                checked: false,
                title: "",
                onChange: function (e) {},
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
        url: "/api/restify/store/list",
        params: {
          databaseId: "",
          column: "createTime",
          order: "desc",
        },
        getDataMap: {
          total: "",
          list: "",
        },
        actions: [
          {
            name: "门店核销码",
            callback: function (item) {
              self.storeDetailModal.visible = true;
              self.$nextTick(function () {
                self.storeDetailForm.value = item;
              });
            },
            type: "link",
          },
          {
            name: "编辑",
            callback: function (item) {
              self.storeEditModal.visible = true;
              self.currentStoreId = item.id;
              self.$nextTick(function () {
                self.storeEditForm.value = item;
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
  mounted(e) {
    this.onMounted(e);
  },
  methods: {
    onMounted() {
      console.log("this.importButton.visible");
      console.log("this.exportButton.visible");
      console.log("this.crudPagePanel.title");
      console.log("this.storeAddForm.config");
      console.log("this.storeEditForm.config");
      console.log("this.storeDetailForm.config");

      //设置上传请求头
      this.$nextTick(() => {
        let token = localStorage.getItem("pro__Access-Token");
        if (token) {
          this.importButton.headers = {
            "X-Access-Token": token,
          };
        }
      });
    },

    onDownloadTemplateButtonClick() {
      downloadTemplate(this, arguments);
    },
    onExportButtonClick() {
      exportStore(this, arguments);
    },
    onElef087F9B5C00641C6Aea1A22F650Dcce6Click() {
      this.storeAddModal.visible = true;
    },
    onInvisibleImportSearchLogicBtnClick() {
      searchStore(this, arguments);
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
    onStoreDeleteModalOk() {
      deleteStore(this, arguments);
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

.ele-wrapper-68ec1e3a-e7db-413b-a7cc-7a386f743f83 {
  width: 100%;
}

.ele-wrapper-b26f83d8-788d-4911-b39c-d6db12ade907 {
  width: 400px;
}

.ele-wrapper-6ce972a2-d6e6-41d8-907a-2d0ebe5ef0a5 {
  margin: 0 5% 0 3%;
  transform: translateY(-1px);
  /deep/ .upload-class {
    min-width: 0;
  }
}

.ele-wrapper-6f9a0599-82dc-4e11-880c-d7f38d3f8892 {
  margin: 0 0 0 1%;
}

.ele-wrapper-invisibleImportSearchLogicBtn {
  display: none;
}

.ele-wrapper-storeTable {
  .table-div /deep/ .ant-table-thead > tr > th {
    background: #fafafa;
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

.ele-wrapper-storeDetailForm {
  width: 100%;
}

.ele-wrapper-deleteUserInputCard {
  width: 100%;
}

.ele-wrapper-deleteUserInputText {
  width: 60%;
}

.ele-wrapper-ca97e822-f663-4433-9bc3-763a5a8b2fd1 {
  display: none;
}
</style>
