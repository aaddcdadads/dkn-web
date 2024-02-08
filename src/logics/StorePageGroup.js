import _ from "lodash";
import moment from "moment";

// self对象保存页面的this对象
let self = {};

// logic对象保存当前逻辑组对象，可以通过logic.func或者self.func来调用本逻辑组内的所有逻辑单元
let logic = {};

/********************** exportStore 开始 *********************/

/**
 * 逻辑流 exportStore 入口函数
 */
const exportStore = logic.exportStore = async (pageVm, eventData) => {
  console.log(`exportStore: `, pageVm, eventData)
  self = Object.assign(pageVm, logic);
  self.exportStoreData = eventData;

  
  let url = "/api/restify/store/exportExcel";
let params = {
    ...self.storeTable.params,
    ...self.$getFilterValues(self.$refs.storeFilter.getFormValues(), self.$refs.storeFilter.cSchema),
};
self.$downloadFile("领奖门店列表数据.xlsx", url, params);

}

/********************** end exportStore 开始 *********************/

/********************** deleteStore 开始 *********************/
/**
 * 发送删除请求
 */
const deleteRequest = logic.deleteRequest = async function () {
  let res = await self.$deleteAction(
    `/api/dkn/store/delete`,
    {
    id: self.currentStoreId
}
  )
  self.deleteRequestData = res;
}


/**
 * 逻辑流 deleteStore 入口函数
 */
const deleteStore = logic.deleteStore = async (pageVm, eventData) => {
  console.log(`deleteStore: `, pageVm, eventData)
  self = Object.assign(pageVm, logic);
  self.deleteStoreData = eventData;

  
  await deleteRequest();
  if(self.deleteRequestData.success){
    self.$message.success("删除成功");
  self.$refs.storeTable.getData()
self.storeDeleteModal.visible = false

}else{
    self.$message.error("删除失败");

}

}

/********************** end deleteStore 开始 *********************/

/********************** loadAreaData 开始 *********************/
/**
 * ajax请求
 */
const queryAreaRequest = logic.queryAreaRequest = async function () {
  let res = await self.$getAction(
    `/api/dkn/area/getCascader`,
    
  )
  self.queryAreaRequestData = res;
}

/**
 * 失败处理
 */
const queryAreaRequestFail = logic.queryAreaRequestFail = function() {
  
}

/**
 * 成功处理
 */
const queryAreaRequestSuc = logic.queryAreaRequestSuc = function() {
  // 获取地区数据，self.queryAreaRequestData.result 是包含地区信息的变量
  var areas = self.queryAreaRequestData.result;
  console.log("打印地区", areas);
  // 获取新增表单中地区选择组件的属性对象
  var regionProps = self.storeAddForm.schema.properties.form.properties.urbanArea["x-component-props"];
  // 如果存在地区数据，设置选项为地区数据，否则设置为空数组
  if (areas) {
    regionProps.options = areas;
  } else {
    regionProps.options = [];
  }
  // 更新新增表单中地区选择组件的属性对象
  self.storeAddForm.schema.properties.form.properties.urbanArea["x-component-props"] = regionProps;
  // 获取编辑表单中地区选择组件的属性对象
  var editRegionProps = self.storeEditForm.schema.properties.form.properties.urbanArea["x-component-props"];
  // 如果存在地区数据，设置选项为地区数据，否则设置为空数组
  if (areas) {
    editRegionProps.options = areas;
  } else {
    editRegionProps.options = [];
  }
  // 更新编辑表单中地区选择组件的属性对象
  self.storeEditForm.schema.properties.form.properties.urbanArea["x-component-props"] = editRegionProps;

}


/**
 * 逻辑流 loadAreaData 入口函数
 */
const loadAreaData = logic.loadAreaData = async (pageVm, eventData) => {
  console.log(`loadAreaData: `, pageVm, eventData)
  self = Object.assign(pageVm, logic);
  self.loadAreaDataData = eventData;

  
  await queryAreaRequest();
  if(self.queryAreaRequestData.success){
    queryAreaRequestSuc();

}else{
    queryAreaRequestFail();

}

}

/********************** end loadAreaData 开始 *********************/

/********************** loadAreaDataRegion 开始 *********************/
/**
 * 参数处理
 */
const regionParamHandler = logic.regionParamHandler = function() {
let regionIds = self.currentEditItem.urbanArea;
console.log("打印",regionIds);
  if (Object.prototype.toString.call(regionIds) === "[object Array]") {
    self.regionIds =
      regionIds.length > 0 ? regionIds[regionIds.length - 1] : null;
  } else {
    self.regionIds = regionIds;
  }
}

/**
 * 查询地区
 */
