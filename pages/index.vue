<template>
  <div :class="currentPage">
    <toolbar @toolbarSwitch="switchView" />
    <home v-if="currentPage === 'route-home'" :home-details="homeData" />
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
      homeData: { 
        firstName: "Rahul", 
        lastName: "Shah", 
        text1: "Hi,&nbsp;I'm ", 
        text2: "I am a creative Frontend Developer"
      }
    };
  },
  components: {
    Toolbar: () => import('/components/Toolbar'),
    Home: () => import('/components/Home'),
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
