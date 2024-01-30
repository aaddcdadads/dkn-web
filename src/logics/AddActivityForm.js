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
  let res = await self.$postAction(`/api/dkn/activity/adds`, self.item);
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
  await self.$refs.activityExtTwoForm.validate();

  let activityProjects = [],
    activityImgs = [],
    activityExts = [];
  activityExts = [
    {
      activityRules: self.activityRules.value,
      protocol: self.agreementCommitmentletter.value,
      customerService: self.customerService.value,
      ...self.$refs.activityExtTwoForm.getFormValues(),
    },
  ];
  if (self.$refs.activityProjectTable.cData.length > 0) {
    activityProjects = self.$refs.activityProjectTable.cData.map((x) => {
      return x;
    });
  }
  if (self.$refs.activityImgTableOne.cData.length > 0) {
    activityImgs = self.$refs.activityImgTableOne.cData.map((x) => {
      x.type = 0;
      return x;
    });
  }
  if (self.$refs.activityImgTableTwo.cData.length > 0) {
    let list = self.$refs.activityImgTableTwo.cData.map((x) => {
      x.type = 1;
      return x;
    });
    activityImgs = [...activityImgs, ...list];
  }
  if (self.$refs.sharingImageTable.cData.length > 0) {
    let list = self.$refs.sharingImageTable.cData.map((x) => {
      x.type = 2;
      return x;
    });
    activityImgs = [...activityImgs, ...list];
  }
  let item = self.$refs.activityForm.getFormValues();
  item.startTime = self.$moment(item.cycle[0]).format("YYYY-MM-DD HH:mm:ss");
  item.endTime = self.$moment(item.cycle[1]).format("YYYY-MM-DD HH:mm:ss");
  console.log(item);
  delete item.cycle;
  self.item = {
    ...item,
    activityProjects,
    activityImgs,
    activityExts,
    bgColour: self.bgColour,
    colour: self.colour,
    textColour: self.textColour,
  };

  await editRequest();
  if (!self.editRequestData.success) {
    self.$message.error(self.editRequestData.message);
    return;
  }
  self.$message.success("操作成功");
  self.$router.push({
    path: `/haomo/1750448384092672002/page`,
  });
});

/********************** end addActivty 开始 *********************/

export { editRequest, addActivty };
