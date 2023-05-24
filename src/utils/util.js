import _ from 'lodash';

export function convertCssToVueStyle(css) {
  if (!css) {
    return {
      backgroundColor: 'inherit'
    }
  }

  let items = css.split(';')
  let style = {}
  _.each(items, item => {
    let cssItem = _.trim(item)
    if (!cssItem) {
      return;
    }

    style[_.camelCase(_.trim(cssItem.split(':')[0]))] = _.trim(cssItem.split(':')[1])
  })
  return style;
}

export function getAntTableFlattenedColumns(columns) {
  let self = this;
  if (typeof columns === 'undefined') {
    columns = this.columns;
  }
  let flattenedColumns = JSON.parse(JSON.stringify(columns))
  _.each(columns, column => {
    if (column.children && column.children.length > 0) {
      flattenedColumns = _.concat(flattenedColumns, self.getFlattenedColumns(column.children))
    }
  })
  return flattenedColumns;
}

export function getStyles () {
  var str = "",
    styles = document.querySelectorAll('style,link');
  for (var i = 0; i < styles.length; i++) {
    str += styles[i].outerHTML;
  }
  return str;
}

/**
 * 打印element
 * @param {*} element 
 * @returns 
 */
export function print(element, width, height) {
    var mywindow = window.open('', 'PRINT', `height=${height || 400},width=${width || 600}`);

    mywindow.document.write('<html><head><title>' + document.title  + '</title>');
    mywindow.document.write(getStyles());
    mywindow.document.write('</head><body >');
    mywindow.document.write('<h1>' + document.title  + '</h1>');
    mywindow.document.write(element.innerHTML);
    mywindow.document.write('</body></html>');

    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/

    mywindow.print();
    // mywindow.close();

    return true;
}

/**
* 打印elementId
* @param {*} elementId 
* @returns 
*/
export function printById(elementId, width, height) {
  return print(document.getElementById(elementId), width, height);
}

/**
 * 判断formily表单values的类型
 */
function isSelect(type) {
  return type.indexOf("Select") > -1;
}

function isInput(type) {
  return type.indexOf("Input") > -1;
}

function isDate(type) {
  return type == "DatePicker";
}

function isTime(type) {
  return type == "TimePicker";
}

function isRangeDate(type) {
  return type == "RangePicker";
}

function isRangeTime(type) {
  return type == "RangePicker";
}

/**
 * 格式化formily表单的values
 */
function getFilterValue(type, values, key) {
  // 处理input组件
  if (isInput(type) && type !='InputNumber') {
    values[key] = `*${values[key]}*`;
    return;
  }
  // 处理日期组件
  if (isDate(type)) {
    values[key] = values[key]?.format('YYYY-MM-DD HH:mm:ss');
    return;
  }
  // 处理时间组件
  if (isTime(type)) {
    values[key] = values[key]?.format('HH:mm:ss');
    return;
  }
  // 处理范围日期组件
  if (isRangeDate(type)) {
    values[`${key}_begin`] = values[key]?.[0]?.format('YYYY-MM-DD HH:mm:ss');
    values[`${key}_end`] = values[key]?.[1]?.format('YYYY-MM-DD HH:mm:ss');
    values[key] = undefined;
    return;
  }
}

/**
 * 处理过滤器formily表单获取的值（适配接口规范）
 */
export function getFilterValues(values, schema) {
  let newValues = _.cloneDeep(values);
  _.each(schema.properties.form.properties, (item, key) => {
    if (newValues[key] != undefined) {
      getFilterValue(item['x-component'], newValues, key)
    }
  })
  return newValues;
}

/**
 * 控制是否拥有权限
 */
export function hasPermission(value) {
  console.log("value", value)
  if(!value){
    return true
  }
  let permissionsStorage = localStorage.getItem("permissions")
  if(!permissionsStorage){
    return true
  }
  let permissions = JSON.parse(permissionsStorage)
  if(permissions.indexOf(value) > -1){
    return true
  }
  return false;
}