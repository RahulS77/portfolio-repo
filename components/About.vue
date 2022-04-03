<template>
  <div class="portfolio-about-details">
    <v-container>
      <div class="about-details">
        <span class="tech-stacks-title">
          Skill Highlights
        </span>
        <div class="tech-stack-list">
          <div class="tech-stack" v-for="(tech, index) in techStack" :key="index">
            <v-avatar size="70">
              <img :src="getAvatar(tech.img)" :alt="tech.img">
            </v-avatar>
            <div class="tech-title">
              {{ tech.name }}
            </div>
          </div>
        </div>
      </div>
      <div class="about-details">
        <span class="tech-stacks-title">
          Contact
        </span>
        <div class="tech-stack-list">
          <div class="button-container">
            <div class="button">
              <a href="mailto:rahulshah19967@gmail.com">Mail Me</a>
            </div>
            <div class="button">
              <a href="https://t.me/talksick7">Text Me</a>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      techStack: [
        { name: "Html5", img: 'html5' },
        { name: "CSS3", img: 'css3' },
        { name: "Javascript", img: 'js' },
        { name: "MySQL", img: 'mysql' },
        { name: "NodeJS", img: 'nodejs' },
        { name: "VueJS", img: 'vuejs' },
        { name: "Vuetify", img: 'vuetify' },
        { name: "Quasar Framework", img: 'quasar' },
        { name: "Docker", img: 'docker' },
        { name: "ExpressJS", img: 'expressjs' },
        { name: "NuxtJS", img: 'nuxt' },
        { name: "Puppeteer", img: 'puppeteer' }
      ]
    };
  },
  methods: {
    getAvatar (name) {
      try {
        try {
          return require(`~/assets/img/tech-stacks/${name}.svg`);
        } catch (err) {
          return require(`~/assets/img/tech-stacks/${name}.png`);
        }
      } catch (err) {
        console.log(`fetch-${name}-img-error`);
      }
    }
  }
}
</script>

<style lang="scss">
.is-mobile {
  .portfolio-about-details {
    .container {
      .about-details {
        background: none;
        margin-bottom: 0;
        .tech-stack-list {
          .tech-stack {
            margin: 10px;
          }
        }
      }
    } 
  }
}
.portfolio-about-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: calc(100vh - 55px);
  overflow: auto;
  font-family: "Lucida Console", "Courier New", monospace;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  .container {
    overflow: auto;
    .about-details {
      background: $color-black-dark;
      border-radius: 10px;
      padding: 20px;
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
      .tech-stacks-title {
        color: $color-green-default;
      }
      .tech-stack-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 20px;
        .tech-stack {
          margin: 0 5px;
          max-width: 80px;
          &:first-child {
            margin-left: 0
          }
          &:last-child {
            margin-right: 0
          }
          .v-avatar {
            background: $color-white-default;
            border: 1px solid $color-green-default;
            padding: 5px;
          }
          .tech-title {
            font-size: 0.8rem;
          }
        }
      }
      .button-container {
        display: flex;
        .button {
          display: flex;
          margin: 20px;
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
  }
}
</style>