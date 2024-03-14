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
                  :col-num="4"
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
                    <div class="ele-wrapper ele-wrapper-numberUsers">
                      <hm-bg-card
                        ref="numberUsers"
                        width="100%"
                        height="30px"
                        border-radius=""
                        padding=""
                        box-shadow-color="#00000000"
                        class="ele-numberUsers"
                      >
                        <div class="ele-wrapper ele-wrapper-userTotalText">
                          <hm-ant-bg-text
                            ref="userTotalText"
                            :text="userTotalText.text"
                            class="ele-userTotalText"
                          >
                          </hm-ant-bg-text>
                        </div>
                        <div
                          class="ele-wrapper ele-wrapper-bacthHeImportButton"
                        >
                          <hm-ant-button
                            ref="bacthHeImportButton"
                            :text="bacthHeImportButton.text"
                            :type="bacthHeImportButton.type"
                            :disabled="bacthHeImportButton.disabled"
                            @click="onBacthHeImportButtonClick"
                            class="ele-bacthHeImportButton"
                          >
                          </hm-ant-button>
                        </div>
                        <div class="ele-wrapper ele-wrapper-activitySelect">
                          <hm-ant-select
                            ref="activitySelect"
                            v-model:value="activitySelect.value"
                            url="/api/dkn/activity/list"
                            :params="activitySelect.params"
                            :data-map="activitySelect.dataMap"
                            title="  "
                            placeholder="选择活动"
                            v-model:options="activitySelect.options"
                            @change="onActivitySelectChange"
                            class="ele-activitySelect"
                          >
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
                            class="ele-baoMingImportButton"
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
                  :row-select-flag="registrationOrdersTable.rowSelectFlag"
                  :row-selection="registrationOrdersTable.rowSelection"
                  :actions="registrationOrdersTable.actions"
                  :is-flat-action="registrationOrdersTable.isFlatAction"
                  :background-color="registrationOrdersTable.backgroundColor"
                  :row-class-name="registrationOrdersTable.rowClassName"
                  @onSelectChange="onRegistrationOrdersTableOnSelectChange"
                  class="ele-registrationOrdersTable"
                >
                </hm-ant-table>
              </div>
              <div
                class="ele-wrapper ele-wrapper-0a6fba8b-c43b-4691-ad02-a62dba586095"
              >
                <hm-bg-card
                  width="100%"
                  height=""
                  class="ele-0a6fba8b-c43b-4691-ad02-a62dba586095"
                >
                  <div class="ele-wrapper ele-wrapper-quanXuanBox">
                    <hm-ant-checkbox
                      ref="quanXuanBox"
                      title=""
                      v-model:ccheckbox-list="quanXuanBox.ccheckboxList"
                      @onChange="onQuanXuanBoxOnChange"
                      class="ele-quanXuanBox"
                    >
                    </hm-ant-checkbox>
                  </div>
                  <div class="ele-wrapper ele-wrapper-actionSelect">
                    <hm-ant-select
                      ref="actionSelect"
                      v-model:value="actionSelect.value"
                      title="   "
                      placeholder="批量操作"
                      v-model:options="actionSelect.options"
                      @change="onActionSelectChange"
                      class="ele-actionSelect"
                    >
                    </hm-ant-select>
                  </div>
                  <div class="ele-wrapper ele-wrapper-actionQueRenBuntton">
                    <hm-ant-button
                      ref="actionQueRenBuntton"
                      text="确认"
                      @click="onActionQueRenBunttonClick"
                      class="ele-actionQueRenBuntton"
                    >
                    </hm-ant-button>
                  </div>
                </hm-bg-card>
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
              @ok="onRegistrationOrdersDeleteModalOk"
              @cancel="onRegistrationOrdersDeleteModalCancel"
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
import HmAntCheckbox from "/@/components/built-in/jeecg/HmAntCheckbox.vue";
import HmModal from "/@/components/built-in/layout/HmModal.vue";
import HmAntIconText from "/@/components/built-in/jeecg/HmAntIconText.vue";

import {
  downloadTemplate,
  exportRegistrationOrders,
  searchRegistrationOrders,
  addRegistrationOrders,
  editRegistrationOrders,
  startOrdersHeXiao,
} from "/@/logics/RegistrationOrdersPageGroup";

