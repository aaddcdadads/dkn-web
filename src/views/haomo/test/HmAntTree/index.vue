<template>
  <div>
    <!--    <hm-ant-tree-->
    <!--        :treeData="treeData"-->
    <!--    ></hm-ant-tree>-->

    <!--    <hm-ant-tree-->
    <!--        :tree-data="treeData"-->
    <!--        url="http://ckjd.dev.haomo-tech.com/api/sys/sysDepart/queryTreeList"-->
    <!--        :params="params"-->
    <!--    ></hm-ant-tree>-->

    <!--    <hm-ant-tree-->
    <!--        :tree-data="treeData"-->
    <!--        url="http://ckjd.dev.haomo-tech.com/api/sys/sysDepart/searchBy"-->
    <!--        :params="params"-->
    <!--    ></hm-ant-tree>-->

    <!--        <hm-ant-tree-->
    <!--            :tree-data="treeData"-->
    <!--            url="http://ckjd.dev.haomo-tech.com/api/sys/permission/queryRolePermission"-->
    <!--            :params="params"-->
    <!--        ></hm-ant-tree>       -->
    <!-- <hm-ant-tree
      :tree-data="treeData"
      url="http://ckjd.dev.haomo-tech.com/api/sys/role/queryTreeList"
    ></hm-ant-tree> -->
    <hm-ant-tree :actions="actions">

    </hm-ant-tree>
  </div>
</template>

<script>
import HmAntTree from "/@/components/built-in/jeecg/HmAntTree.vue";
export default {
  components: {
    HmAntTree
  },
  data() {
    return {
      treeData: [
        {
          title: "0-0",
          key: "0-0",
          children: [
            {
              title: "0-0-0",
              key: "0-0-0",
              children: [
                { title: "0-0-0-0", key: "0-0-0-0" },
                { title: "0-0-0-1", key: "0-0-0-1" },
                { title: "0-0-0-2", key: "0-0-0-2" }
              ]
            },
            {
              title: "0-0-1",
              key: "0-0-1",
              children: [
                { title: "0-0-1-0", key: "0-0-1-0" },
                { title: "0-0-1-1", key: "0-0-1-1" },
                { title: "0-0-1-2", key: "0-0-1-2" }
              ]
            },
            {
              title: "0-0-2",
              key: "0-0-2"
            }
          ]
        },
        {
          title: "0-1",
          key: "0-1",
          children: [
            { title: "0-1-0", key: "0-1-0" },
            { title: "0-1-1", key: "0-1-1" },
            { title: "0-1-2", key: "0-1-2" }
          ]
        },
        {
          title: "0-2",
          key: "0-2"
        }
      ],
      actions: [
          {
            name: "添加级别",
            callback: function (item) {
							console.log("添加级别: ", item);
						},
          },
          {
            name: "删除",
            callback: function (item) {
							console.log("删除: ", item);
						},
          },
          {
            name: "重命名",
            callback: function (item) {
							console.log("重命名: ", item);
						},
          }
        ],
      params: {
        // keyWord: "卓尔"
        roleId: "f6817f48af4fb3af11b9e8bf182f618b"
      }
    };
  },
  mounted() {}
};
</script>

<style scoped>
</style>