const queryAreaRequestRegionEcho = logic.queryAreaRequestRegionEcho = async function () {
  let res = await self.$getAction(
    `/api/dkn/area/queryById`,
    {
    id:self.regionIds
}
  )
  self.queryAreaRequestRegionEchoData = res;
}

/**
 * 失败处理
 */
const queryAreaFailRegions = logic.queryAreaFailRegions = function() {
  
}

/**
 * 成功处理
 */
const queryAreaRequestSucRegion = logic.queryAreaRequestSucRegion = function() {
  var result = self.queryAreaRequestRegionEchoData.result;
  console.log("打印结果",result);
  if(result && result.areaGroup){
    var split = result.areaGroup.split(",");
    var regionId = [];
    for(var i=0;i<split.length;i++){
      regionId[i]=split[i];
    }
    self.currentEditItem.urbanArea = regionId;
  }else{
    self.currentEditItem.urbanArea = []
  }
 
  console.log("e=======", self.$refs.storeEditForm.schema.properties.form.properties.urbanArea.default);
  console.log("e=======2", self.$refs.storeEditForm.schema.properties.form.properties.name.default);
  console.log("e=======3", self.$refs.storeEditForm.schema.properties.form.properties.address.default);
   self.$nextTick(function () {
       self.$refs.storeEditForm.schema.properties.form.properties.urbanArea.default = self.currentEditItem.urbanArea;
        self.$refs.storeEditForm.schema.properties.form.properties.name.default = self.currentEditItem.name;
         self.$refs.storeEditForm.schema.properties.form.properties.address.default = self.currentEditItem.address;
  });
 
}


/**
 * 逻辑流 loadAreaDataRegion 入口函数
 */
const loadAreaDataRegion = logic.loadAreaDataRegion = async (pageVm, eventData) => {
  console.log(`loadAreaDataRegion: `, pageVm, eventData)
  self = Object.assign(pageVm, logic);
  self.loadAreaDataRegionData = eventData;

  
  regionParamHandler();
  await queryAreaRequestRegionEcho();
  if(self.queryAreaRequestRegionEchoData.success){
    queryAreaRequestSucRegion();

}else{
    queryAreaFailRegions();

}

}

/********************** end loadAreaDataRegion 开始 *********************/

/********************** editStore 开始 *********************/
/**
 * 发送修改请求
 */
const editRequest = logic.editRequest = async function () {
  let res = await self.$putAction(
    `/api/dkn/store/edit`,
    self.editParams
  )
  self.editRequestData = res;
}

/**
 * 处理
 */
const behaviorNmuBerEdit = logic.behaviorNmuBerEdit = function() {
  self.$message.error("店名重复");
}


/**
 * 逻辑流 editStore 入口函数
 */
const editStore = logic.editStore = async (pageVm, eventData) => {
  console.log(`editStore: `, pageVm, eventData)
  self = Object.assign(pageVm, logic);
  self.editStoreData = eventData;

  
  var values = self.$refs.storeEditForm.getFormValues();
let urls = '/api/dkn/store/list';
  let paramsEs = {
    name:values.name
  }
  self.$getAction(urls, paramsEs).then(resTypes => {
    console.log('编辑base64', resTypes);
    if(resTypes.result.records.length!=0){
       self.num =1
    }else{
      self.num =0
    }
  });
  if(self.num  !=0){
    await self.$refs.storeEditForm.validate()
var values = self.$refs.storeEditForm.getFormValues();

// //地区处理
// let urbanArea = null;
// if(Object.prototype.toString.call(values.urbanArea) === '[object Array]'){
//   urbanArea = values.urbanArea.length>0?values.urbanArea[values.urbanArea.length-1]:null;
// }else{
//   urbanArea = values.urbanArea;
// }
// console.log("e=======",urbanArea,values.id,self.currentStoreId);
self.editParams = {
    ...values,
    id: self.currentStoreId
    
}
  await editRequest();
  if(self.editRequestData.success){
    self.$message.success("编辑成功");
  self.$refs.storeEditForm.reset();
self.storeEditModal.visible = false;
  self.$refs.storeTable.getData()

}else{
    self.$message.error("编辑失败");

}

}else{
    behaviorNmuBerEdit();

}

}

/********************** end editStore 开始 *********************/

/********************** searchStore 开始 *********************/

/**
 * 逻辑流 searchStore 入口函数
 */
const searchStore = logic.searchStore = async (pageVm, eventData) => {
  console.log(`searchStore: `, pageVm, eventData)
  self = Object.assign(pageVm, logic);
  self.searchStoreData = eventData;

  
  let params = {
    ...self.storeTable.params,
    ...self.$getFilterValues(self.$refs.storeFilter.getFormValues(), self.$refs.storeFilter.cSchema),
}
if (_.isEqual(params, self.storeTable.params)) {
    self.$refs.storeTable.getData()
} else {
    self.storeTable.params = params
}

}

