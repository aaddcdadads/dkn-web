import _ from "lodash";
import moment from "moment";

// self对象保存页面的this对象
let self = {};

// logic对象保存当前逻辑组对象，可以通过logic.func或者self.func来调用本逻辑组内的所有逻辑单元
let logic = {};

/********************** saveOrUpdate 开始 *********************/
/**
 * 处理
 */
const formValidate = (logic.formValidate = function () {});

/**
 * 发送添加请求
 */
const addRequest = (logic.addRequest = async function () {
  let res = await self.$postAction(`/api/dkn/activity/adds`, {
    ...self.$refs.activityAddForm.getFormValues(),
  });
  self.addRequestData = res;
});

/**
 * 发送编辑请求
 */
const editRequest = (logic.editRequest = async function () {
  let res = await self.$postAction(`/api/dkn/activity/edits`, {
    ...self.$refs.activityAddForm.getFormValues(),
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

  formValidate();
  if (self.type === 1) {
    await addRequest();
    self.$refs.activityTable.getData();
  } else {
    await editRequest();
    self.$message.success("添加成功");
  }
});

/********************** end saveOrUpdate 开始 *********************/

export { formValidate, addRequest, editRequest, saveOrUpdate };
