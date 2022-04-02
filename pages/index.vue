<template>
  <div>
    <toolbar @toolbarSwitch="switchView" />
    <banners v-if="currentPage === 'route-home'" :banner-list="homeBannerList" />
    <experience v-if="currentPage === 'route-exp'" />
    <education v-if="currentPage === 'route-edu'" />
    <about v-if="currentPage === 'route-about'" />
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  data () {
    return {
      currentPage: '',
      homeBannerList: [
        { name: 'Rahul Shah', text1: 'Text1', text2: 'Some Text 2 here', src: 'home-banner.jpg' }
      ]
    };
  },
  components: {
    Toolbar: () => import('/components/Toolbar'),
    Banners: () => import('/components/Banners'),
    Education: () => import('/components/Education'),
    Experience: () => import('/components/Experience'),
    About: () => import('/components/About')
  },
  methods: {
    switchView (val) {
      this.currentPage = val;
    }
  }
}
</script>