export default {
  name: "ListParticipantspage",
  components: {
    HmBgCard,
    HmPanel,
    HmAntFormily,
    HmAntButton,
    HmAntUpload,
    HmAntBgText,
    HmAntSelect,
    HmAntTable,
    HmAntCheckbox,
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
      registrationOrdersTable: {
        params: {
          databaseId: "",
          column: "createTime",
          order: "desc",
          pageNo: 1,
          pageSize: 10,
        },
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
            dataIndex: "orderName",
            key: "orderName",
          },
          {
            title: "报名渠道",
            dataIndex: "channel",
            key: "channel",
          },
          {
            title: "报名项目",
            dataIndex: "projectName",
            key: "projectName",
          },
          {
            title: "报名付款时间",
            dataIndex: "paymentTime",
            key: "paymentTime",
          },
        ],
        rowSelection: {},
        data: [{}],
        pagination: {
          current: 1,
          pageSizeOptions: ["10", "20", "30", "40"],
          pageSize: 10,
          showSizeChanger: true,
        },
        url: "/api/dkn/viewOrderProject/list",
        getDataMap: {
          total: "",
          list: "",
        },
        rowSelectFlag: true,
        actions: [
          {
            name: "核销",
            callback: function (item) {
              // if(item.paymentStatus===0){
              //	self.registrationOrdersDeleteModal.visible=true;
              // self.hexiaotype=true;
              //self.hexiaoItem ={
              //  orderId:item.id,
              //  activityId:item.activityId,
              // storeId:item.storeId,
              // pickUpStatus:0,
              //   pickUpTime:self.$moment().format('YYYY-MM-DD HH:mm:ss')
              // };
              //}else{
              // self.$message.error("已退款、待支付状态下不可核销");
              // }
            },
            type: "link",
          },
        ],
        isFlatAction: true,
        backgroundColor: "#FFFFFF",
        rowClassName: {},
      },
      selectTempArr: {},
      bacthHeImportButton: {
        disabled: true,
        text: "批量核销",
        type: "primary",
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
      userTotalText: {
        text: "(用户总数:0)",
      },
      registrationOrdersFilter: {
        value: {
          span: "文字内容",
        },
        config: {
          code: {
            type: "Input",
            title: "搜索用户",
            style: {
              width: "50%",
            },
            props: {
              placeholder: "手机号/姓名/昵称",
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
              dataMap: {
                label: "itemText",
                value: "itemValue",
              },
              url: "/api/dkn/viewActivityDictItem/list",
            },
            validator: function (value) {},
          },
          alias: {
            type: "Input",
            title: "组别名",
            style: {
              width: "50%",
            },
            props: {
              title: "",
              width: "242px",
              options: [
                {
                  label: "已核销",
                  value: 0,
                },
                {
                  label: "待核销",
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
        schema: {},
      },
      registrationOrdersDetailModal: {
        visible: false,
      },
      activitySelect: {
        value: null,
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
      quanXuanBox: {
        ccheckboxList: [
          {
            key: "1",
            checked: false,
            value: "全选",
          },
        ],
      },
      actionSelect: {
        value: null,
        options: [
          {
            label: "导出",
            value: 0,
          },
          {
            label: "核销",
            value: 1,
          },
        ],
      },
    };
  },
  watch: {},
  async created(e) {
    this.onCreated(e);
  },
  mounted(e) {
    this.onMounted(e);
  },
  methods: {
    onCreated() {
      if (this.$route.query.activityId) {
        this.registrationOrdersTable.params.activityId = this.$route.query.activityId;
        this.activityId = this.$route.query.activityId;
      }
      let self = this;
      self.setColumns = async function () {
        if (!self.activityId) {
          self.$message.error("获取活动失败");
          return;
        }
        let url = "/api/dkn/viewActivityDictItem/list";
        let params = {
          activityId: self.activityId,
          type: 1,
        };
        const res = await self.$getAction(url, params);
        if (res.result.records.length > 0) {
          let columns = res.result.records.map((e) => {
            return {
              title: `拓展字段(${e.itemText})`,
              dataIndex: `${e.itemValue}_dict`,
              key: `${e.itemValue}_dict`,
            };
          });
          console.log("columns", columns);
          let par = {
            title: "组别名",
            dataIndex: "code",
            key: "code",
          };
          self.registrationOrdersTable.columns = [
            par,
            ...columns,
            ...self.registrationOrdersTable.columns,
          ];
        }
      };
      self.setColumns();
    },
    onMounted() {
      console.log("this.importButton.visible");
      console.log("this.exportButton.visible");
      console.log("this.crudPagePanel.title");
      console.log("this.registrationOrdersAddForm.config");
      console.log("this.registrationOrdersEditForm.config");
      console.log(
        "this.registrationOrdersDetailForm.config",
        "this.userTotalText.text",
        "this.registrationOrdersTable.rowSelection"
      );

      //设置上传请求头
      this.$nextTick(() => {
        let token = localStorage.getItem("pro__Access-Token");
        if (token) {
          this.importButton.headers = {
            "X-Access-Token": token,
          };
        }
      });
      if (this.$route.query.activityId) {
        this.registrationOrdersFilter.value.activityId = this.$route.query.activityId;
      }
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
    onBacthHeImportButtonClick() {
      //批量核销核销
      this.hexiaotype = false;
      this.registrationOrdersDeleteModal.visible = true;
    },
    onActivitySelectChange(item) {
      this.activityId = item;
      this.registrationOrdersTable.params = {
        activityId: item,
      };
    },
    onBaoMingImportButtonClick() {
      exportRegistrationOrders(this, arguments);
    },
    onInvisibleImportSearchLogicBtnClick() {
      searchRegistrationOrders(this, arguments);
    },
    onRegistrationOrdersTableOnSelectChange(item) {
      console.log("onSelectChange----", item);
      //this.selectTempArr = item.selectedRowKeys.length > 0 ? item.selectedRowKeys.toString() : null;
      this.selectTempArr = item.selectedRows;

      if (this.selectTempArr.length > 0) {
        var currentTimepick = this.$moment();
        var flag = false;
        this.selectTempArr.forEach((e) => {
          var startTimepick = this.$moment(
            e.pickUpStartTime,
            "YYYY-MM-DD HH:mm:ss"
          );
          var endTimepick = this.$moment(
            e.pickUpEndTime,
            "YYYY-MM-DD HH:mm:ss"
          );
          if (!currentTimepick.isBetween(startTimepick, endTimepick)) {
            this.$message.error("超过核销截止时间了不可核销");
            this.bacthHeImportButton.disabled = true;
            flag = true;
            return;
          }
          if (e.pickUpStatusText == "已核销") {
            this.$message.error("数据已核销");
            this.bacthHeImportButton.disabled = true;
            flag = true;
            return;
          }
          if (e.paymentStatus !== 0) {
            this.$message.error("数据中存在已退款、待支付状态下不可核销");
            this.bacthHeImportButton.disabled = true;
            flag = true;
            return;
          }
        });
        if (!flag) {
          this.bacthHeImportButton.disabled = false;
        }
        //let selectPropertyArr = this.selectTempArr.filter(item => item.paymentStatus === 1 || item.paymentStatus === 2)
        // if (selectPropertyArr.length == 0) {
        //  this.bacthHeImportButton.disabled = false
        // } else {
        //   this.$message.error("数据中存在已退款、待支付状态下不可核销");
        //   this.bacthHeImportButton.disabled = true
        // }
      } else {
        this.bacthHeImportButton.disabled = true;
      }
    },
    onQuanXuanBoxOnChange(item) {
      console.log("quanxuan123", item);
      //钩上 为 true ;
      this.quanxuan = item.checked;
    },
    onActionSelectChange(item) {
      this.actionType = item;
    },
    onActionQueRenBunttonClick() {
      //钩上 为 true ;
      if (this.quanxuan) {
        if (this.actionType === 0) {
          //导出
          this.$downloadFile(
            "报名用户列表.xlsx",
            "/api/dkn/viewRegistrationOrders/exportExcel",
            {}
          );
        }
        if (this.actionType === 1) {
          //批量核销核销
          this.hexiaotype = false;
          this.registrationOrdersDeleteModal.visible = true;
        }
      } else {
        this.$message.success("请勾选全选");
      }
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
    onRegistrationOrdersDeleteModalOk() {
      startOrdersHeXiao(this, arguments);
    },
    onRegistrationOrdersDeleteModalCancel() {
      this.registrationOrdersDeleteModal.visible = false;
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

.ele-wrapper-numberUsers {
  width: 100%;
  .ele-numberUsers {
    margin-bottom: 15px;
  }
}

.ele-wrapper-userTotalText {
  margin-right: 20px;
  display: none;
}

.ele-wrapper-bacthHeImportButton {
  margin-right: 20px;
  display: none;
}

.ele-wrapper-activitySelect {
  margin-right: 20px;
  display: none;
}

.ele-wrapper-baoMingImportButton {
  margin-right: 20px;
}

.ele-wrapper-invisibleImportSearchLogicBtn {
  display: none;
}

.ele-wrapper-registrationOrdersTable {
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

.ele-wrapper-0a6fba8b-c43b-4691-ad02-a62dba586095 {
  width: 100%;
  display: none;
}

.ele-wrapper-quanXuanBox {
  margin-left: 10px;
}

.ele-wrapper-actionSelect {
  margin-left: 20px;
}

.ele-wrapper-actionQueRenBuntton {
  margin-left: 20px;
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
