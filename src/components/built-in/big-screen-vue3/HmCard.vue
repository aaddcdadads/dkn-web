<template>
    <div>
      <div class="border">
        <span class="chart-card-title">{{ title }}</span>
      </div>
    </div>
</template>

<script>
export default {
  name: "HmCard",
  props: {
    /**
     * 标题
     */
    title: {
      type: String,
      default: "标题",
    },
  },
};
</script>

<style scoped>
.border {
  background: -webkit-linear-gradient(left, #4e72b8, cornflowerblue, #afdfe4);
}
.chart-card-title {
  color: aliceblue;
  box-sizing: border-box;
  display: flex;  
  padding: 7px;
  align-items: center;
}
.card {
  width: 100%;
  font-size: 16px;
  min-width: 300px;
}
</style>