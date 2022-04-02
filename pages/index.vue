<template>
  <div>
    {{ isMobile }}
    <portfolio />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'IndexPage',
  components: {
    Portfolio: () => import('/components/portfolio')
  },
  computed: {
    ...mapGetters(['isMobile'])
  }
}
</script>
