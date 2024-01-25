<template>
  <div class="chatCard" :style="{ width: width, height: height }">
    <div class="dialogue" ref="box">
      <div v-for="(item, index) in viewright" :key="index">
        <div class="chat-right">
          <div class="view">
            <span class="text_1">{{ item }}</span>
          </div>
          <div class="avatar">
            <img :src="avatarRight" class="image_1" />
          </div>
        </div>
        <div class="chat-left">
          <div class="view_code" v-if="viewleft[index]">
            <div v-if="viewleft[index].html !== '' || null">
              <show-code :html="viewleft[index].html" :css="viewleft[index].css" :js="viewleft[index].js"></show-code>
            </div>
            <span class="text_2 text_top">{{
              viewleft[index].text
            }}</span>
            <div class="text_tip"
              v-if="viewleft[index].tip && (viewleft[index].html || viewleft[index].js || viewleft[index].css)">
              <span class="text_2" style="margin-left: 0">{{ viewleft[index].tip }}</span>
              <div class="toView" @click="onView">
                <span class="font">查看</span>
                <img src="https://hm-static-img.oss-cn-beijing.aliyuncs.com/17049538139333862517.png" class="image_2"
                  style="margin-left: 7px" />
              </div>
            </div>
          </div>
          <div class="avatar_left">
            <img class="image_1" :src="avatarLeft" />
          </div>
        </div>
      </div>
    </div>
    <div class="view_bottom">
      <div class="view_input">
        <div style="width: 100%; display: flex">
          <img class="image_3" src="https://hm-static-img.oss-cn-beijing.aliyuncs.com/17092392022939387829.png"
            @click="onAdd" />
          <input class="input_text" v-model="view" placeholder="键入“/”作为命令" style="flex: 1" 
          @input="onInput"
          @focus="onFocus"
            @keydown="onKeydown" />
        </div>
        <img class="image_3" src="https://hm-static-img.oss-cn-beijing.aliyuncs.com/170029573824769137457.png"
          @click="voice" />
      </div>
    </div>
  </div>
</template>
<script>
import showCode from "./showCode.vue"
export default {
  components: {
    showCode,
  },
  name: "HmChatCardTextAndCode",
  props: {
    /**
     * 发送的信息
     */
    value:{
      type:String,
      default:""
    },
    /**
     * 宽
     */
    width: {
      type: String,
      default: "100%",
    },
    /**
     * 高
     */
    height: {
      type: String,
      default: "100%",
    },
    /**
     * 提示语
     */
    textRight: {
      type: Array,
      default: function () {
        return [
          "为一个简单的欢迎页面和表单编写代码（HTML、CSS和JS），其中包含3个输入字段和2个按钮的下拉列表，取消并发送，然后用我的Codepen项目运行测试。",

        ];
      },
    },
    /**
     * 用户头像
     */
    avatarRight: {
      type: String,
      default:
        "https://hm-static-img.oss-cn-beijing.aliyuncs.com/applab/img/comment/comment_3.png",
    },
    /**
     * AI
     */
    textLeft: {
      type: Array,
      default: function () {
        return [
          {
            html: `<h1>Welcome</h1>
  <form id="myForm">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name"><br><br> 
    <label for="priority">Priority:</label>
    <select id="priority" name="priority">
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select><br><br>s
    <button type="button" onclick="cancel()">Cancel</button>
    <button type="submit" onclick="send()">Send</button>
  </form>`,
            css: `body {
  text-align: center;
}
h1 {
  color: #333;
}
form {
  display: inline-block;
  text-align: left;
}
label {
  display: inline-block;
  width: 100px;
}
input, textarea, select {
  width: 200px;
  padding: 5px;
  margin-bottom: 10px;
}
button {
  padding: 10px 20px;
  margin-right: 10px;
}`,
            js: `function cancel() {
  document.getElementById("myForm").reset();
}

function send() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var priority = document.getElementById("priority").value;
  
  console.log("Name: " + name);
  console.log("Email: " + email);
  console.log("Message: " + message);
  console.log("Priority: " + priority);
}`,
            text: "谁都颠三倒四的方式",
            tip: "我在您的Codepen帐户中创建了一个项目",
          },
          {
            html: "11",
          }
        ];
      },
    },
    /**
     * AI头像
     */
    avatarLeft: {
      type: String,
      default:
        "https://hm-static-img.oss-cn-beijing.aliyuncs.com/17006164848308765506.png",
    },
  },
  data() {
    return {
      view: "",
      // value: "",
      viewright: [],
      text: "",
      viewleft: [],
    }
  },
  watch: {
    textRight: {
      handler: function (val) {
        this.viewright = val;
      },
      deep: true,
    },
    textLeft: {
      handler: function (val) {
        this.viewleft = val;
      },
      deep: true,
      immediate: true,
    },
    value:{
      handler:function(val){
        this.view = val;
      }
    }
  },
  mounted() {
    this.viewright = this.textRight;
    this.viewleft = this.textLeft;
    this.view = this.value;
    let scrollElem = this.$refs.box;
    this.$nextTick(() => {
      scrollElem.scrollTo(0, scrollElem.scrollHeight - scrollElem.clientHeight);
    });
  },
  methods: {
    onInput(e){
      this.$emit("input",e);
    },
    onFocus(e){
      this.$emit("focus",e);
    },
    onKeydown(e) {
      if (e.keyCode === 13) {
        setTimeout(() => {
          this.viewright.push(this.view);
          this.view = null;
          this.$nextTick(() => {
            let scrollElem = this.$refs.box; // 对应ref的命名
            scrollElem.scrollTo(0, scrollElem.scrollHeight);
          });
        }, 300);
        this.$emit("send");
      }
      return
    },
    onView() {
      this.$emit("view");
      console.log("123");
    },
    onAdd() {
      this.$emit("add");
    },
    voice() {
      this.$emit("voice");
    },
  },
};
</script>
<style scoped>
.dialogue {
  overflow-y: auto;
  height: calc(100% - 80px);
  width: 100%;
}

