<template>
  <div class="list">
    <list-item
      v-for="product in items"
      :key="product.id"
      :product="product"
    ></list-item>
  </div>
</template>

<script>
// @ is an alias to /src
import ListItem from "@/components/ListItem.vue";

export default {
  name: "List",
  components: {
    ListItem,
  },
  computed: {
    items() {
      return this.$store.getters.getItems;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/components/_list.scss";
</style>
