import _ from "lodash";
import moment from "moment";

// self对象保存页面的this对象
let self = {};

// logic对象保存当前逻辑组对象，可以通过logic.func或者self.func来调用本逻辑组内的所有逻辑单元
let logic = {};

/********************** orderRefund 开始 *********************/

/**
 * 逻辑流 orderRefund 入口函数
 */
const orderRefund = logic.orderRefund = async (pageVm, eventData) => {
  console.log(`orderRefund: `, pageVm, eventData)
  self = Object.assign(pageVm, logic);
  self.orderRefundData = eventData;

  
  self.viewRegistrationOrdersDeleteModal.visible = false;
let order = self.orderRefundData[0]
if(!order || !order.id){
    order = self.registrationOrder
}
if(!order.paymentChannel || (order.paymentChannel != "0" && order.paymentChannel != "1")){
    return self.$message.error("支付渠道错误")
}
if(order.paymentChannel == "0"){
    //wx
    self.$getAction("/api/wechat/refund", {orderId: order.id}).then(res => {
        if(res && res.indexOf("SUCCESS") > -1){
            return self.$message.success("【微信】申请退款成功")
        }else{
            return self.$message.error("【微信】申请退款失败")
        }
    })
}
if(order.paymentChannel == "1"){
    //zfb
    self.$getAction("/api/aliPay/tradeRefund", {orderId: order.id}).then(res => {
        if(res.success){
            self.$refs.viewRegistrationOrdersTable.getData()
            return self.$message.success("【支付宝】退款成功")
        }else{
            return self.$message.error("【支付宝】退款失败")
        }
    })
}


}

/********************** end orderRefund 开始 *********************/

/********************** ordersBatchRefund 开始 *********************/

/**
 * 逻辑流 ordersBatchRefund 入口函数
 */
const ordersBatchRefund = logic.ordersBatchRefund = async (pageVm, eventData) => {
  console.log(`ordersBatchRefund: `, pageVm, eventData)
  self = Object.assign(pageVm, logic);
  self.ordersBatchRefundData = eventData;

  
  console.log("this.onSelectList", self.onSelectList)
self.onSelectList.forEach(item => {
    self.orderRefund(self, [item])
})
self.batchRefundModal.visible = false;
location.reload();

}

/********************** end ordersBatchRefund 开始 *********************/

/********************** editViewRegistrationOrders 开始 *********************/
/**
 * 发送修改请求
 */
const editRequest = logic.editRequest = async function () {
  let res = await self.$putAction(
    `/api/restify/viewRegistrationOrders/edit`,
    {
    ...self.$refs.viewRegistrationOrdersEditForm.getFormValues(),
    id: self.currentViewRegistrationOrdersId
}
  )
  self.editRequestData = res;
}


/**
 * 逻辑流 editViewRegistrationOrders 入口函数
 */
const editViewRegistrationOrders = logic.editViewRegistrationOrders = async (pageVm, eventData) => {
  console.log(`editViewRegistrationOrders: `, pageVm, eventData)
  self = Object.assign(pageVm, logic);
  self.editViewRegistrationOrdersData = eventData;

  
  await self.$refs.viewRegistrationOrdersEditForm.validate()
  await editRequest();
  if(self.editRequestData.success){
    self.$message.success("编辑成功");
  self.$refs.viewRegistrationOrdersEditForm.reset();
self.viewRegistrationOrdersEditModal.visible = false;
  self.$refs.viewRegistrationOrdersTable.getData()

}else{
    self.$message.error("编辑失败");

}

}

/********************** end editViewRegistrationOrders 开始 *********************/

/********************** addViewRegistrationOrders 开始 *********************/
/**
 * 发送添加请求
 */
const addRequest = logic.addRequest = async function () {
  let res = await self.$postAction(
    `/api/restify/viewRegistrationOrders/add`,
    {
    ...self.$refs.viewRegistrationOrdersAddForm.getFormValues()
}
  )
  self.addRequestData = res;
}


/**
 * 逻辑流 addViewRegistrationOrders 入口函数
 */
