<template>
  <a-collapse v-model:activeKey="cActiveKey" :bordered="false" ghost class="page">
    <a-collapse-panel v-for="(item, index) in cList" :key="index" :header="getTitle(item)">
      <div
        v-for="(titleItem, titleIndex) in item.titleList"
        :key="titleIndex"
        :id="titleItem.id"
        class="flex-row titleListBox"
      >
        <div class="flex-row startBox">
          <div
            :class="
              echartState && item.headerTypes != '3' && item.headerTypes != '4'
                ? 'flex-col startEchart'
                : 'flex-col startEchart textStartEchart'
            "
          >
            <div class="flex-row">
              <span>{{titleItem.titleId}}、</span>
              <span class="html-code" v-html="titleItem.title"></span>
            </div>
            <a-radio-group
              class="flex-col radiolist"
              v-if="item.headerTypes == '0' || item.headerTypes == '2'"
              :name="titleItem.id"
              :value="cRolePowerOption['answer']?titleItem.answer:titleItem.stuAnswer"
            >
              <a-radio
                v-for="(option, optionIndex) in titleItem.titleoption"
                :key="optionIndex"
                :value="optionIndex"
              >
                <span>{{optionIndex}}.</span>
                <span class="html-code" v-html="option"></span>
              </a-radio>
            </a-radio-group>
            <a-checkbox-group
              class="flex-col checkboxlist"
              v-if="item.headerTypes == '1'"
              :name="titleItem.id"
              :value="cRolePowerOption['answer']?titleItem.answer:titleItem.stuAnswer"
            >
              <a-checkbox
                v-for="(option, optionIndex) in titleItem.titleoption"
                :key="optionIndex"
                :value="optionIndex"
              >
                <span>{{optionIndex}}.</span>
                <span class="html-code" v-html="option"></span>
              </a-checkbox>
            </a-checkbox-group>
            <div 
              v-if="(item.headerTypes == '3' || item.headerTypes == '4') && !cRolePowerOption.answer"
              class="flex-row textList">
              <span>学生答案：</span>
              <span class="html-code" v-html="titleItem.stuAnswer"></span>
            </div>
          </div>
          <div
            :class="
              echartState && item.headerTypes != '3' && item.headerTypes != '4'
                ? 'flex-end endEchart'
                : 'flex-end endEchart textEndEchart'
            "
          >
            <ECharts
              v-if="echartState"
              :ref="'chart' + titleItem.titleId"
              :option="titleItem.option"
            />
          </div>
          <div class="flex-col explainText">
            <div class="flex-row" v-if="cRolePowerOption.avgScore">
              <span>平均得分：</span>
              <span>{{ titleItem.avgScore }}</span>
            </div>
            <div class="flex-row" v-if="item.headerTypes != '3' && item.headerTypes != '4' && !cRolePowerOption.answer">
              <span>学生答案：</span>
              <span
                v-show="item.headerTypes == '0' || item.headerTypes == '2'"
              >{{ titleItem.stuAnswer }}</span>
              <span
                v-show="item.headerTypes == '1'"
                v-for="(stuAnswer,stuAnswerIndex) in titleItem.stuAnswer"
                :key="stuAnswerIndex"
              >{{ stuAnswer }}</span>
            </div>
            <div class="flex-row">
              <span>标准答案：</span>
              <span v-if="item.headerTypes == '0' || item.headerTypes == '2'">{{ titleItem.answer }}</span>
              <span v-if="item.headerTypes == '1'">
                <span
                  v-for="(answer,answerIndex) in titleItem.answer"
                  :key="answerIndex"
                >{{ answer }}</span>
              </span>
              <span v-if="item.headerTypes == '3' || item.headerTypes == '4'">
                <span class="html-code" v-html="titleItem.answer"></span>
              </span>
            </div>
            <div class="flex-row">
              <span>解析说明：</span>
              <span>{{ titleItem.explanation }}</span>
            </div>
          </div>
        </div>
        <div class="flex-end endBox">
          <span>
            得分：
            <a-input-number
              :disabled="cRolePowerOption.disabled"
              v-model:value="titleItem.score"
              size="small"
              :min="0"
              :max="titleItem.fraction"
              @change="scoreBlur(item, titleItem, titleItem.score)"
            />
          </span>
          <span>满分：{{ titleItem.fraction }}分</span>
          <span>
            备注：
            <a-textarea
              :disabled="cRolePowerOption.disabled"
              :value="titleItem.remark"
              size="small"
              placeholder="请输入"
              :rows="4"
              @blur="remarkBlur(item, titleItem, titleItem.remark)"
            />
          </span>
        </div>
        <div v-if="titleIndex != item.titleList.length - 1" class="hrBox">
          <a-divider />
        </div>
      </div>
    </a-collapse-panel>
  </a-collapse>
