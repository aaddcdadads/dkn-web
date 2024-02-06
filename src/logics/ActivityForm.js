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
const activityRequest = logic.activityRequest = async function () {
  let res = await self.$getAction(
    `/api/dkn/activity/queryById`,
    {
    id:self.id
}
  )
  self.activityRequestData = res;
}

/**
 * 处理
 */
const setActivity = logic.setActivity = function() {
  if(!self.activityRequestData.success || !self.activityRequestData.result){
      return
  }
  let item = self.activityRequestData.result
  item.cycle=[item.startTime,item.endTime]
  item.pickUpTime=[item.pickUpStartTime,item.pickUpEndTime]]
  self.$refs.activityForm.setFormValues(item)
  self.$refs.activityTwoForm.setFormValues(item)

  self.bgColour=item.bgColour
  self.colour=item.colour
  self.textColour=item.textColour

  self.bgColourKit.color=item.bgColour
  self.colourKit.color=item.colour
  self.textColourKit.color=item.textColour
}

/**
 * 活动拓展
 */
const activityExtRequest = logic.activityExtRequest = async function () {
  let res = await self.$getAction(
    `/api/dkn/activityExt/list`,
    {
    activityId:self.activityId
}
  )
  self.activityExtRequestData = res;
}

/**
 * 处理
 */
const setActivityExt = logic.setActivityExt = function() {
  if(!self.activityExtRequestData.success || self.activityExtRequestData.result.records.length === 0){
      return
  }
  let item = self.activityExtRequestData.result.records[0]
  self.activityExtItem=item
  self.$refs.activityExtTwoForm.setFormValues(item)
  self.activityRules.value=item.activityRules
  self.agreementCommitmentletter.value=item.protocol
  self.customerService.value=item.customerService
}

/**
 * 活动项目
 */
const activityProjectRequest = logic.activityProjectRequest = async function () {
  let res = await self.$getAction(
    `/api/dkn/activityProject/list`,
    {
    activityId:self.activityId
}
  )
  self.activityProjectRequestData = res;
}

/**
 * 处理
 */
const setActivityProject = logic.setActivityProject = function() {
  if(!self.activityProjectRequestData.success || self.activityProjectRequestData.result.records.length === 0){
      return
  }
  self.$refs.activityProjectTable.cData=self.activityProjectRequestData.result.records
  
}

/**
 * 活动图片
 */
const activityImgRequest = logic.activityImgRequest = async function () {
  let res = await self.$getAction(
    `/api/dkn/activityImg/list`,
    {
    activityId:self.activityId
}
  )
  self.activityImgRequestData = res;
}

/**
 * 处理
 */
const setActivityImg = logic.setActivityImg = function() {
  if(!self.activityImgRequestData.success || self.activityImgRequestData.result.records.length === 0){
      return
  }
  let activityImgTableOneData=[],activityImgTableTwoData=[],activityImgTableTreData=[]
  self.activityImgRequestData.result.records.forEach((e)=>{
      if(e.type ===0){
        activityImgTableOneData.push(e)
      }else if(e.type ===1){
          activityImgTableTwoData.push(e)
      }else{
          activityImgTableTreData.push(e)
      }
  })
  self.$refs.activityImgTableOne.cData=activityImgTableOneData
  self.$refs.activityImgTableTwo.cData=activityImgTableTwoData
  self.$refs.sharingImageTable.cData=activityImgTableTreData
}


/**
 * 逻辑流 detail 入口函数
 */
const detail = logic.detail = async (pageVm, eventData) => {
  console.log(`detail: `, pageVm, eventData)
  self = Object.assign(pageVm, logic);
  self.detailData = eventData;

  
  self.id=self.$route.query.id
self.activityId=self.id
self.type=self.$route.query.type
self.type = parseInt(self.type)
if(!self.id || self.type ===1){
    return
}


if(self.type===3){
    self.title.text="活动详情"
    self.isSaveOrUpdate.hidden=true
    self.isTitle.text=""
    self.addActivityProject.visible=false
    self.addActivityImgTableOne.visible=false
    self.addActivityImgTableTwo.visible=false
    setTimeout(()=>{
        for(let key in self.activityForm.config){
            self.activityForm.config[key].props.disabled=true
        }
        for(let key in self.activityTwoForm.config){
            self.activityTwoForm.config[key].props.disabled=true
        }
         for(let key in self.activityExtTwoForm.config){
            self.activityExtTwoForm.config[key].props.disabled=true
        }
        
    })
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
    self.sharingImageTable.columns.splice(
        self.sharingImageTable.columns.length - 1,
        1
    );
}else{
    self.title.text="编辑活动"
}
  await activityRequest();
  setActivity();
  await activityExtRequest();
  setActivityExt();
  await activityProjectRequest();
  setActivityProject();
  await activityImgRequest();
  setActivityImg();

}

