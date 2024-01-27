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
              <div class="ele-wrapper ele-wrapper-registrationOrdersFilter">
                <hm-ant-formily
                  ref="registrationOrdersFilter"
                  :config="registrationOrdersFilter.config"
                  v-model:value="registrationOrdersFilter.value"
                  :col-num="5"
                  :col-min-width="380"
                  :schema="registrationOrdersFilter.schema"
                  :label-col="7"
                  :wrapper-col="14"
                  class="ele-registrationOrdersFilter"
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
                  action="/api/restify/registrationOrders/importExcel"
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
                class="ele-wrapper ele-wrapper-acb9ca38-a2dc-4615-8ff9-d19194092922"
              >
                <hm-panel
                  height=""
                  title="报名列表"
                  class="ele-acb9ca38-a2dc-4615-8ff9-d19194092922"
                >
                  <template v-slot:slot-title-icon>
                    <div
                      class="ele-wrapper ele-wrapper-fed9455d-a15f-480a-a6e4-2499063d39a0"
                    >
                      <hm-bg-card
                        width="100%"
                        height=""
                        border-radius=""
                        padding=""
                        box-shadow-color="#00000000"
                        class="ele-fed9455d-a15f-480a-a6e4-2499063d39a0"
                      >
                        <div class="ele-wrapper ele-wrapper-userTotalText">
                          <hm-ant-bg-text
                            ref="userTotalText"
                            text="(用户总数:9999)"
                            class="ele-userTotalText"
                          >
                          </hm-ant-bg-text>
                        </div>
                        <div
                          class="ele-wrapper ele-wrapper-07e77102-a7ca-49f8-ae1e-8e390dcf55a4"
                        >
                          <hm-ant-select value="undefined" :options="[]">
                          </hm-ant-select>
                        </div>
                        <div
                          class="ele-wrapper ele-wrapper-baoMingImportButton"
                        >
                          <hm-ant-button
                            ref="baoMingImportButton"
                            text="导出"
                            :type="'primary'"
                            icon="fa fa-download"
                            @click="onBaoMingImportButtonClick"
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
              <div class="ele-wrapper ele-wrapper-registrationOrdersTable">
                <hm-ant-table
                  ref="registrationOrdersTable"
                  :columns="registrationOrdersTable.columns"
                  :data="registrationOrdersTable.data"
                  :pagination="registrationOrdersTable.pagination"
                  :url="registrationOrdersTable.url"
                  :params="registrationOrdersTable.params"
                  :get-data-map="registrationOrdersTable.getDataMap"
                  :actions="registrationOrdersTable.actions"
                  :is-flat-action="registrationOrdersTable.isFlatAction"
                  :background-color="registrationOrdersTable.backgroundColor"
                  :row-class-name="registrationOrdersTable.rowClassName"
                  class="ele-registrationOrdersTable"
                >
                </hm-ant-table>
              </div>
            </hm-panel>
          </div>
          <div class="ele-wrapper ele-wrapper-registrationOrdersAddModal">
            <hm-modal
              ref="registrationOrdersAddModal"
              title="新增"
              v-model:visible="registrationOrdersAddModal.visible"
              width="810px"
              :z-index="1000"
              height="100%"
              :auto-close="false"
              @ok="onRegistrationOrdersAddModalOk"
              @cancel="onRegistrationOrdersAddModalCancel"
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
                  <div
                    class="ele-wrapper ele-wrapper-registrationOrdersAddForm"
                  >
                    <hm-ant-formily
                      ref="registrationOrdersAddForm"
                      :config="registrationOrdersAddForm.config"
                      v-model:value="registrationOrdersAddForm.value"
                      :col-num="2"
                      :schema="registrationOrdersAddForm.schema"
                      :label-col="7"
                      :wrapper-col="14"
                      class="ele-registrationOrdersAddForm"
                    >
                    </hm-ant-formily>
                  </div>
                </hm-bg-card>
              </div>
            </hm-modal>
          </div>
          <div class="ele-wrapper ele-wrapper-registrationOrdersEditModal">
            <hm-modal
              ref="registrationOrdersEditModal"
              title="编辑"
              v-model:visible="registrationOrdersEditModal.visible"
              width="810px"
              :z-index="1000"
              height="100%"
              :auto-close="false"
              @ok="onRegistrationOrdersEditModalOk"
              @cancel="onRegistrationOrdersEditModalCancel"
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
                  <div
                    class="ele-wrapper ele-wrapper-registrationOrdersEditForm"
                  >
                    <hm-ant-formily
                      ref="registrationOrdersEditForm"
                      :config="registrationOrdersEditForm.config"
                      v-model:value="registrationOrdersEditForm.value"
                      :col-num="2"
                      :schema="registrationOrdersEditForm.schema"
                      :label-col="7"
                      :wrapper-col="14"
                      class="ele-registrationOrdersEditForm"
                    >
                    </hm-ant-formily>
                  </div>
                </hm-bg-card>
              </div>
            </hm-modal>
          </div>
          <div class="ele-wrapper ele-wrapper-registrationOrdersDetailModal">
            <hm-modal
              ref="registrationOrdersDetailModal"
              title="查看详情"
              v-model:visible="registrationOrdersDetailModal.visible"
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
                  <div
                    class="ele-wrapper ele-wrapper-registrationOrdersDetailForm"
                  >
                    <hm-ant-formily
                      ref="registrationOrdersDetailForm"
                      :config="registrationOrdersDetailForm.config"
                      v-model:value="registrationOrdersDetailForm.value"
                      :col-num="2"
                      :schema="registrationOrdersDetailForm.schema"
                      :label-col="7"
                      :wrapper-col="14"
                      class="ele-registrationOrdersDetailForm"
                    >
                    </hm-ant-formily>
                  </div>
                </hm-bg-card>
              </div>
            </hm-modal>
          </div>
          <div class="ele-wrapper ele-wrapper-registrationOrdersDeleteModal">
            <hm-modal
              ref="registrationOrdersDeleteModal"
              title="核销"
              v-model:visible="registrationOrdersDeleteModal.visible"
              :closable="true"
              ok-text="确认"
              :ok-type="'danger'"
              width="320px"
              :z-index="1000"
              height="80px"
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
                      text="是否确认核销?"
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
import HmAntBgText from "/@/components/built-in/jeecg/HmAntBgText.vue";
import HmAntSelect from "/@/components/built-in/jeecg/HmAntSelect.vue";
import HmAntTable from "/@/components/built-in/jeecg/HmAntTable.vue";
import HmModal from "/@/components/built-in/layout/HmModal.vue";
import HmAntIconText from "/@/components/built-in/jeecg/HmAntIconText.vue";