.chat-right,
.chat-left {
  width: 100%;
  display: flex;
  padding: 0 40px 4px;
  margin-bottom: 58px;
  margin-top: 38px;
  position: relative;
}

.chat-right {
  justify-content: end;
}

.view {
  min-width: 100px;
  max-width: 800px;
  border: 2px solid #f3f5f6;
  border-radius: 20px;
  padding: 20px 0 46px;
}

.text_1 {
  display: block;
  margin-left: 24px;
  margin-right: 50px;
  font-size: 16px;
  font-family: Karla;
  line-height: 24px;
  color: #141718;
}

.text_2 {
  display: block;
  font-size: 16px;
  font-family: Karla;
  line-height: 24px;
  color: #141718;
}

.image_1 {
  width: 72px;
  height: 72px;
  border-radius: 16px;
}

.avatar {
  display: flex;
  justify-content: end;
  position: absolute;
  right: 60px;
  bottom: -30px;
}

.view_code {
  background-color: #f3f5f6;
  min-width: 120px;
  max-width: 800px;
  padding: 24px 24px 54px;
  border-radius: 20px;
}

.text_tip {
  min-width: 220px;
  margin-top: 14px;
  padding: 4px 4px 4px 18px;
  background-color: #fdfdfd;
  border-radius: 12px;
  box-shadow: 0px 0px 16px 8px #00000012;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.toView {
  padding: 8px 24px;
  background-color: #141718;
  border-radius: 10px;
  height: 40px;
  width: 110px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: default;
}

.image_2 {
  width: 24px;
  height: 24px;
}

.avatar_left {
  position: absolute;
  left: 60px;
  bottom: -30px;
}

.font {
  font-size: 16px;
  font-family: Inter;
  letter-spacing: -0.5px;
  font-weight: 600;
  color: #fdfdfd;
  display: block;
  width: 31px;
}

.view_bottom {
  width: 100%;
  padding: 10px 0;
  background-color: #fff;
}

.view_input {
  width: calc(100% - 80px);
  margin: 0 40px;
  display: flex;
  padding: 8px;
  background-color: #fdfdfd;
  border-radius: 12px;
  border: 2px solid #e8ecef;
}

.input_text {
  border: none;
  outline: none;
  font-size: 16px;
}

.image_3 {
  border-radius: 12px;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
}
</style>