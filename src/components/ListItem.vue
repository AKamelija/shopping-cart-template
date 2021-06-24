<template>
  <div class="cart-item">
    <img :src="require(`../assets/img/${product.image}`)" alt="image" />
    <p class="item-name">{{ product.name }}</p>
    <p class="item-price">Price: ${{ product.price.toFixed(2) }}</p>
    <button class="addBtn" @click.prevent="addItem">Add to inventory</button>
  </div>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    addItem() {
      this.$store.dispatch("add", this.product);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/components/_listItem.scss";
</style>
