import _ from "lodash";
import moment from "moment";

// self对象保存页面的this对象
let self = {};

// logic对象保存当前逻辑组对象，可以通过logic.func或者self.func来调用本逻辑组内的所有逻辑单元
let logic = {};

/********************** exportActivity 开始 *********************/

/**
 * 逻辑流 exportActivity 入口函数
 */
const exportActivity = (logic.exportActivity = async (pageVm, eventData) => {
  console.log(`exportActivity: `, pageVm, eventData);
  self = Object.assign(pageVm, logic);
  self.exportActivityData = eventData;

  let url = "/api/restify/activity/exportExcel";
  let params = {
    ...self.activityTable.params,
    ...self.$getFilterValues(
      self.$refs.activityFilter.getFormValues(),
      self.$refs.activityFilter.cSchema
    ),
  };
  self.$downloadFile("活动列表数据.xlsx", url, params);
});

/********************** end exportActivity 开始 *********************/

/********************** searchActivity 开始 *********************/

/**
 * 逻辑流 searchActivity 入口函数
 */
const searchActivity = (logic.searchActivity = async (pageVm, eventData) => {
  console.log(`searchActivity: `, pageVm, eventData);
  self = Object.assign(pageVm, logic);
  self.searchActivityData = eventData;

  let params = {
    ...self.activityTable.params,
    ...self.$getFilterValues(
      self.$refs.activityFilter.getFormValues(),
      self.$refs.activityFilter.cSchema
    ),
  };
  if (_.isEqual(params, self.activityTable.params)) {
    self.$refs.activityTable.getData();
  } else {
    self.activityTable.params = params;
  }
});

/********************** end searchActivity 开始 *********************/

/********************** editActivity 开始 *********************/
/**
 * 发送修改请求
 */
const editRequest = (logic.editRequest = async function () {
  let res = await self.$putAction(`/api/dkn/activity/edit`, {
    ...self.$refs.activityEditForm.getFormValues(),
    id: self.currentActivityId,
  });
  self.editRequestData = res;
});

/**
 * 逻辑流 editActivity 入口函数
 */
const editActivity = (logic.editActivity = async (pageVm, eventData) => {
  console.log(`editActivity: `, pageVm, eventData);
  self = Object.assign(pageVm, logic);
  self.editActivityData = eventData;

  await self.$refs.activityEditForm.validate();
  await editRequest();
  if (self.editRequestData.success) {
    self.$message.success("编辑成功");
    self.$refs.activityEditForm.reset();
    self.activityEditModal.visible = false;
    self.$refs.activityTable.getData();
  } else {
    self.$message.error("编辑失败");
  }
});

/********************** end editActivity 开始 *********************/

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
    "活动列表数据模板.xlsx",
    "/api/restify/activity/downExcelTemplate",
    {}
  );
});

/********************** end downloadTemplate 开始下载模板 *********************/

/********************** deleteActivity 开始 *********************/
/**
 * 发送删除请求
 */
const deleteRequest = (logic.deleteRequest = async function () {
  let res = await self.$deleteAction(`/api/dkn/activity/delete`, {
    id: self.currentActivityId,
    databaseId: "",
  });
  self.deleteRequestData = res;
});

/**
 * 逻辑流 deleteActivity 入口函数
 */
const deleteActivity = (logic.deleteActivity = async (pageVm, eventData) => {
  console.log(`deleteActivity: `, pageVm, eventData);
  self = Object.assign(pageVm, logic);
  self.deleteActivityData = eventData;

  await deleteRequest();
  if (self.deleteRequestData.success) {
    self.$message.success("删除成功");
    self.$refs.activityTable.getData();
    self.activityDeleteModal.visible = false;
  } else {
    self.$message.error("删除失败");
  }
});

/********************** end deleteActivity 开始 *********************/

/********************** addActivity 开始 *********************/
/**
 * 发送添加请求
 */
const addRequest = (logic.addRequest = async function () {
  let res = await self.$postAction(`/api/dkn/activity/add`, {
    ...self.$refs.activityAddForm.getFormValues(),
  });
  self.addRequestData = res;
});

/**
 * 逻辑流 addActivity 入口函数
 */
const addActivity = (logic.addActivity = async (pageVm, eventData) => {
  console.log(`addActivity: `, pageVm, eventData);
  self = Object.assign(pageVm, logic);
  self.addActivityData = eventData;

  await self.$refs.activityAddForm.validate();
  await addRequest();
  if (self.addRequestData.success) {
    self.$message.success("添加成功");
    self.$refs.activityAddForm.reset();
    self.activityAddModal.visible = false;
    self.$refs.activityTable.getData();
  } else {
    self.$message.error("添加失败");
  }
});

/********************** end addActivity 开始 *********************/

export {
  exportActivity,
  searchActivity,
  editRequest,
  editActivity,
  downloadTemplate,
  deleteRequest,
  deleteActivity,
  addRequest,
  addActivity,
};
