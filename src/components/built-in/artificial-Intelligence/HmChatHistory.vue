<template>
  <div class="flex-col justify-start section_2" :style="{ width: width, height: height }">
    <div class="flex-col group_2 space-y-18">
      <div class="flex-row group_3">
        <div class="flex-row items-center space-x-10">
          <span class="text_2">{{ heading }}</span>
          <div class="flex-col justify-start items-center shrink-0 text-wrapper_2">
            <span class="font_2_1">{{ total }}/{{ totalPages }}</span>
          </div>
        </div>
        <div class="image_waste" @click="onDelete">
          <img class="image_4"
            src="https://block-design.oss-cn-shenzhen.aliyuncs.com/figmaweb/f15f6fd67af535ecebf6b306f1b37035.png" />
        </div>
      </div>
      <div class="flex-col space-y-8" style="overflow-y:auto;padding-right: 16px;">
        <div class="flex-col group_4 space-y-10 sadad" v-for="(item, index) in chatList" :key="item"
          @click="onClick(item)">
          <div class="flex-row space-x-84">
            <div class="flex-row items-center space-x-14">
              <input class="shrink-0 section_3" type="checkbox" name="agree" value="yes" :checked="item.checked"
                @click="onChecked(index)" />
              <span class="font_3">{{ item.title }}</span>
            </div>
          </div>
          <span class="font_2">
            {{ item.content }}
          </span>
          <div v-if="item.image" class="shrink-0" style="margin-left: 35px;">
            <img class="shrink-0 self-center image_7" :src="item.image" />
          </div>
          <div class="flex-row items-center group_5">
            <div class="avatar">
              <img class="shrink-0 image_6" v-for="src in item.avatar" :src="src" />
            </div>
            <span class="font_4 text_4">{{ item.creatTime }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HmChatHistory",
  props: {
    /**
     * 宽度
     */
    width: {
      type: String,
      default: "450px",
    },
    /**
     * 高度
     */
    height: {
      type: String,
      default: "100%",
    },
    /**
     * 标头
     */
    heading: {
      type: String,
      default: "聊天记录",
    },
    /**
     * 总条数
     */
    totalPages: {
      type: Number,
      default: 8,
    },
    /**
     * 数据
     */
    cardList: {
      type: Array,
      default: function () {
        return [
          {
            id: "chat1",
            title: "AI UI Ki 灵感",
            content:
              "编写代码(HTML, CSS和JS)为一个简单的表单，有3个输入字段和2个按钮的下拉菜单，取消和发送",
            creatTime: "刚刚",//创建时间
            avatar: [
              "https://hm-static-img.oss-cn-beijing.aliyuncs.com/applab/img/comment/comment_3.png",
              "https://hm-static-img.oss-cn-beijing.aliyuncs.com/%E5%AE%B6%E9%95%BF/lQLPJv_kkDGP2JR4eLAEqDmxD8KyYwOLPL_RgIQA_120_120.png_720x720g.jpg",
              "https://hm-static-img.oss-cn-beijing.aliyuncs.com/applab/img/comment/comment_1.png",
              "https://hm-static-img.oss-cn-beijing.aliyuncs.com/applab/img/comment/comment_2.png",

            ],
            image: "",
            checked: false,
          },
          {
            id: "chat2",
            title: "带输入的欢迎页面",
            content:
              "编写代码(HTML, CSS和JS)为一个简单的表单，有3个输入字段和2个按钮的下拉菜单，取消和发送",
            creatTime: "刚刚",
            avatar: [
              "https://hm-static-img.oss-cn-beijing.aliyuncs.com/applab/img/comment/comment_1.png",
              "https://hm-static-img.oss-cn-beijing.aliyuncs.com/applab/img/comment/comment_2.png",
              "https://hm-static-img.oss-cn-beijing.aliyuncs.com/%E5%AE%B6%E9%95%BF/lQLPJv_kkDGP2JR4eLAEqDmxD8KyYwOLPL_RgIQA_120_120.png_720x720g.jpg",
            ],
            image: "https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/65499a0e5a7e3f0310f9bb77/654b426787ca550011b111e7/16996056476238101452.png",
            checked: false,
          },
          {
            id: "chat3",
            title: "照片修饰",
            content:
              "摄影拍摄的动漫旅行者夫妇看山湖，动漫旅行和积极的生活理念与团队，在日本，动漫风格，非常细致",
            creatTime: "刚刚",
            avatar: [
              "https://hm-static-img.oss-cn-beijing.aliyuncs.com/applab/img/comment/comment_3.png",
              "https://hm-static-img.oss-cn-beijing.aliyuncs.com/%E5%AE%B6%E9%95%BF/lQLPJv_kkDGP2JR4eLAEqDmxD8KyYwOLPL_RgIQA_120_120.png_720x720g.jpg",
              "https://hm-static-img.oss-cn-beijing.aliyuncs.com/%E5%AE%B6%E9%95%BF/lQLPJv_kkDGP2JR4eLAEqDmxD8KyYwOLPL_RgIQA_120_120.png_720x720g.jpg",
            ],
            image: "",
            checked: false,
          },
          {
            id: "chat4",
            title: "自动生成标题",
            content:
              "编写代码(HTML, CSS和JS)为一个简单的表单，3个输入字段和一个下拉框，2个按钮，取消和发送",
            creatTime: "刚刚",
            avatar: [
              "https://hm-static-img.oss-cn-beijing.aliyuncs.com/applab/img/comment/comment_3.png",
            ],
            image: "",
            checked: false,
          },
          {
            id: "chat5",
            title: "自动生成标题",
            content:
              "编写代码(HTML, CSS和JS)为一个简单的表单，3个输入字段和一个下拉框，2个按钮，取消和发送",
            creatTime: "刚刚",
            avatar: [
              "https://hm-static-img.oss-cn-beijing.aliyuncs.com/applab/img/comment/comment_2.png",
            ],
            image: "https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/65499a0e5a7e3f0310f9bb77/654b426787ca550011b111e7/16996056476238101452.png",
            checked: false,
          },
        ];
      },
    },
  },
  watch: {
    cardList: {
      handler(val) {
        this.chatList = val;
        this.total = val.length;
      },
      deep: true,
    },
  },
  data() {
    return {
      chatList: [],
      total: 0,
    };
  },
  computed: {},
  mounted() {
    this.total = this.cardList.length;
    let record = this.totalPages;
    if(this.total > record){
      this.total = record;
      this.chatList = this.cardList.filter((item,index)=>{
        if(index < record){
          return item;
        }
      });
    }else{
      this.chatList = this.cardList;
    }
  },
  methods: {
    onClick(item) {
      this.$emit("onClick", item);
    },
    onDelete() {
      let del = [];
      let arr = this.chatList.filter((item) => {
        if(item.checked == true){
          del.push(item);
        }else{
          return item.checked !== true;
        }
      });
      this.chatList = arr;
      this.total = this.chatList.length;
      this.$emit("delete",del);
      return this.chatList;
    },
    onChecked(index) {
      let checked = this.chatList[index].checked;
      this.chatList[index].checked = !checked;
    },
  },
};
</script>

