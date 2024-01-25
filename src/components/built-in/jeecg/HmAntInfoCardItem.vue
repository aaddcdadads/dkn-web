<template>
  <div class="page-card">
    <div class="container">
      <div class="group">
        <div class="title_card">
          <img :src="img" class="image" />
          <span class="title">{{title}}</span>
        </div>
        <span class="content">{{content}}</span>
      </div>
      <div class="type_card" v-if="isType">
        <span class="type">{{typeName}}：</span>
        <div class="text-wrapper">
          <span class="edition">{{edition}}</span>
        </div>
      </div>
      <div class="time_card">
        <span class="time">{{creationTime}}: {{data}}</span>
        <span class="creator">{{creator}}: {{people}}</span>
      </div>
    </div>
    <div class="mask" v-if="editStatus" :style="{marginTop:cHeightCard}">
      <div id="mask_layer" :style="{height:cHeightMask}"></div>
      <div class="operation_card">
        <div class="operation">
          <div class="edit" @click="edit">编辑</div>
          <div class="delete" @click="del">删除</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HmAntInfoCardItem",
  props: {
    /**
     * 标题
     */
    title: {
      type: String,
      default: "数据库名称"
    },
    /**
     * 图片
     */
    img: {
      type: String,
      default:
        "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/DatabaseDesign/sjkicon.png"
    },
    /**
     * 内容
     */
    content: {
      type: String,
      default: "把你手头的工作当作吃饭来对待，你一定…"
    },
    /**
     * 类型名
     */
    typeName: {
      type: String,
      default: "数据库类型"
    },
    /**
     * 版本
     */
    edition: {
      type: String,
      default: "MySQL V8.0"
    },
    /**
     * 创建时间标题
     */
    creationTime: {
      type: String,
      default: "创建时间"
    },
    /**
     * 创建时间
     */
    data: {
      type: Date,
      default: "2012-2-2"
    },
    /**
     * 创建人标题
     */
    creator: {
      type: String,
      default: "创建人"
    },
    /**
     * 创建人
     */
    people: {
      type: String,
      default: "秦昊"
    },
    /**
     * 是否显示类型
     */
    isType: {
      type: Boolean,
      default: true
    },
    /**
     * 是否显示遮罩
     */
    editStatus: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      cHeightMask: 100,
      cHeightCard: 100,
      cHeight: 100,
      height: 216
    };
  },
  watch: {
    height(value) {
      this.cHeight = this.$getCssUnit(value);
      this.cHeightMask = this.$getCssUnit(value - 61);
      this.cHeightCard = `-${this.$getCssUnit(value)}`;
    }
  },
  mounted() {
    if (!this.isType) {
      this.height = 170;
    }
    this.cHeight = this.$getCssUnit(this.height);
    this.cHeightMask = this.$getCssUnit(this.height - 61);
    this.cHeightCard = `-${this.$getCssUnit(this.height)}`;
  },
  methods: {
    visibleChange: function(e) {
      this.$emit("visibleChange", e);
    },
    edit: function(e) {
      console.log("编辑", e);
      this.$emit("edit", e);
    },
    del: function(e) {
      console.log("删除", e);
      this.$emit("del", e);
    }
  }
};
</script>

<style scoped>
.page-card {
  width: 100%;
  height: 100%;
  height: 1px;
  min-width: 300px;
  min-height: v-bind(cHeight);
}

.card-title {
  display: flex;
  padding: 10px;
}
.img-class {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.card-title-value {
  margin-left: 20px;
  font-size: 18px;
}
.card-body {
  display: flex;
  justify-content: space-around;
  padding: 10px;
}
.card-foot {
  display: flex;
  justify-content: space-around;
  background: #e5e5e5;
}

.group {
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  white-space: nowrap;
}
.title_card {
  margin-bottom: 18px;
  padding: 0 2.5px;
  color: rgb(58, 58, 58);
  font-size: 20.5px;
  font-weight: 500;
  line-height: 28.5px;
  white-space: nowrap;
}
.content {
  margin-top: 14.5px;
  color: rgb(113, 113, 113);
  font-size: 16px;
  line-height: 23px;
  white-space: nowrap;
}
.type_card {
  display: flex;
  color: rgb(113, 113, 113);
  font-size: 16px;
  margin-top: 18px;
  line-height: 23px;
  white-space: nowrap;
}
.time_card {
  margin-top: 14.5px;
  padding-top: 14.5px;
  border-top: solid 1.15px rgba(0, 0, 0, 0.06);
}
.image {
  margin: 1px 0 3px;
  width: 23px;
  height: 24px;
}
.title {
  margin-left: 11px;
}
.type {
  margin: 2.5px 0 3px;
}
.text-wrapper {
  margin-left: 7px;
  padding: 2.5px 0 3px;
  background-color: rgb(245, 245, 245);
  border-radius: 4.5px;
  height: 27.5px;
}
.time {
  margin-bottom: 1px;
  color: rgb(163, 163, 163);
  font-size: 14px;
  line-height: 19.5px;
  white-space: nowrap;
}
.creator {
  float: right;
  margin-top: 1px;
  color: rgb(173, 173, 173);
  font-size: 14px;
  line-height: 19.5px;
  white-space: nowrap;
}
.edition {
  margin-left: 10.5px;
  margin-right: 10.5px;
}
.operation {
  width: 100%;
  display: flex;
  padding: 16.5px 0px 18px;
}
.operation_card {
  height: 61px;
  background-color: rgb(255, 255, 255);
  border-radius: 0px 0px 2.5px 2.5px;
  border: solid 1.15px rgb(233, 233, 233);
  position: relative;
}
.edit {
  width: 50%;
  color: rgb(250, 73, 60);
  font-size: 16px;
  text-align: center;
  border-right: solid 1.15px rgba(232, 232, 232, 1);
}
.delete {
  width: 50%;
  color: rgb(0, 0, 0);
  font-size: 16px;
  text-align: center;
}
.container {
  padding: 24px 23px 23px 23px;
}
.mask {
  height: v-bind(cHeight);
  width: 100%;
  float: left;
}
#mask_layer {
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
  position: relative;
}
</style>