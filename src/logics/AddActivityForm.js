import _ from "lodash";
import moment from "moment";

// self对象保存页面的this对象
let self = {};

// logic对象保存当前逻辑组对象，可以通过logic.func或者self.func来调用本逻辑组内的所有逻辑单元
let logic = {};

/********************** addActivty 开始 *********************/
/**
 * 发送添加请求
 */
const editRequest = (logic.editRequest = async function () {
  let res = await self.$postAction(`/api/dkn/activity/edits`, self.item);
  self.editRequestData = res;
});

/**
 * 逻辑流 addActivty 入口函数
 */
const addActivty = (logic.addActivty = async (pageVm, eventData) => {
  console.log(`addActivty: `, pageVm, eventData);
  self = Object.assign(pageVm, logic);
  self.addActivtyData = eventData;

  await self.$refs.activityForm.validate();
  await self.$refs.activityExtForm.validate();

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
    activityExts,
    activityImgs,
    activityExts,
  };

  await editRequest();
  if (self.editRequestData.success) {
    self.$message.error(self.editRequestData.message);
    return;
  }
  self.$message.success("操作成功");
  self.$router.push({
    path: `/haomo/1750448384092672002/page`,
  });
});

/********************** end addActivty 开始 *********************/

/********************** addActivityProject 开始 *********************/

/**
 * 逻辑流 addActivityProject 入口函数
 */
const addActivityProject = (logic.addActivityProject = async (
  pageVm,
  eventData
) => {
  console.log(`addActivityProject: `, pageVm, eventData);
  self = Object.assign(pageVm, logic);
  self.addActivityProjectData = eventData;

  await self.$refs.activityProjectForm.validate();
  let item = self.$refs.activityProjectForm.getFormValues();
  (item.index = Math.floor(Math.random() * 10000)),
    self.$refs.activityProjectTable.cData.push(item);

  self.addproject.visible = false;
  self.$refs.activityProjectForm.reset();
});

/********************** end addActivityProject 开始 *********************/

export { editRequest, addActivty, addActivityProject };
