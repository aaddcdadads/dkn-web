<template>
  <div class="container" @click="onClick(e)">
    <div class="box">
      <div class="imgBox">
        <img :src="img" />
      </div>
      <div class="iconBox">
        <div class="collect" @click.stop="onClickCollect(e)">
          <img
            :src="
              cIsCollect
                ? 'https://block-design.oss-cn-shenzhen.aliyuncs.com/haomo-ai/collect.png'
                : 'https://block-design.oss-cn-shenzhen.aliyuncs.com/haomo-ai/notCollect.png'
            "
          />
          <span>{{ getUnit(cCollectNumber) }}</span>
        </div>
        <div @click.stop="onClickLike(e)">
          <img
            :src="
              cIsFork
                ? 'https://block-design.oss-cn-shenzhen.aliyuncs.com/haomo-ai/fork.png'
                : 'https://block-design.oss-cn-shenzhen.aliyuncs.com/haomo-ai/notFork.png'
            "
          />
          <span>{{ getUnit(cForkNumber) }}</span>
        </div>
      </div>
    </div>
    <div class="synopsis">
      <span :title="description">{{ description }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HmProjectCard",
  props: {
    /**
     * 图片
     */
    img: {
      type: String,
      default:
        "https://block-design.oss-cn-shenzhen.aliyuncs.com/haomo-ljh/bg.jpg",
    },
    /**
     * 描述
     */
    description: {
      type: String,
      default:
        "这里是描述文字，这里是描述文字，这里是描述文字，这里是描述文字，这里是描述文字，这里是描述文字，这里是描述文字，这里是描述文字，这里是描述文字，这里是描述文字，这里是描述文字，这里是描述文字。",
    },
    /**
     * 是否收藏
     */
    isCollect: {
      type: Boolean,
      default: true,
    },
    /**
     * 收藏数量
     */
    collectNumber: {
      type: Number,
      default: 150000000,
    },
    /**
     * 是否fork项目
     */
    isFork: {
      type: Boolean,
      default: false,
    },
    /**
     * fork数量
     */
    forkNumber: {
      type: Number,
      default: 1500,
    },
  },
  data() {
    return {
      cIsCollect: true,
      cIsFork: false,
      cCollectNumber: 150000000,
      cForkNumber: 1500,
      isCollectDisabled: false,
      isForkDisabled: false,
    };
  },
  mounted() {
    this.cIsCollect = this.isCollect;
    this.cIsFork = this.isFork;
    this.cCollectNumber = this.collectNumber;
    this.cForkNumber = this.forkNumber;
  },
  watch: {
    isCollect(value) {
      this.cIsCollect = value;
    },
    isFork(value) {
      this.cIsFork = value;
    },
    collectNumber(value) {
      this.cCollectNumber = value;
    },
    forkNumber(value) {
      this.cForkNumber = value;
    },
  },
  methods: {
    onClick() {
      this.$emit("onClick");
    },
    onClickCollect() {
      if (!this.isCollectDisabled) {
        this.isCollectDisabled = true;
        // 执行收藏操作
        if (this.cIsCollect) {
          this.cIsCollect = false;
          this.cCollectNumber -= 1;
        } else {
          this.cIsCollect = true;
          this.cCollectNumber += 1;
        }
        this.$emit("onClickCollect", this.cIsCollect, this.cCollectNumber);
        setTimeout(() => {
          this.isCollectDisabled = false;
        }, 1000); // 延迟1秒后恢复按钮可点击状态
      }
    },
    onClickLike() {
      if (!this.isForkDisabled) {
        this.isForkDisabled = true;
        // 执行点fork项目操作
        if (this.cIsFork) {
          this.cIsFork = false;
          this.cForkNumber -= 1;
        } else {
          this.cIsFork = true;
          this.cForkNumber += 1;
        }
        this.$emit("onClickLike", this.cIsFork, this.cForkNumber);
        setTimeout(() => {
          this.isForkDisabled = false;
        }, 1000); // 延迟1秒后恢复按钮可点击状态
      }
    },
    getUnit(num) {
      let unit = "";
      const reg = /^(\-)*(\d+)\.(\d).*$/;
      if (num >= 100000000) {
        unit = (num / 100000000).toString().replace(reg, "$1$2.$3") + "亿";
      } else if (num >= 10000 && num < 100000000) {
        unit = (num / 10000).toString().replace(reg, "$1$2.$3") + "万";
      } else {
        unit = num;
      }
      return unit;
    },
  },
};
</script>
<style lang="less" scoped>
.container {
  background: #ffffff;
  width: 100%;
  height: auto;
  padding: 10px;
  border: 1px solid #e5e7eb;
  border-radius: 0.25rem;
  cursor: pointer;
}
.box {
  position: relative;
  width: 100% !important;
  height: auto;
  aspect-ratio: 3/4;
  display: flex;
  justify-content: center;
  align-items: center;
}
.imgBox {
  position: relative;
  overflow: hidden;
}
.imgBox img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.imgBox img:hover {
  transform: scale(1.1);
}
.iconBox {
  position: absolute;
  display: flex;
  width: 100%;
  height: 40px;
  background: #ffffffcc;
  align-items: center;
  z-index: 999;
  left: 0;
  bottom: 0;
}
.iconBox img {
  width: 30px;
}
.collect {
  margin: 0 10px;
}
.synopsis {
  height: 76px;
  margin-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-align: start !important;
  > span {
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #222222;
  }
}
</style>
