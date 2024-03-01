<template>
    <div class="ele-wrapper ele-wrapper-leftMenu">
      <hm-ant-menu
        ref="leftMenu"
        :mode="leftMenu.mode"
        :menu-list="leftMenu.menuList"
        :sub-menu-open-delay="leftMenu.subMenuOpenDelay"
        :sub-menu-close-delay="leftMenu.subMenuCloseDelay"
        :openKeys="openKeys"
        :selectedKeys="selectedKeys"
        @onClick="onLeftMenuClick"
        @onSelect="onLeftMenuSelect"
        @onTitleClick="onLeftMenuTitleClick"
        class="ele-leftMenu"
      >
      </hm-ant-menu>
    </div>
  </template>
  <script>
  import HmAntMenu from "/@/components/built-in/jeecg/HmAntMenu.vue";
  export default {
    name:"TestHmAntMenu",
    components: {
      HmAntMenu,
    },
    data() {
      let self = this;
      return {
        openKeys:["产品简介"], // 一级菜单title
        selectedKeys:["iFSM特性"], // 子级菜单 key
        leftMenu: {
          mode: "inline",
          menuList: [
            {
              title: "产品简介",
              icon: "",
              child: [
                {
                  submenuValue: [
                    {
                      key: "setting:1",
                      submenu: "什么是iFSM?",
                    },
                    {
                      key: "iFSM特性",
                      submenu: "iFSM特性",
                    },
                  ],
                },
              ],
            },
            {
              title: "快速入门",
              icon: "",
              child: [
                {
                  submenuValue: [
                    {
                      key: "setting:31",
                      submenu: "访问入口?",
                    },
                    {
                      key: "setting:32",
                      submenu: "注册与登录",
                    },
                    {
                      key: "setting:3",
                      submenu: "初始化配置",
                    },
                    {
                      key: "setting:4",
                      submenu: "服务过程管理",
                    },
                    {
                      key: "setting:5",
                      submenu: "设备采集管理",
                    },
                    {
                      key: "setting:6",
                      submenu: "费用报销管理",
                    },
                  ],
                },
              ],
            },
            {
              title: "系统功能",
              icon: "",
              child: [
                {
                  submenuValue: [
                    {
                      key: "setting:7",
                      submenu: "首页",
                    },
                    {
                      key: "setting:8",
                      submenu: "服务视图",
                    },
                    {
                      key: "setting:9",
                      submenu: "调度视图",
                    },
                    {
                      key: "setting:10",
                      submenu: "设备管理",
                    },
                    {
                      key: "setting:11",
                      submenu: "客户视图",
                    },
                    {
                      key: "setting:12",
                      submenu: "客户管理",
                    },
                    {
                      key: "setting:13",
                      submenu: "服务订单",
                    },
                    {
                      key: "setting:14",
                      submenu: "服务工单",
                    },
                    {
                      key: "setting:15",
                      submenu: "服务计划",
                    },
                    {
                      key: "setting:16",
                      submenu: "服务商机",
                    },
                    {
                      key: "setting:17",
                      submenu: "费用管理",
                    },
                    {
                      key: "setting:18",
                      submenu: "配件管理",
                    },
                    {
                      key: "setting:19",
                      submenu: "配件销售管理",
                    },
                    {
                      key: "setting:20",
                      submenu: "工程师管理",
                    },
                    {
                      key: "setting:21",
                      submenu: "基础档案",
                    },
                    {
                      key: "setting:22",
                      submenu: "知识库",
                    },
                    {
                      key: "setting:23",
                      submenu: "流程管理",
                    },
                    {
                      key: "setting:24",
                      submenu: "系统配置",
                    },
                    {
                      key: "setting:25",
                      submenu: "信息发布",
                    },
                    {
                      key: "setting:26",
                      submenu: "统计报表",
                    },
                    {
                      key: "setting:27",
                      submenu: "数据管理",
                    },
                    {
                      key: "setting:28",
                      submenu: "访问日志",
                    },
                    {
                      key: "setting:29",
                      submenu: "OpenAPI",
                    },
                    {
                      key: "setting:30",
                      submenu: "帮助",
                    },
                  ],
                },
              ],
            },
          ],
          subMenuOpenDelay: 0,
          subMenuCloseDelay: 0.1,
        },
      };
    },
    methods: {
      onLeftMenuClick(e) {
        let self = this;
        console.log("打印点击的是啥", e);
      },
      onLeftMenuSelect(e){
          console.log("打印选择的是啥", e);
      },
      onLeftMenuTitleClick(a,e){
          console.log("打印选择标题的是啥",a, e);
      }
    },
  };
  </script>