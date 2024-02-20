<template>
  <div class="activityList flex-col">
    <div v-for="(item, index) in cList" :key="index" class="activityItem flex-col">
      <span class="item-label">渠道:{{item.label}}</span>
      
      <div class="item-url flex-row">
        <span class="item-label">URL:</span>
        <a-input v-model:value="item.url" placeholder="活动链接" disabled />
        <a-button type="primary" @click="copyLink(item, item.url)" :id="'copy' + item.id">复制链接</a-button>
      </div>
      <div class="item-qrcode flex-row">
        <span class="item-label">二维码:</span>
        <div class="item-qrcode-box" :id="'qrcode' + item.id"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Clipboard from 'clipboard';
export default {
  props: {
    /**
     * 数据项
     */
    list: {
      type: Array,
      default: function () {
        return [
          {
            id: 1,
            url: "http://baidu.com",
          },
          {
            id: 2,
            url: "http://baidu.com",
          },
        ];
      },
    },
  },
  watch: {
    list: {
      handler: function (value, oldValue) {
        this.cList = value;
        this.setQrcode()
      },
      deep: true,
    },
  },
  mounted() {
    this.cList = this.list;
  },
  data() {
    return {
      cList: [],
    };
  },
  methods: {
    copyLink(e, str) {
      let self=this
      let id=`#copy${e.id}`
      var clipboard = new Clipboard(id, {
        text: function() {
          return str;
        }
      });

    clipboard.on('success', function(e) {
      self.$message.success('复制成功！');
      e.clearSelection();
    clipboard.destroy()

    });

    clipboard.on('error', function() {
      self.$message.error('复制失败！');
    clipboard.destroy()

    });
    // 手动触发点击事件
    // document.querySelector(id).click();
      // this.$emit("copyLink", e, str);
    },
    setQrcode() {
      setTimeout(() => {
        this.cList.forEach((e) => {
          const container = document.querySelector(`#qrcode${e.id}`);
          new this.$QrCode(container, {
            text: e.url,
            width: 128,
            height: 128,
            colorDark: "#000000",
            colorLight: "#ffffff",
          });
        })
      });
    }
  },
};
</script>
<style lang="less" scoped>
.flex-col {
  display: flex;
  flex-direction: column;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

.activityList {
  width: 100%;
  padding: 0px 12px;
  padding-right: 24px;
  row-gap: 24px;
  box-sizing: border-box;

  .activityItem {
    width: 100%;
    row-gap: 12px;

    .item-url {
      width: 100%;
      align-items: center;
      column-gap: 8px;
    }

    .item-label {
      min-width: 50px;
      font-size: 14px;
      color: #333;
      text-align: left;
    }

    .item-qrcode {
      width: 100%;
      column-gap: 8px;

      &-box {
      //   min-width: 200px;
      //   min-height: 200px;
        background: #cccccc26;
      }
    }
  }
}
</style>