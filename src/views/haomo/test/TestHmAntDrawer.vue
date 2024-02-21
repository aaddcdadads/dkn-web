<template>
    <div class="outter" id="outter">
      <a-button type="primary" @click="onClick">默认</a-button>
      <a-button type="primary" @click="onClick1">内置</a-button>
      <a-button type="primary" @click="onClick2">ALL</a-button>
      <hm-ant-drawer
        ref="test"
        :visible="test.visible"
        :mask="test.mask"
        :z-index="1999"
      ></hm-ant-drawer>
      <div class="inner">
        <hm-ant-drawer
          ref="test1"
          :visible="test1.visible"
          :mask="test1.mask"
          :content="test1.content"
          :get-container-class="test1.getContainer"
          :wrap-style="{ position: 'absolute' }"
          :z-index="1998"
        >
        <template v-slot:title>
          <span>标题内容,替换默认文字</span>
        </template>
        <template v-slot:content>
        <div class="ele-wrapper ele-wrapper-test">
              <span>插槽内容,替换默认文字</span>
          </div>
        </template>
      </hm-ant-drawer>
      </div>
      <div class="ele-wrapper-inner">
        <hm-ant-drawer
          ref="test1"
          :visible="test1.visible"
          :mask="test1.mask"
          :content="test1.content"
          :get-container-class="getContainer"
          :wrap-style="{ position: 'absolute' }"
          :z-index="1998"
        >
        <template v-slot:title>
          <span>标题内容,替换默认文字</span>
        </template>
        <template v-slot:content>
        <div class="ele-wrapper ele-wrapper-test">
              <span>插槽内容,替换默认文字</span>
          </div>
        </template>
      </hm-ant-drawer>
      </div>
    </div>
  </template>
  <script>
  import HmAntDrawer from "/@/components/built-in/jeecg/HmAntDrawer.vue";
  export default {
    components: { HmAntDrawer },
    data() {
      return {
        test: {
          visible: true,
          mask: false,
        },
        test1: {
          visible: false,
          content: "内抽屉",
          mask: true,
          getContainer: ".inner",
        },
        getContainer:"inner"
      };
    },
    mounted() {},
    methods: {
      onClick() {
        this.test.visible = !this.test.visible;
      },
      onClick1() {
        this.test1.visible = !this.test1.visible;
      },
      onClick2() {
        this.test.visible = !this.test.visible;
        this.test1.visible = !this.test1.visible;
      },
    },
  };
  </script>
  <style lang="less" scoped>
  .outter {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }
  .inner,
  .ele-wrapper-inner {
    width: 400px;
    height: 400px;
    background: cyan;
    margin: auto;
    position: relative;
    overflow: hidden;
  }
  .ele-wrapper-inner{
    background: palevioletred;
  }
  </style>