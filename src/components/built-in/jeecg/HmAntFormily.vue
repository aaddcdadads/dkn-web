<template>
  <div :id="randomId">
    <FormProvider :form="form" :key="key" >
      <SchemaField :schema="cSchema" />
    </FormProvider>
  </div>
</template>

<script>
import { h, defineComponent } from "vue";

import {
  Form,
  FormItem,
  Button,
  Checkbox,
  CheckboxGroup,
  RangePicker,
  DatePicker,
  MonthPicker,
  Input,
  Textarea,
  InputNumber,
  Radio,
  RadioGroup,
  Cascader,
  Select,
  Slider,
  Switch as AntSwitch,
  TreeSelect,
  TimePicker,
  Upload,
} from 'ant-design-vue/es'
import { createForm, onFieldValueChange } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/vue'
import UploadImage from '/@/components/built-in/jeecg/formily/UploadImage.vue'
import HmAntInput from '/@/components/built-in/jeecg/HmAntInput.vue'
import HmAntUpload from '/@/components/built-in/jeecg/HmAntUpload.vue'
import HmAntSelect from '/@/components/built-in/jeecg/HmAntSelect.vue'
import HmAntButton from '/@/components/built-in/jeecg/HmAntButton.vue'
import HmAntTreeSelect from '/@/components/built-in/jeecg/HmAntTreeSelect.vue'
import HmAntTree from '/@/components/built-in/jeecg/HmAntTree.vue'
import HmAntCascader from '/@/components/built-in/jeecg/HmAntCascader.vue'
import HmWangEditor from "/@/components/built-in/jeecg/haomo/HmWangEditor.vue";
import moment from 'moment'
import 'ant-design-vue/dist/antd.css'
import _ from 'lodash'
import locale from "ant-design-vue/es/date-picker/locale/zh_CN";

//表单字段value类型
const stringType = [
  'Input',
  'Textarea',
  'Select',
  'Span',
  'HmWangEditor'
]
const numberType = [
  'InputNumber',
  'Slider',
]
const arrayType = [
  'CheckboxGroup',
  'RadioGroup',
  'Cascader',
  'TreeSelect',
  'RangePicker'
]
const booleanType = [
  'Switch',
]
const dateType = [
  'DatePicker'
]
const dateTimeType = [
  'TimePicker'
]
const objectType = [
  'Upload',
  'UploadImage'
]

const enumType = [{
    name: 'string',
    component: stringType
  },
  {
    name: 'number',
    component: numberType
  },
  {
    name: 'array',
    component: arrayType
  },
  {
    name: 'boolean',
    component: booleanType
  },
  {
    name: 'date',
    component: dateType
  },
  {
    name: 'datetime',
    component: dateTimeType
  },
  {
    name: 'object',
    component: objectType
  }
]

const resolveComponentValueType = componentType => {
  let valueType
  enumType.forEach(item => {
    if (item.component.indexOf(componentType) != -1) valueType = item.name
  })
  return valueType
}


const Switch = defineComponent({
  name: 'Switch',
  render() {
    const props = this.$attrs
    return h(
      AntSwitch,
      {
        ...props,
        checked: props.value
      }
    )
  },
})

const Span = defineComponent({
  name: 'Span',
  render() {
    const props = this.$attrs
    return h(
      'span',
      {
        ...props,
      },
      props.value
    )
  },
})
const Pre = defineComponent({
  name: 'Pre',
  render() {
    const props = this.$attrs
    return h(
      'pre',
      {
        ...props,
      },
      props.value
    )
  },
})

const Img = defineComponent({
  name: 'Img',
  render() {
    const props = this.$attrs
    return h(
      'img',
      {
        ...props,
        src: props.value
      }
    )
  },
})

const { SchemaField } = createSchemaField({
  components: {
    Form,
    FormItem,
    Button,
    Checkbox,
    CheckboxGroup,
    RangePicker,
    DatePicker,
    MonthPicker,
    Input,
    Textarea,
    InputNumber,
    Radio,
    RadioGroup,
    Cascader,
    Select,
    Slider,
    // HmSwitch,
    Switch,
    TreeSelect,
    TimePicker,
    Upload,
    UploadImage,
    HmAntInput,
    HmAntSelect,
    HmAntUpload,
    HmAntButton,
    HmAntTreeSelect,
    HmAntTree,
    HmAntCascader,
    HmWangEditor,
    Span,
    Pre,
    Img
  },
})

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

function getFormValue(type, values, key) {
  // 处理日期组件
  if (isDate(type) && values[key] && typeof values[key] !== 'string') {
    values[key] = values[key].format('YYYY-MM-DD HH:mm:ss');
    return;
  }
  // 处理时间组件
  if (isTime(type) && values[key]) {
    values[key] = values[key].format('HH:mm:ss');
    return;
  }
}