</template>
<script>
import * as echarts from "echarts";
import { h } from "vue";
import { message } from "ant-design-vue";
import { createComponent } from "echarts-for-vue";
export default {
  components: {
    ECharts: createComponent({ echarts, h }) // 作为组件使用
  },
  props: {
    /**
     * 默认展开
     */
    activeKey: {
      type: Array,
      default: function() {
        return [2];
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
            id: "单选题",
            headerTitle: "单选题", // 大题目
            // 0:单选 1:判断  2:多选  3:填空  4:问答
            headerTypes: "0", //数据库字段
            titleList: [
              // 题目
              {
                titleId: "1", // 题目序号
                title: "题目题目1", // 小题目
                titleoption: {
                  A: "测试比较长的选项的换行的问题",
                  B: "322",
                  C: "323",
                  D: "测试标准答案为空时,算分是否返回error"
                }, // 选项
                stuAnswer: "", // 学生答案
                answer: "", // 标准答案
                explanation: "解析说明", // 解析说明
                score: 11, // 得分
                fraction: 10, // 题目-分值
                remark: "备注", // 备注
                option: {
                  legend: {
                    orient: "horizontal",
                    left: "center",
                    bottom: "bottom"
                  },
                  label: {
                    formatter: "{b}:{d}%"
                  },
                  tooltip: {
                    trigger: "item",
                    formatter: "选择{b}有{c}人<br/>占{d}%"
                  },
                  series: [
                    {
                      type: "pie",
                      radius: "45%",
                      data: [
                        { value: 123, name: "A" },
                        { value: 735, name: "B" },
                        { value: 580, name: "C" },
                        { value: 484, name: "D" }
                      ]
                    }
                  ]
                }
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
                stuAnswer: "D",
                answer: "C",
                score: 0,
                avgScore: 1.4,
                fraction: 5,
                remark: "",
                explanation: "123456",
                option: {
                  legend: {
                    orient: "horizontal",
                    left: "center",
                    bottom: "bottom"
                  },
                  series: [
                    {
                      type: "pie",
                      radius: "50%",
                      data: [
                        { value: 448, name: "A1" },
                        { value: 735, name: "B" },
                        { value: 580, name: "C" },
                        { value: 484, name: "D" }
                      ]
                    }
                  ]
                }
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
                  A: "321",
                  B: "321",
                  C: "321",
                  D: "321"
                },
                stuAnswer: ["A", "D"],
                answer: ["A", "D"],
                score: 0,
                avgScore: 8.2,
                fraction: 10,
                remark: "",
                explanation: "123",
                option: {
                  legend: {
                    orient: "horizontal",
                    left: "center",
                    bottom: "bottom"
                  },
                  series: [
                    {
                      type: "pie",
                      data: [
                        { value: 448, name: "A2" },
                        { value: 735, name: "B" },
                        { value: 580, name: "C" },
                        { value: 484, name: "D" }
                      ]
                    }
                  ]
                }
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
                stuAnswer: ["A", "D", "C"],
                answer: ["A", "C", "D"],
                score: null,
                avgScore: 1.5,
                fraction: 10,
                remark: "",
                explanation: "123",
                option: {
                  legend: {
                    orient: "horizontal",
                    left: "center",
                    bottom: "bottom"
                  },
                  series: [
                    {
                      type: "pie",
                      data: [
                        { value: 448, name: "A3" },
                        { value: 735, name: "B" },
                        { value: 580, name: "C" },
                        { value: 484, name: "D" }
                      ]
                    }
                  ]
                }
              }
            ]
          },
          {
            id: "3",
            headerTitle: "问答题",
            headerTypes: "3",
            titleList: [
              {
                titleId: "5",
                title: "题目题目5",
                stuAnswer: "12211x\n3rerre\terrweewq",
                answer: "12211x\n3rerre\terrweewq",
                score: null,
                avgScore: 8.2,
                fraction: 10,
                remark: "",
                explanation: "123"
              }
            ]
          }
        ];
      }
    },
    /**
     * 图表模式
     */
    echartState: {
      type: Boolean,
      default: false
    },
    /**
     * 图表宽度
     */
    echartWidth: {
      type: String,
      default: "360px"
    },
    /**
     * 图表高度
     */
    echartHeight: {
      type: String,
      default: "200px"
    },
    /**
     * 附加信息宽度
     */
    infoWidth: {
      type: String,
      default: "164px"
    },
    /**
     * 角色权限显示
     */
    rolePowerOption: {
      type: Object,
      default: function() {
        return {
          remark:"无效字段，只为解释说明:标准答案\平均分\禁用打分",
          remark1: "学生查看试卷[false,false,true]",
          remark2: "老师查看试卷[true,true,true]",
          remark3: "老师批改试卷[false,false,false]",
          answer: false,//标准答案
          avgScore: false,//平均分
          disabled: false //禁用打分
        };
      }
    }
  },
  watch: {
    list: {
      handler: function(value, oldValue) {
        this.cList = this.getScore(value);
      },
      deep: true
    },
    activeKey(value) {
      this.cActiveKey = value;
    },
    echartWidth(value) {
      this.cEchartWidth = this.getCssUnit(value);
    },
    infoWidth(value) {
      this.cInfoWidth = this.getCssUnit(value);
    },
    echartHeight(value) {
      this.cEchartHeight = this.getCssUnit(value);
    },
    rolePowerOption(value) {
      this.cRolePowerOption = value;
    }
  },
  mounted() {
    this.cList = this.getScore(this.list);
    this.cActiveKey = this.activeKey;
    this.cEchartWidth = this.getCssUnit(this.echartWidth);
    this.cInfoWidth = this.getCssUnit(this.infoWidth);
    this.cEchartHeight = this.getCssUnit(this.echartHeight);
    this.cRolePowerOption = this.rolePowerOption;
  },
  methods: {
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    },
    // 得到大标题
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
    // 算题分
    getScore(arr) {
      //循环...arr
      arr.forEach(item => {
        // 0:单选 1:判断  2:多选  3:填空  4:问答
        // 排除填空、问答题
        if (item.headerTypes != "3" && item.headerTypes != "4") {
          for (let i = 0; i < item.titleList.length; i++) {
            let temp = item.titleList[i];
            if (!temp.answer || temp.answer.length == 0) {
              //   console.log("error,答案为空", temp.titleId);
              temp.answer = "error";
              temp.score = "0";
              continue;
            } else {
              //筛选单选、判断题
              if (item.headerTypes != "1") {
                // 答案相等 返回分值,反之为0
                temp.stuAnswer == temp.answer
                  ? (temp.score = temp.fraction)
                  : 0;
              } else {
                // 多选 算分
                if (temp.stuAnswer.length != temp.answer.length) {
                  temp.score = 0;
                } else {
                  // .sort() 数组排序
                  // .toString() 数组转字符  比较
                  temp.stuAnswer.sort().toString() ==
                  temp.answer.sort().toString()
                    ? (temp.score = temp.fraction)
                    : 0;
                }
              }
            }
          }
        }
      });
      return arr;
    },
    // 算总分
    getTotalScore() {
      let arr = this.cList;
      let totalScore = 0;
      let flag = true;
      let errorList = [];
      arr.forEach(item => {
        item.titleList.forEach(function(titleItem, titleIndex) {
          if (
            titleItem.score == null ||
            titleItem.score == "null" ||
            titleItem.score == "undefined"
          ) {
            errorList.push(titleItem.titleId);
            flag = false;
          }
          totalScore += titleItem.score;
        });
      });
      let errorText =
        "没打分,第" + errorList + "题 ! 当前:" + totalScore + "分";
      let successText = "计分成功: " + totalScore;
      flag ? message.success(successText, 0) : message.error(errorText, 0);
      // console.log("123", totalScore, flag);
      return { totalScore, flag };
    },
    // 分数失焦
    scoreBlur(e, t, v) {
      this.$emit("scoreBlur", e, t.score, v);
      // console.log("scoreBlur", e, t.score, v);
    },
    // 备注失焦
    remarkBlur(e, t, v) {
      this.$emit("scoreBlur", e, t, v);
    }
  },
  data() {
    return {
      cList: [],
      charList: [],
      cActiveKey: [0, 1],
      cInfoWidth: "164px",
      cEchartWidth: "500px",
      cEchartHeight: "200px",
      cRolePowerOption: {
        answer:false,
        avgScore:false,
        disabled:false
      }
    };
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
  text-align: left;
}
.page /deep/ .ant-collapse-header {
  font-size: 16px;
  font-weight: 600;
}
.page /deep/ .ant-collapse-content {
  background-color: #fff !important;
}

