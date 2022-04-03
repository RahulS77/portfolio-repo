<template>
  <ul class="primary-toolbar">
    <template v-for="(link, index) in links">
      <li
        v-if="showTab(link.value)" 
        :key="index" 
        :class="selectedTab === link.value ? `selected ${link.value}` : 'not-selected'"
        @click="toggleTab(link)"
      >
      {{ link.title }}
      </li>    
    </template>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      selectedTab: 'route-home',
      links: [
        { title: "Home", value: "route-home" },
        { title: "Experience", value: "route-exp" },
        { title: "Education", value: "route-edu" },
        { title: "About Me", value: "route-about" }
      ]
    };
  },
  computed: {
    homeLinkToggle: function () {
      this.selectedTab === 'route-home';
    }
  },
  created () {
    this.toggleTab ({ title: "Home", value: "route-home" });
  },
  methods: {
    toggleTab (tab) {
      this.selectedTab = tab.value
      this.$emit('toolbarSwitch', tab.value)
    },
    showTab (tab) {
      if (tab === 'route-home') {
        return !(this.selectedTab === 'route-home');
      }
      return true;
    }
  }
}
</script>

<style lang="scss">
 .primary-toolbar {
  display: flex;
  justify-content: flex-end;
  text-align: center;
  list-style-type: none;
  height: 55px;
  margin: -10px 0 0 0;
  padding: 0;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  li {
    padding: 10px;
    margin: 0 5px;
    cursor: pointer;
    transition: all .3s ease-in-out;
    &.selected {
      text-transform: capitalize;
      font-size: 1.3rem;
      background: $color-green-default;
      color: $color-black-default;
      border-radius: 0 0 20px 20px;
    }
    &.not-selected:hover {
      text-transform: capitalize;
      font-size: 1.3rem;
      color: $color-green-default;
    }
  }
 }
</style>