function setFormValue(type, values, key) {
  // 处理日期\时间组件
  // if (isDate(type) || isTime(type)) {
  //   return moment(values[key]);
  // }

  // 处理日期\时间组件
  // if (isSelect(type) && typeof values[key] == 'number') {
  //     return String(values[key]);
  // }

  return values[key];
}

export default {
  components: { FormProvider, SchemaField },
  props: {
    /**
     * 表单配置
     */
    config: {
      type: Object,
      default: function() { 
        return {
          // span: {
          //   type: 'Span',
          //   title: '文字组件',
          //   style: {},
          //   props: {},
          //   events: {},
          //   required: true,
          //   disabled: true,
          //   validator: function(value) {}
          // }
        }
      }
    },
    /**
     * 表单数据
     * @model
     */
    value: {
      type: Object,
      default: function() {
        return {}
      }
    },
    /**
     * 分栏数量
     */
    colNum: {
      type: Number,
      default: 0
    },
    /**
     * 分栏最小宽度
     */
    colMinWidth: {
      type: Number,
      default: 380
    },
    /**
      * schema对象
      */
    schema: {
      type: Object,
      default: function() {
        return {
          type: 'object',
          properties: {
            form: {
              type: 'void',
              'x-component': 'Form',
              'x-component-props': {
                'style': {
                  'display': 'flex',
                  'flexWrap': 'wrap'
                },
                'label-col': { span: 7 },
                'wrapper-col': { span: 14 },
              },
              properties: {},
            }
          },
        }
      }
    },
    /**
     * 标题宽(n/24)
     */
    labelCol: {
      type: Number,
      default: 7,
    },
    /**
     * 组件宽度(n/24)
     */
    wrapperCol: {
      type: Number,
      default: 14,
    },
  },
  data() {
    return {
      key: 0,
      form: createForm(),
      cValue: {},
      cSchema: {},
      randomId: `${new Date().getTime()}-${parseInt(Math.random() * 1000000)}`
    }
  },
  
  watch: {
    schema: {
      handler() {
        this.calcSchema();
      },
      deep: true,
    },
    config: {
      handler() {
        this.calcSchema();
      },
      deep: true,
    },
    value: {
      handler(val) {
        //当val更新之后才会执行
        if (!_.eq(val, this.cValue)) {
          //value更新，设置formValue
          this.cValue = val
          this.$nextTick(() => {
            this.setFormValues(this.cValue)
          })
        }
      },
      deep: true,
      immediate: true
    },
    colNum: function() {
      // 重新计算schema里的组件样式
      this.calcSchema();
    },
    colMinWidth: function() {
      // 重新计算schema里的组件样式
      this.calcSchema();
    },
  },
  mounted() {
    this.calcSchema()
    //value更新，设置formValue
    this.cValue = this.value
    this.$nextTick(() => {
      this.setFormValues(this.cValue)
    })
  },
  methods: {
    /**
     * 计算schema
     * 需要根据几个props属性来计算得到最终的schema
     */
     calcSchema() {
      // 根据config生成出基本的schema
      let configSchema = this.genSchemaFromConfig();
      
      // 合并configSchema和schema，生成cSchema
      this.cSchema = this.conbineSchame(configSchema);

      // 根据colNum，计算每个元素的style
      this.calcElementStyle();
    },
    /**
     * 根据config生成schema
     */
    genSchemaFromConfig() {
      let properties = {}
      for (const key in this.config) {
        const element = this.config[key];
        properties[key] = {
          "type": resolveComponentValueType(element.type),
          required: element.required || false,
          "x-component": element.type || 'Input',
          "x-component-props": {
            disabled: element.disabled || false, 
            ...element.props,
            ...element.events
          },
          "x-decorator": "FormItem",
          "x-decorator-props": {
            "label": element.title || '',
            "name": key || '',
            "class": element.required ? "required" : '',
            "style": element.style || {}
          },
          "x-validator": element.validator
        }
      }
      return properties
    },
    /**
     * 合并config生成的schema和props.schema
     */
    conbineSchame(configSchema) {
      let schema = _.cloneDeep(this.schema)
      if (schema.properties) {
        schema.properties.form.properties = {
          ...configSchema,
          ...schema.properties.form.properties
        }
      } else {
        schema.properties = {
          form: {
            type: 'void',
            'x-component': 'Form',
            'x-component-props': {
              'style': {
                'display': 'flex',
                'flexWrap': 'wrap'
              },
              'label-col': { span: this.labelCol },
              'wrapper-col': { span: this.wrapperCol },
            },
            properties: {
              ...configSchema,
            }
          }
        }
      }
      return schema
    },
    /**
     * 根据colNum，计算每个元素的style
     */
    calcElementStyle() {
      const schema = _.cloneDeep(this.cSchema)
      //定义表单项最小宽度
      const fieldMinWidth = this.colMinWidth
      this.$nextTick(() => {
        //判断组件是否在dom渲染，不渲染则不计算宽度以及初始化表单
        const componentDom = document.getElementById(this.randomId)
        if (!componentDom) return
        //获取form组件整体最大宽度
        const formWidth = componentDom.getBoundingClientRect().width
        //计算表单项宽度,单项宽度不应小过最小宽度,分栏计算后单项宽度小于最小宽度，赋值为最小宽度,若大于最小宽度，即赋值为计算后的百分比
        const fieldWidth = (formWidth / this.colNum) <= fieldMinWidth ? `${fieldMinWidth}px` : `${(100 / this.colNum).toFixed(1)}%`
        //将宽度赋值给每个表单项
        for (const key in schema.properties.form.properties) {
          const element = schema.properties.form.properties[key];
          //排除掉按钮组，不设置按钮的宽度
          if (element["x-component"] != "Button" && element["x-component"] != "HmAntButton") {
            element["x-decorator-props"] = {
              ...element["x-decorator-props"],
              style: {
                ...element["x-decorator-props"].style,
                //分栏数为0时，使用默认宽度
                width: this.colNum == 0 ? element["x-decorator-props"].style.width || "50%" : fieldWidth,
              },
              labelCol: { span: this.labelCol },
              wrapperCol: { span: this.wrapperCol },
            }
          }
        }
        this.cSchema = schema;
        this.registerFormOnUpdate()
      })
    },
    /**
     * 重新注册form，绑定FieldValueChange事件
     */
    registerFormOnUpdate() {
      let self = this
      //刷新form
      this.key++;
      //拿到除span与button以外的schema中的表单项
      const fieldGroup = _(this.cSchema.properties.form.properties).map((val,key) => key).filter(val => ["span","button"].indexOf(val) == -1).value()
      this.form = createForm({
        effects() {
          let index
          //遍历表单项，批量监听
          for ( index = 0; index < fieldGroup.length; index++) {
            const element = fieldGroup[index];
            onFieldValueChange(element, () => {
              self.updateFormValuesOnChange()
            })
          }
        },
      });
    },

    /**
     * 监听表单值中任意值的变化，更新value
     */
    updateFormValuesOnChange() {
      this.cValue = this.getFormValues()
      this.$emit("update:value",  this.cValue)
    },

    /**
     * 获取过滤器的values
     */
    getFilterValues() {
      return this.$getFilterValues(this.getValues(), this.cSchema)
    },

    /**
     * 获取表单values
     */
    getFormValues() {
      let newValues = _.cloneDeep(this.getValues());
      _.each(this.cSchema.properties.form.properties, (item, key) => {
        if (newValues[key] != undefined) {
          getFormValue(item['x-component'], newValues, key);
        }
      })
      return newValues;
    },
    /**
     * 设置表单values
     */
    setFormValues(values) {
      let newValues = {};
      _.each(this.cSchema.properties.form.properties, (item, key) => {
        if (values[key] != null || values[key] != undefined) {
          newValues[key] = setFormValue(item['x-component'], values, key);
        }
      })
      this.setValues(newValues);
    },
    /**
     * 设置values
     */
    setValues(values) {
      return this.form.setValues(values);
    },
    /**
     * 获取values
     */
    getValues() {
      return this.form.values;
    },
    /**
     * 重置
     */
    reset() {
      this.form.reset();
    },
    /**
     * 校验
     */
    validate() {
      return new Promise((resolve, reject) => {
        let fields = this.form.fields
        let values = this.form.values
        this.form.validate().then(() => {
          resolve(values)
        }).catch(e => {
          // _(e).forEach(item => {
          //   this.$message.error(h('span',
          //     { style: { 'whiteSpace': 'pre-wrap' } },
          //     fields[item.address].decoratorProps.label + "：" + _(item.messages)
          //   ))
          //   reject(e)
          // })
            this.$message.error(h('span',
              { style: { 'whiteSpace': 'pre-wrap' } },
              fields[e[0].address].decoratorProps.label + "：" + e[0].messages
            ))
            reject(e)
        })
      })
    }
  }
}
</script>
<style scoped>
/deep/ .required .ant-form-item-label label::before {
  display: inline-block;
  margin-right: 4px;
  color: #ff4d4f !important;
  font-size: 14px;
  font-family: SimSun, sans-serif;
  line-height: 1;
  content: '*';
}
</style>
