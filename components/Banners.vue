<template>
  <v-carousel :show-arrows="false" hide-delimiters>
    <v-carousel-item
      v-for="(banner,index) in bannerList"
      :key="index"
      :src="getImg(banner.src)"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  props: {
    bannerList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getImg (name) {
      try {
        return require(`~/assets/img/home/${name}`);
      } catch (err) { 
        console.log(`load-${name}-image-error`)
      }
    }
  }
}
</script>

<style>

</style>