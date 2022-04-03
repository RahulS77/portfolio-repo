<template>
  <div class="socials-holder">
    <div class="social" v-for="(social, index) in socialsDetails" :key="index">
      <a class="link" :href="social.href" target="_blank">
        <v-icon :class="social.name.toLowerCase()">{{ social.icon }}</v-icon>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Socials',
  data () {
    return {
      socialsDetails: [
        { name:'Github', icon:'mdi-github', href: 'https://github.com/rahuls77' },
        { name: 'LinkedIn', icon: 'mdi-linkedin', href: 'https://www.linkedin.com/in/rahulshah96/'}
      ]
    };
  },
}
</script>

<style lang="scss">
  .socials-holder {
    display: flex;
    .social {
      margin: 0 5px;
      cursor: pointer;
      transition: all .3s ease-in-out;
      .v-icon {
        &:hover {
          font-size: 2rem;
        }
        &.linkedin:hover {
          color: $color-linkedin
        }
      }
    }
  }
</style>