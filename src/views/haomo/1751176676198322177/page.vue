<template>
  <div class="page card">
    <div class="page-wrapper">
      <div class="ele-wrapper ele-wrapper-e37fdb24-4953-4f7d-af46-b1aa9d4f1737">
        <hm-bg-card
          width="100%"
          height="100%"
          border-radius=""
          box-shadow-v-shadow=""
          box-shadow-blur=""
          class="ele-e37fdb24-4953-4f7d-af46-b1aa9d4f1737"
        >
          <div
            class="ele-wrapper ele-wrapper-e3d70a59-ef42-4c89-af9c-c1b6fe4ddb0f"
          >
            <hm-bg-card
              width="100%"
              height="100%"
              border-radius=""
              box-shadow-v-shadow=""
              box-shadow-blur=""
              class="ele-e3d70a59-ef42-4c89-af9c-c1b6fe4ddb0f"
            >
              <div
                class="ele-wrapper ele-wrapper-80d9b125-92bb-46b5-87b7-d8b4b451d860"
              >
                <hm-ant-icon-text
                  text="创建活动"
                  icon="fa fa-tasks"
                  font-size="14px"
                >
                </hm-ant-icon-text>
              </div>
              <div
                class="ele-wrapper ele-wrapper-230f0090-9b76-4e5d-9556-f91759f40cf8"
              >
                <hm-ant-bg-text
                  text="* 为必填项"
                  font-size="14px"
                  color="#999999"
                >
                </hm-ant-bg-text>
              </div>
            </hm-bg-card>
          </div>
          <div class="ele-wrapper ele-wrapper-message_1">
            <hm-bg-card
              ref="message_1"
              width="100%"
              height="100%"
              border-radius=""
              box-shadow-v-shadow=""
              box-shadow-blur=""
              class="ele-message_1"
            >
              <div
                class="ele-wrapper ele-wrapper-011df7de-b51d-49df-8693-f8313670d460"
              >
                <hm-bg-card
                  width="100%"
                  height="100%"
                  border-radius=""
                  box-shadow-v-shadow=""
                  box-shadow-blur=""
                  class="ele-011df7de-b51d-49df-8693-f8313670d460"
                >
                  <div
                    class="ele-wrapper ele-wrapper-639c0497-f403-49a8-9af0-c2702f4de651"
                  >
                    <hm-ant-input
                      value=""
                      title="* 活动名称"
                      :label-width="80"
                      class="ele-639c0497-f403-49a8-9af0-c2702f4de651"
                    >
                    </hm-ant-input>
                  </div>
                  <div
                    class="ele-wrapper ele-wrapper-40fb2133-1fe9-4649-a1ad-0b1548ce893b"
                  >
                    <hm-ant-date-picker
                      title="* 活动周期"
                      value="undefined"
                      :is-range="false"
                      :label-width="80"
                      class="ele-40fb2133-1fe9-4649-a1ad-0b1548ce893b"
                    >
                    </hm-ant-date-picker>
                  </div>
                  <div
                    class="ele-wrapper ele-wrapper-f7592ab1-717b-4609-b229-eff4f560e4d1"
                  >
                    <hm-ant-date-picker
                      title="* 报名截止"
                      value="undefined"
                      :is-range="false"
                      :label-width="80"
                      class="ele-f7592ab1-717b-4609-b229-eff4f560e4d1"
                    >
                    </hm-ant-date-picker>
                  </div>
                  <div
                    class="ele-wrapper ele-wrapper-0fda3cd4-4142-42c1-b685-e00abc7558ac"
                  >
                    <hm-ant-date-picker
                      title="* 核销截止"
                      value="undefined"
                      :is-range="false"
                      :label-width="80"
                      class="ele-0fda3cd4-4142-42c1-b685-e00abc7558ac"
                    >
                    </hm-ant-date-picker>
                  </div>
                  <div
                    class="ele-wrapper ele-wrapper-b8b97a54-ee39-43be-9789-7822eae7f5f8"
                  >
                    <hm-ant-radio
                      value="undefined"
                      title="* 活动状态"
                      :label-width="80"
                      :craido-l-ist="[
                        { state: false, value: '启用' },
                        { state: true, value: '禁用' },
                      ]"
                      class="ele-b8b97a54-ee39-43be-9789-7822eae7f5f8"
                    >
                    </hm-ant-radio>
                  </div>
                  <div
                    class="ele-wrapper ele-wrapper-824a7f59-7158-4b84-a954-01cbeb3c4180"
                  >
                    <hm-bg-card
                      width="100%"
                      height="100%"
                      border-radius=""
                      box-shadow-v-shadow=""
                      box-shadow-blur=""
                      class="ele-824a7f59-7158-4b84-a954-01cbeb3c4180"
                    >
                      <div
                        class="ele-wrapper ele-wrapper-42f5eb5a-31b3-4f7a-8ddd-9bb948ae5a17"
                      >
                        <hm-ant-bg-text
                          text="活动项目设置（至少一个）"
                          font-size="14px"
                          class="ele-42f5eb5a-31b3-4f7a-8ddd-9bb948ae5a17"
                        >
                        </hm-ant-bg-text>
                      </div>
                      <div
                        class="ele-wrapper ele-wrapper-192a1e25-4895-4501-971d-69ddf1ae5a12"
                      >
                        <hm-ant-button
                          text="添加"
                          :type="'primary'"
                          icon="fa fa-plus"
                          class="ele-192a1e25-4895-4501-971d-69ddf1ae5a12"
                        >
                        </hm-ant-button>
                      </div>
                      <div
                        class="ele-wrapper ele-wrapper-678d6f52-6548-4f95-b813-d079ff38bb6f"
                      >
                        <hm-bg-card
                          width="100%"
                          height="100%"
                          border-radius=""
                          box-shadow-v-shadow=""
                          box-shadow-blur=""
                          class="ele-678d6f52-6548-4f95-b813-d079ff38bb6f"
                        >
                          <div
                            class="ele-wrapper ele-wrapper-25b5309c-c34c-4da3-a7c0-afa25d079608"
                          >
                            <hm-ant-table
                              :columns="[
                                {
                                  title: '项目费用',
                                  dataIndex: 'name',
                                  key: 'name',
                                  width: 100,
                                },
                                {
                                  title: '活动项目名称',
                                  dataIndex: 'age',
                                  key: 'age',
                                  width: 90,
                                },
                                {
                                  title: '项目简历',
                                  dataIndex: 'address',
                                  key: 'address',
                                  ellipsis: true,
                                  width: 80,
                                },
                                {
                                  title: '排序',
                                  dataIndex: 'sexual',
                                  key: 'sexual',
                                  ellipsis: true,
                                  width: 50,
                                },
                                {
                                  title: '操作',
                                  key: 'action',
                                  slots: { customRender: 'action' },
                                  width: 100,
                                },
                              ]"
                              :data="[
                                {
                                  key: '1',
                                  name: '¥0',
                                  age: '',
                                  address: '',
                                  sexual: '',
                                  school: '',
                                },
                                {
                                  key: '2',
                                  name: '¥ 29.9',
                                  age: '',
                                  address: '',
                                  sexual: '',
                                  school: '',
                                },
                              ]"
                              :pagination-hidden="true"
                              :actions="[
                                {
                                  name: '编辑',
                                  callback:
                                    'function (item) {\n                            console.log(&quot;点击编辑: &quot;, item);\n                        }',
                                  type: 'link',
                                },
                                {
                                  name: '删除',
                                  callback:
                                    'function (item) {\n                            console.log(&quot;点击删除: &quot;, item);\n                        }',
                                  type: 'link',
                                },
                              ]"
                              :row-class-name="{}"
                            >
                            </hm-ant-table>
                          </div>
                        </hm-bg-card>
                      </div>
                    </hm-bg-card>
                  </div>
                </hm-bg-card>
              </div>
              <div class="ele-wrapper ele-wrapper-message_2">
                <hm-bg-card
                  ref="message_2"
                  width="100%"
                  height="100%"
                  border-radius=""
                  box-shadow-v-shadow=""
                  box-shadow-blur=""
                  class="ele-message_2"
                >
                </hm-bg-card>
              </div>
            </hm-bg-card>
          </div>
        </hm-bg-card>
      </div>
    </div>
  </div>
