<template>
  <a-collapse v-model:activeKey="cActiveKey" :bordered="false" ghost class="page">
    <a-collapse-panel v-for="(item, index) in cList" :key="index" :header="getTitle(item)">
      <div
        v-for="(titleItem, titleIndex) in item.titleList"
        :key="titleIndex"
        class="flex-col titleListBox"
      >
        <div class="flex-start startBox">
          <div class="flex-row">
            <span>{{titleItem.titleId}}、</span>
            <span class="html-code" v-html="titleItem.title"></span>
          </div>
          <div v-if="item.headerTypes == '3' || item.headerTypes == '4'" class="flex-row">
            <span>答：</span>
            <HmTinyMce
              style="width: 100%;"
              @editorChange="editorChange($event, index, titleIndex)"
              v-model="titleItem.stuAnswer"
            />
          </div>
          <a-radio-group
            class="flex-col radiolist"
            v-if="item.headerTypes == '0' || item.headerTypes == '2'"
            :name="titleItem.id"
            v-model:value="titleItem.stuAnswer"
            @change="radioChange($event, titleItem)"
          >
            <a-radio
              v-for="(option, optionIndex) in titleItem.titleoption"
              :key="optionIndex"
              :value="optionIndex"
            >
              <span>{{optionIndex}}. </span>
              <span class="html-code" v-html="option"></span>
            </a-radio>
          </a-radio-group>
          <a-checkbox-group
            class="flex-col checkboxlist"
            v-if="item.headerTypes == '1'"
            :name="titleItem.id"
            v-model:value="titleItem.stuAnswer"
            @change="checkboxChange($event, titleItem)"
          >
            <a-checkbox
              v-for="(option, optionIndex) in titleItem.titleoption"
              :key="optionIndex"
              :value="optionIndex"
            >
              <span>{{optionIndex}}. </span>
              <span class="html-code" v-html="option"></span>
            </a-checkbox>
          </a-checkbox-group>
          <div v-if="titleIndex != item.titleList.length - 1" class="hrBox">
            <a-divider />
          </div>
        </div>
      </div>
    </a-collapse-panel>
  </a-collapse>
</template>
<script>
import HmTinyMce from "/@/components/built-in/jeecg/HmTinyMce.vue";
import { cloneDeep } from "lodash";

