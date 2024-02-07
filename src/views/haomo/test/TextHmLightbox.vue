<template>
  <div>
    <button @click="show">show</button>
    <vue-easy-lightbox
      :visible="visibleRef"
      :imgs="imgsRef"
      :index="indexRef"
      @hide="onHide"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import VueEasyLightbox, { useEasyLightbox } from 'vue-easy-lightbox'

export default defineComponent({
  components: {
    VueEasyLightbox
  },
  setup() {
    const {
      // methods
      show, onHide, changeIndex,
      // refs
      visibleRef, indexRef, imgsRef
    } = useEasyLightbox({
      // src / src[]
      imgs: [
        'http://via.placeholder.com/250x150',
        'http://via.placeholder.com/300x150',
        'http://via.placeholder.com/350x150'
      ],
      // initial index
      initIndex: 0
    })

    return {
      visibleRef,
      indexRef,
      imgsRef,
      show,
      onHide
    }
  }
})
</script>