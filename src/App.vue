<template>
  <div id="nav">
    <router-link :class="{ active: $route.name === 'List' }" to="/"
      >List</router-link
    >
    |
    <router-link
      :class="{ active: $route.name === 'Inventory' }"
      to="/inventory"
      >Inventory({{ stock }})</router-link
    >
  </div>
  <router-view />
</template>

<script>
export default {
  computed: {
    stock() {
      return this.$store.getters.inventoryQuantity;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif, "Roboto";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  font-size: 62.5%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    font-size: 1.2rem;

    &.active {
      color: #b94287;
    }
  }
}
</style>
