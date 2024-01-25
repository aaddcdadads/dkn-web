<template>
  <div class="raido-div">
    <div class="raido-title" v-if="title" :style="{width: labelWidth + 'px'}">{{ title }}:</div>
    <a-radio
      v-for="(item, index) in raidoLIst"
      :key="index"
      :checked="item.state"
      :disabled="disabled"
      v-model:value="cValue"
      @change="onChange(item, index)"
    >{{ item.value }}</a-radio>
  </div>
</template>

<script>
export default {
  name: "HmAntRadio",
  data() {
    return {
      cValue: "",
      raidoLIst: [
        {
          state: false,
          value: "raido1"
        },
        {
          state: true,
          value: "raido2"
        },
        {
          state: false,
          value: "raido3"
        }
      ]
      // checkedValue: false,
    };
  },
  props: {
    /**
     * 值
     * @model
     */
    value: {
      type: String
    },
    /**
     * 文字标题
     */
    title: {
      type: String,
      default: "raido"
    },
    /**
     * 是否禁用
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * 标题宽度
     */
    labelWidth: {
      type: Number
    },
    /**
     * 数据
     * @model
     */
    craidoLIst: {
      type: Array,
      default: function() {
        return [
          {
            state: false,
            value: "raido1"
          },
          {
            state: true,
            value: "raido2"
          },
          {
            state: false,
            value: "raido3"
          }
        ];
      }
    }
  },
  watch: {
    value(value) {
      this.cValue = value;
    },
    craidoLIst(value) {
      console.log("监听的值", value);
      this.raidoLIst = value;
    }
  },
  mounted() {
    this.cValue = this.value;
    this.raidoLIst = this.craidoLIst;
  },
  methods: {
    onChange: function(e, num) {
      //this.value=e.value;
      this.$emit("update:value", e.value);
      this.$emit("onChange", e, num);
      console.log("点击的值", e, num,this.value);
      // this.raidoLIst[num].state = !this.raidoLIst[num].state;

      this.raidoLIst.forEach((item, index) => {
        if (num === index) {
          item.state = !this.raidoLIst[num].state;
        } else {
          item.state = false;
        }
      });
      // this.checkedValue = !this.checkedValue;
      // console.log(`checked = ${e.target.checked}`);
    }
  }
};
</script>

<style scoped>
.raido-div {
  position: relative;
  display: flex;
  /* justify-content: space-evenly; */
  align-items: center;
  min-width: 100px;
  width: 100%;
}
.raido-title {
  position: relative;
  min-width: 0px;
  max-width: 500px;
  text-align: left;
  margin-right: 10px;
}
.ant-raido {
  width: 100%;
  /* min-width: 200px; */
  /* max-width: 80vw; */
}
</style>