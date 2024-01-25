<template>
  <a-list
    :size="size"
    :split="split"
    :data-source="dataList"
    class="list-class"
  >
    <template #renderItem="{ item }">
      <a-list-item>
        <a-list-item-meta :description="`入库时间:  ` + `${item.value}`">
          <template #title>
            <span class="zhtitle">{{ item.name }} {{ item.numbs }}</span>
            <span class="futitle">规格：{{ item.quantity }}</span>
          </template>
          <template #avatar>
            <div
              class="ant-image"
              :style="{ backgroundImage: `url(${item.img})` }"
            ></div>
          </template>
        </a-list-item-meta>
        <div class="right-box">
          <span class="money-show">￥100</span>
          <button class="close-icon" @click="onClose(index)">x</button>
          <div class="btn-box">
            <a-input-number
              class="ant-number"
              :defaultValue="defaultValue"
              :max="max"
              :min="min"
              @change="change"
              @pressEnter="pressEnter"
            ></a-input-number>
          </div>
        </div>
      </a-list-item>
    </template>
  </a-list>
</template>

<script>
export default {
  name: "ListAnt",
  props: {
    /**
     * 数据内容
     */
    dataSource: {
      type: Array,
      default: function () {
        return [
          {
            img: "https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/612c9040718459001197fea4/6184e0573fa1fb0011f21ac6/16360981720931043539.png",
            name: "test",
            numbs: "2121",
            quantity: "500ml",
            value: "2021-11-27 12:30",
          },
          {
            img: "https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/612c9040718459001197fea4/6184e0573fa1fb0011f21ac6/16360981720931043539.png",
            name: "test",
            numbs: "2121",
            quantity: "500ml",
            value: "2021-11-27 12:30",
          },
        ];
      },
    },
    /**
     * 大小
     * @type Enum
     * @default small
     * @options ["default","middle","small"]
     */
    size: {
      type: String,
    },
    /**
     * 分割线
     */
    split: {
      type: Boolean,
      default: true,
    },
    /**
     * 初始值
     */
    defaultValue: {
      type: Number,
      default: 1,
    },
    /**
     * 最大值
     */
    max: {
      type: Number,
    },
    /**
     * 最小值
     */
    min: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      dataList: [],
    };
  },
  methods: {
    change: function (e) {
      this.$emit("update:value", this.cvalue);
      this.$emit("change", e);
    },
    pressEnter: function (e) {
      this.$emit("pressEnter", e);
    },
    onClose: function (e) {
      console.log("触发关闭点击事件");
    },
  },
  watch: {
    dataSource(val) {
      this.dataList = val;
    },
  },
  created() {
    this.dataList = this.dataSource;
  },
};
</script>

<style scoped>
.list-class {
  width: 100%;
}
span {
  display: block;
  text-align: left;
}
.right-box {
  height: 85px;
  float: right;
  margin-top: 7px;
  position: relative;
}
.right-box .money-show {
  margin-top: 2px;
  margin-right: 31px;
  width: calc(100% - 31px);
  height: 18px;
  text-align: right;
  font-size: 16px;
  font-weight: bold;
  color: #7721ab;
  line-height: 18px;
}
.right-box .close-icon {
  color: rgba(0, 0, 0, 0.65);
  background-color: #ffffff;
  border: 0px;
  cursor: pointer;
  position: absolute;
  top: 18px;
  right: 0px;
}

.right-box .btn-box {
  margin-top: 23px;
}
.ant-image {
  width: 77px;
  height: 85px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  margin-left: 12px;
  border-radius: 8px;
}
.ant-number {
  /* width: 100%; */
  width: 56px;
  height: 26px;
  margin-right: 30px;
  background: #ffffff;
  border: 0.5px solid rgba(0, 0, 0, 0.15);
  border-radius: 1.62px;
}
.zhtitle {
  font-size: 16px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.65);
  line-height: 18px;
  margin-top: 10px;
}
.futitle {
  font-size: 12px;
  margin-top: 5px;
  color: rgba(0, 0, 0, 0.65);
  line-height: 18px;
  margin-top: 5px;
}
/deep/ .ant-list-item-meta-description {
  text-align: left;
  margin-top: 12px;
}
/deep/ .ant-list-item {
  padding: 5px;
}
/deep/ .ant-input-number-handler-wrap {
  border-left: 0.5px solid #d9d9d9;
  opacity: 0.5;
}
</style>