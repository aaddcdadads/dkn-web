<template>
  <div>
    <HmLoopTabs :tabs="tabs">
      <template #default="{ item }">
        <div>{{ item.code }}</div>
        <div>{{ JSON.stringify(item.filterConfig.schema) }}</div>
      </template>
    </HmLoopTabs>
  </div>
</template>

<script>
import HmLoopTabs from "/@/components/built-in/layout/HmLoopTabs.vue";
export default {
  components: {
    HmLoopTabs,
  },
  data() {
    return {
      tabs: [
          {
            code: "task_course",
            name: "任务课程",
            foreignKey: "training_task_id",
            filterConfig: {
              schema: {
                type: "object",
                properties: {
                  form: {
                    type: "void",
                    "x-component": "Form",
                    "x-component-props": {
                      "wrapper-col": {
                        span: 14,
                      },
                      style: {
                        flexWrap: "wrap",
                        display: "flex",
                      },
                      "label-col": {
                        span: 4,
                      },
                    },
                    properties: {
                      qualifiedScore: {
                        type: "string",
                        "x-decorator": "FormItem",
                        "x-decorator-props": {
                          label: "合格分数",
                          name: "qualifiedScore",
                          style: {
                            width: "50%",
                          },
                        },
                        "x-component-props": {
                          title: "",
                        },
                        "x-component": "HmAntInput",
                      },
                      search: {
                        type: "void",
                        "x-component": "Button",
                        "x-component-props": {
                          type: "primary",
                          style: {
                            width: "80px",
                            marginLeft: "10px",
                          },
                          "@click": function (e) {
                            searchTaskCourse(self, null);
                          },
                        },
                        "x-content": "查询",
                      },
                      reset: {
                        type: "void",
                        "x-component": "Button",
                        "x-component-props": {
                          type: "primary",
                          ghost: true,
                          style: {
                            width: "80px",
                            marginLeft: "20px",
                          },
                          "@click": function (e) {
                            self.$refs.taskCourseForm.reset();
                          },
                        },
                        "x-content": "重置",
                      },
                    },
                  },
                },
              },
            },
            formConfig: {
              schema: {
                type: "object",
                properties: {
                  form: {
                    type: "void",
                    "x-component": "Form",
                    "x-component-props": {
                      "wrapper-col": {
                        span: 14,
                      },
                      style: {
                        flexWrap: "wrap",
                        display: "flex",
                      },
                      "label-col": {
                        span: 8,
                      },
                    },
                    properties: {
                      qualifiedScore: {
                        type: "string",
                        "x-decorator": "FormItem",
                        "x-decorator-props": {
                          label: "合格分数",
                          name: "qualifiedScore",
                          style: {
                            width: "50%",
                          },
                          class: [""],
                        },
                        "x-component-props": {
                          title: "",
                        },
                        "x-component": "HmAntInput",
                      },
                      submit: {
                        type: "void",
                        "x-component": "Button",
                        "x-component-props": {
                          type: "primary",
                          style: {
                            width: "80px",
                            marginLeft: "10px",
                          },
                          "@click": function (e) {
                            submitTaskCourse(self, null);
                          },
                        },
                        "x-content": "提交",
                      },
                      reset: {
                        type: "void",
                        "x-component": "Button",
                        "x-component-props": {
                          type: "primary",
                          ghost: true,
                          style: {
                            width: "80px",
                            marginLeft: "20px",
                          },
                          "@click": function (e) {
                            self.$refs.taskCourseForm.reset();
                          },
                        },
                        "x-content": "重置",
                      },
                    },
                  },
                },
              },
            },
            tableConfig: {
              columns: [
                {
                  title: "合格分数",
                  dataIndex: "qualifiedScore",
                  key: "qualifiedScore",
                },
                {
                  slots: {
                    customRender: "action",
                  },
                  title: "操作",
                  key: "action",
                },
              ],
            },
            detailFormConfig: {
              schema: {
                type: "object",
                properties: {
                  form: {
                    type: "void",
                    "x-component": "Form",
                    "x-component-props": {
                      "wrapper-col": {
                        span: 14,
                      },
                      style: {
                        flexWrap: "wrap",
                        display: "flex",
                      },
                      "label-col": {
                        span: 8,
                      },
                    },
                    properties: {
                      qualifiedScore: {
                        type: "string",
                        "x-decorator": "FormItem",
                        "x-decorator-props": {
                          label: "合格分数",
                          name: "qualifiedScore",
                          style: {
                            width: "50%",
                          },
                          class: [""],
                        },
                        "x-component-props": {
                          title: "",
                        },
                        "x-component": "Span",
                      },
                      submit: {
                        type: "void",
                        "x-component": "Button",
                        "x-component-props": {
                          type: "primary",
                          style: {
                            width: "80px",
                            marginLeft: "10px",
                          },
                          "@click": function (e) {
                            submitTaskCourse(self, null);
                          },
                        },
                        "x-content": "提交",
                      },
                      reset: {
                        type: "void",
                        "x-component": "Button",
                        "x-component-props": {
                          type: "primary",
                          ghost: true,
                          style: {
                            width: "80px",
                            marginLeft: "20px",
                          },
                          "@click": function (e) {
                            self.$refs.taskCourseForm.reset();
                          },
                        },
                        "x-content": "重置",
                      },
                    },
                  },
                },
              },
            },
          },
        ]
    };
  },
  methods: {
  },
};
</script>

<style>
</style>