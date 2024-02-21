<template>
  <div class="page card">
    <div class="page-wrapper">
      <div class="ele-wrapper ele-wrapper-060ae4dc-3f83-4f47-940f-88c27ee8a4a1">
        <hm-bg-card width="1366" height="700">
          <div
            class="ele-wrapper ele-wrapper-613ac440-92b9-4ef9-a0d4-befbfc6c4de3"
          >
            <hm-ant-button @click="onEle613Ac44092B94Ef9A0D4Befbfc6C4De3Click">
            </hm-ant-button>
          </div>
          <div class="ele-wrapper ele-wrapper-textBook">
            <hm-markdown
              ref="textBook"
              :source="textBook.source"
              class="ele-textBook"
            >
            </hm-markdown>
          </div>
        </hm-bg-card>
      </div>
    </div>
  </div>
</template>

<script>
import { h } from "vue";
import HmBgCard from "/@/components/built-in/layout/HmBgCard.vue";
import HmAntButton from "/@/components/built-in/jeecg/HmAntButton.vue";
import HmMarkdown from "/@/components/built-in/jeecg/HmMarkdown.vue";

export default {
  components: {
    HmBgCard,
    HmAntButton,
    HmMarkdown,
  },
  data() {
    let self = this;
    return {
      textBook: {
        source: "# 标题\\n## 1 标题1\\n## 2 标题2",
      },
      diseaseSelect: {},
    };
  },
  methods: {
    onEle613Ac44092B94Ef9A0D4Befbfc6C4De3Click() {
      let url = window.location.origin + "/customer-api/tcmlapi/search";
      let params = {
        Result: `*${this.diseaseSelect.value}*`,
      };
      this.$postAction(url, params).then((resp) => {
        console.log("病例:", resp);
        let item = resp.Result;
        console.log("item", item);

        this.textBook.source = item;
      });
    },
  },
};
</script>

<style scoped>
.page {
}

.ele-wrapper-textBook {
  width: 100%;
  height: 500px;
  text-align: left;
  overflow: auto;
}
</style>
