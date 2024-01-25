<template>
  <div class="container" @click="click">
    <div class="section_1">
      <span class="text">{{title}}</span>
      <div class="group">
        <div class="group_1">
          <div class="group_2">
            <div class="group_3">
              <img :src="imgChampion" class="image" />
              <img
                src="https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/SkillGrowthTrackingSystem/no1.png"
                class="image_2"
              />
            </div>
          </div>
          <span class="text_1">{{contentOne}}</span>
          <span class="text_2">{{scoreOne}}</span>
        </div>
        <div class="group_4">
          <div class="group_5">
            <div class="group_6">
              <img :src="imgSecondPlace" class="image" />
              <img
                src="https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/SkillGrowthTrackingSystem/no2.png"
                class="image_4"
              />
            </div>
          </div>
          <span class="text_3">{{contentTwo}}</span>
          <span class="text_4">{{scoreTwo}}</span>
        </div>
        <div class="group_7">
          <div class="group_8">
            <div class="group_9">
              <img :src="imgThirdPlace" class="image" />
              <img
                src="https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/SkillGrowthTrackingSystem/no3.png"
                class="image_6"
              />
            </div>
          </div>
          <span class="text_5">{{contentThree}}</span>
          <span class="text_6">{{scoreThree}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HmAntRankingListCard",
  props: {
    /**
     * 标题
     */
    title: {
      type: String,
      default: "中级全栈工程师"
    },
    /**
     * 标题大小
     */
    titleSize: {
      type: String,
      default: "18"
    },
    /**
     * 头像一
     */
    imgChampion: {
      type: String,
      default: "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/SkillGrowthTrackingSystem/tx1.png"
    },
    /**
     * 内容一
     */
    contentOne: {
      type: String,
      default: "贺琦"
    },
    /**
     * 值一
     */
    scoreOne: {
      type: String,
      default: "205分"
    },
    /**
     * 头像二
     */
    imgSecondPlace: {
      type: String,
      default: "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/SkillGrowthTrackingSystem/tx2.png"
    },
    /**
     * 内容二
     */
    contentTwo: {
      type: String,
      default: "温家毅"
    },
    /**
     * 值二
     */
    scoreTwo: {
      type: String,
      default: "165分"
    },
    /**
     * 头像三
     */
    imgThirdPlace: {
      type: String,
      default: "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/SkillGrowthTrackingSystem/tx3.png"
    },
    /**
     * 内容三
     */
    contentThree: {
      type: String,
      default: "陶蕊明"
    },
    /**
     * 值三
     */
    scoreThree: {
      type: String,
      default: "160分"
    },
    /**
     * 圆角
     */
    borderRadius: {
      type: String,
      default: '8'
    },
    /**
     * 边框颜色
     * @type Color
     */
    borderColor: {
      type: String,
      default: '#4d5af1'
    },
    /**
     * 标题颜色
     * @type Color
     */
    titleColor: {
      type: String,
      default: '#474747'
    },
    /**
     * 内容一颜色
     * @type Color
     */
    contentOneColor: {
      type: String,
      default: '#4d5af1'
    },
  },
  data() {
    return {
      cTitleSize: '18px',
      cBorderRadius: '8px',
      cBorderColor: 'white',
      cTitleColor: 'white',
      cContentOneColor: 'white',
    };
  },
  watch: {
    titleSize(value) {
      this.cTitleSize = this.getCssUnit(value);
    },
    borderRadius(value) {
      this.cBorderRadius = this.getCssUnit(value);
    },
    borderColor(value) {
      this.cBorderColor = value;
    },
    titleColor(value) {
      this.cTitleColor = value;
    },
    contentOneColor(value) {
      this.cContentOneColor = value;
    },
  },
  mounted() {
    this.cTitleSize = this.getCssUnit(this.titleSize);
    this.cBorderColor = this.borderColor;
    this.cBackgroundColor = this.backgroundColor;
    this.cTitleColor = this.titleColor;
    this.cContentOneColor = this.contentOneColor;
  },
  methods: {
    click: function() {
      console.log("触发点击事件")
      this.$emit("click")
    },

    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    },
  }
};
</script>

<style scoped lang="css">
.image {
  width: 50px;
  height: 50px;
}
.container {
  width: 100%;
  height: 100%;
}
.section_1 {
  padding: 27px 22px 34px 24px;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.02);
  border-radius: v-bind(cBorderRadius);
  border-style: solid;
  border-width: 1px;
  border-color: v-bind(cBorderColor);
}
.text {
  color: v-bind(cTitleColor);
  font-size: v-bind(cTitleSize);
  font-weight: 600;
  line-height: 25px;
  white-space: nowrap;
}
.group {
  margin-top: 19px;
}
.group_1 {
  display: flex;
}
.group_4 {
  display: flex;
  margin-top: 20px;
}
.group_7 {
  display: flex;
  margin-top: 20px;
}
.group_2 {
  color: rgb(87, 87, 87);
  font-size: 14px;
  line-height: 20px;
  white-space: nowrap;
}
.text_2 {
  margin-left: 55px;
  margin-top: 25px;
  color: v-bind(cContentOneColor);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  white-space: nowrap;
}
.group_5 {
  color: rgb(87, 87, 87);
  font-size: 14px;
  line-height: 20px;
  white-space: nowrap;
}
.text_4 {
  margin-left: 42px;
  margin-top: 21px;
  color: rgb(93, 93, 93);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  white-space: nowrap;
}
.group_8 {
  color: rgb(87, 87, 87);
  font-size: 14px;
  line-height: 20px;
  white-space: nowrap;
}
.text_6 {
  margin-left: 42px;
  margin-top: 21px;
  color: rgb(93, 93, 93);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  white-space: nowrap;
}
.group_3 {
  padding-top: 10px;
  width: 64px;
  position: relative;
}
.text_1 {
  margin-left: 19px;
  margin-top: 25px;
  font-weight: 600;
  color: v-bind(cContentOneColor);
}
.group_6 {
  padding-top: 6px;
  width: 64.5px;
  position: relative;
}
.text_3 {
  color: rgb(93, 93, 93);
  margin-left: 18.5px;
  margin-top: 21px;
}
.group_9 {
  padding-top: 6px;
  width: 64.5px;
  position: relative;
}
.text_5 {
  color: rgb(93, 93, 93);
  margin-left: 18.5px;
  margin-top: 21px;
}
.image_2 {
  width: 26px;
  height: 30px;
  position: absolute;
  right: 7e-15px;
  top: 0;
}
.image_4 {
  width: 23.5px;
  height: 26.5px;
  position: absolute;
  right: 1.5e-14px;
  top: 0;
}
.image_6 {
  width: 23.5px;
  height: 26.5px;
  position: absolute;
  right: 1.5e-14px;
  top: 0;
}
</style>