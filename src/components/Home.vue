<template>
  <div>
    Hello! <br>
    <carousel></carousel>
  </div>
</template>

<script>
import Carousel from './HomeCarousel.vue'

export default {
  components: { Carousel },
  name: 'HelloWorld',
  metaInfo() {
      return {
          title: "Arrangement: A Band Booking Service",
          meta: [
              { name: 'description', content:  'Welcome to the home page of Arrangement, a band booking service.'},
              { property: 'og:title', content: "Arrangement - Home"},
              { property: 'og:site_name', content: 'Arrangement'}
          ]
      }
  },
  data() {
  },
  props: {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
