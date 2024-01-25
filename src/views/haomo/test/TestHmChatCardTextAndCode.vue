<template>
  <div>
    <HmChatCardTextAndCode
     width="600px"
     height="800px"
     :text-right="textRight" 
     :text-left="textLeft"
     :value="value"
     @send="onSend"
     @focus="onFocus"
     @input="onInput"
     @add="onAdd"
     @voice="voice"
     ></HmChatCardTextAndCode>
  </div>
</template>

<script>
import HmChatCardTextAndCode from "/@/components/built-in/artificial-Intelligence/HmChatCardTextAndCode/index.vue";
export default {
  components:{
    HmChatCardTextAndCode,
  },
  data(){
    return{
      textRight:[
      ],
      textLeft:[],
      value:"😄",
    }
  },
  methods:{
    onSend(){
      this.textLeft.push({
        html:"<h2 id='h'>Hello World</h2>",
        css:`h2{
  color:red
}`,
        js:`let h = document.getElementById("h")`,
      })
    },
    onFocus(e){
      this.value = e.target.value;
    },
    onInput(){
      console.log("input");
    },
    onAdd(){
      console.log("add");
    },
    voice(){
      console.log("voice");
    }
  }
  
}
</script>