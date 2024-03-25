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
  await self.$refs.activityTwoForm.validate();

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

  let activityPickUps = [];
  if (self.$refs.activityPickUpTable.cData.length > 0) {
    activityPickUps = self.$refs.activityPickUpTable.cData.map((x) => {
      return x;
    });
  }
  let activityDictItems = [];
  if (self.$refs.activityDictItemTable.cData.length > 0) {
    activityDictItems = self.$refs.activityDictItemTable.cData.map((x) => {
      return x;
    });
  }
  let item = self.$refs.activityForm.getFormValues();
  item.startTime =
    self.$moment(item.cycle[0]).format("YYYY-MM-DD") + " 00:00:00";
  item.endTime = self.$moment(item.cycle[1]).format("YYYY-MM-DD") + " 23:59:59";
  delete item.cycle;

  // item.pickUpStartTime = self.$moment(item.pickUpTime[0]).format('YYYY-MM-DD')+" 00:00:00"
  // item.pickUpEndTime = self.$moment(item.pickUpTime[1]).format('YYYY-MM-DD')+" 23:59:59"
  // delete item.pickUpTime

  let expense = 0;
  activityProjects.forEach((e) => {
    expense += e.expense;
  });
  if (activityProjects.length === 0) {
    self.$message.error("请添加至少一个活动项目");
    return;
  }
  if (activityDictItems.length === 0) {
    //self.$message.error("请添加至少一个参与人信息")
    //return
  }
  if (activityPickUps.length === 0) {
    self.$message.error("请添加至少一轮核销");
    return;
  }
  if (!self.bgColour) {
    self.$message.error("请设置报名页背景颜色");
    return;
  }
  if (!self.colour) {
    self.$message.error("请设置报名页信息框颜色");
    return;
  }
  if (!self.textColour) {
    self.$message.error("请设置报名页信息框字体颜色");
    return;
  }
  let closeTime = new Date(item.closeTime).getTime();
  let startTime = new Date(item.startTime).getTime();
  let endTime = new Date(item.endTime).getTime();
  let pickUpTime = new Date(item.pickUpTime).getTime();
  if (closeTime < startTime) {
    //self.$message.error("报名截止时间不能小于活动周期的开始时间")
    //return
  }
  if (closeTime > endTime) {
    self.$message.error("报名截止时间不能大于活动周期的结束时间");
    return;
  }
  if (pickUpTime < closeTime) {
    // self.$message.error("核销截止时间不能小于报名截止的时间")
    // return
  }
  // if(pickUpTime >startTime){
  //     self.$message.error("核销截止时间不能小于活动周期的开始时间")
  //     return
  // }
  if (self.customerService.value) {
    //是否为座机
    let phoneRegex = /^(0\d{2,3}-?)?(\d{7,8})(-\d{1,4})?$/;
    let status = phoneRegex.test(self.customerService.value);
    if (!status) {
      //是否为手机号
      phoneRegex = /^1[3456789]\d{9}$/;
      status = phoneRegex.test(self.customerService.value);
    }
    if (!status) {
      self.$message.error("活动咨询客服不正确，请输入手机号或座机");
      return;
    }
  }
  self.item = {
    ...item,
    ...self.$refs.activityTwoForm.getFormValues(),
    activityProjects,
    activityImgs,
    activityExts,
    expense,
    bgColour: self.bgColour,
    colour: self.colour,
    textColour: self.textColour,
    address: self.address.value,
    activityPickUps,
    activityDictItems,
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
