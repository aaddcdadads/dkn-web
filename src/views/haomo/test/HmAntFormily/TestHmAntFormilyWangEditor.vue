<template>
  <div>
    <HmAntFormily ref="test" :schema="schema" v-model:value="values"></HmAntFormily>
    <a-button @click="validate">validate</a-button>
    <a-button @click="reset">reset</a-button>
    <a-button @click="getValues">getValues</a-button>
    <a-button @click="setValues">setValues</a-button>
    <a-button @click="changeSelectOption">changeSelectOption</a-button>
  </div>
</template>
<script>
import HmAntFormily from '/@/components/built-in/jeecg/HmAntFormily.vue'
export default {
  components: {
    HmAntFormily
  },
  data() {
    return {
      schema: {
          type: "object",
          properties: {
            form: {
              type: "void",
              "x-component": "Form",
              "x-component-props": {
                style: {
                  display: "flex",
                  flexWrap: "wrap",
                },
                "label-col": {
                  span: 7,
                },
                "wrapper-col": {
                  span: 14,
                },
              },
              properties: {
                editor: {
                  type: "string",
                  default: "<p>hello word\n毫末科技</p>",
                  title: "富文本编辑器",
                  "x-decorator": "FormItem",
                  "x-decorator-props": {
                    style: {
                      width: "100%",
                    },
                    "label-col": 2,
                    "wrapper-col": 14,
                  },
                  "x-component": "HmWangEditor",
                  "x-component-props": {},
                },
              },
            },
          },
        },
      values: {}
    }
  },
  created(){
    this.testValue = 'testValue';
  },
  methods:{
    reset(){
      this.$refs.test.reset()
    },
    validate(){
      this.$refs.test.validate().then(res => {
        console.log('通过', res)
      }).catch(e => {
        console.log('未通过', e)
      })
    },
    getValues(){
      console.log('values', this.$getFilterValues(this.values, this.$refs.test.cSchema))
    },
    setValues(){
      let values = {
        editor:`<p>测试设置值</p>`
      }
      this.values = values
    },
    changeSelectOption(){
      this.schema.properties.form.properties.editor.default = `<p>测试</p>`
    }
  }
}
</script>