/********************** end searchStore 开始 *********************/

/********************** addStore 开始 *********************/
/**
 * 发送添加请求
 */
const addRequest = logic.addRequest = async function () {
  let res = await self.$postAction(
    `/api/dkn/store/add`,
    {
    ...self.addParams
}
  )
  self.addRequestData = res;
}


/**
 * 逻辑流 addStore 入口函数
 */
const addStore = logic.addStore = async (pageVm, eventData) => {
  console.log(`addStore: `, pageVm, eventData)
  self = Object.assign(pageVm, logic);
  self.addStoreData = eventData;

  
  // 生成一个随机的数字和英文组合的字符串，用于存入二维码
var values = self.$refs.storeAddForm.getFormValues();

let urls = '/api/dkn/store/list';
let paramsEs = {
  name: values.name,
  delFlage: 0
};
self.$getAction(urls, paramsEs).then(resTypes => {
  console.log('编辑base64', resTypes);
  if (resTypes.result.total != 0) {
    self.$message.error("店名重复111");
    // 如果条件成立，则跳出函数，不执行后面的代码
    return;
  }
});


  await self.$refs.storeAddForm.validate();
var values = self.$refs.storeAddForm.getFormValues();

// // 生成二维码
// const canvas = document.createElement('canvas');
// canvas.width = 300; // 设置宽度为 300 像素
// canvas.height = 300; // 设置高度为 300 像素

// new self.$QrCode(canvas, {
//   text: "666",
//   width: 300,
//   height: 300,
//   colorDark: "#000000",
//   colorLight: "#ffffff",
// });
// const qrCodeBase64 = canvas.toDataURL("image/jpg");
// // 设置 self.baseUrl
// self.baseUrl = qrCodeBase64;
// console.log("QR Code Base64:", self.baseUrl);

// 继续执行其他操作
self.addParams = {
    ...values,
    status: 0
};
  await addRequest();
  if(self.addRequestData.success){
    
setTimeout(() => {
  self.storId = self.addRequestData.result.id;
console.log("打印新增的数据id",self.storId,self.addRequestData,self.baseUrl);
    const container = document.querySelector(".ele-wrapper-rcodeTwo");
    console.log("container", container);
    new self.$QrCode(container, {
      text: "https://dkn-h5.dev.haumo.cn/pages/haomo/1751895267671543809/page?storeId="+self.storId,
      width: 128,
      height: 128,
      colorDark: "#000000",
      colorLight: "#ffffff",
    });
    // 获取生成的二维码的 base64 编码
    const canvas = container.querySelector("canvas");
    const qrCodeBase64 = canvas.toDataURL("image/png");
    self.baseUrl = qrCodeBase64;
    // 打印二维码的 base64 编码
    console.log("QR64======:", qrCodeBase64);
 

let urlEdit = '/api/dkn/store/edit';
  let paramsEdit = {
    id:self.storId,
    qrCode: self.baseUrl
  }
  self.$putAction(urlEdit, paramsEdit).then(resTypes => {
    console.log('编辑base64', resTypes);
  });
  self.$message.success("添加成功");
self.$refs.storeAddForm.reset();
self.$refs.storeTable.getData();

  self.storeAddModal.visible = false;
  },1000);
  
  
  

}else{
    self.$message.error("添加失败");

}

}

/********************** end addStore 开始 *********************/

/********************** downloadTemplate 开始下载模板 *********************/

/**
 * 逻辑流 downloadTemplate 入口函数
 */
const downloadTemplate = logic.downloadTemplate = async (pageVm, eventData) => {
  console.log(`downloadTemplate: `, pageVm, eventData)
  self = Object.assign(pageVm, logic);
  self.downloadTemplateData = eventData;

  
  self.$downloadFile("领奖门店列表数据模板.xlsx", "/api/restify/store/downExcelTemplate", {})

}

/********************** end downloadTemplate 开始下载模板 *********************/


export {
  exportStore,
  deleteRequest,
  deleteStore,
  queryAreaRequest,
  queryAreaRequestFail,
  queryAreaRequestSuc,
  loadAreaData,
  regionParamHandler,
  queryAreaRequestRegionEcho,
  queryAreaFailRegions,
  queryAreaRequestSucRegion,
  loadAreaDataRegion,
  editRequest,
  behaviorNmuBerEdit,
  editStore,
  searchStore,
  addRequest,
  addStore,
  downloadTemplate,
}