<template>
  <div class="page card">
    <div class="page-wrapper">
      <div class="ele-wrapper ele-wrapper-crudPageCard">
        <hm-bg-card
          ref="crudPageCard"
          padding=""
          box-shadow-color="#00000000"
          border-radius=""
          width="100%"
          height=""
          class="ele-crudPageCard"
        >
          <div class="ele-wrapper ele-wrapper-crudPagePanel">
            <hm-panel
              ref="crudPagePanel"
              :padding="crudPagePanel.padding"
              :title-block-color="crudPagePanel.titleBlockColor"
              :title="crudPagePanel.title"
              :height="crudPagePanel.height"
              class="ele-crudPagePanel"
            >
              <div class="ele-wrapper ele-wrapper-storeFilter">
                <hm-ant-formily
                  ref="storeFilter"
                  :schema="storeFilter.schema"
                  :wrapper-col="14"
                  :col-num="0"
                  :label-col="5"
                  :col-min-width="380"
                  :config="storeFilter.config"
                  v-model:value="storeFilter.value"
                  class="ele-storeFilter"
                >
                </hm-ant-formily>
              </div>
              <div class="ele-wrapper ele-wrapper-downloadTemplateButton">
                <hm-ant-button
                  ref="downloadTemplateButton"
                  :visible="false"
                  icon="fa fa-download"
                  text="下载模板"
                  :type="'primary'"
                  @click="onDownloadTemplateButtonClick"
                  class="ele-downloadTemplateButton"
                >
                </hm-ant-button>
              </div>
              <div class="ele-wrapper ele-wrapper-exportButton">
                <hm-ant-button
                  ref="exportButton"
                  :visible="exportButton.visible"
                  :icon="exportButton.icon"
                  :text="exportButton.text"
                  :type="exportButton.type"
                  @click="onExportButtonClick"
                  class="ele-exportButton"
                >
                </hm-ant-button>
              </div>
              <div
                class="ele-wrapper ele-wrapper-68ec1e3a-e7db-413b-a7cc-7a386f743f83"
              >
                <hm-panel
                  title="门店列表"
                  height=""
                  class="ele-68ec1e3a-e7db-413b-a7cc-7a386f743f83"
                >
                  <template v-slot:slot-title-icon>
                    <div
                      class="ele-wrapper ele-wrapper-b26f83d8-788d-4911-b39c-d6db12ade907"
                    >
                      <hm-bg-card
                        padding=""
                        box-shadow-color="#00000000"
                        border-radius=""
                        width="100%"
                        height=""
                        class="ele-b26f83d8-788d-4911-b39c-d6db12ade907"
                      >
                        <div
                          class="ele-wrapper ele-wrapper-f087f9b5-c006-41c6-aea1-a22f650dcce6"
                        >
                          <hm-ant-button
                            icon="fa fa-plus"
                            text="新增门店"
                            :type="'primary'"
                            @click="onElef087F9B5C00641C6Aea1A22F650Dcce6Click"
                          >
                          </hm-ant-button>
                        </div>
                        <div
                          class="ele-wrapper ele-wrapper-6ce972a2-d6e6-41d8-907a-2d0ebe5ef0a5"
                        >
                          <hm-ant-upload
                            :file-list="[]"
                            title=""
                            :button-type="'primary'"
                            action="/api/restify/store/importExcel"
                            text="导入门店"
                            class="ele-6ce972a2-d6e6-41d8-907a-2d0ebe5ef0a5"
                          >
                          </hm-ant-upload>
                        </div>
                        <div
                          class="ele-wrapper ele-wrapper-6f9a0599-82dc-4e11-880c-d7f38d3f8892"
                        >
                          <hm-ant-button
                            icon="fa fa-download"
                            text="导出核销码"
                            :type="'primary'"
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
              :z-index="1000"
              v-model:visible="storeAddModal.visible"
              title="新增"
              width="810px"
              :auto-close="false"
              height="100%"
              @cancel="onStoreAddModalCancel"
              @ok="onStoreAddModalOk"
            >
              <div class="ele-wrapper ele-wrapper-addUserModalCard">
                <hm-bg-card
                  ref="addUserModalCard"
                  padding=""
                  box-shadow-color="#00000000"
                  border-radius=""
                  width="100%"
                  height=""
                  class="ele-addUserModalCard"
                >
                  <div class="ele-wrapper ele-wrapper-storeAddForm">
                    <hm-ant-formily
                      ref="storeAddForm"
                      :schema="storeAddForm.schema"
                      :wrapper-col="14"
                      :col-num="2"
                      :label-col="7"
                      :col-min-width="380"
                      :config="storeAddForm.config"
                      v-model:value="storeAddForm.value"
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
              :z-index="1000"
              v-model:visible="storeEditModal.visible"
              title="编辑"
              width="810px"
              :auto-close="false"
              height="100%"
              @cancel="onStoreEditModalCancel"
              @ok="onStoreEditModalOk"
            >
              <div class="ele-wrapper ele-wrapper-newUserModalCard">
                <hm-bg-card
                  ref="newUserModalCard"
                  padding="0"
                  box-shadow-color="#00000000"
                  border-radius=""
                  width="100%"
                  height=""
                  class="ele-newUserModalCard"
                >
                  <div class="ele-wrapper ele-wrapper-storeEditForm">
                    <hm-ant-formily
                      ref="storeEditForm"
                      :schema="storeEditForm.schema"
                      :wrapper-col="14"
                      :col-num="2"
                      :label-col="7"
                      :col-min-width="380"
                      :config="storeEditForm.config"
                      v-model:value="storeEditForm.value"
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
              :z-index="1000"
              v-model:visible="storeDetailModal.visible"
              title="查看详情"
              cancel-text="导出门店二维码"
              width="600px"
              height="100%"
              class="ele-storeDetailModal"
            >
              <div class="ele-wrapper ele-wrapper-detailsUserModalCard">
                <hm-bg-card
                  ref="detailsUserModalCard"
                  padding=""
                  box-shadow-color="#00000000"
                  border-radius=""
                  width="100%"
                  height=""
                  class="ele-detailsUserModalCard"
                >
                  <div
                    class="ele-wrapper ele-wrapper-6a427e0a-e088-4f10-8f90-062dff49940b"
                  >
                    <hm-ant-bg-text
                      text="二维码："
                      class="ele-6a427e0a-e088-4f10-8f90-062dff49940b"
                    >
                    </hm-ant-bg-text>
                  </div>
                  <div
                    class="ele-wrapper ele-wrapper-216245a7-7953-4399-b2b2-43033411ee88"
                  >
                    <hm-image width="260" height="260"> </hm-image>
                  </div>
                  <div
                    class="ele-wrapper ele-wrapper-9babf229-dc69-4618-aee1-3b697b5baf99"
                  >
                    <hm-ant-bg-text
                      text="门店名称"
                      class="ele-9babf229-dc69-4618-aee1-3b697b5baf99"
                    >
                    </hm-ant-bg-text>
                  </div>
                  <div class="ele-wrapper ele-wrapper-storeDetailForm">
                    <hm-ant-formily
                      ref="storeDetailForm"
                      :schema="storeDetailForm.schema"
                      :wrapper-col="14"
                      :col-num="2"
                      :label-col="7"
                      :col-min-width="380"
                      :config="storeDetailForm.config"
                      v-model:value="storeDetailForm.value"
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
              :z-index="1000"
              v-model:visible="storeDeleteModal.visible"
              ok-text="删除"
              :closable="true"
              title="删除"
              :ok-type="'danger'"
              width="320px"
              height="80px"
              @ok="onStoreDeleteModalOk"
            >
              <div class="ele-wrapper ele-wrapper-deleteUserInputCard">
                <hm-bg-card
                  ref="deleteUserInputCard"
                  padding=""
                  box-shadow-color="#00000000"
                  border-radius=""
                  width="100%"
                  height=""
                  class="ele-deleteUserInputCard"
                >
                  <div class="ele-wrapper ele-wrapper-deleteUserInputText">
                    <hm-ant-icon-text
                      ref="deleteUserInputText"
                      padding="0"
                      color="#CF2323"
                      icon=""
                      width="200px"
                      color-text="#1F1E1E"
                      text="是否要删除?"
                      icon-size="0px"
                      :text-align="'left'"
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
import HmAntBgText from "/@/components/built-in/jeecg/HmAntBgText.vue";
import HmImage from "/@/components/built-in/jeecg/HmImage.vue";
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
    HmAntBgText,
    HmImage,
    HmAntIconText,
    HmAntSwitch,
  },
  data() {
    let self = this;
    return {
      crudPagePanel: {
        padding: "0",
        titleBlockColor: "#1890FF00",
        title: "",
        height: "",
      },
      storeDetailModal: {
        visible: true,
      },
      storeDetailForm: {
        config: {
          address: {
            validator: function (value) {},
            style: {
              width: "50%",
            },
            type: "Span",
            title: "门店地址",
            props: {},
          },
          name: {
            validator: function (value) {},
            style: {
              width: "50%",
            },
            disabled: false,
            type: "Span",
            title: "门店名称",
            required: false,
            props: {},
          },
          urbanArea: {
            validator: function (value) {},
            style: {
              width: "50%",
            },
            type: "Span",
            title: "门店所属区域",
            props: {},
          },
        },
        schema: {},
        value: {
          span: "文字内容",
        },
      },
      storeEditModal: {
        visible: false,
      },
      storeEditForm: {
        config: {
          address: {
            validator: function (value) {},
            style: {
              width: "50%",
            },
            type: "Input",
            title: "门店地址",
            required: true,
            props: {},
          },
          name: {
            validator: function (value) {},
            style: {
              width: "50%",
            },
            disabled: false,
            type: "Input",
            title: "门店名称",
            required: true,
            props: {},
          },
          urbanArea: {
            validator: function (value) {},
            style: {
              width: "50%",
            },
            type: "Input",
            title: "门店所属区域",
            required: true,
            props: {},
          },
        },
        schema: {},
        value: {
          span: "文字内容",
        },
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
        icon: "fa fa-download",
        text: "导出",
        type: "primary",
      },
      storeAddForm: {
        config: {
          address: {
            validator: function (value) {},
            style: {
              width: "50%",
            },
            type: "Select",
            title: "门店地址",
            required: true,
            props: {},
          },
          name: {
            validator: function (value) {},
            style: {
              width: "50%",
            },
            disabled: false,
            type: "Input",
            title: "门店名称",
            required: true,
            props: {},
          },
          urbanArea: {
            validator: function (value) {},
            style: {
              width: "50%",
            },
            type: "Input",
            title: "门店所属区域",
            required: true,
            props: {},
          },
        },
        schema: {},
        value: {
          span: "文字内容",
        },
      },
      storeFilter: {
        schema: {},
        config: {
          search: {
            validator: function (value) {},
            style: {
              width: "80px",
              marginLeft: "10px",
            },
            type: "HmAntButton",
            title: "",
            events: {
              "@click": function (e) {
                searchStore(self, null);
              },
            },
            props: {
              icon: "fa fa-search",
              text: "查询",
              type: "primary",
            },
          },
          name: {
            validator: function (value) {},
            style: {
              width: "25%",
            },
            type: "Input",
            title: "搜索门店",
            props: {
              placeholder: "门店名称",
            },
          },
          reset: {
            validator: function (value) {},
            style: {
              width: "80px",
              marginLeft: "20px",
            },
            type: "HmAntButton",
            title: "",
            events: {
              "@click": function (e) {
                self.$refs.storeFilter.reset();
                searchStore(self, null);
              },
            },
            props: {
              icon: "fa fa-refresh",
              text: "重置",
            },
          },
          status: {
            validator: function (value) {},
            style: {
              width: "25%",
            },
            type: "HmAntSelect",
            title: "启用状态",
            props: {
              title: "",
            },
          },
        },
        value: {
          span: "文字内容",
        },
      },
      storeTable: {
        columns: [
          {
            dataIndex: "name",
            title: "门店名称",
            key: "name",
          },
          {
            dataIndex: "urbanArea",
            title: "门店所属区域",
            key: "urbanArea",
          },
          {
            dataIndex: "address",
            title: "门店地址",
            key: "address",
          },
          {
            customRender: function (data) {
              return h(HmAntSwitch, {
                checked: false,
                title: "",
                onChange: function (e) {},
              });
            },
            dataIndex: "status",
            title: "启用状态",
            key: "status",
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
          column: "createTime",
          databaseId: "",
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
    onStoreAddModalCancel() {
      this.storeAddModal.visible = false;
    },
    onStoreAddModalOk() {
      addStore(this, arguments);
    },
    onStoreEditModalCancel() {
      this.storeEditModal.visible = false;
    },
    onStoreEditModalOk() {
      editStore(this, arguments);
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
  margin: 0 5% 0 5%;
  transform: translateY(-1px);
  /deep/ .upload-class {
    min-width: 0;
  }
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
  /deep/.ant-table-header-column > div {
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

.ele-wrapper-storeDetailModal {
  /deep/ .ant-btn {
    color: #fff !important;
    background: red !important;
  }
}

.ele-wrapper-detailsUserModalCard {
  width: 100%;
}

.ele-wrapper-6a427e0a-e088-4f10-8f90-062dff49940b {
  float: left;
}

.ele-wrapper-9babf229-dc69-4618-aee1-3b697b5baf99 {
  width: 260px;
  margin-left: 90px;
  text-align: center;
  margin-top: 8px;
}

.ele-wrapper-storeDetailForm {
  width: 100%;
  display: none;
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
