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
            </hm-bg-card>
          </div>
          <div
            class="ele-wrapper ele-wrapper-ca1b8251-6f2b-4645-9ebe-eb22f301054a"
          >
            <hm-bg-card
              width="100%"
              height="100%"
              border-radius=""
              box-shadow-v-shadow=""
              box-shadow-blur=""
              class="ele-ca1b8251-6f2b-4645-9ebe-eb22f301054a"
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
                </hm-bg-card>
              </div>
              <div
                class="ele-wrapper ele-wrapper-3618933a-f7d9-4673-905e-d343b61c547c"
              >
                <hm-bg-card
                  width="100%"
                  height="100%"
                  border-radius=""
                  box-shadow-v-shadow=""
                  box-shadow-blur=""
                  class="ele-3618933a-f7d9-4673-905e-d343b61c547c"
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

export default {
  name: "NewActivity",
  components: {
    HmBgCard,
  },
  data() {
    let self = this;
    return {};
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

.ele-wrapper-ca1b8251-6f2b-4645-9ebe-eb22f301054a {
  width: 100%;
}

.ele-wrapper-011df7de-b51d-49df-8693-f8313670d460 {
  width: 50%;
}

.ele-wrapper-3618933a-f7d9-4673-905e-d343b61c547c {
  width: 50%;
}
</style>
