import _ from "lodash";
import moment from "moment";

// self对象保存页面的this对象
let self = {};

// logic对象保存当前逻辑组对象，可以通过logic.func或者self.func来调用本逻辑组内的所有逻辑单元
let logic = {};

/********************** saveOrUpdate 开始 *********************/

/**
 * 逻辑流 saveOrUpdate 入口函数
 */
const saveOrUpdate = (logic.saveOrUpdate = async (pageVm, eventData) => {
  console.log(`saveOrUpdate: `, pageVm, eventData);
  self = Object.assign(pageVm, logic);
  self.saveOrUpdateData = eventData;
});

/********************** end saveOrUpdate 开始 *********************/

export { saveOrUpdate };
