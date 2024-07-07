<template>
  <div class="portfolio-home-details">
    <div class="details">
      <span v-html="homeDetails.text1" />
      <span class="name">
        <div class="first-name">
          &nbsp;{{ homeDetails.firstName }}&nbsp;
        </div>
        <div class="last-name">
          {{ homeDetails.lastName }}
        </div>
      </span>
    </div>
    <div class="secondary-details">
      {{ homeDetails.text2 }}
    </div>
    <div class="button-container">
      <div class="button">
        <a href="RahulShah.pdf" target="_blank">Download my CV</a>
      </div>
    </div>
    <socials />
  </div>
</template>

<script>
export default {
  props: {
    homeDetails: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    Socials: () => import('./Socials')
  },
  methods: {
  }
}
</script>

<style lang="scss">
.portfolio-home-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: calc(100vh - 55px);
  font-family: "Lucida Console", "Courier New", monospace;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  .details {
    display: flex;
    font-size: 1.5rem;
    .name {
      display: flex;
      .first-name {
        font-weight: 600;
        color: $color-green-default
      }
    }
  }
  .button-container {
    .button {
      display: flex;
      margin: 20px 0;
      padding: 10px;
      border: 1px solid $color-white-default;
      border-radius: 5px;
      transition: all .3s ease-in-out;
      &:hover {
        border: 1px solid $color-black-default;
        background: $color-green-default;
        a {
          color: $color-black-default;
        }
      }
      a {
        color: $color-white-default;
      }
    }
  }
}
</style>