/********************** end detail 开始 *********************/

/********************** saveOrUpdate 开始 *********************/
/**
 * 发送编辑请求
 */
const editRequest = logic.editRequest = async function () {
  let res = await self.$putAction(
    `/api/dkn/activity/edits`,
    {
    ...self.item,
    id:self.id
}
  )
  self.editRequestData = res;
}


/**
 * 逻辑流 saveOrUpdate 入口函数
 */
const saveOrUpdate = logic.saveOrUpdate = async (pageVm, eventData) => {
  console.log(`saveOrUpdate: `, pageVm, eventData)
  self = Object.assign(pageVm, logic);
  self.saveOrUpdateData = eventData;

  
  await self.$refs.activityForm.validate()
await self.$refs.activityExtTwoForm.validate()
await self.$refs.activityTwoForm.validate()

let activityProjects=[],activityImgs=[],activityExts=[]
activityExts=[
    {
        activityRules:self.activityRules.value,
        protocol:self.agreementCommitmentletter.value,
        customerService:self.customerService.value,
    ...self.$refs.activityExtTwoForm.getFormValues(),
    id:self.activityExtItem.id
    }]
if(self.$refs.activityProjectTable.cData.length > 0){
    activityProjects = self.$refs.activityProjectTable.cData.map((x)=>{
        return x
    })
}
if(self.$refs.activityImgTableOne.cData.length > 0){
    activityImgs = self.$refs.activityImgTableOne.cData.map((x)=>{
        x.type=0
        return x
    })
}
if(self.$refs.activityImgTableTwo.cData.length > 0){
     let list = self.$refs.activityImgTableTwo.cData.map((x)=>{
        x.type=1
        return x
    })
    activityImgs =[...activityImgs,...list]
}
if(self.$refs.sharingImageTable.cData.length > 0){
     let list = self.$refs.sharingImageTable.cData.map((x)=>{
        x.type=2
        return x
    })
    activityImgs =[...activityImgs,...list]
}
let item =self.$refs.activityForm.getFormValues()
    item.startTime = self.$moment(item.cycle[0]).format('YYYY-MM-DD')+" 00:00:00"
    item.endTime = self.$moment(item.cycle[1]).format('YYYY-MM-DD')+" 23:59:59"
    delete item.cycle
    
    item.pickUpStartTime = self.$moment(item.pickUpTime[0]).format('YYYY-MM-DD')+" 00:00:00"
    item.pickUpEndTime = self.$moment(item.pickUpTime[1]).format('YYYY-MM-DD')+" 23:59:59"
    delete item.pickUpTime
let expense=0
    activityProjects.forEach(e=>{
        expense+=e.expense
    })
if(activityProjects.length === 0){
    self.$message.error("请添加至少一个活动项目")
    return
}
if(!self.bgColour){
    self.$message.error("请设置报名页背景颜色")
    return
}
if(!self.colour){
    self.$message.error("请设置报名页信息框颜色")
    return
}
if(!self.textColour){
    self.$message.error("请设置报名页信息框字体颜色")
    return
}
let closeTime = new Date(item.closeTime).getTime()
let startTime = new Date(item.startTime).getTime()
let endTime = new Date(item.endTime).getTime()
let pickUpTime = new Date(item.pickUpTime).getTime()
if(closeTime <startTime){
    // self.$message.error("报名截止时间不能小于活动周期的开始时间")
    // return
}
if(closeTime >endTime){
    // self.$message.error("报名截止时间不能大于活动周期的结束时间")
    // return
}
if(pickUpTime <closeTime){
    // self.$message.error("核销截止时间不能小于报名截止的时间")
    // return
}
self.item={
    ...item,
    ...self.$refs.activityTwoForm.getFormValues(),
    activityProjects,
    activityImgs,
    activityExts,
    expense,
    bgColour:self.bgColour,
    colour:self.colour,
    textColour:self.textColour,
    delActivityProjectList:self.delActivityProjectList,
    delActivityImgList:self.delActivityImgList
}

  await editRequest();
  if(!self.editRequestData.success){
    self.$message.error(self.editRequestData.message)
    return
}
self.$message.success("操作成功")
self.$router.push({
    path: `/haomo/1750448384092672002/page`,
  });

}

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
  editRequest,
  saveOrUpdate,
}