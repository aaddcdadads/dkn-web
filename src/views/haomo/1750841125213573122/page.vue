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
              <div class="ele-wrapper ele-wrapper-viewRegistrationOrdersFilter">
                <hm-ant-formily
                  ref="viewRegistrationOrdersFilter"
                  :config="viewRegistrationOrdersFilter.config"
                  v-model:value="viewRegistrationOrdersFilter.value"
                  :col-num="4"
                  :col-min-width="380"
                  :schema="viewRegistrationOrdersFilter.schema"
                  :label-col="7"
                  :wrapper-col="14"
                  class="ele-viewRegistrationOrdersFilter"
                >
                </hm-ant-formily>
              </div>
              <div class="ele-wrapper ele-wrapper-addButton">
                <hm-ant-button
                  ref="addButton"
                  text="添加"
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
                  action="/api/restify/viewRegistrationOrders/importExcel"
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
                  :visible="exportButton.visible"
                  @click="onExportButtonClick"
                  class="ele-exportButton"
                >
                </hm-ant-button>
              </div>
              <div class="ele-wrapper ele-wrapper-activitySelect">
                <hm-ant-select
                  ref="activitySelect"
                  v-model:value="activitySelect.value"
                  url="/api/restify/activity/list"
                  :params="activitySelect.params"
                  :data-map="activitySelect.dataMap"
                  title="选择活动"
                  placeholder="选择活动"
                  v-model:options="activitySelect.options"
                  :show-search="true"
                  @change="onActivitySelectChange"
                  class="ele-activitySelect"
                >
                </hm-ant-select>
              </div>
              <div class="ele-wrapper ele-wrapper-batchRefund">
                <hm-ant-button
                  ref="batchRefund"
                  :text="batchRefund.text"
                  :type="batchRefund.type"
                  :disabled="batchRefund.disabled"
                  @click="onBatchRefundClick"
                  class="ele-batchRefund"
                >
                </hm-ant-button>
              </div>
              <div
                class="ele-wrapper ele-wrapper-aa116123-614b-40e3-8592-157582614f2d"
              >
                <hm-ant-button
                  text="导出"
                  :type="'primary'"
                  icon="fa fa-download"
                  :visible="false"
                  class="ele-aa116123-614b-40e3-8592-157582614f2d"
                >
                </hm-ant-button>
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
              <div class="ele-wrapper ele-wrapper-viewRegistrationOrdersTable">
                <hm-ant-table
                  ref="viewRegistrationOrdersTable"
                  :columns="viewRegistrationOrdersTable.columns"
                  :data="viewRegistrationOrdersTable.data"
                  :pagination="viewRegistrationOrdersTable.pagination"
                  :url="viewRegistrationOrdersTable.url"
                  :params="viewRegistrationOrdersTable.params"
                  :get-data-map="viewRegistrationOrdersTable.getDataMap"
                  :row-select-flag="viewRegistrationOrdersTable.rowSelectFlag"
                  :actions="viewRegistrationOrdersTable.actions"
                  :is-flat-action="viewRegistrationOrdersTable.isFlatAction"
                  :background-color="
                    viewRegistrationOrdersTable.backgroundColor
                  "
                  :row-class-name="viewRegistrationOrdersTable.rowClassName"
                  @onSelectChange="onViewRegistrationOrdersTableOnSelectChange"
                  @onSelect="onViewRegistrationOrdersTableOnSelect"
                  class="ele-viewRegistrationOrdersTable"
                >
                </hm-ant-table>
              </div>
            </hm-panel>
          </div>
          <div class="ele-wrapper ele-wrapper-viewRegistrationOrdersAddModal">
            <hm-modal
              ref="viewRegistrationOrdersAddModal"
              title="新增"
              v-model:visible="viewRegistrationOrdersAddModal.visible"
              width="810px"
              :z-index="1000"
              height="100%"
              :auto-close="false"
              @ok="onViewRegistrationOrdersAddModalOk"
              @cancel="onViewRegistrationOrdersAddModalCancel"
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
                    class="ele-wrapper ele-wrapper-viewRegistrationOrdersAddForm"
                  >
                    <hm-ant-formily
                      ref="viewRegistrationOrdersAddForm"
                      :config="viewRegistrationOrdersAddForm.config"
                      v-model:value="viewRegistrationOrdersAddForm.value"
                      :col-num="2"
                      :schema="viewRegistrationOrdersAddForm.schema"
                      :label-col="7"
                      :wrapper-col="14"
                      class="ele-viewRegistrationOrdersAddForm"
                    >
                    </hm-ant-formily>
                  </div>
                </hm-bg-card>
              </div>
            </hm-modal>
          </div>
          <div class="ele-wrapper ele-wrapper-viewRegistrationOrdersEditModal">
            <hm-modal
              ref="viewRegistrationOrdersEditModal"
              title="编辑"
              v-model:visible="viewRegistrationOrdersEditModal.visible"
              width="810px"
              :z-index="1000"
              height="100%"
              :auto-close="false"
              @ok="onViewRegistrationOrdersEditModalOk"
              @cancel="onViewRegistrationOrdersEditModalCancel"
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
                    class="ele-wrapper ele-wrapper-viewRegistrationOrdersEditForm"
                  >
                    <hm-ant-formily
                      ref="viewRegistrationOrdersEditForm"
                      :config="viewRegistrationOrdersEditForm.config"
                      v-model:value="viewRegistrationOrdersEditForm.value"
                      :col-num="2"
                      :schema="viewRegistrationOrdersEditForm.schema"
                      :label-col="7"
                      :wrapper-col="14"
                      class="ele-viewRegistrationOrdersEditForm"
                    >
                    </hm-ant-formily>
                  </div>
                </hm-bg-card>
              </div>
            </hm-modal>
          </div>
          <div
            class="ele-wrapper ele-wrapper-viewRegistrationOrdersDetailModal"
          >
            <hm-modal
              ref="viewRegistrationOrdersDetailModal"
              title="查看详情"
              v-model:visible="viewRegistrationOrdersDetailModal.visible"
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
                    class="ele-wrapper ele-wrapper-viewRegistrationOrdersDetailForm"
                  >
                    <hm-ant-formily
                      ref="viewRegistrationOrdersDetailForm"
                      :config="viewRegistrationOrdersDetailForm.config"
                      v-model:value="viewRegistrationOrdersDetailForm.value"
                      :col-num="2"
                      :schema="viewRegistrationOrdersDetailForm.schema"
                      :label-col="7"
                      :wrapper-col="14"
                      class="ele-viewRegistrationOrdersDetailForm"
                    >
                    </hm-ant-formily>
                  </div>
                </hm-bg-card>
              </div>
            </hm-modal>
          </div>
          <div
            class="ele-wrapper ele-wrapper-viewRegistrationOrdersDeleteModal"
          >
            <hm-modal
              ref="viewRegistrationOrdersDeleteModal"
              title="退款"
              v-model:visible="viewRegistrationOrdersDeleteModal.visible"
              :closable="true"
              :ok-type="'danger'"
              width="320px"
              :z-index="1000"
              height="80px"
              @ok="onViewRegistrationOrdersDeleteModalOk"
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
                      text="是否需要退款?"
                      icon=""
                      width="200px"
                      icon-size="0px"
                      color="#CF2323"
                      color-text="#CF2323"
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
          <div class="ele-wrapper ele-wrapper-batchRefundModal">
            <hm-modal
              ref="batchRefundModal"
              title="批量退款"
              v-model:visible="batchRefundModal.visible"
              :closable="true"
              :ok-type="'danger'"
              width="320px"
              :z-index="1000"
              height="80px"
              @ok="onBatchRefundModalOk"
            >
              <div
                class="ele-wrapper ele-wrapper-065940be-5461-4e36-aed7-161a8e6a8126"
              >
                <hm-bg-card
                  width="100%"
                  height=""
                  border-radius=""
                  padding=""
                  box-shadow-color="#00000000"
                  class="ele-065940be-5461-4e36-aed7-161a8e6a8126"
                >
                  <div
                    class="ele-wrapper ele-wrapper-2e951bad-fbd8-4287-ac2f-30edb85629ca"
                  >
                    <hm-ant-icon-text
                      text="是否需要批量退款?"
                      icon=""
                      width="200px"
                      icon-size="0px"
                      color="#CF2323"
                      color-text="#CF2323"
                      :text-align="'left'"
                      padding="0"
                      icon-padding="0"
                      class="ele-2e951bad-fbd8-4287-ac2f-30edb85629ca"
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
import HmAntSelect from "/@/components/built-in/jeecg/HmAntSelect.vue";
import HmAntTable from "/@/components/built-in/jeecg/HmAntTable.vue";
import HmModal from "/@/components/built-in/layout/HmModal.vue";
import HmAntIconText from "/@/components/built-in/jeecg/HmAntIconText.vue";