export default {
  name: "HmOnlineExamination",
  components: { HmTinyMce },
  props: {
    /**
     * 默认展开
     * @model
     */
    activeKey: {
      type: Array,
      default: function() {
        return [0, 1, 2, 3];
      }
    },
    /**
     * 数据项
     */
    list: {
      type: Array,
      default: function() {
        return [
          {
            id: "1",
            headerTitle: "单选题",
            headerTypes: "0",
            titleList: [
              {
                //第几道题
                titleId: "1",
                //题目标题
                title: "<p>题目题目,这个是很长的题目来测试换行</p>",
                //题目选项
                titleoption: {
                  A: "<p>题目题目,这个是很长的题目来测试换行</p>",
                  B: "321",
                  C: "321",
                  D: "321"
                },
                //标准答案
                answer: "A",
                //考生答案
                stuAnswer: "",
                //分数
                score: 0,
                //分值
                fraction: 5,
                //备注
                remark: "",
                //未使用项--(解释，说明)
                explanation: "1234"
              },
              {
                titleId: "2",
                title: "题目题目2",
                titleoption: {
                  A: "321",
                  B: "321",
                  C: "321",
                  D: "321"
                },
                answer: "B",
                stuAnswer: "",
                score: 5,
                fraction: 5,
                remark: "",
                explanation: ""
              }
            ]
          },
          {
            id: "2",
            headerTitle: "多选题",
            headerTypes: "1",
            titleList: [
              {
                titleId: "3",
                title: "题目题目3",
                titleoption: {
                  A: "<p>题目题目,这个是很长的题目来测试换行</p>",
                  B: "321",
                  C: "321",
                  D: "321"
                },
                answer: ["A", "D"],
                stuAnswer: [],
                score: 10,
                fraction: 10,
                remark: "",
                explanation: "123"
              },
              {
                titleId: "4",
                title: "题目题目4",
                titleoption: {
                  A: "321",
                  B: "321",
                  C: "321",
                  D: "321"
                },
                answer: ["A", "D"],
                stuAnswer: [],
                score: 0,
                fraction: 10,
                remark: "",
                explanation: "123"
              }
            ]
          },
          {
            id: "3",
            headerTitle: "问答题",
            headerTypes: "3",
            titleList: [
              {
                titleId: "4",
                title: "题目题目3",
                answer: "",
                stuAnswer: "",
                score: 10,
                fraction: 10,
                remark: "",
                explanation: "123"
              }
            ]
          },
          {
            id: "4",
            headerTitle: "代码题",
            headerTypes: "4",
            titleList: [
              {
                titleId: "5",
                title: "写代码写代码写代码写代码写代码写代码写代码5",
                answer: "",
                stuAnswer: "",
                score: 10,
                fraction: 10,
                remark: "",
                explanation: "123"
              }
            ]
          }
        ];
      }
    }
  },
  watch: {
    list: {
      handler: function(value, oldValue) {
        this.cList = value;
      },
      deep: true
    },
    activeKey(value) {
      this.cActiveKey = value;
    }
  },
  mounted() {
    this.cList = this.list;
    this.cActiveKey = this.activeKey;
  },
  data() {
    return {
      cList: [],
      charList: [],
      cActiveKey: []
    };
  },
  methods: {
    char() {
      for (var i = 0; i < 26; i++) {
        this.charList.push(String.fromCharCode(65 + i));
      }
    },
    getTitle(e) {
      let title = e.headerTitle;
      let titleNum = e.titleList.length;
      let totalScore = 0;
      e.titleList.forEach(item => {
        totalScore += item.fraction;
      });
      let setTitle = title + "(共" + titleNum + "题,合计" + totalScore + "分)";
      return setTitle;
    },
    radioChange(e, item) {
      this.$emit("radioChange", e, item);
      // console.log("radioChange", e.target,item);
    },
    checkboxChange(e, item) {
      this.$emit("checkboxChange", e, item);
      // console.log("checkboxChange", e,item);
    },
    editorChange(e, index, titleIndex) {
      let list = cloneDeep(this.cList);
      // console.log(e, index, titleIndex, list[index]);
      // this.cList = list[index].titleList[titleIndex].answer = e
      this.$emit("editorChange", e, index, titleIndex);
    }
  },
  created() {
    this.char();
  }
};
</script>
<style scoped>
.flex-col {
  display: flex;
  flex-direction: column;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

.page {
  width: 100%;
}
.page /deep/ .ant-collapse-header {
  font-size: 16px;
  font-weight: 600;
}
.page /deep/ .ant-collapse-content {
  background-color: #fafafa !important;
}
.titleListBox {
  flex-wrap: wrap;
  padding: 0px;
}
.titleListBox .startBox {
  font-weight: 400;
  font-size: 14px;
}
.radiolist,
.checkboxlist {
  margin-top: 16px;
}

.titleListBox /deep/ .ant-radio-wrapper,
.titleListBox /deep/ .ant-checkbox-wrapper {
  width: calc(100% - 14px);
  min-height: 24px;
  margin-left: 14px;
  margin-top: 6px;
  display: flex;
  align-items: flex-start;
}
.titleListBox /deep/ .ant-radio-wrapper span:last-child,
.titleListBox /deep/ .ant-checkbox-wrapper span:last-child{
  display: flex;
}
/* input框与文字大致对齐 */
.titleListBox /deep/ .ant-radio,
.titleListBox /deep/ .ant-checkbox {
  padding: 3px;
}
/* 清除点击时伪类的边框 */
.titleListBox /deep/ .ant-checkbox-checked::after,
.titleListBox /deep/ .ant-radio-checked::after {
  border: none !important;
}
/* html p标签换行 */
.html-code {
  /* display: inline-flex; */
  align-items: flex-start;
  word-break: break-all;
  white-space: pre-line;
  overflow: auto;
}
/* 消除p标签下边距 */
.html-code /deep/ p {
  margin: 0;
}
/* 分割线线 */
.hrBox {
  width: 100%;
}
</style>