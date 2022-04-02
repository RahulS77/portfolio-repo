<template>
  <div>
    Hello World
    <portfolio />
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  components: {
    Portfolio: () => import('/components/portfolio')
  }
}
</script>
