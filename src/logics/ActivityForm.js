import _ from "lodash";
import moment from "moment";

// self对象保存页面的this对象
let self = {};

// logic对象保存当前逻辑组对象，可以通过logic.func或者self.func来调用本逻辑组内的所有逻辑单元
let logic = {};

/********************** detail 开始 *********************/
/**
 * 获取活动
 */
const activityRequest = (logic.activityRequest = async function () {
  let res = await self.$Action(``);
  self.activityRequestData = res;
});

/**
 * 处理
 */
const setActivity = (logic.setActivity = function () {});

/**
 * 活动拓展
 */
const activityExtRequest = (logic.activityExtRequest = async function () {
  let res = await self.$Action(``);
  self.activityExtRequestData = res;
});

/**
 * 处理
 */
const setActivityExt = (logic.setActivityExt = function () {});

/**
 * 活动项目
 */
const activityProjectRequest = (logic.activityProjectRequest = async function () {
  let res = await self.$Action(``);
  self.activityProjectRequestData = res;
});

/**
 * 处理
 */
const setActivityProject = (logic.setActivityProject = function () {});

/**
 * 活动图片
 */
const activityImgRequest = (logic.activityImgRequest = async function () {
  let res = await self.$Action(``);
  self.activityImgRequestData = res;
});

/**
 * 处理
 */
const setActivityImg = (logic.setActivityImg = function () {});

/**
 * 逻辑流 detail 入口函数
 */
const detail = (logic.detail = async (pageVm, eventData) => {
  console.log(`detail: `, pageVm, eventData);
  self = Object.assign(pageVm, logic);
  self.detailData = eventData;

  self.id = self.$route.query.id;
  self.type = self.$route.query.type;
  if (!self.id || self.type === 1) {
    return;
  }
  if (self.type === 3) {
    for (let item in self.activityForm.config) {
      self.activityForm.config[key].props.disabled = true;
    }
    for (let item in self.activityExtForm.config) {
      self.activityExtForm.config[key].props.disabled = true;
    }
    for (let item in self.activityTwoForm.config) {
      self.activityTwoForm.config[key].props.disabled = true;
    }
    self.activityProjectTable.columns.splice(
      self.activityProjectTable.columns.length - 1,
      1
    );
    self.activityImgTableOne.columns.splice(
      self.activityImgTableOne.columns.length - 1,
      1
    );
    self.activityImgTableTwo.columns.splice(
      self.activityImgTableTwo.columns.length - 1,
      1
    );
  }
  await activityRequest();
  setActivity();
  await activityExtRequest();
  setActivityExt();
  await activityProjectRequest();
  setActivityProject();
  await activityImgRequest();
  setActivityImg();
});

/********************** end detail 开始 *********************/

/********************** saveOrUpdate 开始 *********************/
/**
 * 发送添加请求
 */
const addRequest = (logic.addRequest = async function () {
  let res = await self.$postAction(`/api/dkn/activity/adds`, self.item);
  self.addRequestData = res;
});

/**
 * 发送编辑请求
 */
const editRequest = (logic.editRequest = async function () {
  let res = await self.$postAction(`/api/dkn/activity/edits`, {
    ...self.item,
    id: self.id,
  });
  self.editRequestData = res;
});

/**
 * 逻辑流 saveOrUpdate 入口函数
 */
const saveOrUpdate = (logic.saveOrUpdate = async (pageVm, eventData) => {
  console.log(`saveOrUpdate: `, pageVm, eventData);
  self = Object.assign(pageVm, logic);
  self.saveOrUpdateData = eventData;

  await self.$refs.activityForm.validate();
  await self.$refs.activityExtForm.validate();
  await self.$refs.activityTwoForm.validate();

  let activityProjects = [],
    activityImgs = [],
    activityExts = [];
  activityExts = [{ ...self.$refs.activityExtForm.getFormValues() }];
  if (self.$refs.activityProjectTable.cData.length > 0) {
    activityProjects = self.$refs.activityProjectTable.cData.map((x) => {
      delete x.id, x.createTime, x.createBy, x.updateTime, x.updateBy;
      return x;
    });
  }
  if (self.$refs.activityImgTableOne.cData.length > 0) {
    activityProjects = self.$refs.activityImgTableOne.cData.map((x) => {
      delete x.id, x.createTime, x.createBy, x.updateTime, x.updateBy;
      x.type = 0;
      return x;
    });
  }
  if (self.$refs.activityImgTableTwo.cData.length > 0) {
    let list = self.$refs.activityImgTableTwo.cData.map((x) => {
      delete x.id, x.createTime, x.createBy, x.updateTime, x.updateBy;
      x.type = 1;
      return x;
    });
    activityProjects = [...activityProjects, ...list];
  }
  self.item = {
    ...self.$refs.activityForm.getFormValues(),
    ...self.$refs.activityExtForm.getFormValues(),
    ...self.$refs.activityTwoForm.getFormValues(),
    activityExts,
    activityImgs,
    activityExts,
  };
  if (self.type === 1) {
    await addRequest();
    if (self.addRequestData.success) {
      self.$message.error(self.addRequestData.message);
      return;
    }
    self.$message.success("操作成功");
    self.$router.push({
      path: `/haomo/1750448384092672002/page`,
    });
  } else {
    await editRequest();
    if (self.editRequestData.success) {
      self.$message.error(self.editRequestData.message);
      return;
    }
    self.$message.success("操作成功");
    self.$router.push({
      path: `/haomo/1750448384092672002/page`,
    });
  }
});

/********************** end saveOrUpdate 开始 *********************/

export {
  activityRequest,
  setActivity,
  activityExtRequest,
  setActivityExt,
  activityProjectRequest,
  setActivityProject,
  activityImgRequest,
  setActivityImg,
  detail,
  addRequest,
  editRequest,
  saveOrUpdate,
};
