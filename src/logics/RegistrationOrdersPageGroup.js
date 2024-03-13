import _ from "lodash";
import moment from "moment";

// self对象保存页面的this对象
let self = {};

// logic对象保存当前逻辑组对象，可以通过logic.func或者self.func来调用本逻辑组内的所有逻辑单元
let logic = {};

/********************** searchRegistrationOrders 开始 *********************/

/**
 * 逻辑流 searchRegistrationOrders 入口函数
 */
const searchRegistrationOrders = (logic.searchRegistrationOrders = async (
  pageVm,
  eventData
) => {
  console.log(`searchRegistrationOrders: `, pageVm, eventData);
  self = Object.assign(pageVm, logic);
  self.searchRegistrationOrdersData = eventData;

  let params = {
    ...self.registrationOrdersTable.params,
    ...self.$getFilterValues(
      self.$refs.registrationOrdersFilter.getFormValues(),
      self.$refs.registrationOrdersFilter.cSchema
    ),
  };
  if (_.isEqual(params, self.registrationOrdersTable.params)) {
    self.$refs.registrationOrdersTable.getData();
  } else {
    self.registrationOrdersTable.params = params;
  }
  await startOrdersLoad(self, self.startData, 1);
});

/********************** end searchRegistrationOrders 开始 *********************/

/********************** deleteRegistrationOrders 开始 *********************/
/**
 * 发送删除请求
 */
const deleteRequest = (logic.deleteRequest = async function () {
  let res = await self.$deleteAction(`/api/restify/registrationOrders/delete`, {
    id: self.currentRegistrationOrdersId,
    databaseId: "",
  });
  self.deleteRequestData = res;
});

/**
 * 逻辑流 deleteRegistrationOrders 入口函数
 */
const deleteRegistrationOrders = (logic.deleteRegistrationOrders = async (
  pageVm,
  eventData
) => {
  console.log(`deleteRegistrationOrders: `, pageVm, eventData);
  self = Object.assign(pageVm, logic);
  self.deleteRegistrationOrdersData = eventData;

  await deleteRequest();
  if (self.deleteRequestData.success) {
    self.$message.success("删除成功");
    self.$refs.registrationOrdersTable.getData();
    self.registrationOrdersDeleteModal.visible = false;
  } else {
    self.$message.error("删除失败");
  }
});

/********************** end deleteRegistrationOrders 开始 *********************/

/********************** exportRegistrationOrders 开始 *********************/

/**
 * 逻辑流 exportRegistrationOrders 入口函数
 */
const exportRegistrationOrders = (logic.exportRegistrationOrders = async (
  pageVm,
  eventData
) => {
  console.log(`exportRegistrationOrders: `, pageVm, eventData);
  self = Object.assign(pageVm, logic);
  self.exportRegistrationOrdersData = eventData;

  let url = "/api/dkn/viewRegistrationOrders/exportExcel";
  let params = {
    ...self.$getFilterValues(
      self.$refs.registrationOrdersFilter.getFormValues(),
      self.$refs.registrationOrdersFilter.cSchema
    ),
  };
  self.$downloadFile("报名用户列表.xlsx", url, params);
});

/********************** end exportRegistrationOrders 开始 *********************/

/********************** addRegistrationOrders 开始 *********************/
/**
 * 发送添加请求
 */
const addRequest = (logic.addRequest = async function () {
  let res = await self.$postAction(`/api/restify/registrationOrders/add`, {
    ...self.$refs.registrationOrdersAddForm.getFormValues(),
  });
  self.addRequestData = res;
});

/**
 * 逻辑流 addRegistrationOrders 入口函数
 */
const addRegistrationOrders = (logic.addRegistrationOrders = async (
  pageVm,
  eventData
) => {
  console.log(`addRegistrationOrders: `, pageVm, eventData);
  self = Object.assign(pageVm, logic);
  self.addRegistrationOrdersData = eventData;

  await self.$refs.registrationOrdersAddForm.validate();
  await addRequest();
  if (self.addRequestData.success) {
    self.$message.success("添加成功");
    self.$refs.registrationOrdersAddForm.reset();
    self.registrationOrdersAddModal.visible = false;
    self.$refs.registrationOrdersTable.getData();
  } else {
    self.$message.error("添加失败");
  }
});