<style scoped>
.avatar {
  width: 100px;
  height: 36px;
  overflow: hidden;
}

.flex-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.justify-start {
  justify-content: flex-start;
}

.justify-between {
  justify-content: space-between;
}

.items-center {
  align-items: center;
}

.self-center {
  align-self: center;
}

.shrink-0 {
  flex-shrink: 0;
}

.relative {
  position: relative;
}

.section {
  background-color: #fdfdfd;
  border-radius: 0px 20px 20px 0px;
  overflow: hidden;
  height: 100%;
}

.section_2 {
  padding: 10px 0;
  background-color: #fdfdfd;
}

.group_2 {
  padding: 0 0 0 16px;
}
.space-y-18 {
  height: 100%;
}
.space-y-18>*:not(:first-child) {
  margin-top: 5px;
}

.group_3 {
  padding: 0 20px 0 10px;
}

.space-x-10>*:not(:first-child) {
  margin-left: 8px;
}

.text_2 {
  color: #6c7174bf;
  font-size: 16px;
  font-family: Inter;
  font-weight: 600;
  line-height: 15px;
  letter-spacing: 0.4px;
}

.text-wrapper_2 {
  background-color: #e8ecef;
  border-radius: 8px;
  overflow: hidden;
  width: 60px;
  height: 24px;
  padding: 4px;
}

.font_2 {
  font-size: 16px;
  margin-left: 35px;
  font-family: Inter;
  letter-spacing: -0.44px;
  line-height: 15px;
  color: #6c7174;
  width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.font_2_1 {
  font-size: 14px;
  font-family: Inter;
  letter-spacing: 0.44px;
  line-height: 15px;
  color: #6c7174;
}

.image_4 {
  width: 23px;
  height: 23px;
  margin: 10px;
}

.space-y-8>*:not(:first-child) {
  margin-top: 11px;
}
.space-y-8{
  overflow-y:auto;
  padding-right: 16px;
}

.group_4 {
  padding: 14px 4px 12px 12px;
  border-radius: 14px;
}

.space-y-10>*:not(:first-child) {
  margin-top: 10px;
}

.space-x-84>*:not(:first-child) {
  margin-left: 84px;
}

.space-x-14>*:not(:first-child) {
  margin-left: 16px;
}

.section_3 {
  border-radius: 7px;
  width: 20px;
  height: 20px;
  border: solid 2px #6c717480;
}

.font_3 {
  font-size:16px;
  font-family: Inter;
  letter-spacing: 0.3px;
  line-height: 14px;
  font-weight: 600;
  color: #141718;
}

.group_5 {
  padding-left: 37px;
  padding-right: 10px;
}

.image_6 {
  border-radius: 50%;
  padding: 0;
  width: 36px;
  height: 36px;
  border: 2px solid #fff;
  margin-right: -15px;
}

.font_4 {
  font-size: 12px;
  font-family: Inter;
  line-height: 8px;
  color: #6c7174bf;
}

.text_4 {
  font-size: 14px;
}

.image_7 {
  margin-top: 10px;
  border-radius: 14px;
  height: 168px;
  width: 80%;
}

.sadad:hover {
  background: #edf0f3;
  color: #edf0f3;
}

.image_waste:active {
  background: #edf0f3;
  border-radius: 50%;
}</style>
