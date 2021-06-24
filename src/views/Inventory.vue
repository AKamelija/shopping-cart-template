<template>
  <div class="inventory">
    <inventory-item
      v-for="product in cart"
      :key="product.id"
      :product="product"
    >
    </inventory-item>
    <p v-if="cart.length === 0">Inventory is empty.</p>
    <p v-else>Total: {{ total }}</p>
  </div>
</template>

<script>
import InventoryItem from "../components/InventoryItem.vue";
export default {
  name: "Inventory",
  components: {
    InventoryItem,
  },
  computed: {
    cart() {
      return this.$store.getters.getInventory;
    },
    total() {
      return this.$store.getters.total;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/components/_inventory.scss";
</style>
