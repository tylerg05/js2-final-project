<template>
  <div id="home-carousel">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >

      <b-carousel-slide img-src="../assets/cover-photo-1.jpg"></b-carousel-slide>

      <b-carousel-slide img-src="../assets/cover-photo-2.jpg"></b-carousel-slide>

      <b-carousel-slide img-src="../assets/cover-photo-3.jpg"></b-carousel-slide>

      <b-carousel-slide img-src="../assets/cover-photo-4.jpg"></b-carousel-slide>

      <b-carousel-slide img-src="../assets/cover-photo-5.jpg"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <!-- <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../assets/cover-photo-4.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide> -->

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <!-- <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide> -->
    </b-carousel>
  </div>
</template>

<script>
  export default {
    name: "Carousel",
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
        console.log(slide);
      },
      onSlideEnd(slide) {
        this.sliding = false
        console.log(slide);
      }
    }
  }
</script>

<style scoped>
home-carousel {
  height: 25%;
  width: auto
}
</style>