<template>
  <div>
    <hm-Lottie
    >
    </hm-Lottie>

    <hm-Lottie 
      @onComplete="onComplete"
      animationLink="https://assets7.lottiefiles.com/packages/lf20_Yc2PU8DdfX.json"
      width="400"
      height="400"
      :speed="1"
      direction="forward"
      :loopCount="3"
      :autoPlay="true"
      :pauseOnHover="false"
      :playOnHover="false"
      :delay="2"
      backgroundColor="red"
      :noMargin="true"
      :scale="1"
    >
    </hm-Lottie>
  </div>
</template>

<script>
import HmLottie from "@/components/built-in/vue-lottie/HmLottie.vue";
export default {
  components: {
    HmLottie
  },
  data() {
    return {
    };
  },
  methods: {
    onComplete() {
      console.log(`complete--`);
    }
  },
};
</script>

<style>
</style>