import {
  downloadTemplate,
  exportRegistrationOrders,
  searchRegistrationOrders,
  addRegistrationOrders,
  editRegistrationOrders,
} from "/@/logics/RegistrationOrdersPageGroup";

export default {
  name: "RegistrationOrdersPage",
  components: {
    HmBgCard,
    HmPanel,
    HmAntFormily,
    HmAntButton,
    HmAntUpload,
    HmAntBgText,
    HmAntSelect,
    HmAntTable,
    HmModal,
    HmAntIconText,
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
      registrationOrdersDeleteModal: {
        visible: false,
      },
      registrationOrdersAddModal: {
        visible: false,
      },
      registrationOrdersEditModal: {
        visible: false,
      },
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
      registrationOrdersAddForm: {
        config: {
          code: {
            type: "HmAntSelect",
            title: "编码",
            style: {
              width: "50%",
            },
            props: {
              title: "",
            },
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
      registrationOrdersEditForm: {
        config: {
          code: {
            type: "HmAntSelect",
            title: "编码",
            style: {
              width: "50%",
            },
            props: {
              title: "",
            },
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
      registrationOrdersDetailForm: {
        config: {
          code: {
            type: "Span",
            title: "编码",
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
      registrationOrdersDetailModal: {
        visible: false,
      },
      registrationOrdersFilter: {
        config: {
          userId: {
            type: "Input",
            title: "搜索用户",
            style: {
              width: "50%",
            },
            props: {},
            validator: function (value) {},
          },
          channel: {
            type: "HmAntSelect",
            title: "报名渠道",
            style: {
              width: "50%",
            },
            props: {
              title: "",
              options: [
                {
                  label: "app",
                  value: "app",
                },
                {
                  label: "web",
                  value: "web",
                },
              ],
            },
            validator: function (value) {},
          },
          paymentStatusText: {
            type: "HmAntSelect",
            title: "报名状态",
            style: {
              width: "50%",
            },
            props: {
              title: "",
              options: [
                {
                  label: "已报名",
                  value: 0,
                },
                {
                  label: "未支付",
                  value: 1,
                },
                {
                  label: "已退款",
                  value: 2,
                },
              ],
            },
            validator: function (value) {},
          },
          pickUpStatusText: {
            type: "HmAntSelect",
            title: "核销状态",
            style: {
              width: "50%",
            },
            props: {
              title: "",
              options: [
                {
                  label: "已核销",
                  value: 0,
                },
                {
                  label: "未核销",
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
                searchRegistrationOrders(self, null);
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
                self.$refs.registrationOrdersFilter.reset();
                searchRegistrationOrders(self, null);
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
      registrationOrdersTable: {
        columns: [
          {
            title: "用户ID",
            dataIndex: "code",
            key: "code",
          },
          {
            title: "手机号",
            dataIndex: "phone",
            key: "phone",
          },
          {
            title: "姓名/昵称",
            dataIndex: "realname",
            key: "realname",
          },
          {
            title: "报名渠道",
            dataIndex: "channel",
            key: "channel",
          },
          {
            title: "报名项目",
            dataIndex: "activityId_dictText",
            key: "activityId_dictText",
          },
          {
            title: "报名状态",
            dataIndex: "paymentStatusText",
            key: "paymentStatusText",
          },
          {
            title: "报名付款时间",
            dataIndex: "paymentTime",
            key: "paymentTime",
          },
          {
            title: "核销状态",
            dataIndex: "pickUpStatusText",
            key: "pickUpStatusText",
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
        url: "/api/dkn/viewRegistrationOrders/list",
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
            name: "核销",
            callback: function (item) {
              self.registrationOrdersDeleteModal.visible = true;
              self.currentRegistrationOrdersId = item.id;
            },
            type: "link",
          },
        ],
        isFlatAction: true,
        backgroundColor: "#FFFFFF",
        rowClassName: {},
      },
      "07e77102-a7ca-49f8-ae1e-8e390dcf55a4": {
        value: null,
        options: [],
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
      console.log("this.registrationOrdersAddForm.config");
      console.log("this.registrationOrdersEditForm.config");
      console.log("this.registrationOrdersDetailForm.config");

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

    onAddButtonClick() {
      this.registrationOrdersAddModal.visible = true;
    },
    onDownloadTemplateButtonClick() {
      downloadTemplate(this, arguments);
    },
    onExportButtonClick() {
      exportRegistrationOrders(this, arguments);
    },
    onBaoMingImportButtonClick() {
      exportRegistrationOrders(this, arguments);
    },
    onInvisibleImportSearchLogicBtnClick() {
      searchRegistrationOrders(this, arguments);
    },
    onRegistrationOrdersAddModalOk() {
      addRegistrationOrders(this, arguments);
    },
    onRegistrationOrdersAddModalCancel() {
      this.registrationOrdersAddModal.visible = false;
    },
    onRegistrationOrdersEditModalOk() {
      editRegistrationOrders(this, arguments);
    },
    onRegistrationOrdersEditModalCancel() {
      this.registrationOrdersEditModal.visible = false;
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

.ele-wrapper-registrationOrdersFilter {
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

.ele-wrapper-acb9ca38-a2dc-4615-8ff9-d19194092922 {
  width: 100%;
}

.ele-wrapper-fed9455d-a15f-480a-a6e4-2499063d39a0 {
  width: 100%;
}

.ele-wrapper-userTotalText {
  margin-right: 1000px;
}

.ele-wrapper-invisibleImportSearchLogicBtn {
  display: none;
}

.ele-wrapper-registrationOrdersTable {
  .table-div /deep/ .ant-table-thead > tr > th {
    background: #fafafa;
  }
  width: 98%;
  margin-left: 1%;
}

.ele-wrapper-addUserModalCard {
  width: 100%;
}

.ele-wrapper-registrationOrdersAddForm {
  width: 100%;
}

.ele-wrapper-newUserModalCard {
  width: 100%;
}

.ele-wrapper-registrationOrdersEditForm {
  width: 100%;
}

.ele-wrapper-detailsUserModalCard {
  width: 100%;
}

.ele-wrapper-registrationOrdersDetailForm {
  width: 100%;
}

.ele-wrapper-deleteUserInputCard {
  width: 100%;
}

.ele-wrapper-deleteUserInputText {
  width: 60%;
}
</style>
