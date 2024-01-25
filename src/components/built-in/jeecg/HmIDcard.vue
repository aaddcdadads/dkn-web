<template>
  <div class="flex-col items-start pages">
    <span class="text">{{ certificate.Name }}</span>
    <span class="text_1">{{ certificate.Sex }}</span>
    <span class="text_5">{{ certificate.Nation }}</span>
    <span class="text_2">{{ certificate.Birthday?certificate.Birthday.slice(0, 4):null }}</span>
    <span class="text_3">{{ certificate.Birthday?certificate.Birthday.slice(4, 6):null }}</span>
    <span class="text_6">{{ certificate.Birthday?certificate.Birthday.slice(6, 8):null  }}</span>
    <span class="text_4">{{ certificate.Address }}</span>
    <img :src="photo + certificate.Base64Photo" class="image" />
    <span class="text_7">{{ certificate.IDNumber }}</span>
    <span class="text_8"
      >{{ certificate.IssuedData }}-{{ certificate.ValidDate }}</span
    >
  </div>
</template>

<script>
export default {
  name: "ResidentIdentificationCard",

  props: {
    /**
     * 数据映射
     */
    certificate: {
      type: Object,
      default: function () {
        return {
          Name: "张三",
          Sex: "男",
          Nation: "汉",
          NationCode: "北京市朝阳区",
          Birthday: "20041001",
          Address: "",
          IDNumber: "212124200410012345",
          IDIssued: "10",
          IssuedData: "2015.07.29",
          ValidDate: "2025.07.29",
          PhotoName: "",
          Base64Photo: "",
        };
      },
    },
    /**
     * 宽度
     */
    width: {
      type: String,
      default: "400px",
    },
    /**
     * 高度
     */
    height: {
      type: String,
      default: "248px",
    },
  },
  data() {
    return {
      cWidth: "310px",
      cHeight: "192px",
      photo: "data:image/jpeg;base64,",
    };
  },
  watch: {
    width(value) {
      this.cWidth = this.getCssUnit(value);
    },
    height(value) {
      this.cHeight = this.getCssUnit(value);
    },
  },
  mounted() {
    this.cWidth = this.getCssUnit(this.width);
    this.cHeight = this.getCssUnit(this.height);
  },
  methods: {
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    },
  },
};
</script>
<style scoped>
.pages {
  background-color: #ffffffff;
  filter: drop-shadow(0px 2px 6px #00000014);
  border-radius: 16px;
  background-image: url("/src/components/built-in/jeecg/img/idcard_bgimg.png");
  background-position: 0% 0%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: v-bind(cWidth);
  overflow-y: hidden;
  overflow-x: hidden;
  height: v-bind(cHeight);
  min-width: 310px;
  min-height: 192px;
  position: relative;
  font-size: 0.8em;
  font-weight: 600;
}
.pages span {
  position: absolute;
}
.pages .image {
  position: absolute;
  top: 8.5%;
  right: 10%;
  width: 22.5%;
  height: 44.3%;
}
.pages .text {
  top: 7%;
  left: 18%;
}
.pages .text_1 {
  top: 21.5%;
  left: 18%;
}
.pages .text_2 {
  top: 34%;
  left: 18%;
}
.pages .text_3 {
  top: 34%;
  left: 34%;
}
.pages .text_4 {
  top: 47.5%;
  left: 18%;
  width:48.5%;
}
.pages .text_5 {
  top: 21.5%;
  left: 42%;
}
.pages .text_6 {
  top: 34%;
  left: 42%;
}
.pages .text_7 {
  top: 74%;
  left: 30%;
}
.pages .text_8 {
  bottom:5%;
  left: 28%;
}
</style>
