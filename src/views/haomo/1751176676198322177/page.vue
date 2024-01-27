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
                <hm-ant-bg-text text="* 为必填项" font-size="14px">
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
                      class="ele-639c0497-f403-49a8-9af0-c2702f4de651"
                    >
                    </hm-ant-input>
                  </div>
                  <div
                    class="ele-wrapper ele-wrapper-40fb2133-1fe9-4649-a1ad-0b1548ce893b"
                  >
                    <hm-ant-date-picker
                      value="undefined"
                      :is-range="false"
                      class="ele-40fb2133-1fe9-4649-a1ad-0b1548ce893b"
                    >
                    </hm-ant-date-picker>
                  </div>
                  <div
                    class="ele-wrapper ele-wrapper-f7592ab1-717b-4609-b229-eff4f560e4d1"
                  >
                    <hm-ant-date-picker
                      value="undefined"
                      :is-range="false"
                      class="ele-f7592ab1-717b-4609-b229-eff4f560e4d1"
                    >
                    </hm-ant-date-picker>
                  </div>
                  <div
                    class="ele-wrapper ele-wrapper-0fda3cd4-4142-42c1-b685-e00abc7558ac"
                  >
                    <hm-ant-date-picker
                      value="undefined"
                      :is-range="false"
                      class="ele-0fda3cd4-4142-42c1-b685-e00abc7558ac"
                    >
                    </hm-ant-date-picker>
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

export default {
  name: "NewActivity",
  components: {
    HmBgCard,
    HmAntIconText,
    HmAntBgText,
    HmAntInput,
    HmAntDatePicker,
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
}

.ele-wrapper-40fb2133-1fe9-4649-a1ad-0b1548ce893b {
  margin: 10px 10px 0 10px;
}

.ele-wrapper-f7592ab1-717b-4609-b229-eff4f560e4d1 {
  margin: 10px 10px 0 10px;
}

.ele-wrapper-0fda3cd4-4142-42c1-b685-e00abc7558ac {
  margin: 10px 10px 0 10px;
}

.ele-wrapper-message_2 {
  width: 50%;
}
</style>
