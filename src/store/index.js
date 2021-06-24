import { createStore } from "vuex";
import items from "../data/items.js";

export default createStore({
  state: {
    inventory: [],
    items: items,
  },
  getters: {
    getItems(state) {
      return state.items;
    },
    getInventory(state) {
      return state.inventory;
    },
    inventoryQuantity(state) {
      return state.inventory.length;
    },
    total(state) {
      let sum = 0;

      state.inventory.forEach((element) => {
        sum += element.price * element.quantity;
      });

      return sum;
    },
  },
  mutations: {
    addToCart(state, payload) {
      const item = state.inventory.find((el) => el.id === payload.id);

      if (item) {
        item.quantity++;
      } else {
        state.inventory.push({ ...payload, quantity: 1 });
      }
    },
    removeFromCart(state, payload) {
      const item = state.inventory.find((el) => el.id === payload.id);

      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          state.inventory = state.inventory.filter(
            (el) => el.id !== payload.id
          );
        }
      }
    },
  },
  actions: {
    add(context, payload) {
      context.commit("addToCart", payload);
    },
    remove(context, payload) {
      context.commit("removeFromCart", payload);
    },
  },
  modules: {},
});