import {
  downloadTemplate,
  exportViewRegistrationOrders,
  searchViewRegistrationOrders,
  addViewRegistrationOrders,
  editViewRegistrationOrders,
  orderRefund,
  ordersBatchRefund,
} from "/@/logics/OrderListGroup";

export default {
  name: "OrderList",
  components: {
    HmBgCard,
    HmPanel,
    HmAntFormily,
    HmAntButton,
    HmAntUpload,
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
      activitySelect: {
        value: "",
        params: {
          pageNo: 1,
          pageSize: -1,
        },
        dataMap: {
          label: "name",
          value: "id",
        },
        options: [],
      },
      viewRegistrationOrdersDeleteModal: {
        visible: false,
      },
      viewRegistrationOrdersDetailForm: {
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
          activityId: {
            type: "Span",
            title: "报名活动",
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
      viewRegistrationOrdersAddModal: {
        visible: false,
      },
      batchRefundModal: {
        visible: false,
      },
      onSelectList: {},
      batchRefund: {
        disabled: true,
        text: "批量退款",
        type: "primary",
        icon: "",
      },
      viewRegistrationOrdersEditModal: {
        visible: false,
      },
      importButton: {
        visible: false,
        headers: null,
        fileList: [],
      },
      exportButton: {
        visible: true,
        text: "导出数据",
        type: "primary",
        icon: "",
      },
      viewRegistrationOrdersAddForm: {
        config: {
          code: {
            type: "Input",
            title: "编码",
            style: {
              width: "50%",
            },
            props: {},
            validator: function (value) {},
            required: false,
            disabled: false,
          },
          activityId: {
            type: "Input",
            title: "报名活动",
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
      viewRegistrationOrdersEditForm: {
        config: {
          code: {
            type: "Input",
            title: "编码",
            style: {
              width: "50%",
            },
            props: {},
            validator: function (value) {},
            required: false,
            disabled: false,
          },
          activityId: {
            type: "Input",
            title: "报名活动",
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
      viewRegistrationOrdersTable: {
        params: {
          databaseId: "",
          column: "createTime",
          order: "desc",
        },
        columns: [
          {
            title: "订单编号",
            dataIndex: "code",
            key: "code",
            fixed: "left",
            width: 150,
          },
          {
            title: "手机号",
            dataIndex: "phone",
            key: "phone",
            width: 100,
          },
          {
            title: "姓名/昵称",
            dataIndex: "name",
            key: "name",
            width: 100,
          },
          {
            title: "活动id",
            dataIndex: "acCode",
            key: "acCode",
            width: 100,
          },
          {
            title: "报名项目",
            dataIndex: "acName",
            key: "acName",
            width: 100,
          },
          {
            title: "订单金额",
            dataIndex: "money",
            key: "money",
            customRender: function (data) {
              let money = data.record.money ? data.record.money : 0;
              return `￥${money}`;
            },
            width: 50,
          },
          {
            title: "报名渠道",
            dataIndex: "channel",
            key: "channel",
            width: 100,
          },
          {
            title: "支付状态",
            dataIndex: "paymentStatusText",
            key: "paymentStatusText",
            width: 100,
          },
          {
            title: "支付渠道",
            dataIndex: "paymentChannel",
            key: "paymentChannel",
            customRender: function (data) {
              return data.text ? (data.text == "0" ? "微信" : "支付宝") : "";
            },
            width: 100,
          },
          {
            title: "创建时间",
            dataIndex: "createTime",
            key: "createTime",
            width: 180,
          },
          {
            title: "核销状态",
            dataIndex: "writeStatusGroups",
            key: "writeStatusGroups",
            customRender: function (data) {
              console.log("核销状态===", data);
              return self.processingData(data.text);
            },
            width: 120,
          },
          {
            title: "核销时间",
            dataIndex: "writeTimeGroups",
            key: "writeTimeGroups",
            customRender: function (data) {
              console.log("核销时间===", data);
              return self.processingData(data.text);
            },
            width: 360,
          },
          {
            title: "原核销门店",
            dataIndex: "originalPickUpName",
            key: "originalPickUpName",
            width: 120,
          },
          {
            title: "实际核销门店",
            dataIndex: "storeNames",
            key: "storeNames",
            width: 180,
            customRender: function (data) {
              console.log("ss实际核销门店s", data.text);
              if (!data.text) {
                return self.processingColorData(data.text, "#fe8989");
              }
              let names = data.text.split(",");
              if (
                names.some((item) => item !== data.record.originalPickUpName)
              ) {
                return self.processingColorData(data.text, "#fe8989");
              }
              return self.processingColorData(data.text);
            },
          },
          {
            slots: {
              customRender: "action",
            },
            width: 100,
            title: "操作",
            key: "action",
            fixed: "right",
            customRender: function (item) {
              return h(
                "div",
                {
                  style: {
                    width: 200,
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "left",
                    alignItems: "left",
                  },
                },
                [
                  h(HmAntButton, {
                    disabled:
                      item.record.pickUpStatus == 0 ||
                      item.record.paymentStatus == 1 ||
                      item.record.paymentStatus == 2 ||
                      !item.record.money
                        ? true
                        : false,
                    text: "退款",
                    fontSize: 14,
                    type: "link",
                    icon: "",
                    onClick: function () {
                      if (item.record.paymentStatus === 0) {
                        self.registrationOrder = item.record;
                        self.registrationOrderId = item.record.id;
                        self.viewRegistrationOrdersDeleteModal.visible = true;
                      } else {
                        self.$message.error("已退款、待支付状态下不可退款");
                      }
                    },
                  }),
                ]
              );
            },
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
        getDataMap: {
          total: "",
          list: "",
        },
        rowSelectFlag: true,
        actions: [
          {
            name: "退款",
            callback: function (item) {
              self.registrationOrder = item;
              self.registrationOrderId = item.id;
              self.viewRegistrationOrdersDeleteModal.visible = true;

              /*self.$nextTick(function() {
        self.viewRegistrationOrdersDetailForm.value = item;
      });*/
            },
            type: "link",
          },
        ],
        isFlatAction: true,
        backgroundColor: "#FFFFFF",
        rowClassName: {},
      },
      viewRegistrationOrdersDetailModal: {
        visible: false,
      },
      viewRegistrationOrdersFilter: {
        config: {
          code: {
            type: "Input",
            title: "搜索用户",
            style: {
              width: "50%",
            },
            props: {
              width: "242px",
              placeholder: "订单编号/手机号/姓名/昵称",
            },
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
              width: "242px",
              showSearch: true,
              url: "/api/sys/dict/getDictItems/channel",
            },
            validator: function (value) {},
          },
          paymentStatus: {
            type: "HmAntSelect",
            title: "支付状态",
            style: {
              width: "50%",
            },
            props: {
              width: "242px",
              title: "",
              options: [
                {
                  label: "已报名",
                  value: 0,
                },
                {
                  label: "待支付",
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
          writeStatusGroups: {
            type: "HmAntSelect",
            title: "核销状态",
            style: {
              width: "50%",
            },
            props: {
              width: "242px",
              title: "",
              options: [
                {
                  label: "已核销",
                  value: "已核销",
                },
                {
                  label: "待核销",
                  value: "待核销",
                },
              ],
            },
            validator: function (value) {},
          },
          originalPickUpName: {
            type: "HmAntSelect",
            title: "原核销门店",
            style: {
              width: "50%",
            },
            props: {
              width: "242px",
              dataMap: {
                label: "name",
                value: "name",
              },
              title: "",
              params: {
                pageNo: 1,
                pageSize: -1,
              },
              showSearch: true,
              url: "/api/restify/store/list",
            },
            validator: function (value) {},
          },
          storeNames: {
            type: "HmAntSelect",
            title: "实际核销门店",
            style: {
              width: "50%",
            },
            props: {
              width: "242px",
              dataMap: {
                label: "name",
                value: "name",
              },
              title: "",
              params: {
                pageNo: 1,
                pageSize: -1,
              },
              showSearch: true,
              url: "/api/restify/store/list",
            },
            validator: function (value) {},
          },
          storeDifferences: {
            type: "HmAntSelect",
            title: "核销门店差异",
            style: {
              width: "50%",
            },
            props: {
              placeholder: "有/无",
              width: "242px",
              title: "",
              options: [
                {
                  label: "有",
                  value: "有",
                },
                {
                  label: "无",
                  value: "无",
                },
              ],
            },
            validator: function (value) {},
          },
          activityId: {
            type: "HmAntSelect",
            title: "选择活动",
            style: {
              width: "50%",
            },
            props: {
              width: "242px",
              dataMap: {
                label: "nameAndId",
                value: "id",
              },
              title: "",
              params: {
                pageNo: 1,
                pageSize: -1,
              },
              showSearch: true,
              url: "/api/dkn/activity/list",
            },
            events: {},
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
                searchViewRegistrationOrders(self, null);
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
                self.activitySelect.value = "";
                self.selectActivityId = "";
                self.$refs.viewRegistrationOrdersFilter.reset();
                searchViewRegistrationOrders(self, null);
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
    };
  },
  watch: {},
  created(e) {
    this.onCreated(e);
  },
  mounted(e) {
    this.onMounted(e);
  },
  methods: {
    onCreated() {
      this.processingData = function (strs, color) {
        if (!strs) {
          return "";
        }
        console.log("strs--", strs);
        let strArr = strs.split(",");
        let strNumberArr = ["一", "二", "三"];
        let hArr = [];
        for (let i = 0; i < strArr.length; i++) {
          hArr.push(h("div", {}, "第" + strNumberArr[i] + "轮:" + strArr[i]));
        }

        return h(
          "div",
          {
            class: "applyNoDiv",
            style: {
              backgroundColor: color,
            },
          },
          hArr
        );
      };
      //颜色
      this.processingColorData = function (strs, color) {
        if (!strs) {
          return "";
        }
        console.log("strs--", strs);
        let strArr = strs.split(",");
        let strNumberArr = ["一", "二", "三"];
        let hArr = [];
        for (let i = 0; i < strArr.length; i++) {
          hArr.push(
            h(
              "div",
              { style: { backgroundColor: color } },
              "第" + strNumberArr[i] + "轮:" + strArr[i]
            )
          );
        }
        return h(
          "div",
          {
            class: "applyNoDiv",
            style: {
              height: "100%",
              //display: "flex",
              //alignItems: "center",
              paddingLeft: "16px",
              marginLeft: "-16px",
              backgroundColor: color,
            },
          },
          hArr
        );
      };
    },
    onMounted() {
      console.log("this.importButton.visible");
      console.log("this.exportButton.visible");
      console.log("this.crudPagePanel.title");
      console.log("this.viewRegistrationOrdersAddForm.config");
      console.log("this.viewRegistrationOrdersEditForm.config");
      console.log("this.viewRegistrationOrdersDetailForm.config");
      this.viewRegistrationOrdersTable.params;
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
      this.viewRegistrationOrdersAddModal.visible = true;
    },
    onDownloadTemplateButtonClick() {
      downloadTemplate(this, arguments);
    },
    onExportButtonClick() {
      exportViewRegistrationOrders(this, arguments);
    },
    onActivitySelectChange(item) {
      console.log("sss--", item);
      this.selectActivityId = item ?? "";
      searchViewRegistrationOrders(this, null);
    },
    onBatchRefundClick() {
      this.batchRefundModal.visible = true;
    },
    onInvisibleImportSearchLogicBtnClick() {
      searchViewRegistrationOrders(this, arguments);
    },
    onViewRegistrationOrdersTableOnSelectChange(data, index) {
      console.log("onSelectChange", data, index);
      //保存选中数据

      this.onSelectList = data.selectedRows.filter(
        (item) =>
          !(
            item.pickUpStatus == 0 ||
            item.paymentStatus == 1 ||
            item.paymentStatus == 2 ||
            !item.money
          )
      );

      if (this.onSelectList.length > 0) {
        this.batchRefund.disabled = false;
      } else {
        this.batchRefund.disabled = true;
      }
    },
    onViewRegistrationOrdersTableOnSelect(data, index) {
      console.log("onSelect", data, index);
    },
    onViewRegistrationOrdersAddModalOk() {
      addViewRegistrationOrders(this, arguments);
    },
    onViewRegistrationOrdersAddModalCancel() {
      this.viewRegistrationOrdersAddModal.visible = false;
    },
    onViewRegistrationOrdersEditModalOk() {
      editViewRegistrationOrders(this, arguments);
    },
    onViewRegistrationOrdersEditModalCancel() {
      this.viewRegistrationOrdersEditModal.visible = false;
    },
    onViewRegistrationOrdersDeleteModalOk() {
      orderRefund(this, arguments);
    },
    onBatchRefundModalOk() {
      ordersBatchRefund(this, arguments);
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

.ele-wrapper-viewRegistrationOrdersFilter {
  width: 98%;
  margin: 1%;
  margin-bottom: 0;
}

.ele-wrapper-addButton {
  margin: 0 3% 0 1%;
  display: none;
}

.ele-wrapper-importButton {
  margin: 0 3% 0 1%;
  transform: translateY(-1px);
  /deep/ .upload-class {
    min-width: 0;
  }
  display: none;
}

.ele-wrapper-downloadTemplateButton {
  margin: 0 3% 0 1%;
  display: none;
}

.ele-wrapper-exportButton {
  margin: 0 1% 0 0;
  float: right;
}

.ele-wrapper-activitySelect {
  margin: 0 1% 0 1%;
  display: none;
}

.ele-wrapper-batchRefund {
  margin: 0 1% 0 0;
  float: right;
}

.ele-wrapper-aa116123-614b-40e3-8592-157582614f2d {
  margin: 0 0 0 1%;
}

.ele-wrapper-invisibleImportSearchLogicBtn {
  display: none;
}

.ele-wrapper-viewRegistrationOrdersTable {
  .table-div /deep/ .ant-table-thead > tr > th {
    background: #fafafa;
  }
  /deep/.ant-table-header-column > div {
    background-color: transparent !important;
  }
  /deep/.ant-table-row-cell-break-word > div {
    background-color: transparent;
  }
  width: 98%;
  margin-left: 1%;
}

.ele-wrapper-addUserModalCard {
  width: 100%;
}

.ele-wrapper-viewRegistrationOrdersAddForm {
  width: 100%;
}

.ele-wrapper-newUserModalCard {
  width: 100%;
}

.ele-wrapper-viewRegistrationOrdersEditForm {
  width: 100%;
}

.ele-wrapper-detailsUserModalCard {
  width: 100%;
}

.ele-wrapper-viewRegistrationOrdersDetailForm {
  width: 100%;
}

.ele-wrapper-deleteUserInputCard {
  width: 100%;
}

.ele-wrapper-deleteUserInputText {
  width: 60%;
}

.ele-wrapper-065940be-5461-4e36-aed7-161a8e6a8126 {
  width: 100%;
}

.ele-wrapper-2e951bad-fbd8-4287-ac2f-30edb85629ca {
  width: 60%;
}
</style>
