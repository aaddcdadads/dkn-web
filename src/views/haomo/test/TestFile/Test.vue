<template>
  <div>
    <Son></Son>
  </div>
</template>
<script>
import Son from '/@/components/built-in/jeecg/HmAntCardData.vue'
// import Son from './Son.vue'

export default {
  components:{
    Son
  },
  data () {
    return {
      validRange:['2021-03-01','2021-03-20']
    }
  },

}
</script>