</template>

<script>
import { h } from "vue";
import HmBgCard from "/@/components/built-in/layout/HmBgCard.vue";
import HmAntIconText from "/@/components/built-in/jeecg/HmAntIconText.vue";
import HmAntBgText from "/@/components/built-in/jeecg/HmAntBgText.vue";
import HmAntInput from "/@/components/built-in/jeecg/HmAntInput.vue";
import HmAntDatePicker from "/@/components/built-in/jeecg/HmAntDatePicker.vue";
import HmAntRadio from "/@/components/built-in/jeecg/HmAntRadio.vue";
import HmAntButton from "/@/components/built-in/jeecg/HmAntButton.vue";
import HmAntTable from "/@/components/built-in/jeecg/HmAntTable.vue";

export default {
  name: "NewActivity",
  components: {
    HmBgCard,
    HmAntIconText,
    HmAntBgText,
    HmAntInput,
    HmAntDatePicker,
    HmAntRadio,
    HmAntButton,
    HmAntTable,
  },
  data() {
    let self = this;
    return {
      "639c0497-f403-49a8-9af0-c2702f4de651": {
        value: "",
      },
      "40fb2133-1fe9-4649-a1ad-0b1548ce893b": {
        value: null,
      },
      "f7592ab1-717b-4609-b229-eff4f560e4d1": {
        value: null,
      },
      "0fda3cd4-4142-42c1-b685-e00abc7558ac": {
        value: null,
      },
      "b8b97a54-ee39-43be-9789-7822eae7f5f8": {
        value: null,
        craidoLIst: [
          {
            state: false,
            value: "启用",
          },
          {
            state: true,
            value: "禁用",
          },
        ],
      },
    };
  },
  watch: {},
  methods: {},
};
</script>

