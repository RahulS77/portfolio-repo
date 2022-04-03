<template>
  <div class="div__bg" :class="currentPage">
    <toolbar @toolbarSwitch="switchView" />
    <home v-if="currentPage === 'route-home'" :home-details="homeData" />
    <experience v-if="currentPage === 'route-exp'" />
    <about v-if="currentPage === 'route-about'" />
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  data () {
    return {
      currentPage: '',
      homeData: { 
        firstName: "Rahul", 
        lastName: "Shah", 
        text1: "Hi,&nbsp;I am ", 
        text2: "I am a creative Frontend Developer"
      }
    };
  },
  components: {
    Toolbar: () => import('/components/Toolbar'),
    Home: () => import('/components/Home'),
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
