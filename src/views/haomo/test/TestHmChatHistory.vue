<template>
  <HmChatHistory width="500px" 
  height="500px" 
  heading="聊天记录123" 
  :totalPages=3 
  :card-list="cardList"
  @delete="onDelete"
  @onClick="onClick"
  ></HmChatHistory>
</template>
<script>
import HmChatHistory from "/@/components/built-in/artificial-Intelligence/HmChatHistory.vue"
export default {
  components: {
    HmChatHistory,
  },
  data() {
    return {
      cardList: [
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
      ]
    }
  },
  methods:{
    onDelete(){
      console.log("onDelete");
    },
    onClick(e){
      console.log("12222",e);
    }
  }
}
</script>