<style lang="less" scoped>
.page {
}

.ele-wrapper-e37fdb24-4953-4f7d-af46-b1aa9d4f1737 {
  width: 100%;
}

.ele-wrapper-e3d70a59-ef42-4c89-af9c-c1b6fe4ddb0f {
  width: 100%;
  border-bottom: 1px solid #999999;
}

.ele-wrapper-message_1 {
  width: 100%;
}

.ele-wrapper-011df7de-b51d-49df-8693-f8313670d460 {
  width: 50%;
}

.ele-wrapper-639c0497-f403-49a8-9af0-c2702f4de651 {
  margin: 10px 10px 0 10px;
  display: block;
}

.ele-wrapper-40fb2133-1fe9-4649-a1ad-0b1548ce893b {
  margin: 10px 10px 0 10px;
  display: block;
}

.ele-wrapper-f7592ab1-717b-4609-b229-eff4f560e4d1 {
  margin: 10px 10px 0 10px;
  display: block;
}

.ele-wrapper-0fda3cd4-4142-42c1-b685-e00abc7558ac {
  margin: 10px 10px 0 10px;
  display: block;
}

.ele-wrapper-b8b97a54-ee39-43be-9789-7822eae7f5f8 {
  margin: 10px 10px 0 10px;
}

.ele-wrapper-824a7f59-7158-4b84-a954-01cbeb3c4180 {
  width: 100%;
}

.ele-wrapper-42f5eb5a-31b3-4f7a-8ddd-9bb948ae5a17 {
  border-left: 3px solid #0079fe;
}

.ele-wrapper-192a1e25-4895-4501-971d-69ddf1ae5a12 {
  margin-left: 5px;
}

.ele-wrapper-678d6f52-6548-4f95-b813-d079ff38bb6f {
  width: 100%;
}

.ele-wrapper-message_2 {
  width: 50%;
}
</style>