/********************** end addRegistrationOrders 开始 *********************/

/********************** downloadTemplate 开始下载模板 *********************/

/**
 * 逻辑流 downloadTemplate 入口函数
 */
const downloadTemplate = (logic.downloadTemplate = async (
  pageVm,
  eventData
) => {
  console.log(`downloadTemplate: `, pageVm, eventData);
  self = Object.assign(pageVm, logic);
  self.downloadTemplateData = eventData;

  self.$downloadFile(
    "报名订单列表数据模板.xlsx",
    "/api/restify/registrationOrders/downExcelTemplate",
    {}
  );
});

/********************** end downloadTemplate 开始下载模板 *********************/

/********************** editRegistrationOrders 开始 *********************/
/**
 * 发送修改请求
 */
const editRequest = (logic.editRequest = async function () {
  let res = await self.$putAction(`/api/restify/registrationOrders/edit`, {
    ...self.$refs.registrationOrdersEditForm.getFormValues(),
    id: self.currentRegistrationOrdersId,
  });
  self.editRequestData = res;
});

/**
 * 逻辑流 editRegistrationOrders 入口函数
 */
const editRegistrationOrders = (logic.editRegistrationOrders = async (
  pageVm,
  eventData
) => {
  console.log(`editRegistrationOrders: `, pageVm, eventData);
  self = Object.assign(pageVm, logic);
  self.editRegistrationOrdersData = eventData;

  await self.$refs.registrationOrdersEditForm.validate();
  await editRequest();
  if (self.editRequestData.success) {
    self.$message.success("编辑成功");
    self.$refs.registrationOrdersEditForm.reset();
    self.registrationOrdersEditModal.visible = false;
    self.$refs.registrationOrdersTable.getData();
  } else {
    self.$message.error("编辑失败");
  }
});

/********************** end editRegistrationOrders 开始 *********************/

/********************** startOrdersLoad 开始 *********************/
/**
 * 参数处理
 */
const behaviorOrdersLoadPara = (logic.behaviorOrdersLoadPara = function () {
  console.log("加载");
});

/**
 * 数据请求
 */
const ajaxOrdersLoad = (logic.ajaxOrdersLoad = async function () {
  let res = await self.$getAction(`/api/dkn/viewRegistrationOrders/listEntry`, {
    ...self.registrationOrdersTable.params,
    ...self.$getFilterValues(
      self.$refs.registrationOrdersFilter.getFormValues(),
      self.$refs.registrationOrdersFilter.cSchema
    ),
  });
  self.ajaxOrdersLoadData = res;
});

/**
 * 成功处理
 */
const behaviorOrdersLoadSucc = (logic.behaviorOrdersLoadSucc = function () {
  self.userTotalText.text = "用户总数:" + self.ajaxOrdersLoadData.result.total;
});

/**
 * 失败处理
 */
const behaviorOrdersLoadFaul = (logic.behaviorOrdersLoadFaul = function () {
  self.userTotalText.text = "用户总数:0";
});

/**
 * 逻辑流 startOrdersLoad 入口函数
 */
const startOrdersLoad = (logic.startOrdersLoad = async (pageVm, eventData) => {
  console.log(`startOrdersLoad: `, pageVm, eventData);
  self = Object.assign(pageVm, logic);
  self.startOrdersLoadData = eventData;

  behaviorOrdersLoadPara();
  await ajaxOrdersLoad();
  if (self.ajaxOrdersLoadData.success) {
    behaviorOrdersLoadSucc();
  } else {
    behaviorOrdersLoadFaul();
  }
});

/********************** end startOrdersLoad 开始 *********************/

/********************** startOrdersHeXiao 开始 *********************/
/**
 * 单个请求
 */
const ajaxOrdersHeXiaoOne = (logic.ajaxOrdersHeXiaoOne = async function () {
  let res = await self.$putAction(`/api/dkn/orderPickUp/edit`, {
    id: self.orderPickUpId,
    pickUpStatus: 0,
  });
  self.ajaxOrdersHeXiaoOneData = res;
});

/**
 * 成功处理
 */
const behaviorOrdersHeXiaoOneSucc = (logic.behaviorOrdersHeXiaoOneSucc = function () {
  self.$message.success("核销成功");
  self.$refs.registrationOrdersTable.getData();
  self.registrationOrdersDeleteModal.visible = false;
  self.orderPickUpId = null;
});

