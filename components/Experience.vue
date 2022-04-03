<template>
  <div class="portfolio-experience-details">
    <v-container>
      <div class="experience-timeline">
        <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
          <v-timeline-item v-for="(expData, i) in experienceData" :key="i" :color="expData.color" fill-dot>
            <v-card :color="expData.color" dark>
              <v-card-title class="text-h6">
                {{ expData.year }}
              </v-card-title>
              <v-card-text class="timeline-text">
                <span class="timeline-job-title">{{ expData.jobTitle }}</span>
                <span class="timeline-company-name">{{ expData.companyName }}</span>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Experience',
  data () {
    return {
      experienceData: [
        { color: 'cyan', year: 'July 2017 - September 2018', companyName: 'GlobalLogic Pvt. Ltd., Noida, India', jobTitle: 'Software Engineer' },
        { color: 'green', year: 'October 2018 - December 2020', companyName: 'Primuson Pvt. Ltd., Kathmandu, Nepal', jobTitle: 'Web Developer, R&D Team' },
        { color: 'amber', year: 'January 2021 - current', companyName: 'Aistra Consultancy Co. Ltd., Phnom Penh, Cambodia', jobTitle: 'Software Engineer' },
      ]
    };
  }
}
</script>

<style lang="scss">
.is-mobile {
  .portfolio-experience-details {
    .container {
      .experience-timeline {
        background: none;
        .text-h6 {
          font-size: 1rem!important;
        }
        .timeline-job-title, .timeline-job-company {
          font-size: 0.9rem!important;
        }
      }
    }
  }
}
.portfolio-experience-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: calc(100vh - 55px);
  overflow: auto;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  .container {
    overflow: auto;
    .experience-timeline {
      background: $color-black-dark;
      border-radius: 10px;
      padding: 20px;
      .timeline-text {
        display: flex;
        flex-direction: column;
        .timeline-job-title{
          font-size: 1.3rem;
          margin-bottom: 10px;
        }
        .timeline-company-name {
          font-size: 1rem;
        }
      }
    }
  }
}
</style>