const addViewRegistrationOrders = logic.addViewRegistrationOrders = async (pageVm, eventData) => {
  console.log(`addViewRegistrationOrders: `, pageVm, eventData)
  self = Object.assign(pageVm, logic);
  self.addViewRegistrationOrdersData = eventData;

  
  await self.$refs.viewRegistrationOrdersAddForm.validate()
  await addRequest();
  if(self.addRequestData.success){
    self.$message.success("添加成功");
  self.$refs.viewRegistrationOrdersAddForm.reset();
self.viewRegistrationOrdersAddModal.visible = false;
  self.$refs.viewRegistrationOrdersTable.getData()

}else{
    self.$message.error("添加失败");

}

}

/********************** end addViewRegistrationOrders 开始 *********************/

/********************** exportViewRegistrationOrders 开始 *********************/

/**
 * 逻辑流 exportViewRegistrationOrders 入口函数
 */
const exportViewRegistrationOrders = logic.exportViewRegistrationOrders = async (pageVm, eventData) => {
  console.log(`exportViewRegistrationOrders: `, pageVm, eventData)
  self = Object.assign(pageVm, logic);
  self.exportViewRegistrationOrdersData = eventData;

  
  let url = "/api/restify/viewRegistrationOrders/exportExcel";
let params = {
    ...self.viewRegistrationOrdersTable.params,
    ...self.$getFilterValues(self.$refs.viewRegistrationOrdersFilter.getFormValues(), self.$refs.viewRegistrationOrdersFilter.cSchema),
};
self.$downloadFile("view_registration_orders列表数据.xlsx", url, params);

}

/********************** end exportViewRegistrationOrders 开始 *********************/

/********************** deleteViewRegistrationOrders 开始 *********************/
/**
 * 发送删除请求
 */
const deleteRequest = logic.deleteRequest = async function () {
  let res = await self.$deleteAction(
    `/api/restify/viewRegistrationOrders/delete`,
    {
    id: self.currentViewRegistrationOrdersId,
    "databaseId": ""
}
  )
  self.deleteRequestData = res;
}


/**
 * 逻辑流 deleteViewRegistrationOrders 入口函数
 */
const deleteViewRegistrationOrders = logic.deleteViewRegistrationOrders = async (pageVm, eventData) => {
  console.log(`deleteViewRegistrationOrders: `, pageVm, eventData)
  self = Object.assign(pageVm, logic);
  self.deleteViewRegistrationOrdersData = eventData;

  
  await deleteRequest();
  if(self.deleteRequestData.success){
    self.$message.success("删除成功");
  self.$refs.viewRegistrationOrdersTable.getData()
self.viewRegistrationOrdersDeleteModal.visible = false

}else{
    self.$message.error("删除失败");

}

}

/********************** end deleteViewRegistrationOrders 开始 *********************/

/********************** downloadTemplate 开始下载模板 *********************/

/**
 * 逻辑流 downloadTemplate 入口函数
 */
const downloadTemplate = logic.downloadTemplate = async (pageVm, eventData) => {
  console.log(`downloadTemplate: `, pageVm, eventData)
  self = Object.assign(pageVm, logic);
  self.downloadTemplateData = eventData;

  
  self.$downloadFile("view_registration_orders列表数据模板.xlsx", "/api/restify/viewRegistrationOrders/downExcelTemplate", {})

}

/********************** end downloadTemplate 开始下载模板 *********************/

/********************** searchViewRegistrationOrders 开始 *********************/

/**
 * 逻辑流 searchViewRegistrationOrders 入口函数
 */
const searchViewRegistrationOrders = logic.searchViewRegistrationOrders = async (pageVm, eventData) => {
  console.log(`searchViewRegistrationOrders: `, pageVm, eventData)
  self = Object.assign(pageVm, logic);
  self.searchViewRegistrationOrdersData = eventData;

  
  let params = {
    ...self.viewRegistrationOrdersTable.params,
    ...self.$getFilterValues(self.$refs.viewRegistrationOrdersFilter.getFormValues(), self.$refs.viewRegistrationOrdersFilter.cSchema),
}

if (_.isEqual(params, self.viewRegistrationOrdersTable.params)) {
    self.$refs.viewRegistrationOrdersTable.getData()
} else {
    self.viewRegistrationOrdersTable.params = params
}

}

/********************** end searchViewRegistrationOrders 开始 *********************/


export {
  orderRefund,
  ordersBatchRefund,
  editRequest,
  editViewRegistrationOrders,
  addRequest,
  addViewRegistrationOrders,
  exportViewRegistrationOrders,
  deleteRequest,
  deleteViewRegistrationOrders,
  downloadTemplate,
  searchViewRegistrationOrders,
}