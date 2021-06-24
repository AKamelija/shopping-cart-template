<template>
  <div class="inventory-item">
    <p class="item inventory-item-name">Name: {{ product.name }},</p>
    <p class="item inventory-item-quantity">
      Quantity: {{ product.quantity }},
    </p>
    <p class="item inventory-item-price">Price: {{ product.price }}</p>
    <button class="removeBtn" @click.prevent="removeItem">X</button>
  </div>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    removeItem() {
      this.$store.dispatch("remove", this.product);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/components/_inventoryItem.scss";
</style>
