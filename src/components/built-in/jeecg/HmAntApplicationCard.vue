<template>
  <div class="page-card">
    <div class="card-page" v-for="(item, index) in cardList" :key="index">
      <div class="card-title">
        <img class="img-class" src="https://www.itying.com/images/flutter/2.png" style alt />
        <div class="card-title-value">{{ item.title }}</div>
      </div>
      <div class="card-body">
        <div class="card-body-left">
          <div>活跃用户</div>
          <div>{{ item.activeUser }}</div>
        </div>
        <div class="card-body-right">
          <div>新增用户</div>
          <div>{{ item.AddUser }}</div>
        </div>
      </div>
      <div class="card-foot">
        <div>
          <i class="fa fa-download" aria-hidden="true"></i>
        </div>
        <div>
          <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
        </div>
        <div>
          <i class="fa fa-share-alt" aria-hidden="true"></i>
        </div>
        <div>
          <a-dropdown
            :placement="placement"
            :trigger="trigger"
            v-model:visible="cVisible"
            @visibleChange="visibleChange"
          >
            <a class="ant-dropdown-link" >
              <i class="fa fa-ellipsis-h" aria-hidden="true" style="color: black;"></i>
            </a>
            <template #overlay>
              <a-menu>
                <a-menu-item v-for="item in cTitleList" :key="item.key">
                  <a href="javascript:;">{{item.value}}</a>
                </a-menu-item>
              </a-menu>
            </template>
            <slot />
          </a-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HmAntApplicationCard",
  props: {
    /**
     * 数据
     */
    cardList: {
      type: Array,
      default: function() {
        return [
          {
            title: "Alipay",
            activeUser: "17万",
            AddUser: "1700"
          },
          {
            title: "Alipay",
            activeUser: "17万",
            AddUser: "1700"
          },
          {
            title: "Alipay",
            activeUser: "17万",
            AddUser: "1700"
          },
          {
            title: "Alipay",
            activeUser: "17万",
            AddUser: "1700"
          },
          {
            title: "Alipay",
            activeUser: "17万",
            AddUser: "1700"
          }
        ];
      }
    },
    /**
     * 占位文字
     */
    text: {
      type: String,
      default: "Hover me"
    },
    /**
     * 数据
     * @model
     */
    titleList: {
      type: Array,
      default: function() {
        return [
          {
            key: 1,
            value: "1st menu item"
          },
          {
            key: 2,
            value: "2nd menu item"
          },
          {
            key: 3,
            value: "3nd menu item"
          }
        ];
      }
    },
    /**
     * 弹出位置
     * @type Enum
     * @default bottomLeft
     * @options ["bottomLeft","bottomCenter","bottomRight","topLeft","topCenter","topRight"]
     */
    placement: {
      type: String
    },
    /**
     * 下拉的行为
     */
    trigger: {
      type: Array,
      default: function() {
        return [
          'click'
        ];
      }
    }
  },
  data() {
    return {
      cVisible: false,
      cTitleList: [
        {
          key: 1,
          value: "1st menu item"
        },
        {
          key: 2,
          value: "2nd menu item"
        },
        {
          key: 3,
          value: "3nd menu item"
        }
      ]
    };
  },
  watch: {
    visible(value) {
      this.cVisible = value;
    },
    titleList(value) {
      this.cTitleList = value;
    }
  },
  mounted() {
    this.cTitleList = this.titleList;
  },
  methods: {
    visibleChange: function(e) {
      this.$emit("visibleChange", e);
    }
  }
};
</script>

<style scoped>
.page-card {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  justify-content: space-between;
}
.card-page {
  box-sizing: border-box;
  background-color: white;
  flex: 0 0 30%;
  /* min-width: 23%; */
  min-width: 200px;
  max-width: 30%;
  border: 1px solid #e5e5e5;
  margin-top: 20px;
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
</style>