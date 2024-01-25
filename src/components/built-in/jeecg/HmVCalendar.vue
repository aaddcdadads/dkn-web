<template>
  <Calendar class="v-calendar" :attributes="attributes" @dayclick="onDayclick">
  </Calendar>
</template>

<script>
// import { Calendar } from "ant-design-vue";
import { Calendar } from "v-calendar";
import "v-calendar/dist/style.css";

export default {
  name: "HmVCalendar",
  components: { Calendar },
  props: {
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
      default: "400px",
    },

    /**
     * 数据
     */
    attributes: {
      type: Array,
      default: function () {
        return [
          {
            key: "",
            highlight: "red",
            dot: false,
            bar: false,
            content: "gray",
            popover: {
              label: "Take Noah to basketball practice.",
              visibility: "click",
            },
            dates: new Date(),
          },
          {
            dot: true,
            bar: false,
            popover: {
              label: "Take Noah to basketball practice.",
              visibility: "hover",
            },
            dates: new Date(2022, 0, 2),
          },
          {
            dot: true,
            popover: {
              label: "周末去逛街",
            },
            dates: new Date(2022, 0, 5),
          },
        ];
      },
    },
  },
  data() {
    return {
      cWidth: "",
      cHeight: "",
    };
  },
  mounted() {
    this.cWidth = this.getCssUnit(this.width);
    this.cHeight = this.getCssUnit(this.height);
  },
  watch: {
    width(value) {
      this.cWidth = value;
    },
    height(value) {
      this.cHeight = value;
    },
  },

  computed: {
    cAttributes() {
      return [
        // Attributes for todos
        ...this.attributes.map((todo) => ({
          key: todo.key,
          dates: todo.dates,
          dot: todo.dot,
          bar: todo.bar,
          content: todo.content,
          highlight: todo.highlight,
          popover: todo.popover,
          customData: todo,
        })),
      ];
    },
  },

  methods: {
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    },
    onDayclick(e) {
      console.log(e);
      this.$emit("dayclick", e);
    },
  },
};
</script>
<style scoped>
.v-calendar {
  width: v-bind(cWidth);
  height: v-bind(cHeight);
}

.v-calendar /deep/ .vc-weeks {
  height: calc(v-bind(cHeight) - 38px);
}
</style>