.page /deep/ .ant-checkbox-wrapper {
  margin-left: 8px;
}

.radiolist,
.checkboxlist,
.textList {
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
.titleListBox /deep/ .ant-checkbox-wrapper span:last-child {
  display: flex;
}
/* input框与文字大致对齐 */
.titleListBox /deep/ .ant-radio,
.titleListBox /deep/ .ant-checkbox {
  padding: 3px;
}

.textList {
  padding: 0px 16px;
}

.titleListBox {
  flex-wrap: wrap;
  padding: 16px;
}

.titleListBox .startBox {
  width: calc(100% - 20px - v-bind(cInfoWidth));
  margin-right: 20px;
  flex-wrap: wrap;
}

.startEchart {
  width: calc(100% - v-bind(cEchartWidth));
}

.textStartEchart {
  width: 100%;
}

.endBox {
  width: v-bind(cInfoWidth);
  height: 100%;
  margin-top: 6px;
  padding: 12px;
  border-radius: 8px;
  background: #f1f1f1;
}

.explainText {
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  background: #f1f1f1;
}

.endEchart {
  width: v-bind(cEchartWidth);
  height: v-bind(cEchartHeight);
  background: transparent;
}

.textEndEchart {
  width: 0px;
  height: 0px;
  display: none;
}

.explainText div {
  min-height: 32px;
}

.textList span,
.explainText div span:first-child {
  min-width: 76px;
}

.titleListBox .endBox > span {
  display: block;
  margin-bottom: 8px;
}

.titleListBox .endBox /deep/ .ant-input-number {
  width: 72px;
}

.titleListBox .endBox /deep/ textarea.ant-input {
  margin-top: 4px;
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
.hrBox {
  width: 100%;
  padding: 12px 8px 0px;
}
</style>