/**
 * 失败处理
 */
const behaviorOrdersHeXiaoOneFaul = (logic.behaviorOrdersHeXiaoOneFaul = function () {
  self.$message.error("核销失败");
  self.$refs.registrationOrdersTable.getData();
  self.registrationOrdersDeleteModal.visible = false;
  self.orderPickUpId = null;
});

/**
 * 参数处理
 */
const behaviorOrdersHeDuoParam = (logic.behaviorOrdersHeDuoParam = function () {
  self.heXiaoDuo = [];
  self.selectTempArr.forEach((e) => {
    let splData = e.pickUpStatusAction.split(",");
    for (let i = 0; i < splData.length; i++) {
      let splText = splData[i].split(":");
      let par = {
        id: splText[2],
        pickUpStatus: 0,
      };
      self.heXiaoDuo.push(par);
    }
  });
});

/**
 * 批量核销请求
 */
const ajaxOrdersHeDuo = (logic.ajaxOrdersHeDuo = async function () {
  let res = await self.$putAction(
    `/api/dkn/orderPickUp/editBatch`,
    self.heXiaoDuo
  );
  self.ajaxOrdersHeDuoData = res;
});

/**
 * 处理
 */
const behaviorOrdersHeXiaoDuoSucc = (logic.behaviorOrdersHeXiaoDuoSucc = function () {
  self.$message.success("核销成功");

  self.registrationOrdersTable.rowSelection = { selectedRowKeys: [] };
  self.$nextTick(() => {
    self.registrationOrdersTable.rowSelection = {};
    self.$refs.registrationOrdersTable.getData();
  });
  self.bacthHeImportButton.disabled = true;
  self.registrationOrdersDeleteModal.visible = false;
});

/**
 * 处理
 */
const behaviorOrdersHeXiaoDuoFual = (logic.behaviorOrdersHeXiaoDuoFual = function () {
  self.$message.error("核销失败");
  self.registrationOrdersTable.rowSelection = { selectedRowKeys: [] };
  self.$nextTick(() => {
    self.registrationOrdersTable.rowSelection = {};
    self.$refs.registrationOrdersTable.getData();
  });
  self.bacthHeImportButton.disabled = true;
  self.registrationOrdersDeleteModal.visible = false;
});

/**
 * 逻辑流 startOrdersHeXiao 入口函数
 */
const startOrdersHeXiao = (logic.startOrdersHeXiao = async (
  pageVm,
  eventData
) => {
  console.log(`startOrdersHeXiao: `, pageVm, eventData);
  self = Object.assign(pageVm, logic);
  self.startOrdersHeXiaoData = eventData;

  if (self.hexiaotype) {
    await ajaxOrdersHeXiaoOne();
    if (self.ajaxOrdersHeXiaoOneData.success) {
      behaviorOrdersHeXiaoOneSucc();
    } else {
      behaviorOrdersHeXiaoOneFaul();
    }
  } else {
    behaviorOrdersHeDuoParam();
    await ajaxOrdersHeDuo();
    if (self.ajaxOrdersHeDuoData.success) {
      behaviorOrdersHeXiaoDuoSucc();
    } else {
      behaviorOrdersHeXiaoDuoFual();
    }
  }
});

/********************** end startOrdersHeXiao 开始 *********************/

export {
  searchRegistrationOrders,
  deleteRequest,
  deleteRegistrationOrders,
  exportRegistrationOrders,
  addRequest,
  addRegistrationOrders,
  downloadTemplate,
  editRequest,
  editRegistrationOrders,
  behaviorOrdersLoadPara,
  ajaxOrdersLoad,
  behaviorOrdersLoadSucc,
  behaviorOrdersLoadFaul,
  startOrdersLoad,
  ajaxOrdersHeXiaoOne,
  behaviorOrdersHeXiaoOneSucc,
  behaviorOrdersHeXiaoOneFaul,
  behaviorOrdersHeDuoParam,
  ajaxOrdersHeDuo,
  behaviorOrdersHeXiaoDuoSucc,
  behaviorOrdersHeXiaoDuoFual,
  startOrdersHeXiao,
};
